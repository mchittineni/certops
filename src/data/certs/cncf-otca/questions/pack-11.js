export const CNCF_OTCA_QUESTIONS_11 = [
  {
    id: "cncf-otca-251",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Three Pillars of Observability and OpenTelemetry Signals: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates OTel Signals to standardize an enterprise observability strategy across distributed systems using a single vendor-agnostic framework.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Unified telemetry specification across traces, metrics, logs, and baggage is under consideration.",
    options: [
      { id: 'A', text: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage." },
      { id: 'B', text: "Rely on unstructured plaintext log files printed to console output." },
      { id: 'C', text: "Disable distributed tracing to reduce network serialization overhead." },
      { id: 'D', text: "Deploy three separate proprietary vendor SDKs for traces, metrics, and logs independently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage. OpenTelemetry (OTel) is a CNCF incubating project providing a single, standardized set of APIs, SDKs, and tooling to generate, collect, and export telemetry data (traces, metrics, logs, baggage) to any analysis backend, eliminating vendor lock-in.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/",
    tags: ["OTel Signals", "OTel Signals", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-252",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Three Pillars of Observability and OpenTelemetry Signals: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates OTel Signals to standardize an enterprise observability strategy across distributed systems using a single vendor-agnostic framework.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Unified telemetry specification across traces, metrics, logs, and baggage is under consideration.",
    options: [
      { id: 'A', text: "Deploy three separate proprietary vendor SDKs for traces, metrics, and logs independently." },
      { id: 'B', text: "Disable distributed tracing to reduce network serialization overhead." },
      { id: 'C', text: "Rely on unstructured plaintext log files printed to console output." },
      { id: 'D', text: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage. OpenTelemetry (OTel) is a CNCF incubating project providing a single, standardized set of APIs, SDKs, and tooling to generate, collect, and export telemetry data (traces, metrics, logs, baggage) to any analysis backend, eliminating vendor lock-in.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/",
    tags: ["OTel Signals", "OTel Signals", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-253",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Three Pillars of Observability and OpenTelemetry Signals: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates OTel Signals to standardize an enterprise observability strategy across distributed systems using a single vendor-agnostic framework.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Unified telemetry specification across traces, metrics, logs, and baggage is under consideration.",
    options: [
      { id: 'A', text: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage." },
      { id: 'B', text: "Deploy three separate proprietary vendor SDKs for traces, metrics, and logs independently." },
      { id: 'C', text: "Rely on unstructured plaintext log files printed to console output." },
      { id: 'D', text: "Disable distributed tracing to reduce network serialization overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage. OpenTelemetry (OTel) is a CNCF incubating project providing a single, standardized set of APIs, SDKs, and tooling to generate, collect, and export telemetry data (traces, metrics, logs, baggage) to any analysis backend, eliminating vendor lock-in.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/",
    tags: ["OTel Signals", "OTel Signals", "Security And Governance"]
  },
  {
    id: "cncf-otca-254",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Three Pillars of Observability and OpenTelemetry Signals: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates OTel Signals to standardize an enterprise observability strategy across distributed systems using a single vendor-agnostic framework.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Unified telemetry specification across traces, metrics, logs, and baggage is under consideration.",
    options: [
      { id: 'A', text: "Deploy three separate proprietary vendor SDKs for traces, metrics, and logs independently." },
      { id: 'B', text: "Disable distributed tracing to reduce network serialization overhead." },
      { id: 'C', text: "Rely on unstructured plaintext log files printed to console output." },
      { id: 'D', text: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage. OpenTelemetry (OTel) is a CNCF incubating project providing a single, standardized set of APIs, SDKs, and tooling to generate, collect, and export telemetry data (traces, metrics, logs, baggage) to any analysis backend, eliminating vendor lock-in.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/",
    tags: ["OTel Signals", "OTel Signals", "Microservice Migration"]
  },
  {
    id: "cncf-otca-255",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Three Pillars of Observability and OpenTelemetry Signals: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates OTel Signals to standardize an enterprise observability strategy across distributed systems using a single vendor-agnostic framework.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Unified telemetry specification across traces, metrics, logs, and baggage is under consideration.",
    options: [
      { id: 'A', text: "Rely on unstructured plaintext log files printed to console output." },
      { id: 'B', text: "Disable distributed tracing to reduce network serialization overhead." },
      { id: 'C', text: "Deploy three separate proprietary vendor SDKs for traces, metrics, and logs independently." },
      { id: 'D', text: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt OpenTelemetry as the unified standard for collecting distributed traces, metrics, logs, and contextual baggage. OpenTelemetry (OTel) is a CNCF incubating project providing a single, standardized set of APIs, SDKs, and tooling to generate, collect, and export telemetry data (traces, metrics, logs, baggage) to any analysis backend, eliminating vendor lock-in.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/",
    tags: ["OTel Signals", "OTel Signals", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-256",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "API vs SDK Separation in OpenTelemetry: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates API vs SDK to instrument a shared open-source library so that consuming applications can choose whether and how to collect telemetry without adding heavy dependencies.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Architectural decoupling between instrumentation API and implementation SDK is under consideration.",
    options: [
      { id: 'A', text: "Force library users to install a local Redis database for telemetry buffering." },
      { id: 'B', text: "Write custom proprietary telemetry interfaces from scratch." },
      { id: 'C', text: "Bundle the complete OpenTelemetry SDK and specific vendor exporter binaries directly into the library package." },
      { id: 'D', text: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime. OpenTelemetry strictly separates the API (the interface for instrumentation, containing no implementation) from the SDK (the implementation of the API, managing processors, samplers, and exporters). Libraries depend only on the API, enabling zero-dependency overhead if telemetry is disabled.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/api-sdk-separation/",
    tags: ["API vs SDK", "API vs SDK", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-257",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "API vs SDK Separation in OpenTelemetry: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates API vs SDK to instrument a shared open-source library so that consuming applications can choose whether and how to collect telemetry without adding heavy dependencies.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Architectural decoupling between instrumentation API and implementation SDK is under consideration.",
    options: [
      { id: 'A', text: "Force library users to install a local Redis database for telemetry buffering." },
      { id: 'B', text: "Write custom proprietary telemetry interfaces from scratch." },
      { id: 'C', text: "Bundle the complete OpenTelemetry SDK and specific vendor exporter binaries directly into the library package." },
      { id: 'D', text: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime. OpenTelemetry strictly separates the API (the interface for instrumentation, containing no implementation) from the SDK (the implementation of the API, managing processors, samplers, and exporters). Libraries depend only on the API, enabling zero-dependency overhead if telemetry is disabled.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/api-sdk-separation/",
    tags: ["API vs SDK", "API vs SDK", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-258",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "API vs SDK Separation in OpenTelemetry: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates API vs SDK to instrument a shared open-source library so that consuming applications can choose whether and how to collect telemetry without adding heavy dependencies.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Architectural decoupling between instrumentation API and implementation SDK is under consideration.",
    options: [
      { id: 'A', text: "Force library users to install a local Redis database for telemetry buffering." },
      { id: 'B', text: "Write custom proprietary telemetry interfaces from scratch." },
      { id: 'C', text: "Bundle the complete OpenTelemetry SDK and specific vendor exporter binaries directly into the library package." },
      { id: 'D', text: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime. OpenTelemetry strictly separates the API (the interface for instrumentation, containing no implementation) from the SDK (the implementation of the API, managing processors, samplers, and exporters). Libraries depend only on the API, enabling zero-dependency overhead if telemetry is disabled.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/api-sdk-separation/",
    tags: ["API vs SDK", "API vs SDK", "Security And Governance"]
  },
  {
    id: "cncf-otca-259",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "API vs SDK Separation in OpenTelemetry: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates API vs SDK to instrument a shared open-source library so that consuming applications can choose whether and how to collect telemetry without adding heavy dependencies.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Architectural decoupling between instrumentation API and implementation SDK is under consideration.",
    options: [
      { id: 'A', text: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime." },
      { id: 'B', text: "Force library users to install a local Redis database for telemetry buffering." },
      { id: 'C', text: "Bundle the complete OpenTelemetry SDK and specific vendor exporter binaries directly into the library package." },
      { id: 'D', text: "Write custom proprietary telemetry interfaces from scratch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime. OpenTelemetry strictly separates the API (the interface for instrumentation, containing no implementation) from the SDK (the implementation of the API, managing processors, samplers, and exporters). Libraries depend only on the API, enabling zero-dependency overhead if telemetry is disabled.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/api-sdk-separation/",
    tags: ["API vs SDK", "API vs SDK", "Microservice Migration"]
  },
  {
    id: "cncf-otca-260",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "API vs SDK Separation in OpenTelemetry: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates API vs SDK to instrument a shared open-source library so that consuming applications can choose whether and how to collect telemetry without adding heavy dependencies.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Architectural decoupling between instrumentation API and implementation SDK is under consideration.",
    options: [
      { id: 'A', text: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime." },
      { id: 'B', text: "Bundle the complete OpenTelemetry SDK and specific vendor exporter binaries directly into the library package." },
      { id: 'C', text: "Force library users to install a local Redis database for telemetry buffering." },
      { id: 'D', text: "Write custom proprietary telemetry interfaces from scratch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument library code using the lightweight `OpenTelemetry API` exclusively, allowing consuming applications to register the `OpenTelemetry SDK` at runtime. OpenTelemetry strictly separates the API (the interface for instrumentation, containing no implementation) from the SDK (the implementation of the API, managing processors, samplers, and exporters). Libraries depend only on the API, enabling zero-dependency overhead if telemetry is disabled.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/api-sdk-separation/",
    tags: ["API vs SDK", "API vs SDK", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-261",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry Protocol (OTLP): Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates OTLP Standard to transmit high-throughput distributed tracing and metric payloads across network boundaries with minimal latency and serialization overhead.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? High-performance Protobuf over gRPC and HTTP/JSON serialization standard is under consideration.",
    options: [
      { id: 'A', text: "Use proprietary legacy vendor wire protocols." },
      { id: 'B', text: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318)." },
      { id: 'C', text: "Transmit telemetry via uncompressed JSON over raw WebSocket connections." },
      { id: 'D', text: "Serialize all telemetry as unstructured CSV text files transmitted over FTP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318). OpenTelemetry Protocol (OTLP) is the purpose-built, open telemetry transport specification. It uses Protocol Buffers (Protobuf) over gRPC or HTTP to provide compact binary serialization, backpressure handling, batching, and high-performance network transport across collector pipelines.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otlp/",
    tags: ["OTLP Standard", "OTLP Standard", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-262",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry Protocol (OTLP): High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates OTLP Standard to transmit high-throughput distributed tracing and metric payloads across network boundaries with minimal latency and serialization overhead.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? High-performance Protobuf over gRPC and HTTP/JSON serialization standard is under consideration.",
    options: [
      { id: 'A', text: "Use proprietary legacy vendor wire protocols." },
      { id: 'B', text: "Serialize all telemetry as unstructured CSV text files transmitted over FTP." },
      { id: 'C', text: "Transmit telemetry via uncompressed JSON over raw WebSocket connections." },
      { id: 'D', text: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318). OpenTelemetry Protocol (OTLP) is the purpose-built, open telemetry transport specification. It uses Protocol Buffers (Protobuf) over gRPC or HTTP to provide compact binary serialization, backpressure handling, batching, and high-performance network transport across collector pipelines.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otlp/",
    tags: ["OTLP Standard", "OTLP Standard", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-263",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry Protocol (OTLP): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates OTLP Standard to transmit high-throughput distributed tracing and metric payloads across network boundaries with minimal latency and serialization overhead.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? High-performance Protobuf over gRPC and HTTP/JSON serialization standard is under consideration.",
    options: [
      { id: 'A', text: "Use proprietary legacy vendor wire protocols." },
      { id: 'B', text: "Transmit telemetry via uncompressed JSON over raw WebSocket connections." },
      { id: 'C', text: "Serialize all telemetry as unstructured CSV text files transmitted over FTP." },
      { id: 'D', text: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318). OpenTelemetry Protocol (OTLP) is the purpose-built, open telemetry transport specification. It uses Protocol Buffers (Protobuf) over gRPC or HTTP to provide compact binary serialization, backpressure handling, batching, and high-performance network transport across collector pipelines.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otlp/",
    tags: ["OTLP Standard", "OTLP Standard", "Security And Governance"]
  },
  {
    id: "cncf-otca-264",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry Protocol (OTLP): Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates OTLP Standard to transmit high-throughput distributed tracing and metric payloads across network boundaries with minimal latency and serialization overhead.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? High-performance Protobuf over gRPC and HTTP/JSON serialization standard is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318)." },
      { id: 'B', text: "Transmit telemetry via uncompressed JSON over raw WebSocket connections." },
      { id: 'C', text: "Serialize all telemetry as unstructured CSV text files transmitted over FTP." },
      { id: 'D', text: "Use proprietary legacy vendor wire protocols." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318). OpenTelemetry Protocol (OTLP) is the purpose-built, open telemetry transport specification. It uses Protocol Buffers (Protobuf) over gRPC or HTTP to provide compact binary serialization, backpressure handling, batching, and high-performance network transport across collector pipelines.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otlp/",
    tags: ["OTLP Standard", "OTLP Standard", "Microservice Migration"]
  },
  {
    id: "cncf-otca-265",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "OpenTelemetry Protocol (OTLP): Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates OTLP Standard to transmit high-throughput distributed tracing and metric payloads across network boundaries with minimal latency and serialization overhead.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? High-performance Protobuf over gRPC and HTTP/JSON serialization standard is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318)." },
      { id: 'B', text: "Use proprietary legacy vendor wire protocols." },
      { id: 'C', text: "Transmit telemetry via uncompressed JSON over raw WebSocket connections." },
      { id: 'D', text: "Serialize all telemetry as unstructured CSV text files transmitted over FTP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Protocol (OTLP) over gRPC (port 4317) or HTTP/Protobuf (port 4318). OpenTelemetry Protocol (OTLP) is the purpose-built, open telemetry transport specification. It uses Protocol Buffers (Protobuf) over gRPC or HTTP to provide compact binary serialization, backpressure handling, batching, and high-performance network transport across collector pipelines.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otlp/",
    tags: ["OTLP Standard", "OTLP Standard", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-266",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions (SemConv): Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Semantic Conventions to ensure that HTTP requests, database queries, and cloud resource metadata use identical attribute key names across all development teams and programming languages.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Standardized naming schemas for HTTP, database, RPC, and cloud infrastructure attributes is under consideration.",
    options: [
      { id: 'A', text: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`)." },
      { id: 'B', text: "Translate attribute keys manually using external SQL conversion scripts." },
      { id: 'C', text: "Omit all metadata attributes to conserve byte sizes." },
      { id: 'D', text: "Allow every development team to invent their own custom attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`). OpenTelemetry Semantic Conventions define standard naming rules for common operations (HTTP status codes, RPC methods, database systems, exception details, cloud metadata). Adhering to SemConv ensures cross-language consistency and allows backends to build automated dashboards.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/semantic-conventions/",
    tags: ["Semantic Conventions", "Semantic Conventions", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-267",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions (SemConv): High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Semantic Conventions to ensure that HTTP requests, database queries, and cloud resource metadata use identical attribute key names across all development teams and programming languages.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Standardized naming schemas for HTTP, database, RPC, and cloud infrastructure attributes is under consideration.",
    options: [
      { id: 'A', text: "Omit all metadata attributes to conserve byte sizes." },
      { id: 'B', text: "Translate attribute keys manually using external SQL conversion scripts." },
      { id: 'C', text: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`)." },
      { id: 'D', text: "Allow every development team to invent their own custom attribute names." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`). OpenTelemetry Semantic Conventions define standard naming rules for common operations (HTTP status codes, RPC methods, database systems, exception details, cloud metadata). Adhering to SemConv ensures cross-language consistency and allows backends to build automated dashboards.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/semantic-conventions/",
    tags: ["Semantic Conventions", "Semantic Conventions", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-268",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions (SemConv): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Semantic Conventions to ensure that HTTP requests, database queries, and cloud resource metadata use identical attribute key names across all development teams and programming languages.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Standardized naming schemas for HTTP, database, RPC, and cloud infrastructure attributes is under consideration.",
    options: [
      { id: 'A', text: "Omit all metadata attributes to conserve byte sizes." },
      { id: 'B', text: "Allow every development team to invent their own custom attribute names." },
      { id: 'C', text: "Translate attribute keys manually using external SQL conversion scripts." },
      { id: 'D', text: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`). OpenTelemetry Semantic Conventions define standard naming rules for common operations (HTTP status codes, RPC methods, database systems, exception details, cloud metadata). Adhering to SemConv ensures cross-language consistency and allows backends to build automated dashboards.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/semantic-conventions/",
    tags: ["Semantic Conventions", "Semantic Conventions", "Security And Governance"]
  },
  {
    id: "cncf-otca-269",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions (SemConv): Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Semantic Conventions to ensure that HTTP requests, database queries, and cloud resource metadata use identical attribute key names across all development teams and programming languages.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Standardized naming schemas for HTTP, database, RPC, and cloud infrastructure attributes is under consideration.",
    options: [
      { id: 'A', text: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`)." },
      { id: 'B', text: "Omit all metadata attributes to conserve byte sizes." },
      { id: 'C', text: "Translate attribute keys manually using external SQL conversion scripts." },
      { id: 'D', text: "Allow every development team to invent their own custom attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`). OpenTelemetry Semantic Conventions define standard naming rules for common operations (HTTP status codes, RPC methods, database systems, exception details, cloud metadata). Adhering to SemConv ensures cross-language consistency and allows backends to build automated dashboards.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/semantic-conventions/",
    tags: ["Semantic Conventions", "Semantic Conventions", "Microservice Migration"]
  },
  {
    id: "cncf-otca-270",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Semantic Conventions (SemConv): Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Semantic Conventions to ensure that HTTP requests, database queries, and cloud resource metadata use identical attribute key names across all development teams and programming languages.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Standardized naming schemas for HTTP, database, RPC, and cloud infrastructure attributes is under consideration.",
    options: [
      { id: 'A', text: "Translate attribute keys manually using external SQL conversion scripts." },
      { id: 'B', text: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`)." },
      { id: 'C', text: "Allow every development team to invent their own custom attribute names." },
      { id: 'D', text: "Omit all metadata attributes to conserve byte sizes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adhere strictly to OpenTelemetry Semantic Conventions (e.g., `http.request.method`, `db.system.name`, `cloud.provider`). OpenTelemetry Semantic Conventions define standard naming rules for common operations (HTTP status codes, RPC methods, database systems, exception details, cloud metadata). Adhering to SemConv ensures cross-language consistency and allows backends to build automated dashboards.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/semantic-conventions/",
    tags: ["Semantic Conventions", "Semantic Conventions", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-271",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Context Propagation and W3C TraceContext: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Context Propagation to correlate an HTTP request originating in a mobile app across three microservices and a message queue into a single unified trace.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Cross-process context propagation using W3C TraceContext headers (traceparent, tracestate) is under consideration.",
    options: [
      { id: 'A', text: "Generate a brand new trace ID at every microservice hop." },
      { id: 'B', text: "Rely on wall-clock synchronized timestamps across servers." },
      { id: 'C', text: "Pass user email addresses in URL query strings as trace identifiers." },
      { id: 'D', text: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries. Distributed tracing requires context propagation across network boundaries. The OpenTelemetry propagators inject and extract W3C TraceContext headers (`traceparent: version-trace_id-parent_id-trace_flags`), linking asynchronous RPC calls into a coherent end-to-end distributed trace graph.",
    referenceUrl: "https://www.w3.org/TR/trace-context/",
    tags: ["Context Propagation", "W3C TraceContext", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-272",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Context Propagation and W3C TraceContext: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Context Propagation to correlate an HTTP request originating in a mobile app across three microservices and a message queue into a single unified trace.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Cross-process context propagation using W3C TraceContext headers (traceparent, tracestate) is under consideration.",
    options: [
      { id: 'A', text: "Pass user email addresses in URL query strings as trace identifiers." },
      { id: 'B', text: "Generate a brand new trace ID at every microservice hop." },
      { id: 'C', text: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries." },
      { id: 'D', text: "Rely on wall-clock synchronized timestamps across servers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries. Distributed tracing requires context propagation across network boundaries. The OpenTelemetry propagators inject and extract W3C TraceContext headers (`traceparent: version-trace_id-parent_id-trace_flags`), linking asynchronous RPC calls into a coherent end-to-end distributed trace graph.",
    referenceUrl: "https://www.w3.org/TR/trace-context/",
    tags: ["Context Propagation", "W3C TraceContext", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-273",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Context Propagation and W3C TraceContext: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Context Propagation to correlate an HTTP request originating in a mobile app across three microservices and a message queue into a single unified trace.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Cross-process context propagation using W3C TraceContext headers (traceparent, tracestate) is under consideration.",
    options: [
      { id: 'A', text: "Generate a brand new trace ID at every microservice hop." },
      { id: 'B', text: "Rely on wall-clock synchronized timestamps across servers." },
      { id: 'C', text: "Pass user email addresses in URL query strings as trace identifiers." },
      { id: 'D', text: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries. Distributed tracing requires context propagation across network boundaries. The OpenTelemetry propagators inject and extract W3C TraceContext headers (`traceparent: version-trace_id-parent_id-trace_flags`), linking asynchronous RPC calls into a coherent end-to-end distributed trace graph.",
    referenceUrl: "https://www.w3.org/TR/trace-context/",
    tags: ["Context Propagation", "W3C TraceContext", "Security And Governance"]
  },
  {
    id: "cncf-otca-274",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Context Propagation and W3C TraceContext: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Context Propagation to correlate an HTTP request originating in a mobile app across three microservices and a message queue into a single unified trace.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Cross-process context propagation using W3C TraceContext headers (traceparent, tracestate) is under consideration.",
    options: [
      { id: 'A', text: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries." },
      { id: 'B', text: "Rely on wall-clock synchronized timestamps across servers." },
      { id: 'C', text: "Pass user email addresses in URL query strings as trace identifiers." },
      { id: 'D', text: "Generate a brand new trace ID at every microservice hop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries. Distributed tracing requires context propagation across network boundaries. The OpenTelemetry propagators inject and extract W3C TraceContext headers (`traceparent: version-trace_id-parent_id-trace_flags`), linking asynchronous RPC calls into a coherent end-to-end distributed trace graph.",
    referenceUrl: "https://www.w3.org/TR/trace-context/",
    tags: ["Context Propagation", "W3C TraceContext", "Microservice Migration"]
  },
  {
    id: "cncf-otca-275",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Context Propagation and W3C TraceContext: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Context Propagation to correlate an HTTP request originating in a mobile app across three microservices and a message queue into a single unified trace.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Cross-process context propagation using W3C TraceContext headers (traceparent, tracestate) is under consideration.",
    options: [
      { id: 'A', text: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries." },
      { id: 'B', text: "Pass user email addresses in URL query strings as trace identifiers." },
      { id: 'C', text: "Generate a brand new trace ID at every microservice hop." },
      { id: 'D', text: "Rely on wall-clock synchronized timestamps across servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inject and extract W3C TraceContext headers (`traceparent`, `tracestate`) across HTTP request headers and message metadata boundaries. Distributed tracing requires context propagation across network boundaries. The OpenTelemetry propagators inject and extract W3C TraceContext headers (`traceparent: version-trace_id-parent_id-trace_flags`), linking asynchronous RPC calls into a coherent end-to-end distributed trace graph.",
    referenceUrl: "https://www.w3.org/TR/trace-context/",
    tags: ["Context Propagation", "W3C TraceContext", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_11;
