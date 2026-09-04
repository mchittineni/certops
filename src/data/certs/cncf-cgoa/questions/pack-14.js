export const CNCF_CGOA_QUESTIONS_14 = [
  {
    id: "cncf-cgoa-326",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Argo CD ApplicationSet Controller: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates ApplicationSet to automatically deploy a standard security and monitoring stack across 50 regional Kubernetes clusters based on cluster metadata.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Dynamic, multi-cluster application generation using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Create and maintain 50 individual Application YAML manifests manually." },
      { id: 'B', text: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters." },
      { id: 'C', text: "Write a custom operator to duplicate manifests across clusters." },
      { id: 'D', text: "Deploy the applications to only one cluster and ignore the other 49." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters. The Argo CD `ApplicationSet` controller automates the generation of Argo CD Applications. Using generators (Cluster, Git Directory, List, Matrix), a single ApplicationSet template dynamically instantiates and maintains Applications across multiple clusters and environments based on metadata.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/",
    tags: ["ApplicationSet", "ApplicationSet", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-327",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Argo CD ApplicationSet Controller: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates ApplicationSet to automatically deploy a standard security and monitoring stack across 50 regional Kubernetes clusters based on cluster metadata.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Dynamic, multi-cluster application generation using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Create and maintain 50 individual Application YAML manifests manually." },
      { id: 'B', text: "Deploy the applications to only one cluster and ignore the other 49." },
      { id: 'C', text: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters." },
      { id: 'D', text: "Write a custom operator to duplicate manifests across clusters." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters. The Argo CD `ApplicationSet` controller automates the generation of Argo CD Applications. Using generators (Cluster, Git Directory, List, Matrix), a single ApplicationSet template dynamically instantiates and maintains Applications across multiple clusters and environments based on metadata.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/",
    tags: ["ApplicationSet", "ApplicationSet", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-328",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Argo CD ApplicationSet Controller: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates ApplicationSet to automatically deploy a standard security and monitoring stack across 50 regional Kubernetes clusters based on cluster metadata.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Dynamic, multi-cluster application generation using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters." },
      { id: 'B', text: "Deploy the applications to only one cluster and ignore the other 49." },
      { id: 'C', text: "Write a custom operator to duplicate manifests across clusters." },
      { id: 'D', text: "Create and maintain 50 individual Application YAML manifests manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters. The Argo CD `ApplicationSet` controller automates the generation of Argo CD Applications. Using generators (Cluster, Git Directory, List, Matrix), a single ApplicationSet template dynamically instantiates and maintains Applications across multiple clusters and environments based on metadata.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/",
    tags: ["ApplicationSet", "ApplicationSet", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-329",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Argo CD ApplicationSet Controller: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates ApplicationSet to automatically deploy a standard security and monitoring stack across 50 regional Kubernetes clusters based on cluster metadata.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Dynamic, multi-cluster application generation using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Deploy the applications to only one cluster and ignore the other 49." },
      { id: 'B', text: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters." },
      { id: 'C', text: "Create and maintain 50 individual Application YAML manifests manually." },
      { id: 'D', text: "Write a custom operator to duplicate manifests across clusters." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters. The Argo CD `ApplicationSet` controller automates the generation of Argo CD Applications. Using generators (Cluster, Git Directory, List, Matrix), a single ApplicationSet template dynamically instantiates and maintains Applications across multiple clusters and environments based on metadata.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/",
    tags: ["ApplicationSet", "ApplicationSet", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-330",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Argo CD ApplicationSet Controller: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates ApplicationSet to automatically deploy a standard security and monitoring stack across 50 regional Kubernetes clusters based on cluster metadata.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Dynamic, multi-cluster application generation using ApplicationSet generators is under consideration.",
    options: [
      { id: 'A', text: "Deploy the applications to only one cluster and ignore the other 49." },
      { id: 'B', text: "Write a custom operator to duplicate manifests across clusters." },
      { id: 'C', text: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters." },
      { id: 'D', text: "Create and maintain 50 individual Application YAML manifests manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Argo CD `ApplicationSet` resource using the `Cluster` or `Git` generator to dynamically generate Applications across target clusters. The Argo CD `ApplicationSet` controller automates the generation of Argo CD Applications. Using generators (Cluster, Git Directory, List, Matrix), a single ApplicationSet template dynamically instantiates and maintains Applications across multiple clusters and environments based on metadata.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/",
    tags: ["ApplicationSet", "ApplicationSet", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-331",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Flux Kustomization Controller and Dependencies: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Flux Architecture to ensure that cluster CRDs and foundational infrastructure (like cert-manager) are fully installed before application workloads are reconciled.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Managing manifest synchronization and ordered dependencies with Flux Kustomizations is under consideration.",
    options: [
      { id: 'A', text: "Put all CRDs and applications into a single un-ordered folder." },
      { id: 'B', text: "Install CRDs manually before starting the Flux controller." },
      { id: 'C', text: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites." },
      { id: 'D', text: "Rely on random controller reconciliation order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites. Flux separates source retrieval (`SourceController`) from reconciliation (`KustomizeController`). Defining multiple `Kustomization` resources with `dependsOn` allows platform engineers to enforce strict deployment order (e.g., CRDs -&gt; cert-manager -&gt; ingress -&gt; microservices).",
    referenceUrl: "https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies",
    tags: ["Flux Architecture", "Flux Kustomization", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-332",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Flux Kustomization Controller and Dependencies: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Flux Architecture to ensure that cluster CRDs and foundational infrastructure (like cert-manager) are fully installed before application workloads are reconciled.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Managing manifest synchronization and ordered dependencies with Flux Kustomizations is under consideration.",
    options: [
      { id: 'A', text: "Install CRDs manually before starting the Flux controller." },
      { id: 'B', text: "Put all CRDs and applications into a single un-ordered folder." },
      { id: 'C', text: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites." },
      { id: 'D', text: "Rely on random controller reconciliation order." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites. Flux separates source retrieval (`SourceController`) from reconciliation (`KustomizeController`). Defining multiple `Kustomization` resources with `dependsOn` allows platform engineers to enforce strict deployment order (e.g., CRDs -&gt; cert-manager -&gt; ingress -&gt; microservices).",
    referenceUrl: "https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies",
    tags: ["Flux Architecture", "Flux Kustomization", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-333",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Flux Kustomization Controller and Dependencies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Flux Architecture to ensure that cluster CRDs and foundational infrastructure (like cert-manager) are fully installed before application workloads are reconciled.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Managing manifest synchronization and ordered dependencies with Flux Kustomizations is under consideration.",
    options: [
      { id: 'A', text: "Rely on random controller reconciliation order." },
      { id: 'B', text: "Install CRDs manually before starting the Flux controller." },
      { id: 'C', text: "Put all CRDs and applications into a single un-ordered folder." },
      { id: 'D', text: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites. Flux separates source retrieval (`SourceController`) from reconciliation (`KustomizeController`). Defining multiple `Kustomization` resources with `dependsOn` allows platform engineers to enforce strict deployment order (e.g., CRDs -&gt; cert-manager -&gt; ingress -&gt; microservices).",
    referenceUrl: "https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies",
    tags: ["Flux Architecture", "Flux Kustomization", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-334",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Flux Kustomization Controller and Dependencies: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Flux Architecture to ensure that cluster CRDs and foundational infrastructure (like cert-manager) are fully installed before application workloads are reconciled.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Managing manifest synchronization and ordered dependencies with Flux Kustomizations is under consideration.",
    options: [
      { id: 'A', text: "Put all CRDs and applications into a single un-ordered folder." },
      { id: 'B', text: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites." },
      { id: 'C', text: "Rely on random controller reconciliation order." },
      { id: 'D', text: "Install CRDs manually before starting the Flux controller." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites. Flux separates source retrieval (`SourceController`) from reconciliation (`KustomizeController`). Defining multiple `Kustomization` resources with `dependsOn` allows platform engineers to enforce strict deployment order (e.g., CRDs -&gt; cert-manager -&gt; ingress -&gt; microservices).",
    referenceUrl: "https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies",
    tags: ["Flux Architecture", "Flux Kustomization", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-335",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Flux Kustomization Controller and Dependencies: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Flux Architecture to ensure that cluster CRDs and foundational infrastructure (like cert-manager) are fully installed before application workloads are reconciled.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Managing manifest synchronization and ordered dependencies with Flux Kustomizations is under consideration.",
    options: [
      { id: 'A', text: "Put all CRDs and applications into a single un-ordered folder." },
      { id: 'B', text: "Rely on random controller reconciliation order." },
      { id: 'C', text: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites." },
      { id: 'D', text: "Install CRDs manually before starting the Flux controller." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Flux `Kustomization` resources with explicit `dependsOn` declarations linking application syncs to infrastructure prerequisites. Flux separates source retrieval (`SourceController`) from reconciliation (`KustomizeController`). Defining multiple `Kustomization` resources with `dependsOn` allows platform engineers to enforce strict deployment order (e.g., CRDs -&gt; cert-manager -&gt; ingress -&gt; microservices).",
    referenceUrl: "https://fluxcd.io/flux/components/kustomize/kustomization/#kustomization-dependencies",
    tags: ["Flux Architecture", "Flux Kustomization", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-336",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Repository Branch Protection and PR Workflow: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Repository Governance to guarantee that no single engineer can unilaterally push unreviewed configuration changes directly into production GitOps repositories.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Protecting the single source of truth with branch protection rules and peer reviews is under consideration.",
    options: [
      { id: 'A', text: "Share the repository administrator password with all contractors." },
      { id: 'B', text: "Allow all developers to push directly to `main` via `git push origin main`." },
      { id: 'C', text: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history." },
      { id: 'D', text: "Disable pull requests and rely on verbal peer reviews." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history. Because the Git repository is the authoritative source of truth for live systems, protecting the repo is equivalent to protecting production. Enforcing branch protection rules guarantees that changes enter production only via peer-reviewed, audited, and tested pull requests.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Repository Governance", "Branch Protection", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-337",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Repository Branch Protection and PR Workflow: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Repository Governance to guarantee that no single engineer can unilaterally push unreviewed configuration changes directly into production GitOps repositories.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Protecting the single source of truth with branch protection rules and peer reviews is under consideration.",
    options: [
      { id: 'A', text: "Allow all developers to push directly to `main` via `git push origin main`." },
      { id: 'B', text: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history." },
      { id: 'C', text: "Share the repository administrator password with all contractors." },
      { id: 'D', text: "Disable pull requests and rely on verbal peer reviews." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history. Because the Git repository is the authoritative source of truth for live systems, protecting the repo is equivalent to protecting production. Enforcing branch protection rules guarantees that changes enter production only via peer-reviewed, audited, and tested pull requests.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Repository Governance", "Branch Protection", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-338",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Repository Branch Protection and PR Workflow: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Repository Governance to guarantee that no single engineer can unilaterally push unreviewed configuration changes directly into production GitOps repositories.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Protecting the single source of truth with branch protection rules and peer reviews is under consideration.",
    options: [
      { id: 'A', text: "Allow all developers to push directly to `main` via `git push origin main`." },
      { id: 'B', text: "Disable pull requests and rely on verbal peer reviews." },
      { id: 'C', text: "Share the repository administrator password with all contractors." },
      { id: 'D', text: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history. Because the Git repository is the authoritative source of truth for live systems, protecting the repo is equivalent to protecting production. Enforcing branch protection rules guarantees that changes enter production only via peer-reviewed, audited, and tested pull requests.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Repository Governance", "Branch Protection", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-339",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Repository Branch Protection and PR Workflow: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Repository Governance to guarantee that no single engineer can unilaterally push unreviewed configuration changes directly into production GitOps repositories.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Protecting the single source of truth with branch protection rules and peer reviews is under consideration.",
    options: [
      { id: 'A', text: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history." },
      { id: 'B', text: "Share the repository administrator password with all contractors." },
      { id: 'C', text: "Disable pull requests and rely on verbal peer reviews." },
      { id: 'D', text: "Allow all developers to push directly to `main` via `git push origin main`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history. Because the Git repository is the authoritative source of truth for live systems, protecting the repo is equivalent to protecting production. Enforcing branch protection rules guarantees that changes enter production only via peer-reviewed, audited, and tested pull requests.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Repository Governance", "Branch Protection", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-340",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Repository Branch Protection and PR Workflow: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Repository Governance to guarantee that no single engineer can unilaterally push unreviewed configuration changes directly into production GitOps repositories.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Protecting the single source of truth with branch protection rules and peer reviews is under consideration.",
    options: [
      { id: 'A', text: "Disable pull requests and rely on verbal peer reviews." },
      { id: 'B', text: "Allow all developers to push directly to `main` via `git push origin main`." },
      { id: 'C', text: "Share the repository administrator password with all contractors." },
      { id: 'D', text: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable GitHub/GitLab branch protection on the deployment branch requiring peer reviews, passing CI validation checks, and linear history. Because the Git repository is the authoritative source of truth for live systems, protecting the repo is equivalent to protecting production. Enforcing branch protection rules guarantees that changes enter production only via peer-reviewed, audited, and tested pull requests.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
    tags: ["Repository Governance", "Branch Protection", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-341",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Multi-Cluster GitOps Architecture Patterns: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Multi-Cluster GitOps to choose an architecture for managing 100 edge Kubernetes clusters across retail store locations with intermittent WAN connectivity.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Centralized control plane cluster vs decentralized standalone in-cluster agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single central Argo CD server and open inbound firewall ports on all 100 edge clusters." },
      { id: 'B', text: "Store all edge configurations on a local USB drive plugged into each store server." },
      { id: 'C', text: "Manage edge clusters manually via kubectl over cellular connections." },
      { id: 'D', text: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository. For edge or multi-region environments with network constraints, decentralized in-cluster agents are optimal. Each local cluster agent polls Git independently; if WAN connectivity drops, local clusters continue operating without interruption and reconcile immediately upon reconnection.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architectures/",
    tags: ["Multi-Cluster GitOps", "Multi-Cluster GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-342",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Multi-Cluster GitOps Architecture Patterns: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Multi-Cluster GitOps to choose an architecture for managing 100 edge Kubernetes clusters across retail store locations with intermittent WAN connectivity.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Centralized control plane cluster vs decentralized standalone in-cluster agents is under consideration.",
    options: [
      { id: 'A', text: "Manage edge clusters manually via kubectl over cellular connections." },
      { id: 'B', text: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository." },
      { id: 'C', text: "Deploy a single central Argo CD server and open inbound firewall ports on all 100 edge clusters." },
      { id: 'D', text: "Store all edge configurations on a local USB drive plugged into each store server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository. For edge or multi-region environments with network constraints, decentralized in-cluster agents are optimal. Each local cluster agent polls Git independently; if WAN connectivity drops, local clusters continue operating without interruption and reconcile immediately upon reconnection.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architectures/",
    tags: ["Multi-Cluster GitOps", "Multi-Cluster GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-343",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Multi-Cluster GitOps Architecture Patterns: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Multi-Cluster GitOps to choose an architecture for managing 100 edge Kubernetes clusters across retail store locations with intermittent WAN connectivity.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Centralized control plane cluster vs decentralized standalone in-cluster agents is under consideration.",
    options: [
      { id: 'A', text: "Manage edge clusters manually via kubectl over cellular connections." },
      { id: 'B', text: "Deploy a single central Argo CD server and open inbound firewall ports on all 100 edge clusters." },
      { id: 'C', text: "Store all edge configurations on a local USB drive plugged into each store server." },
      { id: 'D', text: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository. For edge or multi-region environments with network constraints, decentralized in-cluster agents are optimal. Each local cluster agent polls Git independently; if WAN connectivity drops, local clusters continue operating without interruption and reconcile immediately upon reconnection.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architectures/",
    tags: ["Multi-Cluster GitOps", "Multi-Cluster GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-344",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Multi-Cluster GitOps Architecture Patterns: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Multi-Cluster GitOps to choose an architecture for managing 100 edge Kubernetes clusters across retail store locations with intermittent WAN connectivity.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Centralized control plane cluster vs decentralized standalone in-cluster agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository." },
      { id: 'B', text: "Manage edge clusters manually via kubectl over cellular connections." },
      { id: 'C', text: "Store all edge configurations on a local USB drive plugged into each store server." },
      { id: 'D', text: "Deploy a single central Argo CD server and open inbound firewall ports on all 100 edge clusters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository. For edge or multi-region environments with network constraints, decentralized in-cluster agents are optimal. Each local cluster agent polls Git independently; if WAN connectivity drops, local clusters continue operating without interruption and reconcile immediately upon reconnection.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architectures/",
    tags: ["Multi-Cluster GitOps", "Multi-Cluster GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-345",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Multi-Cluster GitOps Architecture Patterns: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Multi-Cluster GitOps to choose an architecture for managing 100 edge Kubernetes clusters across retail store locations with intermittent WAN connectivity.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Centralized control plane cluster vs decentralized standalone in-cluster agents is under consideration.",
    options: [
      { id: 'A', text: "Manage edge clusters manually via kubectl over cellular connections." },
      { id: 'B', text: "Deploy a single central Argo CD server and open inbound firewall ports on all 100 edge clusters." },
      { id: 'C', text: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository." },
      { id: 'D', text: "Store all edge configurations on a local USB drive plugged into each store server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy decentralized standalone GitOps agents (Argo CD or Flux) inside each edge cluster pulling from a central Git repository. For edge or multi-region environments with network constraints, decentralized in-cluster agents are optimal. Each local cluster agent polls Git independently; if WAN connectivity drops, local clusters continue operating without interruption and reconcile immediately upon reconnection.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/architectures/",
    tags: ["Multi-Cluster GitOps", "Multi-Cluster GitOps", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-346",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Infrastructure as Code (Terraform/Crossplane) in GitOps: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Cloud Resource GitOps to manage external cloud infrastructure (like Amazon RDS and S3) using the same Kubernetes-native GitOps reconciliation loop as container pods.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Reconciling cloud resources (RDS, S3) declaratively using Crossplane or TF-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git." },
      { id: 'B', text: "Create cloud infrastructure by hand in the cloud web console." },
      { id: 'C', text: "Run `terraform apply` manually from developer workstations during sprint planning." },
      { id: 'D', text: "Cloud resources cannot be managed using GitOps principles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git. Crossplane and the Flux Terraform Controller bring GitOps to cloud infrastructure. By defining managed resources (databases, queues, buckets) as declarative Kubernetes Custom Resources in Git, in-cluster controllers continuously provision, manage, and reconcile cloud provider resources.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/",
    tags: ["Cloud Resource GitOps", "Crossplane GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-347",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Infrastructure as Code (Terraform/Crossplane) in GitOps: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Cloud Resource GitOps to manage external cloud infrastructure (like Amazon RDS and S3) using the same Kubernetes-native GitOps reconciliation loop as container pods.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Reconciling cloud resources (RDS, S3) declaratively using Crossplane or TF-controller is under consideration.",
    options: [
      { id: 'A', text: "Cloud resources cannot be managed using GitOps principles." },
      { id: 'B', text: "Run `terraform apply` manually from developer workstations during sprint planning." },
      { id: 'C', text: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git." },
      { id: 'D', text: "Create cloud infrastructure by hand in the cloud web console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git. Crossplane and the Flux Terraform Controller bring GitOps to cloud infrastructure. By defining managed resources (databases, queues, buckets) as declarative Kubernetes Custom Resources in Git, in-cluster controllers continuously provision, manage, and reconcile cloud provider resources.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/",
    tags: ["Cloud Resource GitOps", "Crossplane GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-348",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Infrastructure as Code (Terraform/Crossplane) in GitOps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Cloud Resource GitOps to manage external cloud infrastructure (like Amazon RDS and S3) using the same Kubernetes-native GitOps reconciliation loop as container pods.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Reconciling cloud resources (RDS, S3) declaratively using Crossplane or TF-controller is under consideration.",
    options: [
      { id: 'A', text: "Cloud resources cannot be managed using GitOps principles." },
      { id: 'B', text: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git." },
      { id: 'C', text: "Create cloud infrastructure by hand in the cloud web console." },
      { id: 'D', text: "Run `terraform apply` manually from developer workstations during sprint planning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git. Crossplane and the Flux Terraform Controller bring GitOps to cloud infrastructure. By defining managed resources (databases, queues, buckets) as declarative Kubernetes Custom Resources in Git, in-cluster controllers continuously provision, manage, and reconcile cloud provider resources.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/",
    tags: ["Cloud Resource GitOps", "Crossplane GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-349",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Infrastructure as Code (Terraform/Crossplane) in GitOps: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Cloud Resource GitOps to manage external cloud infrastructure (like Amazon RDS and S3) using the same Kubernetes-native GitOps reconciliation loop as container pods.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Reconciling cloud resources (RDS, S3) declaratively using Crossplane or TF-controller is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git." },
      { id: 'B', text: "Create cloud infrastructure by hand in the cloud web console." },
      { id: 'C', text: "Run `terraform apply` manually from developer workstations during sprint planning." },
      { id: 'D', text: "Cloud resources cannot be managed using GitOps principles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git. Crossplane and the Flux Terraform Controller bring GitOps to cloud infrastructure. By defining managed resources (databases, queues, buckets) as declarative Kubernetes Custom Resources in Git, in-cluster controllers continuously provision, manage, and reconcile cloud provider resources.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/",
    tags: ["Cloud Resource GitOps", "Crossplane GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-350",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Infrastructure as Code (Terraform/Crossplane) in GitOps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Cloud Resource GitOps to manage external cloud infrastructure (like Amazon RDS and S3) using the same Kubernetes-native GitOps reconciliation loop as container pods.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Reconciling cloud resources (RDS, S3) declaratively using Crossplane or TF-controller is under consideration.",
    options: [
      { id: 'A', text: "Create cloud infrastructure by hand in the cloud web console." },
      { id: 'B', text: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git." },
      { id: 'C', text: "Cloud resources cannot be managed using GitOps principles." },
      { id: 'D', text: "Run `terraform apply` manually from developer workstations during sprint planning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a cloud-native control plane like Crossplane or Flux TF-controller to reconcile declarative cloud resource CRDs from Git. Crossplane and the Flux Terraform Controller bring GitOps to cloud infrastructure. By defining managed resources (databases, queues, buckets) as declarative Kubernetes Custom Resources in Git, in-cluster controllers continuously provision, manage, and reconcile cloud provider resources.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/",
    tags: ["Cloud Resource GitOps", "Crossplane GitOps", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_14;
