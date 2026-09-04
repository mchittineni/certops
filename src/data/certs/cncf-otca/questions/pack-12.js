export const CNCF_OTCA_QUESTIONS_12 = [
  {
    id: "cncf-otca-276",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Baggage vs Trace Context: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Baggage Propagation to propagate a business-level `customerId` and `accountTier` across an entire microservice call graph without recording them in trace span names.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Propagating cross-cutting business metadata (e.g., customerId, tier) across service boundaries is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers." },
      { id: 'B', text: "Append customer IDs to every database column name." },
      { id: 'C', text: "Pass customer metadata in raw TCP socket options." },
      { id: 'D', text: "Baggage is not supported in OpenTelemetry architectures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers. While TraceContext carries identifiers required for tracing (trace ID, span ID), OpenTelemetry Baggage carries arbitrary contextual key-value pairs across service boundaries. Baggage travels via the `baggage` HTTP header, making business metadata available to downstream services for tagging or routing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/baggage/",
    tags: ["Baggage Propagation", "Baggage API", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-277",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Baggage vs Trace Context: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Baggage Propagation to propagate a business-level `customerId` and `accountTier` across an entire microservice call graph without recording them in trace span names.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Propagating cross-cutting business metadata (e.g., customerId, tier) across service boundaries is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers." },
      { id: 'B', text: "Append customer IDs to every database column name." },
      { id: 'C', text: "Pass customer metadata in raw TCP socket options." },
      { id: 'D', text: "Baggage is not supported in OpenTelemetry architectures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers. While TraceContext carries identifiers required for tracing (trace ID, span ID), OpenTelemetry Baggage carries arbitrary contextual key-value pairs across service boundaries. Baggage travels via the `baggage` HTTP header, making business metadata available to downstream services for tagging or routing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/baggage/",
    tags: ["Baggage Propagation", "Baggage API", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-278",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Baggage vs Trace Context: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Baggage Propagation to propagate a business-level `customerId` and `accountTier` across an entire microservice call graph without recording them in trace span names.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Propagating cross-cutting business metadata (e.g., customerId, tier) across service boundaries is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers." },
      { id: 'B', text: "Append customer IDs to every database column name." },
      { id: 'C', text: "Pass customer metadata in raw TCP socket options." },
      { id: 'D', text: "Baggage is not supported in OpenTelemetry architectures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers. While TraceContext carries identifiers required for tracing (trace ID, span ID), OpenTelemetry Baggage carries arbitrary contextual key-value pairs across service boundaries. Baggage travels via the `baggage` HTTP header, making business metadata available to downstream services for tagging or routing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/baggage/",
    tags: ["Baggage Propagation", "Baggage API", "Security And Governance"]
  },
  {
    id: "cncf-otca-279",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Baggage vs Trace Context: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Baggage Propagation to propagate a business-level `customerId` and `accountTier` across an entire microservice call graph without recording them in trace span names.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Propagating cross-cutting business metadata (e.g., customerId, tier) across service boundaries is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers." },
      { id: 'B', text: "Append customer IDs to every database column name." },
      { id: 'C', text: "Pass customer metadata in raw TCP socket options." },
      { id: 'D', text: "Baggage is not supported in OpenTelemetry architectures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers. While TraceContext carries identifiers required for tracing (trace ID, span ID), OpenTelemetry Baggage carries arbitrary contextual key-value pairs across service boundaries. Baggage travels via the `baggage` HTTP header, making business metadata available to downstream services for tagging or routing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/baggage/",
    tags: ["Baggage Propagation", "Baggage API", "Microservice Migration"]
  },
  {
    id: "cncf-otca-280",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Baggage vs Trace Context: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Baggage Propagation to propagate a business-level `customerId` and `accountTier` across an entire microservice call graph without recording them in trace span names.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Propagating cross-cutting business metadata (e.g., customerId, tier) across service boundaries is under consideration.",
    options: [
      { id: 'A', text: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers." },
      { id: 'B', text: "Append customer IDs to every database column name." },
      { id: 'C', text: "Pass customer metadata in raw TCP socket options." },
      { id: 'D', text: "Baggage is not supported in OpenTelemetry architectures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the OpenTelemetry Baggage API to attach key-value pairs that are propagated across network boundaries via W3C Baggage headers. While TraceContext carries identifiers required for tracing (trace ID, span ID), OpenTelemetry Baggage carries arbitrary contextual key-value pairs across service boundaries. Baggage travels via the `baggage` HTTP header, making business metadata available to downstream services for tagging or routing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/baggage/",
    tags: ["Baggage Propagation", "Baggage API", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-281",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Tracing Data Model: Tracer, Span, and Trace ID: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Trace Model to model an operation within a payment service that performs an external credit card authorization and records fraud check timestamps.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Understanding the hierarchy of TracerProvider, Tracer, Spans, Events, and Links is under consideration.",
    options: [
      { id: 'A', text: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events." },
      { id: 'B', text: "Create a new Trace ID for every individual function call." },
      { id: 'C', text: "Write timestamps to a flat text file on disk." },
      { id: 'D', text: "Spans cannot contain attributes or events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events. In OpenTelemetry, a Trace is a directed acyclic graph of Spans representing an end-to-end request journey. A Span represents a single unit of work with a name, start/end timestamps, attributes (key-value metadata), Span Events (timestamped annotations like exceptions), and Links.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Trace Model", "Tracing Data Model", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-282",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Tracing Data Model: Tracer, Span, and Trace ID: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Trace Model to model an operation within a payment service that performs an external credit card authorization and records fraud check timestamps.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Understanding the hierarchy of TracerProvider, Tracer, Spans, Events, and Links is under consideration.",
    options: [
      { id: 'A', text: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events." },
      { id: 'B', text: "Create a new Trace ID for every individual function call." },
      { id: 'C', text: "Write timestamps to a flat text file on disk." },
      { id: 'D', text: "Spans cannot contain attributes or events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events. In OpenTelemetry, a Trace is a directed acyclic graph of Spans representing an end-to-end request journey. A Span represents a single unit of work with a name, start/end timestamps, attributes (key-value metadata), Span Events (timestamped annotations like exceptions), and Links.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Trace Model", "Tracing Data Model", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-283",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Tracing Data Model: Tracer, Span, and Trace ID: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Trace Model to model an operation within a payment service that performs an external credit card authorization and records fraud check timestamps.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Understanding the hierarchy of TracerProvider, Tracer, Spans, Events, and Links is under consideration.",
    options: [
      { id: 'A', text: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events." },
      { id: 'B', text: "Create a new Trace ID for every individual function call." },
      { id: 'C', text: "Write timestamps to a flat text file on disk." },
      { id: 'D', text: "Spans cannot contain attributes or events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events. In OpenTelemetry, a Trace is a directed acyclic graph of Spans representing an end-to-end request journey. A Span represents a single unit of work with a name, start/end timestamps, attributes (key-value metadata), Span Events (timestamped annotations like exceptions), and Links.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Trace Model", "Tracing Data Model", "Security And Governance"]
  },
  {
    id: "cncf-otca-284",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Tracing Data Model: Tracer, Span, and Trace ID: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Trace Model to model an operation within a payment service that performs an external credit card authorization and records fraud check timestamps.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Understanding the hierarchy of TracerProvider, Tracer, Spans, Events, and Links is under consideration.",
    options: [
      { id: 'A', text: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events." },
      { id: 'B', text: "Create a new Trace ID for every individual function call." },
      { id: 'C', text: "Write timestamps to a flat text file on disk." },
      { id: 'D', text: "Spans cannot contain attributes or events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events. In OpenTelemetry, a Trace is a directed acyclic graph of Spans representing an end-to-end request journey. A Span represents a single unit of work with a name, start/end timestamps, attributes (key-value metadata), Span Events (timestamped annotations like exceptions), and Links.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Trace Model", "Tracing Data Model", "Microservice Migration"]
  },
  {
    id: "cncf-otca-285",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Tracing Data Model: Tracer, Span, and Trace ID: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Trace Model to model an operation within a payment service that performs an external credit card authorization and records fraud check timestamps.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Understanding the hierarchy of TracerProvider, Tracer, Spans, Events, and Links is under consideration.",
    options: [
      { id: 'A', text: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events." },
      { id: 'B', text: "Create a new Trace ID for every individual function call." },
      { id: 'C', text: "Write timestamps to a flat text file on disk." },
      { id: 'D', text: "Spans cannot contain attributes or events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Span from the Tracer, record start/end timestamps, add attributes (`payment.amount`), and record point-in-time Events. In OpenTelemetry, a Trace is a directed acyclic graph of Spans representing an end-to-end request journey. A Span represents a single unit of work with a name, start/end timestamps, attributes (key-value metadata), Span Events (timestamped annotations like exceptions), and Links.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Trace Model", "Tracing Data Model", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-286",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Metrics Data Model: Counter, Gauge, UpDownCounter, and Histogram: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Metrics Model to choose the correct OpenTelemetry metric instruments to measure total HTTP requests, current active WebSocket connections, and request latencies.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Selecting appropriate metric instruments: Counter, Asynchronous Gauge, Histogram is under consideration.",
    options: [
      { id: 'A', text: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations." },
      { id: 'B', text: "Use a Counter for request latency." },
      { id: 'C', text: "Use an UpDownCounter for cumulative lifetime requests." },
      { id: 'D', text: "Measure all values using distributed traces instead of metric instruments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations. OpenTelemetry provides synchronous and asynchronous metric instruments: `Counter` (monotonically increasing values like total requests), `UpDownCounter` (values that increase and decrease like queue size), `Gauge` (current non-additive values like temperature), and `Histogram` (statistical distribution like latency).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/",
    tags: ["Metrics Model", "Metrics Instruments", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-287",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Metrics Data Model: Counter, Gauge, UpDownCounter, and Histogram: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Metrics Model to choose the correct OpenTelemetry metric instruments to measure total HTTP requests, current active WebSocket connections, and request latencies.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Selecting appropriate metric instruments: Counter, Asynchronous Gauge, Histogram is under consideration.",
    options: [
      { id: 'A', text: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations." },
      { id: 'B', text: "Use a Counter for request latency." },
      { id: 'C', text: "Use an UpDownCounter for cumulative lifetime requests." },
      { id: 'D', text: "Measure all values using distributed traces instead of metric instruments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations. OpenTelemetry provides synchronous and asynchronous metric instruments: `Counter` (monotonically increasing values like total requests), `UpDownCounter` (values that increase and decrease like queue size), `Gauge` (current non-additive values like temperature), and `Histogram` (statistical distribution like latency).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/",
    tags: ["Metrics Model", "Metrics Instruments", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-288",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Metrics Data Model: Counter, Gauge, UpDownCounter, and Histogram: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Metrics Model to choose the correct OpenTelemetry metric instruments to measure total HTTP requests, current active WebSocket connections, and request latencies.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Selecting appropriate metric instruments: Counter, Asynchronous Gauge, Histogram is under consideration.",
    options: [
      { id: 'A', text: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations." },
      { id: 'B', text: "Use a Counter for request latency." },
      { id: 'C', text: "Use an UpDownCounter for cumulative lifetime requests." },
      { id: 'D', text: "Measure all values using distributed traces instead of metric instruments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations. OpenTelemetry provides synchronous and asynchronous metric instruments: `Counter` (monotonically increasing values like total requests), `UpDownCounter` (values that increase and decrease like queue size), `Gauge` (current non-additive values like temperature), and `Histogram` (statistical distribution like latency).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/",
    tags: ["Metrics Model", "Metrics Instruments", "Security And Governance"]
  },
  {
    id: "cncf-otca-289",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Metrics Data Model: Counter, Gauge, UpDownCounter, and Histogram: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Metrics Model to choose the correct OpenTelemetry metric instruments to measure total HTTP requests, current active WebSocket connections, and request latencies.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Selecting appropriate metric instruments: Counter, Asynchronous Gauge, Histogram is under consideration.",
    options: [
      { id: 'A', text: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations." },
      { id: 'B', text: "Use a Counter for request latency." },
      { id: 'C', text: "Use an UpDownCounter for cumulative lifetime requests." },
      { id: 'D', text: "Measure all values using distributed traces instead of metric instruments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations. OpenTelemetry provides synchronous and asynchronous metric instruments: `Counter` (monotonically increasing values like total requests), `UpDownCounter` (values that increase and decrease like queue size), `Gauge` (current non-additive values like temperature), and `Histogram` (statistical distribution like latency).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/",
    tags: ["Metrics Model", "Metrics Instruments", "Microservice Migration"]
  },
  {
    id: "cncf-otca-290",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Metrics Data Model: Counter, Gauge, UpDownCounter, and Histogram: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Metrics Model to choose the correct OpenTelemetry metric instruments to measure total HTTP requests, current active WebSocket connections, and request latencies.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Selecting appropriate metric instruments: Counter, Asynchronous Gauge, Histogram is under consideration.",
    options: [
      { id: 'A', text: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations." },
      { id: 'B', text: "Use a Counter for request latency." },
      { id: 'C', text: "Use an UpDownCounter for cumulative lifetime requests." },
      { id: 'D', text: "Measure all values using distributed traces instead of metric instruments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a `Counter` for total requests, an `UpDownCounter` or `Gauge` for active connections, and a `Histogram` for request durations. OpenTelemetry provides synchronous and asynchronous metric instruments: `Counter` (monotonically increasing values like total requests), `UpDownCounter` (values that increase and decrease like queue size), `Gauge` (current non-additive values like temperature), and `Histogram` (statistical distribution like latency).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/",
    tags: ["Metrics Model", "Metrics Instruments", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-291",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Logs Data Model and Log Bridge API: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Logs Model to integrate existing application logging frameworks (Log4j, Zap, Serilog, Winston) into OpenTelemetry without rewriting all logging calls.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Integrating legacy application logging frameworks into OpenTelemetry via Log Appenders is under consideration.",
    options: [
      { id: 'A', text: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records." },
      { id: 'B', text: "Manually rewrite thousands of log statements across the entire application codebase." },
      { id: 'C', text: "Disable application logging and rely solely on distributed traces." },
      { id: 'D', text: "Pipe stdout logs directly into an unencrypted public web server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records. OpenTelemetry does not aim to replace established logging libraries. Instead, it provides the Log Bridge API and SDK Log Appenders. Log appenders hook into existing frameworks (e.g., Logback, Winston), translating standard log events into OpenTelemetry log records enriched with active TraceID and SpanID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/",
    tags: ["Logs Model", "Log Bridge API", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-292",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Logs Data Model and Log Bridge API: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Logs Model to integrate existing application logging frameworks (Log4j, Zap, Serilog, Winston) into OpenTelemetry without rewriting all logging calls.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Integrating legacy application logging frameworks into OpenTelemetry via Log Appenders is under consideration.",
    options: [
      { id: 'A', text: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records." },
      { id: 'B', text: "Manually rewrite thousands of log statements across the entire application codebase." },
      { id: 'C', text: "Disable application logging and rely solely on distributed traces." },
      { id: 'D', text: "Pipe stdout logs directly into an unencrypted public web server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records. OpenTelemetry does not aim to replace established logging libraries. Instead, it provides the Log Bridge API and SDK Log Appenders. Log appenders hook into existing frameworks (e.g., Logback, Winston), translating standard log events into OpenTelemetry log records enriched with active TraceID and SpanID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/",
    tags: ["Logs Model", "Log Bridge API", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-293",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Logs Data Model and Log Bridge API: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Logs Model to integrate existing application logging frameworks (Log4j, Zap, Serilog, Winston) into OpenTelemetry without rewriting all logging calls.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Integrating legacy application logging frameworks into OpenTelemetry via Log Appenders is under consideration.",
    options: [
      { id: 'A', text: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records." },
      { id: 'B', text: "Manually rewrite thousands of log statements across the entire application codebase." },
      { id: 'C', text: "Disable application logging and rely solely on distributed traces." },
      { id: 'D', text: "Pipe stdout logs directly into an unencrypted public web server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records. OpenTelemetry does not aim to replace established logging libraries. Instead, it provides the Log Bridge API and SDK Log Appenders. Log appenders hook into existing frameworks (e.g., Logback, Winston), translating standard log events into OpenTelemetry log records enriched with active TraceID and SpanID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/",
    tags: ["Logs Model", "Log Bridge API", "Security And Governance"]
  },
  {
    id: "cncf-otca-294",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Logs Data Model and Log Bridge API: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Logs Model to integrate existing application logging frameworks (Log4j, Zap, Serilog, Winston) into OpenTelemetry without rewriting all logging calls.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Integrating legacy application logging frameworks into OpenTelemetry via Log Appenders is under consideration.",
    options: [
      { id: 'A', text: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records." },
      { id: 'B', text: "Manually rewrite thousands of log statements across the entire application codebase." },
      { id: 'C', text: "Disable application logging and rely solely on distributed traces." },
      { id: 'D', text: "Pipe stdout logs directly into an unencrypted public web server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records. OpenTelemetry does not aim to replace established logging libraries. Instead, it provides the Log Bridge API and SDK Log Appenders. Log appenders hook into existing frameworks (e.g., Logback, Winston), translating standard log events into OpenTelemetry log records enriched with active TraceID and SpanID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/",
    tags: ["Logs Model", "Log Bridge API", "Microservice Migration"]
  },
  {
    id: "cncf-otca-295",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Logs Data Model and Log Bridge API: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Logs Model to integrate existing application logging frameworks (Log4j, Zap, Serilog, Winston) into OpenTelemetry without rewriting all logging calls.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Integrating legacy application logging frameworks into OpenTelemetry via Log Appenders is under consideration.",
    options: [
      { id: 'A', text: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records." },
      { id: 'B', text: "Manually rewrite thousands of log statements across the entire application codebase." },
      { id: 'C', text: "Disable application logging and rely solely on distributed traces." },
      { id: 'D', text: "Pipe stdout logs directly into an unencrypted public web server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the appropriate OpenTelemetry Log Appender/Bridge library that intercepts logs from existing frameworks and emits OTel log records. OpenTelemetry does not aim to replace established logging libraries. Instead, it provides the Log Bridge API and SDK Log Appenders. Log appenders hook into existing frameworks (e.g., Logback, Winston), translating standard log events into OpenTelemetry log records enriched with active TraceID and SpanID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/",
    tags: ["Logs Model", "Log Bridge API", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-296",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Sampling Strategies: Head-Based vs Tail-Based Sampling: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Sampling Strategies to ensure that 100% of failed HTTP requests (5xx) and high-latency spans are captured while discarding 99% of fast, repetitive health checks.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Trade-offs between head-based sampling at SDK and tail-based sampling in Collectors is under consideration.",
    options: [
      { id: 'A', text: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies." },
      { id: 'B', text: "Use 1% Head-Based sampling at the application SDK, which randomly discards 99% of error traces before they complete." },
      { id: 'C', text: "Capture 100% of all traces unconditionally, overwhelming storage backends and incurring massive network bills." },
      { id: 'D', text: "Disable sampling completely and collect zero traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies. Head-based sampling decides whether to sample at the start of a trace (before outcome is known), risking dropping rare errors. Tail-based sampling buffers spans in an OpenTelemetry Collector until the trace completes, making sampling decisions based on actual outcome (e.g., HTTP status 500, duration &gt; 2s).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Sampling Strategies", "Sampling Strategies", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-297",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Sampling Strategies: Head-Based vs Tail-Based Sampling: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Sampling Strategies to ensure that 100% of failed HTTP requests (5xx) and high-latency spans are captured while discarding 99% of fast, repetitive health checks.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Trade-offs between head-based sampling at SDK and tail-based sampling in Collectors is under consideration.",
    options: [
      { id: 'A', text: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies." },
      { id: 'B', text: "Use 1% Head-Based sampling at the application SDK, which randomly discards 99% of error traces before they complete." },
      { id: 'C', text: "Capture 100% of all traces unconditionally, overwhelming storage backends and incurring massive network bills." },
      { id: 'D', text: "Disable sampling completely and collect zero traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies. Head-based sampling decides whether to sample at the start of a trace (before outcome is known), risking dropping rare errors. Tail-based sampling buffers spans in an OpenTelemetry Collector until the trace completes, making sampling decisions based on actual outcome (e.g., HTTP status 500, duration &gt; 2s).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Sampling Strategies", "Sampling Strategies", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-298",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Sampling Strategies: Head-Based vs Tail-Based Sampling: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Sampling Strategies to ensure that 100% of failed HTTP requests (5xx) and high-latency spans are captured while discarding 99% of fast, repetitive health checks.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Trade-offs between head-based sampling at SDK and tail-based sampling in Collectors is under consideration.",
    options: [
      { id: 'A', text: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies." },
      { id: 'B', text: "Use 1% Head-Based sampling at the application SDK, which randomly discards 99% of error traces before they complete." },
      { id: 'C', text: "Capture 100% of all traces unconditionally, overwhelming storage backends and incurring massive network bills." },
      { id: 'D', text: "Disable sampling completely and collect zero traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies. Head-based sampling decides whether to sample at the start of a trace (before outcome is known), risking dropping rare errors. Tail-based sampling buffers spans in an OpenTelemetry Collector until the trace completes, making sampling decisions based on actual outcome (e.g., HTTP status 500, duration &gt; 2s).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Sampling Strategies", "Sampling Strategies", "Security And Governance"]
  },
  {
    id: "cncf-otca-299",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Sampling Strategies: Head-Based vs Tail-Based Sampling: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Sampling Strategies to ensure that 100% of failed HTTP requests (5xx) and high-latency spans are captured while discarding 99% of fast, repetitive health checks.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Trade-offs between head-based sampling at SDK and tail-based sampling in Collectors is under consideration.",
    options: [
      { id: 'A', text: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies." },
      { id: 'B', text: "Use 1% Head-Based sampling at the application SDK, which randomly discards 99% of error traces before they complete." },
      { id: 'C', text: "Capture 100% of all traces unconditionally, overwhelming storage backends and incurring massive network bills." },
      { id: 'D', text: "Disable sampling completely and collect zero traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies. Head-based sampling decides whether to sample at the start of a trace (before outcome is known), risking dropping rare errors. Tail-based sampling buffers spans in an OpenTelemetry Collector until the trace completes, making sampling decisions based on actual outcome (e.g., HTTP status 500, duration &gt; 2s).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Sampling Strategies", "Sampling Strategies", "Microservice Migration"]
  },
  {
    id: "cncf-otca-300",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Sampling Strategies: Head-Based vs Tail-Based Sampling: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Sampling Strategies to ensure that 100% of failed HTTP requests (5xx) and high-latency spans are captured while discarding 99% of fast, repetitive health checks.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Trade-offs between head-based sampling at SDK and tail-based sampling in Collectors is under consideration.",
    options: [
      { id: 'A', text: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies." },
      { id: 'B', text: "Use 1% Head-Based sampling at the application SDK, which randomly discards 99% of error traces before they complete." },
      { id: 'C', text: "Capture 100% of all traces unconditionally, overwhelming storage backends and incurring massive network bills." },
      { id: 'D', text: "Disable sampling completely and collect zero traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tail-Based Sampling in the OpenTelemetry Collector, evaluating complete traces after completion to retain errors and high latencies. Head-based sampling decides whether to sample at the start of a trace (before outcome is known), risking dropping rare errors. Tail-based sampling buffers spans in an OpenTelemetry Collector until the trace completes, making sampling decisions based on actual outcome (e.g., HTTP status 500, duration &gt; 2s).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Sampling Strategies", "Sampling Strategies", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_12;
