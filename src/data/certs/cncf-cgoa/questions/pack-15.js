export const CNCF_CGOA_QUESTIONS_15 = [
  {
    id: "cncf-cgoa-351",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Release Promotion Strategies: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Release Promotion to promote a newly built container image tag from the development environment to staging and production safely.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Promoting releases between dev, staging, and prod via Git pull requests or commit updates is under consideration.",
    options: [
      { id: 'A', text: "Manually edit running pods in production with `kubectl set image`." },
      { id: 'B', text: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges." },
      { id: 'C', text: "Use mutable `:latest` image tags across all environments." },
      { id: 'D', text: "Deploy the new image tag directly to production without testing in dev or staging." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges. In GitOps, environment promotion is represented as Git commits or pull requests. When a release passes verification in dev, an automated bot or engineer submits a PR updating the image tag in the staging overlay, ensuring every environment promotion is tracked in Git history.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#promotion-between-environments",
    tags: ["Release Promotion", "Release Promotion", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-352",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Release Promotion Strategies: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Release Promotion to promote a newly built container image tag from the development environment to staging and production safely.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Promoting releases between dev, staging, and prod via Git pull requests or commit updates is under consideration.",
    options: [
      { id: 'A', text: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges." },
      { id: 'B', text: "Manually edit running pods in production with `kubectl set image`." },
      { id: 'C', text: "Deploy the new image tag directly to production without testing in dev or staging." },
      { id: 'D', text: "Use mutable `:latest` image tags across all environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges. In GitOps, environment promotion is represented as Git commits or pull requests. When a release passes verification in dev, an automated bot or engineer submits a PR updating the image tag in the staging overlay, ensuring every environment promotion is tracked in Git history.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#promotion-between-environments",
    tags: ["Release Promotion", "Release Promotion", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-353",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Release Promotion Strategies: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Release Promotion to promote a newly built container image tag from the development environment to staging and production safely.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Promoting releases between dev, staging, and prod via Git pull requests or commit updates is under consideration.",
    options: [
      { id: 'A', text: "Use mutable `:latest` image tags across all environments." },
      { id: 'B', text: "Manually edit running pods in production with `kubectl set image`." },
      { id: 'C', text: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges." },
      { id: 'D', text: "Deploy the new image tag directly to production without testing in dev or staging." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges. In GitOps, environment promotion is represented as Git commits or pull requests. When a release passes verification in dev, an automated bot or engineer submits a PR updating the image tag in the staging overlay, ensuring every environment promotion is tracked in Git history.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#promotion-between-environments",
    tags: ["Release Promotion", "Release Promotion", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-354",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Release Promotion Strategies: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Release Promotion to promote a newly built container image tag from the development environment to staging and production safely.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Promoting releases between dev, staging, and prod via Git pull requests or commit updates is under consideration.",
    options: [
      { id: 'A', text: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges." },
      { id: 'B', text: "Manually edit running pods in production with `kubectl set image`." },
      { id: 'C', text: "Deploy the new image tag directly to production without testing in dev or staging." },
      { id: 'D', text: "Use mutable `:latest` image tags across all environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges. In GitOps, environment promotion is represented as Git commits or pull requests. When a release passes verification in dev, an automated bot or engineer submits a PR updating the image tag in the staging overlay, ensuring every environment promotion is tracked in Git history.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#promotion-between-environments",
    tags: ["Release Promotion", "Release Promotion", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-355",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "GitOps Release Promotion Strategies: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Release Promotion to promote a newly built container image tag from the development environment to staging and production safely.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Promoting releases between dev, staging, and prod via Git pull requests or commit updates is under consideration.",
    options: [
      { id: 'A', text: "Use mutable `:latest` image tags across all environments." },
      { id: 'B', text: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges." },
      { id: 'C', text: "Deploy the new image tag directly to production without testing in dev or staging." },
      { id: 'D', text: "Manually edit running pods in production with `kubectl set image`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Update the image tag in the environment-specific overlay file in Git via automated pull requests, promoting across environments via PR merges. In GitOps, environment promotion is represented as Git commits or pull requests. When a release passes verification in dev, an automated bot or engineer submits a PR updating the image tag in the staging overlay, ensuring every environment promotion is tracked in Git history.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#promotion-between-environments",
    tags: ["Release Promotion", "Release Promotion", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-356",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Automated Pull Request Previews (Ephemeral Environments): Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Preview Environments to spin up a complete ephemeral preview environment for every open pull request and tear it down automatically when the PR is closed.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Spawning ephemeral preview environments for pull requests using GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Manually provision a new physical server for each developer pull request." },
      { id: 'B', text: "Test all pull requests directly in the shared staging environment simultaneously." },
      { id: 'C', text: "Disable pull request testing to save cloud resources." },
      { id: 'D', text: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs. Argo CD ApplicationSet includes a Pull Request generator that queries GitHub/GitLab for open pull requests. It automatically provisions an ephemeral environment (isolated namespace, deployed apps, unique URL) for each PR and tears it down upon PR merge or closure.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/#pull-request-generator",
    tags: ["Preview Environments", "Preview Environments", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-357",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Automated Pull Request Previews (Ephemeral Environments): High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Preview Environments to spin up a complete ephemeral preview environment for every open pull request and tear it down automatically when the PR is closed.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Spawning ephemeral preview environments for pull requests using GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Test all pull requests directly in the shared staging environment simultaneously." },
      { id: 'B', text: "Disable pull request testing to save cloud resources." },
      { id: 'C', text: "Manually provision a new physical server for each developer pull request." },
      { id: 'D', text: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs. Argo CD ApplicationSet includes a Pull Request generator that queries GitHub/GitLab for open pull requests. It automatically provisions an ephemeral environment (isolated namespace, deployed apps, unique URL) for each PR and tears it down upon PR merge or closure.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/#pull-request-generator",
    tags: ["Preview Environments", "Preview Environments", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-358",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Automated Pull Request Previews (Ephemeral Environments): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Preview Environments to spin up a complete ephemeral preview environment for every open pull request and tear it down automatically when the PR is closed.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Spawning ephemeral preview environments for pull requests using GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Test all pull requests directly in the shared staging environment simultaneously." },
      { id: 'B', text: "Manually provision a new physical server for each developer pull request." },
      { id: 'C', text: "Disable pull request testing to save cloud resources." },
      { id: 'D', text: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs. Argo CD ApplicationSet includes a Pull Request generator that queries GitHub/GitLab for open pull requests. It automatically provisions an ephemeral environment (isolated namespace, deployed apps, unique URL) for each PR and tears it down upon PR merge or closure.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/#pull-request-generator",
    tags: ["Preview Environments", "Preview Environments", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-359",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Automated Pull Request Previews (Ephemeral Environments): Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Preview Environments to spin up a complete ephemeral preview environment for every open pull request and tear it down automatically when the PR is closed.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Spawning ephemeral preview environments for pull requests using GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Test all pull requests directly in the shared staging environment simultaneously." },
      { id: 'B', text: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs." },
      { id: 'C', text: "Disable pull request testing to save cloud resources." },
      { id: 'D', text: "Manually provision a new physical server for each developer pull request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs. Argo CD ApplicationSet includes a Pull Request generator that queries GitHub/GitLab for open pull requests. It automatically provisions an ephemeral environment (isolated namespace, deployed apps, unique URL) for each PR and tears it down upon PR merge or closure.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/#pull-request-generator",
    tags: ["Preview Environments", "Preview Environments", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-360",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Automated Pull Request Previews (Ephemeral Environments): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Preview Environments to spin up a complete ephemeral preview environment for every open pull request and tear it down automatically when the PR is closed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Spawning ephemeral preview environments for pull requests using GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Test all pull requests directly in the shared staging environment simultaneously." },
      { id: 'B', text: "Disable pull request testing to save cloud resources." },
      { id: 'C', text: "Manually provision a new physical server for each developer pull request." },
      { id: 'D', text: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Argo CD ApplicationSet with the Pull Request generator to dynamically create ephemeral namespaces and applications for active PRs. Argo CD ApplicationSet includes a Pull Request generator that queries GitHub/GitLab for open pull requests. It automatically provisions an ephemeral environment (isolated namespace, deployed apps, unique URL) for each PR and tears it down upon PR merge or closure.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/applicationset/#pull-request-generator",
    tags: ["Preview Environments", "Preview Environments", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-361",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Git Submodules vs Helm Dependencies in GitOps Repositories: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Dependency Management to share common manifest templates across 20 configuration repositories without encountering Git submodule pointer desynchronization.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Managing shared configuration libraries via submodules vs versioned package registries is under consideration.",
    options: [
      { id: 'A', text: "Host shared files on an unauthenticated FTP server." },
      { id: 'B', text: "Copy-paste common manifests across all 20 repositories." },
      { id: 'C', text: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules." },
      { id: 'D', text: "Use Git submodules and require developers to manually run git submodule update." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules. Git submodules introduce operational complexity, detached head states, and synchronization friction in automated CI/CD pipelines. Packaging shared configurations as versioned Helm charts or OCI artifacts provides clean semantic versioning and reliable automated fetching.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Dependency Management", "Helm OCI Registries", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-362",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Git Submodules vs Helm Dependencies in GitOps Repositories: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Dependency Management to share common manifest templates across 20 configuration repositories without encountering Git submodule pointer desynchronization.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Managing shared configuration libraries via submodules vs versioned package registries is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste common manifests across all 20 repositories." },
      { id: 'B', text: "Host shared files on an unauthenticated FTP server." },
      { id: 'C', text: "Use Git submodules and require developers to manually run git submodule update." },
      { id: 'D', text: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules. Git submodules introduce operational complexity, detached head states, and synchronization friction in automated CI/CD pipelines. Packaging shared configurations as versioned Helm charts or OCI artifacts provides clean semantic versioning and reliable automated fetching.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Dependency Management", "Helm OCI Registries", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-363",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Git Submodules vs Helm Dependencies in GitOps Repositories: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Dependency Management to share common manifest templates across 20 configuration repositories without encountering Git submodule pointer desynchronization.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Managing shared configuration libraries via submodules vs versioned package registries is under consideration.",
    options: [
      { id: 'A', text: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules." },
      { id: 'B', text: "Host shared files on an unauthenticated FTP server." },
      { id: 'C', text: "Use Git submodules and require developers to manually run git submodule update." },
      { id: 'D', text: "Copy-paste common manifests across all 20 repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules. Git submodules introduce operational complexity, detached head states, and synchronization friction in automated CI/CD pipelines. Packaging shared configurations as versioned Helm charts or OCI artifacts provides clean semantic versioning and reliable automated fetching.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Dependency Management", "Helm OCI Registries", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-364",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Git Submodules vs Helm Dependencies in GitOps Repositories: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Dependency Management to share common manifest templates across 20 configuration repositories without encountering Git submodule pointer desynchronization.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Managing shared configuration libraries via submodules vs versioned package registries is under consideration.",
    options: [
      { id: 'A', text: "Use Git submodules and require developers to manually run git submodule update." },
      { id: 'B', text: "Copy-paste common manifests across all 20 repositories." },
      { id: 'C', text: "Host shared files on an unauthenticated FTP server." },
      { id: 'D', text: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules. Git submodules introduce operational complexity, detached head states, and synchronization friction in automated CI/CD pipelines. Packaging shared configurations as versioned Helm charts or OCI artifacts provides clean semantic versioning and reliable automated fetching.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Dependency Management", "Helm OCI Registries", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-365",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Git Submodules vs Helm Dependencies in GitOps Repositories: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Dependency Management to share common manifest templates across 20 configuration repositories without encountering Git submodule pointer desynchronization.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Managing shared configuration libraries via submodules vs versioned package registries is under consideration.",
    options: [
      { id: 'A', text: "Copy-paste common manifests across all 20 repositories." },
      { id: 'B', text: "Use Git submodules and require developers to manually run git submodule update." },
      { id: 'C', text: "Host shared files on an unauthenticated FTP server." },
      { id: 'D', text: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Package common templates as versioned OCI artifacts or Helm charts hosted in a container registry rather than using Git submodules. Git submodules introduce operational complexity, detached head states, and synchronization friction in automated CI/CD pipelines. Packaging shared configurations as versioned Helm charts or OCI artifacts provides clean semantic versioning and reliable automated fetching.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Dependency Management", "Helm OCI Registries", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-366",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Managing CRDs in GitOps Pipelines: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates CRD Lifecycle to prevent race conditions where custom resources (e.g., `PrometheusRule`) fail to deploy because their CRD has not finished registering.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Handling CustomResourceDefinition installation order and OpenAPI validation schemas is under consideration.",
    options: [
      { id: 'A', text: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations)." },
      { id: 'B', text: "Put CRDs and Custom Resources in the same folder and hope Kubernetes registers them in time." },
      { id: 'C', text: "Instruct developers to re-run the sync manually when it fails." },
      { id: 'D', text: "Avoid using Custom Resources in Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations). Kubernetes requires CRDs to be registered and established in the API server before Custom Resources using that schema can be created. GitOps engines provide sync phases (Argo CD `SyncWave` or `PreSync` hook) or separate dependency controllers (Flux) to establish CRDs first.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-phases/",
    tags: ["CRD Lifecycle", "CRD Sync Waves", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-367",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Managing CRDs in GitOps Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates CRD Lifecycle to prevent race conditions where custom resources (e.g., `PrometheusRule`) fail to deploy because their CRD has not finished registering.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Handling CustomResourceDefinition installation order and OpenAPI validation schemas is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to re-run the sync manually when it fails." },
      { id: 'B', text: "Put CRDs and Custom Resources in the same folder and hope Kubernetes registers them in time." },
      { id: 'C', text: "Avoid using Custom Resources in Kubernetes." },
      { id: 'D', text: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations). Kubernetes requires CRDs to be registered and established in the API server before Custom Resources using that schema can be created. GitOps engines provide sync phases (Argo CD `SyncWave` or `PreSync` hook) or separate dependency controllers (Flux) to establish CRDs first.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-phases/",
    tags: ["CRD Lifecycle", "CRD Sync Waves", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-368",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Managing CRDs in GitOps Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates CRD Lifecycle to prevent race conditions where custom resources (e.g., `PrometheusRule`) fail to deploy because their CRD has not finished registering.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Handling CustomResourceDefinition installation order and OpenAPI validation schemas is under consideration.",
    options: [
      { id: 'A', text: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations)." },
      { id: 'B', text: "Avoid using Custom Resources in Kubernetes." },
      { id: 'C', text: "Put CRDs and Custom Resources in the same folder and hope Kubernetes registers them in time." },
      { id: 'D', text: "Instruct developers to re-run the sync manually when it fails." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations). Kubernetes requires CRDs to be registered and established in the API server before Custom Resources using that schema can be created. GitOps engines provide sync phases (Argo CD `SyncWave` or `PreSync` hook) or separate dependency controllers (Flux) to establish CRDs first.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-phases/",
    tags: ["CRD Lifecycle", "CRD Sync Waves", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-369",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Managing CRDs in GitOps Pipelines: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates CRD Lifecycle to prevent race conditions where custom resources (e.g., `PrometheusRule`) fail to deploy because their CRD has not finished registering.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Handling CustomResourceDefinition installation order and OpenAPI validation schemas is under consideration.",
    options: [
      { id: 'A', text: "Avoid using Custom Resources in Kubernetes." },
      { id: 'B', text: "Instruct developers to re-run the sync manually when it fails." },
      { id: 'C', text: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations)." },
      { id: 'D', text: "Put CRDs and Custom Resources in the same folder and hope Kubernetes registers them in time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations). Kubernetes requires CRDs to be registered and established in the API server before Custom Resources using that schema can be created. GitOps engines provide sync phases (Argo CD `SyncWave` or `PreSync` hook) or separate dependency controllers (Flux) to establish CRDs first.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-phases/",
    tags: ["CRD Lifecycle", "CRD Sync Waves", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-370",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Managing CRDs in GitOps Pipelines: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates CRD Lifecycle to prevent race conditions where custom resources (e.g., `PrometheusRule`) fail to deploy because their CRD has not finished registering.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Handling CustomResourceDefinition installation order and OpenAPI validation schemas is under consideration.",
    options: [
      { id: 'A', text: "Put CRDs and Custom Resources in the same folder and hope Kubernetes registers them in time." },
      { id: 'B', text: "Avoid using Custom Resources in Kubernetes." },
      { id: 'C', text: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations)." },
      { id: 'D', text: "Instruct developers to re-run the sync manually when it fails." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Separate CRD installation into a prerequisite sync phase (e.g., Argo CD PreSync hooks or Flux dedicated CRD Kustomizations). Kubernetes requires CRDs to be registered and established in the API server before Custom Resources using that schema can be created. GitOps engines provide sync phases (Argo CD `SyncWave` or `PreSync` hook) or separate dependency controllers (Flux) to establish CRDs first.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-phases/",
    tags: ["CRD Lifecycle", "CRD Sync Waves", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-371",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Disaster Recovery with GitOps: Cluster Rebuilding: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Disaster Recovery to recover from a catastrophic loss of a production Kubernetes cluster in an entire cloud region in under one hour.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Rebuilding complete Kubernetes clusters from scratch using Git as the source of truth is under consideration.",
    options: [
      { id: 'A', text: "Accept that all customer application workloads are permanently lost." },
      { id: 'B', text: "Attempt to extract raw files from crashed worker node hard drives." },
      { id: 'C', text: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically." },
      { id: 'D', text: "Manually re-author manifests from scratch for 200 microservices." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically. GitOps provides superior disaster recovery (DR). Because the entire desired state of infrastructure, configurations, and applications is declared in Git, recovering from a cluster catastrophe only requires spinning up an empty cluster and bootstrapping the GitOps controller.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Disaster Recovery", "GitOps Disaster Recovery", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-372",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Disaster Recovery with GitOps: Cluster Rebuilding: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Disaster Recovery to recover from a catastrophic loss of a production Kubernetes cluster in an entire cloud region in under one hour.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Rebuilding complete Kubernetes clusters from scratch using Git as the source of truth is under consideration.",
    options: [
      { id: 'A', text: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically." },
      { id: 'B', text: "Attempt to extract raw files from crashed worker node hard drives." },
      { id: 'C', text: "Manually re-author manifests from scratch for 200 microservices." },
      { id: 'D', text: "Accept that all customer application workloads are permanently lost." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically. GitOps provides superior disaster recovery (DR). Because the entire desired state of infrastructure, configurations, and applications is declared in Git, recovering from a cluster catastrophe only requires spinning up an empty cluster and bootstrapping the GitOps controller.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Disaster Recovery", "GitOps Disaster Recovery", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-373",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Disaster Recovery with GitOps: Cluster Rebuilding: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Disaster Recovery to recover from a catastrophic loss of a production Kubernetes cluster in an entire cloud region in under one hour.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Rebuilding complete Kubernetes clusters from scratch using Git as the source of truth is under consideration.",
    options: [
      { id: 'A', text: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically." },
      { id: 'B', text: "Accept that all customer application workloads are permanently lost." },
      { id: 'C', text: "Manually re-author manifests from scratch for 200 microservices." },
      { id: 'D', text: "Attempt to extract raw files from crashed worker node hard drives." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically. GitOps provides superior disaster recovery (DR). Because the entire desired state of infrastructure, configurations, and applications is declared in Git, recovering from a cluster catastrophe only requires spinning up an empty cluster and bootstrapping the GitOps controller.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Disaster Recovery", "GitOps Disaster Recovery", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-374",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Disaster Recovery with GitOps: Cluster Rebuilding: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Disaster Recovery to recover from a catastrophic loss of a production Kubernetes cluster in an entire cloud region in under one hour.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Rebuilding complete Kubernetes clusters from scratch using Git as the source of truth is under consideration.",
    options: [
      { id: 'A', text: "Manually re-author manifests from scratch for 200 microservices." },
      { id: 'B', text: "Attempt to extract raw files from crashed worker node hard drives." },
      { id: 'C', text: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically." },
      { id: 'D', text: "Accept that all customer application workloads are permanently lost." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically. GitOps provides superior disaster recovery (DR). Because the entire desired state of infrastructure, configurations, and applications is declared in Git, recovering from a cluster catastrophe only requires spinning up an empty cluster and bootstrapping the GitOps controller.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Disaster Recovery", "GitOps Disaster Recovery", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-375",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Disaster Recovery with GitOps: Cluster Rebuilding: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Disaster Recovery to recover from a catastrophic loss of a production Kubernetes cluster in an entire cloud region in under one hour.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Rebuilding complete Kubernetes clusters from scratch using Git as the source of truth is under consideration.",
    options: [
      { id: 'A', text: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically." },
      { id: 'B', text: "Accept that all customer application workloads are permanently lost." },
      { id: 'C', text: "Attempt to extract raw files from crashed worker node hard drives." },
      { id: 'D', text: "Manually re-author manifests from scratch for 200 microservices." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision a new cluster with Terraform and point the GitOps controller at the existing Git repository to recreate all workloads automatically. GitOps provides superior disaster recovery (DR). Because the entire desired state of infrastructure, configurations, and applications is declared in Git, recovering from a cluster catastrophe only requires spinning up an empty cluster and bootstrapping the GitOps controller.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Disaster Recovery", "GitOps Disaster Recovery", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_15;
