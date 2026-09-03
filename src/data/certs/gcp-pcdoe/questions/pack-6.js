export const GCP_PCDOE_QUESTIONS_6 = [
  {
    id: "gcp-pcdoe-126",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Service Level Indicators SLIs based on latency and errors: Operational Strategy (Part 126)",
    scenario: "A multinational fintech banking platform is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Service Level Indicators SLIs based on latency and errors. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #126.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for service level indicators slis based on latency and errors utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for service level indicators slis based on latency and errors provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Applying", "Architecture"]
  },
  {
    id: "gcp-pcdoe-127",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Cloud Build pipeline configuration with substitutions and triggers: Operational Strategy (Part 127)",
    scenario: "A healthcare telemedicine network is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Build pipeline configuration with substitutions and triggers. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #127.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for cloud build pipeline configuration with substitutions and triggers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud build pipeline configuration with substitutions and triggers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Building", "Architecture"]
  },
  {
    id: "gcp-pcdoe-128",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring alert policies with multi-window burn rate alerts: Operational Strategy (Part 128)",
    scenario: "A high-throughput e-commerce retailer is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Monitoring alert policies with multi-window burn rate alerts. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #128.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud monitoring alert policies with multi-window burn rate alerts utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud monitoring alert policies with multi-window burn rate alerts provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Implementing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-129",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Establishing incident commander roles and communication bridges: Operational Strategy (Part 129)",
    scenario: "A global streaming entertainment platform is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Establishing incident commander roles and communication bridges. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #129.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for establishing incident commander roles and communication bridges utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for establishing incident commander roles and communication bridges provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Managing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-130",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization attestations in Google Kubernetes Engine: Operational Strategy (Part 130)",
    scenario: "An algorithmic trading exchange is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Binary Authorization attestations in Google Kubernetes Engine. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #130.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for binary authorization attestations in google kubernetes engine utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for binary authorization attestations in google kubernetes engine provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Ensuring", "Architecture"]
  },
  {
    id: "gcp-pcdoe-131",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining realistic SLOs and managing error budget consumption: Operational Strategy (Part 131)",
    scenario: "A logistics and supply chain optimization service is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Defining realistic SLOs and managing error budget consumption. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #131.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for defining realistic slos and managing error budget consumption utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for defining realistic slos and managing error budget consumption provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Applying", "Architecture"]
  },
  {
    id: "gcp-pcdoe-132",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Artifact Registry vulnerability scanning and immutable tags: Operational Strategy (Part 132)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Artifact Registry vulnerability scanning and immutable tags. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #132.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for artifact registry vulnerability scanning and immutable tags utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for artifact registry vulnerability scanning and immutable tags provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Building", "Architecture"]
  },
  {
    id: "gcp-pcdoe-133",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging log sinks routing logs to BigQuery and Pub/Sub: Operational Strategy (Part 133)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Logging log sinks routing logs to BigQuery and Pub/Sub. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #133.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud logging log sinks routing logs to bigquery and pub/sub utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud logging log sinks routing logs to bigquery and pub/sub provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Implementing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-134",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Triaging service disruptions using Monitoring dashboards: Operational Strategy (Part 134)",
    scenario: "A public sector aerospace engineering department is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Triaging service disruptions using Monitoring dashboards. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #134.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for triaging service disruptions using monitoring dashboards utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for triaging service disruptions using monitoring dashboards provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Managing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-135",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "IAM least privilege service accounts for Cloud Build steps: Operational Strategy (Part 135)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding IAM least privilege service accounts for Cloud Build steps. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #135.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for iam least privilege service accounts for cloud build steps utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iam least privilege service accounts for cloud build steps provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Ensuring", "Architecture"]
  },
  {
    id: "gcp-pcdoe-136",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating engineering toil through automated operational workflows: Operational Strategy (Part 136)",
    scenario: "A digital media publishing network is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Eliminating engineering toil through automated operational workflows. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #136.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for eliminating engineering toil through automated operational workflows utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for eliminating engineering toil through automated operational workflows provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Applying", "Architecture"]
  },
  {
    id: "gcp-pcdoe-137",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Google Cloud Deploy delivery pipelines and target environments: Operational Strategy (Part 137)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Google Cloud Deploy delivery pipelines and target environments. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #137.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for google cloud deploy delivery pipelines and target environments utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for google cloud deploy delivery pipelines and target environments provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Building", "Architecture"]
  },
  {
    id: "gcp-pcdoe-138",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace distributed tracing across microservices: Operational Strategy (Part 138)",
    scenario: "A renewable energy smart-grid operator is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Trace distributed tracing across microservices. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #138.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud trace distributed tracing across microservices utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud trace distributed tracing across microservices provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Implementing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-139",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Implementing circuit breakers and graceful degradation under load: Operational Strategy (Part 139)",
    scenario: "A mobile gaming backend architecture is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Implementing circuit breakers and graceful degradation under load. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #139.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for implementing circuit breakers and graceful degradation under load utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for implementing circuit breakers and graceful degradation under load provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Managing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-140",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Secret Manager secret storage and automated rotation policies: Operational Strategy (Part 140)",
    scenario: "A ride-sharing dispatch system is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Secret Manager secret storage and automated rotation policies. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #140.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for secret manager secret storage and automated rotation policies utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for secret manager secret storage and automated rotation policies provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Ensuring", "Architecture"]
  },
  {
    id: "gcp-pcdoe-141",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Canary release analysis and progressive traffic shifting: Operational Strategy (Part 141)",
    scenario: "An insurance claims processing engine is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Canary release analysis and progressive traffic shifting. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #141.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for canary release analysis and progressive traffic shifting utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for canary release analysis and progressive traffic shifting provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Applying", "Architecture"]
  },
  {
    id: "gcp-pcdoe-142",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Automated canary rollouts and instant rollback triggers: Operational Strategy (Part 142)",
    scenario: "A commercial airline reservation service is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Automated canary rollouts and instant rollback triggers. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #142.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for automated canary rollouts and instant rollback triggers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated canary rollouts and instant rollback triggers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Building", "Architecture"]
  },
  {
    id: "gcp-pcdoe-143",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler continuous performance optimization in production: Operational Strategy (Part 143)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Profiler continuous performance optimization in production. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #143.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for cloud profiler continuous performance optimization in production utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud profiler continuous performance optimization in production provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Implementing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-144",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Root cause analysis using correlated log entries and error reporting: Operational Strategy (Part 144)",
    scenario: "A real estate property management portal is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Root cause analysis using correlated log entries and error reporting. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #144.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for root cause analysis using correlated log entries and error reporting utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for root cause analysis using correlated log entries and error reporting provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Managing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-145",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "VPC Service Controls perimeters protecting sensitive analytics data: Operational Strategy (Part 145)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding VPC Service Controls perimeters protecting sensitive analytics data. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #145.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for vpc service controls perimeters protecting sensitive analytics data utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vpc service controls perimeters protecting sensitive analytics data provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Ensuring", "Architecture"]
  },
  {
    id: "gcp-pcdoe-146",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Conducting blameless postmortems and tracking action items: Operational Strategy (Part 146)",
    scenario: "A higher education student information system is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Conducting blameless postmortems and tracking action items. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #146.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for conducting blameless postmortems and tracking action items utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for conducting blameless postmortems and tracking action items provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Applying", "Architecture"]
  },
  {
    id: "gcp-pcdoe-147",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d2",
    domainName: "Building and implementing CI/CD pipelines for a service",
    title: "Skaffold continuous development workflows for GKE workloads: Operational Strategy (Part 147)",
    scenario: "A global hotel hospitality reservation platform is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Skaffold continuous development workflows for GKE workloads. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #147.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for skaffold continuous development workflows for gke workloads utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for skaffold continuous development workflows for gke workloads provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Building", "Architecture"]
  },
  {
    id: "gcp-pcdoe-148",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring uptime checks across global geographic locations: Operational Strategy (Part 148)",
    scenario: "A digital payments settlement processor is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Cloud Monitoring uptime checks across global geographic locations. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #148.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for cloud monitoring uptime checks across global geographic locations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloud monitoring uptime checks across global geographic locations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Implementing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-149",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Conducting chaos testing and disaster recovery game days: Operational Strategy (Part 149)",
    scenario: "A genomics sequencing data pipeline is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Conducting chaos testing and disaster recovery game days. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #149.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for conducting chaos testing and disaster recovery game days utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for conducting chaos testing and disaster recovery game days provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Managing", "Architecture"]
  },
  {
    id: "gcp-pcdoe-150",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Software supply chain security using SLSA level verification: Operational Strategy (Part 150)",
    scenario: "A cloud-native telecommunications provider is evaluating Google Cloud Professional Cloud DevOps Engineer practices specifically regarding Software supply chain security using SLSA level verification. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #150.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for software supply chain security using slsa level verification utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for software supply chain security using slsa level verification provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Cloud DevOps Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/cloud-devops-engineer",
    tags: ["GCP-PCDE", "Ensuring", "Architecture"]
  }
];

export default GCP_PCDOE_QUESTIONS_6;
