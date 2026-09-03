export const CNCF_CBA_QUESTIONS_4 = [
  {
    id: "cncf-cba-76",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Permissions framework role-based catalog access control: Operational Strategy (Part 76)",
    scenario: "A multinational fintech banking platform is evaluating Certified Backstage Associate practices specifically regarding Backstage Permissions framework role-based catalog access control. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #76.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for backstage permissions framework role-based catalog access control utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage permissions framework role-based catalog access control provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-77",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage plugin architecture core plugins vs community plugins: Operational Strategy (Part 77)",
    scenario: "A healthcare telemedicine network is evaluating Certified Backstage Associate practices specifically regarding Backstage plugin architecture core plugins vs community plugins. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #77.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for backstage plugin architecture core plugins vs community plugins utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage plugin architecture core plugins vs community plugins provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-78",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog processors, entity providers, and automated repository ingestion: Operational Strategy (Part 78)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Backstage Associate practices specifically regarding Catalog processors, entity providers, and automated repository ingestion. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #78.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for catalog processors, entity providers, and automated repository ingestion utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for catalog processors, entity providers, and automated repository ingestion provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-79",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Dry-run testing and debugging template execution logs: Operational Strategy (Part 79)",
    scenario: "A global streaming entertainment platform is evaluating Certified Backstage Associate practices specifically regarding Dry-run testing and debugging template execution logs. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #79.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for dry-run testing and debugging template execution logs utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dry-run testing and debugging template execution logs provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-80",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production deployment topology containerization, PostgreSQL, and caching: Operational Strategy (Part 80)",
    scenario: "An algorithmic trading exchange is evaluating Certified Backstage Associate practices specifically regarding Production deployment topology containerization, PostgreSQL, and caching. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #80.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for production deployment topology containerization, postgresql, and caching utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for production deployment topology containerization, postgresql, and caching provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-81",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage monorepo architecture React frontend and Node.js backend: Operational Strategy (Part 81)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Backstage Associate practices specifically regarding Backstage monorepo architecture React frontend and Node.js backend. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #81.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for backstage monorepo architecture react frontend and node.js backend utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage monorepo architecture react frontend and node.js backend provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-82",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "catalog-info.yaml metadata schema syntax and API versions: Operational Strategy (Part 82)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Backstage Associate practices specifically regarding catalog-info.yaml metadata schema syntax and API versions. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #82.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for catalog-info.yaml metadata schema syntax and api versions utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for catalog-info.yaml metadata schema syntax and api versions provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-83",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Backstage Software Templates Scaffolder syntax and template parameters: Operational Strategy (Part 83)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Backstage Associate practices specifically regarding Backstage Software Templates Scaffolder syntax and template parameters. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #83.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for backstage software templates scaffolder syntax and template parameters utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage software templates scaffolder syntax and template parameters provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-84",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs architecture mkdocs generation and cloud storage publishing: Operational Strategy (Part 84)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Backstage Associate practices specifically regarding TechDocs architecture mkdocs generation and cloud storage publishing. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #84.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for techdocs architecture mkdocs generation and cloud storage publishing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for techdocs architecture mkdocs generation and cloud storage publishing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-85",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Core concepts Software Catalog, Software Templates, TechDocs, and Search: Operational Strategy (Part 85)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Backstage Associate practices specifically regarding Core concepts Software Catalog, Software Templates, TechDocs, and Search. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #85.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for core concepts software catalog, software templates, techdocs, and search utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for core concepts software catalog, software templates, techdocs, and search provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-86",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity model taxonomy Component, API, Resource, System, and Domain: Operational Strategy (Part 86)",
    scenario: "A digital media publishing network is evaluating Certified Backstage Associate practices specifically regarding Entity model taxonomy Component, API, Resource, System, and Domain. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #86.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for entity model taxonomy component, api, resource, system, and domain utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for entity model taxonomy component, api, resource, system, and domain provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-87",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder step actions fetch:template, publish:github, and catalog:register: Operational Strategy (Part 87)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Backstage Associate practices specifically regarding Scaffolder step actions fetch:template, publish:github, and catalog:register. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #87.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for scaffolder step actions fetch:template, publish:github, and catalog:register utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for scaffolder step actions fetch:template, publish:github, and catalog:register provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-88",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Configuring Kubernetes plugin for multi-cluster pod and deployment views: Operational Strategy (Part 88)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Backstage Associate practices specifically regarding Configuring Kubernetes plugin for multi-cluster pod and deployment views. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #88.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for configuring kubernetes plugin for multi-cluster pod and deployment views utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for configuring kubernetes plugin for multi-cluster pod and deployment views provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-89",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Service discovery and app-config.yaml configuration hierarchy: Operational Strategy (Part 89)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Backstage Associate practices specifically regarding Service discovery and app-config.yaml configuration hierarchy. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #89.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for service discovery and app-config.yaml configuration hierarchy utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for service discovery and app-config.yaml configuration hierarchy provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-90",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Organizational entities User and Group defining service ownership: Operational Strategy (Part 90)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Backstage Associate practices specifically regarding Organizational entities User and Group defining service ownership. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #90.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for organizational entities user and group defining service ownership utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for organizational entities user and group defining service ownership provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-91",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Building dynamic UI parameter forms with react-jsonschema-form: Operational Strategy (Part 91)",
    scenario: "An insurance claims processing engine is evaluating Certified Backstage Associate practices specifically regarding Building dynamic UI parameter forms with react-jsonschema-form. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #91.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for building dynamic ui parameter forms with react-jsonschema-form utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for building dynamic ui parameter forms with react-jsonschema-form provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-92",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "CI/CD plugins integrating GitHub Actions, GitLab CI, and Jenkins: Operational Strategy (Part 92)",
    scenario: "A commercial airline reservation service is evaluating Certified Backstage Associate practices specifically regarding CI/CD plugins integrating GitHub Actions, GitLab CI, and Jenkins. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #92.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for ci/cd plugins integrating github actions, gitlab ci, and jenkins utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for ci/cd plugins integrating github actions, gitlab ci, and jenkins provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-93",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Authentication providers GitHub, Google, Okta, and Guest access: Operational Strategy (Part 93)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Backstage Associate practices specifically regarding Authentication providers GitHub, Google, Okta, and Guest access. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #93.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for authentication providers github, google, okta, and guest access utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for authentication providers github, google, okta, and guest access provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-94",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity relations owner, dependsOn, providesApi, and consumesApi: Operational Strategy (Part 94)",
    scenario: "A real estate property management portal is evaluating Certified Backstage Associate practices specifically regarding Entity relations owner, dependsOn, providesApi, and consumesApi. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #94.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for entity relations owner, dependson, providesapi, and consumesapi utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for entity relations owner, dependson, providesapi, and consumesapi provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-95",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Authoring custom Scaffolder actions in the Backstage backend: Operational Strategy (Part 95)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Backstage Associate practices specifically regarding Authoring custom Scaffolder actions in the Backstage backend. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #95.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for authoring custom scaffolder actions in the backstage backend utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for authoring custom scaffolder actions in the backstage backend provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-96",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage Permissions framework role-based catalog access control: Operational Strategy (Part 96)",
    scenario: "A higher education student information system is evaluating Certified Backstage Associate practices specifically regarding Backstage Permissions framework role-based catalog access control. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #96.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for backstage permissions framework role-based catalog access control utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage permissions framework role-based catalog access control provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  },
  {
    id: "cncf-cba-97",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage plugin architecture core plugins vs community plugins: Operational Strategy (Part 97)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Backstage Associate practices specifically regarding Backstage plugin architecture core plugins vs community plugins. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #97.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for backstage plugin architecture core plugins vs community plugins utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for backstage plugin architecture core plugins vs community plugins provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Backstage", "Architecture"]
  },
  {
    id: "cncf-cba-98",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog processors, entity providers, and automated repository ingestion: Operational Strategy (Part 98)",
    scenario: "A digital payments settlement processor is evaluating Certified Backstage Associate practices specifically regarding Catalog processors, entity providers, and automated repository ingestion. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #98.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for catalog processors, entity providers, and automated repository ingestion utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for catalog processors, entity providers, and automated repository ingestion provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-99",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Dry-run testing and debugging template execution logs: Operational Strategy (Part 99)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Backstage Associate practices specifically regarding Dry-run testing and debugging template execution logs. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #99.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for dry-run testing and debugging template execution logs utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dry-run testing and debugging template execution logs provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Software", "Architecture"]
  },
  {
    id: "cncf-cba-100",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Production deployment topology containerization, PostgreSQL, and caching: Operational Strategy (Part 100)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Backstage Associate practices specifically regarding Production deployment topology containerization, PostgreSQL, and caching. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #100.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for production deployment topology containerization, postgresql, and caching utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for production deployment topology containerization, postgresql, and caching provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Backstage Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cba/",
    tags: ["CBA", "Plugins,", "Architecture"]
  }
];

export default CNCF_CBA_QUESTIONS_4;
