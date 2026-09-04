export const CNCF_OTCA_QUESTIONS_17 = [
  {
    id: "cncf-otca-401",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording Exceptions and Setting Span Status: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Span Status to ensure that an unhandled database exception caught in a microservice is properly reflected in the distributed trace and marks the span as failed.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Using recordException and setStatus(StatusCode.ERROR) for failure diagnostics is under consideration.",
    options: [
      { id: 'A', text: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag." },
      { id: 'B', text: "Log the error to a text file and leave the span status as OK." },
      { id: 'C', text: "Delete the span so it does not show up in the tracing dashboard." },
      { id: 'D', text: "Catch the exception silently and return HTTP 200." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag. In OpenTelemetry, simply recording an error event via `RecordError()` does not automatically mark the span status as an error. To ensure tracing backends display the span in red as a failure, developers must explicitly call `SetStatus(StatusCode.ERROR, description)`.",
    referenceUrl: "https://opentelemetry.io/docs/languages/python/instrumentation/#record-exceptions-in-spans",
    tags: ["Span Status", "Span Status & Errors", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-402",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording Exceptions and Setting Span Status: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Span Status to ensure that an unhandled database exception caught in a microservice is properly reflected in the distributed trace and marks the span as failed.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Using recordException and setStatus(StatusCode.ERROR) for failure diagnostics is under consideration.",
    options: [
      { id: 'A', text: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag." },
      { id: 'B', text: "Log the error to a text file and leave the span status as OK." },
      { id: 'C', text: "Delete the span so it does not show up in the tracing dashboard." },
      { id: 'D', text: "Catch the exception silently and return HTTP 200." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag. In OpenTelemetry, simply recording an error event via `RecordError()` does not automatically mark the span status as an error. To ensure tracing backends display the span in red as a failure, developers must explicitly call `SetStatus(StatusCode.ERROR, description)`.",
    referenceUrl: "https://opentelemetry.io/docs/languages/python/instrumentation/#record-exceptions-in-spans",
    tags: ["Span Status", "Span Status & Errors", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-403",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording Exceptions and Setting Span Status: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Span Status to ensure that an unhandled database exception caught in a microservice is properly reflected in the distributed trace and marks the span as failed.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Using recordException and setStatus(StatusCode.ERROR) for failure diagnostics is under consideration.",
    options: [
      { id: 'A', text: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag." },
      { id: 'B', text: "Log the error to a text file and leave the span status as OK." },
      { id: 'C', text: "Delete the span so it does not show up in the tracing dashboard." },
      { id: 'D', text: "Catch the exception silently and return HTTP 200." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag. In OpenTelemetry, simply recording an error event via `RecordError()` does not automatically mark the span status as an error. To ensure tracing backends display the span in red as a failure, developers must explicitly call `SetStatus(StatusCode.ERROR, description)`.",
    referenceUrl: "https://opentelemetry.io/docs/languages/python/instrumentation/#record-exceptions-in-spans",
    tags: ["Span Status", "Span Status & Errors", "Security And Governance"]
  },
  {
    id: "cncf-otca-404",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording Exceptions and Setting Span Status: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Span Status to ensure that an unhandled database exception caught in a microservice is properly reflected in the distributed trace and marks the span as failed.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Using recordException and setStatus(StatusCode.ERROR) for failure diagnostics is under consideration.",
    options: [
      { id: 'A', text: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag." },
      { id: 'B', text: "Log the error to a text file and leave the span status as OK." },
      { id: 'C', text: "Delete the span so it does not show up in the tracing dashboard." },
      { id: 'D', text: "Catch the exception silently and return HTTP 200." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag. In OpenTelemetry, simply recording an error event via `RecordError()` does not automatically mark the span status as an error. To ensure tracing backends display the span in red as a failure, developers must explicitly call `SetStatus(StatusCode.ERROR, description)`.",
    referenceUrl: "https://opentelemetry.io/docs/languages/python/instrumentation/#record-exceptions-in-spans",
    tags: ["Span Status", "Span Status & Errors", "Microservice Migration"]
  },
  {
    id: "cncf-otca-405",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Recording Exceptions and Setting Span Status: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Span Status to ensure that an unhandled database exception caught in a microservice is properly reflected in the distributed trace and marks the span as failed.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Using recordException and setStatus(StatusCode.ERROR) for failure diagnostics is under consideration.",
    options: [
      { id: 'A', text: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag." },
      { id: 'B', text: "Log the error to a text file and leave the span status as OK." },
      { id: 'C', text: "Delete the span so it does not show up in the tracing dashboard." },
      { id: 'D', text: "Catch the exception silently and return HTTP 200." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call `span.RecordError(err)` to attach exception details as a Span Event and call `span.SetStatus(codes.Error, err.Error())` to set the error flag. In OpenTelemetry, simply recording an error event via `RecordError()` does not automatically mark the span status as an error. To ensure tracing backends display the span in red as a failure, developers must explicitly call `SetStatus(StatusCode.ERROR, description)`.",
    referenceUrl: "https://opentelemetry.io/docs/languages/python/instrumentation/#record-exceptions-in-spans",
    tags: ["Span Status", "Span Status & Errors", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-406",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Span Links for Asynchronous and Fan-Out Workflows: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Span Links to model a batch processing job that pulls 50 orders from an Amazon SQS queue and processes them in a single transaction.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Linking causally related traces across batch jobs and message queues using Span Links is under consideration.",
    options: [
      { id: 'A', text: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts." },
      { id: 'B', text: "Force all 50 orders to share a single parent trace ID sequentially." },
      { id: 'C', text: "Drop the trace contexts of all 50 orders." },
      { id: 'D', text: "Create 50 duplicate batch processing jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts. While parent-child relationships model direct synchronous calls, `Span Links` connect a span to one or more causally related spans across different traces. Links are the standard mechanism for modeling asynchronous fan-in/fan-out batch processors and message consumer workflows.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/#span-links",
    tags: ["Span Links", "Span Links", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-407",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Span Links for Asynchronous and Fan-Out Workflows: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Span Links to model a batch processing job that pulls 50 orders from an Amazon SQS queue and processes them in a single transaction.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Linking causally related traces across batch jobs and message queues using Span Links is under consideration.",
    options: [
      { id: 'A', text: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts." },
      { id: 'B', text: "Force all 50 orders to share a single parent trace ID sequentially." },
      { id: 'C', text: "Drop the trace contexts of all 50 orders." },
      { id: 'D', text: "Create 50 duplicate batch processing jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts. While parent-child relationships model direct synchronous calls, `Span Links` connect a span to one or more causally related spans across different traces. Links are the standard mechanism for modeling asynchronous fan-in/fan-out batch processors and message consumer workflows.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/#span-links",
    tags: ["Span Links", "Span Links", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-408",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Span Links for Asynchronous and Fan-Out Workflows: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Span Links to model a batch processing job that pulls 50 orders from an Amazon SQS queue and processes them in a single transaction.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Linking causally related traces across batch jobs and message queues using Span Links is under consideration.",
    options: [
      { id: 'A', text: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts." },
      { id: 'B', text: "Force all 50 orders to share a single parent trace ID sequentially." },
      { id: 'C', text: "Drop the trace contexts of all 50 orders." },
      { id: 'D', text: "Create 50 duplicate batch processing jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts. While parent-child relationships model direct synchronous calls, `Span Links` connect a span to one or more causally related spans across different traces. Links are the standard mechanism for modeling asynchronous fan-in/fan-out batch processors and message consumer workflows.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/#span-links",
    tags: ["Span Links", "Span Links", "Security And Governance"]
  },
  {
    id: "cncf-otca-409",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Span Links for Asynchronous and Fan-Out Workflows: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Span Links to model a batch processing job that pulls 50 orders from an Amazon SQS queue and processes them in a single transaction.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Linking causally related traces across batch jobs and message queues using Span Links is under consideration.",
    options: [
      { id: 'A', text: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts." },
      { id: 'B', text: "Force all 50 orders to share a single parent trace ID sequentially." },
      { id: 'C', text: "Drop the trace contexts of all 50 orders." },
      { id: 'D', text: "Create 50 duplicate batch processing jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts. While parent-child relationships model direct synchronous calls, `Span Links` connect a span to one or more causally related spans across different traces. Links are the standard mechanism for modeling asynchronous fan-in/fan-out batch processors and message consumer workflows.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/#span-links",
    tags: ["Span Links", "Span Links", "Microservice Migration"]
  },
  {
    id: "cncf-otca-410",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Span Links for Asynchronous and Fan-Out Workflows: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Span Links to model a batch processing job that pulls 50 orders from an Amazon SQS queue and processes them in a single transaction.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Linking causally related traces across batch jobs and message queues using Span Links is under consideration.",
    options: [
      { id: 'A', text: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts." },
      { id: 'B', text: "Force all 50 orders to share a single parent trace ID sequentially." },
      { id: 'C', text: "Drop the trace contexts of all 50 orders." },
      { id: 'D', text: "Create 50 duplicate batch processing jobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a span for the batch job and add `Span Links` pointing to each of the 50 individual originating order trace contexts. While parent-child relationships model direct synchronous calls, `Span Links` connect a span to one or more causally related spans across different traces. Links are the standard mechanism for modeling asynchronous fan-in/fan-out batch processors and message consumer workflows.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/#span-links",
    tags: ["Span Links", "Span Links", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-411",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Counters vs Histograms in Practice: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Metrics Instrumentation to instrument a payment processing endpoint to track the total volume of processed transactions and the 95th percentile latency distribution.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Instrumenting request rates with Counter and response durations with Histogram is under consideration.",
    options: [
      { id: 'A', text: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`)." },
      { id: 'B', text: "Create a Gauge instrument for total payments." },
      { id: 'C', text: "Create a single Counter instrument to measure both latency and total volume." },
      { id: 'D', text: "Calculate percentiles in client code and emit static strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`). Counters represent cumulative values that only increase (transaction counts). Histograms measure the statistical distribution of values (latencies, payload sizes), allowing backends to calculate averages, medians, and percentiles (p95, p99) dynamically.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#metric-instruments",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-412",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Counters vs Histograms in Practice: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Metrics Instrumentation to instrument a payment processing endpoint to track the total volume of processed transactions and the 95th percentile latency distribution.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Instrumenting request rates with Counter and response durations with Histogram is under consideration.",
    options: [
      { id: 'A', text: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`)." },
      { id: 'B', text: "Create a Gauge instrument for total payments." },
      { id: 'C', text: "Create a single Counter instrument to measure both latency and total volume." },
      { id: 'D', text: "Calculate percentiles in client code and emit static strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`). Counters represent cumulative values that only increase (transaction counts). Histograms measure the statistical distribution of values (latencies, payload sizes), allowing backends to calculate averages, medians, and percentiles (p95, p99) dynamically.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#metric-instruments",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-413",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Counters vs Histograms in Practice: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Metrics Instrumentation to instrument a payment processing endpoint to track the total volume of processed transactions and the 95th percentile latency distribution.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Instrumenting request rates with Counter and response durations with Histogram is under consideration.",
    options: [
      { id: 'A', text: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`)." },
      { id: 'B', text: "Create a Gauge instrument for total payments." },
      { id: 'C', text: "Create a single Counter instrument to measure both latency and total volume." },
      { id: 'D', text: "Calculate percentiles in client code and emit static strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`). Counters represent cumulative values that only increase (transaction counts). Histograms measure the statistical distribution of values (latencies, payload sizes), allowing backends to calculate averages, medians, and percentiles (p95, p99) dynamically.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#metric-instruments",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Security And Governance"]
  },
  {
    id: "cncf-otca-414",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Counters vs Histograms in Practice: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Metrics Instrumentation to instrument a payment processing endpoint to track the total volume of processed transactions and the 95th percentile latency distribution.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Instrumenting request rates with Counter and response durations with Histogram is under consideration.",
    options: [
      { id: 'A', text: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`)." },
      { id: 'B', text: "Create a Gauge instrument for total payments." },
      { id: 'C', text: "Create a single Counter instrument to measure both latency and total volume." },
      { id: 'D', text: "Calculate percentiles in client code and emit static strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`). Counters represent cumulative values that only increase (transaction counts). Histograms measure the statistical distribution of values (latencies, payload sizes), allowing backends to calculate averages, medians, and percentiles (p95, p99) dynamically.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#metric-instruments",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Microservice Migration"]
  },
  {
    id: "cncf-otca-415",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Counters vs Histograms in Practice: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Metrics Instrumentation to instrument a payment processing endpoint to track the total volume of processed transactions and the 95th percentile latency distribution.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Instrumenting request rates with Counter and response durations with Histogram is under consideration.",
    options: [
      { id: 'A', text: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`)." },
      { id: 'B', text: "Create a Gauge instrument for total payments." },
      { id: 'C', text: "Create a single Counter instrument to measure both latency and total volume." },
      { id: 'D', text: "Calculate percentiles in client code and emit static strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `Counter` instrument (`payments.processed.total`) and a `Histogram` instrument (`payments.processing.duration`). Counters represent cumulative values that only increase (transaction counts). Histograms measure the statistical distribution of values (latencies, payload sizes), allowing backends to calculate averages, medians, and percentiles (p95, p99) dynamically.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#metric-instruments",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-416",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Asynchronous (Observable) Gauges and Counters: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Asynchronous Metrics to report current memory usage and active thread counts from the underlying runtime environment without modifying application transaction loops.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Registering callback-based observable instruments for polled system state is under consideration.",
    options: [
      { id: 'A', text: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data." },
      { id: 'B', text: "Call a synchronous Counter inside every application function." },
      { id: 'C', text: "Spawn a background thread that sleeps in an infinite loop pushing data every millisecond." },
      { id: 'D', text: "Asynchronous instruments are not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data. Asynchronous (observable) instruments (`ObservableGauge`, `ObservableCounter`) execute a registered callback function on-demand when metrics are scraped or read. This avoids runtime overhead during normal transactions and is ideal for reporting system metrics (memory, thread counts).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#asynchronous-instruments",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-417",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Asynchronous (Observable) Gauges and Counters: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Asynchronous Metrics to report current memory usage and active thread counts from the underlying runtime environment without modifying application transaction loops.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Registering callback-based observable instruments for polled system state is under consideration.",
    options: [
      { id: 'A', text: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data." },
      { id: 'B', text: "Call a synchronous Counter inside every application function." },
      { id: 'C', text: "Spawn a background thread that sleeps in an infinite loop pushing data every millisecond." },
      { id: 'D', text: "Asynchronous instruments are not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data. Asynchronous (observable) instruments (`ObservableGauge`, `ObservableCounter`) execute a registered callback function on-demand when metrics are scraped or read. This avoids runtime overhead during normal transactions and is ideal for reporting system metrics (memory, thread counts).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#asynchronous-instruments",
    tags: ["Asynchronous Metrics", "Observable Instruments", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-418",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Asynchronous (Observable) Gauges and Counters: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Asynchronous Metrics to report current memory usage and active thread counts from the underlying runtime environment without modifying application transaction loops.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Registering callback-based observable instruments for polled system state is under consideration.",
    options: [
      { id: 'A', text: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data." },
      { id: 'B', text: "Call a synchronous Counter inside every application function." },
      { id: 'C', text: "Spawn a background thread that sleeps in an infinite loop pushing data every millisecond." },
      { id: 'D', text: "Asynchronous instruments are not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data. Asynchronous (observable) instruments (`ObservableGauge`, `ObservableCounter`) execute a registered callback function on-demand when metrics are scraped or read. This avoids runtime overhead during normal transactions and is ideal for reporting system metrics (memory, thread counts).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#asynchronous-instruments",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Security And Governance"]
  },
  {
    id: "cncf-otca-419",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Asynchronous (Observable) Gauges and Counters: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Asynchronous Metrics to report current memory usage and active thread counts from the underlying runtime environment without modifying application transaction loops.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Registering callback-based observable instruments for polled system state is under consideration.",
    options: [
      { id: 'A', text: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data." },
      { id: 'B', text: "Call a synchronous Counter inside every application function." },
      { id: 'C', text: "Spawn a background thread that sleeps in an infinite loop pushing data every millisecond." },
      { id: 'D', text: "Asynchronous instruments are not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data. Asynchronous (observable) instruments (`ObservableGauge`, `ObservableCounter`) execute a registered callback function on-demand when metrics are scraped or read. This avoids runtime overhead during normal transactions and is ideal for reporting system metrics (memory, thread counts).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#asynchronous-instruments",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Microservice Migration"]
  },
  {
    id: "cncf-otca-420",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metrics: Asynchronous (Observable) Gauges and Counters: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Asynchronous Metrics to report current memory usage and active thread counts from the underlying runtime environment without modifying application transaction loops.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Registering callback-based observable instruments for polled system state is under consideration.",
    options: [
      { id: 'A', text: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data." },
      { id: 'B', text: "Call a synchronous Counter inside every application function." },
      { id: 'C', text: "Spawn a background thread that sleeps in an infinite loop pushing data every millisecond." },
      { id: 'D', text: "Asynchronous instruments are not supported in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Register an `ObservableGauge` with a callback function that queries the runtime memory API whenever the metric reader collects data. Asynchronous (observable) instruments (`ObservableGauge`, `ObservableCounter`) execute a registered callback function on-demand when metrics are scraped or read. This avoids runtime overhead during normal transactions and is ideal for reporting system metrics (memory, thread counts).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#asynchronous-instruments",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-421",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric Exemplars: Linking Metrics to Traces: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Metric Exemplars to investigate an unexpected latency spike in a Prometheus histogram bucket and immediately jump to the exact distributed trace of the outlier request.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Attaching trace IDs to metric histogram buckets to inspect outlier requests is under consideration.",
    options: [
      { id: 'A', text: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations." },
      { id: 'B', text: "Manually log the trace ID and search through billions of log lines by eye." },
      { id: 'C', text: "Disable histograms and use distributed traces exclusively." },
      { id: 'D', text: "Exemplars require third-party proprietary software." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations. Exemplars link metric measurements to distributed traces. When a latency histogram records an observation, an Exemplar attaches the active `trace_id` and `span_id`. Observability tools (like Grafana) allow engineers clicking on a histogram bucket to jump directly to the trace.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exemplars",
    tags: ["Metric Exemplars", "Metric Exemplars", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-422",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric Exemplars: Linking Metrics to Traces: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Metric Exemplars to investigate an unexpected latency spike in a Prometheus histogram bucket and immediately jump to the exact distributed trace of the outlier request.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Attaching trace IDs to metric histogram buckets to inspect outlier requests is under consideration.",
    options: [
      { id: 'A', text: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations." },
      { id: 'B', text: "Manually log the trace ID and search through billions of log lines by eye." },
      { id: 'C', text: "Disable histograms and use distributed traces exclusively." },
      { id: 'D', text: "Exemplars require third-party proprietary software." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations. Exemplars link metric measurements to distributed traces. When a latency histogram records an observation, an Exemplar attaches the active `trace_id` and `span_id`. Observability tools (like Grafana) allow engineers clicking on a histogram bucket to jump directly to the trace.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exemplars",
    tags: ["Metric Exemplars", "Metric Exemplars", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-423",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric Exemplars: Linking Metrics to Traces: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Metric Exemplars to investigate an unexpected latency spike in a Prometheus histogram bucket and immediately jump to the exact distributed trace of the outlier request.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Attaching trace IDs to metric histogram buckets to inspect outlier requests is under consideration.",
    options: [
      { id: 'A', text: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations." },
      { id: 'B', text: "Manually log the trace ID and search through billions of log lines by eye." },
      { id: 'C', text: "Disable histograms and use distributed traces exclusively." },
      { id: 'D', text: "Exemplars require third-party proprietary software." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations. Exemplars link metric measurements to distributed traces. When a latency histogram records an observation, an Exemplar attaches the active `trace_id` and `span_id`. Observability tools (like Grafana) allow engineers clicking on a histogram bucket to jump directly to the trace.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exemplars",
    tags: ["Metric Exemplars", "Metric Exemplars", "Security And Governance"]
  },
  {
    id: "cncf-otca-424",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric Exemplars: Linking Metrics to Traces: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Metric Exemplars to investigate an unexpected latency spike in a Prometheus histogram bucket and immediately jump to the exact distributed trace of the outlier request.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Attaching trace IDs to metric histogram buckets to inspect outlier requests is under consideration.",
    options: [
      { id: 'A', text: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations." },
      { id: 'B', text: "Manually log the trace ID and search through billions of log lines by eye." },
      { id: 'C', text: "Disable histograms and use distributed traces exclusively." },
      { id: 'D', text: "Exemplars require third-party proprietary software." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations. Exemplars link metric measurements to distributed traces. When a latency histogram records an observation, an Exemplar attaches the active `trace_id` and `span_id`. Observability tools (like Grafana) allow engineers clicking on a histogram bucket to jump directly to the trace.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exemplars",
    tags: ["Metric Exemplars", "Metric Exemplars", "Microservice Migration"]
  },
  {
    id: "cncf-otca-425",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Metric Exemplars: Linking Metrics to Traces: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Metric Exemplars to investigate an unexpected latency spike in a Prometheus histogram bucket and immediately jump to the exact distributed trace of the outlier request.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Attaching trace IDs to metric histogram buckets to inspect outlier requests is under consideration.",
    options: [
      { id: 'A', text: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations." },
      { id: 'B', text: "Manually log the trace ID and search through billions of log lines by eye." },
      { id: 'C', text: "Disable histograms and use distributed traces exclusively." },
      { id: 'D', text: "Exemplars require third-party proprietary software." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `Exemplars` in the OpenTelemetry metric reader to automatically sample and attach active TraceIDs to histogram observations. Exemplars link metric measurements to distributed traces. When a latency histogram records an observation, an Exemplar attaches the active `trace_id` and `span_id`. Observability tools (like Grafana) allow engineers clicking on a histogram bucket to jump directly to the trace.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exemplars",
    tags: ["Metric Exemplars", "Metric Exemplars", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_17;
