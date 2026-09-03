export const CNCF_CNPA_QUESTIONS_1 = [
  {
    id: "cncf-cnpa-1",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an extensible control plane substrate: Operational Strategy (Part 1)",
    scenario: "A multinational fintech banking platform is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Kubernetes as an extensible control plane substrate. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #1.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for kubernetes as an extensible control plane substrate utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kubernetes as an extensible control plane substrate provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-2",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Internal Developer Platform IDP architectural components: Operational Strategy (Part 2)",
    scenario: "A healthcare telemedicine network is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Internal Developer Platform IDP architectural components. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #2.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for internal developer platform idp architectural components utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for internal developer platform idp architectural components provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-3",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Defining Golden Paths for scaffolding new microservices: Operational Strategy (Part 3)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Defining Golden Paths for scaffolding new microservices. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #3.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for defining golden paths for scaffolding new microservices utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for defining golden paths for scaffolding new microservices provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-4",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform adoption and developer onboarding metrics: Operational Strategy (Part 4)",
    scenario: "A global streaming entertainment platform is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Platform adoption and developer onboarding metrics. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #4.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for platform adoption and developer onboarding metrics utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for platform adoption and developer onboarding metrics provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-5",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Declarative resource management and reconciliation loops: Operational Strategy (Part 5)",
    scenario: "An algorithmic trading exchange is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Declarative resource management and reconciliation loops. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #5.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for declarative resource management and reconciliation loops utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for declarative resource management and reconciliation loops provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-6",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Backstage developer portal catalog and service ownership: Operational Strategy (Part 6)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Backstage developer portal catalog and service ownership. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #6.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for backstage developer portal catalog and service ownership utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage developer portal catalog and service ownership provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-7",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Declarative GitOps application delivery workflows: Operational Strategy (Part 7)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Declarative GitOps application delivery workflows. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #7.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for declarative gitops application delivery workflows utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for declarative gitops application delivery workflows provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-8",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Resource quota management and fair cluster sharing: Operational Strategy (Part 8)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Resource quota management and fair cluster sharing. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #8.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for resource quota management and fair cluster sharing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for resource quota management and fair cluster sharing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-9",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Custom Resource Definitions CRDs and Operator pattern: Operational Strategy (Part 9)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Custom Resource Definitions CRDs and Operator pattern. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #9.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for custom resource definitions crds and operator pattern utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for custom resource definitions crds and operator pattern provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-10",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Self-service infrastructure provisioning interfaces: Operational Strategy (Part 10)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Self-service infrastructure provisioning interfaces. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #10.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for self-service infrastructure provisioning interfaces utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for self-service infrastructure provisioning interfaces provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-11",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Dynamic ephemeral environments for pull request testing: Operational Strategy (Part 11)",
    scenario: "A digital media publishing network is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Dynamic ephemeral environments for pull request testing. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #11.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for dynamic ephemeral environments for pull request testing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dynamic ephemeral environments for pull request testing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-12",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Cloud cost transparency and FinOps integration with OpenCost: Operational Strategy (Part 12)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Cloud cost transparency and FinOps integration with OpenCost. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #12.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud cost transparency and finops integration with opencost utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud cost transparency and finops integration with opencost provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-13",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-tenant cluster architecture and workload isolation: Operational Strategy (Part 13)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Multi-tenant cluster architecture and workload isolation. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #13.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for multi-tenant cluster architecture and workload isolation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for multi-tenant cluster architecture and workload isolation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-14",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Reducing cognitive load for application engineering teams: Operational Strategy (Part 14)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Reducing cognitive load for application engineering teams. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #14.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for reducing cognitive load for application engineering teams utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for reducing cognitive load for application engineering teams provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-15",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Standardized CI/CD workflow templates and reusable pipelines: Operational Strategy (Part 15)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Standardized CI/CD workflow templates and reusable pipelines. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #15.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for standardized ci/cd workflow templates and reusable pipelines utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for standardized ci/cd workflow templates and reusable pipelines provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-16",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Open Policy Agent and Kyverno policy governance on platforms: Operational Strategy (Part 16)",
    scenario: "An insurance claims processing engine is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Open Policy Agent and Kyverno policy governance on platforms. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #16.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for open policy agent and kyverno policy governance on platforms utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for open policy agent and kyverno policy governance on platforms provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-17",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Container network interface CNI and storage abstractions CSI: Operational Strategy (Part 17)",
    scenario: "A commercial airline reservation service is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Container network interface CNI and storage abstractions CSI. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #17.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for container network interface cni and storage abstractions csi utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for container network interface cni and storage abstractions csi provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-18",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Evaluating Platform as a Product and developer experience DevEx: Operational Strategy (Part 18)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Evaluating Platform as a Product and developer experience DevEx. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #18.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for evaluating platform as a product and developer experience devex utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for evaluating platform as a product and developer experience devex provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-19",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy guardrails embedded into developer self-service workflows: Operational Strategy (Part 19)",
    scenario: "A real estate property management portal is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Policy guardrails embedded into developer self-service workflows. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #19.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for policy guardrails embedded into developer self-service workflows utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for policy guardrails embedded into developer self-service workflows provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-20",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Service level objectives SLOs for core platform services: Operational Strategy (Part 20)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Service level objectives SLOs for core platform services. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #20.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for service level objectives slos for core platform services utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for service level objectives slos for core platform services provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-21",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an extensible control plane substrate: Operational Strategy (Part 21)",
    scenario: "A higher education student information system is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Kubernetes as an extensible control plane substrate. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #21.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for kubernetes as an extensible control plane substrate utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kubernetes as an extensible control plane substrate provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  },
  {
    id: "cncf-cnpa-22",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Internal Developer Platform IDP architectural components: Operational Strategy (Part 22)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Internal Developer Platform IDP architectural components. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #22.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for internal developer platform idp architectural components utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for internal developer platform idp architectural components provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Internal", "Architecture"]
  },
  {
    id: "cncf-cnpa-23",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Defining Golden Paths for scaffolding new microservices: Operational Strategy (Part 23)",
    scenario: "A digital payments settlement processor is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Defining Golden Paths for scaffolding new microservices. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #23.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for defining golden paths for scaffolding new microservices utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for defining golden paths for scaffolding new microservices provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Golden", "Architecture"]
  },
  {
    id: "cncf-cnpa-24",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform adoption and developer onboarding metrics: Operational Strategy (Part 24)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Platform adoption and developer onboarding metrics. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #24.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for platform adoption and developer onboarding metrics utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for platform adoption and developer onboarding metrics provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpa-25",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Declarative resource management and reconciliation loops: Operational Strategy (Part 25)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Cloud Native Platform Engineering Associate practices specifically regarding Declarative resource management and reconciliation loops. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #25.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for declarative resource management and reconciliation loops utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for declarative resource management and reconciliation loops provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineering Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpa/",
    tags: ["CNPA", "Cloud", "Architecture"]
  }
];

export default CNCF_CNPA_QUESTIONS_1;
