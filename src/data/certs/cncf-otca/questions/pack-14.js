export const CNCF_OTCA_QUESTIONS_14 = [
  {
    id: "cncf-otca-326",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Memory Ballast and Memory Limiter Processors: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Memory Governance to prevent an OpenTelemetry Collector pod from crashing with an Out-Of-Memory (OOMKilled) exit code during sudden telemetry spikes.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Protecting collectors from Out-Of-Memory (OOM) crashes using memory_limiter is under consideration.",
    options: [
      { id: 'A', text: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`." },
      { id: 'B', text: "Increase pod memory limit to infinite." },
      { id: 'C', text: "Disable garbage collection in the Go runtime." },
      { id: 'D', text: "Drop all incoming network packets blindly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`. The `memory_limiter` processor continuously monitors the Collector's heap memory usage. When consumption approaches defined thresholds (`check_interval`, `limit_percentage`), it actively drops data or returns backpressure to callers, preventing kernel OOM termination.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/memorylimiterprocessor/README.md",
    tags: ["Memory Governance", "Memory Limiter", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-327",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Memory Ballast and Memory Limiter Processors: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Memory Governance to prevent an OpenTelemetry Collector pod from crashing with an Out-Of-Memory (OOMKilled) exit code during sudden telemetry spikes.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Protecting collectors from Out-Of-Memory (OOM) crashes using memory_limiter is under consideration.",
    options: [
      { id: 'A', text: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`." },
      { id: 'B', text: "Increase pod memory limit to infinite." },
      { id: 'C', text: "Disable garbage collection in the Go runtime." },
      { id: 'D', text: "Drop all incoming network packets blindly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`. The `memory_limiter` processor continuously monitors the Collector's heap memory usage. When consumption approaches defined thresholds (`check_interval`, `limit_percentage`), it actively drops data or returns backpressure to callers, preventing kernel OOM termination.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/memorylimiterprocessor/README.md",
    tags: ["Memory Governance", "Memory Limiter", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-328",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Memory Ballast and Memory Limiter Processors: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Memory Governance to prevent an OpenTelemetry Collector pod from crashing with an Out-Of-Memory (OOMKilled) exit code during sudden telemetry spikes.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Protecting collectors from Out-Of-Memory (OOM) crashes using memory_limiter is under consideration.",
    options: [
      { id: 'A', text: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`." },
      { id: 'B', text: "Increase pod memory limit to infinite." },
      { id: 'C', text: "Disable garbage collection in the Go runtime." },
      { id: 'D', text: "Drop all incoming network packets blindly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`. The `memory_limiter` processor continuously monitors the Collector's heap memory usage. When consumption approaches defined thresholds (`check_interval`, `limit_percentage`), it actively drops data or returns backpressure to callers, preventing kernel OOM termination.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/memorylimiterprocessor/README.md",
    tags: ["Memory Governance", "Memory Limiter", "Security And Governance"]
  },
  {
    id: "cncf-otca-329",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Memory Ballast and Memory Limiter Processors: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Memory Governance to prevent an OpenTelemetry Collector pod from crashing with an Out-Of-Memory (OOMKilled) exit code during sudden telemetry spikes.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Protecting collectors from Out-Of-Memory (OOM) crashes using memory_limiter is under consideration.",
    options: [
      { id: 'A', text: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`." },
      { id: 'B', text: "Increase pod memory limit to infinite." },
      { id: 'C', text: "Disable garbage collection in the Go runtime." },
      { id: 'D', text: "Drop all incoming network packets blindly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`. The `memory_limiter` processor continuously monitors the Collector's heap memory usage. When consumption approaches defined thresholds (`check_interval`, `limit_percentage`), it actively drops data or returns backpressure to callers, preventing kernel OOM termination.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/memorylimiterprocessor/README.md",
    tags: ["Memory Governance", "Memory Limiter", "Microservice Migration"]
  },
  {
    id: "cncf-otca-330",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Memory Ballast and Memory Limiter Processors: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Memory Governance to prevent an OpenTelemetry Collector pod from crashing with an Out-Of-Memory (OOMKilled) exit code during sudden telemetry spikes.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Protecting collectors from Out-Of-Memory (OOM) crashes using memory_limiter is under consideration.",
    options: [
      { id: 'A', text: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`." },
      { id: 'B', text: "Increase pod memory limit to infinite." },
      { id: 'C', text: "Disable garbage collection in the Go runtime." },
      { id: 'D', text: "Drop all incoming network packets blindly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `memory_limiter` processor as the very first processor in every pipeline with `limit_percentage` and `spike_limit_percentage`. The `memory_limiter` processor continuously monitors the Collector's heap memory usage. When consumption approaches defined thresholds (`check_interval`, `limit_percentage`), it actively drops data or returns backpressure to callers, preventing kernel OOM termination.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/memorylimiterprocessor/README.md",
    tags: ["Memory Governance", "Memory Limiter", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-331",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Transform Processor (OTTLEngine): Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Telemetry Transformation to rename an attribute `old_client_id` to `client.id` and mask credit card numbers appearing in span attributes across all incoming telemetry.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Modifying, filtering, and renaming telemetry attributes using OpenTelemetry Transformation Language (OTTL) is under consideration.",
    options: [
      { id: 'A', text: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`." },
      { id: 'B', text: "Modify application source code across 50 microservices to fix the name." },
      { id: 'C', text: "Write a custom regex proxy in Python outside the collector." },
      { id: 'D', text: "Drop all spans containing old attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`. The `transform` processor uses the OpenTelemetry Transformation Language (OTTL). It provides a powerful declarative DSL to mutate, rename, extract, or delete attributes, metrics, and log fields in-flight within the collector without modifying application code.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor",
    tags: ["Telemetry Transformation", "Transform Processor", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-332",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Transform Processor (OTTLEngine): High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Telemetry Transformation to rename an attribute `old_client_id` to `client.id` and mask credit card numbers appearing in span attributes across all incoming telemetry.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Modifying, filtering, and renaming telemetry attributes using OpenTelemetry Transformation Language (OTTL) is under consideration.",
    options: [
      { id: 'A', text: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`." },
      { id: 'B', text: "Modify application source code across 50 microservices to fix the name." },
      { id: 'C', text: "Write a custom regex proxy in Python outside the collector." },
      { id: 'D', text: "Drop all spans containing old attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`. The `transform` processor uses the OpenTelemetry Transformation Language (OTTL). It provides a powerful declarative DSL to mutate, rename, extract, or delete attributes, metrics, and log fields in-flight within the collector without modifying application code.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor",
    tags: ["Telemetry Transformation", "Transform Processor", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-333",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Transform Processor (OTTLEngine): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Telemetry Transformation to rename an attribute `old_client_id` to `client.id` and mask credit card numbers appearing in span attributes across all incoming telemetry.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Modifying, filtering, and renaming telemetry attributes using OpenTelemetry Transformation Language (OTTL) is under consideration.",
    options: [
      { id: 'A', text: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`." },
      { id: 'B', text: "Modify application source code across 50 microservices to fix the name." },
      { id: 'C', text: "Write a custom regex proxy in Python outside the collector." },
      { id: 'D', text: "Drop all spans containing old attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`. The `transform` processor uses the OpenTelemetry Transformation Language (OTTL). It provides a powerful declarative DSL to mutate, rename, extract, or delete attributes, metrics, and log fields in-flight within the collector without modifying application code.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor",
    tags: ["Telemetry Transformation", "Transform Processor", "Security And Governance"]
  },
  {
    id: "cncf-otca-334",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Transform Processor (OTTLEngine): Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Telemetry Transformation to rename an attribute `old_client_id` to `client.id` and mask credit card numbers appearing in span attributes across all incoming telemetry.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Modifying, filtering, and renaming telemetry attributes using OpenTelemetry Transformation Language (OTTL) is under consideration.",
    options: [
      { id: 'A', text: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`." },
      { id: 'B', text: "Modify application source code across 50 microservices to fix the name." },
      { id: 'C', text: "Write a custom regex proxy in Python outside the collector." },
      { id: 'D', text: "Drop all spans containing old attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`. The `transform` processor uses the OpenTelemetry Transformation Language (OTTL). It provides a powerful declarative DSL to mutate, rename, extract, or delete attributes, metrics, and log fields in-flight within the collector without modifying application code.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor",
    tags: ["Telemetry Transformation", "Transform Processor", "Microservice Migration"]
  },
  {
    id: "cncf-otca-335",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Transform Processor (OTTLEngine): Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Telemetry Transformation to rename an attribute `old_client_id` to `client.id` and mask credit card numbers appearing in span attributes across all incoming telemetry.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Modifying, filtering, and renaming telemetry attributes using OpenTelemetry Transformation Language (OTTL) is under consideration.",
    options: [
      { id: 'A', text: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`." },
      { id: 'B', text: "Modify application source code across 50 microservices to fix the name." },
      { id: 'C', text: "Write a custom regex proxy in Python outside the collector." },
      { id: 'D', text: "Drop all spans containing old attribute names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `transform` processor using OpenTelemetry Transformation Language (OTTL) statements with `set` and `replace_all_patterns`. The `transform` processor uses the OpenTelemetry Transformation Language (OTTL). It provides a powerful declarative DSL to mutate, rename, extract, or delete attributes, metrics, and log fields in-flight within the collector without modifying application code.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor",
    tags: ["Telemetry Transformation", "Transform Processor", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-336",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Tail-Based Sampling Processor: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Tail Sampling to configure an OpenTelemetry Collector to sample 100% of traces with errors (HTTP 5xx) or duration &gt; 1.5s, while keeping 5% of healthy traces.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Configuring probabilistic, string_attribute, latency, and numeric_attribute sampling filters is under consideration.",
    options: [
      { id: 'A', text: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%)." },
      { id: 'B', text: "Use a head-based sampler at the application SDK." },
      { id: 'C', text: "Drop all spans that have latency greater than 1.5s." },
      { id: 'D', text: "Tail sampling is impossible in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%). The `tail_sampling` processor in the Contrib collector buffers completed traces in memory. It applies composite policy rules (latency thresholds, error status codes, specific attribute values) to retain high-value traces while sampling down high-volume mundane traffic.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",
    tags: ["Tail Sampling", "Tail Sampling", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-337",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Tail-Based Sampling Processor: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Tail Sampling to configure an OpenTelemetry Collector to sample 100% of traces with errors (HTTP 5xx) or duration &gt; 1.5s, while keeping 5% of healthy traces.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Configuring probabilistic, string_attribute, latency, and numeric_attribute sampling filters is under consideration.",
    options: [
      { id: 'A', text: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%)." },
      { id: 'B', text: "Use a head-based sampler at the application SDK." },
      { id: 'C', text: "Drop all spans that have latency greater than 1.5s." },
      { id: 'D', text: "Tail sampling is impossible in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%). The `tail_sampling` processor in the Contrib collector buffers completed traces in memory. It applies composite policy rules (latency thresholds, error status codes, specific attribute values) to retain high-value traces while sampling down high-volume mundane traffic.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",
    tags: ["Tail Sampling", "Tail Sampling", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-338",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Tail-Based Sampling Processor: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Tail Sampling to configure an OpenTelemetry Collector to sample 100% of traces with errors (HTTP 5xx) or duration &gt; 1.5s, while keeping 5% of healthy traces.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Configuring probabilistic, string_attribute, latency, and numeric_attribute sampling filters is under consideration.",
    options: [
      { id: 'A', text: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%)." },
      { id: 'B', text: "Use a head-based sampler at the application SDK." },
      { id: 'C', text: "Drop all spans that have latency greater than 1.5s." },
      { id: 'D', text: "Tail sampling is impossible in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%). The `tail_sampling` processor in the Contrib collector buffers completed traces in memory. It applies composite policy rules (latency thresholds, error status codes, specific attribute values) to retain high-value traces while sampling down high-volume mundane traffic.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",
    tags: ["Tail Sampling", "Tail Sampling", "Security And Governance"]
  },
  {
    id: "cncf-otca-339",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Tail-Based Sampling Processor: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Tail Sampling to configure an OpenTelemetry Collector to sample 100% of traces with errors (HTTP 5xx) or duration &gt; 1.5s, while keeping 5% of healthy traces.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Configuring probabilistic, string_attribute, latency, and numeric_attribute sampling filters is under consideration.",
    options: [
      { id: 'A', text: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%)." },
      { id: 'B', text: "Use a head-based sampler at the application SDK." },
      { id: 'C', text: "Drop all spans that have latency greater than 1.5s." },
      { id: 'D', text: "Tail sampling is impossible in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%). The `tail_sampling` processor in the Contrib collector buffers completed traces in memory. It applies composite policy rules (latency thresholds, error status codes, specific attribute values) to retain high-value traces while sampling down high-volume mundane traffic.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",
    tags: ["Tail Sampling", "Tail Sampling", "Microservice Migration"]
  },
  {
    id: "cncf-otca-340",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Tail-Based Sampling Processor: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Tail Sampling to configure an OpenTelemetry Collector to sample 100% of traces with errors (HTTP 5xx) or duration &gt; 1.5s, while keeping 5% of healthy traces.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Configuring probabilistic, string_attribute, latency, and numeric_attribute sampling filters is under consideration.",
    options: [
      { id: 'A', text: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%)." },
      { id: 'B', text: "Use a head-based sampler at the application SDK." },
      { id: 'C', text: "Drop all spans that have latency greater than 1.5s." },
      { id: 'D', text: "Tail sampling is impossible in OpenTelemetry." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure the `tail_sampling` processor with policy rules: `status_code` (ERROR), `latency` (&gt;1500ms), and `probabilistic` (5%). The `tail_sampling` processor in the Contrib collector buffers completed traces in memory. It applies composite policy rules (latency thresholds, error status codes, specific attribute values) to retain high-value traces while sampling down high-volume mundane traffic.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",
    tags: ["Tail Sampling", "Tail Sampling", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-341",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Deployment Patterns: Agent vs Gateway: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Topologies to design an observability architecture for a 500-node Kubernetes cluster balancing local pod offloading with centralized governance.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Evaluating Sidecar/DaemonSet (Agent) vs Centralized Cluster (Gateway) architectures is under consideration.",
    options: [
      { id: 'A', text: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway)." },
      { id: 'B', text: "Deploy a single monolithic Collector instance handling all 500 nodes directly." },
      { id: 'C', text: "Require every application pod to export telemetry over the internet directly to SaaS backends." },
      { id: 'D', text: "Run collectors only on master control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway). A multi-tier architecture combines advantages: Agent collectors (DaemonSet/sidecars) provide low-latency local endpoints (`localhost:4317`) and host enrichment; Gateway collectors (centralized scaled deployment) handle heavy processing, tail sampling, and credential management for backend exports.",
    referenceUrl: "https://opentelemetry.io/docs/collector/deployment/",
    tags: ["Collector Topologies", "Collector Topologies", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-342",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Deployment Patterns: Agent vs Gateway: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Topologies to design an observability architecture for a 500-node Kubernetes cluster balancing local pod offloading with centralized governance.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Evaluating Sidecar/DaemonSet (Agent) vs Centralized Cluster (Gateway) architectures is under consideration.",
    options: [
      { id: 'A', text: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway)." },
      { id: 'B', text: "Deploy a single monolithic Collector instance handling all 500 nodes directly." },
      { id: 'C', text: "Require every application pod to export telemetry over the internet directly to SaaS backends." },
      { id: 'D', text: "Run collectors only on master control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway). A multi-tier architecture combines advantages: Agent collectors (DaemonSet/sidecars) provide low-latency local endpoints (`localhost:4317`) and host enrichment; Gateway collectors (centralized scaled deployment) handle heavy processing, tail sampling, and credential management for backend exports.",
    referenceUrl: "https://opentelemetry.io/docs/collector/deployment/",
    tags: ["Collector Topologies", "Collector Topologies", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-343",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Deployment Patterns: Agent vs Gateway: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Topologies to design an observability architecture for a 500-node Kubernetes cluster balancing local pod offloading with centralized governance.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Evaluating Sidecar/DaemonSet (Agent) vs Centralized Cluster (Gateway) architectures is under consideration.",
    options: [
      { id: 'A', text: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway)." },
      { id: 'B', text: "Deploy a single monolithic Collector instance handling all 500 nodes directly." },
      { id: 'C', text: "Require every application pod to export telemetry over the internet directly to SaaS backends." },
      { id: 'D', text: "Run collectors only on master control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway). A multi-tier architecture combines advantages: Agent collectors (DaemonSet/sidecars) provide low-latency local endpoints (`localhost:4317`) and host enrichment; Gateway collectors (centralized scaled deployment) handle heavy processing, tail sampling, and credential management for backend exports.",
    referenceUrl: "https://opentelemetry.io/docs/collector/deployment/",
    tags: ["Collector Topologies", "Collector Topologies", "Security And Governance"]
  },
  {
    id: "cncf-otca-344",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Deployment Patterns: Agent vs Gateway: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Topologies to design an observability architecture for a 500-node Kubernetes cluster balancing local pod offloading with centralized governance.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Evaluating Sidecar/DaemonSet (Agent) vs Centralized Cluster (Gateway) architectures is under consideration.",
    options: [
      { id: 'A', text: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway)." },
      { id: 'B', text: "Deploy a single monolithic Collector instance handling all 500 nodes directly." },
      { id: 'C', text: "Require every application pod to export telemetry over the internet directly to SaaS backends." },
      { id: 'D', text: "Run collectors only on master control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway). A multi-tier architecture combines advantages: Agent collectors (DaemonSet/sidecars) provide low-latency local endpoints (`localhost:4317`) and host enrichment; Gateway collectors (centralized scaled deployment) handle heavy processing, tail sampling, and credential management for backend exports.",
    referenceUrl: "https://opentelemetry.io/docs/collector/deployment/",
    tags: ["Collector Topologies", "Collector Topologies", "Microservice Migration"]
  },
  {
    id: "cncf-otca-345",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Deployment Patterns: Agent vs Gateway: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Topologies to design an observability architecture for a 500-node Kubernetes cluster balancing local pod offloading with centralized governance.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Evaluating Sidecar/DaemonSet (Agent) vs Centralized Cluster (Gateway) architectures is under consideration.",
    options: [
      { id: 'A', text: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway)." },
      { id: 'B', text: "Deploy a single monolithic Collector instance handling all 500 nodes directly." },
      { id: 'C', text: "Require every application pod to export telemetry over the internet directly to SaaS backends." },
      { id: 'D', text: "Run collectors only on master control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a two-tier architecture: Collector DaemonSets (Agents) on worker nodes for local receipt, forwarding to a centralized Collector cluster (Gateway). A multi-tier architecture combines advantages: Agent collectors (DaemonSet/sidecars) provide low-latency local endpoints (`localhost:4317`) and host enrichment; Gateway collectors (centralized scaled deployment) handle heavy processing, tail sampling, and credential management for backend exports.",
    referenceUrl: "https://opentelemetry.io/docs/collector/deployment/",
    tags: ["Collector Topologies", "Collector Topologies", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-346",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Operator for Kubernetes: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates OTel Operator to automatically inject OpenTelemetry instrumentation libraries into Java, Node.js, and Python pods in a Kubernetes cluster without modifying Dockerfiles.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Managing collector deployments and automating auto-instrumentation via the Kubernetes operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`." },
      { id: 'B', text: "Rebuild all container images with manual code instrumentation." },
      { id: 'C', text: "SSH into running pods and execute npm install." },
      { id: 'D', text: "The operator can only deploy collectors and cannot inject instrumentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`. The OpenTelemetry Operator for Kubernetes automates collector management and provides zero-code auto-instrumentation. Applying annotations (`inject-java: true`, `inject-python: true`) instructs the operator's admission webhook to inject init-containers containing runtime agents that instrument workloads transparently.",
    referenceUrl: "https://opentelemetry.io/docs/kubernetes/operator/",
    tags: ["OTel Operator", "OpenTelemetry Operator", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-347",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Operator for Kubernetes: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates OTel Operator to automatically inject OpenTelemetry instrumentation libraries into Java, Node.js, and Python pods in a Kubernetes cluster without modifying Dockerfiles.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Managing collector deployments and automating auto-instrumentation via the Kubernetes operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`." },
      { id: 'B', text: "Rebuild all container images with manual code instrumentation." },
      { id: 'C', text: "SSH into running pods and execute npm install." },
      { id: 'D', text: "The operator can only deploy collectors and cannot inject instrumentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`. The OpenTelemetry Operator for Kubernetes automates collector management and provides zero-code auto-instrumentation. Applying annotations (`inject-java: true`, `inject-python: true`) instructs the operator's admission webhook to inject init-containers containing runtime agents that instrument workloads transparently.",
    referenceUrl: "https://opentelemetry.io/docs/kubernetes/operator/",
    tags: ["OTel Operator", "OpenTelemetry Operator", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-348",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Operator for Kubernetes: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates OTel Operator to automatically inject OpenTelemetry instrumentation libraries into Java, Node.js, and Python pods in a Kubernetes cluster without modifying Dockerfiles.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Managing collector deployments and automating auto-instrumentation via the Kubernetes operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`." },
      { id: 'B', text: "Rebuild all container images with manual code instrumentation." },
      { id: 'C', text: "SSH into running pods and execute npm install." },
      { id: 'D', text: "The operator can only deploy collectors and cannot inject instrumentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`. The OpenTelemetry Operator for Kubernetes automates collector management and provides zero-code auto-instrumentation. Applying annotations (`inject-java: true`, `inject-python: true`) instructs the operator's admission webhook to inject init-containers containing runtime agents that instrument workloads transparently.",
    referenceUrl: "https://opentelemetry.io/docs/kubernetes/operator/",
    tags: ["OTel Operator", "OpenTelemetry Operator", "Security And Governance"]
  },
  {
    id: "cncf-otca-349",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Operator for Kubernetes: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates OTel Operator to automatically inject OpenTelemetry instrumentation libraries into Java, Node.js, and Python pods in a Kubernetes cluster without modifying Dockerfiles.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Managing collector deployments and automating auto-instrumentation via the Kubernetes operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`." },
      { id: 'B', text: "Rebuild all container images with manual code instrumentation." },
      { id: 'C', text: "SSH into running pods and execute npm install." },
      { id: 'D', text: "The operator can only deploy collectors and cannot inject instrumentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`. The OpenTelemetry Operator for Kubernetes automates collector management and provides zero-code auto-instrumentation. Applying annotations (`inject-java: true`, `inject-python: true`) instructs the operator's admission webhook to inject init-containers containing runtime agents that instrument workloads transparently.",
    referenceUrl: "https://opentelemetry.io/docs/kubernetes/operator/",
    tags: ["OTel Operator", "OpenTelemetry Operator", "Microservice Migration"]
  },
  {
    id: "cncf-otca-350",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "OpenTelemetry Operator for Kubernetes: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates OTel Operator to automatically inject OpenTelemetry instrumentation libraries into Java, Node.js, and Python pods in a Kubernetes cluster without modifying Dockerfiles.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Managing collector deployments and automating auto-instrumentation via the Kubernetes operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`." },
      { id: 'B', text: "Rebuild all container images with manual code instrumentation." },
      { id: 'C', text: "SSH into running pods and execute npm install." },
      { id: 'D', text: "The operator can only deploy collectors and cannot inject instrumentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the OpenTelemetry Operator and annotate target namespaces/pods with `instrumentation.opentelemetry.io/inject-java: \"true\"`. The OpenTelemetry Operator for Kubernetes automates collector management and provides zero-code auto-instrumentation. Applying annotations (`inject-java: true`, `inject-python: true`) instructs the operator's admission webhook to inject init-containers containing runtime agents that instrument workloads transparently.",
    referenceUrl: "https://opentelemetry.io/docs/kubernetes/operator/",
    tags: ["OTel Operator", "OpenTelemetry Operator", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_14;
