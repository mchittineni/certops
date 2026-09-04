export const CNCF_OTCA_QUESTIONS_19 = [
  {
    id: "cncf-otca-451",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Prometheus Exporter and Prometheus Receiver: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Prometheus Integration to expose OpenTelemetry metrics so an existing Prometheus server can scrape them via a standard `/metrics` HTTP endpoint.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Scraping pull endpoints vs pushing OTLP metrics to Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Push OTLP metrics to the Prometheus scraping port 9090 directly." },
      { id: 'B', text: "Convert Prometheus metrics to flat text files." },
      { id: 'C', text: "Prometheus does not integrate with OpenTelemetry." },
      { id: 'D', text: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target. The `prometheus` exporter in the OpenTelemetry Collector exposes a Prometheus pull endpoint (default port 8889). Existing Prometheus servers can scrape this endpoint as a standard target, translating OpenTelemetry metrics into Prometheus format seamlessly.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter",
    tags: ["Prometheus Integration", "Prometheus Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-452",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Prometheus Exporter and Prometheus Receiver: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Prometheus Integration to expose OpenTelemetry metrics so an existing Prometheus server can scrape them via a standard `/metrics` HTTP endpoint.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Scraping pull endpoints vs pushing OTLP metrics to Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target." },
      { id: 'B', text: "Convert Prometheus metrics to flat text files." },
      { id: 'C', text: "Prometheus does not integrate with OpenTelemetry." },
      { id: 'D', text: "Push OTLP metrics to the Prometheus scraping port 9090 directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target. The `prometheus` exporter in the OpenTelemetry Collector exposes a Prometheus pull endpoint (default port 8889). Existing Prometheus servers can scrape this endpoint as a standard target, translating OpenTelemetry metrics into Prometheus format seamlessly.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter",
    tags: ["Prometheus Integration", "Prometheus Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-453",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Prometheus Exporter and Prometheus Receiver: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Prometheus Integration to expose OpenTelemetry metrics so an existing Prometheus server can scrape them via a standard `/metrics` HTTP endpoint.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Scraping pull endpoints vs pushing OTLP metrics to Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Push OTLP metrics to the Prometheus scraping port 9090 directly." },
      { id: 'B', text: "Prometheus does not integrate with OpenTelemetry." },
      { id: 'C', text: "Convert Prometheus metrics to flat text files." },
      { id: 'D', text: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target. The `prometheus` exporter in the OpenTelemetry Collector exposes a Prometheus pull endpoint (default port 8889). Existing Prometheus servers can scrape this endpoint as a standard target, translating OpenTelemetry metrics into Prometheus format seamlessly.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter",
    tags: ["Prometheus Integration", "Prometheus Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-454",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Prometheus Exporter and Prometheus Receiver: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Prometheus Integration to expose OpenTelemetry metrics so an existing Prometheus server can scrape them via a standard `/metrics` HTTP endpoint.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Scraping pull endpoints vs pushing OTLP metrics to Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target." },
      { id: 'B', text: "Prometheus does not integrate with OpenTelemetry." },
      { id: 'C', text: "Push OTLP metrics to the Prometheus scraping port 9090 directly." },
      { id: 'D', text: "Convert Prometheus metrics to flat text files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target. The `prometheus` exporter in the OpenTelemetry Collector exposes a Prometheus pull endpoint (default port 8889). Existing Prometheus servers can scrape this endpoint as a standard target, translating OpenTelemetry metrics into Prometheus format seamlessly.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter",
    tags: ["Prometheus Integration", "Prometheus Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-455",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Prometheus Exporter and Prometheus Receiver: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Prometheus Integration to expose OpenTelemetry metrics so an existing Prometheus server can scrape them via a standard `/metrics` HTTP endpoint.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Scraping pull endpoints vs pushing OTLP metrics to Prometheus is under consideration.",
    options: [
      { id: 'A', text: "Prometheus does not integrate with OpenTelemetry." },
      { id: 'B', text: "Convert Prometheus metrics to flat text files." },
      { id: 'C', text: "Push OTLP metrics to the Prometheus scraping port 9090 directly." },
      { id: 'D', text: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure the `prometheus` exporter in the Collector on port 8889, creating a pull-based Prometheus scraping target. The `prometheus` exporter in the OpenTelemetry Collector exposes a Prometheus pull endpoint (default port 8889). Existing Prometheus servers can scrape this endpoint as a standard target, translating OpenTelemetry metrics into Prometheus format seamlessly.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/prometheusexporter",
    tags: ["Prometheus Integration", "Prometheus Exporter", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-456",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Jaeger and Zipkin Receivers for Legacy Ingestion: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Legacy Ingestion to transition a microservice fleet from Jaeger and Zipkin to OpenTelemetry without re-instrumenting all applications simultaneously.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Migrating from Jaeger/Zipkin by ingesting legacy traces via Collector receivers is under consideration.",
    options: [
      { id: 'A', text: "Drop all historical telemetry." },
      { id: 'B', text: "Shut down the existing applications until all code is rewritten with OpenTelemetry SDKs." },
      { id: 'C', text: "Run separate parallel clusters of Jaeger and Zipkin servers indefinitely." },
      { id: 'D', text: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats. The OpenTelemetry Collector facilitates incremental migration. By enabling legacy receivers (`jaeger` on ports 14250/14268, `zipkin` on port 9411), the Collector accepts legacy payloads, converts them to internal OpenTelemetry format, and exports them to modern backends.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/jaegerreceiver",
    tags: ["Legacy Ingestion", "Legacy Receivers", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-457",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Jaeger and Zipkin Receivers for Legacy Ingestion: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Legacy Ingestion to transition a microservice fleet from Jaeger and Zipkin to OpenTelemetry without re-instrumenting all applications simultaneously.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Migrating from Jaeger/Zipkin by ingesting legacy traces via Collector receivers is under consideration.",
    options: [
      { id: 'A', text: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats." },
      { id: 'B', text: "Shut down the existing applications until all code is rewritten with OpenTelemetry SDKs." },
      { id: 'C', text: "Run separate parallel clusters of Jaeger and Zipkin servers indefinitely." },
      { id: 'D', text: "Drop all historical telemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats. The OpenTelemetry Collector facilitates incremental migration. By enabling legacy receivers (`jaeger` on ports 14250/14268, `zipkin` on port 9411), the Collector accepts legacy payloads, converts them to internal OpenTelemetry format, and exports them to modern backends.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/jaegerreceiver",
    tags: ["Legacy Ingestion", "Legacy Receivers", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-458",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Jaeger and Zipkin Receivers for Legacy Ingestion: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Legacy Ingestion to transition a microservice fleet from Jaeger and Zipkin to OpenTelemetry without re-instrumenting all applications simultaneously.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Migrating from Jaeger/Zipkin by ingesting legacy traces via Collector receivers is under consideration.",
    options: [
      { id: 'A', text: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats." },
      { id: 'B', text: "Shut down the existing applications until all code is rewritten with OpenTelemetry SDKs." },
      { id: 'C', text: "Drop all historical telemetry." },
      { id: 'D', text: "Run separate parallel clusters of Jaeger and Zipkin servers indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats. The OpenTelemetry Collector facilitates incremental migration. By enabling legacy receivers (`jaeger` on ports 14250/14268, `zipkin` on port 9411), the Collector accepts legacy payloads, converts them to internal OpenTelemetry format, and exports them to modern backends.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/jaegerreceiver",
    tags: ["Legacy Ingestion", "Legacy Receivers", "Security And Governance"]
  },
  {
    id: "cncf-otca-459",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Jaeger and Zipkin Receivers for Legacy Ingestion: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Legacy Ingestion to transition a microservice fleet from Jaeger and Zipkin to OpenTelemetry without re-instrumenting all applications simultaneously.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Migrating from Jaeger/Zipkin by ingesting legacy traces via Collector receivers is under consideration.",
    options: [
      { id: 'A', text: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats." },
      { id: 'B', text: "Drop all historical telemetry." },
      { id: 'C', text: "Run separate parallel clusters of Jaeger and Zipkin servers indefinitely." },
      { id: 'D', text: "Shut down the existing applications until all code is rewritten with OpenTelemetry SDKs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats. The OpenTelemetry Collector facilitates incremental migration. By enabling legacy receivers (`jaeger` on ports 14250/14268, `zipkin` on port 9411), the Collector accepts legacy payloads, converts them to internal OpenTelemetry format, and exports them to modern backends.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/jaegerreceiver",
    tags: ["Legacy Ingestion", "Legacy Receivers", "Microservice Migration"]
  },
  {
    id: "cncf-otca-460",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Jaeger and Zipkin Receivers for Legacy Ingestion: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Legacy Ingestion to transition a microservice fleet from Jaeger and Zipkin to OpenTelemetry without re-instrumenting all applications simultaneously.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Migrating from Jaeger/Zipkin by ingesting legacy traces via Collector receivers is under consideration.",
    options: [
      { id: 'A', text: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats." },
      { id: 'B', text: "Shut down the existing applications until all code is rewritten with OpenTelemetry SDKs." },
      { id: 'C', text: "Run separate parallel clusters of Jaeger and Zipkin servers indefinitely." },
      { id: 'D', text: "Drop all historical telemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable `jaeger` and `zipkin` receivers in the OpenTelemetry Collector, allowing existing applications to send legacy formats. The OpenTelemetry Collector facilitates incremental migration. By enabling legacy receivers (`jaeger` on ports 14250/14268, `zipkin` on port 9411), the Collector accepts legacy payloads, converts them to internal OpenTelemetry format, and exports them to modern backends.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/jaegerreceiver",
    tags: ["Legacy Ingestion", "Legacy Receivers", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-461",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Kafka Exporter and Receiver for Telemetry Buffering: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Message Buffering to decouple OpenTelemetry collectors from downstream analytics backends to withstand prolonged backend outages without dropping telemetry.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Buffering petabyte-scale telemetry streams using Apache Kafka topics is under consideration.",
    options: [
      { id: 'A', text: "Buffer billions of spans in RAM memory inside collector pods." },
      { id: 'B', text: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver." },
      { id: 'C', text: "Write telemetry to local node ephemeral disk files." },
      { id: 'D', text: "Drop telemetry immediately whenever backends experience temporary latency spikes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver. For high-volume, mission-critical environments, Apache Kafka acts as a durable shock absorber. Agent collectors export telemetry to Kafka topics; downstream gateway collectors consume from Kafka, ensuring zero telemetry loss during backend maintenance or surges.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/kafkaexporter",
    tags: ["Message Buffering", "Kafka Buffering", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-462",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Kafka Exporter and Receiver for Telemetry Buffering: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Message Buffering to decouple OpenTelemetry collectors from downstream analytics backends to withstand prolonged backend outages without dropping telemetry.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Buffering petabyte-scale telemetry streams using Apache Kafka topics is under consideration.",
    options: [
      { id: 'A', text: "Write telemetry to local node ephemeral disk files." },
      { id: 'B', text: "Drop telemetry immediately whenever backends experience temporary latency spikes." },
      { id: 'C', text: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver." },
      { id: 'D', text: "Buffer billions of spans in RAM memory inside collector pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver. For high-volume, mission-critical environments, Apache Kafka acts as a durable shock absorber. Agent collectors export telemetry to Kafka topics; downstream gateway collectors consume from Kafka, ensuring zero telemetry loss during backend maintenance or surges.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/kafkaexporter",
    tags: ["Message Buffering", "Kafka Buffering", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-463",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Kafka Exporter and Receiver for Telemetry Buffering: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Message Buffering to decouple OpenTelemetry collectors from downstream analytics backends to withstand prolonged backend outages without dropping telemetry.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Buffering petabyte-scale telemetry streams using Apache Kafka topics is under consideration.",
    options: [
      { id: 'A', text: "Buffer billions of spans in RAM memory inside collector pods." },
      { id: 'B', text: "Drop telemetry immediately whenever backends experience temporary latency spikes." },
      { id: 'C', text: "Write telemetry to local node ephemeral disk files." },
      { id: 'D', text: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver. For high-volume, mission-critical environments, Apache Kafka acts as a durable shock absorber. Agent collectors export telemetry to Kafka topics; downstream gateway collectors consume from Kafka, ensuring zero telemetry loss during backend maintenance or surges.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/kafkaexporter",
    tags: ["Message Buffering", "Kafka Buffering", "Security And Governance"]
  },
  {
    id: "cncf-otca-464",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Kafka Exporter and Receiver for Telemetry Buffering: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Message Buffering to decouple OpenTelemetry collectors from downstream analytics backends to withstand prolonged backend outages without dropping telemetry.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Buffering petabyte-scale telemetry streams using Apache Kafka topics is under consideration.",
    options: [
      { id: 'A', text: "Buffer billions of spans in RAM memory inside collector pods." },
      { id: 'B', text: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver." },
      { id: 'C', text: "Drop telemetry immediately whenever backends experience temporary latency spikes." },
      { id: 'D', text: "Write telemetry to local node ephemeral disk files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver. For high-volume, mission-critical environments, Apache Kafka acts as a durable shock absorber. Agent collectors export telemetry to Kafka topics; downstream gateway collectors consume from Kafka, ensuring zero telemetry loss during backend maintenance or surges.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/kafkaexporter",
    tags: ["Message Buffering", "Kafka Buffering", "Microservice Migration"]
  },
  {
    id: "cncf-otca-465",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Kafka Exporter and Receiver for Telemetry Buffering: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Message Buffering to decouple OpenTelemetry collectors from downstream analytics backends to withstand prolonged backend outages without dropping telemetry.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Buffering petabyte-scale telemetry streams using Apache Kafka topics is under consideration.",
    options: [
      { id: 'A', text: "Write telemetry to local node ephemeral disk files." },
      { id: 'B', text: "Buffer billions of spans in RAM memory inside collector pods." },
      { id: 'C', text: "Drop telemetry immediately whenever backends experience temporary latency spikes." },
      { id: 'D', text: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an OpenTelemetry Collector pipeline exporting telemetry to an Apache Kafka topic, and consumer collectors reading via Kafka receiver. For high-volume, mission-critical environments, Apache Kafka acts as a durable shock absorber. Agent collectors export telemetry to Kafka topics; downstream gateway collectors consume from Kafka, ensuring zero telemetry loss during backend maintenance or surges.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/kafkaexporter",
    tags: ["Message Buffering", "Kafka Buffering", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-466",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Debugging with the Debug / Logging Exporter: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Debug Exporter to verify whether an application is sending expected span attributes and metric dimensions to the OpenTelemetry Collector during development.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Inspecting raw telemetry payloads in collector console output using the debug exporter is under consideration.",
    options: [
      { id: 'A', text: "Attach an interactive debugger to live production servers." },
      { id: 'B', text: "Disable all exporters." },
      { id: 'C', text: "Guess attributes by inspecting client-side source code." },
      { id: 'D', text: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs. The `debug` exporter (replacing the deprecated `logging` exporter) prints telemetry records directly to the Collector's standard output. Setting `verbosity: detailed` prints full attributes, resource metadata, events, and timestamps, making it the primary tool for testing pipelines.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/debugexporter/README.md",
    tags: ["Debug Exporter", "Debug Exporter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-467",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Debugging with the Debug / Logging Exporter: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Debug Exporter to verify whether an application is sending expected span attributes and metric dimensions to the OpenTelemetry Collector during development.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Inspecting raw telemetry payloads in collector console output using the debug exporter is under consideration.",
    options: [
      { id: 'A', text: "Disable all exporters." },
      { id: 'B', text: "Attach an interactive debugger to live production servers." },
      { id: 'C', text: "Guess attributes by inspecting client-side source code." },
      { id: 'D', text: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs. The `debug` exporter (replacing the deprecated `logging` exporter) prints telemetry records directly to the Collector's standard output. Setting `verbosity: detailed` prints full attributes, resource metadata, events, and timestamps, making it the primary tool for testing pipelines.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/debugexporter/README.md",
    tags: ["Debug Exporter", "Debug Exporter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-468",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Debugging with the Debug / Logging Exporter: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Debug Exporter to verify whether an application is sending expected span attributes and metric dimensions to the OpenTelemetry Collector during development.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Inspecting raw telemetry payloads in collector console output using the debug exporter is under consideration.",
    options: [
      { id: 'A', text: "Disable all exporters." },
      { id: 'B', text: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs." },
      { id: 'C', text: "Guess attributes by inspecting client-side source code." },
      { id: 'D', text: "Attach an interactive debugger to live production servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs. The `debug` exporter (replacing the deprecated `logging` exporter) prints telemetry records directly to the Collector's standard output. Setting `verbosity: detailed` prints full attributes, resource metadata, events, and timestamps, making it the primary tool for testing pipelines.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/debugexporter/README.md",
    tags: ["Debug Exporter", "Debug Exporter", "Security And Governance"]
  },
  {
    id: "cncf-otca-469",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Debugging with the Debug / Logging Exporter: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Debug Exporter to verify whether an application is sending expected span attributes and metric dimensions to the OpenTelemetry Collector during development.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Inspecting raw telemetry payloads in collector console output using the debug exporter is under consideration.",
    options: [
      { id: 'A', text: "Disable all exporters." },
      { id: 'B', text: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs." },
      { id: 'C', text: "Guess attributes by inspecting client-side source code." },
      { id: 'D', text: "Attach an interactive debugger to live production servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs. The `debug` exporter (replacing the deprecated `logging` exporter) prints telemetry records directly to the Collector's standard output. Setting `verbosity: detailed` prints full attributes, resource metadata, events, and timestamps, making it the primary tool for testing pipelines.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/debugexporter/README.md",
    tags: ["Debug Exporter", "Debug Exporter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-470",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Debugging with the Debug / Logging Exporter: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Debug Exporter to verify whether an application is sending expected span attributes and metric dimensions to the OpenTelemetry Collector during development.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Inspecting raw telemetry payloads in collector console output using the debug exporter is under consideration.",
    options: [
      { id: 'A', text: "Disable all exporters." },
      { id: 'B', text: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs." },
      { id: 'C', text: "Attach an interactive debugger to live production servers." },
      { id: 'D', text: "Guess attributes by inspecting client-side source code." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `debug` (formerly `logging`) exporter with `verbosity: detailed` to the collector pipeline and inspect stdout logs. The `debug` exporter (replacing the deprecated `logging` exporter) prints telemetry records directly to the Collector's standard output. Setting `verbosity: detailed` prints full attributes, resource metadata, events, and timestamps, making it the primary tool for testing pipelines.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/exporter/debugexporter/README.md",
    tags: ["Debug Exporter", "Debug Exporter", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-471",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Collector Queueing and Retry Mechanisms: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Queueing & Retries to ensure that temporary network blips or short backend timeouts do not cause the OpenTelemetry Collector to drop exported telemetry.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Configuring retry_on_failure and sending_queue in exporters for resilience is under consideration.",
    options: [
      { id: 'A', text: "Drop failed requests immediately without retrying." },
      { id: 'B', text: "Disable all network error handling in the collector." },
      { id: 'C', text: "Set timeout to 0 so requests fail immediately." },
      { id: 'D', text: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter. All standard OpenTelemetry Collector exporters support `sending_queue` (in-memory or persistent disk queue) and `retry_on_failure`. If an export request fails due to network partitions or backend 503 errors, the exporter retries with exponential backoff, preventing data loss.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#exporters",
    tags: ["Queueing & Retries", "Queueing & Retries", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-472",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Collector Queueing and Retry Mechanisms: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Queueing & Retries to ensure that temporary network blips or short backend timeouts do not cause the OpenTelemetry Collector to drop exported telemetry.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Configuring retry_on_failure and sending_queue in exporters for resilience is under consideration.",
    options: [
      { id: 'A', text: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter." },
      { id: 'B', text: "Disable all network error handling in the collector." },
      { id: 'C', text: "Set timeout to 0 so requests fail immediately." },
      { id: 'D', text: "Drop failed requests immediately without retrying." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter. All standard OpenTelemetry Collector exporters support `sending_queue` (in-memory or persistent disk queue) and `retry_on_failure`. If an export request fails due to network partitions or backend 503 errors, the exporter retries with exponential backoff, preventing data loss.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#exporters",
    tags: ["Queueing & Retries", "Queueing & Retries", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-473",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Collector Queueing and Retry Mechanisms: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Queueing & Retries to ensure that temporary network blips or short backend timeouts do not cause the OpenTelemetry Collector to drop exported telemetry.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Configuring retry_on_failure and sending_queue in exporters for resilience is under consideration.",
    options: [
      { id: 'A', text: "Drop failed requests immediately without retrying." },
      { id: 'B', text: "Set timeout to 0 so requests fail immediately." },
      { id: 'C', text: "Disable all network error handling in the collector." },
      { id: 'D', text: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter. All standard OpenTelemetry Collector exporters support `sending_queue` (in-memory or persistent disk queue) and `retry_on_failure`. If an export request fails due to network partitions or backend 503 errors, the exporter retries with exponential backoff, preventing data loss.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#exporters",
    tags: ["Queueing & Retries", "Queueing & Retries", "Security And Governance"]
  },
  {
    id: "cncf-otca-474",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Collector Queueing and Retry Mechanisms: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Queueing & Retries to ensure that temporary network blips or short backend timeouts do not cause the OpenTelemetry Collector to drop exported telemetry.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Configuring retry_on_failure and sending_queue in exporters for resilience is under consideration.",
    options: [
      { id: 'A', text: "Drop failed requests immediately without retrying." },
      { id: 'B', text: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter." },
      { id: 'C', text: "Disable all network error handling in the collector." },
      { id: 'D', text: "Set timeout to 0 so requests fail immediately." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter. All standard OpenTelemetry Collector exporters support `sending_queue` (in-memory or persistent disk queue) and `retry_on_failure`. If an export request fails due to network partitions or backend 503 errors, the exporter retries with exponential backoff, preventing data loss.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#exporters",
    tags: ["Queueing & Retries", "Queueing & Retries", "Microservice Migration"]
  },
  {
    id: "cncf-otca-475",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d4",
    domainName: "Operationalizing and Exporters",
    title: "Collector Queueing and Retry Mechanisms: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Queueing & Retries to ensure that temporary network blips or short backend timeouts do not cause the OpenTelemetry Collector to drop exported telemetry.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Configuring retry_on_failure and sending_queue in exporters for resilience is under consideration.",
    options: [
      { id: 'A', text: "Disable all network error handling in the collector." },
      { id: 'B', text: "Drop failed requests immediately without retrying." },
      { id: 'C', text: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter." },
      { id: 'D', text: "Set timeout to 0 so requests fail immediately." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure `retry_on_failure` with exponential backoff and enable `sending_queue` with persistent or memory storage in the exporter. All standard OpenTelemetry Collector exporters support `sending_queue` (in-memory or persistent disk queue) and `retry_on_failure`. If an export request fails due to network partitions or backend 503 errors, the exporter retries with exponential backoff, preventing data loss.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/#exporters",
    tags: ["Queueing & Retries", "Queueing & Retries", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_19;
