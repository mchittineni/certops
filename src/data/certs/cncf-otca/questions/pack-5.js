export const CNCF_OTCA_QUESTIONS_5 = [
  {
    id: "cncf-otca-101",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry project mission, scope, and vendor neutrality: Operational Strategy (Part 101)",
    scenario: "A multinational fintech banking platform is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry project mission, scope, and vendor neutrality. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #101.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for opentelemetry project mission, scope, and vendor neutrality utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry project mission, scope, and vendor neutrality provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-102",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Collector architecture receivers, processors, exporters: Operational Strategy (Part 102)",
    scenario: "A healthcare telemedicine network is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry Collector architecture receivers, processors, exporters. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #102.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for opentelemetry collector architecture receivers, processors, exporters utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry collector architecture receivers, processors, exporters provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-103",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Auto-instrumentation using OpenTelemetry bytecode and zero-code agents: Operational Strategy (Part 103)",
    scenario: "A high-throughput e-commerce retailer is evaluating OpenTelemetry Certified Associate practices specifically regarding Auto-instrumentation using OpenTelemetry bytecode and zero-code agents. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #103.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for auto-instrumentation using opentelemetry bytecode and zero-code agents utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for auto-instrumentation using opentelemetry bytecode and zero-code agents provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-104",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Exporting telemetry to Prometheus, Jaeger, Zipkin, and cloud backends: Operational Strategy (Part 104)",
    scenario: "A global streaming entertainment platform is evaluating OpenTelemetry Certified Associate practices specifically regarding Exporting telemetry to Prometheus, Jaeger, Zipkin, and cloud backends. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #104.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for exporting telemetry to prometheus, jaeger, zipkin, and cloud backends utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for exporting telemetry to prometheus, jaeger, zipkin, and cloud backends provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-105",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry API vs OpenTelemetry SDK responsibilities: Operational Strategy (Part 105)",
    scenario: "An algorithmic trading exchange is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry API vs OpenTelemetry SDK responsibilities. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #105.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for opentelemetry api vs opentelemetry sdk responsibilities utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry api vs opentelemetry sdk responsibilities provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-106",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Configuring batch processor and memory_limiter processor: Operational Strategy (Part 106)",
    scenario: "A logistics and supply chain optimization service is evaluating OpenTelemetry Certified Associate practices specifically regarding Configuring batch processor and memory_limiter processor. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #106.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for configuring batch processor and memory_limiter processor utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for configuring batch processor and memory_limiter processor provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-107",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual tracing with Tracer, Span, SpanKind, and SpanStatus: Operational Strategy (Part 107)",
    scenario: "An IoT industrial telematics infrastructure is evaluating OpenTelemetry Certified Associate practices specifically regarding Manual tracing with Tracer, Span, SpanKind, and SpanStatus. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #107.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for manual tracing with tracer, span, spankind, and spanstatus utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for manual tracing with tracer, span, spankind, and spanstatus provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-108",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Sampling strategies head-based probabilistic vs tail-based collector sampling: Operational Strategy (Part 108)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating OpenTelemetry Certified Associate practices specifically regarding Sampling strategies head-based probabilistic vs tail-based collector sampling. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #108.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for sampling strategies head-based probabilistic vs tail-based collector sampling utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for sampling strategies head-based probabilistic vs tail-based collector sampling provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-109",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry signals traces, metrics, logs, and baggage: Operational Strategy (Part 109)",
    scenario: "A public sector aerospace engineering department is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry signals traces, metrics, logs, and baggage. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #109.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for opentelemetry signals traces, metrics, logs, and baggage utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry signals traces, metrics, logs, and baggage provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-110",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector deployment patterns agent daemonset vs gateway deployment: Operational Strategy (Part 110)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating OpenTelemetry Certified Associate practices specifically regarding Collector deployment patterns agent daemonset vs gateway deployment. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #110.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for collector deployment patterns agent daemonset vs gateway deployment utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for collector deployment patterns agent daemonset vs gateway deployment provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-111",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording span events, status codes, and contextual attributes: Operational Strategy (Part 111)",
    scenario: "A digital media publishing network is evaluating OpenTelemetry Certified Associate practices specifically regarding Recording span events, status codes, and contextual attributes. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #111.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for recording span events, status codes, and contextual attributes utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for recording span events, status codes, and contextual attributes provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-112",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector health checks and self-observability metrics: Operational Strategy (Part 112)",
    scenario: "A pharmaceutical clinical trial data service is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry Collector health checks and self-observability metrics. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #112.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for opentelemetry collector health checks and self-observability metrics utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry collector health checks and self-observability metrics provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-113",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "W3C Trace Context specification traceparent and tracestate headers: Operational Strategy (Part 113)",
    scenario: "A renewable energy smart-grid operator is evaluating OpenTelemetry Certified Associate practices specifically regarding W3C Trace Context specification traceparent and tracestate headers. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #113.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for w3c trace context specification traceparent and tracestate headers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for w3c trace context specification traceparent and tracestate headers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-114",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Pipeline routing using connector components and routing processors: Operational Strategy (Part 114)",
    scenario: "A mobile gaming backend architecture is evaluating OpenTelemetry Certified Associate practices specifically regarding Pipeline routing using connector components and routing processors. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #114.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for pipeline routing using connector components and routing processors utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for pipeline routing using connector components and routing processors provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-115",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric instruments Counter, UpDownCounter, Histogram, and Gauge: Operational Strategy (Part 115)",
    scenario: "A ride-sharing dispatch system is evaluating OpenTelemetry Certified Associate practices specifically regarding Metric instruments Counter, UpDownCounter, Histogram, and Gauge. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #115.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for metric instruments counter, updowncounter, histogram, and gauge utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for metric instruments counter, updowncounter, histogram, and gauge provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-116",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Troubleshooting pipeline errors using the debug and file exporters: Operational Strategy (Part 116)",
    scenario: "An insurance claims processing engine is evaluating OpenTelemetry Certified Associate practices specifically regarding Troubleshooting pipeline errors using the debug and file exporters. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #116.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for troubleshooting pipeline errors using the debug and file exporters utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for troubleshooting pipeline errors using the debug and file exporters provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-117",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions for HTTP, database, and RPC operations: Operational Strategy (Part 117)",
    scenario: "A commercial airline reservation service is evaluating OpenTelemetry Certified Associate practices specifically regarding Semantic Conventions for HTTP, database, and RPC operations. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #117.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for semantic conventions for http, database, and rpc operations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for semantic conventions for http, database, and rpc operations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-118",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Configuring OTLP receiver over gRPC port 4317 and HTTP port 4318: Operational Strategy (Part 118)",
    scenario: "A cybersecurity threat intelligence agency is evaluating OpenTelemetry Certified Associate practices specifically regarding Configuring OTLP receiver over gRPC port 4317 and HTTP port 4318. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #118.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for configuring otlp receiver over grpc port 4317 and http port 4318 utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for configuring otlp receiver over grpc port 4317 and http port 4318 provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-119",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Context propagation across asynchronous boundaries using Baggage: Operational Strategy (Part 119)",
    scenario: "A real estate property management portal is evaluating OpenTelemetry Certified Associate practices specifically regarding Context propagation across asynchronous boundaries using Baggage. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #119.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for context propagation across asynchronous boundaries using baggage utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for context propagation across asynchronous boundaries using baggage provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-120",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Tuning collector memory buffers, queue sizes, and worker pool scaling: Operational Strategy (Part 120)",
    scenario: "An autonomous robotics manufacturing facility is evaluating OpenTelemetry Certified Associate practices specifically regarding Tuning collector memory buffers, queue sizes, and worker pool scaling. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #120.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for tuning collector memory buffers, queue sizes, and worker pool scaling utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for tuning collector memory buffers, queue sizes, and worker pool scaling provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-121",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry project mission, scope, and vendor neutrality: Operational Strategy (Part 121)",
    scenario: "A higher education student information system is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry project mission, scope, and vendor neutrality. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #121.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for opentelemetry project mission, scope, and vendor neutrality utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry project mission, scope, and vendor neutrality provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-122",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Collector architecture receivers, processors, exporters: Operational Strategy (Part 122)",
    scenario: "A global hotel hospitality reservation platform is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry Collector architecture receivers, processors, exporters. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #122.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for opentelemetry collector architecture receivers, processors, exporters utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry collector architecture receivers, processors, exporters provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  },
  {
    id: "cncf-otca-123",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Auto-instrumentation using OpenTelemetry bytecode and zero-code agents: Operational Strategy (Part 123)",
    scenario: "A digital payments settlement processor is evaluating OpenTelemetry Certified Associate practices specifically regarding Auto-instrumentation using OpenTelemetry bytecode and zero-code agents. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #123.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for auto-instrumentation using opentelemetry bytecode and zero-code agents utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for auto-instrumentation using opentelemetry bytecode and zero-code agents provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Instrumentation", "Architecture"]
  },
  {
    id: "cncf-otca-124",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Exporting telemetry to Prometheus, Jaeger, Zipkin, and cloud backends: Operational Strategy (Part 124)",
    scenario: "A genomics sequencing data pipeline is evaluating OpenTelemetry Certified Associate practices specifically regarding Exporting telemetry to Prometheus, Jaeger, Zipkin, and cloud backends. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #124.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for exporting telemetry to prometheus, jaeger, zipkin, and cloud backends utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for exporting telemetry to prometheus, jaeger, zipkin, and cloud backends provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "Operationalizing", "Architecture"]
  },
  {
    id: "cncf-otca-125",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry API vs OpenTelemetry SDK responsibilities: Operational Strategy (Part 125)",
    scenario: "A cloud-native telecommunications provider is evaluating OpenTelemetry Certified Associate practices specifically regarding OpenTelemetry API vs OpenTelemetry SDK responsibilities. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #125.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for opentelemetry api vs opentelemetry sdk responsibilities utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for opentelemetry api vs opentelemetry sdk responsibilities provides reproducible deployments, auditable traceability, and continuous operational resilience as required by OpenTelemetry Certified Associate standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/otca/",
    tags: ["OTCA", "OpenTelemetry", "Architecture"]
  }
];

export default CNCF_OTCA_QUESTIONS_5;
