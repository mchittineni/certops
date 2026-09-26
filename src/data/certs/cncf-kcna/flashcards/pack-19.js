export const CNCF_KCNA_FLASHCARDS_19 = [
  {
    id: 'cncf-kcna-fc-451',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Monitoring vs observability: what is the difference?',
    hint: 'Known questions versus new ones.',
    back: '<strong>Monitoring</strong> watches predefined signals and alerts on known failure modes ("is CPU above 90%?"). <strong>Observability</strong> is a property of the system: how well you can understand its internal state from its outputs (metrics, logs, traces) and answer <em>new</em> questions during an incident without shipping new code. Monitoring is one practice built on top of an observable system.',
    tags: ['Observability', 'Concepts']
  },
  {
    id: 'cncf-kcna-fc-452',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are the four Prometheus metric types?',
    hint: 'Up only, up and down, buckets, client-side quantiles.',
    back: '<strong>Counter</strong>: only increases (resets on restart), such as requests served; query it with <code>rate()</code>. <strong>Gauge</strong>: goes up and down, such as memory in use or queue depth. <strong>Histogram</strong>: counts observations in configurable buckets, aggregatable across instances. <strong>Summary</strong>: computes quantiles inside the client, cheap to query but not aggregatable across instances.',
    tags: ['Prometheus', 'Metric types']
  },
  {
    id: 'cncf-kcna-fc-453',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'In Prometheus, what makes one time series different from another?',
    hint: 'Name plus every label pair.',
    back: 'A series is identified by its <strong>metric name plus its full set of label key-value pairs</strong>. <code>http_requests_total{method="GET",code="200"}</code> and the same metric with <code>code="500"</code> are two series. The number of series is the product of each label\'s distinct values, which is why unbounded labels (user IDs, request IDs, full URLs) cause cardinality explosions.',
    tags: ['Prometheus', 'Labels']
  },
  {
    id: 'cncf-kcna-fc-454',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'PromQL instant vector vs range vector: what is each, and which functions need which?',
    hint: 'Square brackets change the type.',
    back: 'An <strong>instant vector</strong> (<code>up</code>) holds one sample per series at the evaluation time and can be graphed or compared directly. A <strong>range vector</strong> (<code>http_requests_total[5m]</code>) holds all samples in a time window per series and cannot be graphed directly; functions such as <code>rate()</code>, <code>increase()</code> and <code>avg_over_time()</code> take a range vector and return an instant vector.',
    tags: ['PromQL']
  },
  {
    id: 'cncf-kcna-fc-455',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What does the for clause in a Prometheus alerting rule do?',
    hint: 'Pending before firing.',
    back: 'It requires the alert condition to stay true for the given duration before the alert fires. Until then the alert is <strong>pending</strong>; if the condition clears first, nothing is sent. <code>for: 10m</code> on a high error rate stops brief spikes from paging anyone while still catching sustained problems. Newer Prometheus versions also offer <code>keep_firing_for</code> to avoid flapping on recovery.',
    tags: ['Prometheus', 'Alerting']
  },
  {
    id: 'cncf-kcna-fc-456',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Alertmanager silence vs inhibition: when do you use each?',
    hint: 'One is manual and temporary, the other rule-based.',
    back: 'A <strong>silence</strong> is created by a person for a time window and mutes alerts matching its labels, for example during planned maintenance. An <strong>inhibition rule</strong> is configured permanently and mutes some alerts while another is firing, for example suppressing every service alert in a cluster while a ClusterDown alert is active, so responders see the cause rather than the symptoms.',
    tags: ['Alertmanager']
  },
  {
    id: 'cncf-kcna-fc-457',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Which signals does OpenTelemetry cover, and what is OTLP?',
    hint: 'Three core signals, one protocol.',
    back: 'OpenTelemetry defines APIs, SDKs and semantic conventions for <strong>traces, metrics and logs</strong> (with profiling being added). <strong>OTLP</strong>, the OpenTelemetry Protocol, is its vendor-neutral wire format over gRPC or HTTP, used between SDKs, Collectors and backends. OpenTelemetry does not store or visualise data; you pick backends such as Prometheus, Jaeger or a vendor.',
    tags: ['OpenTelemetry', 'OTLP']
  },
  {
    id: 'cncf-kcna-fc-458',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'OpenTelemetry Collector as an agent vs as a gateway: what does each deployment pattern do?',
    hint: 'Close to the app, or central.',
    back: 'An <strong>agent</strong> Collector runs close to the workload, typically as a <strong>DaemonSet</strong> per node or a sidecar, collecting local telemetry and adding host and Kubernetes metadata. A <strong>gateway</strong> Collector runs as a central, horizontally scaled <strong>Deployment</strong> that receives from agents and handles tail sampling, batching, credentials and export. Many clusters use both.',
    tags: ['OpenTelemetry', 'Collector']
  },
  {
    id: 'cncf-kcna-fc-459',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How can you add OpenTelemetry tracing to Java or Python services without code changes on Kubernetes?',
    hint: 'An operator and an annotation.',
    back: 'Install the <strong>OpenTelemetry Operator</strong> and create an <code>Instrumentation</code> resource that sets the exporter endpoint and propagators. Annotating a pod, for example <code>instrumentation.opentelemetry.io/inject-java: "true"</code>, makes the Operator\'s webhook inject the language\'s <strong>auto-instrumentation</strong> agent and environment variables at pod creation. Supported languages include Java, Python, Node.js, .NET and Go.',
    tags: ['OpenTelemetry', 'Auto-instrumentation']
  },
  {
    id: 'cncf-kcna-fc-460',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are the three common cluster logging architectures in Kubernetes?',
    hint: 'Per node, per pod, or straight from the app.',
    back: '1. <strong>Node-level agent</strong>: a DaemonSet (Fluent Bit, Fluentd, OTel Collector) tails container log files on each node, the most common and efficient choice. 2. <strong>Sidecar</strong>: a container in the pod streams a log file to stdout or ships it, for apps that cannot log to stdout. 3. <strong>Direct push</strong>: the app sends logs to a backend itself, which couples code to the backend.',
    tags: ['Logging', 'Architecture']
  },
  {
    id: 'cncf-kcna-fc-461',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Fluentd vs Fluent Bit: how do the two CNCF log processors differ?',
    hint: 'Same family, different weight class.',
    back: 'Both are graduated CNCF projects that collect, parse and route logs. <strong>Fluent Bit</strong> is written in C with a tiny memory footprint, ideal as the per-node DaemonSet agent. <strong>Fluentd</strong> is Ruby-based with a very large plugin ecosystem, often used as a central aggregator for heavier processing. A common pattern is Fluent Bit on nodes forwarding to Fluentd or directly to the backend.',
    tags: ['Fluentd', 'Fluent Bit']
  },
  {
    id: 'cncf-kcna-fc-462',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'node-exporter, cAdvisor and kube-state-metrics: what does each expose to Prometheus?',
    hint: 'Machine, containers, objects.',
    back: '<strong>node-exporter</strong> (a DaemonSet) exposes machine-level metrics: CPU, memory, disk and network of the node. <strong>cAdvisor</strong>, built into the kubelet, exposes per-container resource usage. <strong>kube-state-metrics</strong> exposes the state of Kubernetes objects from the API: desired vs available replicas, pod phases, restarts, job completions. Together they cover node, container and object views.',
    tags: ['Metrics', 'Exporters']
  },
  {
    id: 'cncf-kcna-fc-463',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'SLI vs SLO vs SLA: how do they relate?',
    hint: 'Measure, target, contract.',
    back: 'An <strong>SLI</strong> (indicator) is a measured ratio of good events, such as the share of requests served under 300 ms. An <strong>SLO</strong> (objective) is the internal target for it, such as 99.9% over 30 days. An <strong>SLA</strong> (agreement) is an external contract with consequences, such as service credits, and is normally set looser than the SLO so the team has warning before breaching it.',
    tags: ['SLO', 'Reliability']
  },
  {
    id: 'cncf-kcna-fc-464',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Why alert on error-budget burn rate instead of a raw error-rate threshold?',
    hint: 'How fast the budget is being spent.',
    back: 'Burn rate is how fast the error budget is being consumed relative to the SLO window: a burn rate of 1 uses exactly the budget by the window\'s end, 14.4 uses 2% of a 30-day budget in one hour. Alerting on <strong>fast burn over a short window</strong> pages quickly for serious outages, while <strong>slow burn over a long window</strong> raises a ticket for gradual degradation, with far fewer false pages than a fixed threshold.',
    tags: ['SLO', 'Alerting']
  },
  {
    id: 'cncf-kcna-fc-465',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What are the four golden signals from the Google SRE book?',
    hint: 'RED plus one.',
    back: '<strong>Latency</strong> (time to serve requests, separating successes from failures), <strong>traffic</strong> (demand, such as requests per second), <strong>errors</strong> (rate of failed requests) and <strong>saturation</strong> (how full the most constrained resource is). If you can monitor only four things about a user-facing system, monitor these.',
    tags: ['Golden signals', 'SRE']
  },
  {
    id: 'cncf-kcna-fc-466',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Trace, span, attributes and baggage: what does each term mean?',
    hint: 'Whole journey, one step, metadata, carried context.',
    back: 'A <strong>trace</strong> is the full path of one request, identified by a trace ID. A <strong>span</strong> is one timed operation within it, with a parent span, status and events. <strong>Attributes</strong> are key-value metadata on a span, such as <code>http.response.status_code</code>. <strong>Baggage</strong> is key-value context propagated to downstream services alongside the trace context, for example a tenant ID.',
    tags: ['Tracing', 'OpenTelemetry']
  },
  {
    id: 'cncf-kcna-fc-467',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How does Prometheus find its targets in Kubernetes?',
    hint: 'It asks the API server.',
    back: 'Through <strong>kubernetes_sd_configs</strong>: Prometheus watches the API for nodes, Services, pods, endpoints or Ingresses and turns them into targets, and <strong>relabeling</strong> filters and labels them (by namespace, annotation or port name). The Prometheus Operator generates this from ServiceMonitor and PodMonitor resources. The <code>prometheus.io/scrape</code> annotation is only a convention that relabel rules may honour.',
    tags: ['Prometheus', 'Service discovery']
  },
  {
    id: 'cncf-kcna-fc-468',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How do you make Prometheus alerting highly available?',
    hint: 'Duplicate, then deduplicate.',
    back: 'Run <strong>two identical Prometheus replicas</strong> scraping the same targets and evaluating the same rules, so either can fail. Both send alerts to an <strong>Alertmanager cluster</strong> (usually three instances gossiping with each other), which deduplicates identical alerts so each notification is sent once. For a merged query view over the replicas, add Thanos Query or a similar layer.',
    tags: ['Prometheus', 'High availability']
  },
  {
    id: 'cncf-kcna-fc-469',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Showback vs chargeback in Kubernetes cost management: what is the difference?',
    hint: 'Report versus invoice.',
    back: '<strong>Showback</strong> reports each team\'s share of cluster cost (from requests, usage and prices, for example via OpenCost) to create awareness, with no money moving. <strong>Chargeback</strong> actually bills that amount to each team\'s budget. Both need consistent labels or namespaces per team, and a policy for shared costs such as control plane, idle capacity and system add-ons.',
    tags: ['Cost management', 'FinOps']
  },
  {
    id: 'cncf-kcna-fc-470',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Why do resource requests, not actual usage, usually drive Kubernetes costs?',
    hint: 'The scheduler reserves what you ask for.',
    back: 'The scheduler reserves a node\'s capacity according to pod <strong>requests</strong>, so requested-but-unused CPU and memory still occupy nodes that must be paid for. Over-requesting forces more nodes; under-requesting risks throttling, OOM kills and eviction. Rightsizing requests from observed usage (for example with VPA recommendations), then letting the Cluster Autoscaler remove empty nodes, is the main cost lever.',
    tags: ['Cost management', 'Requests']
  },
  {
    id: 'cncf-kcna-fc-471',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is eBPF, and why is it popular for cloud native observability?',
    hint: 'Programs running safely inside the kernel.',
    back: '<strong>eBPF</strong> lets verified, sandboxed programs run in the Linux kernel on events such as system calls or network packets. Observability tools use it to capture network flows, latency and system activity <strong>without changing application code or adding sidecars</strong>, with low overhead. Examples include Cilium\'s <strong>Hubble</strong> for network visibility, Pixie, and security tools such as Falco and Tetragon.',
    tags: ['eBPF', 'Observability']
  },
  {
    id: 'cncf-kcna-fc-472',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'How do you correlate a log line, a metric spike and a trace for the same request?',
    hint: 'Shared identifiers across signals.',
    back: 'Put the <strong>trace ID and span ID in every log record</strong> (OpenTelemetry log bridges and many logging libraries do this automatically), record <strong>exemplars</strong> with trace IDs on latency histograms, and use consistent <strong>resource attributes</strong> such as <code>service.name</code> and <code>k8s.pod.name</code> on all three signals. Tools such as Grafana can then jump from a metric to a trace to its logs.',
    tags: ['Correlation', 'OpenTelemetry']
  },
  {
    id: 'cncf-kcna-fc-473',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is Prometheus\'s default storage model, and what are its limits?',
    hint: 'Local, single node, weeks not years.',
    back: 'Prometheus stores samples in a local <strong>time series database</strong> on disk, with a default retention of <strong>15 days</strong>. It is a single-node store without built-in replication or clustering, so for long retention, a global view across clusters or durability, you add remote storage such as <strong>Thanos</strong>, <strong>Cortex</strong> or Grafana Mimir via <code>remote_write</code> or a sidecar.',
    tags: ['Prometheus', 'Storage']
  },
  {
    id: 'cncf-kcna-fc-474',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'What is a PodMonitor, and when would you use it instead of a ServiceMonitor?',
    hint: 'Not every workload has a Service.',
    back: 'Both are Prometheus Operator custom resources that declare scrape targets. A <strong>ServiceMonitor</strong> selects <strong>Services</strong> and scrapes their endpoints. A <strong>PodMonitor</strong> selects <strong>pods directly</strong> by label and port name, for workloads that have no Service, such as batch workers, DaemonSet agents that are never called over the network, or sidecars exposing metrics on a port the Service does not publish.',
    tags: ['Prometheus Operator', 'PodMonitor']
  },
  {
    id: 'cncf-kcna-fc-475',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd4',
    front: 'Grafana Loki, Tempo and Mimir: which signal does each store?',
    hint: 'Logs, traces, metrics.',
    back: '<strong>Loki</strong> stores logs, indexing only labels and queried with LogQL. <strong>Tempo</strong> stores traces in object storage and is looked up by trace ID or TraceQL. <strong>Mimir</strong> is horizontally scalable long-term storage for Prometheus metrics, queried with PromQL. All three are open source Grafana Labs projects commonly paired with Grafana dashboards.',
    tags: ['Loki', 'Tempo', 'Mimir']
  }
];

export default CNCF_KCNA_FLASHCARDS_19;
