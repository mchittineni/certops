export const CNCF_OTCA_FLASHCARDS_18 = [
  {
    id: "cncf-otca-fc-426",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Correlating Logs and Traces via Injected Context (Enterprise Observability)",
    hint: "Injecting trace_id and span_id into structured logs for unified querying.",
    back: "Injecting <strong>trace_id and span_id</strong> into structured log fields unifies observability, allowing developers to pivot seamlessly from log error messages into full distributed traces.",
    tags: ["Log Correlation", "Log Correlation", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-427",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Correlating Logs and Traces via Injected Context (High Throughput Scale)",
    hint: "Injecting trace_id and span_id into structured logs for unified querying.",
    back: "Injecting <strong>trace_id and span_id</strong> into structured log fields unifies observability, allowing developers to pivot seamlessly from log error messages into full distributed traces.",
    tags: ["Log Correlation", "Log Correlation", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-428",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Correlating Logs and Traces via Injected Context (Security And Governance)",
    hint: "Injecting trace_id and span_id into structured logs for unified querying.",
    back: "Injecting <strong>trace_id and span_id</strong> into structured log fields unifies observability, allowing developers to pivot seamlessly from log error messages into full distributed traces.",
    tags: ["Log Correlation", "Log Correlation", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-429",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Correlating Logs and Traces via Injected Context (Microservice Migration)",
    hint: "Injecting trace_id and span_id into structured logs for unified querying.",
    back: "Injecting <strong>trace_id and span_id</strong> into structured log fields unifies observability, allowing developers to pivot seamlessly from log error messages into full distributed traces.",
    tags: ["Log Correlation", "Log Correlation", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-430",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Correlating Logs and Traces via Injected Context (Resilience And Reliability)",
    hint: "Injecting trace_id and span_id into structured logs for unified querying.",
    back: "Injecting <strong>trace_id and span_id</strong> into structured log fields unifies observability, allowing developers to pivot seamlessly from log error messages into full distributed traces.",
    tags: ["Log Correlation", "Log Correlation", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-431",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Cardinality Management and Trace Attributes (Enterprise Observability)",
    hint: "Preserving metric performance by storing high-cardinality IDs on trace spans.",
    back: "Prevent high-cardinality explosions by keeping <strong>metric dimensions low-cardinality</strong> (status codes, regions), while storing high-cardinality identifiers (user UUIDs) on <strong>trace spans</strong>.",
    tags: ["Cardinality Management", "Cardinality Governance", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-432",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Cardinality Management and Trace Attributes (High Throughput Scale)",
    hint: "Preserving metric performance by storing high-cardinality IDs on trace spans.",
    back: "Prevent high-cardinality explosions by keeping <strong>metric dimensions low-cardinality</strong> (status codes, regions), while storing high-cardinality identifiers (user UUIDs) on <strong>trace spans</strong>.",
    tags: ["Cardinality Management", "Cardinality Governance", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-433",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Cardinality Management and Trace Attributes (Security And Governance)",
    hint: "Preserving metric performance by storing high-cardinality IDs on trace spans.",
    back: "Prevent high-cardinality explosions by keeping <strong>metric dimensions low-cardinality</strong> (status codes, regions), while storing high-cardinality identifiers (user UUIDs) on <strong>trace spans</strong>.",
    tags: ["Cardinality Management", "Cardinality Governance", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-434",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Cardinality Management and Trace Attributes (Microservice Migration)",
    hint: "Preserving metric performance by storing high-cardinality IDs on trace spans.",
    back: "Prevent high-cardinality explosions by keeping <strong>metric dimensions low-cardinality</strong> (status codes, regions), while storing high-cardinality identifiers (user UUIDs) on <strong>trace spans</strong>.",
    tags: ["Cardinality Management", "Cardinality Governance", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-435",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Cardinality Management and Trace Attributes (Resilience And Reliability)",
    hint: "Preserving metric performance by storing high-cardinality IDs on trace spans.",
    back: "Prevent high-cardinality explosions by keeping <strong>metric dimensions low-cardinality</strong> (status codes, regions), while storing high-cardinality identifiers (user UUIDs) on <strong>trace spans</strong>.",
    tags: ["Cardinality Management", "Cardinality Governance", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-436",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "ParentBased and TraceIdRatioBased SDK Samplers (Enterprise Observability)",
    hint: "Preserving trace continuity while controlling root sampling rates.",
    back: "The <strong>ParentBased(TraceIdRatioBased(0.1))</strong> sampler samples 10% of root traces while honoring upstream sampling flags on incoming calls, preserving distributed trace continuity.",
    tags: ["SDK Samplers", "ParentBased Sampler", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-437",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "ParentBased and TraceIdRatioBased SDK Samplers (High Throughput Scale)",
    hint: "Preserving trace continuity while controlling root sampling rates.",
    back: "The <strong>ParentBased(TraceIdRatioBased(0.1))</strong> sampler samples 10% of root traces while honoring upstream sampling flags on incoming calls, preserving distributed trace continuity.",
    tags: ["SDK Samplers", "ParentBased Sampler", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-438",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "ParentBased and TraceIdRatioBased SDK Samplers (Security And Governance)",
    hint: "Preserving trace continuity while controlling root sampling rates.",
    back: "The <strong>ParentBased(TraceIdRatioBased(0.1))</strong> sampler samples 10% of root traces while honoring upstream sampling flags on incoming calls, preserving distributed trace continuity.",
    tags: ["SDK Samplers", "ParentBased Sampler", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-439",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "ParentBased and TraceIdRatioBased SDK Samplers (Microservice Migration)",
    hint: "Preserving trace continuity while controlling root sampling rates.",
    back: "The <strong>ParentBased(TraceIdRatioBased(0.1))</strong> sampler samples 10% of root traces while honoring upstream sampling flags on incoming calls, preserving distributed trace continuity.",
    tags: ["SDK Samplers", "ParentBased Sampler", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-440",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "ParentBased and TraceIdRatioBased SDK Samplers (Resilience And Reliability)",
    hint: "Preserving trace continuity while controlling root sampling rates.",
    back: "The <strong>ParentBased(TraceIdRatioBased(0.1))</strong> sampler samples 10% of root traces while honoring upstream sampling flags on incoming calls, preserving distributed trace continuity.",
    tags: ["SDK Samplers", "ParentBased Sampler", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-441",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Flushing Telemetry with ForceFlush and Shutdown (Enterprise Observability)",
    hint: "Ensuring complete telemetry transmission before process termination.",
    back: "Calling <strong>tracerProvider.Shutdown() or ForceFlush()</strong> flushes all in-memory telemetry buffers before process exit, preventing telemetry loss in serverless and batch workloads.",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-442",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Flushing Telemetry with ForceFlush and Shutdown (High Throughput Scale)",
    hint: "Ensuring complete telemetry transmission before process termination.",
    back: "Calling <strong>tracerProvider.Shutdown() or ForceFlush()</strong> flushes all in-memory telemetry buffers before process exit, preventing telemetry loss in serverless and batch workloads.",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-443",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Flushing Telemetry with ForceFlush and Shutdown (Security And Governance)",
    hint: "Ensuring complete telemetry transmission before process termination.",
    back: "Calling <strong>tracerProvider.Shutdown() or ForceFlush()</strong> flushes all in-memory telemetry buffers before process exit, preventing telemetry loss in serverless and batch workloads.",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-444",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Flushing Telemetry with ForceFlush and Shutdown (Microservice Migration)",
    hint: "Ensuring complete telemetry transmission before process termination.",
    back: "Calling <strong>tracerProvider.Shutdown() or ForceFlush()</strong> flushes all in-memory telemetry buffers before process exit, preventing telemetry loss in serverless and batch workloads.",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-445",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Flushing Telemetry with ForceFlush and Shutdown (Resilience And Reliability)",
    hint: "Ensuring complete telemetry transmission before process termination.",
    back: "Calling <strong>tracerProvider.Shutdown() or ForceFlush()</strong> flushes all in-memory telemetry buffers before process exit, preventing telemetry loss in serverless and batch workloads.",
    tags: ["Graceful Shutdown", "Graceful Shutdown", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-446",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "OTLP Exporter Configuration (gRPC / HTTP) (Enterprise Observability)",
    hint: "Configuring secure TLS, gzip compression, and endpoints for telemetry egress.",
    back: "Configuring <strong>OTLP exporters</strong> with TLS encryption and <strong>gzip compression</strong> ensures secure, bandwidth-efficient telemetry transmission to downstream collectors and backends.",
    tags: ["OTLP Exporters", "OTLP Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-447",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "OTLP Exporter Configuration (gRPC / HTTP) (High Throughput Scale)",
    hint: "Configuring secure TLS, gzip compression, and endpoints for telemetry egress.",
    back: "Configuring <strong>OTLP exporters</strong> with TLS encryption and <strong>gzip compression</strong> ensures secure, bandwidth-efficient telemetry transmission to downstream collectors and backends.",
    tags: ["OTLP Exporters", "OTLP Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-448",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "OTLP Exporter Configuration (gRPC / HTTP) (Security And Governance)",
    hint: "Configuring secure TLS, gzip compression, and endpoints for telemetry egress.",
    back: "Configuring <strong>OTLP exporters</strong> with TLS encryption and <strong>gzip compression</strong> ensures secure, bandwidth-efficient telemetry transmission to downstream collectors and backends.",
    tags: ["OTLP Exporters", "OTLP Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-449",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "OTLP Exporter Configuration (gRPC / HTTP) (Microservice Migration)",
    hint: "Configuring secure TLS, gzip compression, and endpoints for telemetry egress.",
    back: "Configuring <strong>OTLP exporters</strong> with TLS encryption and <strong>gzip compression</strong> ensures secure, bandwidth-efficient telemetry transmission to downstream collectors and backends.",
    tags: ["OTLP Exporters", "OTLP Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-450",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "OTLP Exporter Configuration (gRPC / HTTP) (Resilience And Reliability)",
    hint: "Configuring secure TLS, gzip compression, and endpoints for telemetry egress.",
    back: "Configuring <strong>OTLP exporters</strong> with TLS encryption and <strong>gzip compression</strong> ensures secure, bandwidth-efficient telemetry transmission to downstream collectors and backends.",
    tags: ["OTLP Exporters", "OTLP Exporter", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_FLASHCARDS_18;
