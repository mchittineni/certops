export const ISC2_CCSP_QUESTIONS_5 = [
  {
    id: "isc2-ccsp-101",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud incident response triage, containment, and eradication: Operational Strategy (Part 101)",
    scenario: "A multinational fintech banking platform is evaluating Certified Cloud Security Professional practices specifically regarding Cloud incident response triage, containment, and eradication. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #101.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud incident response triage, containment, and eradication utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud incident response triage, containment, and eradication provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-102",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "SOC 1, SOC 2 Type II, and SOC 3 reporting and audit assertions: Operational Strategy (Part 102)",
    scenario: "A healthcare telemedicine network is evaluating Certified Cloud Security Professional practices specifically regarding SOC 1, SOC 2 Type II, and SOC 3 reporting and audit assertions. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #102.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for soc 1, soc 2 type ii, and soc 3 reporting and audit assertions utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for soc 1, soc 2 type ii, and soc 3 reporting and audit assertions provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Legal,", "Architecture"]
  },
  {
    id: "isc2-ccsp-103",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud reference architecture CSA and enterprise security architecture: Operational Strategy (Part 103)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Cloud Security Professional practices specifically regarding Cloud reference architecture CSA and enterprise security architecture. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #103.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for cloud reference architecture csa and enterprise security architecture utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud reference architecture csa and enterprise security architecture provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-104",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Information Rights Management IRM and Digital Rights Management DRM: Operational Strategy (Part 104)",
    scenario: "A global streaming entertainment platform is evaluating Certified Cloud Security Professional practices specifically regarding Information Rights Management IRM and Digital Rights Management DRM. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #104.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for information rights management irm and digital rights management drm utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for information rights management irm and digital rights management drm provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-105",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Business continuity and disaster recovery BCDR strategies RTO and RPO: Operational Strategy (Part 105)",
    scenario: "An algorithmic trading exchange is evaluating Certified Cloud Security Professional practices specifically regarding Business continuity and disaster recovery BCDR strategies RTO and RPO. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #105.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for business continuity and disaster recovery bcdr strategies rto and rpo utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for business continuity and disaster recovery bcdr strategies rto and rpo provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-106",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat modeling methodologies STRIDE and DREAD in cloud systems: Operational Strategy (Part 106)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Cloud Security Professional practices specifically regarding Threat modeling methodologies STRIDE and DREAD in cloud systems. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #106.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for threat modeling methodologies stride and dread in cloud systems utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for threat modeling methodologies stride and dread in cloud systems provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-107",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Digital forensics in cloud environments and chain of custody preservation: Operational Strategy (Part 107)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Cloud Security Professional practices specifically regarding Digital forensics in cloud environments and chain of custody preservation. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #107.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for digital forensics in cloud environments and chain of custody preservation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for digital forensics in cloud environments and chain of custody preservation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-108",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "ISO/IEC 27017 cloud security and ISO/IEC 27018 cloud privacy controls: Operational Strategy (Part 108)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Cloud Security Professional practices specifically regarding ISO/IEC 27017 cloud security and ISO/IEC 27018 cloud privacy controls. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #108.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for iso/iec 27017 cloud security and iso/iec 27018 cloud privacy controls utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iso/iec 27017 cloud security and iso/iec 27018 cloud privacy controls provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Legal,", "Architecture"]
  },
  {
    id: "isc2-ccsp-109",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Evaluating cloud service providers CSPs and third-party risk analysis: Operational Strategy (Part 109)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Cloud Security Professional practices specifically regarding Evaluating cloud service providers CSPs and third-party risk analysis. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #109.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for evaluating cloud service providers csps and third-party risk analysis utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for evaluating cloud service providers csps and third-party risk analysis provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-110",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data tokenization vs format-preserving encryption and masking: Operational Strategy (Part 110)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Cloud Security Professional practices specifically regarding Data tokenization vs format-preserving encryption and masking. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #110.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for data tokenization vs format-preserving encryption and masking utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for data tokenization vs format-preserving encryption and masking provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-111",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and environmental security controls for hyperscale data centers: Operational Strategy (Part 111)",
    scenario: "A digital media publishing network is evaluating Certified Cloud Security Professional practices specifically regarding Physical and environmental security controls for hyperscale data centers. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #111.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for physical and environmental security controls for hyperscale data centers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for physical and environmental security controls for hyperscale data centers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-112",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Federated identity management with SAML 2.0, OAuth 2.0, and OIDC: Operational Strategy (Part 112)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Cloud Security Professional practices specifically regarding Federated identity management with SAML 2.0, OAuth 2.0, and OIDC. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #112.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for federated identity management with saml 2.0, oauth 2.0, and oidc utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for federated identity management with saml 2.0, oauth 2.0, and oidc provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-113",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Patch management, vulnerability assessment, and baseline drift auditing: Operational Strategy (Part 113)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Cloud Security Professional practices specifically regarding Patch management, vulnerability assessment, and baseline drift auditing. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #113.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for patch management, vulnerability assessment, and baseline drift auditing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for patch management, vulnerability assessment, and baseline drift auditing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-114",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Contractual obligations, Service Level Agreements SLAs, and liabilities: Operational Strategy (Part 114)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Cloud Security Professional practices specifically regarding Contractual obligations, Service Level Agreements SLAs, and liabilities. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #114.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for contractual obligations, service level agreements slas, and liabilities utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for contractual obligations, service level agreements slas, and liabilities provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Legal,", "Architecture"]
  },
  {
    id: "isc2-ccsp-115",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Business impact analysis BIA and cloud financial economics: Operational Strategy (Part 115)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Cloud Security Professional practices specifically regarding Business impact analysis BIA and cloud financial economics. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #115.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for business impact analysis bia and cloud financial economics utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for business impact analysis bia and cloud financial economics provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-116",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Secure cloud storage architectures object, block, volume, and ephemeral: Operational Strategy (Part 116)",
    scenario: "An insurance claims processing engine is evaluating Certified Cloud Security Professional practices specifically regarding Secure cloud storage architectures object, block, volume, and ephemeral. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #116.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for secure cloud storage architectures object, block, volume, and ephemeral utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for secure cloud storage architectures object, block, volume, and ephemeral provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-117",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container security and runtime isolation mechanisms: Operational Strategy (Part 117)",
    scenario: "A commercial airline reservation service is evaluating Certified Cloud Security Professional practices specifically regarding Container security and runtime isolation mechanisms. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #117.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for container security and runtime isolation mechanisms utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for container security and runtime isolation mechanisms provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-118",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API security, rate limiting, and OWASP Top 10 API vulnerabilities: Operational Strategy (Part 118)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Cloud Security Professional practices specifically regarding API security, rate limiting, and OWASP Top 10 API vulnerabilities. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #118.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for api security, rate limiting, and owasp top 10 api vulnerabilities utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for api security, rate limiting, and owasp top 10 api vulnerabilities provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-119",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Security Information and Event Management SIEM in multi-cloud: Operational Strategy (Part 119)",
    scenario: "A real estate property management portal is evaluating Certified Cloud Security Professional practices specifically regarding Security Information and Event Management SIEM in multi-cloud. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #119.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for security information and event management siem in multi-cloud utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for security information and event management siem in multi-cloud provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-120",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Electronic discovery eDiscovery and cross-border data transfer restrictions: Operational Strategy (Part 120)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Cloud Security Professional practices specifically regarding Electronic discovery eDiscovery and cross-border data transfer restrictions. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #120.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for electronic discovery ediscovery and cross-border data transfer restrictions utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for electronic discovery ediscovery and cross-border data transfer restrictions provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Legal,", "Architecture"]
  },
  {
    id: "isc2-ccsp-121",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud computing service models IaaS, PaaS, SaaS and shared responsibility: Operational Strategy (Part 121)",
    scenario: "A higher education student information system is evaluating Certified Cloud Security Professional practices specifically regarding Cloud computing service models IaaS, PaaS, SaaS and shared responsibility. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #121.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud computing service models iaas, paas, saas and shared responsibility utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud computing service models iaas, paas, saas and shared responsibility provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-122",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud data lifecycle create, store, use, share, archive, destroy: Operational Strategy (Part 122)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Cloud Security Professional practices specifically regarding Cloud data lifecycle create, store, use, share, archive, destroy. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #122.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud data lifecycle create, store, use, share, archive, destroy utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud data lifecycle create, store, use, share, archive, destroy provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-123",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Hypervisor architecture Type 1 vs Type 2 and virtualization vulnerabilities: Operational Strategy (Part 123)",
    scenario: "A digital payments settlement processor is evaluating Certified Cloud Security Professional practices specifically regarding Hypervisor architecture Type 1 vs Type 2 and virtualization vulnerabilities. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #123.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for hypervisor architecture type 1 vs type 2 and virtualization vulnerabilities utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for hypervisor architecture type 1 vs type 2 and virtualization vulnerabilities provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-124",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle SSDLC in cloud architectures: Operational Strategy (Part 124)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Cloud Security Professional practices specifically regarding Secure Software Development Life Cycle SSDLC in cloud architectures. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #124.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for secure software development life cycle ssdlc in cloud architectures utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for secure software development life cycle ssdlc in cloud architectures provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  },
  {
    id: "isc2-ccsp-125",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Security operations center SOC continuous monitoring and alerting: Operational Strategy (Part 125)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Cloud Security Professional practices specifically regarding Security operations center SOC continuous monitoring and alerting. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #125.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for security operations center soc continuous monitoring and alerting utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for security operations center soc continuous monitoring and alerting provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Cloud Security Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.isc2.org/certifications/ccsp",
    tags: ["CCSP", "Cloud", "Architecture"]
  }
];

export default ISC2_CCSP_QUESTIONS_5;
