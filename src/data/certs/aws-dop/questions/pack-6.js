export const AWS_DOP_QUESTIONS_6 = [
  {
    id: "aws-dop-126",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #25",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #25?",
    options: [
      { id: 'A', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'B', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'C', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'D', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-127",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #26",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #26?",
    options: [
      { id: 'A', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'D', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-128",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #27",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #27?",
    options: [
      { id: 'A', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'D', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-129",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #28",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #28?",
    options: [
      { id: 'A', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'B', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'C', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'D', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-130",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #29",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #29?",
    options: [
      { id: 'A', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'D', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-131",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #30",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #30?",
    options: [
      { id: 'A', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'D', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-132",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #31",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #31?",
    options: [
      { id: 'A', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'B', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'C', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'D', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-133",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #32",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #32?",
    options: [
      { id: 'A', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'B', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'C', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'D', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-134",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #33",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #33?",
    options: [
      { id: 'A', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'D', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-135",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #34",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #34?",
    options: [
      { id: 'A', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'B', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'C', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" },
      { id: 'D', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-136",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Resilient Cloud Solutions Scenario #35",
    scenario: "A DevOps team is architecting fault-tolerant distributed systems capable of surviving zone outages and traffic spikes without degradation.",
    question: "Which architecture provides optimal resilience and high availability for scenario #35?",
    options: [
      { id: 'A', text: "Multi-region active-passive, with Route 53 health checks failing traffic across" },
      { id: 'B', text: "Multi-AZ behind a Network Load Balancer, with a fixed-size fleet in each zone" },
      { id: 'C', text: "Single-AZ behind an Application Load Balancer, with a warm standby in a second zone" },
      { id: 'D', text: "Multi-AZ behind an Application Load Balancer, with auto-healing Auto Scaling groups" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Resilient cloud architectures in AWS require distributing stateless application tiers across multiple Availability Zones with automated health checks, target tracking scaling policies, and managed multi-AZ database backends.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html",
    tags: ["Resilience", "High Availability", "Auto Scaling"]
  },
  {
    id: "aws-dop-137",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Metric Filters for Error Extraction",
    scenario: "A legacy monolithic application writes application log files containing JSON error objects with a status code field to Amazon CloudWatch Logs. The operations team needs to trigger an alarm whenever the count of log events with status code 500 exceeds 10 occurrences in a 5-minute window.",
    question: "How should this metric be created and monitored?",
    options: [
      { id: 'A', text: "Stream the entire log group to an on-premises Syslog server over the public internet" },
      { id: 'B', text: "A metric filter on the status field publishing a metric, with an alarm on it" },
      { id: 'C', text: "Configure an EC2 user data script to grep local log files and reboot the instance upon errors" },
      { id: 'D', text: "Write a Lambda function that downloads all logs from CloudWatch every minute and writes an email" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudWatch Logs metric filters evaluate incoming log streams in real time against search patterns or JSON expressions (e.g. { $.status = 500 }). When matching events are detected, the filter automatically increments a numerical CloudWatch metric, which can then be monitored by standard CloudWatch alarms.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html",
    tags: ["CloudWatch", "Metric Filters", "Logging", "Alarms"]
  },
  {
    id: "aws-dop-138",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Distributed Tracing for Microservices",
    scenario: "An enterprise runs a distributed microservices platform composed of Amazon API Gateway, AWS Lambda, Amazon SQS, and Amazon DynamoDB. Customers report intermittent high latency, but individual service metrics appear normal.",
    question: "Which observability solution enables engineers to visualize end-to-end request latency, identify bottlenecks, and inspect execution service maps across all microservice hops?",
    options: [
      { id: 'A', text: "X-Ray with active tracing on the gateway and functions, propagating the header" },
      { id: 'B', text: "VPC Flow Logs enabled on the primary NAT Gateway network interfaces" },
      { id: 'C', text: "AWS Trusted Advisor security check reports emailed weekly to engineering leads" },
      { id: 'D', text: "Amazon CloudWatch Basic Monitoring enabled on the underlying EC2 host instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS X-Ray provides distributed tracing and performance analysis for modern cloud applications. By enabling active tracing and instrumenting code with the X-Ray SDK, X-Ray collects trace data across service boundaries (API Gateway → Lambda → SQS → DynamoDB) and renders a visual service map pinpointing latency spikes.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
    tags: ["X-Ray", "Distributed Tracing", "Observability", "Latency"]
  },
  {
    id: "aws-dop-139",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Preventing Alarm Storms with Amazon CloudWatch Composite Alarms",
    scenario: "An e-commerce platform runs 100 microservices on Amazon ECS behind an Application Load Balancer. During network blips or database maintenance, dozens of individual service alarms (CPU, memory, HTTP 5xx, response latency) trigger simultaneously, flooding on-call engineers with hundreds of SMS and pager notifications.",
    question: "How should the DevOps engineer restructure the alarm architecture to consolidate notifications and eliminate alarm fatigue?",
    options: [
      { id: 'A', text: "Increase the evaluation period of all CloudWatch alarms from 1 minute to 60 minutes" },
      { id: 'B', text: "Composite alarms combining the metric alarms with boolean logic, paging on those" },
      { id: 'C', text: "Use CloudWatch Anomaly Detection on all metrics with a threshold band of 5 standard deviations" },
      { id: 'D', text: "Configure an SQS queue in front of Amazon SNS to deduplicate incoming alarm messages based on message body hash" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudWatch Composite Alarms allow combining multiple individual metric alarms using boolean expressions (e.g., 'ALARM(Target5xxAlarm) AND NOT ALARM(MaintenanceModeAlarm)'). By attaching SNS notification actions strictly to the composite alarm rather than individual underlying alarms, on-call teams receive a single aggregated notification only when the holistic failure condition is satisfied, preventing alarm floods.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "CompositeAlarms", "Observability"]
  },
  {
    id: "aws-dop-140",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Real-Time Streaming of CloudWatch Logs to Amazon OpenSearch Service",
    scenario: "A financial application writes JSON-formatted transaction logs to Amazon CloudWatch Logs. The security and analytics teams need these logs indexed in an Amazon OpenSearch Service cluster within 10 seconds of creation for real-time fraud investigation, with automated transformation of sensitive credit card fields.",
    question: "Which streaming architecture delivers near real-time ingestion with transformation and failure resilience?",
    options: [
      { id: 'A', text: "Write a scheduled cron job running every minute on an EC2 instance that runs CloudWatch Logs Insights queries and pushes results to OpenSearch" },
      { id: 'B', text: "Configure an EventBridge rule matching CloudWatch Logs events and invoke a synchronous Lambda function to insert documents directly into OpenSearch" },
      { id: 'C', text: "A subscription filter to Firehose, with a Lambda masking the data before it lands" },
      { id: 'D', text: "Export the CloudWatch Logs log group to Amazon S3 daily using the CreateExportTask API, and ingest from S3 using Logstash" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Logs Subscription Filters stream log events in real time to Amazon Kinesis Data Firehose. Kinesis Data Firehose supports native inline Lambda data transformations (ideal for parsing, filtering, and masking sensitive fields) and delivers directly into Amazon OpenSearch Service with automated buffering, retries, and an S3 backup bucket for records that fail indexing.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "OpenSearch", "Firehose"]
  },
  {
    id: "aws-dop-141",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "High-Cardinality Traffic Analysis with CloudWatch Contributor Insights",
    scenario: "An API Gateway fronting a DynamoDB table experiences intermittent HTTP 429 throttling spikes during peak business hours. The operations team needs to identify which specific client IP addresses or API keys are generating the disproportionate request volume in real time without querying terabytes of raw logs in Athena.",
    question: "Which CloudWatch feature provides real-time identification of top talkers and outliers?",
    options: [
      { id: 'A', text: "CloudWatch Metric Math applying the RATE and SEARCH functions across access logs" },
      { id: 'B', text: "AWS X-Ray service map filtering by client response time" },
      { id: 'C', text: "Contributor Insights on the access logs, ranking the top clients by request count" },
      { id: 'D', text: "CloudWatch Anomaly Detection configured on the API Gateway 4XXError metric" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Contributor Insights analyzes time-series log data to find the 'top talkers', heavy hitters, or outlier contributors across high-cardinality datasets (such as IP addresses, customer IDs, or URL paths). Setting up a Contributor Insights rule on API Gateway access logs instantly generates real-time graphs of the top contributors driving request counts and error spikes.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "ContributorInsights", "APIGateway"]
  },
  {
    id: "aws-dop-142",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Optimizing CloudWatch Custom Metrics Ingestion with Embedded Metric Format (EMF)",
    scenario: "A high-throughput serverless application on AWS Lambda generates millions of business transactions per hour. The engineering team wants to record custom business metrics (order value, item count, payment gateway latency) with high-dimensional metadata in CloudWatch without incurring throttling on the PutMetricData API or adding latency to Lambda execution.",
    question: "Which architecture pattern accomplishes this with the lowest cost and zero added API overhead?",
    options: [
      { id: 'A', text: "Call the PutMetricData API synchronously inside the Lambda function for every transaction using the AWS SDK" },
      { id: 'B', text: "Send metrics over TCP to an Amazon EC2 instance running a StatsD daemon that batches PutMetricData calls" },
      { id: 'C', text: "Print Embedded Metric Format events to stdout, from which CloudWatch extracts metrics" },
      { id: 'D', text: "Write metrics to an Amazon SQS queue and deploy a dedicated consumer fleet of EC2 instances to call PutMetricData" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Embedded Metric Format (EMF) allows applications to generate custom metrics asynchronously simply by printing structured JSON logs to stdout. The CloudWatch service automatically parses EMF logs, extracts the declared metrics and dimensions, and emits them into CloudWatch Metrics. This completely eliminates PutMetricData API calls, avoiding API throttling and reducing Lambda runtime duration and cost.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "EMF", "Lambda"]
  },
  {
    id: "aws-dop-143",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Distributed Tracing with AWS X-Ray: Annotations vs. Metadata",
    scenario: "A distributed microservice architecture uses AWS X-Ray for tracing requests across API Gateway, Lambda, and DynamoDB. Developers need to record customer account IDs and internal debug payloads in trace segments. Developers must be able to filter and search traces by customer account ID in the X-Ray console, while debug payloads do not require indexing.",
    question: "How should the developers record these two data elements in the X-Ray trace segments?",
    options: [
      { id: 'A', text: "Record customer account IDs as X-Ray Metadata and debug payloads as X-Ray Annotations" },
      { id: 'B', text: "Pass both values as HTTP custom headers in the trace header string (X-Amzn-Trace-Id)" },
      { id: 'C', text: "Write both customer account IDs and debug payloads to CloudWatch Logs with custom metric filters" },
      { id: 'D', text: "Record the account id as an X-Ray annotation, and the debug payload as metadata" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In AWS X-Ray, 'Annotations' are key-value pairs that are indexed by the X-Ray service, allowing developers to filter and search traces using filter expressions in the console or CLI (e.g., 'annotation.AccountId = \"12345\"'). 'Metadata' consists of key-value pairs that can contain any object or serialized JSON payload for diagnostic inspection, but are not indexed for searching.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["XRay", "Tracing", "Observability"]
  },
  {
    id: "aws-dop-144",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Cross-Account and Cross-Region Observability with CloudWatch OAM",
    scenario: "An enterprise operates 200 AWS member accounts across 4 regions in an AWS Organization. The central Site Reliability Engineering (SRE) team needs a unified, single-pane-of-glass dashboard to view metrics, search CloudWatch Logs, and inspect X-Ray traces across all accounts and regions without constantly switching IAM roles.",
    question: "Which native AWS capability provides this cross-account observability architecture?",
    options: [
      { id: 'A', text: "CloudWatch cross-account observability through Observability Access Manager links" },
      { id: 'B', text: "Deploy an Amazon S3 replication rule that copies log archives to a central S3 bucket and run Athena queries" },
      { id: 'C', text: "Write a custom script using Boto3 that assumes IAM roles in all 200 accounts every 5 minutes and pushes metrics into a central account" },
      { id: 'D', text: "Deploy an Amazon OpenSearch Service cluster in each account and establish cross-cluster VPC peering connections" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch Cross-Account Observability (powered by AWS Observability Access Manager - OAM) enables centralized monitoring across an entire AWS Organization. By configuring an OAM 'Sink' in a central monitoring account and defining 'Links' in source accounts, the central account can seamlessly search, analyze, and correlate metrics, logs, and X-Ray traces from all linked accounts on unified dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "OAM", "CrossAccount"]
  },
  {
    id: "aws-dop-145",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Monitoring Sub-Minute Spikes with CloudWatch High-Resolution Metrics and Alarms",
    scenario: "A high-frequency algorithmic trading microservice experiences micro-bursts of CPU starvation lasting 5–10 seconds that degrade trade execution. Standard 1-minute CloudWatch metrics average out the spikes, concealing the degradation. The SRE team needs alerts to fire within 15 seconds of a spike occurring.",
    question: "Which CloudWatch configuration detects and alerts on these micro-bursts?",
    options: [
      { id: 'A', text: "Publish the metric at one-second resolution and alarm on a 10-second period" },
      { id: 'B', text: "Deploy an EC2 cron job that checks top output every 5 seconds and sends an email via Amazon SES" },
      { id: 'C', text: "Enable CloudWatch Detailed Monitoring on the EC2 instances" },
      { id: 'D', text: "Set the CloudWatch metric period to 60 seconds with an evaluation count of 1 datapoint" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Standard CloudWatch metrics have a minimum resolution of 1 minute. CloudWatch High-Resolution Metrics support sub-minute intervals down to 1 second (by setting 'StorageResolution: 1' during PutMetricData). High-resolution alarms can be configured with periods of 10, 20, or 30 seconds, allowing alerts to trigger within seconds of an incident rather than minutes.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "HighResolution", "Alarms"]
  },
  {
    id: "aws-dop-146",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Tracing Containerized Applications with AWS Distro for OpenTelemetry (ADOT)",
    scenario: "A company is migrating microservices from proprietary vendor agents to open-source OpenTelemetry standards on Amazon EKS. The team wants to collect distributed traces, metrics, and logs from container pods and route traces directly to AWS X-Ray and metrics to Amazon Managed Service for Prometheus (AMP).",
    question: "Which architecture pattern fulfills this requirement natively on EKS?",
    options: [
      { id: 'A', text: "Configure application pods to write trace files to an Amazon EFS volume shared with a central monitoring server" },
      { id: 'B', text: "The ADOT collector as a DaemonSet, with the OTLP receiver and an X-Ray exporter" },
      { id: 'C', text: "Use Amazon CloudWatch Synthetics canaries to probe pod endpoints over localhost" },
      { id: 'D', text: "Install the legacy AWS X-Ray daemon and CloudWatch agent as separate EC2 host agents on worker nodes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Distro for OpenTelemetry (ADOT) is an AWS-supported distribution of the OpenTelemetry project. The ADOT Collector can be deployed on Amazon EKS as an EKS add-on, DaemonSet, or sidecar. It receives traces and metrics via the standard OTLP protocol and uses built-in exporters to send traces to AWS X-Ray and metrics to Amazon Managed Service for Prometheus (AMP).",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EKS", "OpenTelemetry", "XRay"]
  },
  {
    id: "aws-dop-147",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Detecting Baseline Deviations with CloudWatch Anomaly Detection",
    scenario: "A payment processing API experiences severe diurnal and weekly cyclical traffic patterns: request volumes peak during business hours on weekdays and drop drastically on weekends. Static threshold alarms for request count generate false alarms every Saturday night and fail to catch abnormal drops on Tuesday mornings.",
    question: "Which CloudWatch Alarm configuration automatically adapts to these cyclical variations?",
    options: [
      { id: 'A', text: "Configure two static alarms: one evaluated during weekdays and one evaluated during weekends" },
      { id: 'B', text: "Set the alarm evaluation period to 7 days (10,080 minutes) to average out weekly cyclicality" },
      { id: 'C', text: "Anomaly detection on the request count, alarming when the band is breached" },
      { id: 'D', text: "Create a Lambda function that modifies the static alarm threshold twice daily via the PutMetricAlarm API" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Anomaly Detection applies machine learning algorithms to past metric history to model normal patterns (accounting for hourly, daily, and weekly seasonality). It produces an expected dynamic band. When configuring an alarm using Anomaly Detection, you specify whether to trigger when the metric falls below the lower band, exceeds the upper band, or exits both bands, eliminating false alarms on cyclical workloads.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "AnomalyDetection", "Alarms"]
  },
  {
    id: "aws-dop-148",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Data Protection: Automated PII Masking",
    scenario: "A healthcare provider's microservices inadvertently log Patient Health Information (PHI) including US Social Security Numbers and passport numbers into Amazon CloudWatch Logs. Compliance mandates that this sensitive data must be automatically masked at ingestion so developers querying logs in the console cannot view unmasked identifiers.",
    question: "Which native CloudWatch Logs capability meets this compliance requirement?",
    options: [
      { id: 'A', text: "Export all logs to S3 Glacier Deep Archive and restrict S3 console access" },
      { id: 'B', text: "Write a custom bash script running on EC2 to grep and redact strings before logs reach stdout" },
      { id: 'C', text: "A Logs data protection policy with the managed identifiers for those fields" },
      { id: 'D', text: "Deploy an AWS WAF rule that blocks HTTP requests containing numbers with 9 digits" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Logs Data Protection uses pattern matching and machine learning to detect and protect sensitive data (such as SSNs, credit cards, email addresses, and passport numbers) logged to CloudWatch Logs. By configuring a Data Protection Policy on the log group, sensitive data identifiers are automatically masked in real time across CloudWatch Logs console, Live Tail, and Insights queries.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "DataProtection", "Compliance"]
  },
  {
    id: "aws-dop-149",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Granular X-Ray Trace Sampling Rules to Reduce Cost and Overhead",
    scenario: "A public web application handles 50,000 requests per second. Running active AWS X-Ray tracing on 100% of requests generates immense cost and unnecessary trace volume. The DevOps architect wants to ensure that critical checkout API calls ('/checkout/*') record 50 traces per second plus 10% of additional calls, while health check calls ('/healthz') are never traced.",
    question: "How should the architect configure sampling in AWS X-Ray?",
    options: [
      { id: 'A', text: "Hardcode sampling configuration inside individual application microservice source code files" },
      { id: 'B', text: "Configure an API Gateway throttle limit of 50 RPS on the checkout resource" },
      { id: 'C', text: "X-Ray sampling rules: a zero-rate rule for the health path, and a higher-priority rule for the rest" },
      { id: 'D', text: "Deploy a custom Lambda function that inspects incoming HTTP headers and drops traces before sending to the daemon" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS X-Ray Sampling Rules allow centralized control over trace collection without code changes. Rules are evaluated in priority order. By creating a rule for '/healthz' with ReservoirSize=0 and FixedRate=0, health check traces are ignored. A subsequent rule for '/checkout/*' with ReservoirSize=50 (guarantees 50 traces per second) and FixedRate=0.10 (samples 10% of additional requests) captures adequate diagnostic data while controlling costs.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["XRay", "Sampling", "CostOptimization"]
  },
  {
    id: "aws-dop-150",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Monitoring EKS Workloads with CloudWatch Container Insights and Prometheus",
    scenario: "A DevOps team needs to collect deep container-level performance metrics (memory limits, throttling, node disk utilization) and application-level Prometheus metrics from an Amazon EKS cluster, visualizing them on pre-built dashboards in the CloudWatch console.",
    question: "What is the recommended installation pattern for EKS Container Insights?",
    options: [
      { id: 'A', text: "Run cfn-init on EC2 worker nodes to install collectd and query the kubelet API over HTTP" },
      { id: 'B', text: "The CloudWatch Observability EKS add-on, with Container Insights enabled" },
      { id: 'C', text: "Configure worker nodes to send syslog events to an external Nagios server" },
      { id: 'D', text: "Deploy a Lambda function in the cluster VPC that runs kubectl top nodes every 10 seconds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudWatch Container Insights collects, aggregates, and summarizes metrics and logs from containerized applications on ECS and EKS. For Amazon EKS, AWS provides the 'Amazon CloudWatch Observability' EKS add-on. This installs the CloudWatch agent and Fluent Bit DaemonSets, automatically scraping container metrics, node performance, and custom Prometheus metrics.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EKS", "ContainerInsights", "CloudWatch"]
  }
];

export default AWS_DOP_QUESTIONS_6;
