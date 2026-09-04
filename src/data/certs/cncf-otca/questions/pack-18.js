export const CNCF_OTCA_QUESTIONS_18 = [
  {
    id: "cncf-otca-426",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Correlating Logs and Traces via Injected Context: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Log Correlation to enable developers to query an error in a centralized logging system and instantly retrieve the complete distributed trace of that failure.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Automatically injecting trace_id and span_id into structured JSON log outputs is under consideration.",
    options: [
      { id: 'A', text: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields." },
      { id: 'B', text: "Rely on timestamp matching across servers." },
      { id: 'C', text: "Instruct developers to manually write trace IDs in log message strings." },
      { id: 'D', text: "Disable structured logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields. Correlating logs and traces is a cornerstone of modern observability. When logging frameworks are integrated with OpenTelemetry context, every log line automatically includes `trace_id` and `span_id`, allowing logging platforms to link directly to tracing systems.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/#log-correlation",
    tags: ["Log Correlation", "Log Correlation", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-427",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Correlating Logs and Traces via Injected Context: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Log Correlation to enable developers to query an error in a centralized logging system and instantly retrieve the complete distributed trace of that failure.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Automatically injecting trace_id and span_id into structured JSON log outputs is under consideration.",
    options: [
      { id: 'A', text: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields." },
      { id: 'B', text: "Rely on timestamp matching across servers." },
      { id: 'C', text: "Instruct developers to manually write trace IDs in log message strings." },
      { id: 'D', text: "Disable structured logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields. Correlating logs and traces is a cornerstone of modern observability. When logging frameworks are integrated with OpenTelemetry context, every log line automatically includes `trace_id` and `span_id`, allowing logging platforms to link directly to tracing systems.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/#log-correlation",
    tags: ["Log Correlation", "Log Correlation", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-428",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Correlating Logs and Traces via Injected Context: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Log Correlation to enable developers to query an error in a centralized logging system and instantly retrieve the complete distributed trace of that failure.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Automatically injecting trace_id and span_id into structured JSON log outputs is under consideration.",
    options: [
      { id: 'A', text: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields." },
      { id: 'B', text: "Rely on timestamp matching across servers." },
      { id: 'C', text: "Instruct developers to manually write trace IDs in log message strings." },
      { id: 'D', text: "Disable structured logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields. Correlating logs and traces is a cornerstone of modern observability. When logging frameworks are integrated with OpenTelemetry context, every log line automatically includes `trace_id` and `span_id`, allowing logging platforms to link directly to tracing systems.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/#log-correlation",
    tags: ["Log Correlation", "Log Correlation", "Security And Governance"]
  },
  {
    id: "cncf-otca-429",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Correlating Logs and Traces via Injected Context: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Log Correlation to enable developers to query an error in a centralized logging system and instantly retrieve the complete distributed trace of that failure.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Automatically injecting trace_id and span_id into structured JSON log outputs is under consideration.",
    options: [
      { id: 'A', text: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields." },
      { id: 'B', text: "Rely on timestamp matching across servers." },
      { id: 'C', text: "Instruct developers to manually write trace IDs in log message strings." },
      { id: 'D', text: "Disable structured logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields. Correlating logs and traces is a cornerstone of modern observability. When logging frameworks are integrated with OpenTelemetry context, every log line automatically includes `trace_id` and `span_id`, allowing logging platforms to link directly to tracing systems.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/#log-correlation",
    tags: ["Log Correlation", "Log Correlation", "Microservice Migration"]
  },
  {
    id: "cncf-otca-430",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Correlating Logs and Traces via Injected Context: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Log Correlation to enable developers to query an error in a centralized logging system and instantly retrieve the complete distributed trace of that failure.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Automatically injecting trace_id and span_id into structured JSON log outputs is under consideration.",
    options: [
      { id: 'A', text: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields." },
      { id: 'B', text: "Rely on timestamp matching across servers." },
      { id: 'C', text: "Instruct developers to manually write trace IDs in log message strings." },
      { id: 'D', text: "Disable structured logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the logging library to inject active `trace_id` and `span_id` context into structured JSON log fields. Correlating logs and traces is a cornerstone of modern observability. When logging frameworks are integrated with OpenTelemetry context, every log line automatically includes `trace_id` and `span_id`, allowing logging platforms to link directly to tracing systems.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/logs/#log-correlation",
    tags: ["Log Correlation", "Log Correlation", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-431",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Custom Span Attributes and Cardinality Management: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Cardinality Management to prevent high-cardinality explosions that can crash Prometheus or incur massive cloud monitoring bills.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Balancing diagnostic detail with high-cardinality risks in attributes and metrics is under consideration.",
    options: [
      { id: 'A', text: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead." },
      { id: 'B', text: "Add unique user credit card numbers as metric dimensions." },
      { id: 'C', text: "Create a separate metric for every unique user session ID." },
      { id: 'D', text: "Disable all attributes across all metrics and traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead. High cardinality (millions of unique label/dimension combinations) severely degrades metric database performance. Best practice dictates using low-cardinality values (e.g., `http.status_code`, `region`) for metric dimensions, while high-cardinality identifiers (user IDs, order IDs) belong on trace spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#cardinality",
    tags: ["Cardinality Management", "Cardinality Governance", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-432",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Custom Span Attributes and Cardinality Management: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Cardinality Management to prevent high-cardinality explosions that can crash Prometheus or incur massive cloud monitoring bills.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Balancing diagnostic detail with high-cardinality risks in attributes and metrics is under consideration.",
    options: [
      { id: 'A', text: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead." },
      { id: 'B', text: "Add unique user credit card numbers as metric dimensions." },
      { id: 'C', text: "Create a separate metric for every unique user session ID." },
      { id: 'D', text: "Disable all attributes across all metrics and traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead. High cardinality (millions of unique label/dimension combinations) severely degrades metric database performance. Best practice dictates using low-cardinality values (e.g., `http.status_code`, `region`) for metric dimensions, while high-cardinality identifiers (user IDs, order IDs) belong on trace spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#cardinality",
    tags: ["Cardinality Management", "Cardinality Governance", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-433",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Custom Span Attributes and Cardinality Management: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Cardinality Management to prevent high-cardinality explosions that can crash Prometheus or incur massive cloud monitoring bills.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Balancing diagnostic detail with high-cardinality risks in attributes and metrics is under consideration.",
    options: [
      { id: 'A', text: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead." },
      { id: 'B', text: "Add unique user credit card numbers as metric dimensions." },
      { id: 'C', text: "Create a separate metric for every unique user session ID." },
      { id: 'D', text: "Disable all attributes across all metrics and traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead. High cardinality (millions of unique label/dimension combinations) severely degrades metric database performance. Best practice dictates using low-cardinality values (e.g., `http.status_code`, `region`) for metric dimensions, while high-cardinality identifiers (user IDs, order IDs) belong on trace spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#cardinality",
    tags: ["Cardinality Management", "Cardinality Governance", "Security And Governance"]
  },
  {
    id: "cncf-otca-434",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Custom Span Attributes and Cardinality Management: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Cardinality Management to prevent high-cardinality explosions that can crash Prometheus or incur massive cloud monitoring bills.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Balancing diagnostic detail with high-cardinality risks in attributes and metrics is under consideration.",
    options: [
      { id: 'A', text: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead." },
      { id: 'B', text: "Add unique user credit card numbers as metric dimensions." },
      { id: 'C', text: "Create a separate metric for every unique user session ID." },
      { id: 'D', text: "Disable all attributes across all metrics and traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead. High cardinality (millions of unique label/dimension combinations) severely degrades metric database performance. Best practice dictates using low-cardinality values (e.g., `http.status_code`, `region`) for metric dimensions, while high-cardinality identifiers (user IDs, order IDs) belong on trace spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#cardinality",
    tags: ["Cardinality Management", "Cardinality Governance", "Microservice Migration"]
  },
  {
    id: "cncf-otca-435",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Custom Span Attributes and Cardinality Management: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Cardinality Management to prevent high-cardinality explosions that can crash Prometheus or incur massive cloud monitoring bills.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Balancing diagnostic detail with high-cardinality risks in attributes and metrics is under consideration.",
    options: [
      { id: 'A', text: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead." },
      { id: 'B', text: "Add unique user credit card numbers as metric dimensions." },
      { id: 'C', text: "Create a separate metric for every unique user session ID." },
      { id: 'D', text: "Disable all attributes across all metrics and traces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Avoid adding high-cardinality values (e.g., user UUIDs, timestamps) as metric attributes, recording them in trace span attributes instead. High cardinality (millions of unique label/dimension combinations) severely degrades metric database performance. Best practice dictates using low-cardinality values (e.g., `http.status_code`, `region`) for metric dimensions, while high-cardinality identifiers (user IDs, order IDs) belong on trace spans.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/metrics/#cardinality",
    tags: ["Cardinality Management", "Cardinality Governance", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-436",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Sampling at the SDK: ParentBased and TraceIdRatioBased: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates SDK Samplers to configure an application SDK to sample 10% of new root traces while respecting the sampling decision of upstream parent callers.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Configuring ParentBased(TraceIdRatioBased) samplers in language SDKs is under consideration.",
    options: [
      { id: 'A', text: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy." },
      { id: 'B', text: "Use `AlwaysOn` sampler which captures 100% of all traffic." },
      { id: 'C', text: "Use `AlwaysOff` sampler which disables all tracing." },
      { id: 'D', text: "Use `TraceIdRatioBased` without ParentBased, breaking distributed trace continuity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy. The `ParentBased` sampler wrapper respects upstream decisions: if an upstream service decided to sample a request, downstream services sample it too, preserving trace completeness. For new root traces, it delegates to the child sampler (`TraceIdRatioBased(0.10)`).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/#parentbased",
    tags: ["SDK Samplers", "ParentBased Sampler", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-437",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Sampling at the SDK: ParentBased and TraceIdRatioBased: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates SDK Samplers to configure an application SDK to sample 10% of new root traces while respecting the sampling decision of upstream parent callers.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Configuring ParentBased(TraceIdRatioBased) samplers in language SDKs is under consideration.",
    options: [
      { id: 'A', text: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy." },
      { id: 'B', text: "Use `AlwaysOn` sampler which captures 100% of all traffic." },
      { id: 'C', text: "Use `AlwaysOff` sampler which disables all tracing." },
      { id: 'D', text: "Use `TraceIdRatioBased` without ParentBased, breaking distributed trace continuity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy. The `ParentBased` sampler wrapper respects upstream decisions: if an upstream service decided to sample a request, downstream services sample it too, preserving trace completeness. For new root traces, it delegates to the child sampler (`TraceIdRatioBased(0.10)`).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/#parentbased",
    tags: ["SDK Samplers", "ParentBased Sampler", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-438",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Sampling at the SDK: ParentBased and TraceIdRatioBased: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates SDK Samplers to configure an application SDK to sample 10% of new root traces while respecting the sampling decision of upstream parent callers.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Configuring ParentBased(TraceIdRatioBased) samplers in language SDKs is under consideration.",
    options: [
      { id: 'A', text: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy." },
      { id: 'B', text: "Use `AlwaysOn` sampler which captures 100% of all traffic." },
      { id: 'C', text: "Use `AlwaysOff` sampler which disables all tracing." },
      { id: 'D', text: "Use `TraceIdRatioBased` without ParentBased, breaking distributed trace continuity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy. The `ParentBased` sampler wrapper respects upstream decisions: if an upstream service decided to sample a request, downstream services sample it too, preserving trace completeness. For new root traces, it delegates to the child sampler (`TraceIdRatioBased(0.10)`).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/#parentbased",
    tags: ["SDK Samplers", "ParentBased Sampler", "Security And Governance"]
  },
  {
    id: "cncf-otca-439",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Sampling at the SDK: ParentBased and TraceIdRatioBased: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates SDK Samplers to configure an application SDK to sample 10% of new root traces while respecting the sampling decision of upstream parent callers.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Configuring ParentBased(TraceIdRatioBased) samplers in language SDKs is under consideration.",
    options: [
      { id: 'A', text: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy." },
      { id: 'B', text: "Use `AlwaysOn` sampler which captures 100% of all traffic." },
      { id: 'C', text: "Use `AlwaysOff` sampler which disables all tracing." },
      { id: 'D', text: "Use `TraceIdRatioBased` without ParentBased, breaking distributed trace continuity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy. The `ParentBased` sampler wrapper respects upstream decisions: if an upstream service decided to sample a request, downstream services sample it too, preserving trace completeness. For new root traces, it delegates to the child sampler (`TraceIdRatioBased(0.10)`).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/#parentbased",
    tags: ["SDK Samplers", "ParentBased Sampler", "Microservice Migration"]
  },
  {
    id: "cncf-otca-440",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Sampling at the SDK: ParentBased and TraceIdRatioBased: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates SDK Samplers to configure an application SDK to sample 10% of new root traces while respecting the sampling decision of upstream parent callers.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Configuring ParentBased(TraceIdRatioBased) samplers in language SDKs is under consideration.",
    options: [
      { id: 'A', text: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy." },
      { id: 'B', text: "Use `AlwaysOn` sampler which captures 100% of all traffic." },
      { id: 'C', text: "Use `AlwaysOff` sampler which disables all tracing." },
      { id: 'D', text: "Use `TraceIdRatioBased` without ParentBased, breaking distributed trace continuity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the SDK with `ParentBased(TraceIdRatioBased(0.10))` sampling policy. The `ParentBased` sampler wrapper respects upstream decisions: if an upstream service decided to sample a request, downstream services sample it too, preserving trace completeness. For new root traces, it delegates to the child sampler (`TraceIdRatioBased(0.10)`).",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/#parentbased",
    tags: ["SDK Samplers", "ParentBased Sampler", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-441",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Graceful SDK Shutdown in Short-Lived / Serverless Functions: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Graceful Shutdown to prevent telemetry loss when an AWS Lambda function or short-lived CLI batch script completes execution and terminates.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Flushing buffered spans using forceFlush and shutdown before process exit is under consideration.",
    options: [
      { id: 'A', text: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits." },
      { id: 'B', text: "Rely on background asynchronous batch processors to flush after the process terminates." },
      { id: 'C', text: "Kill the process with SIGKILL immediately." },
      { id: 'D', text: "Serverless functions cannot emit OpenTelemetry data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits. Batch processors buffer telemetry in memory. If a process terminates abruptly (as in AWS Lambda or CLI jobs), in-flight spans are lost. Calling `ForceFlush()` or `Shutdown()` blocks briefly to ensure all buffered telemetry is transmitted to the collector before exit.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/#graceful-shutdown",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-442",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Graceful SDK Shutdown in Short-Lived / Serverless Functions: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Graceful Shutdown to prevent telemetry loss when an AWS Lambda function or short-lived CLI batch script completes execution and terminates.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Flushing buffered spans using forceFlush and shutdown before process exit is under consideration.",
    options: [
      { id: 'A', text: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits." },
      { id: 'B', text: "Rely on background asynchronous batch processors to flush after the process terminates." },
      { id: 'C', text: "Kill the process with SIGKILL immediately." },
      { id: 'D', text: "Serverless functions cannot emit OpenTelemetry data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits. Batch processors buffer telemetry in memory. If a process terminates abruptly (as in AWS Lambda or CLI jobs), in-flight spans are lost. Calling `ForceFlush()` or `Shutdown()` blocks briefly to ensure all buffered telemetry is transmitted to the collector before exit.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/#graceful-shutdown",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-443",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Graceful SDK Shutdown in Short-Lived / Serverless Functions: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Graceful Shutdown to prevent telemetry loss when an AWS Lambda function or short-lived CLI batch script completes execution and terminates.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Flushing buffered spans using forceFlush and shutdown before process exit is under consideration.",
    options: [
      { id: 'A', text: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits." },
      { id: 'B', text: "Rely on background asynchronous batch processors to flush after the process terminates." },
      { id: 'C', text: "Kill the process with SIGKILL immediately." },
      { id: 'D', text: "Serverless functions cannot emit OpenTelemetry data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits. Batch processors buffer telemetry in memory. If a process terminates abruptly (as in AWS Lambda or CLI jobs), in-flight spans are lost. Calling `ForceFlush()` or `Shutdown()` blocks briefly to ensure all buffered telemetry is transmitted to the collector before exit.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/#graceful-shutdown",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Security And Governance"]
  },
  {
    id: "cncf-otca-444",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Graceful SDK Shutdown in Short-Lived / Serverless Functions: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Graceful Shutdown to prevent telemetry loss when an AWS Lambda function or short-lived CLI batch script completes execution and terminates.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Flushing buffered spans using forceFlush and shutdown before process exit is under consideration.",
    options: [
      { id: 'A', text: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits." },
      { id: 'B', text: "Rely on background asynchronous batch processors to flush after the process terminates." },
      { id: 'C', text: "Kill the process with SIGKILL immediately." },
      { id: 'D', text: "Serverless functions cannot emit OpenTelemetry data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits. Batch processors buffer telemetry in memory. If a process terminates abruptly (as in AWS Lambda or CLI jobs), in-flight spans are lost. Calling `ForceFlush()` or `Shutdown()` blocks briefly to ensure all buffered telemetry is transmitted to the collector before exit.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/#graceful-shutdown",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Microservice Migration"]
  },
  {
    id: "cncf-otca-445",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    domainName: "Instrumentation and Signals",
    title: "Graceful SDK Shutdown in Short-Lived / Serverless Functions: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Graceful Shutdown to prevent telemetry loss when an AWS Lambda function or short-lived CLI batch script completes execution and terminates.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Flushing buffered spans using forceFlush and shutdown before process exit is under consideration.",
    options: [
      { id: 'A', text: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits." },
      { id: 'B', text: "Rely on background asynchronous batch processors to flush after the process terminates." },
      { id: 'C', text: "Kill the process with SIGKILL immediately." },
      { id: 'D', text: "Serverless functions cannot emit OpenTelemetry data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke `tracerProvider.ForceFlush(ctx)` or `tracerProvider.Shutdown(ctx)` before the process exits. Batch processors buffer telemetry in memory. If a process terminates abruptly (as in AWS Lambda or CLI jobs), in-flight spans are lost. Calling `ForceFlush()` or `Shutdown()` blocks briefly to ensure all buffered telemetry is transmitted to the collector before exit.",
    referenceUrl: "https://opentelemetry.io/docs/languages/go/instrumentation/#graceful-shutdown",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-446",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Exporter Configuration: gRPC vs HTTP/Protobuf: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates OTLP Exporters to configure an application SDK or collector to export telemetry securely over OTLP gRPC with TLS and gzip compression.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Configuring endpoint, compression (gzip), TLS, and timeouts on OTLP exporters is under consideration.",
    options: [
      { id: 'A', text: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates." },
      { id: 'B', text: "Transmit telemetry over unencrypted HTTP port 80 across public networks." },
      { id: 'C', text: "Disable compression on high-volume networks." },
      { id: 'D', text: "Use non-standard custom binary ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates. The OTLP exporter transmits telemetry to OpenTelemetry Collectors or native OTLP backends. Configuring TLS ensures encrypted transport across networks, while `compression: gzip` cuts payload byte sizes by 80%+, conserving network egress bandwidth.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#exporter-selection",
    tags: ["OTLP Exporters", "OTLP Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-447",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Exporter Configuration: gRPC vs HTTP/Protobuf: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates OTLP Exporters to configure an application SDK or collector to export telemetry securely over OTLP gRPC with TLS and gzip compression.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Configuring endpoint, compression (gzip), TLS, and timeouts on OTLP exporters is under consideration.",
    options: [
      { id: 'A', text: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates." },
      { id: 'B', text: "Transmit telemetry over unencrypted HTTP port 80 across public networks." },
      { id: 'C', text: "Disable compression on high-volume networks." },
      { id: 'D', text: "Use non-standard custom binary ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates. The OTLP exporter transmits telemetry to OpenTelemetry Collectors or native OTLP backends. Configuring TLS ensures encrypted transport across networks, while `compression: gzip` cuts payload byte sizes by 80%+, conserving network egress bandwidth.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#exporter-selection",
    tags: ["OTLP Exporters", "OTLP Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-448",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Exporter Configuration: gRPC vs HTTP/Protobuf: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates OTLP Exporters to configure an application SDK or collector to export telemetry securely over OTLP gRPC with TLS and gzip compression.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Configuring endpoint, compression (gzip), TLS, and timeouts on OTLP exporters is under consideration.",
    options: [
      { id: 'A', text: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates." },
      { id: 'B', text: "Transmit telemetry over unencrypted HTTP port 80 across public networks." },
      { id: 'C', text: "Disable compression on high-volume networks." },
      { id: 'D', text: "Use non-standard custom binary ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates. The OTLP exporter transmits telemetry to OpenTelemetry Collectors or native OTLP backends. Configuring TLS ensures encrypted transport across networks, while `compression: gzip` cuts payload byte sizes by 80%+, conserving network egress bandwidth.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#exporter-selection",
    tags: ["OTLP Exporters", "OTLP Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-449",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Exporter Configuration: gRPC vs HTTP/Protobuf: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates OTLP Exporters to configure an application SDK or collector to export telemetry securely over OTLP gRPC with TLS and gzip compression.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Configuring endpoint, compression (gzip), TLS, and timeouts on OTLP exporters is under consideration.",
    options: [
      { id: 'A', text: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates." },
      { id: 'B', text: "Transmit telemetry over unencrypted HTTP port 80 across public networks." },
      { id: 'C', text: "Disable compression on high-volume networks." },
      { id: 'D', text: "Use non-standard custom binary ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates. The OTLP exporter transmits telemetry to OpenTelemetry Collectors or native OTLP backends. Configuring TLS ensures encrypted transport across networks, while `compression: gzip` cuts payload byte sizes by 80%+, conserving network egress bandwidth.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#exporter-selection",
    tags: ["OTLP Exporters", "OTLP Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-450",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Exporter Configuration: gRPC vs HTTP/Protobuf: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates OTLP Exporters to configure an application SDK or collector to export telemetry securely over OTLP gRPC with TLS and gzip compression.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Configuring endpoint, compression (gzip), TLS, and timeouts on OTLP exporters is under consideration.",
    options: [
      { id: 'A', text: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates." },
      { id: 'B', text: "Transmit telemetry over unencrypted HTTP port 80 across public networks." },
      { id: 'C', text: "Disable compression on high-volume networks." },
      { id: 'D', text: "Use non-standard custom binary ports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the OTLP exporter with `endpoint: https://collector:4317`, `compression: gzip`, and TLS certificates. The OTLP exporter transmits telemetry to OpenTelemetry Collectors or native OTLP backends. Configuring TLS ensures encrypted transport across networks, while `compression: gzip` cuts payload byte sizes by 80%+, conserving network egress bandwidth.",
    referenceUrl: "https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#exporter-selection",
    tags: ["OTLP Exporters", "OTLP Exporter", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_18;
