export const CNCF_CNPE_QUESTIONS_5 = [
  {
    id: "cncf-cnpe-101",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions XRDs for platform APIs: Operational Strategy (Part 101)",
    scenario: "A multinational fintech banking platform is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Crossplane Composite Resource Definitions XRDs for platform APIs. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #101.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for crossplane composite resource definitions xrds for platform apis utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for crossplane composite resource definitions xrds for platform apis provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-102",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Building custom Backstage plugins and backend integrations: Operational Strategy (Part 102)",
    scenario: "A healthcare telemedicine network is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Building custom Backstage plugins and backend integrations. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #102.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for building custom backstage plugins and backend integrations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for building custom backstage plugins and backend integrations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-103",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Controller HNC for tenant isolation: Operational Strategy (Part 103)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Hierarchical Namespace Controller HNC for tenant isolation. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #103.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for hierarchical namespace controller hnc for tenant isolation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for hierarchical namespace controller hnc for tenant isolation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-104",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-trust workload identity using SPIFFE and SPIRE: Operational Strategy (Part 104)",
    scenario: "A global streaming entertainment platform is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Zero-trust workload identity using SPIFFE and SPIRE. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #104.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for zero-trust workload identity using spiffe and spire utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for zero-trust workload identity using spiffe and spire provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-105",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Control plane isolation using virtual clusters vcluster: Operational Strategy (Part 105)",
    scenario: "An algorithmic trading exchange is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Control plane isolation using virtual clusters vcluster. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #105.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for control plane isolation using virtual clusters vcluster utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for control plane isolation using virtual clusters vcluster provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-106",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Argo Workflows orchestrating complex platform provisioning tasks: Operational Strategy (Part 106)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Argo Workflows orchestrating complex platform provisioning tasks. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #106.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for argo workflows orchestrating complex platform provisioning tasks utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for argo workflows orchestrating complex platform provisioning tasks provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-107",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Compositions bundling compute, networking, and storage: Operational Strategy (Part 107)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Crossplane Compositions bundling compute, networking, and storage. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #107.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for crossplane compositions bundling compute, networking, and storage utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for crossplane compositions bundling compute, networking, and storage provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-108",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Disaster recovery and backup strategies for etcd and CRDs: Operational Strategy (Part 108)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Disaster recovery and backup strategies for etcd and CRDs. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #108.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for disaster recovery and backup strategies for etcd and crds utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for disaster recovery and backup strategies for etcd and crds provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-109",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Cluster API CAPI for declarative multi-cloud cluster lifecycle: Operational Strategy (Part 109)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Cluster API CAPI for declarative multi-cloud cluster lifecycle. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #109.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for cluster api capi for declarative multi-cloud cluster lifecycle utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cluster api capi for declarative multi-cloud cluster lifecycle provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-110",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automating dedicated database provisioning and credential delivery: Operational Strategy (Part 110)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Automating dedicated database provisioning and credential delivery. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #110.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for automating dedicated database provisioning and credential delivery utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automating dedicated database provisioning and credential delivery provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-111",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Automating NetworkPolicy and ResourceQuota propagation across tenants: Operational Strategy (Part 111)",
    scenario: "A digital media publishing network is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Automating NetworkPolicy and ResourceQuota propagation across tenants. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #111.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for automating networkpolicy and resourcequota propagation across tenants utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automating networkpolicy and resourcequota propagation across tenants provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-112",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Continuous platform rolling upgrades with zero tenant downtime: Operational Strategy (Part 112)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Continuous platform rolling upgrades with zero tenant downtime. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #112.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for continuous platform rolling upgrades with zero tenant downtime utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for continuous platform rolling upgrades with zero tenant downtime provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-113",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Federated API management and multi-cluster routing: Operational Strategy (Part 113)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Federated API management and multi-cluster routing. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #113.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for federated api management and multi-cluster routing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for federated api management and multi-cluster routing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-114",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Integrating service mesh mTLS policies into developer portals: Operational Strategy (Part 114)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Integrating service mesh mTLS policies into developer portals. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #114.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for integrating service mesh mtls policies into developer portals utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for integrating service mesh mtls policies into developer portals provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-115",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Managing multi-tenant ingress with Gateway API and Envoy: Operational Strategy (Part 115)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Managing multi-tenant ingress with Gateway API and Envoy. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #115.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for managing multi-tenant ingress with gateway api and envoy utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for managing multi-tenant ingress with gateway api and envoy provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-116",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Comprehensive telemetry collection for platform control planes: Operational Strategy (Part 116)",
    scenario: "An insurance claims processing engine is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Comprehensive telemetry collection for platform control planes. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #116.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for comprehensive telemetry collection for platform control planes utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for comprehensive telemetry collection for platform control planes provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-117",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Designing resilient custom controllers with Kubebuilder: Operational Strategy (Part 117)",
    scenario: "A commercial airline reservation service is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Designing resilient custom controllers with Kubebuilder. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #117.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for designing resilient custom controllers with kubebuilder utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for designing resilient custom controllers with kubebuilder provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-118",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Event-driven platform automation using Knative and CloudEvents: Operational Strategy (Part 118)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Event-driven platform automation using Knative and CloudEvents. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #118.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for event-driven platform automation using knative and cloudevents utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for event-driven platform automation using knative and cloudevents provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-119",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Secure secret distribution using External Secrets Operator: Operational Strategy (Part 119)",
    scenario: "A real estate property management portal is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Secure secret distribution using External Secrets Operator. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #119.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for secure secret distribution using external secrets operator utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for secure secret distribution using external secrets operator provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-120",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Chaos Engineering evaluating control plane resilience: Operational Strategy (Part 120)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Platform Chaos Engineering evaluating control plane resilience. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #120.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for platform chaos engineering evaluating control plane resilience utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for platform chaos engineering evaluating control plane resilience provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-121",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions XRDs for platform APIs: Operational Strategy (Part 121)",
    scenario: "A higher education student information system is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Crossplane Composite Resource Definitions XRDs for platform APIs. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #121.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for crossplane composite resource definitions xrds for platform apis utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for crossplane composite resource definitions xrds for platform apis provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  },
  {
    id: "cncf-cnpe-122",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Building custom Backstage plugins and backend integrations: Operational Strategy (Part 122)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Building custom Backstage plugins and backend integrations. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #122.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for building custom backstage plugins and backend integrations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for building custom backstage plugins and backend integrations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Self-Service", "Architecture"]
  },
  {
    id: "cncf-cnpe-123",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Controller HNC for tenant isolation: Operational Strategy (Part 123)",
    scenario: "A digital payments settlement processor is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Hierarchical Namespace Controller HNC for tenant isolation. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #123.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for hierarchical namespace controller hnc for tenant isolation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for hierarchical namespace controller hnc for tenant isolation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Infrastructure", "Architecture"]
  },
  {
    id: "cncf-cnpe-124",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-trust workload identity using SPIFFE and SPIRE: Operational Strategy (Part 124)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Zero-trust workload identity using SPIFFE and SPIRE. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #124.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for zero-trust workload identity using spiffe and spire utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for zero-trust workload identity using spiffe and spire provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Reliability,", "Architecture"]
  },
  {
    id: "cncf-cnpe-125",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Control plane isolation using virtual clusters vcluster: Operational Strategy (Part 125)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Cloud Native Platform Engineer practices specifically regarding Control plane isolation using virtual clusters vcluster. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #125.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for control plane isolation using virtual clusters vcluster utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for control plane isolation using virtual clusters vcluster provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Native Platform Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cnpe/",
    tags: ["CNPE", "Platform", "Architecture"]
  }
];

export default CNCF_CNPE_QUESTIONS_5;
