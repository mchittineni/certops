export const CNCF_KCNA_QUESTIONS_19 = [
  {
    id: "cncf-kcna-451",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Following one slow checkout request",
    scenario: "A retailer's checkout request passes through a gateway, a cart service, a pricing service and a payment service. Dashboards show the overall p99 latency has doubled, but nobody can tell which hop adds the delay for an individual slow request.",
    question: "Which telemetry signal answers that question most directly?",
    options: [
      { id: 'A', text: "Distributed traces, which record each hop of a request as timed spans in one trace" },
      { id: 'B', text: "Container logs, which record each service's own messages on its own node's disk" },
      { id: 'C', text: "Aggregated metrics, which record request counts and latency buckets per service" },
      { id: 'D', text: "Kubernetes events, which record scheduling and probe activity for each pod" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A distributed trace follows a single request across services, with one span per operation carrying start time and duration, so the slow hop in an individual request is visible immediately. Metrics are aggregated, so they show that latency rose and where on average, but not the path of one request. Logs from each service are separate streams that must be correlated by hand, usually by a shared ID. Kubernetes events describe cluster activity such as scheduling, not application request timing.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/signals/traces/",
    tags: ["Tracing", "Observability", "Signals"]
  },
  {
    id: "cncf-kcna-452",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "How Prometheus gets its numbers",
    scenario: "A developer adding monitoring to a new Go service asks whether the service needs to send its metrics to the Prometheus server, and if so, how often. The team runs a standard Prometheus installation in the cluster.",
    question: "How does Prometheus normally collect metrics from the service?",
    options: [
      { id: 'A', text: "The service pushes batches of metrics to the Prometheus remote-write endpoint each minute" },
      { id: 'B', text: "The kubelet reads the service's log lines and converts them into metric series for Prometheus" },
      { id: 'C', text: "Prometheus periodically scrapes an HTTP endpoint, typically /metrics, that the service exposes" },
      { id: 'D', text: "Prometheus subscribes to a message queue that the service publishes its metric events onto" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Prometheus uses a pull model: it discovers targets, for example through Kubernetes service discovery, and scrapes each one's metrics endpoint over HTTP at a configured interval, storing the samples in its time series database. Remote write is how Prometheus forwards data to long-term storage, not how applications report. The kubelet does not turn application logs into metrics. Prometheus has no built-in message-queue ingestion; short-lived jobs use the Pushgateway instead.",
    referenceUrl: "https://prometheus.io/docs/introduction/overview/",
    tags: ["Prometheus", "Metrics", "Pull model"]
  },
  {
    id: "cncf-kcna-453",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Graphing requests per second",
    scenario: "A service exposes http_requests_total, a counter that only goes up and resets to zero when the process restarts. A dashboard panel plotting the raw value shows an ever-rising line that is useless for spotting traffic spikes. The team wants requests per second over the last five minutes.",
    question: "Which PromQL expression should the panel use?",
    options: [
      { id: 'A', text: "avg_over_time(http_requests_total[5m])" },
      { id: 'B', text: "delta(http_requests_total[5m]) / 60" },
      { id: 'C', text: "max(http_requests_total) by (instance)" },
      { id: 'D', text: "rate(http_requests_total[5m])" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "rate computes the per-second average increase of a counter over the range and automatically handles counter resets after restarts, which is exactly requests per second. Averaging a counter's raw values still produces an ever-rising line. max by instance returns the largest cumulative total, not a rate. delta is meant for gauges, does not handle counter resets, and dividing a five-minute change by 60 gives the wrong unit.",
    referenceUrl: "https://prometheus.io/docs/prometheus/latest/querying/functions/#rate",
    tags: ["Prometheus", "PromQL", "Counters"]
  },
  {
    id: "cncf-kcna-454",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "A latency percentile across replicas",
    scenario: "An API runs 30 replicas behind a Service, and the SLO is written as 99% of requests completing within 300 ms. The team needs a p99 latency figure aggregated across all replicas in Prometheus, and it must stay correct as replicas are added or removed.",
    question: "How should the service expose its request latency?",
    options: [
      { id: 'A', text: "As a summary with a 0.99 quantile per replica, aggregated by averaging them in a query" },
      { id: 'B', text: "As a gauge holding the latest request's duration, with max_over_time across the replicas" },
      { id: 'C', text: "As a counter of total seconds spent, divided by a counter of requests to give the p99" },
      { id: 'D', text: "As a histogram, aggregated across replicas with histogram_quantile over summed bucket rates" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Histogram buckets are counters that can be summed across any number of replicas, and histogram_quantile over the summed bucket rates estimates the fleet-wide p99, which stays valid as replicas change. Summary quantiles are computed inside each process and cannot be meaningfully averaged, so a mean of per-replica p99 values is not the fleet p99. A gauge of the latest duration samples one request at a time and misses almost all of them. Total seconds divided by request count gives the mean latency, not a percentile.",
    referenceUrl: "https://prometheus.io/docs/practices/histograms/",
    tags: ["Prometheus", "Histograms", "Latency"]
  },
  {
    id: "cncf-kcna-455",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Two hundred pages for one outage",
    scenario: "When a database node failed last week, Prometheus fired the same alert for 200 dependent pods, and the on-call engineer received 200 separate pages within a minute. The team wants related alerts combined into one notification and routed to the database team's channel.",
    question: "Which component should they configure?",
    options: [
      { id: 'A', text: "Alertmanager, using grouping and routing rules for the related alerts" },
      { id: 'B', text: "kube-state-metrics, so pod-level alerts are replaced with node-level ones" },
      { id: 'C', text: "The Pushgateway, so alerts are batched before they are sent to Prometheus" },
      { id: 'D', text: "Grafana, by building a dashboard panel that lists related firing alerts together" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prometheus evaluates alert rules and sends firing alerts to Alertmanager, which deduplicates them, groups related alerts (for example by alertname and cluster) into a single notification, routes them to receivers such as a team channel, and supports silences and inhibition. A Grafana panel displays alerts but does not change how pages are sent. The Pushgateway accepts metrics from batch jobs and has nothing to do with alert delivery. kube-state-metrics exposes object state as metrics; it does not group notifications.",
    referenceUrl: "https://prometheus.io/docs/alerting/latest/alertmanager/",
    tags: ["Alertmanager", "Alerting", "Prometheus"]
  },
  {
    id: "cncf-kcna-456",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Metrics from a job that lives 20 seconds",
    scenario: "A nightly CronJob runs a database cleanup that finishes in about 20 seconds, and the team wants Prometheus to record how many rows it deleted and when it last succeeded. Prometheus scrapes targets every 60 seconds, so the pod is usually gone before any scrape.",
    question: "What is the recommended way to capture these metrics?",
    options: [
      { id: 'A', text: "Lower the global scrape interval to 5 seconds so Prometheus scrapes the short-lived pod" },
      { id: 'B', text: "Write the counts to the job's logs and have Alertmanager parse them into time series" },
      { id: 'C', text: "Have the job push its metrics to a Prometheus Pushgateway that Prometheus then scrapes" },
      { id: 'D', text: "Add a sleep of 90 seconds at the end of the job so that at least one scrape can happen" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Pushgateway exists for service-level batch jobs: the job pushes its final metrics before exiting, the Pushgateway holds them, and Prometheus scrapes the Pushgateway on its normal schedule. A 5-second global interval multiplies load on every target and still races the pod's lifetime. Sleeping at the end is fragile and still depends on scrape timing and target discovery. Alertmanager handles alert notifications and does not parse logs into metrics.",
    referenceUrl: "https://prometheus.io/docs/practices/pushing/",
    tags: ["Prometheus", "Pushgateway", "Batch jobs"]
  },
  {
    id: "cncf-kcna-457",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Instrument once, choose backends later",
    scenario: "A company is instrumenting 40 microservices written in Java, Go and Python. It has not decided which observability vendor to use and may switch backends in the future, so it does not want vendor-specific agents or libraries in the code.",
    question: "Which CNCF project should the teams instrument with?",
    options: [
      { id: 'A', text: "OpenTelemetry, which provides vendor-neutral APIs and SDKs for traces, metrics and logs" },
      { id: 'B', text: "Jaeger, whose client libraries are the current standard way to emit traces and metrics" },
      { id: 'C', text: "Fluentd, which collects and forwards logs and also generates metrics and traces from them" },
      { id: 'D', text: "Grafana, which provides instrumentation SDKs that send data to its dashboards directly" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OpenTelemetry defines vendor-neutral APIs, SDKs and the OTLP protocol for traces, metrics and logs across many languages, and its Collector exports to whichever backend is chosen, so switching vendors does not require re-instrumenting code. Jaeger is a tracing backend, and its own client libraries were retired in favour of OpenTelemetry. Fluentd is a log collector and router rather than an instrumentation standard. Grafana is a visualisation tool, not an instrumentation standard.",
    referenceUrl: "https://opentelemetry.io/docs/what-is-opentelemetry/",
    tags: ["OpenTelemetry", "Instrumentation", "Vendor neutral"]
  },
  {
    id: "cncf-kcna-458",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Scrubbing data before it leaves",
    scenario: "Services send OTLP traces to an OpenTelemetry Collector, which forwards them to a SaaS backend. Security requires that the http.request.header.authorization attribute be removed from every span before data leaves the cluster, without changing any service code.",
    question: "Where in the Collector configuration should this be done?",
    options: [
      { id: 'A', text: "In an extension, such as health_check, which inspects all telemetry passing through" },
      { id: 'B', text: "In a processor, such as the attributes processor, placed in the traces pipeline" },
      { id: 'C', text: "In a receiver, since receivers are where the Collector modifies incoming span attributes" },
      { id: 'D', text: "In an exporter, since exporters decide which attributes the backend is allowed to see" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Collector pipeline runs receivers, then processors, then exporters. Processors transform data in flight, and the attributes processor (or the transform processor) can delete a named attribute from every span before any exporter sends it. Receivers accept data in a protocol such as OTLP and are not where filtering is configured. Exporters send data in the backend's format rather than scrubbing it. Extensions such as health_check add Collector capabilities and do not touch telemetry.",
    referenceUrl: "https://opentelemetry.io/docs/collector/configuration/",
    tags: ["OpenTelemetry", "Collector", "Processors"]
  },
  {
    id: "cncf-kcna-459",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Traces that stop at the second service",
    scenario: "Both the frontend and the orders service are instrumented with OpenTelemetry and export spans to the same Jaeger backend. Each request, however, shows up as two separate traces, one per service, instead of one trace spanning both. The frontend calls orders over HTTP with a hand-written client.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "Jaeger keeps traces per service, so it never joins frontend client spans with orders spans" },
      { id: 'B', text: "The frontend's HTTP client is not injecting trace context, such as traceparent, into calls" },
      { id: 'C', text: "The frontend and orders services use different sampling rates for their calls" },
      { id: 'D', text: "The orders service runs in another namespace, and traces cannot cross namespace borders" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A trace continues across a network call only if the caller propagates its context, typically the W3C traceparent header carrying the trace ID and parent span ID, and the callee extracts it; a hand-written client without propagation makes the orders service start a new trace. Differing sampling rates can drop spans, but would not split a request into two complete traces. Namespaces do not affect trace context. Jaeger joins spans from any number of services that share a trace ID.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/context-propagation/",
    tags: ["Tracing", "Context propagation", "OpenTelemetry"]
  },
  {
    id: "cncf-kcna-460",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "One screen for metrics, logs and traces",
    scenario: "An operations team stores metrics in Prometheus, logs in Loki and traces in Jaeger. During incidents they switch between three UIs and want a single tool to build dashboards and explore all three data sources side by side.",
    question: "Which tool is designed for this?",
    options: [
      { id: 'A', text: "kube-state-metrics, which exposes all three signals as one endpoint" },
      { id: 'B', text: "Alertmanager, which merges alerts from all data sources into one view" },
      { id: 'C', text: "The OpenTelemetry Collector, which renders dashboards for each signal" },
      { id: 'D', text: "Grafana, which queries many data sources in shared dashboards" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Grafana is a visualisation and exploration tool with data source plugins for Prometheus, Loki, Jaeger and many others, so one dashboard can combine metrics, logs and traces and link between them. Alertmanager handles alert notifications, not exploration. The Collector receives, processes and exports telemetry but has no dashboard UI. kube-state-metrics exposes Kubernetes object state as Prometheus metrics only.",
    referenceUrl: "https://grafana.com/docs/grafana/latest/fundamentals/",
    tags: ["Grafana", "Dashboards", "Visualization"]
  },
  {
    id: "cncf-kcna-461",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Dashboards gone quiet without an alert",
    scenario: "A service's Grafana panels went flat for six hours after a network policy change blocked Prometheus from reaching the pods' metrics port. No alert fired, because the error-rate alert only evaluates series that exist. The team wants to be paged whenever Prometheus fails to scrape any of its targets.",
    question: "Which alert condition should they add?",
    options: [
      { id: 'A', text: "rate(http_requests_total[5m]) == 0, true once the series shows that requests have stopped" },
      { id: 'B', text: "up == 0, using the series Prometheus records itself for every scrape target it attempts" },
      { id: 'C', text: "absent(http_requests_total) for each service, created by hand whenever a service is added" },
      { id: 'D', text: "kube_pod_status_ready == 0 from kube-state-metrics, for pods whose scrape endpoint fails" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For every target it tries to scrape, Prometheus writes a synthetic up series: 1 for a successful scrape and 0 for a failure, so up == 0 catches blocked ports, crashed exporters and bad TLS for all targets with one rule. absent() rules also catch missing data but must be maintained per metric and service. A zero request rate cannot be evaluated when the series is not being scraped at all, and it would also fire for genuinely idle services. Pod readiness stays true when only the metrics port is blocked by a network policy.",
    referenceUrl: "https://prometheus.io/docs/concepts/jobs_instances/#automatically-generated-labels-and-time-series",
    tags: ["Prometheus", "Alerting", "Scraping"]
  },
  {
    id: "cncf-kcna-462",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Cheaper log storage at scale",
    scenario: "A company ingests 3 TB of container logs per day into a full-text search cluster, and index storage is its largest observability cost. Engineers almost always filter by namespace, app and pod first and then search the text of a narrow time range.",
    question: "Which logging design best fits this usage pattern?",
    options: [
      { id: 'A', text: "Grafana Loki, which indexes only labels like namespace and app and stores the log text as compressed chunks" },
      { id: 'B', text: "Prometheus, which stores each log line's text as a separate time series labelled by namespace" },
      { id: 'C', text: "Jaeger, which stores each log line as a span so that it can be searched by the trace it belongs to" },
      { id: 'D', text: "etcd, which stores logs as key-value pairs so that the API server can serve them to kubectl" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Loki indexes only a small set of labels and keeps the log content in compressed chunks in object storage, so filtering by namespace and app is fast while index costs stay far below full-text indexing; text search then scans only the selected streams and time range. Prometheus stores numeric samples, and one series per log line would explode its cardinality. Jaeger stores traces, not general log streams. etcd holds cluster state and must never store bulk logs.",
    referenceUrl: "https://grafana.com/docs/loki/latest/get-started/overview/",
    tags: ["Loki", "Logging", "Cost"]
  },
  {
    id: "cncf-kcna-463",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Prometheus runs out of memory",
    scenario: "A week after a release, the cluster's Prometheus server started using several times more memory and was OOM-killed twice. The release added a user_id label to the http_requests_total metric so product managers could see requests per user; the platform has about two million users.",
    question: "What is the root cause, and what is the right change?",
    options: [
      { id: 'A', text: "The scrape interval is too short for the new metric; raise it to five minutes for that service" },
      { id: 'B', text: "The user_id label created millions of series; remove it and track per-user data elsewhere" },
      { id: 'C', text: "Prometheus retention is too long for the new label; cut it from 15 days to 2 days" },
      { id: 'D', text: "The counter type is wrong for data labelled per user; convert the metric to a gauge" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Every unique combination of label values is a separate time series, so an unbounded label such as user_id multiplies series by up to two million, and Prometheus holds active series in memory. The fix is to drop the label and answer per-user questions with logs, traces or an analytics store. A longer scrape interval reduces samples, not the number of series. Changing the metric type leaves the cardinality unchanged. Retention affects stored data on disk, while the memory problem comes from active series.",
    referenceUrl: "https://prometheus.io/docs/practices/naming/#labels",
    tags: ["Prometheus", "Cardinality", "Labels"]
  },
  {
    id: "cncf-kcna-464",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Scraping a new service with the Operator",
    scenario: "A cluster runs Prometheus managed by the Prometheus Operator. A team has deployed a new service whose pods expose metrics on a port named http-metrics, fronted by a Service labelled app: billing, and they want it scraped without editing the Prometheus configuration file.",
    question: "What should the team create?",
    options: [
      { id: 'A', text: "A ServiceMonitor selecting app: billing with the http-metrics endpoint" },
      { id: 'B', text: "An Alertmanager route that forwards the billing Service's metrics" },
      { id: 'C', text: "A ConfigMap with a scrape_configs entry, mounted into the Prometheus pod" },
      { id: 'D', text: "A PrometheusRule selecting app: billing with the http-metrics port" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With the Prometheus Operator, scrape targets are declared with custom resources: a ServiceMonitor selects Services by label and names the endpoint port, and the Operator regenerates the Prometheus configuration automatically. Hand-mounting scrape configuration bypasses the Operator, which overwrites the generated config. A PrometheusRule defines recording and alerting rules, not scrape targets. Alertmanager routes alert notifications and does not collect metrics.",
    referenceUrl: "https://prometheus-operator.dev/docs/developer/getting-started/",
    tags: ["Prometheus Operator", "ServiceMonitor", "Metrics"]
  },
  {
    id: "cncf-kcna-465",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Where to store and search traces",
    scenario: "A platform team's services now emit OpenTelemetry spans through a Collector, and developers need a backend that stores the traces and provides a UI to search them by service and operation and view each trace as a timeline.",
    question: "Which CNCF graduated project fills that role?",
    options: [
      { id: 'A', text: "Prometheus, a metrics database with alerting" },
      { id: 'B', text: "Envoy, a proxy that can emit spans for traffic" },
      { id: 'C', text: "Jaeger, a distributed tracing backend and UI" },
      { id: 'D', text: "Fluentd, a unified logging collection layer" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Jaeger is a graduated CNCF distributed tracing platform that receives spans (including OTLP from the OpenTelemetry Collector), stores them, and offers a UI to search traces and view them as timelines. Fluentd collects and routes logs. Prometheus stores metrics and does not store traces. Envoy can generate spans for proxied requests, but it does not store or display them.",
    referenceUrl: "https://www.jaegertracing.io/docs/latest/",
    tags: ["Jaeger", "Tracing", "CNCF"]
  },
  {
    id: "cncf-kcna-466",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "How much downtime the budget allows",
    scenario: "A payments API has an availability SLO of 99.9% measured over a rolling 30-day window. Halfway through the window, incidents have already caused 30 minutes of full unavailability, and the product team wants to ship a risky database migration.",
    question: "Roughly how much error budget remains for the rest of the window?",
    options: [
      { id: 'A', text: "None, since any downtime at all breaks a 99.9% objective" },
      { id: 'B', text: "About 58 minutes, since 30 days at 99.9% allows about 88 minutes" },
      { id: 'C', text: "About 13 minutes, since 30 days at 99.9% allows about 43 minutes" },
      { id: 'D', text: "About 7 hours, since 30 days at 99.9% allows about 7.2 hours" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An error budget is 1 minus the SLO: 0.1% of 30 days is 43,200 minutes times 0.001, about 43.2 minutes. After 30 minutes of downtime roughly 13 minutes remain, a strong argument to delay the risky migration. 7.2 hours is the budget for 99%, not 99.9%. An SLO below 100% explicitly allows some unreliability, which is the point of the budget. About 88 minutes would correspond to roughly 99.8% over 30 days.",
    referenceUrl: "https://sre.google/sre-book/embracing-risk/",
    tags: ["SLO", "Error budget", "Reliability"]
  },
  {
    id: "cncf-kcna-467",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Picking the metrics for a new service",
    scenario: "A team building a request-driven REST service wants a small, standard set of dashboard metrics that reflect what users experience, before worrying about CPU, memory and disk on the underlying nodes.",
    question: "Which method describes the right starting set?",
    options: [
      { id: 'A', text: "RED: request rate, errors and duration for each service endpoint" },
      { id: 'B', text: "Node pressure conditions for memory, disk and PIDs as reported by the kubelet" },
      { id: 'C', text: "USE: utilization, saturation and errors for each resource, such as CPU and disks" },
      { id: 'D', text: "The four DORA metrics, starting with deployment frequency and lead time" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The RED method (rate, errors, duration) targets request-driven services and measures what users feel: how much traffic arrives, how much of it fails, and how long it takes. USE (utilization, saturation, errors) is aimed at resources such as CPU, memory and disks, which the team explicitly wants to look at later. DORA metrics measure software delivery performance rather than runtime behaviour. Node pressure conditions describe node health, not the service's user experience.",
    referenceUrl: "https://grafana.com/docs/grafana/latest/visualizations/dashboards/build-dashboards/best-practices/",
    tags: ["RED method", "USE method", "Metrics"]
  },
  {
    id: "cncf-kcna-468",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Logs that tools can filter",
    scenario: "Engineers at a travel company struggle to filter logs by customer ID or HTTP status because every service prints free-text lines in its own format. The logging platform can parse any consistent machine-readable format.",
    question: "What should the services change?",
    options: [
      { id: 'A', text: "Write each service's logs to a separate file named after the customer ID" },
      { id: 'B', text: "Emit structured logs, such as one JSON object per line with named fields" },
      { id: 'C', text: "Convert every log line into a Prometheus metric labelled with the customer ID" },
      { id: 'D', text: "Raise the log level to DEBUG so every line includes the customer ID and status" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structured logging writes each event as key-value data, commonly JSON, so the logging backend can index and filter on fields such as customer_id or status without fragile parsing. Raising the log level adds more free text, not structure. Files per customer ID break the stdout logging model and cannot be queried together. Turning each line into a metric labelled by customer ID would create unbounded cardinality in Prometheus.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/system-logs/#structured-logging",
    tags: ["Logging", "Structured logs", "JSON"]
  },
  {
    id: "cncf-kcna-469",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "A year of metrics across ten clusters",
    scenario: "A company runs a Prometheus server in each of ten clusters with 15-day local retention. Leadership wants a single place to query metrics from all clusters together and to keep them for 13 months for capacity planning.",
    question: "Which approach fits best?",
    options: [
      { id: 'A', text: "Export Grafana dashboard snapshots every night and keep them in object storage" },
      { id: 'B', text: "Send data with remote_write to a long-term, global store like Thanos or Cortex" },
      { id: 'C', text: "Point every cluster's Prometheus at a shared etcd cluster for storing metrics" },
      { id: 'D', text: "Raise each Prometheus server's local retention to 13 months on bigger disks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Prometheus's local storage is not designed as durable, clustered long-term storage. Projects such as Thanos and Cortex (both CNCF) receive data through remote_write or a sidecar, store it in object storage for long retention, and offer a global query view across clusters. Longer local retention keeps data siloed per cluster and on single disks. Dashboard snapshots capture rendered panels, not queryable data. etcd is not a metrics store and would be overwhelmed.",
    referenceUrl: "https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations",
    tags: ["Prometheus", "Long-term storage", "Thanos"]
  },
  {
    id: "cncf-kcna-470",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Keeping the traces that matter",
    scenario: "A high-traffic API produces far more spans than the tracing budget allows, so the SDKs sample 1% of traces at the start of each request. Engineers complain that the rare failing or very slow requests are almost never kept. They want to keep every error and slow trace while discarding most healthy ones.",
    question: "What should the team implement?",
    options: [
      { id: 'A', text: "Replace tracing with logs at the ERROR level only, since those always include slow requests" },
      { id: 'B', text: "Use tail-based sampling in the OpenTelemetry Collector, deciding after a trace's spans arrive" },
      { id: 'C', text: "Lower head-based sampling in every SDK to 0.1% so the budget allows more traces per error" },
      { id: 'D', text: "Raise head-based sampling in every SDK to 100% and let the backend delete healthy spans later" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Head-based sampling decides at the start of a request, before anyone knows whether it will fail or be slow. Tail-based sampling, for example the Collector's tail_sampling processor, buffers a trace's spans and decides afterwards using policies such as status code error or latency above a threshold, so errors and slow traces are kept while most healthy ones are dropped. Sampling everything and deleting later sends the full volume to the backend, breaking the budget. Sampling less at the head keeps even fewer errors. Error logs miss slow-but-successful requests and lose the cross-service view.",
    referenceUrl: "https://opentelemetry.io/docs/concepts/sampling/",
    tags: ["Tracing", "Sampling", "OpenTelemetry"]
  },
  {
    id: "cncf-kcna-471",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Who is spending the cluster budget",
    scenario: "Finance asks a platform team to show monthly Kubernetes spend per team and namespace for a shared multi-tenant cluster, based on the resources each workload requests and uses, and it prefers an open source CNCF tool.",
    question: "Which project is built for this?",
    options: [
      { id: 'A', text: "OpenCost, which allocates cluster costs to namespaces and workloads" },
      { id: 'B', text: "Falco, which records each workload's resource spending from syscalls" },
      { id: 'C', text: "Helm, which reports the cloud cost of each installed chart release" },
      { id: 'D', text: "Jaeger, which attributes the cost of each trace to the services it spans" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OpenCost is a CNCF project that combines resource requests and usage with cloud or on-premises pricing to allocate cost by namespace, label, workload and more, which is exactly per-team showback. Jaeger stores traces and has no pricing model. Falco detects suspicious runtime behaviour from system calls for security, not cost. Helm installs and upgrades charts and does not report costs.",
    referenceUrl: "https://opencost.io/docs/",
    tags: ["OpenCost", "Cost management", "FinOps"]
  },
  {
    id: "cncf-kcna-472",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "From a latency spike to an example trace",
    scenario: "An engineer sees a latency spike on a Grafana panel backed by a Prometheus histogram and wants to jump from that exact spike to a trace of one of the slow requests, instead of searching the tracing backend by time and service.",
    question: "Which feature enables that jump?",
    options: [
      { id: 'A', text: "Relabeling, which rewrites histogram bucket labels into trace links" },
      { id: 'B', text: "Recording rules, which store precomputed trace IDs next to each series" },
      { id: 'C', text: "Federation, which lets Prometheus pull traces from a tracing backend" },
      { id: 'D', text: "Exemplars, which attach sample trace IDs to histogram observations" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Exemplars are sample observations stored alongside metric data that carry labels such as a trace ID; when instrumentation records them and Prometheus stores them, Grafana can show them on the panel and link straight to the trace in Jaeger or Tempo. Recording rules precompute query results as new series and hold no trace IDs. Federation lets one Prometheus scrape selected series from another. Relabeling modifies labels during discovery, scraping or remote write and cannot create trace links on its own.",
    referenceUrl: "https://prometheus.io/docs/prometheus/latest/feature_flags/#exemplars-storage",
    tags: ["Exemplars", "Prometheus", "Tracing"]
  },
  {
    id: "cncf-kcna-473",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "A dashboard that takes a minute to load",
    scenario: "A fleet-wide SLO dashboard runs a heavy PromQL expression that aggregates request rates over thousands of series, and it takes almost a minute to load each time anyone opens it. The same expression is also used by two alert rules.",
    question: "What is the recommended way to make it fast?",
    options: [
      { id: 'A', text: "Move the expression into an Alertmanager route, which evaluates it faster" },
      { id: 'B', text: "Define a recording rule that precomputes the expression into a new series" },
      { id: 'C', text: "Increase the scrape interval for all targets so each series holds less data" },
      { id: 'D', text: "Enable Grafana's dashboard caching so the result is kept for a whole day" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Recording rules evaluate an expression on a schedule and save the result as a new, much smaller time series, so the dashboard and both alert rules query the precomputed series instantly. A longer scrape interval coarsens every metric in the system to speed up one query. Alertmanager does not evaluate PromQL at all. Caching a result for a day makes an SLO dashboard stale and does nothing for the alert rules.",
    referenceUrl: "https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/",
    tags: ["Prometheus", "Recording rules", "Performance"]
  },
  {
    id: "cncf-kcna-474",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Patch the server or replace it",
    scenario: "An operations team patches a critical OpenSSL vulnerability by running package updates inside long-lived containers and on hand-maintained VMs. Over time no two servers are quite the same, and a failed update left one environment impossible to reproduce.",
    question: "Which cloud native principle addresses this?",
    options: [
      { id: 'A', text: "Configuration drift detection: record differences between servers once a week" },
      { id: 'B', text: "Pet servers: give each machine a name and an owner who maintains its packages" },
      { id: 'C', text: "Immutable infrastructure: build a new patched image and replace the old instances" },
      { id: 'D', text: "Vertical scaling: move each workload to a larger node before applying patches" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With immutable infrastructure, running instances are never modified; changes are made by building a new versioned image and replacing instances, so every environment is reproducible and a bad change is undone by redeploying the previous image. Vertical scaling adds capacity and does nothing for consistency. Detecting drift reports the problem without preventing it. Treating servers as named, hand-maintained pets is the pattern that caused the drift.",
    referenceUrl: "https://glossary.cncf.io/immutable-infrastructure/",
    tags: ["Immutable infrastructure", "Principles", "Containers"]
  },
  {
    id: "cncf-kcna-475",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d4",
    domainName: "Cloud Native Architecture",
    title: "Workers that should cost nothing when idle",
    scenario: "A media company runs video-transcoding workers that consume jobs from a RabbitMQ queue. The queue is empty most nights and weekends, then spikes to thousands of messages. The company wants zero worker pods when the queue is empty and scaling driven by queue length, not CPU.",
    question: "Which approach fits best?",
    options: [
      { id: 'A', text: "A HorizontalPodAutoscaler on CPU with minReplicas: 0 for the RabbitMQ queue workers" },
      { id: 'B', text: "The Cluster Autoscaler, which removes worker pods when their nodes become empty" },
      { id: 'C', text: "The Vertical Pod Autoscaler, which shrinks the worker pods to zero CPU when idle" },
      { id: 'D', text: "KEDA with a RabbitMQ scaler, activating the Deployment from zero as work arrives" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "KEDA is a CNCF event-driven autoscaler: its scalers read external sources such as RabbitMQ queue length, it activates a Deployment from zero when work arrives and deactivates it back to zero when idle, and it drives an HPA for scaling between one and many replicas. A plain HPA scales on CPU and, by default, cannot scale to zero replicas. VPA adjusts requests of existing pods and cannot remove them. The Cluster Autoscaler adds and removes nodes, not application pods.",
    referenceUrl: "https://keda.sh/docs/latest/concepts/",
    tags: ["KEDA", "Autoscaling", "Event-driven"]
  }
];

export default CNCF_KCNA_QUESTIONS_19;
