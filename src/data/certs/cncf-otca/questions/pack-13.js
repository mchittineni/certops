export const CNCF_OTCA_QUESTIONS_13 = [
  {
    id: "cncf-otca-301",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Resource Detectors and Semantic Attributes: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Resource Detection to automatically enrich all telemetry emitted by a container with Kubernetes pod name, namespace, and AWS EC2 instance ID.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Automatic discovery of host, container, K8s, and cloud provider attributes is under consideration.",
    options: [
      { id: 'A', text: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes." },
      { id: 'B', text: "Hardcode pod and instance metadata directly in application source code files." },
      { id: 'C', text: "Require developers to pass instance IDs manually in HTTP headers." },
      { id: 'D', text: "Resource metadata cannot be attached to OpenTelemetry signals." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes. OpenTelemetry Resources represent the entity producing telemetry. Resource Detectors automatically query local environments (cgroups, cloud metadata services, Kubernetes Downward API) to inject standardized resource attributes (`k8s.pod.name`, `cloud.region`), providing rich infrastructure context.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/resources/",
    tags: ["Resource Detection", "Resource Detectors", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-302",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Resource Detectors and Semantic Attributes: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Resource Detection to automatically enrich all telemetry emitted by a container with Kubernetes pod name, namespace, and AWS EC2 instance ID.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Automatic discovery of host, container, K8s, and cloud provider attributes is under consideration.",
    options: [
      { id: 'A', text: "Require developers to pass instance IDs manually in HTTP headers." },
      { id: 'B', text: "Hardcode pod and instance metadata directly in application source code files." },
      { id: 'C', text: "Resource metadata cannot be attached to OpenTelemetry signals." },
      { id: 'D', text: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes. OpenTelemetry Resources represent the entity producing telemetry. Resource Detectors automatically query local environments (cgroups, cloud metadata services, Kubernetes Downward API) to inject standardized resource attributes (`k8s.pod.name`, `cloud.region`), providing rich infrastructure context.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/resources/",
    tags: ["Resource Detection", "Resource Detectors", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-303",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Resource Detectors and Semantic Attributes: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Resource Detection to automatically enrich all telemetry emitted by a container with Kubernetes pod name, namespace, and AWS EC2 instance ID.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Automatic discovery of host, container, K8s, and cloud provider attributes is under consideration.",
    options: [
      { id: 'A', text: "Require developers to pass instance IDs manually in HTTP headers." },
      { id: 'B', text: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes." },
      { id: 'C', text: "Resource metadata cannot be attached to OpenTelemetry signals." },
      { id: 'D', text: "Hardcode pod and instance metadata directly in application source code files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes. OpenTelemetry Resources represent the entity producing telemetry. Resource Detectors automatically query local environments (cgroups, cloud metadata services, Kubernetes Downward API) to inject standardized resource attributes (`k8s.pod.name`, `cloud.region`), providing rich infrastructure context.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/resources/",
    tags: ["Resource Detection", "Resource Detectors", "Security And Governance"]
  },
  {
    id: "cncf-otca-304",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Resource Detectors and Semantic Attributes: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Resource Detection to automatically enrich all telemetry emitted by a container with Kubernetes pod name, namespace, and AWS EC2 instance ID.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Automatic discovery of host, container, K8s, and cloud provider attributes is under consideration.",
    options: [
      { id: 'A', text: "Hardcode pod and instance metadata directly in application source code files." },
      { id: 'B', text: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes." },
      { id: 'C', text: "Resource metadata cannot be attached to OpenTelemetry signals." },
      { id: 'D', text: "Require developers to pass instance IDs manually in HTTP headers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes. OpenTelemetry Resources represent the entity producing telemetry. Resource Detectors automatically query local environments (cgroups, cloud metadata services, Kubernetes Downward API) to inject standardized resource attributes (`k8s.pod.name`, `cloud.region`), providing rich infrastructure context.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/resources/",
    tags: ["Resource Detection", "Resource Detectors", "Microservice Migration"]
  },
  {
    id: "cncf-otca-305",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Resource Detectors and Semantic Attributes: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Resource Detection to automatically enrich all telemetry emitted by a container with Kubernetes pod name, namespace, and AWS EC2 instance ID.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Automatic discovery of host, container, K8s, and cloud provider attributes is under consideration.",
    options: [
      { id: 'A', text: "Hardcode pod and instance metadata directly in application source code files." },
      { id: 'B', text: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes." },
      { id: 'C', text: "Require developers to pass instance IDs manually in HTTP headers." },
      { id: 'D', text: "Resource metadata cannot be attached to OpenTelemetry signals." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure OpenTelemetry Resource Detectors (e.g., `k8s`, `container`, `aws`) in the SDK or Collector to attach standard resource attributes. OpenTelemetry Resources represent the entity producing telemetry. Resource Detectors automatically query local environments (cgroups, cloud metadata services, Kubernetes Downward API) to inject standardized resource attributes (`k8s.pod.name`, `cloud.region`), providing rich infrastructure context.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/resources/",
    tags: ["Resource Detection", "Resource Detectors", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-306",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Vendor-Neutrality and Migration from OpenTracing/OpenCensus: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Vendor Neutrality to understand the origins of OpenTelemetry and migrate legacy systems using OpenTracing or OpenCensus APIs.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? OpenTelemetry history as the merger of OpenTracing and OpenCensus is under consideration.",
    options: [
      { id: 'A', text: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly." },
      { id: 'B', text: "OpenTracing and OpenCensus are actively developed competing standards with OpenTelemetry." },
      { id: 'C', text: "Legacy OpenTracing instrumentation must be deleted entirely before adopting OpenTelemetry." },
      { id: 'D', text: "OpenTelemetry is a proprietary product owned by a single commercial cloud vendor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly. OpenTelemetry formed through the merger of OpenTracing (an API-only standard) and OpenCensus (an implementation-focused library). OpenTelemetry provides official bridge shims that allow legacy OpenTracing and OpenCensus code to forward telemetry to modern OpenTelemetry SDKs during migration.",
    referenceUrl: "https://opentelemetry.io/docs/migration/",
    tags: ["Vendor Neutrality", "OpenTracing Migration", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-307",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Vendor-Neutrality and Migration from OpenTracing/OpenCensus: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Vendor Neutrality to understand the origins of OpenTelemetry and migrate legacy systems using OpenTracing or OpenCensus APIs.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? OpenTelemetry history as the merger of OpenTracing and OpenCensus is under consideration.",
    options: [
      { id: 'A', text: "OpenTracing and OpenCensus are actively developed competing standards with OpenTelemetry." },
      { id: 'B', text: "OpenTelemetry is a proprietary product owned by a single commercial cloud vendor." },
      { id: 'C', text: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly." },
      { id: 'D', text: "Legacy OpenTracing instrumentation must be deleted entirely before adopting OpenTelemetry." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly. OpenTelemetry formed through the merger of OpenTracing (an API-only standard) and OpenCensus (an implementation-focused library). OpenTelemetry provides official bridge shims that allow legacy OpenTracing and OpenCensus code to forward telemetry to modern OpenTelemetry SDKs during migration.",
    referenceUrl: "https://opentelemetry.io/docs/migration/",
    tags: ["Vendor Neutrality", "OpenTracing Migration", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-308",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Vendor-Neutrality and Migration from OpenTracing/OpenCensus: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Vendor Neutrality to understand the origins of OpenTelemetry and migrate legacy systems using OpenTracing or OpenCensus APIs.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? OpenTelemetry history as the merger of OpenTracing and OpenCensus is under consideration.",
    options: [
      { id: 'A', text: "OpenTracing and OpenCensus are actively developed competing standards with OpenTelemetry." },
      { id: 'B', text: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly." },
      { id: 'C', text: "OpenTelemetry is a proprietary product owned by a single commercial cloud vendor." },
      { id: 'D', text: "Legacy OpenTracing instrumentation must be deleted entirely before adopting OpenTelemetry." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly. OpenTelemetry formed through the merger of OpenTracing (an API-only standard) and OpenCensus (an implementation-focused library). OpenTelemetry provides official bridge shims that allow legacy OpenTracing and OpenCensus code to forward telemetry to modern OpenTelemetry SDKs during migration.",
    referenceUrl: "https://opentelemetry.io/docs/migration/",
    tags: ["Vendor Neutrality", "OpenTracing Migration", "Security And Governance"]
  },
  {
    id: "cncf-otca-309",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Vendor-Neutrality and Migration from OpenTracing/OpenCensus: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Vendor Neutrality to understand the origins of OpenTelemetry and migrate legacy systems using OpenTracing or OpenCensus APIs.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? OpenTelemetry history as the merger of OpenTracing and OpenCensus is under consideration.",
    options: [
      { id: 'A', text: "Legacy OpenTracing instrumentation must be deleted entirely before adopting OpenTelemetry." },
      { id: 'B', text: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly." },
      { id: 'C', text: "OpenTelemetry is a proprietary product owned by a single commercial cloud vendor." },
      { id: 'D', text: "OpenTracing and OpenCensus are actively developed competing standards with OpenTelemetry." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly. OpenTelemetry formed through the merger of OpenTracing (an API-only standard) and OpenCensus (an implementation-focused library). OpenTelemetry provides official bridge shims that allow legacy OpenTracing and OpenCensus code to forward telemetry to modern OpenTelemetry SDKs during migration.",
    referenceUrl: "https://opentelemetry.io/docs/migration/",
    tags: ["Vendor Neutrality", "OpenTracing Migration", "Microservice Migration"]
  },
  {
    id: "cncf-otca-310",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d1",
    domainName: "OpenTelemetry Overview and Architecture",
    title: "Vendor-Neutrality and Migration from OpenTracing/OpenCensus: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Vendor Neutrality to understand the origins of OpenTelemetry and migrate legacy systems using OpenTracing or OpenCensus APIs.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? OpenTelemetry history as the merger of OpenTracing and OpenCensus is under consideration.",
    options: [
      { id: 'A', text: "OpenTracing and OpenCensus are actively developed competing standards with OpenTelemetry." },
      { id: 'B', text: "Legacy OpenTracing instrumentation must be deleted entirely before adopting OpenTelemetry." },
      { id: 'C', text: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly." },
      { id: 'D', text: "OpenTelemetry is a proprietary product owned by a single commercial cloud vendor." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OpenTelemetry is the official merger of OpenTracing and OpenCensus; use OpenTelemetry bridges to consume legacy instrumentation seamlessly. OpenTelemetry formed through the merger of OpenTracing (an API-only standard) and OpenCensus (an implementation-focused library). OpenTelemetry provides official bridge shims that allow legacy OpenTracing and OpenCensus code to forward telemetry to modern OpenTelemetry SDKs during migration.",
    referenceUrl: "https://opentelemetry.io/docs/migration/",
    tags: ["Vendor Neutrality", "OpenTracing Migration", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-311",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Architecture: Receivers, Processors, and Exporters: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Architecture to design an OpenTelemetry Collector pipeline that receives OTLP telemetry, enriches it with environment tags, and sends it to Prometheus and Jaeger.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Understanding the fundamental components and pipeline structure of the OTel Collector is under consideration.",
    options: [
      { id: 'A', text: "Pipelines can only have one receiver and one exporter." },
      { id: 'B', text: "Send all telemetry directly from applications to backends without a collector." },
      { id: 'C', text: "Write a custom C++ proxy that parses binary packets manually." },
      { id: 'D', text: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp). The OpenTelemetry Collector processes data in pipelines defined under `service.pipelines`. Each pipeline connects one or more `receivers` (data ingress), sequential `processors` (filtering, batching, transforming), and one or more `exporters` (data egress to backends).",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["Collector Architecture", "Collector Architecture", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-312",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Architecture: Receivers, Processors, and Exporters: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Architecture to design an OpenTelemetry Collector pipeline that receives OTLP telemetry, enriches it with environment tags, and sends it to Prometheus and Jaeger.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Understanding the fundamental components and pipeline structure of the OTel Collector is under consideration.",
    options: [
      { id: 'A', text: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp)." },
      { id: 'B', text: "Write a custom C++ proxy that parses binary packets manually." },
      { id: 'C', text: "Send all telemetry directly from applications to backends without a collector." },
      { id: 'D', text: "Pipelines can only have one receiver and one exporter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp). The OpenTelemetry Collector processes data in pipelines defined under `service.pipelines`. Each pipeline connects one or more `receivers` (data ingress), sequential `processors` (filtering, batching, transforming), and one or more `exporters` (data egress to backends).",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["Collector Architecture", "Collector Architecture", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-313",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Architecture: Receivers, Processors, and Exporters: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Architecture to design an OpenTelemetry Collector pipeline that receives OTLP telemetry, enriches it with environment tags, and sends it to Prometheus and Jaeger.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Understanding the fundamental components and pipeline structure of the OTel Collector is under consideration.",
    options: [
      { id: 'A', text: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp)." },
      { id: 'B', text: "Pipelines can only have one receiver and one exporter." },
      { id: 'C', text: "Send all telemetry directly from applications to backends without a collector." },
      { id: 'D', text: "Write a custom C++ proxy that parses binary packets manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp). The OpenTelemetry Collector processes data in pipelines defined under `service.pipelines`. Each pipeline connects one or more `receivers` (data ingress), sequential `processors` (filtering, batching, transforming), and one or more `exporters` (data egress to backends).",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["Collector Architecture", "Collector Architecture", "Security And Governance"]
  },
  {
    id: "cncf-otca-314",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Architecture: Receivers, Processors, and Exporters: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Architecture to design an OpenTelemetry Collector pipeline that receives OTLP telemetry, enriches it with environment tags, and sends it to Prometheus and Jaeger.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Understanding the fundamental components and pipeline structure of the OTel Collector is under consideration.",
    options: [
      { id: 'A', text: "Write a custom C++ proxy that parses binary packets manually." },
      { id: 'B', text: "Pipelines can only have one receiver and one exporter." },
      { id: 'C', text: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp)." },
      { id: 'D', text: "Send all telemetry directly from applications to backends without a collector." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp). The OpenTelemetry Collector processes data in pipelines defined under `service.pipelines`. Each pipeline connects one or more `receivers` (data ingress), sequential `processors` (filtering, batching, transforming), and one or more `exporters` (data egress to backends).",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["Collector Architecture", "Collector Architecture", "Microservice Migration"]
  },
  {
    id: "cncf-otca-315",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Collector Architecture: Receivers, Processors, and Exporters: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Architecture to design an OpenTelemetry Collector pipeline that receives OTLP telemetry, enriches it with environment tags, and sends it to Prometheus and Jaeger.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Understanding the fundamental components and pipeline structure of the OTel Collector is under consideration.",
    options: [
      { id: 'A', text: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp)." },
      { id: 'B', text: "Write a custom C++ proxy that parses binary packets manually." },
      { id: 'C', text: "Send all telemetry directly from applications to backends without a collector." },
      { id: 'D', text: "Pipelines can only have one receiver and one exporter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a pipeline in the Collector combining `receivers` (otlp), `processors` (batch, attributes), and `exporters` (prometheus, otlp). The OpenTelemetry Collector processes data in pipelines defined under `service.pipelines`. Each pipeline connects one or more `receivers` (data ingress), sequential `processors` (filtering, batching, transforming), and one or more `exporters` (data egress to backends).",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["Collector Architecture", "Collector Architecture", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-316",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Core vs Contrib Collector Distributions: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Collector Distributions to choose an OpenTelemetry Collector binary that includes specialized third-party processors, vendor receivers, and custom exporters.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Selecting between open-telemetry/opentelemetry-collector (Core) vs (Contrib) is under consideration.",
    options: [
      { id: 'A', text: "Deploy the `OpenTelemetry Collector Core` distribution, which contains only basic OTLP components." },
      { id: 'B', text: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components." },
      { id: 'C', text: "Compile custom plugins inside the Linux kernel." },
      { id: 'D', text: "Write all collector logic in JavaScript." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components. The OpenTelemetry project maintains two primary distributions: `Core` (contains only fundamental built-in components like OTLP receiver/exporter and batch processor) and `Contrib` (contains wide community contributions including cloud vendor receivers, Kafka, Prometheus, and security processors).",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Collector Distributions", "Collector Distributions", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-317",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Core vs Contrib Collector Distributions: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Collector Distributions to choose an OpenTelemetry Collector binary that includes specialized third-party processors, vendor receivers, and custom exporters.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Selecting between open-telemetry/opentelemetry-collector (Core) vs (Contrib) is under consideration.",
    options: [
      { id: 'A', text: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components." },
      { id: 'B', text: "Write all collector logic in JavaScript." },
      { id: 'C', text: "Deploy the `OpenTelemetry Collector Core` distribution, which contains only basic OTLP components." },
      { id: 'D', text: "Compile custom plugins inside the Linux kernel." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components. The OpenTelemetry project maintains two primary distributions: `Core` (contains only fundamental built-in components like OTLP receiver/exporter and batch processor) and `Contrib` (contains wide community contributions including cloud vendor receivers, Kafka, Prometheus, and security processors).",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Collector Distributions", "Collector Distributions", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-318",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Core vs Contrib Collector Distributions: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Collector Distributions to choose an OpenTelemetry Collector binary that includes specialized third-party processors, vendor receivers, and custom exporters.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Selecting between open-telemetry/opentelemetry-collector (Core) vs (Contrib) is under consideration.",
    options: [
      { id: 'A', text: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components." },
      { id: 'B', text: "Compile custom plugins inside the Linux kernel." },
      { id: 'C', text: "Write all collector logic in JavaScript." },
      { id: 'D', text: "Deploy the `OpenTelemetry Collector Core` distribution, which contains only basic OTLP components." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components. The OpenTelemetry project maintains two primary distributions: `Core` (contains only fundamental built-in components like OTLP receiver/exporter and batch processor) and `Contrib` (contains wide community contributions including cloud vendor receivers, Kafka, Prometheus, and security processors).",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Collector Distributions", "Collector Distributions", "Security And Governance"]
  },
  {
    id: "cncf-otca-319",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Core vs Contrib Collector Distributions: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Collector Distributions to choose an OpenTelemetry Collector binary that includes specialized third-party processors, vendor receivers, and custom exporters.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Selecting between open-telemetry/opentelemetry-collector (Core) vs (Contrib) is under consideration.",
    options: [
      { id: 'A', text: "Write all collector logic in JavaScript." },
      { id: 'B', text: "Deploy the `OpenTelemetry Collector Core` distribution, which contains only basic OTLP components." },
      { id: 'C', text: "Compile custom plugins inside the Linux kernel." },
      { id: 'D', text: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components. The OpenTelemetry project maintains two primary distributions: `Core` (contains only fundamental built-in components like OTLP receiver/exporter and batch processor) and `Contrib` (contains wide community contributions including cloud vendor receivers, Kafka, Prometheus, and security processors).",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Collector Distributions", "Collector Distributions", "Microservice Migration"]
  },
  {
    id: "cncf-otca-320",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Core vs Contrib Collector Distributions: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Collector Distributions to choose an OpenTelemetry Collector binary that includes specialized third-party processors, vendor receivers, and custom exporters.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Selecting between open-telemetry/opentelemetry-collector (Core) vs (Contrib) is under consideration.",
    options: [
      { id: 'A', text: "Write all collector logic in JavaScript." },
      { id: 'B', text: "Compile custom plugins inside the Linux kernel." },
      { id: 'C', text: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components." },
      { id: 'D', text: "Deploy the `OpenTelemetry Collector Core` distribution, which contains only basic OTLP components." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the `OpenTelemetry Collector Contrib` distribution, which includes extended and community-contributed components. The OpenTelemetry project maintains two primary distributions: `Core` (contains only fundamental built-in components like OTLP receiver/exporter and batch processor) and `Contrib` (contains wide community contributions including cloud vendor receivers, Kafka, Prometheus, and security processors).",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector-contrib",
    tags: ["Collector Distributions", "Collector Distributions", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-321",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Batch Processor Configuration and Performance Tuning: Enterprise Observability",
    scenario: "An enterprise observability architecture team is standardizing distributed telemetry collection, correlation, and sampling pipelines across multiple cloud environments. The observability engineer evaluates Batch Processor to optimize an OpenTelemetry Collector processing 50,000 spans per second to reduce network request counts and compress telemetry payloads.",
    question: "Which architectural approach or OpenTelemetry configuration satisfies these enterprise observability objectives? Optimizing network throughput and reducing memory pressure using the batch processor is under consideration.",
    options: [
      { id: 'A', text: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`." },
      { id: 'B', text: "Disable the batch processor and send every single span as an individual network packet immediately." },
      { id: 'C', text: "Buffer all spans in memory indefinitely without timeouts." },
      { id: 'D', text: "Drop 90% of telemetry to reduce load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`. The `batch` processor is a critical component for every collector pipeline. It buffers incoming spans, metrics, or logs until either `send_batch_size` is reached or `timeout` expires, dramatically reducing network HTTP/gRPC round-trips and enabling efficient compression.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md",
    tags: ["Batch Processor", "Batch Processor", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-322",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Batch Processor Configuration and Performance Tuning: High Throughput Scale",
    scenario: "A high-throughput cloud-native platform experiences spikes of billions of spans and metrics daily and requires low-latency telemetry processing and reliable backpressure management. The observability engineer evaluates Batch Processor to optimize an OpenTelemetry Collector processing 50,000 spans per second to reduce network request counts and compress telemetry payloads.",
    question: "Which OpenTelemetry component design or collector configuration handles this volume efficiently while protecting downstream storage backends? Optimizing network throughput and reducing memory pressure using the batch processor is under consideration.",
    options: [
      { id: 'A', text: "Buffer all spans in memory indefinitely without timeouts." },
      { id: 'B', text: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`." },
      { id: 'C', text: "Disable the batch processor and send every single span as an individual network packet immediately." },
      { id: 'D', text: "Drop 90% of telemetry to reduce load." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`. The `batch` processor is a critical component for every collector pipeline. It buffers incoming spans, metrics, or logs until either `send_batch_size` is reached or `timeout` expires, dramatically reducing network HTTP/gRPC round-trips and enabling efficient compression.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md",
    tags: ["Batch Processor", "Batch Processor", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-323",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Batch Processor Configuration and Performance Tuning: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic TLS authentication, PII data masking, and strict tenancy segregation across all telemetry pipelines. The observability engineer evaluates Batch Processor to optimize an OpenTelemetry Collector processing 50,000 spans per second to reduce network request counts and compress telemetry payloads.",
    question: "Which OpenTelemetry configuration or processor implementation satisfies these security and governance controls? Optimizing network throughput and reducing memory pressure using the batch processor is under consideration.",
    options: [
      { id: 'A', text: "Drop 90% of telemetry to reduce load." },
      { id: 'B', text: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`." },
      { id: 'C', text: "Disable the batch processor and send every single span as an individual network packet immediately." },
      { id: 'D', text: "Buffer all spans in memory indefinitely without timeouts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`. The `batch` processor is a critical component for every collector pipeline. It buffers incoming spans, metrics, or logs until either `send_batch_size` is reached or `timeout` expires, dramatically reducing network HTTP/gRPC round-trips and enabling efficient compression.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md",
    tags: ["Batch Processor", "Batch Processor", "Security And Governance"]
  },
  {
    id: "cncf-otca-324",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Batch Processor Configuration and Performance Tuning: Microservice Migration",
    scenario: "An engineering organization is migrating legacy monolithic instrumentation and vendor-locked agents to the vendor-agnostic OpenTelemetry ecosystem across polyglot microservices. The observability engineer evaluates Batch Processor to optimize an OpenTelemetry Collector processing 50,000 spans per second to reduce network request counts and compress telemetry payloads.",
    question: "Which pattern or OpenTelemetry feature enables the team to migrate telemetry collection with minimal service disruption? Optimizing network throughput and reducing memory pressure using the batch processor is under consideration.",
    options: [
      { id: 'A', text: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`." },
      { id: 'B', text: "Buffer all spans in memory indefinitely without timeouts." },
      { id: 'C', text: "Drop 90% of telemetry to reduce load." },
      { id: 'D', text: "Disable the batch processor and send every single span as an individual network packet immediately." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`. The `batch` processor is a critical component for every collector pipeline. It buffers incoming spans, metrics, or logs until either `send_batch_size` is reached or `timeout` expires, dramatically reducing network HTTP/gRPC round-trips and enabling efficient compression.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md",
    tags: ["Batch Processor", "Batch Processor", "Microservice Migration"]
  },
  {
    id: "cncf-otca-325",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d2",
    domainName: "OpenTelemetry Collector and Pipelines",
    title: "Batch Processor Configuration and Performance Tuning: Resilience And Reliability",
    scenario: "A site reliability engineering team is optimizing observability infrastructure to eliminate collector bottlenecks, prevent memory starvation, and provide continuous health monitoring. The observability engineer evaluates Batch Processor to optimize an OpenTelemetry Collector processing 50,000 spans per second to reduce network request counts and compress telemetry payloads.",
    question: "Which deployment strategy or configuration guarantees resilient telemetry pipeline operation? Optimizing network throughput and reducing memory pressure using the batch processor is under consideration.",
    options: [
      { id: 'A', text: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`." },
      { id: 'B', text: "Buffer all spans in memory indefinitely without timeouts." },
      { id: 'C', text: "Disable the batch processor and send every single span as an individual network packet immediately." },
      { id: 'D', text: "Drop 90% of telemetry to reduce load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `batch` processor to every pipeline, configuring `send_batch_size`, `timeout`, and `send_batch_max_size`. The `batch` processor is a critical component for every collector pipeline. It buffers incoming spans, metrics, or logs until either `send_batch_size` is reached or `timeout` expires, dramatically reducing network HTTP/gRPC round-trips and enabling efficient compression.",
    referenceUrl: "https://github.com/open-telemetry/opentelemetry-collector/blob/main/processor/batchprocessor/README.md",
    tags: ["Batch Processor", "Batch Processor", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_QUESTIONS_13;
