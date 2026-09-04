export const CNCF_OTCA_FLASHCARDS_17 = [
  {
    id: "cncf-otca-fc-401",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Recording Exceptions and Setting Error Span Status (Enterprise Observability)",
    hint: "Attaching exception events and setting StatusCode.ERROR on failed spans.",
    back: "To mark a trace span as failed, engineers must call <strong>recordException()</strong> to log the stack trace and explicitly call <strong>setStatus(StatusCode.ERROR)</strong> to flag the failure in backends.",
    tags: ["Span Status", "Span Status & Errors", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-402",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Recording Exceptions and Setting Error Span Status (High Throughput Scale)",
    hint: "Attaching exception events and setting StatusCode.ERROR on failed spans.",
    back: "To mark a trace span as failed, engineers must call <strong>recordException()</strong> to log the stack trace and explicitly call <strong>setStatus(StatusCode.ERROR)</strong> to flag the failure in backends.",
    tags: ["Span Status", "Span Status & Errors", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-403",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Recording Exceptions and Setting Error Span Status (Security And Governance)",
    hint: "Attaching exception events and setting StatusCode.ERROR on failed spans.",
    back: "To mark a trace span as failed, engineers must call <strong>recordException()</strong> to log the stack trace and explicitly call <strong>setStatus(StatusCode.ERROR)</strong> to flag the failure in backends.",
    tags: ["Span Status", "Span Status & Errors", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-404",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Recording Exceptions and Setting Error Span Status (Microservice Migration)",
    hint: "Attaching exception events and setting StatusCode.ERROR on failed spans.",
    back: "To mark a trace span as failed, engineers must call <strong>recordException()</strong> to log the stack trace and explicitly call <strong>setStatus(StatusCode.ERROR)</strong> to flag the failure in backends.",
    tags: ["Span Status", "Span Status & Errors", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-405",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Recording Exceptions and Setting Error Span Status (Resilience And Reliability)",
    hint: "Attaching exception events and setting StatusCode.ERROR on failed spans.",
    back: "To mark a trace span as failed, engineers must call <strong>recordException()</strong> to log the stack trace and explicitly call <strong>setStatus(StatusCode.ERROR)</strong> to flag the failure in backends.",
    tags: ["Span Status", "Span Status & Errors", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-406",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Modeling Asynchronous Workflows with Span Links (Enterprise Observability)",
    hint: "Connecting related spans across batch processing and messaging queues.",
    back: "<strong>Span Links</strong> causally connect spans from different traces without forcing parent-child hierarchies, making them ideal for asynchronous message queues and batch processing jobs.",
    tags: ["Span Links", "Span Links", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-407",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Modeling Asynchronous Workflows with Span Links (High Throughput Scale)",
    hint: "Connecting related spans across batch processing and messaging queues.",
    back: "<strong>Span Links</strong> causally connect spans from different traces without forcing parent-child hierarchies, making them ideal for asynchronous message queues and batch processing jobs.",
    tags: ["Span Links", "Span Links", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-408",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Modeling Asynchronous Workflows with Span Links (Security And Governance)",
    hint: "Connecting related spans across batch processing and messaging queues.",
    back: "<strong>Span Links</strong> causally connect spans from different traces without forcing parent-child hierarchies, making them ideal for asynchronous message queues and batch processing jobs.",
    tags: ["Span Links", "Span Links", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-409",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Modeling Asynchronous Workflows with Span Links (Microservice Migration)",
    hint: "Connecting related spans across batch processing and messaging queues.",
    back: "<strong>Span Links</strong> causally connect spans from different traces without forcing parent-child hierarchies, making them ideal for asynchronous message queues and batch processing jobs.",
    tags: ["Span Links", "Span Links", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-410",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Modeling Asynchronous Workflows with Span Links (Resilience And Reliability)",
    hint: "Connecting related spans across batch processing and messaging queues.",
    back: "<strong>Span Links</strong> causally connect spans from different traces without forcing parent-child hierarchies, making them ideal for asynchronous message queues and batch processing jobs.",
    tags: ["Span Links", "Span Links", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-411",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Counters vs Histograms in Application Instrumentation (Enterprise Observability)",
    hint: "Measuring transaction counts with Counters and latency distributions with Histograms.",
    back: "Use <strong>Counters</strong> to track monotonic event volume (total payments) and <strong>Histograms</strong> to capture statistical distributions (request latency, payload bytes) for percentile analysis.",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-412",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Counters vs Histograms in Application Instrumentation (High Throughput Scale)",
    hint: "Measuring transaction counts with Counters and latency distributions with Histograms.",
    back: "Use <strong>Counters</strong> to track monotonic event volume (total payments) and <strong>Histograms</strong> to capture statistical distributions (request latency, payload bytes) for percentile analysis.",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-413",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Counters vs Histograms in Application Instrumentation (Security And Governance)",
    hint: "Measuring transaction counts with Counters and latency distributions with Histograms.",
    back: "Use <strong>Counters</strong> to track monotonic event volume (total payments) and <strong>Histograms</strong> to capture statistical distributions (request latency, payload bytes) for percentile analysis.",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-414",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Counters vs Histograms in Application Instrumentation (Microservice Migration)",
    hint: "Measuring transaction counts with Counters and latency distributions with Histograms.",
    back: "Use <strong>Counters</strong> to track monotonic event volume (total payments) and <strong>Histograms</strong> to capture statistical distributions (request latency, payload bytes) for percentile analysis.",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-415",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Counters vs Histograms in Application Instrumentation (Resilience And Reliability)",
    hint: "Measuring transaction counts with Counters and latency distributions with Histograms.",
    back: "Use <strong>Counters</strong> to track monotonic event volume (total payments) and <strong>Histograms</strong> to capture statistical distributions (request latency, payload bytes) for percentile analysis.",
    tags: ["Metrics Instrumentation", "Counter vs Histogram", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-416",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Asynchronous (Observable) Metric Instruments (Enterprise Observability)",
    hint: "Reporting state metrics via non-blocking on-demand scrape callbacks.",
    back: "<strong>Observable instruments (Asynchronous Gauges/Counters)</strong> invoke registered callbacks to report current system state (memory, active connections) on-demand during metric collection passes.",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-417",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Asynchronous (Observable) Metric Instruments (High Throughput Scale)",
    hint: "Reporting state metrics via non-blocking on-demand scrape callbacks.",
    back: "<strong>Observable instruments (Asynchronous Gauges/Counters)</strong> invoke registered callbacks to report current system state (memory, active connections) on-demand during metric collection passes.",
    tags: ["Asynchronous Metrics", "Observable Instruments", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-418",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Asynchronous (Observable) Metric Instruments (Security And Governance)",
    hint: "Reporting state metrics via non-blocking on-demand scrape callbacks.",
    back: "<strong>Observable instruments (Asynchronous Gauges/Counters)</strong> invoke registered callbacks to report current system state (memory, active connections) on-demand during metric collection passes.",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-419",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Asynchronous (Observable) Metric Instruments (Microservice Migration)",
    hint: "Reporting state metrics via non-blocking on-demand scrape callbacks.",
    back: "<strong>Observable instruments (Asynchronous Gauges/Counters)</strong> invoke registered callbacks to report current system state (memory, active connections) on-demand during metric collection passes.",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-420",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Asynchronous (Observable) Metric Instruments (Resilience And Reliability)",
    hint: "Reporting state metrics via non-blocking on-demand scrape callbacks.",
    back: "<strong>Observable instruments (Asynchronous Gauges/Counters)</strong> invoke registered callbacks to report current system state (memory, active connections) on-demand during metric collection passes.",
    tags: ["Asynchronous Metrics", "Observable Instruments", "Resilience And Reliability"]
  },
  {
    id: "cncf-otca-fc-421",
    difficulty: "hard",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Exemplars Linking Metrics to Traces (Enterprise Observability)",
    hint: "Attaching TraceIDs to histogram samples for instant drill-down from metrics to traces.",
    back: "<strong>Exemplars</strong> attach active TraceIDs to metric observations, allowing operators to jump directly from high-latency histogram buckets in Grafana to the exact offending distributed trace.",
    tags: ["Metric Exemplars", "Metric Exemplars", "Enterprise Observability"]
  },
  {
    id: "cncf-otca-fc-422",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Exemplars Linking Metrics to Traces (High Throughput Scale)",
    hint: "Attaching TraceIDs to histogram samples for instant drill-down from metrics to traces.",
    back: "<strong>Exemplars</strong> attach active TraceIDs to metric observations, allowing operators to jump directly from high-latency histogram buckets in Grafana to the exact offending distributed trace.",
    tags: ["Metric Exemplars", "Metric Exemplars", "High Throughput Scale"]
  },
  {
    id: "cncf-otca-fc-423",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Exemplars Linking Metrics to Traces (Security And Governance)",
    hint: "Attaching TraceIDs to histogram samples for instant drill-down from metrics to traces.",
    back: "<strong>Exemplars</strong> attach active TraceIDs to metric observations, allowing operators to jump directly from high-latency histogram buckets in Grafana to the exact offending distributed trace.",
    tags: ["Metric Exemplars", "Metric Exemplars", "Security And Governance"]
  },
  {
    id: "cncf-otca-fc-424",
    difficulty: "easy",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Exemplars Linking Metrics to Traces (Microservice Migration)",
    hint: "Attaching TraceIDs to histogram samples for instant drill-down from metrics to traces.",
    back: "<strong>Exemplars</strong> attach active TraceIDs to metric observations, allowing operators to jump directly from high-latency histogram buckets in Grafana to the exact offending distributed trace.",
    tags: ["Metric Exemplars", "Metric Exemplars", "Microservice Migration"]
  },
  {
    id: "cncf-otca-fc-425",
    difficulty: "medium",
    certId: "cncf-otca",
    domainId: "d3",
    front: "Metric Exemplars Linking Metrics to Traces (Resilience And Reliability)",
    hint: "Attaching TraceIDs to histogram samples for instant drill-down from metrics to traces.",
    back: "<strong>Exemplars</strong> attach active TraceIDs to metric observations, allowing operators to jump directly from high-latency histogram buckets in Grafana to the exact offending distributed trace.",
    tags: ["Metric Exemplars", "Metric Exemplars", "Resilience And Reliability"]
  }
];

export default CNCF_OTCA_FLASHCARDS_17;
