export const CNCF_CGOA_QUESTIONS_3 = [
  {
    id: "cncf-cgoa-51",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux v2 source-controller and kustomize-controller lifecycle: Operational Strategy (Part 51)",
    scenario: "A multinational fintech banking platform is evaluating GitOps Certified Associate practices specifically regarding Flux v2 source-controller and kustomize-controller lifecycle. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #51.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Flux v2 source-controller and kustomize-controller lifecycle in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for flux v2 source-controller and kustomize-controller lifecycle utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for flux v2 source-controller and kustomize-controller lifecycle provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-52",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS encrypted files with age and cloud KMS keys: Operational Strategy (Part 52)",
    scenario: "A healthcare telemedicine network is evaluating GitOps Certified Associate practices specifically regarding Mozilla SOPS encrypted files with age and cloud KMS keys. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #52.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Mozilla SOPS encrypted files with age and cloud KMS keys in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for mozilla sops encrypted files with age and cloud kms keys utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for mozilla sops encrypted files with age and cloud kms keys provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-53",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single source of truth for desired infrastructure and applications: Operational Strategy (Part 53)",
    scenario: "A high-throughput e-commerce retailer is evaluating GitOps Certified Associate practices specifically regarding Single source of truth for desired infrastructure and applications. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #53.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Single source of truth for desired infrastructure and applications in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for single source of truth for desired infrastructure and applications utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for single source of truth for desired infrastructure and applications provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-54",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm chart packaging, release pinning, and value overrides: Operational Strategy (Part 54)",
    scenario: "A global streaming entertainment platform is evaluating GitOps Certified Associate practices specifically regarding Helm chart packaging, release pinning, and value overrides. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #54.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Helm chart packaging, release pinning, and value overrides in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for helm chart packaging, release pinning, and value overrides utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for helm chart packaging, release pinning, and value overrides provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-55",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automated container image update automation with Flux and Argo: Operational Strategy (Part 55)",
    scenario: "An algorithmic trading exchange is evaluating GitOps Certified Associate practices specifically regarding Automated container image update automation with Flux and Argo. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #55.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Automated container image update automation with Flux and Argo in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for automated container image update automation with flux and argo utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated container image update automation with flux and argo provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-56",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Enforcing cryptographic commit signing with GPG or SSH keys: Operational Strategy (Part 56)",
    scenario: "A logistics and supply chain optimization service is evaluating GitOps Certified Associate practices specifically regarding Enforcing cryptographic commit signing with GPG or SSH keys. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #56.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Enforcing cryptographic commit signing with GPG or SSH keys in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Deploy native automation for enforcing cryptographic commit signing with gpg or ssh keys utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for enforcing cryptographic commit signing with gpg or ssh keys provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-57",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability, rollback capabilities, and git commit history: Operational Strategy (Part 57)",
    scenario: "An IoT industrial telematics infrastructure is evaluating GitOps Certified Associate practices specifically regarding Auditability, rollback capabilities, and git commit history. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #57.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Auditability, rollback capabilities, and git commit history in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for auditability, rollback capabilities, and git commit history utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for auditability, rollback capabilities, and git commit history provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-58",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Structuring infrastructure repositories alongside application repos: Operational Strategy (Part 58)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating GitOps Certified Associate practices specifically regarding Structuring infrastructure repositories alongside application repos. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #58.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Structuring infrastructure repositories alongside application repos in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Deploy native automation for structuring infrastructure repositories alongside application repos utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for structuring infrastructure repositories alongside application repos provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-59",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Synchronization options auto-sync, prune, and sync waves: Operational Strategy (Part 59)",
    scenario: "A public sector aerospace engineering department is evaluating GitOps Certified Associate practices specifically regarding Synchronization options auto-sync, prune, and sync waves. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #59.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Synchronization options auto-sync, prune, and sync waves in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Deploy native automation for synchronization options auto-sync, prune, and sync waves utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for synchronization options auto-sync, prune, and sync waves provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-60",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Role-Based Access Control RBAC and single sign-on in GitOps engines: Operational Strategy (Part 60)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating GitOps Certified Associate practices specifically regarding Role-Based Access Control RBAC and single sign-on in GitOps engines. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #60.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Role-Based Access Control RBAC and single sign-on in GitOps engines in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for role-based access control rbac and single sign-on in gitops engines utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for role-based access control rbac and single sign-on in gitops engines provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-61",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Four OpenGitOps principles declarative, versioned, pulled, reconciled: Operational Strategy (Part 61)",
    scenario: "A digital media publishing network is evaluating GitOps Certified Associate practices specifically regarding Four OpenGitOps principles declarative, versioned, pulled, reconciled. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #61.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Four OpenGitOps principles declarative, versioned, pulled, reconciled in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for four opengitops principles declarative, versioned, pulled, reconciled utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for four opengitops principles declarative, versioned, pulled, reconciled provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-62",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Monorepo vs polyrepo strategies for application and config repositories: Operational Strategy (Part 62)",
    scenario: "A pharmaceutical clinical trial data service is evaluating GitOps Certified Associate practices specifically regarding Monorepo vs polyrepo strategies for application and config repositories. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #62.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Monorepo vs polyrepo strategies for application and config repositories in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Deploy native automation for monorepo vs polyrepo strategies for application and config repositories utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for monorepo vs polyrepo strategies for application and config repositories provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-63",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD architecture server, repo server, and application controller: Operational Strategy (Part 63)",
    scenario: "A renewable energy smart-grid operator is evaluating GitOps Certified Associate practices specifically regarding Argo CD architecture server, repo server, and application controller. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #63.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Argo CD architecture server, repo server, and application controller in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Deploy native automation for argo cd architecture server, repo server, and application controller utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for argo cd architecture server, repo server, and application controller provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-64",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Bitnami Sealed Secrets asymmetric encryption workflow: Operational Strategy (Part 64)",
    scenario: "A mobile gaming backend architecture is evaluating GitOps Certified Associate practices specifically regarding Bitnami Sealed Secrets asymmetric encryption workflow. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #64.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Bitnami Sealed Secrets asymmetric encryption workflow in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for bitnami sealed secrets asymmetric encryption workflow utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for bitnami sealed secrets asymmetric encryption workflow provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-65",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push vs Pull delivery models and cluster security implications: Operational Strategy (Part 65)",
    scenario: "A ride-sharing dispatch system is evaluating GitOps Certified Associate practices specifically regarding Push vs Pull delivery models and cluster security implications. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #65.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Push vs Pull delivery models and cluster security implications in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Deploy native automation for push vs pull delivery models and cluster security implications utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for push vs pull delivery models and cluster security implications provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-66",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Branch-based vs directory-based environment separation: Operational Strategy (Part 66)",
    scenario: "An insurance claims processing engine is evaluating GitOps Certified Associate practices specifically regarding Branch-based vs directory-based environment separation. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #66.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Branch-based vs directory-based environment separation in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Deploy native automation for branch-based vs directory-based environment separation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for branch-based vs directory-based environment separation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-67",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Argo CD Application and App-of-Apps architectural patterns: Operational Strategy (Part 67)",
    scenario: "A commercial airline reservation service is evaluating GitOps Certified Associate practices specifically regarding Argo CD Application and App-of-Apps architectural patterns. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #67.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Argo CD Application and App-of-Apps architectural patterns in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Deploy native automation for argo cd application and app-of-apps architectural patterns utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for argo cd application and app-of-apps architectural patterns provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-68",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "External Secrets Operator integrating with cloud secret stores: Operational Strategy (Part 68)",
    scenario: "A cybersecurity threat intelligence agency is evaluating GitOps Certified Associate practices specifically regarding External Secrets Operator integrating with cloud secret stores. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #68.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: External Secrets Operator integrating with cloud secret stores in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for external secrets operator integrating with cloud secret stores utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for external secrets operator integrating with cloud secret stores provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-69",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous drift detection and automated self-healing: Operational Strategy (Part 69)",
    scenario: "A real estate property management portal is evaluating GitOps Certified Associate practices specifically regarding Continuous drift detection and automated self-healing. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #69.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Continuous drift detection and automated self-healing in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for continuous drift detection and automated self-healing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for continuous drift detection and automated self-healing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-70",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Kustomize overlays managing multi-environment variance: Operational Strategy (Part 70)",
    scenario: "An autonomous robotics manufacturing facility is evaluating GitOps Certified Associate practices specifically regarding Kustomize overlays managing multi-environment variance. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #70.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Kustomize overlays managing multi-environment variance in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for kustomize overlays managing multi-environment variance utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kustomize overlays managing multi-environment variance provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-71",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Flux v2 source-controller and kustomize-controller lifecycle: Operational Strategy (Part 71)",
    scenario: "A higher education student information system is evaluating GitOps Certified Associate practices specifically regarding Flux v2 source-controller and kustomize-controller lifecycle. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #71.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Flux v2 source-controller and kustomize-controller lifecycle in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for flux v2 source-controller and kustomize-controller lifecycle utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for flux v2 source-controller and kustomize-controller lifecycle provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-72",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d4",
    domainName: "GitOps Security and Secret Management",
    title: "Mozilla SOPS encrypted files with age and cloud KMS keys: Operational Strategy (Part 72)",
    scenario: "A global hotel hospitality reservation platform is evaluating GitOps Certified Associate practices specifically regarding Mozilla SOPS encrypted files with age and cloud KMS keys. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #72.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Mozilla SOPS encrypted files with age and cloud KMS keys in GitOps Security and Secret Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for mozilla sops encrypted files with age and cloud kms keys utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for mozilla sops encrypted files with age and cloud kms keys provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-73",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single source of truth for desired infrastructure and applications: Operational Strategy (Part 73)",
    scenario: "A digital payments settlement processor is evaluating GitOps Certified Associate practices specifically regarding Single source of truth for desired infrastructure and applications. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #73.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Single source of truth for desired infrastructure and applications in GitOps Terminology and Principles)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for single source of truth for desired infrastructure and applications utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for single source of truth for desired infrastructure and applications provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-74",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d2",
    domainName: "GitOps Architecture and Repositories",
    title: "Helm chart packaging, release pinning, and value overrides: Operational Strategy (Part 74)",
    scenario: "A genomics sequencing data pipeline is evaluating GitOps Certified Associate practices specifically regarding Helm chart packaging, release pinning, and value overrides. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #74.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Helm chart packaging, release pinning, and value overrides in GitOps Architecture and Repositories)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for helm chart packaging, release pinning, and value overrides utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for helm chart packaging, release pinning, and value overrides provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  },
  {
    id: "cncf-cgoa-75",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d3",
    domainName: "GitOps Tools and Workflows",
    title: "Automated container image update automation with Flux and Argo: Operational Strategy (Part 75)",
    scenario: "A cloud-native telecommunications provider is evaluating GitOps Certified Associate practices specifically regarding Automated container image update automation with Flux and Argo. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #75.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Automated container image update automation with Flux and Argo in GitOps Tools and Workflows)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for automated container image update automation with flux and argo utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated container image update automation with flux and argo provides reproducible deployments, auditable traceability, and continuous operational resilience as required by GitOps Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cgoa/",
    tags: ["CGOA", "GitOps", "Architecture"]
  }
];

export default CNCF_CGOA_QUESTIONS_3;
