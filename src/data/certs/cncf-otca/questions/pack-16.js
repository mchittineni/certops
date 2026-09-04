export const CNCF_OTCA_QUESTIONS_16 = [
  {
    id: "cncf-otca-376",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Filereceiver and Fileexporter for Offline Telemetry: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates File Ingress & Egress to record production telemetry to disk files for offline compliance auditing or replay synthetic telemetry during load testing.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Persisting and replaying telemetry using file exporters and receivers for auditing or testing is under consideration.",
    options: [
      { id: 'A', text: "Write custom shell redirection scripts inside container entrypoints." },
      { id: 'B', text: "The file exporter cannot preserve OTLP formatting." },
      { id: 'C', text: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data." },
      { id: 'D', text: "Pipe stdout to netcat listening on a remote port." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data. The `file` exporter and receiver in the Contrib distribution allow writing telemetry signals (traces, metrics, logs) directly to local disk files in OTLP JSON or binary format. This facilitates debugging, offline security auditing, and synthetic data replay during load tests.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/fileexporter",
    tags: ["File Ingress & Egress", "File Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-377",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Filereceiver and Fileexporter for Offline Telemetry: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates File Ingress & Egress to record production telemetry to disk files for offline compliance auditing or replay synthetic telemetry during load testing.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Persisting and replaying telemetry using file exporters and receivers for auditing or testing is under consideration.",
    options: [
      { id: 'A', text: "Write custom shell redirection scripts inside container entrypoints." },
      { id: 'B', text: "Pipe stdout to netcat listening on a remote port." },
      { id: 'C', text: "The file exporter cannot preserve OTLP formatting." },
      { id: 'D', text: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data. The `file` exporter and receiver in the Contrib distribution allow writing telemetry signals (traces, metrics, logs) directly to local disk files in OTLP JSON or binary format. This facilitates debugging, offline security auditing, and synthetic data replay during load tests.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/fileexporter",
    tags: ["File Ingress & Egress", "File Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-378",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Filereceiver and Fileexporter for Offline Telemetry: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates File Ingress & Egress to record production telemetry to disk files for offline compliance auditing or replay synthetic telemetry during load testing.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Persisting and replaying telemetry using file exporters and receivers for auditing or testing is under consideration.",
    options: [
      { id: 'A', text: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data." },
      { id: 'B', text: "Pipe stdout to netcat listening on a remote port." },
      { id: 'C', text: "Write custom shell redirection scripts inside container entrypoints." },
      { id: 'D', text: "The file exporter cannot preserve OTLP formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data. The `file` exporter and receiver in the Contrib distribution allow writing telemetry signals (traces, metrics, logs) directly to local disk files in OTLP JSON or binary format. This facilitates debugging, offline security auditing, and synthetic data replay during load tests.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/fileexporter",
    tags: ["File Ingress & Egress", "File Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-379",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Filereceiver and Fileexporter for Offline Telemetry: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates File Ingress & Egress to record production telemetry to disk files for offline compliance auditing or replay synthetic telemetry during load testing.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Persisting and replaying telemetry using file exporters and receivers for auditing or testing is under consideration.",
    options: [
      { id: 'A', text: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data." },
      { id: 'B', text: "Write custom shell redirection scripts inside container entrypoints." },
      { id: 'C', text: "Pipe stdout to netcat listening on a remote port." },
      { id: 'D', text: "The file exporter cannot preserve OTLP formatting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data. The `file` exporter and receiver in the Contrib distribution allow writing telemetry signals (traces, metrics, logs) directly to local disk files in OTLP JSON or binary format. This facilitates debugging, offline security auditing, and synthetic data replay during load tests.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/fileexporter",
    tags: ["File Ingress & Egress", "File Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-380",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Filereceiver and Fileexporter for Offline Telemetry: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates File Ingress & Egress to record production telemetry to disk files for offline compliance auditing or replay synthetic telemetry during load testing.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Persisting and replaying telemetry using file exporters and receivers for auditing or testing is under consideration.",
    options: [
      { id: 'A', text: "The file exporter cannot preserve OTLP formatting." },
      { id: 'B', text: "Write custom shell redirection scripts inside container entrypoints." },
      { id: 'C', text: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data." },
      { id: 'D', text: "Pipe stdout to netcat listening on a remote port." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the `file` exporter to write serialized OTLP JSON/Protobuf records to disk, and the `file` receiver to ingest recorded data. The `file` exporter and receiver in the Contrib distribution allow writing telemetry signals (traces, metrics, logs) directly to local disk files in OTLP JSON or binary format. This facilitates debugging, offline security auditing, and synthetic data replay during load tests.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/fileexporter",
    tags: ["File Ingress & Egress", "File Exporter", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-381",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Managing OpenTelemetry Collector High Availability and Scaling: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Scaling to scale an OpenTelemetry Collector gateway deployment dynamically to handle traffic spikes up to 200,000 telemetry events per second.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Horizontal scaling using HPA and resource limits based on CPU and memory metrics is under consideration.",
    options: [
      { id: 'A', text: "Run a single massive virtual machine with 128 cores." },
      { id: 'B', text: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory." },
      { id: 'C', text: "Scale based on time of day regardless of actual traffic." },
      { id: 'D', text: "Disable all scaling and drop excess packets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory. Collector gateways should be deployed as stateless Kubernetes Deployments behind a Service. Because processors (especially batch and tail sampling) consume CPU and memory, configuring an HPA based on CPU/memory utilization ensures dynamic scaling under fluctuating loads.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Collector Scaling", "Collector Scaling", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-382",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Managing OpenTelemetry Collector High Availability and Scaling: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Scaling to scale an OpenTelemetry Collector gateway deployment dynamically to handle traffic spikes up to 200,000 telemetry events per second.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Horizontal scaling using HPA and resource limits based on CPU and memory metrics is under consideration.",
    options: [
      { id: 'A', text: "Run a single massive virtual machine with 128 cores." },
      { id: 'B', text: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory." },
      { id: 'C', text: "Disable all scaling and drop excess packets." },
      { id: 'D', text: "Scale based on time of day regardless of actual traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory. Collector gateways should be deployed as stateless Kubernetes Deployments behind a Service. Because processors (especially batch and tail sampling) consume CPU and memory, configuring an HPA based on CPU/memory utilization ensures dynamic scaling under fluctuating loads.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Collector Scaling", "Collector Scaling", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-383",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Managing OpenTelemetry Collector High Availability and Scaling: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Scaling to scale an OpenTelemetry Collector gateway deployment dynamically to handle traffic spikes up to 200,000 telemetry events per second.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Horizontal scaling using HPA and resource limits based on CPU and memory metrics is under consideration.",
    options: [
      { id: 'A', text: "Run a single massive virtual machine with 128 cores." },
      { id: 'B', text: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory." },
      { id: 'C', text: "Scale based on time of day regardless of actual traffic." },
      { id: 'D', text: "Disable all scaling and drop excess packets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory. Collector gateways should be deployed as stateless Kubernetes Deployments behind a Service. Because processors (especially batch and tail sampling) consume CPU and memory, configuring an HPA based on CPU/memory utilization ensures dynamic scaling under fluctuating loads.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Collector Scaling", "Collector Scaling", "Security And Governance"]
  },
  {
    id: "cncf-otca-384",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Managing OpenTelemetry Collector High Availability and Scaling: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Scaling to scale an OpenTelemetry Collector gateway deployment dynamically to handle traffic spikes up to 200,000 telemetry events per second.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Horizontal scaling using HPA and resource limits based on CPU and memory metrics is under consideration.",
    options: [
      { id: 'A', text: "Scale based on time of day regardless of actual traffic." },
      { id: 'B', text: "Run a single massive virtual machine with 128 cores." },
      { id: 'C', text: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory." },
      { id: 'D', text: "Disable all scaling and drop excess packets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory. Collector gateways should be deployed as stateless Kubernetes Deployments behind a Service. Because processors (especially batch and tail sampling) consume CPU and memory, configuring an HPA based on CPU/memory utilization ensures dynamic scaling under fluctuating loads.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Collector Scaling", "Collector Scaling", "Microservice Migration"]
  },
  {
    id: "cncf-otca-385",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Managing OpenTelemetry Collector High Availability and Scaling: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Scaling to scale an OpenTelemetry Collector gateway deployment dynamically to handle traffic spikes up to 200,000 telemetry events per second.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Horizontal scaling using HPA and resource limits based on CPU and memory metrics is under consideration.",
    options: [
      { id: 'A', text: "Disable all scaling and drop excess packets." },
      { id: 'B', text: "Run a single massive virtual machine with 128 cores." },
      { id: 'C', text: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory." },
      { id: 'D', text: "Scale based on time of day regardless of actual traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Collector as a Kubernetes Deployment fronted by an internal load balancer, scaled with a Horizontal Pod Autoscaler (HPA) targeting CPU and memory. Collector gateways should be deployed as stateless Kubernetes Deployments behind a Service. Because processors (especially batch and tail sampling) consume CPU and memory, configuring an HPA based on CPU/memory utilization ensures dynamic scaling under fluctuating loads.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Collector Scaling", "Collector Scaling", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-386",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Automatic vs Manual Instrumentation Trade-offs: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Instrumentation Types to determine the optimal instrumentation approach for quickly capturing standard HTTP and database metrics without modifying legacy application source code.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Comparing zero-code runtime agents vs manual SDK programmatic instrumentation is under consideration.",
    options: [
      { id: 'A', text: "Automatic instrumentation is not supported in OpenTelemetry." },
      { id: 'B', text: "Deploy external network packet sniffers to deduce HTTP status codes." },
      { id: 'C', text: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes." },
      { id: 'D', text: "Require developers to rewrite thousands of lines of code using manual programmatic SDK calls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes. Automatic instrumentation hooks into runtime environments (bytecode manipulation in Java, monkey patching in Python/Node.js) to instrument standard frameworks (HTTP, gRPC, database drivers) with zero code modifications. Manual instrumentation is reserved for custom domain-specific business spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/instrumenting/",
    tags: ["Instrumentation Types", "Auto vs Manual", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-387",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Automatic vs Manual Instrumentation Trade-offs: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Instrumentation Types to determine the optimal instrumentation approach for quickly capturing standard HTTP and database metrics without modifying legacy application source code.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Comparing zero-code runtime agents vs manual SDK programmatic instrumentation is under consideration.",
    options: [
      { id: 'A', text: "Deploy external network packet sniffers to deduce HTTP status codes." },
      { id: 'B', text: "Automatic instrumentation is not supported in OpenTelemetry." },
      { id: 'C', text: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes." },
      { id: 'D', text: "Require developers to rewrite thousands of lines of code using manual programmatic SDK calls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes. Automatic instrumentation hooks into runtime environments (bytecode manipulation in Java, monkey patching in Python/Node.js) to instrument standard frameworks (HTTP, gRPC, database drivers) with zero code modifications. Manual instrumentation is reserved for custom domain-specific business spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/instrumenting/",
    tags: ["Instrumentation Types", "Auto vs Manual", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-388",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Automatic vs Manual Instrumentation Trade-offs: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Instrumentation Types to determine the optimal instrumentation approach for quickly capturing standard HTTP and database metrics without modifying legacy application source code.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Comparing zero-code runtime agents vs manual SDK programmatic instrumentation is under consideration.",
    options: [
      { id: 'A', text: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes." },
      { id: 'B', text: "Require developers to rewrite thousands of lines of code using manual programmatic SDK calls." },
      { id: 'C', text: "Deploy external network packet sniffers to deduce HTTP status codes." },
      { id: 'D', text: "Automatic instrumentation is not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes. Automatic instrumentation hooks into runtime environments (bytecode manipulation in Java, monkey patching in Python/Node.js) to instrument standard frameworks (HTTP, gRPC, database drivers) with zero code modifications. Manual instrumentation is reserved for custom domain-specific business spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/instrumenting/",
    tags: ["Instrumentation Types", "Auto vs Manual", "Security And Governance"]
  },
  {
    id: "cncf-otca-389",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Automatic vs Manual Instrumentation Trade-offs: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Instrumentation Types to determine the optimal instrumentation approach for quickly capturing standard HTTP and database metrics without modifying legacy application source code.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Comparing zero-code runtime agents vs manual SDK programmatic instrumentation is under consideration.",
    options: [
      { id: 'A', text: "Automatic instrumentation is not supported in OpenTelemetry." },
      { id: 'B', text: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes." },
      { id: 'C', text: "Deploy external network packet sniffers to deduce HTTP status codes." },
      { id: 'D', text: "Require developers to rewrite thousands of lines of code using manual programmatic SDK calls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes. Automatic instrumentation hooks into runtime environments (bytecode manipulation in Java, monkey patching in Python/Node.js) to instrument standard frameworks (HTTP, gRPC, database drivers) with zero code modifications. Manual instrumentation is reserved for custom domain-specific business spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/instrumenting/",
    tags: ["Instrumentation Types", "Auto vs Manual", "Microservice Migration"]
  },
  {
    id: "cncf-otca-390",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Automatic vs Manual Instrumentation Trade-offs: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Instrumentation Types to determine the optimal instrumentation approach for quickly capturing standard HTTP and database metrics without modifying legacy application source code.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Comparing zero-code runtime agents vs manual SDK programmatic instrumentation is under consideration.",
    options: [
      { id: 'A', text: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes." },
      { id: 'B', text: "Automatic instrumentation is not supported in OpenTelemetry." },
      { id: 'C', text: "Deploy external network packet sniffers to deduce HTTP status codes." },
      { id: 'D', text: "Require developers to rewrite thousands of lines of code using manual programmatic SDK calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use zero-code Automatic Instrumentation (e.g., Java agent, Node.js auto-instrumentation) to instrument frameworks and libraries without code changes. Automatic instrumentation hooks into runtime environments (bytecode manipulation in Java, monkey patching in Python/Node.js) to instrument standard frameworks (HTTP, gRPC, database drivers) with zero code modifications. Manual instrumentation is reserved for custom domain-specific business spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/instrumenting/",
    tags: ["Instrumentation Types", "Auto vs Manual", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-391",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Configuring OpenTelemetry Environment Variables: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates SDK Configuration to configure a containerized microservice to report telemetry under the service name `billing-service` and send OTLP to a local collector on port 4317.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Standardizing SDK behavior via OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, and OTEL_PROPAGATORS is under consideration.",
    options: [
      { id: 'A', text: "Pass the configuration via command-line arguments to the container entrypoint." },
      { id: 'B', text: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`." },
      { id: 'C', text: "Hardcode the service name and endpoint IP directly in application source code." },
      { id: 'D', text: "OpenTelemetry environment variables are ignored by default." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`. OpenTelemetry specifications define standard environment variables recognized across all language SDKs: `OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_PROPAGATORS`, `OTEL_TRACES_SAMPLER`, and `OTEL_RESOURCE_ATTRIBUTES`, enabling declarative runtime configuration.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
    tags: ["SDK Configuration", "OTel Environment Variables", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-392",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Configuring OpenTelemetry Environment Variables: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates SDK Configuration to configure a containerized microservice to report telemetry under the service name `billing-service` and send OTLP to a local collector on port 4317.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Standardizing SDK behavior via OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, and OTEL_PROPAGATORS is under consideration.",
    options: [
      { id: 'A', text: "Pass the configuration via command-line arguments to the container entrypoint." },
      { id: 'B', text: "Hardcode the service name and endpoint IP directly in application source code." },
      { id: 'C', text: "OpenTelemetry environment variables are ignored by default." },
      { id: 'D', text: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`. OpenTelemetry specifications define standard environment variables recognized across all language SDKs: `OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_PROPAGATORS`, `OTEL_TRACES_SAMPLER`, and `OTEL_RESOURCE_ATTRIBUTES`, enabling declarative runtime configuration.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
    tags: ["SDK Configuration", "OTel Environment Variables", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-393",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Configuring OpenTelemetry Environment Variables: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates SDK Configuration to configure a containerized microservice to report telemetry under the service name `billing-service` and send OTLP to a local collector on port 4317.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Standardizing SDK behavior via OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, and OTEL_PROPAGATORS is under consideration.",
    options: [
      { id: 'A', text: "OpenTelemetry environment variables are ignored by default." },
      { id: 'B', text: "Pass the configuration via command-line arguments to the container entrypoint." },
      { id: 'C', text: "Hardcode the service name and endpoint IP directly in application source code." },
      { id: 'D', text: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`. OpenTelemetry specifications define standard environment variables recognized across all language SDKs: `OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_PROPAGATORS`, `OTEL_TRACES_SAMPLER`, and `OTEL_RESOURCE_ATTRIBUTES`, enabling declarative runtime configuration.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
    tags: ["SDK Configuration", "OTel Environment Variables", "Security And Governance"]
  },
  {
    id: "cncf-otca-394",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Configuring OpenTelemetry Environment Variables: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates SDK Configuration to configure a containerized microservice to report telemetry under the service name `billing-service` and send OTLP to a local collector on port 4317.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Standardizing SDK behavior via OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, and OTEL_PROPAGATORS is under consideration.",
    options: [
      { id: 'A', text: "OpenTelemetry environment variables are ignored by default." },
      { id: 'B', text: "Hardcode the service name and endpoint IP directly in application source code." },
      { id: 'C', text: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`." },
      { id: 'D', text: "Pass the configuration via command-line arguments to the container entrypoint." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`. OpenTelemetry specifications define standard environment variables recognized across all language SDKs: `OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_PROPAGATORS`, `OTEL_TRACES_SAMPLER`, and `OTEL_RESOURCE_ATTRIBUTES`, enabling declarative runtime configuration.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
    tags: ["SDK Configuration", "OTel Environment Variables", "Microservice Migration"]
  },
  {
    id: "cncf-otca-395",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Configuring OpenTelemetry Environment Variables: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates SDK Configuration to configure a containerized microservice to report telemetry under the service name `billing-service` and send OTLP to a local collector on port 4317.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Standardizing SDK behavior via OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, and OTEL_PROPAGATORS is under consideration.",
    options: [
      { id: 'A', text: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`." },
      { id: 'B', text: "Pass the configuration via command-line arguments to the container entrypoint." },
      { id: 'C', text: "OpenTelemetry environment variables are ignored by default." },
      { id: 'D', text: "Hardcode the service name and endpoint IP directly in application source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set standard environment variables: `OTEL_SERVICE_NAME=billing-service` and `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317`. OpenTelemetry specifications define standard environment variables recognized across all language SDKs: `OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_PROPAGATORS`, `OTEL_TRACES_SAMPLER`, and `OTEL_RESOURCE_ATTRIBUTES`, enabling declarative runtime configuration.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",
    tags: ["SDK Configuration", "OTel Environment Variables", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-396",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual Tracing: TracerProvider and Tracer Initialization: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Programmatic Tracing to initialize OpenTelemetry tracing programmatically in a Go or Python application with batch exporting to an OTLP endpoint.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Registering TracerProvider, BatchSpanProcessor, and OTLPSpanExporter in application startup is under consideration.",
    options: [
      { id: 'A', text: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider." },
      { id: 'B', text: "Export spans synchronously in the main execution thread." },
      { id: 'C', text: "Initialize a separate TracerProvider for every individual function call." },
      { id: 'D', text: "Instantiate raw spans without initializing a TracerProvider." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider. Application startup requires configuring the global `TracerProvider`. Attaching a `BatchSpanProcessor` backed by an `OTLPSpanExporter` ensures that spans created by `Tracer.Start()` are buffered and exported asynchronously off the critical execution path.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/",
    tags: ["Programmatic Tracing", "Tracer Initialization", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-397",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual Tracing: TracerProvider and Tracer Initialization: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Programmatic Tracing to initialize OpenTelemetry tracing programmatically in a Go or Python application with batch exporting to an OTLP endpoint.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Registering TracerProvider, BatchSpanProcessor, and OTLPSpanExporter in application startup is under consideration.",
    options: [
      { id: 'A', text: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider." },
      { id: 'B', text: "Instantiate raw spans without initializing a TracerProvider." },
      { id: 'C', text: "Export spans synchronously in the main execution thread." },
      { id: 'D', text: "Initialize a separate TracerProvider for every individual function call." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider. Application startup requires configuring the global `TracerProvider`. Attaching a `BatchSpanProcessor` backed by an `OTLPSpanExporter` ensures that spans created by `Tracer.Start()` are buffered and exported asynchronously off the critical execution path.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/",
    tags: ["Programmatic Tracing", "Tracer Initialization", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-398",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual Tracing: TracerProvider and Tracer Initialization: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Programmatic Tracing to initialize OpenTelemetry tracing programmatically in a Go or Python application with batch exporting to an OTLP endpoint.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Registering TracerProvider, BatchSpanProcessor, and OTLPSpanExporter in application startup is under consideration.",
    options: [
      { id: 'A', text: "Instantiate raw spans without initializing a TracerProvider." },
      { id: 'B', text: "Export spans synchronously in the main execution thread." },
      { id: 'C', text: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider." },
      { id: 'D', text: "Initialize a separate TracerProvider for every individual function call." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider. Application startup requires configuring the global `TracerProvider`. Attaching a `BatchSpanProcessor` backed by an `OTLPSpanExporter` ensures that spans created by `Tracer.Start()` are buffered and exported asynchronously off the critical execution path.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/",
    tags: ["Programmatic Tracing", "Tracer Initialization", "Security And Governance"]
  },
  {
    id: "cncf-otca-399",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual Tracing: TracerProvider and Tracer Initialization: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Programmatic Tracing to initialize OpenTelemetry tracing programmatically in a Go or Python application with batch exporting to an OTLP endpoint.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Registering TracerProvider, BatchSpanProcessor, and OTLPSpanExporter in application startup is under consideration.",
    options: [
      { id: 'A', text: "Instantiate raw spans without initializing a TracerProvider." },
      { id: 'B', text: "Export spans synchronously in the main execution thread." },
      { id: 'C', text: "Initialize a separate TracerProvider for every individual function call." },
      { id: 'D', text: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider. Application startup requires configuring the global `TracerProvider`. Attaching a `BatchSpanProcessor` backed by an `OTLPSpanExporter` ensures that spans created by `Tracer.Start()` are buffered and exported asynchronously off the critical execution path.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/",
    tags: ["Programmatic Tracing", "Tracer Initialization", "Microservice Migration"]
  },
  {
    id: "cncf-otca-400",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Manual Tracing: TracerProvider and Tracer Initialization: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Programmatic Tracing to initialize OpenTelemetry tracing programmatically in a Go or Python application with batch exporting to an OTLP endpoint.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Registering TracerProvider, BatchSpanProcessor, and OTLPSpanExporter in application startup is under consideration.",
    options: [
      { id: 'A', text: "Instantiate raw spans without initializing a TracerProvider." },
      { id: 'B', text: "Initialize a separate TracerProvider for every individual function call." },
      { id: 'C', text: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider." },
      { id: 'D', text: "Export spans synchronously in the main execution thread." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `TracerProvider` registered with a `BatchSpanProcessor` using `OTLPSpanExporter`, and set it as the global TracerProvider. Application startup requires configuring the global `TracerProvider`. Attaching a `BatchSpanProcessor` backed by an `OTLPSpanExporter` ensures that spans created by `Tracer.Start()` are buffered and exported asynchronously off the critical execution path.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/",
    tags: ["Programmatic Tracing", "Tracer Initialization", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_16;
