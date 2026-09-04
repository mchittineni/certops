export const CNCF_OTCA_FLASHCARDS_20 = [
  {
    id: "cncf-otca-fc-476",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Collector Security: Authentication and Secret Redaction (Enterprise Observability)",
    hint: "Enforcing TLS, bearer token auth, and PII attribute scrubbing.",
    back: "Securing collectors involves configuring <strong>TLS and authentication extensions</strong> on receivers and applying <strong>redaction processors</strong> to scrub PII and credentials before export.",
    tags: ["Collector Security", "Collector Security", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-477",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Collector Security: Authentication and Secret Redaction (High Throughput Scale)",
    hint: "Enforcing TLS, bearer token auth, and PII attribute scrubbing.",
    back: "Securing collectors involves configuring <strong>TLS and authentication extensions</strong> on receivers and applying <strong>redaction processors</strong> to scrub PII and credentials before export.",
    tags: ["Collector Security", "Collector Security", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-478",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Collector Security: Authentication and Secret Redaction (Security And Governance)",
    hint: "Enforcing TLS, bearer token auth, and PII attribute scrubbing.",
    back: "Securing collectors involves configuring <strong>TLS and authentication extensions</strong> on receivers and applying <strong>redaction processors</strong> to scrub PII and credentials before export.",
    tags: ["Collector Security", "Collector Security", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-479",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Collector Security: Authentication and Secret Redaction (Microservice Migration)",
    hint: "Enforcing TLS, bearer token auth, and PII attribute scrubbing.",
    back: "Securing collectors involves configuring <strong>TLS and authentication extensions</strong> on receivers and applying <strong>redaction processors</strong> to scrub PII and credentials before export.",
    tags: ["Collector Security", "Collector Security", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-480",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Collector Security: Authentication and Secret Redaction (Resilience And Reliability)",
    hint: "Enforcing TLS, bearer token auth, and PII attribute scrubbing.",
    back: "Securing collectors involves configuring <strong>TLS and authentication extensions</strong> on receivers and applying <strong>redaction processors</strong> to scrub PII and credentials before export.",
    tags: ["Collector Security", "Collector Security", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-481",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Managing Collector Overload and Backpressure (Enterprise Observability)",
    hint: "Throttling upstream clients using memory_limiter backpressure signals.",
    back: "When collectors near capacity, <strong>memory_limiter emits backpressure signals</strong> (HTTP 429 / gRPC ResourceExhausted), forcing upstream clients to throttle and preventing gateway crashes.",
    tags: ["Backpressure Handling", "Backpressure", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-482",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Managing Collector Overload and Backpressure (High Throughput Scale)",
    hint: "Throttling upstream clients using memory_limiter backpressure signals.",
    back: "When collectors near capacity, <strong>memory_limiter emits backpressure signals</strong> (HTTP 429 / gRPC ResourceExhausted), forcing upstream clients to throttle and preventing gateway crashes.",
    tags: ["Backpressure Handling", "Backpressure", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-483",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Managing Collector Overload and Backpressure (Security And Governance)",
    hint: "Throttling upstream clients using memory_limiter backpressure signals.",
    back: "When collectors near capacity, <strong>memory_limiter emits backpressure signals</strong> (HTTP 429 / gRPC ResourceExhausted), forcing upstream clients to throttle and preventing gateway crashes.",
    tags: ["Backpressure Handling", "Backpressure", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-484",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Managing Collector Overload and Backpressure (Microservice Migration)",
    hint: "Throttling upstream clients using memory_limiter backpressure signals.",
    back: "When collectors near capacity, <strong>memory_limiter emits backpressure signals</strong> (HTTP 429 / gRPC ResourceExhausted), forcing upstream clients to throttle and preventing gateway crashes.",
    tags: ["Backpressure Handling", "Backpressure", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-485",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Managing Collector Overload and Backpressure (Resilience And Reliability)",
    hint: "Throttling upstream clients using memory_limiter backpressure signals.",
    back: "When collectors near capacity, <strong>memory_limiter emits backpressure signals</strong> (HTTP 429 / gRPC ResourceExhausted), forcing upstream clients to throttle and preventing gateway crashes.",
    tags: ["Backpressure Handling", "Backpressure", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-486",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Native OTLP Ingestion in Cloud and APM Backends (Enterprise Observability)",
    hint: "Exporting directly to commercial backends using standard OTLP exporters.",
    back: "Modern observability platforms support <strong>native OTLP ingestion</strong>, allowing collectors to export telemetry directly to commercial backends using standard OTLP exporters without proprietary agents.",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-487",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Native OTLP Ingestion in Cloud and APM Backends (High Throughput Scale)",
    hint: "Exporting directly to commercial backends using standard OTLP exporters.",
    back: "Modern observability platforms support <strong>native OTLP ingestion</strong>, allowing collectors to export telemetry directly to commercial backends using standard OTLP exporters without proprietary agents.",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-488",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Native OTLP Ingestion in Cloud and APM Backends (Security And Governance)",
    hint: "Exporting directly to commercial backends using standard OTLP exporters.",
    back: "Modern observability platforms support <strong>native OTLP ingestion</strong>, allowing collectors to export telemetry directly to commercial backends using standard OTLP exporters without proprietary agents.",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-489",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Native OTLP Ingestion in Cloud and APM Backends (Microservice Migration)",
    hint: "Exporting directly to commercial backends using standard OTLP exporters.",
    back: "Modern observability platforms support <strong>native OTLP ingestion</strong>, allowing collectors to export telemetry directly to commercial backends using standard OTLP exporters without proprietary agents.",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-490",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Native OTLP Ingestion in Cloud and APM Backends (Resilience And Reliability)",
    hint: "Exporting directly to commercial backends using standard OTLP exporters.",
    back: "Modern observability platforms support <strong>native OTLP ingestion</strong>, allowing collectors to export telemetry directly to commercial backends using standard OTLP exporters without proprietary agents.",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-491",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Prometheus Receiver in OpenTelemetry Collector (Enterprise Observability)",
    hint: "Scraping Prometheus metric endpoints directly without running Prometheus servers.",
    back: "The <strong>prometheus receiver</strong> embeds Prometheus scraping capabilities inside the collector, pulling metrics from third-party exporters and converting them into OpenTelemetry metric streams.",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-492",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Prometheus Receiver in OpenTelemetry Collector (High Throughput Scale)",
    hint: "Scraping Prometheus metric endpoints directly without running Prometheus servers.",
    back: "The <strong>prometheus receiver</strong> embeds Prometheus scraping capabilities inside the collector, pulling metrics from third-party exporters and converting them into OpenTelemetry metric streams.",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-493",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Prometheus Receiver in OpenTelemetry Collector (Security And Governance)",
    hint: "Scraping Prometheus metric endpoints directly without running Prometheus servers.",
    back: "The <strong>prometheus receiver</strong> embeds Prometheus scraping capabilities inside the collector, pulling metrics from third-party exporters and converting them into OpenTelemetry metric streams.",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-494",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Prometheus Receiver in OpenTelemetry Collector (Microservice Migration)",
    hint: "Scraping Prometheus metric endpoints directly without running Prometheus servers.",
    back: "The <strong>prometheus receiver</strong> embeds Prometheus scraping capabilities inside the collector, pulling metrics from third-party exporters and converting them into OpenTelemetry metric streams.",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-495",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Prometheus Receiver in OpenTelemetry Collector (Resilience And Reliability)",
    hint: "Scraping Prometheus metric endpoints directly without running Prometheus servers.",
    back: "The <strong>prometheus receiver</strong> embeds Prometheus scraping capabilities inside the collector, pulling metrics from third-party exporters and converting them into OpenTelemetry metric streams.",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-496",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Validating Pipelines with telemetrygen and Self-Metrics (Enterprise Observability)",
    hint: "Generating synthetic telemetry to audit collector throughput and error drops.",
    back: "Using <strong>telemetrygen</strong> simulates synthetic telemetry loads to test collector pipelines, while monitoring <strong>otelcol_processor_dropped_spans</strong> validates resilience under stress.",
    tags: ["Telemetry Validation", "telemetrygen", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-497",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Validating Pipelines with telemetrygen and Self-Metrics (High Throughput Scale)",
    hint: "Generating synthetic telemetry to audit collector throughput and error drops.",
    back: "Using <strong>telemetrygen</strong> simulates synthetic telemetry loads to test collector pipelines, while monitoring <strong>otelcol_processor_dropped_spans</strong> validates resilience under stress.",
    tags: ["Telemetry Validation", "telemetrygen", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-498",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Validating Pipelines with telemetrygen and Self-Metrics (Security And Governance)",
    hint: "Generating synthetic telemetry to audit collector throughput and error drops.",
    back: "Using <strong>telemetrygen</strong> simulates synthetic telemetry loads to test collector pipelines, while monitoring <strong>otelcol_processor_dropped_spans</strong> validates resilience under stress.",
    tags: ["Telemetry Validation", "telemetrygen", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-499",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Validating Pipelines with telemetrygen and Self-Metrics (Microservice Migration)",
    hint: "Generating synthetic telemetry to audit collector throughput and error drops.",
    back: "Using <strong>telemetrygen</strong> simulates synthetic telemetry loads to test collector pipelines, while monitoring <strong>otelcol_processor_dropped_spans</strong> validates resilience under stress.",
    tags: ["Telemetry Validation", "telemetrygen", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-500",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    front: "Validating Pipelines with telemetrygen and Self-Metrics (Resilience And Reliability)",
    hint: "Generating synthetic telemetry to audit collector throughput and error drops.",
    back: "Using <strong>telemetrygen</strong> simulates synthetic telemetry loads to test collector pipelines, while monitoring <strong>otelcol_processor_dropped_spans</strong> validates resilience under stress.",
    tags: ["Telemetry Validation", "telemetrygen", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_FLASHCARDS_20;
