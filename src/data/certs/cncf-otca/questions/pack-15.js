export const CNCF_OTCA_QUESTIONS_15 = [
  {
    id: "cncf-otca-351",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Routing Telemetry to Multiple Backends with Pipelines: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Multi-Backend Routing to send application metric data to Prometheus for infrastructure alerting and simultaneously to an enterprise APM backend for long-term analytics.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Splitting and routing telemetry to diverse backends using multiple pipelines and connectors is under consideration.",
    options: [
      { id: 'A', text: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector." },
      { id: 'B', text: "Run two separate collector daemons on every worker node." },
      { id: 'C', text: "Alternately send metrics to one backend on odd days and the other on even days." },
      { id: 'D', text: "Configure applications to make duplicate network calls to both backends." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector. A single OpenTelemetry Collector can route data to multiple destinations. Multiple pipelines can share the same receiver (e.g., `otlp`), processing and exporting telemetry to different backends (e.g., Prometheus for alerting, Datadog/Elastic for APM) simultaneously.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#pipelines",
    tags: ["Multi-Backend Routing", "Multi-Backend Routing", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-352",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Routing Telemetry to Multiple Backends with Pipelines: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Multi-Backend Routing to send application metric data to Prometheus for infrastructure alerting and simultaneously to an enterprise APM backend for long-term analytics.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Splitting and routing telemetry to diverse backends using multiple pipelines and connectors is under consideration.",
    options: [
      { id: 'A', text: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector." },
      { id: 'B', text: "Run two separate collector daemons on every worker node." },
      { id: 'C', text: "Alternately send metrics to one backend on odd days and the other on even days." },
      { id: 'D', text: "Configure applications to make duplicate network calls to both backends." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector. A single OpenTelemetry Collector can route data to multiple destinations. Multiple pipelines can share the same receiver (e.g., `otlp`), processing and exporting telemetry to different backends (e.g., Prometheus for alerting, Datadog/Elastic for APM) simultaneously.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#pipelines",
    tags: ["Multi-Backend Routing", "Multi-Backend Routing", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-353",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Routing Telemetry to Multiple Backends with Pipelines: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Multi-Backend Routing to send application metric data to Prometheus for infrastructure alerting and simultaneously to an enterprise APM backend for long-term analytics.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Splitting and routing telemetry to diverse backends using multiple pipelines and connectors is under consideration.",
    options: [
      { id: 'A', text: "Configure applications to make duplicate network calls to both backends." },
      { id: 'B', text: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector." },
      { id: 'C', text: "Run two separate collector daemons on every worker node." },
      { id: 'D', text: "Alternately send metrics to one backend on odd days and the other on even days." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector. A single OpenTelemetry Collector can route data to multiple destinations. Multiple pipelines can share the same receiver (e.g., `otlp`), processing and exporting telemetry to different backends (e.g., Prometheus for alerting, Datadog/Elastic for APM) simultaneously.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#pipelines",
    tags: ["Multi-Backend Routing", "Multi-Backend Routing", "Security And Governance"]
  },
  {
    id: "cncf-otca-354",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Routing Telemetry to Multiple Backends with Pipelines: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Multi-Backend Routing to send application metric data to Prometheus for infrastructure alerting and simultaneously to an enterprise APM backend for long-term analytics.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Splitting and routing telemetry to diverse backends using multiple pipelines and connectors is under consideration.",
    options: [
      { id: 'A', text: "Alternately send metrics to one backend on odd days and the other on even days." },
      { id: 'B', text: "Run two separate collector daemons on every worker node." },
      { id: 'C', text: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector." },
      { id: 'D', text: "Configure applications to make duplicate network calls to both backends." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector. A single OpenTelemetry Collector can route data to multiple destinations. Multiple pipelines can share the same receiver (e.g., `otlp`), processing and exporting telemetry to different backends (e.g., Prometheus for alerting, Datadog/Elastic for APM) simultaneously.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#pipelines",
    tags: ["Multi-Backend Routing", "Multi-Backend Routing", "Microservice Migration"]
  },
  {
    id: "cncf-otca-355",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Routing Telemetry to Multiple Backends with Pipelines: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Multi-Backend Routing to send application metric data to Prometheus for infrastructure alerting and simultaneously to an enterprise APM backend for long-term analytics.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Splitting and routing telemetry to diverse backends using multiple pipelines and connectors is under consideration.",
    options: [
      { id: 'A', text: "Configure applications to make duplicate network calls to both backends." },
      { id: 'B', text: "Run two separate collector daemons on every worker node." },
      { id: 'C', text: "Alternately send metrics to one backend on odd days and the other on even days." },
      { id: 'D', text: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define multiple pipelines under `service.pipelines.metrics` referencing shared receivers and distinct exporters, or use the `routing` connector. A single OpenTelemetry Collector can route data to multiple destinations. Multiple pipelines can share the same receiver (e.g., `otlp`), processing and exporting telemetry to different backends (e.g., Prometheus for alerting, Datadog/Elastic for APM) simultaneously.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#pipelines",
    tags: ["Multi-Backend Routing", "Multi-Backend Routing", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-356",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Kubernetes Attributes Processor (k8sattributes): Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates k8s Enrichment to enrich incoming spans with the caller's Kubernetes pod name, namespace, and container image without application code changes.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Extracting pod, namespace, deployment, and node labels to enrich span and metric data is under consideration.",
    options: [
      { id: 'A', text: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata." },
      { id: 'B', text: "The collector cannot interact with the Kubernetes API." },
      { id: 'C', text: "Hardcode pod names inside application environment files." },
      { id: 'D', text: "Pass Kubernetes metadata in every HTTP query parameter from the client." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata. The `k8sattributes` processor queries the local kubelet or Kubernetes API to match the IP address of incoming telemetry connections against running pods, automatically attaching metadata like `k8s.pod.name`, `k8s.namespace.name`, and `k8s.deployment.name` to telemetry records.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor",
    tags: ["k8s Enrichment", "k8sattributes", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-357",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Kubernetes Attributes Processor (k8sattributes): High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates k8s Enrichment to enrich incoming spans with the caller's Kubernetes pod name, namespace, and container image without application code changes.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Extracting pod, namespace, deployment, and node labels to enrich span and metric data is under consideration.",
    options: [
      { id: 'A', text: "The collector cannot interact with the Kubernetes API." },
      { id: 'B', text: "Pass Kubernetes metadata in every HTTP query parameter from the client." },
      { id: 'C', text: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata." },
      { id: 'D', text: "Hardcode pod names inside application environment files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata. The `k8sattributes` processor queries the local kubelet or Kubernetes API to match the IP address of incoming telemetry connections against running pods, automatically attaching metadata like `k8s.pod.name`, `k8s.namespace.name`, and `k8s.deployment.name` to telemetry records.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor",
    tags: ["k8s Enrichment", "k8sattributes", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-358",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Kubernetes Attributes Processor (k8sattributes): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates k8s Enrichment to enrich incoming spans with the caller's Kubernetes pod name, namespace, and container image without application code changes.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Extracting pod, namespace, deployment, and node labels to enrich span and metric data is under consideration.",
    options: [
      { id: 'A', text: "The collector cannot interact with the Kubernetes API." },
      { id: 'B', text: "Hardcode pod names inside application environment files." },
      { id: 'C', text: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata." },
      { id: 'D', text: "Pass Kubernetes metadata in every HTTP query parameter from the client." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata. The `k8sattributes` processor queries the local kubelet or Kubernetes API to match the IP address of incoming telemetry connections against running pods, automatically attaching metadata like `k8s.pod.name`, `k8s.namespace.name`, and `k8s.deployment.name` to telemetry records.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor",
    tags: ["k8s Enrichment", "k8sattributes", "Security And Governance"]
  },
  {
    id: "cncf-otca-359",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Kubernetes Attributes Processor (k8sattributes): Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates k8s Enrichment to enrich incoming spans with the caller's Kubernetes pod name, namespace, and container image without application code changes.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Extracting pod, namespace, deployment, and node labels to enrich span and metric data is under consideration.",
    options: [
      { id: 'A', text: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata." },
      { id: 'B', text: "Hardcode pod names inside application environment files." },
      { id: 'C', text: "Pass Kubernetes metadata in every HTTP query parameter from the client." },
      { id: 'D', text: "The collector cannot interact with the Kubernetes API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata. The `k8sattributes` processor queries the local kubelet or Kubernetes API to match the IP address of incoming telemetry connections against running pods, automatically attaching metadata like `k8s.pod.name`, `k8s.namespace.name`, and `k8s.deployment.name` to telemetry records.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor",
    tags: ["k8s Enrichment", "k8sattributes", "Microservice Migration"]
  },
  {
    id: "cncf-otca-360",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Kubernetes Attributes Processor (k8sattributes): Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates k8s Enrichment to enrich incoming spans with the caller's Kubernetes pod name, namespace, and container image without application code changes.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Extracting pod, namespace, deployment, and node labels to enrich span and metric data is under consideration.",
    options: [
      { id: 'A', text: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata." },
      { id: 'B', text: "Hardcode pod names inside application environment files." },
      { id: 'C', text: "Pass Kubernetes metadata in every HTTP query parameter from the client." },
      { id: 'D', text: "The collector cannot interact with the Kubernetes API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `k8sattributes` processor to the collector pipeline and configure RBAC permissions for the collector to read Kubernetes pod metadata. The `k8sattributes` processor queries the local kubelet or Kubernetes API to match the IP address of incoming telemetry connections against running pods, automatically attaching metadata like `k8s.pod.name`, `k8s.namespace.name`, and `k8s.deployment.name` to telemetry records.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/k8sattributesprocessor",
    tags: ["k8s Enrichment", "k8sattributes", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-361",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Connectors: spanmetrics connector: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Connectors to generate Request, Error, and Duration (R.E.D.) metrics automatically from distributed trace spans without separate metric instrumentation.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Deriving metric data (call counts, latency histograms) from distributed trace spans using spanmetrics is under consideration.",
    options: [
      { id: 'A', text: "Metrics cannot be derived from distributed traces." },
      { id: 'B', text: "Run an external cron job that queries the tracing backend and calculates metrics." },
      { id: 'C', text: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline." },
      { id: 'D', text: "Manually instrument every function call with both a trace span and a metric counter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline. Connectors in the OpenTelemetry Collector link two pipelines together. The `spanmetrics` connector consumes spans from a trace pipeline, computes request rates, error counts, and latency histograms, and emits them into a metrics pipeline for export to Prometheus.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector",
    tags: ["Connectors", "spanmetrics Connector", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-362",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Connectors: spanmetrics connector: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Connectors to generate Request, Error, and Duration (R.E.D.) metrics automatically from distributed trace spans without separate metric instrumentation.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Deriving metric data (call counts, latency histograms) from distributed trace spans using spanmetrics is under consideration.",
    options: [
      { id: 'A', text: "Run an external cron job that queries the tracing backend and calculates metrics." },
      { id: 'B', text: "Metrics cannot be derived from distributed traces." },
      { id: 'C', text: "Manually instrument every function call with both a trace span and a metric counter." },
      { id: 'D', text: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline. Connectors in the OpenTelemetry Collector link two pipelines together. The `spanmetrics` connector consumes spans from a trace pipeline, computes request rates, error counts, and latency histograms, and emits them into a metrics pipeline for export to Prometheus.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector",
    tags: ["Connectors", "spanmetrics Connector", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-363",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Connectors: spanmetrics connector: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Connectors to generate Request, Error, and Duration (R.E.D.) metrics automatically from distributed trace spans without separate metric instrumentation.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Deriving metric data (call counts, latency histograms) from distributed trace spans using spanmetrics is under consideration.",
    options: [
      { id: 'A', text: "Run an external cron job that queries the tracing backend and calculates metrics." },
      { id: 'B', text: "Manually instrument every function call with both a trace span and a metric counter." },
      { id: 'C', text: "Metrics cannot be derived from distributed traces." },
      { id: 'D', text: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline. Connectors in the OpenTelemetry Collector link two pipelines together. The `spanmetrics` connector consumes spans from a trace pipeline, computes request rates, error counts, and latency histograms, and emits them into a metrics pipeline for export to Prometheus.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector",
    tags: ["Connectors", "spanmetrics Connector", "Security And Governance"]
  },
  {
    id: "cncf-otca-364",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Connectors: spanmetrics connector: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Connectors to generate Request, Error, and Duration (R.E.D.) metrics automatically from distributed trace spans without separate metric instrumentation.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Deriving metric data (call counts, latency histograms) from distributed trace spans using spanmetrics is under consideration.",
    options: [
      { id: 'A', text: "Metrics cannot be derived from distributed traces." },
      { id: 'B', text: "Run an external cron job that queries the tracing backend and calculates metrics." },
      { id: 'C', text: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline." },
      { id: 'D', text: "Manually instrument every function call with both a trace span and a metric counter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline. Connectors in the OpenTelemetry Collector link two pipelines together. The `spanmetrics` connector consumes spans from a trace pipeline, computes request rates, error counts, and latency histograms, and emits them into a metrics pipeline for export to Prometheus.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector",
    tags: ["Connectors", "spanmetrics Connector", "Microservice Migration"]
  },
  {
    id: "cncf-otca-365",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Connectors: spanmetrics connector: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Connectors to generate Request, Error, and Duration (R.E.D.) metrics automatically from distributed trace spans without separate metric instrumentation.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Deriving metric data (call counts, latency histograms) from distributed trace spans using spanmetrics is under consideration.",
    options: [
      { id: 'A', text: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline." },
      { id: 'B', text: "Manually instrument every function call with both a trace span and a metric counter." },
      { id: 'C', text: "Run an external cron job that queries the tracing backend and calculates metrics." },
      { id: 'D', text: "Metrics cannot be derived from distributed traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `spanmetrics` connector to consume spans from a traces pipeline and output request count and duration metrics into a metrics pipeline. Connectors in the OpenTelemetry Collector link two pipelines together. The `spanmetrics` connector consumes spans from a trace pipeline, computes request rates, error counts, and latency histograms, and emits them into a metrics pipeline for export to Prometheus.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/connector/spanmetricsconnector",
    tags: ["Connectors", "spanmetrics Connector", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-366",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Health and Monitoring: Health Check and zPages Extensions: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Diagnostics to configure Kubernetes liveness and readiness probes for an OpenTelemetry Collector pod and inspect internal component status.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Exposing health probes and internal diagnostic pages via collector extensions is under consideration.",
    options: [
      { id: 'A', text: "Check if the collector log file size is increasing." },
      { id: 'B', text: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging." },
      { id: 'C', text: "SSH into the collector pod and run curl against localhost:80." },
      { id: 'D', text: "Rely on node operating system ping." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging. Extensions in the OpenTelemetry Collector provide capabilities that do not process telemetry directly. The `health_check` extension exposes an HTTP `/` endpoint on port 13133 for Kubernetes probes, and `zpages` provides in-process diagnostic pages for active traces and RPCs.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension",
    tags: ["Collector Diagnostics", "Collector Extensions", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-367",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Health and Monitoring: Health Check and zPages Extensions: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Diagnostics to configure Kubernetes liveness and readiness probes for an OpenTelemetry Collector pod and inspect internal component status.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Exposing health probes and internal diagnostic pages via collector extensions is under consideration.",
    options: [
      { id: 'A', text: "Rely on node operating system ping." },
      { id: 'B', text: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging." },
      { id: 'C', text: "Check if the collector log file size is increasing." },
      { id: 'D', text: "SSH into the collector pod and run curl against localhost:80." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging. Extensions in the OpenTelemetry Collector provide capabilities that do not process telemetry directly. The `health_check` extension exposes an HTTP `/` endpoint on port 13133 for Kubernetes probes, and `zpages` provides in-process diagnostic pages for active traces and RPCs.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension",
    tags: ["Collector Diagnostics", "Collector Extensions", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-368",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Health and Monitoring: Health Check and zPages Extensions: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Diagnostics to configure Kubernetes liveness and readiness probes for an OpenTelemetry Collector pod and inspect internal component status.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Exposing health probes and internal diagnostic pages via collector extensions is under consideration.",
    options: [
      { id: 'A', text: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging." },
      { id: 'B', text: "Rely on node operating system ping." },
      { id: 'C', text: "Check if the collector log file size is increasing." },
      { id: 'D', text: "SSH into the collector pod and run curl against localhost:80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging. Extensions in the OpenTelemetry Collector provide capabilities that do not process telemetry directly. The `health_check` extension exposes an HTTP `/` endpoint on port 13133 for Kubernetes probes, and `zpages` provides in-process diagnostic pages for active traces and RPCs.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension",
    tags: ["Collector Diagnostics", "Collector Extensions", "Security And Governance"]
  },
  {
    id: "cncf-otca-369",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Health and Monitoring: Health Check and zPages Extensions: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Diagnostics to configure Kubernetes liveness and readiness probes for an OpenTelemetry Collector pod and inspect internal component status.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Exposing health probes and internal diagnostic pages via collector extensions is under consideration.",
    options: [
      { id: 'A', text: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging." },
      { id: 'B', text: "Check if the collector log file size is increasing." },
      { id: 'C', text: "Rely on node operating system ping." },
      { id: 'D', text: "SSH into the collector pod and run curl against localhost:80." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging. Extensions in the OpenTelemetry Collector provide capabilities that do not process telemetry directly. The `health_check` extension exposes an HTTP `/` endpoint on port 13133 for Kubernetes probes, and `zpages` provides in-process diagnostic pages for active traces and RPCs.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension",
    tags: ["Collector Diagnostics", "Collector Extensions", "Microservice Migration"]
  },
  {
    id: "cncf-otca-370",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Health and Monitoring: Health Check and zPages Extensions: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Diagnostics to configure Kubernetes liveness and readiness probes for an OpenTelemetry Collector pod and inspect internal component status.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Exposing health probes and internal diagnostic pages via collector extensions is under consideration.",
    options: [
      { id: 'A', text: "Rely on node operating system ping." },
      { id: 'B', text: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging." },
      { id: 'C', text: "SSH into the collector pod and run curl against localhost:80." },
      { id: 'D', text: "Check if the collector log file size is increasing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the `health_check` extension on port 13133 and optionally the `zpages` extension for live diagnostic debugging. Extensions in the OpenTelemetry Collector provide capabilities that do not process telemetry directly. The `health_check` extension exposes an HTTP `/` endpoint on port 13133 for Kubernetes probes, and `zpages` provides in-process diagnostic pages for active traces and RPCs.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/extension/healthcheckextension",
    tags: ["Collector Diagnostics", "Collector Extensions", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-371",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Load-Balancing Exporter for Tail-Based Sampling: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Load Balancing Exporter to ensure that all distributed spans sharing the same `trace_id` are routed to the same gateway collector instance so tail sampling policies evaluate complete traces.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Routing all spans of a trace ID to the same downstream collector instance for tail sampling is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single collector with no redundancy." },
      { id: 'B', text: "Spans sharing a trace ID do not need to be evaluated on the same collector." },
      { id: 'C', text: "Use standard round-robin DNS load balancing which scatters spans across random collectors." },
      { id: 'D', text: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors. Tail-based sampling requires an entire trace to be present on a single collector instance to evaluate sampling rules. The `loadbalancing` exporter hashes the `trace_id` of each span to ensure that all spans for a given trace always land on the same downstream gateway collector.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/loadbalancingexporter",
    tags: ["Load Balancing Exporter", "loadbalancing Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-372",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Load-Balancing Exporter for Tail-Based Sampling: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Load Balancing Exporter to ensure that all distributed spans sharing the same `trace_id` are routed to the same gateway collector instance so tail sampling policies evaluate complete traces.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Routing all spans of a trace ID to the same downstream collector instance for tail sampling is under consideration.",
    options: [
      { id: 'A', text: "Use standard round-robin DNS load balancing which scatters spans across random collectors." },
      { id: 'B', text: "Spans sharing a trace ID do not need to be evaluated on the same collector." },
      { id: 'C', text: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors." },
      { id: 'D', text: "Deploy a single collector with no redundancy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors. Tail-based sampling requires an entire trace to be present on a single collector instance to evaluate sampling rules. The `loadbalancing` exporter hashes the `trace_id` of each span to ensure that all spans for a given trace always land on the same downstream gateway collector.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/loadbalancingexporter",
    tags: ["Load Balancing Exporter", "loadbalancing Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-373",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Load-Balancing Exporter for Tail-Based Sampling: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Load Balancing Exporter to ensure that all distributed spans sharing the same `trace_id` are routed to the same gateway collector instance so tail sampling policies evaluate complete traces.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Routing all spans of a trace ID to the same downstream collector instance for tail sampling is under consideration.",
    options: [
      { id: 'A', text: "Spans sharing a trace ID do not need to be evaluated on the same collector." },
      { id: 'B', text: "Use standard round-robin DNS load balancing which scatters spans across random collectors." },
      { id: 'C', text: "Deploy a single collector with no redundancy." },
      { id: 'D', text: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors. Tail-based sampling requires an entire trace to be present on a single collector instance to evaluate sampling rules. The `loadbalancing` exporter hashes the `trace_id` of each span to ensure that all spans for a given trace always land on the same downstream gateway collector.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/loadbalancingexporter",
    tags: ["Load Balancing Exporter", "loadbalancing Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-374",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Load-Balancing Exporter for Tail-Based Sampling: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Load Balancing Exporter to ensure that all distributed spans sharing the same `trace_id` are routed to the same gateway collector instance so tail sampling policies evaluate complete traces.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Routing all spans of a trace ID to the same downstream collector instance for tail sampling is under consideration.",
    options: [
      { id: 'A', text: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors." },
      { id: 'B', text: "Deploy a single collector with no redundancy." },
      { id: 'C', text: "Spans sharing a trace ID do not need to be evaluated on the same collector." },
      { id: 'D', text: "Use standard round-robin DNS load balancing which scatters spans across random collectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors. Tail-based sampling requires an entire trace to be present on a single collector instance to evaluate sampling rules. The `loadbalancing` exporter hashes the `trace_id` of each span to ensure that all spans for a given trace always land on the same downstream gateway collector.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/loadbalancingexporter",
    tags: ["Load Balancing Exporter", "loadbalancing Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-375",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Load-Balancing Exporter for Tail-Based Sampling: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Load Balancing Exporter to ensure that all distributed spans sharing the same `trace_id` are routed to the same gateway collector instance so tail sampling policies evaluate complete traces.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Routing all spans of a trace ID to the same downstream collector instance for tail sampling is under consideration.",
    options: [
      { id: 'A', text: "Deploy a single collector with no redundancy." },
      { id: 'B', text: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors." },
      { id: 'C', text: "Spans sharing a trace ID do not need to be evaluated on the same collector." },
      { id: 'D', text: "Use standard round-robin DNS load balancing which scatters spans across random collectors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `loadbalancing` exporter in first-tier agent collectors with routing based on `trace_id` targeting a pool of gateway collectors. Tail-based sampling requires an entire trace to be present on a single collector instance to evaluate sampling rules. The `loadbalancing` exporter hashes the `trace_id` of each span to ensure that all spans for a given trace always land on the same downstream gateway collector.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/loadbalancingexporter",
    tags: ["Load Balancing Exporter", "loadbalancing Exporter", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_15;
