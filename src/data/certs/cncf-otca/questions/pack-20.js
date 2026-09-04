export const CNCF_OTCA_QUESTIONS_20 = [
  {
    id: "cncf-otca-476",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Security: TLS, Authentication, and Secret Redaction: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Security to prevent unauthorized clients from submitting telemetry and ensure sensitive user data (passwords, PII) is redacted before export.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Securing collector endpoints with mTLS, bearer token auth, and redacting PII is under consideration.",
    options: [
      { id: 'A', text: "Store plain text authentication passwords inside Git repositories." },
      { id: 'B', text: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes." },
      { id: 'C', text: "Allow unauthenticated, unencrypted public internet access to collector ports." },
      { id: 'D', text: "Never redact customer passwords from telemetry traces." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes. Securing the telemetry pipeline requires defense-in-depth: enforcing TLS/mTLS on receivers, requiring authentication (bearer tokens, OIDC) via auth extensions, and applying redaction or transform processors to sanitize sensitive attributes (PII, tokens) before export.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#authentication",
    tags: ["Collector Security", "Collector Security", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-477",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Security: TLS, Authentication, and Secret Redaction: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Security to prevent unauthorized clients from submitting telemetry and ensure sensitive user data (passwords, PII) is redacted before export.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Securing collector endpoints with mTLS, bearer token auth, and redacting PII is under consideration.",
    options: [
      { id: 'A', text: "Allow unauthenticated, unencrypted public internet access to collector ports." },
      { id: 'B', text: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes." },
      { id: 'C', text: "Never redact customer passwords from telemetry traces." },
      { id: 'D', text: "Store plain text authentication passwords inside Git repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes. Securing the telemetry pipeline requires defense-in-depth: enforcing TLS/mTLS on receivers, requiring authentication (bearer tokens, OIDC) via auth extensions, and applying redaction or transform processors to sanitize sensitive attributes (PII, tokens) before export.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#authentication",
    tags: ["Collector Security", "Collector Security", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-478",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Security: TLS, Authentication, and Secret Redaction: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Security to prevent unauthorized clients from submitting telemetry and ensure sensitive user data (passwords, PII) is redacted before export.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Securing collector endpoints with mTLS, bearer token auth, and redacting PII is under consideration.",
    options: [
      { id: 'A', text: "Store plain text authentication passwords inside Git repositories." },
      { id: 'B', text: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes." },
      { id: 'C', text: "Never redact customer passwords from telemetry traces." },
      { id: 'D', text: "Allow unauthenticated, unencrypted public internet access to collector ports." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes. Securing the telemetry pipeline requires defense-in-depth: enforcing TLS/mTLS on receivers, requiring authentication (bearer tokens, OIDC) via auth extensions, and applying redaction or transform processors to sanitize sensitive attributes (PII, tokens) before export.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#authentication",
    tags: ["Collector Security", "Collector Security", "Security And Governance"]
  },
  {
    id: "cncf-otca-479",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Security: TLS, Authentication, and Secret Redaction: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Security to prevent unauthorized clients from submitting telemetry and ensure sensitive user data (passwords, PII) is redacted before export.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Securing collector endpoints with mTLS, bearer token auth, and redacting PII is under consideration.",
    options: [
      { id: 'A', text: "Allow unauthenticated, unencrypted public internet access to collector ports." },
      { id: 'B', text: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes." },
      { id: 'C', text: "Never redact customer passwords from telemetry traces." },
      { id: 'D', text: "Store plain text authentication passwords inside Git repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes. Securing the telemetry pipeline requires defense-in-depth: enforcing TLS/mTLS on receivers, requiring authentication (bearer tokens, OIDC) via auth extensions, and applying redaction or transform processors to sanitize sensitive attributes (PII, tokens) before export.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#authentication",
    tags: ["Collector Security", "Collector Security", "Microservice Migration"]
  },
  {
    id: "cncf-otca-480",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Security: TLS, Authentication, and Secret Redaction: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Security to prevent unauthorized clients from submitting telemetry and ensure sensitive user data (passwords, PII) is redacted before export.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Securing collector endpoints with mTLS, bearer token auth, and redacting PII is under consideration.",
    options: [
      { id: 'A', text: "Store plain text authentication passwords inside Git repositories." },
      { id: 'B', text: "Never redact customer passwords from telemetry traces." },
      { id: 'C', text: "Allow unauthenticated, unencrypted public internet access to collector ports." },
      { id: 'D', text: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure TLS/mTLS and authentication extensions (`bearertokenauth`) on receivers, and use `redaction` processor to scrub sensitive attributes. Securing the telemetry pipeline requires defense-in-depth: enforcing TLS/mTLS on receivers, requiring authentication (bearer tokens, OIDC) via auth extensions, and applying redaction or transform processors to sanitize sensitive attributes (PII, tokens) before export.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#authentication",
    tags: ["Collector Security", "Collector Security", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-481",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Managing Backpressure and Drop Policies: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Backpressure Handling to prevent an OpenTelemetry Collector gateway from crashing when incoming telemetry volume exceeds processing capacity by 300%.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Propagating backpressure upstream to prevent collector resource exhaustion is under consideration.",
    options: [
      { id: 'A', text: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle." },
      { id: 'B', text: "Silently buffer infinite data in unconstrained memory until OOM crash." },
      { id: 'C', text: "Disable all rate limiting and backpressure mechanisms." },
      { id: 'D', text: "Crash the entire Kubernetes node to shed load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle. When collectors experience overload, returning backpressure (gRPC `UNAVAILABLE` or HTTP `429 Too Many Requests`) signals upstream SDKs and agent collectors to throttle transmission and buffer data locally, preventing catastrophic gateway crashes.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Backpressure Handling", "Backpressure", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-482",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Managing Backpressure and Drop Policies: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Backpressure Handling to prevent an OpenTelemetry Collector gateway from crashing when incoming telemetry volume exceeds processing capacity by 300%.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Propagating backpressure upstream to prevent collector resource exhaustion is under consideration.",
    options: [
      { id: 'A', text: "Disable all rate limiting and backpressure mechanisms." },
      { id: 'B', text: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle." },
      { id: 'C', text: "Silently buffer infinite data in unconstrained memory until OOM crash." },
      { id: 'D', text: "Crash the entire Kubernetes node to shed load." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle. When collectors experience overload, returning backpressure (gRPC `UNAVAILABLE` or HTTP `429 Too Many Requests`) signals upstream SDKs and agent collectors to throttle transmission and buffer data locally, preventing catastrophic gateway crashes.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Backpressure Handling", "Backpressure", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-483",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Managing Backpressure and Drop Policies: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Backpressure Handling to prevent an OpenTelemetry Collector gateway from crashing when incoming telemetry volume exceeds processing capacity by 300%.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Propagating backpressure upstream to prevent collector resource exhaustion is under consideration.",
    options: [
      { id: 'A', text: "Silently buffer infinite data in unconstrained memory until OOM crash." },
      { id: 'B', text: "Crash the entire Kubernetes node to shed load." },
      { id: 'C', text: "Disable all rate limiting and backpressure mechanisms." },
      { id: 'D', text: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle. When collectors experience overload, returning backpressure (gRPC `UNAVAILABLE` or HTTP `429 Too Many Requests`) signals upstream SDKs and agent collectors to throttle transmission and buffer data locally, preventing catastrophic gateway crashes.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Backpressure Handling", "Backpressure", "Security And Governance"]
  },
  {
    id: "cncf-otca-484",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Managing Backpressure and Drop Policies: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Backpressure Handling to prevent an OpenTelemetry Collector gateway from crashing when incoming telemetry volume exceeds processing capacity by 300%.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Propagating backpressure upstream to prevent collector resource exhaustion is under consideration.",
    options: [
      { id: 'A', text: "Silently buffer infinite data in unconstrained memory until OOM crash." },
      { id: 'B', text: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle." },
      { id: 'C', text: "Disable all rate limiting and backpressure mechanisms." },
      { id: 'D', text: "Crash the entire Kubernetes node to shed load." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle. When collectors experience overload, returning backpressure (gRPC `UNAVAILABLE` or HTTP `429 Too Many Requests`) signals upstream SDKs and agent collectors to throttle transmission and buffer data locally, preventing catastrophic gateway crashes.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Backpressure Handling", "Backpressure", "Microservice Migration"]
  },
  {
    id: "cncf-otca-485",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Managing Backpressure and Drop Policies: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Backpressure Handling to prevent an OpenTelemetry Collector gateway from crashing when incoming telemetry volume exceeds processing capacity by 300%.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Propagating backpressure upstream to prevent collector resource exhaustion is under consideration.",
    options: [
      { id: 'A', text: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle." },
      { id: 'B', text: "Crash the entire Kubernetes node to shed load." },
      { id: 'C', text: "Disable all rate limiting and backpressure mechanisms." },
      { id: 'D', text: "Silently buffer infinite data in unconstrained memory until OOM crash." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `memory_limiter` to return backpressure (HTTP 429 / gRPC ResourceExhausted) to upstream clients, forcing senders to throttle. When collectors experience overload, returning backpressure (gRPC `UNAVAILABLE` or HTTP `429 Too Many Requests`) signals upstream SDKs and agent collectors to throttle transmission and buffer data locally, preventing catastrophic gateway crashes.",
    referenceUrl: "https://opentelemetry.io/docs/collector/scaling/",
    tags: ["Backpressure Handling", "Backpressure", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-486",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Ingestion in Cloud and APM Backends: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Cloud Ingestion to stream telemetry from an OpenTelemetry Collector directly into commercial cloud APM backends without installing proprietary vendor collectors.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Direct OTLP ingestion support across Datadog, Dynatrace, New Relic, Honeycomb, and AWS is under consideration.",
    options: [
      { id: 'A', text: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers." },
      { id: 'B', text: "Install separate proprietary vendor agents on every host operating system." },
      { id: 'C', text: "Export telemetry to local text files and email them to vendor support." },
      { id: 'D', text: "Convert all telemetry to custom proprietary vendor formats before transmission." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers. Major cloud and APM vendors (Honeycomb, Lightstep, Datadog, New Relic, Dynatrace, AWS X-Ray, Google Cloud) natively support OTLP ingestion. A standard `otlp` or `otlphttp` exporter pointing to the vendor's OTLP endpoint with API keys is all that is required, proving vendor neutrality.",
    referenceUrl: "https://opentelemetry.io/ecosystem/vendors/",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-487",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Ingestion in Cloud and APM Backends: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Cloud Ingestion to stream telemetry from an OpenTelemetry Collector directly into commercial cloud APM backends without installing proprietary vendor collectors.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Direct OTLP ingestion support across Datadog, Dynatrace, New Relic, Honeycomb, and AWS is under consideration.",
    options: [
      { id: 'A', text: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers." },
      { id: 'B', text: "Install separate proprietary vendor agents on every host operating system." },
      { id: 'C', text: "Export telemetry to local text files and email them to vendor support." },
      { id: 'D', text: "Convert all telemetry to custom proprietary vendor formats before transmission." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers. Major cloud and APM vendors (Honeycomb, Lightstep, Datadog, New Relic, Dynatrace, AWS X-Ray, Google Cloud) natively support OTLP ingestion. A standard `otlp` or `otlphttp` exporter pointing to the vendor's OTLP endpoint with API keys is all that is required, proving vendor neutrality.",
    referenceUrl: "https://opentelemetry.io/ecosystem/vendors/",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-488",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Ingestion in Cloud and APM Backends: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Cloud Ingestion to stream telemetry from an OpenTelemetry Collector directly into commercial cloud APM backends without installing proprietary vendor collectors.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Direct OTLP ingestion support across Datadog, Dynatrace, New Relic, Honeycomb, and AWS is under consideration.",
    options: [
      { id: 'A', text: "Export telemetry to local text files and email them to vendor support." },
      { id: 'B', text: "Install separate proprietary vendor agents on every host operating system." },
      { id: 'C', text: "Convert all telemetry to custom proprietary vendor formats before transmission." },
      { id: 'D', text: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers. Major cloud and APM vendors (Honeycomb, Lightstep, Datadog, New Relic, Dynatrace, AWS X-Ray, Google Cloud) natively support OTLP ingestion. A standard `otlp` or `otlphttp` exporter pointing to the vendor's OTLP endpoint with API keys is all that is required, proving vendor neutrality.",
    referenceUrl: "https://opentelemetry.io/ecosystem/vendors/",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Security And Governance"]
  },
  {
    id: "cncf-otca-489",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Ingestion in Cloud and APM Backends: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Cloud Ingestion to stream telemetry from an OpenTelemetry Collector directly into commercial cloud APM backends without installing proprietary vendor collectors.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Direct OTLP ingestion support across Datadog, Dynatrace, New Relic, Honeycomb, and AWS is under consideration.",
    options: [
      { id: 'A', text: "Convert all telemetry to custom proprietary vendor formats before transmission." },
      { id: 'B', text: "Export telemetry to local text files and email them to vendor support." },
      { id: 'C', text: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers." },
      { id: 'D', text: "Install separate proprietary vendor agents on every host operating system." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers. Major cloud and APM vendors (Honeycomb, Lightstep, Datadog, New Relic, Dynatrace, AWS X-Ray, Google Cloud) natively support OTLP ingestion. A standard `otlp` or `otlphttp` exporter pointing to the vendor's OTLP endpoint with API keys is all that is required, proving vendor neutrality.",
    referenceUrl: "https://opentelemetry.io/ecosystem/vendors/",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Microservice Migration"]
  },
  {
    id: "cncf-otca-490",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OTLP Ingestion in Cloud and APM Backends: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Cloud Ingestion to stream telemetry from an OpenTelemetry Collector directly into commercial cloud APM backends without installing proprietary vendor collectors.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Direct OTLP ingestion support across Datadog, Dynatrace, New Relic, Honeycomb, and AWS is under consideration.",
    options: [
      { id: 'A', text: "Convert all telemetry to custom proprietary vendor formats before transmission." },
      { id: 'B', text: "Export telemetry to local text files and email them to vendor support." },
      { id: 'C', text: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers." },
      { id: 'D', text: "Install separate proprietary vendor agents on every host operating system." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure the standard `otlp` or `otlphttp` exporter pointing directly to the cloud vendor's native OTLP ingestion endpoint with API headers. Major cloud and APM vendors (Honeycomb, Lightstep, Datadog, New Relic, Dynatrace, AWS X-Ray, Google Cloud) natively support OTLP ingestion. A standard `otlp` or `otlphttp` exporter pointing to the vendor's OTLP endpoint with API keys is all that is required, proving vendor neutrality.",
    referenceUrl: "https://opentelemetry.io/ecosystem/vendors/",
    tags: ["Cloud Ingestion", "Vendor Ingestion", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-491",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector Prometheus Receiver (Scraping): Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Prometheus Scraping to collect metrics from third-party infrastructure (e.g., MySQL exporter, NGINX exporter, Redis) without running a standalone Prometheus server.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Configuring prometheus receiver in Collector to scrape third-party Prometheus endpoints is under consideration.",
    options: [
      { id: 'A', text: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions." },
      { id: 'B', text: "Recompile third-party database exporters from source code." },
      { id: 'C', text: "Prometheus format metrics cannot be ingested by OpenTelemetry." },
      { id: 'D', text: "Deploy a standalone Prometheus server, a Thanos cluster, and a Grafana instance solely to scrape one endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions. The `prometheus` receiver embedded in the OpenTelemetry Collector acts as a full-featured Prometheus scraper. It parses standard Prometheus `scrape_configs` (service discovery, relabel configs), pulls metrics from endpoints, and converts them to OTel metric streams.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-492",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector Prometheus Receiver (Scraping): High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Prometheus Scraping to collect metrics from third-party infrastructure (e.g., MySQL exporter, NGINX exporter, Redis) without running a standalone Prometheus server.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Configuring prometheus receiver in Collector to scrape third-party Prometheus endpoints is under consideration.",
    options: [
      { id: 'A', text: "Prometheus format metrics cannot be ingested by OpenTelemetry." },
      { id: 'B', text: "Deploy a standalone Prometheus server, a Thanos cluster, and a Grafana instance solely to scrape one endpoint." },
      { id: 'C', text: "Recompile third-party database exporters from source code." },
      { id: 'D', text: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions. The `prometheus` receiver embedded in the OpenTelemetry Collector acts as a full-featured Prometheus scraper. It parses standard Prometheus `scrape_configs` (service discovery, relabel configs), pulls metrics from endpoints, and converts them to OTel metric streams.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-493",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector Prometheus Receiver (Scraping): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Prometheus Scraping to collect metrics from third-party infrastructure (e.g., MySQL exporter, NGINX exporter, Redis) without running a standalone Prometheus server.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Configuring prometheus receiver in Collector to scrape third-party Prometheus endpoints is under consideration.",
    options: [
      { id: 'A', text: "Recompile third-party database exporters from source code." },
      { id: 'B', text: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions." },
      { id: 'C', text: "Deploy a standalone Prometheus server, a Thanos cluster, and a Grafana instance solely to scrape one endpoint." },
      { id: 'D', text: "Prometheus format metrics cannot be ingested by OpenTelemetry." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions. The `prometheus` receiver embedded in the OpenTelemetry Collector acts as a full-featured Prometheus scraper. It parses standard Prometheus `scrape_configs` (service discovery, relabel configs), pulls metrics from endpoints, and converts them to OTel metric streams.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Security And Governance"]
  },
  {
    id: "cncf-otca-494",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector Prometheus Receiver (Scraping): Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Prometheus Scraping to collect metrics from third-party infrastructure (e.g., MySQL exporter, NGINX exporter, Redis) without running a standalone Prometheus server.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Configuring prometheus receiver in Collector to scrape third-party Prometheus endpoints is under consideration.",
    options: [
      { id: 'A', text: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions." },
      { id: 'B', text: "Prometheus format metrics cannot be ingested by OpenTelemetry." },
      { id: 'C', text: "Recompile third-party database exporters from source code." },
      { id: 'D', text: "Deploy a standalone Prometheus server, a Thanos cluster, and a Grafana instance solely to scrape one endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions. The `prometheus` receiver embedded in the OpenTelemetry Collector acts as a full-featured Prometheus scraper. It parses standard Prometheus `scrape_configs` (service discovery, relabel configs), pulls metrics from endpoints, and converts them to OTel metric streams.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Microservice Migration"]
  },
  {
    id: "cncf-otca-495",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "OpenTelemetry Collector Prometheus Receiver (Scraping): Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Prometheus Scraping to collect metrics from third-party infrastructure (e.g., MySQL exporter, NGINX exporter, Redis) without running a standalone Prometheus server.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Configuring prometheus receiver in Collector to scrape third-party Prometheus endpoints is under consideration.",
    options: [
      { id: 'A', text: "Prometheus format metrics cannot be ingested by OpenTelemetry." },
      { id: 'B', text: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions." },
      { id: 'C', text: "Recompile third-party database exporters from source code." },
      { id: 'D', text: "Deploy a standalone Prometheus server, a Thanos cluster, and a Grafana instance solely to scrape one endpoint." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure the `prometheus` receiver in the OpenTelemetry Collector with standard Prometheus scrape configurations and job definitions. The `prometheus` receiver embedded in the OpenTelemetry Collector acts as a full-featured Prometheus scraper. It parses standard Prometheus `scrape_configs` (service discovery, relabel configs), pulls metrics from endpoints, and converts them to OTel metric streams.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/prometheusreceiver",
    tags: ["Prometheus Scraping", "Prometheus Receiver", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-496",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Auditing and Validating Telemetry Pipelines: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Telemetry Validation to generate synthetic telemetry to test collector pipeline rules, sampling filters, and load performance in a pre-production environment.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Validating pipeline throughput, dropped spans, and exporter error metrics with telemetrygen is under consideration.",
    options: [
      { id: 'A', text: "Assume collectors never drop telemetry under load." },
      { id: 'B', text: "Test pipelines by intentionally triggering production outages during business hours." },
      { id: 'C', text: "Manually write curl scripts sending malformed JSON." },
      { id: 'D', text: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector. `telemetrygen` is an official OpenTelemetry utility designed to simulate realistic telemetry traffic (configurable rates, worker threads, error rates). Combined with internal Collector self-monitoring metrics (`otelcol_exporter_enqueue_failed_spans`), it enables thorough load and validation testing.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/cmd/telemetrygen",
    tags: ["Telemetry Validation", "telemetrygen", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-497",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Auditing and Validating Telemetry Pipelines: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Telemetry Validation to generate synthetic telemetry to test collector pipeline rules, sampling filters, and load performance in a pre-production environment.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Validating pipeline throughput, dropped spans, and exporter error metrics with telemetrygen is under consideration.",
    options: [
      { id: 'A', text: "Manually write curl scripts sending malformed JSON." },
      { id: 'B', text: "Assume collectors never drop telemetry under load." },
      { id: 'C', text: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector." },
      { id: 'D', text: "Test pipelines by intentionally triggering production outages during business hours." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector. `telemetrygen` is an official OpenTelemetry utility designed to simulate realistic telemetry traffic (configurable rates, worker threads, error rates). Combined with internal Collector self-monitoring metrics (`otelcol_exporter_enqueue_failed_spans`), it enables thorough load and validation testing.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/cmd/telemetrygen",
    tags: ["Telemetry Validation", "telemetrygen", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-498",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Auditing and Validating Telemetry Pipelines: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Telemetry Validation to generate synthetic telemetry to test collector pipeline rules, sampling filters, and load performance in a pre-production environment.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Validating pipeline throughput, dropped spans, and exporter error metrics with telemetrygen is under consideration.",
    options: [
      { id: 'A', text: "Manually write curl scripts sending malformed JSON." },
      { id: 'B', text: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector." },
      { id: 'C', text: "Assume collectors never drop telemetry under load." },
      { id: 'D', text: "Test pipelines by intentionally triggering production outages during business hours." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector. `telemetrygen` is an official OpenTelemetry utility designed to simulate realistic telemetry traffic (configurable rates, worker threads, error rates). Combined with internal Collector self-monitoring metrics (`otelcol_exporter_enqueue_failed_spans`), it enables thorough load and validation testing.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/cmd/telemetrygen",
    tags: ["Telemetry Validation", "telemetrygen", "Security And Governance"]
  },
  {
    id: "cncf-otca-499",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Auditing and Validating Telemetry Pipelines: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Telemetry Validation to generate synthetic telemetry to test collector pipeline rules, sampling filters, and load performance in a pre-production environment.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Validating pipeline throughput, dropped spans, and exporter error metrics with telemetrygen is under consideration.",
    options: [
      { id: 'A', text: "Assume collectors never drop telemetry under load." },
      { id: 'B', text: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector." },
      { id: 'C', text: "Test pipelines by intentionally triggering production outages during business hours." },
      { id: 'D', text: "Manually write curl scripts sending malformed JSON." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector. `telemetrygen` is an official OpenTelemetry utility designed to simulate realistic telemetry traffic (configurable rates, worker threads, error rates). Combined with internal Collector self-monitoring metrics (`otelcol_exporter_enqueue_failed_spans`), it enables thorough load and validation testing.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/cmd/telemetrygen",
    tags: ["Telemetry Validation", "telemetrygen", "Microservice Migration"]
  },
  {
    id: "cncf-otca-500",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Auditing and Validating Telemetry Pipelines: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Telemetry Validation to generate synthetic telemetry to test collector pipeline rules, sampling filters, and load performance in a pre-production environment.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Validating pipeline throughput, dropped spans, and exporter error metrics with telemetrygen is under consideration.",
    options: [
      { id: 'A', text: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector." },
      { id: 'B', text: "Manually write curl scripts sending malformed JSON." },
      { id: 'C', text: "Test pipelines by intentionally triggering production outages during business hours." },
      { id: 'D', text: "Assume collectors never drop telemetry under load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `telemetrygen` to generate synthetic traces, metrics, and logs, and monitor `otelcol_processor_dropped_spans` metrics on the Collector. `telemetrygen` is an official OpenTelemetry utility designed to simulate realistic telemetry traffic (configurable rates, worker threads, error rates). Combined with internal Collector self-monitoring metrics (`otelcol_exporter_enqueue_failed_spans`), it enables thorough load and validation testing.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/cmd/telemetrygen",
    tags: ["Telemetry Validation", "telemetrygen", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_20;
