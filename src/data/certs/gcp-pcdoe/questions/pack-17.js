export const GCP_PCDOE_QUESTIONS_17 = [
  {
    id: "gcp-pcdoe-401",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Dashboards as Code: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Dashboarding to standardize and version-control monitoring dashboards across fifty production development teams to ensure consistent observability views.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Terraform and JSON-based declarative dashboard definitions is under consideration.",
    options: [
      { id: 'A', text: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git." },
      { id: 'B', text: "Instruct each team lead to manually construct charts and graphs by hand clicking in the Cloud Console." },
      { id: 'C', text: "Take screenshots of monitoring graphs and upload them to a corporate wiki for weekly review." },
      { id: 'D', text: "Rely exclusively on command-line terminal output without visual dashboard representation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git. Defining dashboards as code using Terraform and declarative JSON layouts ensures consistent layout standards, enables peer code reviews for telemetry changes, allows automated deployment across staging and production environments, and prevents configuration drift.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards-api",
    tags: ["Dashboarding", "Dashboards as Code", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-402",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Dashboards as Code: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Dashboarding to standardize and version-control monitoring dashboards across fifty production development teams to ensure consistent observability views.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Terraform and JSON-based declarative dashboard definitions is under consideration.",
    options: [
      { id: 'A', text: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git." },
      { id: 'B', text: "Instruct each team lead to manually construct charts and graphs by hand clicking in the Cloud Console." },
      { id: 'C', text: "Take screenshots of monitoring graphs and upload them to a corporate wiki for weekly review." },
      { id: 'D', text: "Rely exclusively on command-line terminal output without visual dashboard representation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git. Defining dashboards as code using Terraform and declarative JSON layouts ensures consistent layout standards, enables peer code reviews for telemetry changes, allows automated deployment across staging and production environments, and prevents configuration drift.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards-api",
    tags: ["Dashboarding", "Dashboards as Code", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-403",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Dashboards as Code: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Dashboarding to standardize and version-control monitoring dashboards across fifty production development teams to ensure consistent observability views.",
    question: "Which solution implements these mandatory compliance and security controls? Terraform and JSON-based declarative dashboard definitions is under consideration.",
    options: [
      { id: 'A', text: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git." },
      { id: 'B', text: "Instruct each team lead to manually construct charts and graphs by hand clicking in the Cloud Console." },
      { id: 'C', text: "Take screenshots of monitoring graphs and upload them to a corporate wiki for weekly review." },
      { id: 'D', text: "Rely exclusively on command-line terminal output without visual dashboard representation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git. Defining dashboards as code using Terraform and declarative JSON layouts ensures consistent layout standards, enables peer code reviews for telemetry changes, allows automated deployment across staging and production environments, and prevents configuration drift.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards-api",
    tags: ["Dashboarding", "Dashboards as Code", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-404",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Dashboards as Code: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Dashboarding to standardize and version-control monitoring dashboards across fifty production development teams to ensure consistent observability views.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Terraform and JSON-based declarative dashboard definitions is under consideration.",
    options: [
      { id: 'A', text: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git." },
      { id: 'B', text: "Instruct each team lead to manually construct charts and graphs by hand clicking in the Cloud Console." },
      { id: 'C', text: "Take screenshots of monitoring graphs and upload them to a corporate wiki for weekly review." },
      { id: 'D', text: "Rely exclusively on command-line terminal output without visual dashboard representation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git. Defining dashboards as code using Terraform and declarative JSON layouts ensures consistent layout standards, enables peer code reviews for telemetry changes, allows automated deployment across staging and production environments, and prevents configuration drift.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards-api",
    tags: ["Dashboarding", "Dashboards as Code", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-405",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Dashboards as Code: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Dashboarding to standardize and version-control monitoring dashboards across fifty production development teams to ensure consistent observability views.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Terraform and JSON-based declarative dashboard definitions is under consideration.",
    options: [
      { id: 'A', text: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git." },
      { id: 'B', text: "Instruct each team lead to manually construct charts and graphs by hand clicking in the Cloud Console." },
      { id: 'C', text: "Take screenshots of monitoring graphs and upload them to a corporate wiki for weekly review." },
      { id: 'D', text: "Rely exclusively on command-line terminal output without visual dashboard representation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Cloud Monitoring dashboards declaratively using Terraform `google_monitoring_dashboard` resources with version-controlled JSON layouts stored in Git. Defining dashboards as code using Terraform and declarative JSON layouts ensures consistent layout standards, enables peer code reviews for telemetry changes, allows automated deployment across staging and production environments, and prevents configuration drift.",
    referenceUrl: "https://cloud.google.com/monitoring/charts/dashboards-api",
    tags: ["Dashboarding", "Dashboards as Code", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-406",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Notification Channels: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Alert Routing to ensure critical high-severity alerts automatically page on-call engineers while informational warnings route to a team Slack channel without noise.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Notification channels including PagerDuty, Slack, Webhooks, and Cloud Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers." },
      { id: 'B', text: "Direct all alerting policies to a single shared unmonitored team email inbox." },
      { id: 'C', text: "Configure high-priority alerts to write entries into a hidden log file with no notification dispatch." },
      { id: 'D', text: "Set all alerting policies to broadcast push notifications to every corporate employee's mobile phone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers. Cloud Monitoring supports diverse notification channels including email, PagerDuty, Slack, Webhooks, and Pub/Sub. Proper routing links severe, user-impacting alerts to active paging channels (PagerDuty) and lower-priority trend alerts to asynchronous chat channels.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Alert Routing", "Notification Channels", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-407",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Notification Channels: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Alert Routing to ensure critical high-severity alerts automatically page on-call engineers while informational warnings route to a team Slack channel without noise.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Notification channels including PagerDuty, Slack, Webhooks, and Cloud Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers." },
      { id: 'B', text: "Direct all alerting policies to a single shared unmonitored team email inbox." },
      { id: 'C', text: "Configure high-priority alerts to write entries into a hidden log file with no notification dispatch." },
      { id: 'D', text: "Set all alerting policies to broadcast push notifications to every corporate employee's mobile phone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers. Cloud Monitoring supports diverse notification channels including email, PagerDuty, Slack, Webhooks, and Pub/Sub. Proper routing links severe, user-impacting alerts to active paging channels (PagerDuty) and lower-priority trend alerts to asynchronous chat channels.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Alert Routing", "Notification Channels", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-408",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Notification Channels: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Alert Routing to ensure critical high-severity alerts automatically page on-call engineers while informational warnings route to a team Slack channel without noise.",
    question: "Which solution implements these mandatory compliance and security controls? Notification channels including PagerDuty, Slack, Webhooks, and Cloud Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers." },
      { id: 'B', text: "Direct all alerting policies to a single shared unmonitored team email inbox." },
      { id: 'C', text: "Configure high-priority alerts to write entries into a hidden log file with no notification dispatch." },
      { id: 'D', text: "Set all alerting policies to broadcast push notifications to every corporate employee's mobile phone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers. Cloud Monitoring supports diverse notification channels including email, PagerDuty, Slack, Webhooks, and Pub/Sub. Proper routing links severe, user-impacting alerts to active paging channels (PagerDuty) and lower-priority trend alerts to asynchronous chat channels.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Alert Routing", "Notification Channels", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-409",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Notification Channels: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Alert Routing to ensure critical high-severity alerts automatically page on-call engineers while informational warnings route to a team Slack channel without noise.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Notification channels including PagerDuty, Slack, Webhooks, and Cloud Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers." },
      { id: 'B', text: "Direct all alerting policies to a single shared unmonitored team email inbox." },
      { id: 'C', text: "Configure high-priority alerts to write entries into a hidden log file with no notification dispatch." },
      { id: 'D', text: "Set all alerting policies to broadcast push notifications to every corporate employee's mobile phone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers. Cloud Monitoring supports diverse notification channels including email, PagerDuty, Slack, Webhooks, and Pub/Sub. Proper routing links severe, user-impacting alerts to active paging channels (PagerDuty) and lower-priority trend alerts to asynchronous chat channels.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Alert Routing", "Notification Channels", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-410",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Monitoring Notification Channels: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Alert Routing to ensure critical high-severity alerts automatically page on-call engineers while informational warnings route to a team Slack channel without noise.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Notification channels including PagerDuty, Slack, Webhooks, and Cloud Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers." },
      { id: 'B', text: "Direct all alerting policies to a single shared unmonitored team email inbox." },
      { id: 'C', text: "Configure high-priority alerts to write entries into a hidden log file with no notification dispatch." },
      { id: 'D', text: "Set all alerting policies to broadcast push notifications to every corporate employee's mobile phone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure separate Cloud Monitoring Notification Channels (PagerDuty for critical priority, Slack webhook for warnings) and bind them to respective alert policy severity tiers. Cloud Monitoring supports diverse notification channels including email, PagerDuty, Slack, Webhooks, and Pub/Sub. Proper routing links severe, user-impacting alerts to active paging channels (PagerDuty) and lower-priority trend alerts to asynchronous chat channels.",
    referenceUrl: "https://cloud.google.com/monitoring/support/notification-options",
    tags: ["Alert Routing", "Notification Channels", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-411",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Error Reporting: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Crash Diagnostics to automatically group and aggregate unhandled application exceptions across thousands of container replicas and notify developers of new crashes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Automated application stack trace aggregation and alerting with Error Reporting is under consideration.",
    options: [
      { id: 'A', text: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards." },
      { id: 'B', text: "Require engineers to manually tail container standard error output to spot new exception stack traces." },
      { id: 'C', text: "Silence all uncaught exceptions with empty catch blocks to prevent error logs from being created." },
      { id: 'D', text: "Instruct customers to take photos of error screens and send them via mail to technical support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards. Cloud Error Reporting automatically parses, aggregates, and groups application exceptions from Cloud Logging. It deduplicates identical crashes, correlates them with source code locations, and dispatches notifications when a new exception fingerprint is first detected in a release.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs",
    tags: ["Crash Diagnostics", "Error Reporting", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-412",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Error Reporting: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Crash Diagnostics to automatically group and aggregate unhandled application exceptions across thousands of container replicas and notify developers of new crashes.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Automated application stack trace aggregation and alerting with Error Reporting is under consideration.",
    options: [
      { id: 'A', text: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards." },
      { id: 'B', text: "Require engineers to manually tail container standard error output to spot new exception stack traces." },
      { id: 'C', text: "Silence all uncaught exceptions with empty catch blocks to prevent error logs from being created." },
      { id: 'D', text: "Instruct customers to take photos of error screens and send them via mail to technical support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards. Cloud Error Reporting automatically parses, aggregates, and groups application exceptions from Cloud Logging. It deduplicates identical crashes, correlates them with source code locations, and dispatches notifications when a new exception fingerprint is first detected in a release.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs",
    tags: ["Crash Diagnostics", "Error Reporting", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-413",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Error Reporting: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Crash Diagnostics to automatically group and aggregate unhandled application exceptions across thousands of container replicas and notify developers of new crashes.",
    question: "Which solution implements these mandatory compliance and security controls? Automated application stack trace aggregation and alerting with Error Reporting is under consideration.",
    options: [
      { id: 'A', text: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards." },
      { id: 'B', text: "Require engineers to manually tail container standard error output to spot new exception stack traces." },
      { id: 'C', text: "Silence all uncaught exceptions with empty catch blocks to prevent error logs from being created." },
      { id: 'D', text: "Instruct customers to take photos of error screens and send them via mail to technical support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards. Cloud Error Reporting automatically parses, aggregates, and groups application exceptions from Cloud Logging. It deduplicates identical crashes, correlates them with source code locations, and dispatches notifications when a new exception fingerprint is first detected in a release.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs",
    tags: ["Crash Diagnostics", "Error Reporting", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-414",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Error Reporting: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Crash Diagnostics to automatically group and aggregate unhandled application exceptions across thousands of container replicas and notify developers of new crashes.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated application stack trace aggregation and alerting with Error Reporting is under consideration.",
    options: [
      { id: 'A', text: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards." },
      { id: 'B', text: "Require engineers to manually tail container standard error output to spot new exception stack traces." },
      { id: 'C', text: "Silence all uncaught exceptions with empty catch blocks to prevent error logs from being created." },
      { id: 'D', text: "Instruct customers to take photos of error screens and send them via mail to technical support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards. Cloud Error Reporting automatically parses, aggregates, and groups application exceptions from Cloud Logging. It deduplicates identical crashes, correlates them with source code locations, and dispatches notifications when a new exception fingerprint is first detected in a release.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs",
    tags: ["Crash Diagnostics", "Error Reporting", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-415",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Logging Error Reporting: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Crash Diagnostics to automatically group and aggregate unhandled application exceptions across thousands of container replicas and notify developers of new crashes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Automated application stack trace aggregation and alerting with Error Reporting is under consideration.",
    options: [
      { id: 'A', text: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards." },
      { id: 'B', text: "Require engineers to manually tail container standard error output to spot new exception stack traces." },
      { id: 'C', text: "Silence all uncaught exceptions with empty catch blocks to prevent error logs from being created." },
      { id: 'D', text: "Instruct customers to take photos of error screens and send them via mail to technical support." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate the Cloud Error Reporting library or format application stack trace logs to comply with Google Cloud structured error formatting standards. Cloud Error Reporting automatically parses, aggregates, and groups application exceptions from Cloud Logging. It deduplicates identical crashes, correlates them with source code locations, and dispatches notifications when a new exception fingerprint is first detected in a release.",
    referenceUrl: "https://cloud.google.com/error-reporting/docs",
    tags: ["Crash Diagnostics", "Error Reporting", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-416",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "GKE Control Plane Metrics and Audit Logs: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Control Plane Observability to detect performance degradation or admission webhook timeouts affecting Kubernetes API server operations during large-scale deployments.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Monitoring Kubernetes API server latency, etcd health, and admission controller webhooks is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies." },
      { id: 'B', text: "SSH into master control plane nodes to manually inspect running process tables." },
      { id: 'C', text: "Assume API server issues will always resolve automatically without inspecting admission webhook latency." },
      { id: 'D', text: "Delete all admission controllers from the cluster without examining their webhook execution times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies. Google Cloud provides managed control plane metrics for GKE, including API server request latencies, admission webhook latencies, and etcd disk sync times. Cloud Audit Logs capture API caller identities and method invocations, revealing misconfigured mutating webhooks that delay pod scheduling.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/gke/system-metrics",
    tags: ["Control Plane Observability", "Control Plane Metrics", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-417",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "GKE Control Plane Metrics and Audit Logs: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Control Plane Observability to detect performance degradation or admission webhook timeouts affecting Kubernetes API server operations during large-scale deployments.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Monitoring Kubernetes API server latency, etcd health, and admission controller webhooks is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies." },
      { id: 'B', text: "SSH into master control plane nodes to manually inspect running process tables." },
      { id: 'C', text: "Assume API server issues will always resolve automatically without inspecting admission webhook latency." },
      { id: 'D', text: "Delete all admission controllers from the cluster without examining their webhook execution times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies. Google Cloud provides managed control plane metrics for GKE, including API server request latencies, admission webhook latencies, and etcd disk sync times. Cloud Audit Logs capture API caller identities and method invocations, revealing misconfigured mutating webhooks that delay pod scheduling.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/gke/system-metrics",
    tags: ["Control Plane Observability", "Control Plane Metrics", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-418",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "GKE Control Plane Metrics and Audit Logs: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Control Plane Observability to detect performance degradation or admission webhook timeouts affecting Kubernetes API server operations during large-scale deployments.",
    question: "Which solution implements these mandatory compliance and security controls? Monitoring Kubernetes API server latency, etcd health, and admission controller webhooks is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies." },
      { id: 'B', text: "SSH into master control plane nodes to manually inspect running process tables." },
      { id: 'C', text: "Assume API server issues will always resolve automatically without inspecting admission webhook latency." },
      { id: 'D', text: "Delete all admission controllers from the cluster without examining their webhook execution times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies. Google Cloud provides managed control plane metrics for GKE, including API server request latencies, admission webhook latencies, and etcd disk sync times. Cloud Audit Logs capture API caller identities and method invocations, revealing misconfigured mutating webhooks that delay pod scheduling.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/gke/system-metrics",
    tags: ["Control Plane Observability", "Control Plane Metrics", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-419",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "GKE Control Plane Metrics and Audit Logs: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Control Plane Observability to detect performance degradation or admission webhook timeouts affecting Kubernetes API server operations during large-scale deployments.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Monitoring Kubernetes API server latency, etcd health, and admission controller webhooks is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies." },
      { id: 'B', text: "SSH into master control plane nodes to manually inspect running process tables." },
      { id: 'C', text: "Assume API server issues will always resolve automatically without inspecting admission webhook latency." },
      { id: 'D', text: "Delete all admission controllers from the cluster without examining their webhook execution times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies. Google Cloud provides managed control plane metrics for GKE, including API server request latencies, admission webhook latencies, and etcd disk sync times. Cloud Audit Logs capture API caller identities and method invocations, revealing misconfigured mutating webhooks that delay pod scheduling.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/gke/system-metrics",
    tags: ["Control Plane Observability", "Control Plane Metrics", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-420",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "GKE Control Plane Metrics and Audit Logs: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Control Plane Observability to detect performance degradation or admission webhook timeouts affecting Kubernetes API server operations during large-scale deployments.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Monitoring Kubernetes API server latency, etcd health, and admission controller webhooks is under consideration.",
    options: [
      { id: 'A', text: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies." },
      { id: 'B', text: "SSH into master control plane nodes to manually inspect running process tables." },
      { id: 'C', text: "Assume API server issues will always resolve automatically without inspecting admission webhook latency." },
      { id: 'D', text: "Delete all admission controllers from the cluster without examining their webhook execution times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Cloud Monitoring collection of GKE system metrics (API server, etcd, scheduler) and inspect Cloud Audit Logs for apiserver request latencies. Google Cloud provides managed control plane metrics for GKE, including API server request latencies, admission webhook latencies, and etcd disk sync times. Cloud Audit Logs capture API caller identities and method invocations, revealing misconfigured mutating webhooks that delay pod scheduling.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/managed-prometheus/gke/system-metrics",
    tags: ["Control Plane Observability", "Control Plane Metrics", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-421",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler Continuous Profiling: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Continuous Profiling to identify specific function calls and memory allocation bottlenecks causing high resource costs in production microservices under real traffic.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Low-overhead CPU and memory allocation profiling in production environments is under consideration.",
    options: [
      { id: 'A', text: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage." },
      { id: 'B', text: "Attach an interactive debugger with breakpoints to live production servers during peak business hours." },
      { id: 'C', text: "Inspect static source code in text editors to guess where CPU cycles are being consumed." },
      { id: 'D', text: "Provision massively over-sized virtual machines rather than profiling code efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage. Cloud Profiler is a continuous, statistical profiling service with extremely low overhead (&lt; 5% CPU/memory). It samples call stacks across production instances to generate interactive flame graphs, highlighting the exact lines of code consuming CPU cycles and heap memory under actual production loads.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Continuous Profiling", "Continuous Profiling", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-422",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler Continuous Profiling: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Continuous Profiling to identify specific function calls and memory allocation bottlenecks causing high resource costs in production microservices under real traffic.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Low-overhead CPU and memory allocation profiling in production environments is under consideration.",
    options: [
      { id: 'A', text: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage." },
      { id: 'B', text: "Attach an interactive debugger with breakpoints to live production servers during peak business hours." },
      { id: 'C', text: "Inspect static source code in text editors to guess where CPU cycles are being consumed." },
      { id: 'D', text: "Provision massively over-sized virtual machines rather than profiling code efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage. Cloud Profiler is a continuous, statistical profiling service with extremely low overhead (&lt; 5% CPU/memory). It samples call stacks across production instances to generate interactive flame graphs, highlighting the exact lines of code consuming CPU cycles and heap memory under actual production loads.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Continuous Profiling", "Continuous Profiling", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-423",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler Continuous Profiling: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Continuous Profiling to identify specific function calls and memory allocation bottlenecks causing high resource costs in production microservices under real traffic.",
    question: "Which solution implements these mandatory compliance and security controls? Low-overhead CPU and memory allocation profiling in production environments is under consideration.",
    options: [
      { id: 'A', text: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage." },
      { id: 'B', text: "Attach an interactive debugger with breakpoints to live production servers during peak business hours." },
      { id: 'C', text: "Inspect static source code in text editors to guess where CPU cycles are being consumed." },
      { id: 'D', text: "Provision massively over-sized virtual machines rather than profiling code efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage. Cloud Profiler is a continuous, statistical profiling service with extremely low overhead (&lt; 5% CPU/memory). It samples call stacks across production instances to generate interactive flame graphs, highlighting the exact lines of code consuming CPU cycles and heap memory under actual production loads.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Continuous Profiling", "Continuous Profiling", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-424",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler Continuous Profiling: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Continuous Profiling to identify specific function calls and memory allocation bottlenecks causing high resource costs in production microservices under real traffic.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Low-overhead CPU and memory allocation profiling in production environments is under consideration.",
    options: [
      { id: 'A', text: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage." },
      { id: 'B', text: "Attach an interactive debugger with breakpoints to live production servers during peak business hours." },
      { id: 'C', text: "Inspect static source code in text editors to guess where CPU cycles are being consumed." },
      { id: 'D', text: "Provision massively over-sized virtual machines rather than profiling code efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage. Cloud Profiler is a continuous, statistical profiling service with extremely low overhead (&lt; 5% CPU/memory). It samples call stacks across production instances to generate interactive flame graphs, highlighting the exact lines of code consuming CPU cycles and heap memory under actual production loads.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Continuous Profiling", "Continuous Profiling", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-425",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d3",
    domainName: "Implementing service monitoring and alerting strategies",
    title: "Cloud Profiler Continuous Profiling: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Continuous Profiling to identify specific function calls and memory allocation bottlenecks causing high resource costs in production microservices under real traffic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Low-overhead CPU and memory allocation profiling in production environments is under consideration.",
    options: [
      { id: 'A', text: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage." },
      { id: 'B', text: "Attach an interactive debugger with breakpoints to live production servers during peak business hours." },
      { id: 'C', text: "Inspect static source code in text editors to guess where CPU cycles are being consumed." },
      { id: 'D', text: "Provision massively over-sized virtual machines rather than profiling code efficiency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach the Cloud Profiler agent to the application runtime (Java, Go, Node.js, Python) to collect continuous flame graphs of CPU and heap usage. Cloud Profiler is a continuous, statistical profiling service with extremely low overhead (&lt; 5% CPU/memory). It samples call stacks across production instances to generate interactive flame graphs, highlighting the exact lines of code consuming CPU cycles and heap memory under actual production loads.",
    referenceUrl: "https://cloud.google.com/profiler/docs/about-profiler",
    tags: ["Continuous Profiling", "Continuous Profiling", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_17;
