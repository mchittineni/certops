export const AWS_DOP_QUESTIONS_17 = [
  {
    id: "aws-dop-401",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canaries: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to continuously monitor customer login and checkout flows from an external perspective even during periods of low organic user traffic.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CloudWatch alarm on the checkout endpoint's own latency metric." },
      { id: 'B', text: "Load balancer health checks against the checkout service's path." },
      { id: 'C', text: "A Route 53 health check against the public checkout endpoint." },
      { id: 'D', text: "CloudWatch Synthetics canaries running the checkout script every five minutes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Amazon CloudWatch Synthetics Canaries running Puppeteer/Node.js scripts on a recurring 5-minute schedule. CloudWatch Synthetics Canaries are configurable scripts running on AWS Lambda that follow the same routes and actions as customers (e.g., login, search, checkout). They run 24/7 at regular intervals, testing API endpoints and UI elements to alert teams before real customers are impacted.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Synthetic Monitoring","Synthetics Canaries","Dr Failover"]
  },
  {
    id: "aws-dop-402",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canaries: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to continuously monitor customer login and checkout flows from an external perspective even during periods of low organic user traffic.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A Route 53 health check against the public checkout endpoint." },
      { id: 'B', text: "CloudWatch Synthetics canaries running the checkout script every five minutes." },
      { id: 'C', text: "A CloudWatch alarm on the checkout endpoint's own latency metric." },
      { id: 'D', text: "Load balancer health checks against the checkout service's path." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Amazon CloudWatch Synthetics Canaries running Puppeteer/Node.js scripts on a recurring 5-minute schedule. CloudWatch Synthetics Canaries are configurable scripts running on AWS Lambda that follow the same routes and actions as customers (e.g., login, search, checkout). They run 24/7 at regular intervals, testing API endpoints and UI elements to alert teams before real customers are impacted.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Synthetic Monitoring","Synthetics Canaries","High Load Scale"]
  },
  {
    id: "aws-dop-403",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canaries: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to continuously monitor customer login and checkout flows from an external perspective even during periods of low organic user traffic.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A Route 53 health check against the public checkout endpoint." },
      { id: 'B', text: "A CloudWatch alarm on the checkout endpoint's own latency metric." },
      { id: 'C', text: "Load balancer health checks against the checkout service's path." },
      { id: 'D', text: "CloudWatch Synthetics canaries running the checkout script every five minutes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Amazon CloudWatch Synthetics Canaries running Puppeteer/Node.js scripts on a recurring 5-minute schedule. CloudWatch Synthetics Canaries are configurable scripts running on AWS Lambda that follow the same routes and actions as customers (e.g., login, search, checkout). They run 24/7 at regular intervals, testing API endpoints and UI elements to alert teams before real customers are impacted.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Synthetic Monitoring","Synthetics Canaries","Security Compliance"]
  },
  {
    id: "aws-dop-404",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canaries: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to continuously monitor customer login and checkout flows from an external perspective even during periods of low organic user traffic.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "CloudWatch Synthetics canaries running the checkout script every five minutes." },
      { id: 'B', text: "A Route 53 health check against the public checkout endpoint." },
      { id: 'C', text: "Load balancer health checks against the checkout service's path." },
      { id: 'D', text: "A CloudWatch alarm on the checkout endpoint's own latency metric." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Amazon CloudWatch Synthetics Canaries running Puppeteer/Node.js scripts on a recurring 5-minute schedule. CloudWatch Synthetics Canaries are configurable scripts running on AWS Lambda that follow the same routes and actions as customers (e.g., login, search, checkout). They run 24/7 at regular intervals, testing API endpoints and UI elements to alert teams before real customers are impacted.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Synthetic Monitoring","Synthetics Canaries","Hybrid Migration"]
  },
  {
    id: "aws-dop-405",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canaries: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to continuously monitor customer login and checkout flows from an external perspective even during periods of low organic user traffic.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "CloudWatch Synthetics canaries running the checkout script every five minutes." },
      { id: 'B', text: "Load balancer health checks against the checkout service's path." },
      { id: 'C', text: "A CloudWatch alarm on the checkout endpoint's own latency metric." },
      { id: 'D', text: "A Route 53 health check against the public checkout endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Amazon CloudWatch Synthetics Canaries running Puppeteer/Node.js scripts on a recurring 5-minute schedule. CloudWatch Synthetics Canaries are configurable scripts running on AWS Lambda that follow the same routes and actions as customers (e.g., login, search, checkout). They run 24/7 at regular intervals, testing API endpoints and UI elements to alert teams before real customers are impacted.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Synthetic Monitoring","Synthetics Canaries","Resilience Failure"]
  },
  {
    id: "aws-dop-406",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon CloudWatch Logs Insights: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to troubleshoot an intermittent payment failure by querying and aggregating millions of log entries across multiple log groups in seconds.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "An Athena table over the exported logs in S3, queried with SQL as needed." },
      { id: 'B', text: "A metric filter per pattern, with the counts graphed on a dashboard." },
      { id: 'C', text: "CloudWatch Logs Insights queries across the relevant log groups." },
      { id: 'D', text: "A subscription filter into OpenSearch, queried from its own console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use Amazon CloudWatch Logs Insights with queries using `fields`, `filter`, `stats`, and `sort` across target log groups. CloudWatch Logs Insights is a purpose-built interactive log analytics service. It allows DevOps engineers to run sophisticated queries (e.g., `stats count(*) by bin(5m)`) across petabytes of structured and unstructured logs with sub-second response times, accelerating root-cause discovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["Log Analytics","Logs Insights","Dr Failover"]
  },
  {
    id: "aws-dop-407",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon CloudWatch Logs Insights: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to troubleshoot an intermittent payment failure by querying and aggregating millions of log entries across multiple log groups in seconds.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An Athena table over the exported logs in S3, queried with SQL as needed." },
      { id: 'B', text: "CloudWatch Logs Insights queries across the relevant log groups." },
      { id: 'C', text: "A subscription filter into OpenSearch, queried from its own console." },
      { id: 'D', text: "A metric filter per pattern, with the counts graphed on a dashboard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Amazon CloudWatch Logs Insights with queries using `fields`, `filter`, `stats`, and `sort` across target log groups. CloudWatch Logs Insights is a purpose-built interactive log analytics service. It allows DevOps engineers to run sophisticated queries (e.g., `stats count(*) by bin(5m)`) across petabytes of structured and unstructured logs with sub-second response times, accelerating root-cause discovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["Log Analytics","Logs Insights","High Load Scale"]
  },
  {
    id: "aws-dop-408",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon CloudWatch Logs Insights: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to troubleshoot an intermittent payment failure by querying and aggregating millions of log entries across multiple log groups in seconds.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "CloudWatch Logs Insights queries across the relevant log groups." },
      { id: 'B', text: "A subscription filter into OpenSearch, queried from its own console." },
      { id: 'C', text: "An Athena table over the exported logs in S3, queried with SQL as needed." },
      { id: 'D', text: "A metric filter per pattern, with the counts graphed on a dashboard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Amazon CloudWatch Logs Insights with queries using `fields`, `filter`, `stats`, and `sort` across target log groups. CloudWatch Logs Insights is a purpose-built interactive log analytics service. It allows DevOps engineers to run sophisticated queries (e.g., `stats count(*) by bin(5m)`) across petabytes of structured and unstructured logs with sub-second response times, accelerating root-cause discovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["Log Analytics","Logs Insights","Security Compliance"]
  },
  {
    id: "aws-dop-409",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon CloudWatch Logs Insights: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to troubleshoot an intermittent payment failure by querying and aggregating millions of log entries across multiple log groups in seconds.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "CloudWatch Logs Insights queries across the relevant log groups." },
      { id: 'B', text: "A subscription filter into OpenSearch, queried from its own console." },
      { id: 'C', text: "An Athena table over the exported logs in S3, queried with SQL as needed." },
      { id: 'D', text: "A metric filter per pattern, with the counts graphed on a dashboard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Amazon CloudWatch Logs Insights with queries using `fields`, `filter`, `stats`, and `sort` across target log groups. CloudWatch Logs Insights is a purpose-built interactive log analytics service. It allows DevOps engineers to run sophisticated queries (e.g., `stats count(*) by bin(5m)`) across petabytes of structured and unstructured logs with sub-second response times, accelerating root-cause discovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["Log Analytics","Logs Insights","Hybrid Migration"]
  },
  {
    id: "aws-dop-410",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon CloudWatch Logs Insights: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to troubleshoot an intermittent payment failure by querying and aggregating millions of log entries across multiple log groups in seconds.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A subscription filter into OpenSearch, queried from its own console." },
      { id: 'B', text: "An Athena table over the exported logs in S3, queried with SQL as needed." },
      { id: 'C', text: "CloudWatch Logs Insights queries across the relevant log groups." },
      { id: 'D', text: "A metric filter per pattern, with the counts graphed on a dashboard." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use Amazon CloudWatch Logs Insights with queries using `fields`, `filter`, `stats`, and `sort` across target log groups. CloudWatch Logs Insights is a purpose-built interactive log analytics service. It allows DevOps engineers to run sophisticated queries (e.g., `stats count(*) by bin(5m)`) across petabytes of structured and unstructured logs with sub-second response times, accelerating root-cause discovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["Log Analytics","Logs Insights","Resilience Failure"]
  },
  {
    id: "aws-dop-411",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Container Insights for ECS and EKS: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to collect and visualize CPU, memory, network, and disk performance metrics from pods, tasks, and worker nodes across Amazon EKS and ECS clusters.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Enable the CloudWatch agent on each node with the container plugin." },
      { id: 'B', text: "Enable Container Insights on the cluster, or run the ADOT collector on EKS." },
      { id: 'C', text: "Enable the task-level metrics the service publishes by default." },
      { id: 'D', text: "Run a sidecar in each task that pushes metrics with the API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable CloudWatch Container Insights on the ECS cluster or deploy the AWS Distro for OpenTelemetry (ADOT) collector on EKS. CloudWatch Container Insights automatically gathers, aggregates, and visualizes metrics and diagnostic logs for containerized applications running on Amazon ECS, EKS, and Kubernetes. It provides out-of-the-box dashboards for container restart counts, CPU/memory limits vs usage, and task failure events.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    tags: ["Container Telemetry","Container Insights","Dr Failover"]
  },
  {
    id: "aws-dop-412",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Container Insights for ECS and EKS: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to collect and visualize CPU, memory, network, and disk performance metrics from pods, tasks, and worker nodes across Amazon EKS and ECS clusters.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Enable the CloudWatch agent on each node with the container plugin." },
      { id: 'B', text: "Enable the task-level metrics the service publishes by default." },
      { id: 'C', text: "Run a sidecar in each task that pushes metrics with the API." },
      { id: 'D', text: "Enable Container Insights on the cluster, or run the ADOT collector on EKS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable CloudWatch Container Insights on the ECS cluster or deploy the AWS Distro for OpenTelemetry (ADOT) collector on EKS. CloudWatch Container Insights automatically gathers, aggregates, and visualizes metrics and diagnostic logs for containerized applications running on Amazon ECS, EKS, and Kubernetes. It provides out-of-the-box dashboards for container restart counts, CPU/memory limits vs usage, and task failure events.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    tags: ["Container Telemetry","Container Insights","High Load Scale"]
  },
  {
    id: "aws-dop-413",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Container Insights for ECS and EKS: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to collect and visualize CPU, memory, network, and disk performance metrics from pods, tasks, and worker nodes across Amazon EKS and ECS clusters.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Enable the CloudWatch agent on each node with the container plugin." },
      { id: 'B', text: "Enable Container Insights on the cluster, or run the ADOT collector on EKS." },
      { id: 'C', text: "Enable the task-level metrics the service publishes by default." },
      { id: 'D', text: "Run a sidecar in each task that pushes metrics with the API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable CloudWatch Container Insights on the ECS cluster or deploy the AWS Distro for OpenTelemetry (ADOT) collector on EKS. CloudWatch Container Insights automatically gathers, aggregates, and visualizes metrics and diagnostic logs for containerized applications running on Amazon ECS, EKS, and Kubernetes. It provides out-of-the-box dashboards for container restart counts, CPU/memory limits vs usage, and task failure events.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    tags: ["Container Telemetry","Container Insights","Security Compliance"]
  },
  {
    id: "aws-dop-414",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Container Insights for ECS and EKS: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to collect and visualize CPU, memory, network, and disk performance metrics from pods, tasks, and worker nodes across Amazon EKS and ECS clusters.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable Container Insights on the cluster, or run the ADOT collector on EKS." },
      { id: 'B', text: "Enable the CloudWatch agent on each node with the container plugin." },
      { id: 'C', text: "Run a sidecar in each task that pushes metrics with the API." },
      { id: 'D', text: "Enable the task-level metrics the service publishes by default." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch Container Insights on the ECS cluster or deploy the AWS Distro for OpenTelemetry (ADOT) collector on EKS. CloudWatch Container Insights automatically gathers, aggregates, and visualizes metrics and diagnostic logs for containerized applications running on Amazon ECS, EKS, and Kubernetes. It provides out-of-the-box dashboards for container restart counts, CPU/memory limits vs usage, and task failure events.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    tags: ["Container Telemetry","Container Insights","Hybrid Migration"]
  },
  {
    id: "aws-dop-415",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Container Insights for ECS and EKS: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to collect and visualize CPU, memory, network, and disk performance metrics from pods, tasks, and worker nodes across Amazon EKS and ECS clusters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Enable Container Insights on the cluster, or run the ADOT collector on EKS." },
      { id: 'B', text: "Enable the CloudWatch agent on each node with the container plugin." },
      { id: 'C', text: "Run a sidecar in each task that pushes metrics with the API." },
      { id: 'D', text: "Enable the task-level metrics the service publishes by default." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch Container Insights on the ECS cluster or deploy the AWS Distro for OpenTelemetry (ADOT) collector on EKS. CloudWatch Container Insights automatically gathers, aggregates, and visualizes metrics and diagnostic logs for containerized applications running on Amazon ECS, EKS, and Kubernetes. It provides out-of-the-box dashboards for container restart counts, CPU/memory limits vs usage, and task failure events.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html",
    tags: ["Container Telemetry","Container Insights","Resilience Failure"]
  },
  {
    id: "aws-dop-416",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Composite Alarms: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to prevent false-positive pages to on-call engineers by alerting only when both high CPU utilization and high 5xx error rates occur simultaneously.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CloudWatch metric math alarm over the two metrics multiplied together." },
      { id: 'B', text: "Two separate alarms, each with its own SNS topic and paging policy." },
      { id: 'C', text: "A CloudWatch composite alarm combining the two alarms with a boolean rule." },
      { id: 'D', text: "A single alarm on the CPU metric with a longer evaluation period." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudWatch Composite Alarm that uses boolean rule logic (`ALARM(HighCPU) AND ALARM(High5xxErrors)`) to trigger incident notifications. CloudWatch Composite Alarms evaluate multiple underlying metric alarms using boolean logic (`AND`, `OR`, `NOT`). This prevents alert noise and false positives by triggering actions only when multiple related indicators simultaneously degrade (e.g., CPU high AND error rate elevated).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["Alert Optimization","Composite Alarms","Dr Failover"]
  },
  {
    id: "aws-dop-417",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Composite Alarms: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to prevent false-positive pages to on-call engineers by alerting only when both high CPU utilization and high 5xx error rates occur simultaneously.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A single alarm on the CPU metric with a longer evaluation period." },
      { id: 'B', text: "A CloudWatch composite alarm combining the two alarms with a boolean rule." },
      { id: 'C', text: "Two separate alarms, each with its own SNS topic and paging policy." },
      { id: 'D', text: "A CloudWatch metric math alarm over the two metrics multiplied together." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudWatch Composite Alarm that uses boolean rule logic (`ALARM(HighCPU) AND ALARM(High5xxErrors)`) to trigger incident notifications. CloudWatch Composite Alarms evaluate multiple underlying metric alarms using boolean logic (`AND`, `OR`, `NOT`). This prevents alert noise and false positives by triggering actions only when multiple related indicators simultaneously degrade (e.g., CPU high AND error rate elevated).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["Alert Optimization","Composite Alarms","High Load Scale"]
  },
  {
    id: "aws-dop-418",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Composite Alarms: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to prevent false-positive pages to on-call engineers by alerting only when both high CPU utilization and high 5xx error rates occur simultaneously.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A single alarm on the CPU metric with a longer evaluation period." },
      { id: 'B', text: "A CloudWatch composite alarm combining the two alarms with a boolean rule." },
      { id: 'C', text: "Two separate alarms, each with its own SNS topic and paging policy." },
      { id: 'D', text: "A CloudWatch metric math alarm over the two metrics multiplied together." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudWatch Composite Alarm that uses boolean rule logic (`ALARM(HighCPU) AND ALARM(High5xxErrors)`) to trigger incident notifications. CloudWatch Composite Alarms evaluate multiple underlying metric alarms using boolean logic (`AND`, `OR`, `NOT`). This prevents alert noise and false positives by triggering actions only when multiple related indicators simultaneously degrade (e.g., CPU high AND error rate elevated).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["Alert Optimization","Composite Alarms","Security Compliance"]
  },
  {
    id: "aws-dop-419",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Composite Alarms: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to prevent false-positive pages to on-call engineers by alerting only when both high CPU utilization and high 5xx error rates occur simultaneously.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A CloudWatch metric math alarm over the two metrics multiplied together." },
      { id: 'B', text: "Two separate alarms, each with its own SNS topic and paging policy." },
      { id: 'C', text: "A CloudWatch composite alarm combining the two alarms with a boolean rule." },
      { id: 'D', text: "A single alarm on the CPU metric with a longer evaluation period." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudWatch Composite Alarm that uses boolean rule logic (`ALARM(HighCPU) AND ALARM(High5xxErrors)`) to trigger incident notifications. CloudWatch Composite Alarms evaluate multiple underlying metric alarms using boolean logic (`AND`, `OR`, `NOT`). This prevents alert noise and false positives by triggering actions only when multiple related indicators simultaneously degrade (e.g., CPU high AND error rate elevated).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["Alert Optimization","Composite Alarms","Hybrid Migration"]
  },
  {
    id: "aws-dop-420",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Composite Alarms: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to prevent false-positive pages to on-call engineers by alerting only when both high CPU utilization and high 5xx error rates occur simultaneously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A single alarm on the CPU metric with a longer evaluation period." },
      { id: 'B', text: "A CloudWatch composite alarm combining the two alarms with a boolean rule." },
      { id: 'C', text: "Two separate alarms, each with its own SNS topic and paging policy." },
      { id: 'D', text: "A CloudWatch metric math alarm over the two metrics multiplied together." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudWatch Composite Alarm that uses boolean rule logic (`ALARM(HighCPU) AND ALARM(High5xxErrors)`) to trigger incident notifications. CloudWatch Composite Alarms evaluate multiple underlying metric alarms using boolean logic (`AND`, `OR`, `NOT`). This prevents alert noise and false positives by triggering actions only when multiple related indicators simultaneously degrade (e.g., CPU high AND error rate elevated).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["Alert Optimization","Composite Alarms","Resilience Failure"]
  },
  {
    id: "aws-dop-421",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account Cross-Region CloudWatch Dashboards: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to provide leadership and operations teams a unified single-pane-of-glass observability dashboard across all corporate AWS accounts and regions.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Enable CloudWatch cross-account observability, with a monitoring account and unified dashboards." },
      { id: 'B', text: "Stream each account's metrics to a central account with a metric stream and Firehose." },
      { id: 'C', text: "Grant a central role read access to each account and query the metrics through it." },
      { id: 'D', text: "Publish a copy of each service's key metrics into one account as custom metrics." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch cross-account cross-region observability by sharing monitoring accounts with source accounts and building unified dashboards. CloudWatch cross-account cross-region observability allows designated monitoring accounts to seamlessly search, visualize, and analyze metrics, logs, and traces across thousands of source accounts and regions without requiring complex manual data pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html",
    tags: ["Unified Observability","Cross-Account Observability","Dr Failover"]
  },
  {
    id: "aws-dop-422",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account Cross-Region CloudWatch Dashboards: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to provide leadership and operations teams a unified single-pane-of-glass observability dashboard across all corporate AWS accounts and regions.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Enable CloudWatch cross-account observability, with a monitoring account and unified dashboards." },
      { id: 'B', text: "Stream each account's metrics to a central account with a metric stream and Firehose." },
      { id: 'C', text: "Grant a central role read access to each account and query the metrics through it." },
      { id: 'D', text: "Publish a copy of each service's key metrics into one account as custom metrics." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch cross-account cross-region observability by sharing monitoring accounts with source accounts and building unified dashboards. CloudWatch cross-account cross-region observability allows designated monitoring accounts to seamlessly search, visualize, and analyze metrics, logs, and traces across thousands of source accounts and regions without requiring complex manual data pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html",
    tags: ["Unified Observability","Cross-Account Observability","High Load Scale"]
  },
  {
    id: "aws-dop-423",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account Cross-Region CloudWatch Dashboards: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to provide leadership and operations teams a unified single-pane-of-glass observability dashboard across all corporate AWS accounts and regions.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Stream each account's metrics to a central account with a metric stream and Firehose." },
      { id: 'B', text: "Grant a central role read access to each account and query the metrics through it." },
      { id: 'C', text: "Enable CloudWatch cross-account observability, with a monitoring account and unified dashboards." },
      { id: 'D', text: "Publish a copy of each service's key metrics into one account as custom metrics." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable CloudWatch cross-account cross-region observability by sharing monitoring accounts with source accounts and building unified dashboards. CloudWatch cross-account cross-region observability allows designated monitoring accounts to seamlessly search, visualize, and analyze metrics, logs, and traces across thousands of source accounts and regions without requiring complex manual data pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html",
    tags: ["Unified Observability","Cross-Account Observability","Security Compliance"]
  },
  {
    id: "aws-dop-424",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account Cross-Region CloudWatch Dashboards: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to provide leadership and operations teams a unified single-pane-of-glass observability dashboard across all corporate AWS accounts and regions.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Enable CloudWatch cross-account observability, with a monitoring account and unified dashboards." },
      { id: 'B', text: "Stream each account's metrics to a central account with a metric stream and Firehose." },
      { id: 'C', text: "Grant a central role read access to each account and query the metrics through it." },
      { id: 'D', text: "Publish a copy of each service's key metrics into one account as custom metrics." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch cross-account cross-region observability by sharing monitoring accounts with source accounts and building unified dashboards. CloudWatch cross-account cross-region observability allows designated monitoring accounts to seamlessly search, visualize, and analyze metrics, logs, and traces across thousands of source accounts and regions without requiring complex manual data pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html",
    tags: ["Unified Observability","Cross-Account Observability","Hybrid Migration"]
  },
  {
    id: "aws-dop-425",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account Cross-Region CloudWatch Dashboards: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to provide leadership and operations teams a unified single-pane-of-glass observability dashboard across all corporate AWS accounts and regions.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Enable CloudWatch cross-account observability, with a monitoring account and unified dashboards." },
      { id: 'B', text: "Stream each account's metrics to a central account with a metric stream and Firehose." },
      { id: 'C', text: "Grant a central role read access to each account and query the metrics through it." },
      { id: 'D', text: "Publish a copy of each service's key metrics into one account as custom metrics." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable CloudWatch cross-account cross-region observability by sharing monitoring accounts with source accounts and building unified dashboards. CloudWatch cross-account cross-region observability allows designated monitoring accounts to seamlessly search, visualize, and analyze metrics, logs, and traces across thousands of source accounts and regions without requiring complex manual data pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html",
    tags: ["Unified Observability","Cross-Account Observability","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_17;
