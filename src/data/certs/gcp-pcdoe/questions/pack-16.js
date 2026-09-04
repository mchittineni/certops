export const GCP_PCDOE_QUESTIONS_16 = [
  {
    id: "gcp-pcdoe-376",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Uptime Checks: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Availability Monitoring to verify availability and latency of public web applications from multiple geographic locations globally using managed Google Cloud infrastructure.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Global synthetic uptime checks with public and private endpoint validation is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content." },
      { id: 'B', text: "Execute curl commands from an engineer's laptop running on home broadband once every morning." },
      { id: 'C', text: "Rely exclusively on internal server self-reported heartbeat files stored on local disks." },
      { id: 'D', text: "Assume the service is healthy globally as long as the database primary instance is powered on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content. Cloud Monitoring Uptime Checks test public endpoints from multiple regions around the world at regular intervals (e.g., every 1 to 5 minutes). They verify reachability, response time, and payload content from an external perspective, alerting teams to regional routing or CDN failures.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Availability Monitoring", "Uptime Checks", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-377",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Uptime Checks: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Availability Monitoring to verify availability and latency of public web applications from multiple geographic locations globally using managed Google Cloud infrastructure.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Global synthetic uptime checks with public and private endpoint validation is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content." },
      { id: 'B', text: "Execute curl commands from an engineer's laptop running on home broadband once every morning." },
      { id: 'C', text: "Rely exclusively on internal server self-reported heartbeat files stored on local disks." },
      { id: 'D', text: "Assume the service is healthy globally as long as the database primary instance is powered on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content. Cloud Monitoring Uptime Checks test public endpoints from multiple regions around the world at regular intervals (e.g., every 1 to 5 minutes). They verify reachability, response time, and payload content from an external perspective, alerting teams to regional routing or CDN failures.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Availability Monitoring", "Uptime Checks", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-378",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Uptime Checks: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Availability Monitoring to verify availability and latency of public web applications from multiple geographic locations globally using managed Google Cloud infrastructure.",
    question: "Which solution implements these mandatory compliance and security controls? Global synthetic uptime checks with public and private endpoint validation is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content." },
      { id: 'B', text: "Execute curl commands from an engineer's laptop running on home broadband once every morning." },
      { id: 'C', text: "Rely exclusively on internal server self-reported heartbeat files stored on local disks." },
      { id: 'D', text: "Assume the service is healthy globally as long as the database primary instance is powered on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content. Cloud Monitoring Uptime Checks test public endpoints from multiple regions around the world at regular intervals (e.g., every 1 to 5 minutes). They verify reachability, response time, and payload content from an external perspective, alerting teams to regional routing or CDN failures.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Availability Monitoring", "Uptime Checks", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-379",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Uptime Checks: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Availability Monitoring to verify availability and latency of public web applications from multiple geographic locations globally using managed Google Cloud infrastructure.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Global synthetic uptime checks with public and private endpoint validation is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content." },
      { id: 'B', text: "Execute curl commands from an engineer's laptop running on home broadband once every morning." },
      { id: 'C', text: "Rely exclusively on internal server self-reported heartbeat files stored on local disks." },
      { id: 'D', text: "Assume the service is healthy globally as long as the database primary instance is powered on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content. Cloud Monitoring Uptime Checks test public endpoints from multiple regions around the world at regular intervals (e.g., every 1 to 5 minutes). They verify reachability, response time, and payload content from an external perspective, alerting teams to regional routing or CDN failures.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Availability Monitoring", "Uptime Checks", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-380",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Uptime Checks: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Availability Monitoring to verify availability and latency of public web applications from multiple geographic locations globally using managed Google Cloud infrastructure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Global synthetic uptime checks with public and private endpoint validation is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content." },
      { id: 'B', text: "Execute curl commands from an engineer's laptop running on home broadband once every morning." },
      { id: 'C', text: "Rely exclusively on internal server self-reported heartbeat files stored on local disks." },
      { id: 'D', text: "Assume the service is healthy globally as long as the database primary instance is powered on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks originating from diverse global regions to query service endpoints and validate HTTP status codes and response content. Cloud Monitoring Uptime Checks test public endpoints from multiple regions around the world at regular intervals (e.g., every 1 to 5 minutes). They verify reachability, response time, and payload content from an external perspective, alerting teams to regional routing or CDN failures.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Availability Monitoring", "Uptime Checks", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-381",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Metric-Based Logs: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Log-Based Metrics to generate time-series metric data and alert conditions based on specific regex patterns and status codes appearing in Cloud Logging streams.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Counter and distribution log-based metrics for audit and error tracking is under consideration.",
    options: [
      { id: 'A', text: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric." },
      { id: 'B', text: "Write a batch script that downloads all raw log files each night and calculates error counts using grep." },
      { id: 'C', text: "Require software developers to parse JSON logs in production environments using ad-hoc terminal pipes." },
      { id: 'D', text: "Ignore application logs and monitor only physical hypervisor memory consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric. Log-based metrics in Cloud Logging convert real-time log message patterns into time-series metrics. Counter metrics track occurrences (such as specific HTTP error codes or security violations), while distribution metrics record extracted numeric values (such as processing latencies) for alerting.",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Log-Based Metrics", "Log-Based Metrics", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-382",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Metric-Based Logs: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Log-Based Metrics to generate time-series metric data and alert conditions based on specific regex patterns and status codes appearing in Cloud Logging streams.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Counter and distribution log-based metrics for audit and error tracking is under consideration.",
    options: [
      { id: 'A', text: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric." },
      { id: 'B', text: "Write a batch script that downloads all raw log files each night and calculates error counts using grep." },
      { id: 'C', text: "Require software developers to parse JSON logs in production environments using ad-hoc terminal pipes." },
      { id: 'D', text: "Ignore application logs and monitor only physical hypervisor memory consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric. Log-based metrics in Cloud Logging convert real-time log message patterns into time-series metrics. Counter metrics track occurrences (such as specific HTTP error codes or security violations), while distribution metrics record extracted numeric values (such as processing latencies) for alerting.",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Log-Based Metrics", "Log-Based Metrics", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-383",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Metric-Based Logs: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Log-Based Metrics to generate time-series metric data and alert conditions based on specific regex patterns and status codes appearing in Cloud Logging streams.",
    question: "Which solution implements these mandatory compliance and security controls? Counter and distribution log-based metrics for audit and error tracking is under consideration.",
    options: [
      { id: 'A', text: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric." },
      { id: 'B', text: "Write a batch script that downloads all raw log files each night and calculates error counts using grep." },
      { id: 'C', text: "Require software developers to parse JSON logs in production environments using ad-hoc terminal pipes." },
      { id: 'D', text: "Ignore application logs and monitor only physical hypervisor memory consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric. Log-based metrics in Cloud Logging convert real-time log message patterns into time-series metrics. Counter metrics track occurrences (such as specific HTTP error codes or security violations), while distribution metrics record extracted numeric values (such as processing latencies) for alerting.",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Log-Based Metrics", "Log-Based Metrics", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-384",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Metric-Based Logs: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Log-Based Metrics to generate time-series metric data and alert conditions based on specific regex patterns and status codes appearing in Cloud Logging streams.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Counter and distribution log-based metrics for audit and error tracking is under consideration.",
    options: [
      { id: 'A', text: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric." },
      { id: 'B', text: "Write a batch script that downloads all raw log files each night and calculates error counts using grep." },
      { id: 'C', text: "Require software developers to parse JSON logs in production environments using ad-hoc terminal pipes." },
      { id: 'D', text: "Ignore application logs and monitor only physical hypervisor memory consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric. Log-based metrics in Cloud Logging convert real-time log message patterns into time-series metrics. Counter metrics track occurrences (such as specific HTTP error codes or security violations), while distribution metrics record extracted numeric values (such as processing latencies) for alerting.",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Log-Based Metrics", "Log-Based Metrics", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-385",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Metric-Based Logs: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Log-Based Metrics to generate time-series metric data and alert conditions based on specific regex patterns and status codes appearing in Cloud Logging streams.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Counter and distribution log-based metrics for audit and error tracking is under consideration.",
    options: [
      { id: 'A', text: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric." },
      { id: 'B', text: "Write a batch script that downloads all raw log files each night and calculates error counts using grep." },
      { id: 'C', text: "Require software developers to parse JSON logs in production environments using ad-hoc terminal pipes." },
      { id: 'D', text: "Ignore application logs and monitor only physical hypervisor memory consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log-based Metrics (counter or distribution) in Cloud Logging matching the log filter query, then configure Cloud Monitoring alerts on the generated metric. Log-based metrics in Cloud Logging convert real-time log message patterns into time-series metrics. Counter metrics track occurrences (such as specific HTTP error codes or security violations), while distribution metrics record extracted numeric values (such as processing latencies) for alerting.",
    referenceUrl: "https://cloud.google.com/logging/docs/logs-based-metrics",
    tags: ["Log-Based Metrics", "Log-Based Metrics", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-386",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace Distributed Tracing: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Distributed Tracing to diagnose which microservice in a complex multi-tier call graph is causing high latency spikes for end-user checkout requests.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Trace propagation and latency bottleneck identification with Cloud Trace is under consideration.",
    options: [
      { id: 'A', text: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis." },
      { id: 'B', text: "Inspect individual service CPU graphs without correlating request identifiers across network boundaries." },
      { id: 'C', text: "Add print statements across microservices and attempt to match timestamps manually across asynchronous clock drifts." },
      { id: 'D', text: "Restart all backend microservices simultaneously whenever any request takes longer than 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis. Cloud Trace captures latency data and distributed call hierarchies. By propagating trace context (e.g., W3C TraceContext headers) across service boundaries, Cloud Trace constructs an end-to-end waterfall visualization showing the exact duration of each remote procedure call in a request path.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Distributed Tracing", "Distributed Tracing", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-387",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace Distributed Tracing: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Distributed Tracing to diagnose which microservice in a complex multi-tier call graph is causing high latency spikes for end-user checkout requests.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Trace propagation and latency bottleneck identification with Cloud Trace is under consideration.",
    options: [
      { id: 'A', text: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis." },
      { id: 'B', text: "Inspect individual service CPU graphs without correlating request identifiers across network boundaries." },
      { id: 'C', text: "Add print statements across microservices and attempt to match timestamps manually across asynchronous clock drifts." },
      { id: 'D', text: "Restart all backend microservices simultaneously whenever any request takes longer than 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis. Cloud Trace captures latency data and distributed call hierarchies. By propagating trace context (e.g., W3C TraceContext headers) across service boundaries, Cloud Trace constructs an end-to-end waterfall visualization showing the exact duration of each remote procedure call in a request path.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Distributed Tracing", "Distributed Tracing", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-388",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace Distributed Tracing: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Distributed Tracing to diagnose which microservice in a complex multi-tier call graph is causing high latency spikes for end-user checkout requests.",
    question: "Which solution implements these mandatory compliance and security controls? Trace propagation and latency bottleneck identification with Cloud Trace is under consideration.",
    options: [
      { id: 'A', text: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis." },
      { id: 'B', text: "Inspect individual service CPU graphs without correlating request identifiers across network boundaries." },
      { id: 'C', text: "Add print statements across microservices and attempt to match timestamps manually across asynchronous clock drifts." },
      { id: 'D', text: "Restart all backend microservices simultaneously whenever any request takes longer than 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis. Cloud Trace captures latency data and distributed call hierarchies. By propagating trace context (e.g., W3C TraceContext headers) across service boundaries, Cloud Trace constructs an end-to-end waterfall visualization showing the exact duration of each remote procedure call in a request path.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Distributed Tracing", "Distributed Tracing", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-389",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace Distributed Tracing: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Distributed Tracing to diagnose which microservice in a complex multi-tier call graph is causing high latency spikes for end-user checkout requests.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Trace propagation and latency bottleneck identification with Cloud Trace is under consideration.",
    options: [
      { id: 'A', text: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis." },
      { id: 'B', text: "Inspect individual service CPU graphs without correlating request identifiers across network boundaries." },
      { id: 'C', text: "Add print statements across microservices and attempt to match timestamps manually across asynchronous clock drifts." },
      { id: 'D', text: "Restart all backend microservices simultaneously whenever any request takes longer than 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis. Cloud Trace captures latency data and distributed call hierarchies. By propagating trace context (e.g., W3C TraceContext headers) across service boundaries, Cloud Trace constructs an end-to-end waterfall visualization showing the exact duration of each remote procedure call in a request path.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Distributed Tracing", "Distributed Tracing", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-390",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Trace Distributed Tracing: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Distributed Tracing to diagnose which microservice in a complex multi-tier call graph is causing high latency spikes for end-user checkout requests.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Trace propagation and latency bottleneck identification with Cloud Trace is under consideration.",
    options: [
      { id: 'A', text: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis." },
      { id: 'B', text: "Inspect individual service CPU graphs without correlating request identifiers across network boundaries." },
      { id: 'C', text: "Add print statements across microservices and attempt to match timestamps manually across asynchronous clock drifts." },
      { id: 'D', text: "Restart all backend microservices simultaneously whenever any request takes longer than 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument microservices with OpenTelemetry to propagate W3C trace context headers and export distributed spans to Cloud Trace for waterfall latency analysis. Cloud Trace captures latency data and distributed call hierarchies. By propagating trace context (e.g., W3C TraceContext headers) across service boundaries, Cloud Trace constructs an end-to-end waterfall visualization showing the exact duration of each remote procedure call in a request path.",
    referenceUrl: "https://cloud.google.com/trace/docs/overview",
    tags: ["Distributed Tracing", "Distributed Tracing", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-391",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Log Router and Sinks: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Log Routing to route high-volume application logs to Cloud Storage for long-term multi-year compliance retention and security logs to BigQuery for SQL analytics.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Log sinks routing audit and application logs to BigQuery, Pub/Sub, and Cloud Storage is under consideration.",
    options: [
      { id: 'A', text: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination." },
      { id: 'B', text: "Manually export logs weekly by exporting CSV files from the Cloud Console interface." },
      { id: 'C', text: "Store all logs indefinitely in the default _Default log bucket without any retention or storage tier policies." },
      { id: 'D', text: "Stream all raw log records directly to Google Sheets using Apps Script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination. The Cloud Logging Log Router evaluates every ingested log entry against sink filter criteria. Sinks can direct filtered subsets to destinations including Cloud Storage (low-cost long-term retention), BigQuery (analytical SQL queries), and Pub/Sub (real-time third-party SIEM ingestion).",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Log Routing", "Log Routing", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-392",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Log Router and Sinks: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Log Routing to route high-volume application logs to Cloud Storage for long-term multi-year compliance retention and security logs to BigQuery for SQL analytics.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Log sinks routing audit and application logs to BigQuery, Pub/Sub, and Cloud Storage is under consideration.",
    options: [
      { id: 'A', text: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination." },
      { id: 'B', text: "Manually export logs weekly by exporting CSV files from the Cloud Console interface." },
      { id: 'C', text: "Store all logs indefinitely in the default _Default log bucket without any retention or storage tier policies." },
      { id: 'D', text: "Stream all raw log records directly to Google Sheets using Apps Script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination. The Cloud Logging Log Router evaluates every ingested log entry against sink filter criteria. Sinks can direct filtered subsets to destinations including Cloud Storage (low-cost long-term retention), BigQuery (analytical SQL queries), and Pub/Sub (real-time third-party SIEM ingestion).",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Log Routing", "Log Routing", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-393",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Log Router and Sinks: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Log Routing to route high-volume application logs to Cloud Storage for long-term multi-year compliance retention and security logs to BigQuery for SQL analytics.",
    question: "Which solution implements these mandatory compliance and security controls? Log sinks routing audit and application logs to BigQuery, Pub/Sub, and Cloud Storage is under consideration.",
    options: [
      { id: 'A', text: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination." },
      { id: 'B', text: "Manually export logs weekly by exporting CSV files from the Cloud Console interface." },
      { id: 'C', text: "Store all logs indefinitely in the default _Default log bucket without any retention or storage tier policies." },
      { id: 'D', text: "Stream all raw log records directly to Google Sheets using Apps Script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination. The Cloud Logging Log Router evaluates every ingested log entry against sink filter criteria. Sinks can direct filtered subsets to destinations including Cloud Storage (low-cost long-term retention), BigQuery (analytical SQL queries), and Pub/Sub (real-time third-party SIEM ingestion).",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Log Routing", "Log Routing", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-394",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Log Router and Sinks: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Log Routing to route high-volume application logs to Cloud Storage for long-term multi-year compliance retention and security logs to BigQuery for SQL analytics.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Log sinks routing audit and application logs to BigQuery, Pub/Sub, and Cloud Storage is under consideration.",
    options: [
      { id: 'A', text: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination." },
      { id: 'B', text: "Manually export logs weekly by exporting CSV files from the Cloud Console interface." },
      { id: 'C', text: "Store all logs indefinitely in the default _Default log bucket without any retention or storage tier policies." },
      { id: 'D', text: "Stream all raw log records directly to Google Sheets using Apps Script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination. The Cloud Logging Log Router evaluates every ingested log entry against sink filter criteria. Sinks can direct filtered subsets to destinations including Cloud Storage (low-cost long-term retention), BigQuery (analytical SQL queries), and Pub/Sub (real-time third-party SIEM ingestion).",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Log Routing", "Log Routing", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-395",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Log Router and Sinks: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Log Routing to route high-volume application logs to Cloud Storage for long-term multi-year compliance retention and security logs to BigQuery for SQL analytics.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Log sinks routing audit and application logs to BigQuery, Pub/Sub, and Cloud Storage is under consideration.",
    options: [
      { id: 'A', text: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination." },
      { id: 'B', text: "Manually export logs weekly by exporting CSV files from the Cloud Console interface." },
      { id: 'C', text: "Store all logs indefinitely in the default _Default log bucket without any retention or storage tier policies." },
      { id: 'D', text: "Stream all raw log records directly to Google Sheets using Apps Script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create Log Sinks in the Cloud Logging Log Router with inclusion/exclusion filters targeting a Cloud Storage bucket destination and a BigQuery dataset destination. The Cloud Logging Log Router evaluates every ingested log entry against sink filter criteria. Sinks can direct filtered subsets to destinations including Cloud Storage (low-cost long-term retention), BigQuery (analytical SQL queries), and Pub/Sub (real-time third-party SIEM ingestion).",
    referenceUrl: "https://cloud.google.com/logging/docs/routing/overview",
    tags: ["Log Routing", "Log Routing", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-396",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Managed Service for Prometheus: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Prometheus Monitoring to collect and store Prometheus metrics from large-scale GKE clusters without managing self-hosted Prometheus servers, stateful sets, or long-term disk retention.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Google Cloud Managed Service for Prometheus (GMP) for serverless metric collection is under consideration.",
    options: [
      { id: 'A', text: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets." },
      { id: 'B', text: "Deploy a monolithic un-replicated Prometheus server with local ephemeral disk storage on a single GKE worker node." },
      { id: 'C', text: "Convert all application metrics into standard text files and email them to the SRE mailing list." },
      { id: 'D', text: "Prohibit developers from publishing custom Prometheus metrics to prevent cluster resource consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets. Google Cloud Managed Service for Prometheus (GMP) is a fully managed, multi-cloud monitoring solution that ingests and evaluates Prometheus metrics. Enabling managed collection on GKE deploys lightweight node collectors that scrape targets defined by PodMonitoring resources and store data in Google's globally scalable backend.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["Prometheus Monitoring", "Managed Prometheus", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-397",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Managed Service for Prometheus: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Prometheus Monitoring to collect and store Prometheus metrics from large-scale GKE clusters without managing self-hosted Prometheus servers, stateful sets, or long-term disk retention.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Google Cloud Managed Service for Prometheus (GMP) for serverless metric collection is under consideration.",
    options: [
      { id: 'A', text: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets." },
      { id: 'B', text: "Deploy a monolithic un-replicated Prometheus server with local ephemeral disk storage on a single GKE worker node." },
      { id: 'C', text: "Convert all application metrics into standard text files and email them to the SRE mailing list." },
      { id: 'D', text: "Prohibit developers from publishing custom Prometheus metrics to prevent cluster resource consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets. Google Cloud Managed Service for Prometheus (GMP) is a fully managed, multi-cloud monitoring solution that ingests and evaluates Prometheus metrics. Enabling managed collection on GKE deploys lightweight node collectors that scrape targets defined by PodMonitoring resources and store data in Google's globally scalable backend.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["Prometheus Monitoring", "Managed Prometheus", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-398",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Managed Service for Prometheus: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Prometheus Monitoring to collect and store Prometheus metrics from large-scale GKE clusters without managing self-hosted Prometheus servers, stateful sets, or long-term disk retention.",
    question: "Which solution implements these mandatory compliance and security controls? Google Cloud Managed Service for Prometheus (GMP) for serverless metric collection is under consideration.",
    options: [
      { id: 'A', text: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets." },
      { id: 'B', text: "Deploy a monolithic un-replicated Prometheus server with local ephemeral disk storage on a single GKE worker node." },
      { id: 'C', text: "Convert all application metrics into standard text files and email them to the SRE mailing list." },
      { id: 'D', text: "Prohibit developers from publishing custom Prometheus metrics to prevent cluster resource consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets. Google Cloud Managed Service for Prometheus (GMP) is a fully managed, multi-cloud monitoring solution that ingests and evaluates Prometheus metrics. Enabling managed collection on GKE deploys lightweight node collectors that scrape targets defined by PodMonitoring resources and store data in Google's globally scalable backend.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["Prometheus Monitoring", "Managed Prometheus", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-399",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Managed Service for Prometheus: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Prometheus Monitoring to collect and store Prometheus metrics from large-scale GKE clusters without managing self-hosted Prometheus servers, stateful sets, or long-term disk retention.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Google Cloud Managed Service for Prometheus (GMP) for serverless metric collection is under consideration.",
    options: [
      { id: 'A', text: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets." },
      { id: 'B', text: "Deploy a monolithic un-replicated Prometheus server with local ephemeral disk storage on a single GKE worker node." },
      { id: 'C', text: "Convert all application metrics into standard text files and email them to the SRE mailing list." },
      { id: 'D', text: "Prohibit developers from publishing custom Prometheus metrics to prevent cluster resource consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets. Google Cloud Managed Service for Prometheus (GMP) is a fully managed, multi-cloud monitoring solution that ingests and evaluates Prometheus metrics. Enabling managed collection on GKE deploys lightweight node collectors that scrape targets defined by PodMonitoring resources and store data in Google's globally scalable backend.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["Prometheus Monitoring", "Managed Prometheus", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-400",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Managed Service for Prometheus: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Prometheus Monitoring to collect and store Prometheus metrics from large-scale GKE clusters without managing self-hosted Prometheus servers, stateful sets, or long-term disk retention.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Google Cloud Managed Service for Prometheus (GMP) for serverless metric collection is under consideration.",
    options: [
      { id: 'A', text: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets." },
      { id: 'B', text: "Deploy a monolithic un-replicated Prometheus server with local ephemeral disk storage on a single GKE worker node." },
      { id: 'C', text: "Convert all application metrics into standard text files and email them to the SRE mailing list." },
      { id: 'D', text: "Prohibit developers from publishing custom Prometheus metrics to prevent cluster resource consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Managed Service for Prometheus (GMP) on the GKE cluster and configure PodMonitoring custom resources to scrape application targets. Google Cloud Managed Service for Prometheus (GMP) is a fully managed, multi-cloud monitoring solution that ingests and evaluates Prometheus metrics. Enabling managed collection on GKE deploys lightweight node collectors that scrape targets defined by PodMonitoring resources and store data in Google's globally scalable backend.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus",
    tags: ["Prometheus Monitoring", "Managed Prometheus", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_16;
