export const AWS_DOP_QUESTIONS_7 = [
  {
    id: "aws-dop-151",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Real-Time Log Stream Inspection with CloudWatch Logs Live Tail",
    scenario: "During a production deployment of a payment gateway service, developers report intermittent connection timeouts. The engineering team needs to view and filter log events from multiple container instances in real time as they are generated, matching specific error strings ('Connection refused') without waiting for query batches.",
    question: "Which CloudWatch Logs feature provides interactive real-time log streaming in the console and CLI?",
    options: [
      { id: 'A', text: "Amazon S3 Select on exported log files" },
      { id: 'B', text: "CloudWatch Metric Filters" },
      { id: 'C', text: "CloudWatch Logs Insights query in batch mode" },
      { id: 'D', text: "CloudWatch Logs Live Tail" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudWatch Logs Live Tail provides an interactive, low-latency streaming view of log events as they are ingested into CloudWatch Logs. Engineers can select multiple log groups, specify pattern filters (e.g., 'Connection refused'), and view matching log lines in real time within the AWS Management Console or AWS CLI.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "LiveTail", "Troubleshooting"]
  },
  {
    id: "aws-dop-152",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Metric Math for Calculating Dynamic Error Rates in CloudWatch Alarms",
    scenario: "A web application's traffic varies between 100 requests per minute at night and 100,000 requests per minute during midday. An alarm that triggers on raw HTTP 5xx error count fails because 50 errors is normal at 100,000 requests (0.05%), but catastrophic at 100 requests (50%). The alarm must trigger only when HTTP 5xx errors exceed 1% of total requests.",
    question: "How can the DevOps engineer create an alarm based on error percentage?",
    options: [
      { id: 'A', text: "Create an SQS dead-letter queue and monitor the ApproximateNumberOfMessagesVisible metric" },
      { id: 'B', text: "Use CloudWatch Metric Math to calculate '(m1 / m2) * 100' (where m1 is HTTP 5xx count and m2 is total request count) and set the alarm threshold to 1.0" },
      { id: 'C', text: "Deploy an AWS WAF rate-based rule set to 100 requests per 5 minutes" },
      { id: 'D', text: "Configure an ALB listener rule to redirect 5xx responses to an error tracking Lambda function" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudWatch Metric Math enables querying multiple CloudWatch metrics and using math expressions to generate new time series. By referencing the HTTP 5xx metric (m1) and total HTTP request count (m2), the math expression '(m1 / m2) * 100' dynamically calculates the error rate percentage regardless of overall traffic volume.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "MetricMath", "Alarms"]
  },
  {
    id: "aws-dop-153",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray Subsegments in Multi-Threaded and Async Functions",
    scenario: "An AWS Lambda function processes order events by calling an external payment API, writing to DynamoDB, and publishing to Amazon SNS concurrently in separate worker threads. In the X-Ray console, only the overall Lambda duration appears, without details on the timing of the external payment API or database calls.",
    question: "How should the developers instrument the application code to capture individual downstream call latencies?",
    options: [
      { id: 'A', text: "Attach an IAM policy with xray:PutTraceSegments to the Lambda execution role" },
      { id: 'B', text: "Print the start and end timestamp of each call to stdout using standard logging" },
      { id: 'C', text: "Use the AWS X-Ray SDK to create custom subsegments around each downstream HTTP and database call, passing the trace context into the worker threads" },
      { id: 'D', text: "Increase the Lambda memory size to 10 GB to allow X-Ray to sample faster" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS X-Ray records execution details in 'segments' and 'subsegments'. Subsegments provide granular timing breakdown and metadata for downstream calls (HTTP requests, database operations, external APIs). In multi-threaded or asynchronous code, developers use the X-Ray SDK to explicitly capture and pass the parent segment context to child worker threads and open/close subsegments around each operation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["XRay", "Subsegments", "Lambda"]
  },
  {
    id: "aws-dop-154",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Insights: Identifying Slowest Database Queries",
    scenario: "An Amazon Aurora PostgreSQL database outputs slow query logs to Amazon CloudWatch Logs. An operational review requires finding the 10 slowest queries by average execution time over the past 24 hours, grouped by query fingerprint.",
    question: "Which tool and approach should the operations engineer use to analyze the logs quickly without provisioning external infrastructure?",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter that extracts duration into a custom metric" },
      { id: 'B', text: "Stream logs to Amazon Kinesis and write an Apache Flink application in Kinesis Data Analytics" },
      { id: 'C', text: "Use CloudWatch Logs Insights and execute a query parsing the query duration, aggregating with avg(duration) as avg_dur by query, sorting by avg_dur desc, and limiting to 10" },
      { id: 'D', text: "Download all log files to an EC2 instance and run a Python script with pandas" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon CloudWatch Logs Insights is a fully managed, interactive query engine for CloudWatch Logs. It features a purpose-built query syntax supporting fields extraction, statistical aggregations ('stats avg(duration) by query'), filtering, and sorting ('sort avg_dur desc | limit 10') across gigabytes of log data in seconds with zero infrastructure to manage.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "LogsInsights", "Database"]
  },
  {
    id: "aws-dop-155",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Monitoring Serverless Latency and Cold Starts with Lambda Insights",
    scenario: "A microservices platform consists of 40 AWS Lambda functions invoked synchronously by Amazon API Gateway. Users report periodic high latency. The operations team needs to correlate high latency with Lambda cold starts, memory usage spikes, and CPU throttling across all functions.",
    question: "Which AWS feature provides out-of-the-box system-level performance monitoring for Lambda functions?",
    options: [
      { id: 'A', text: "Configure AWS CloudTrail data events on Lambda invoke calls" },
      { id: 'B', text: "Write custom Python logging code to measure time elapsed between function entry and exit" },
      { id: 'C', text: "Enable CloudWatch Lambda Insights on the Lambda functions via the Lambda Insights extension layer" },
      { id: 'D', text: "Deploy an EC2 instance running Prometheus to ping Lambda functions continuously" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Lambda Insights is a monitoring and troubleshooting solution for serverless applications on AWS Lambda. It collects, aggregates, and summarizes system-level metrics including CPU time, memory usage, disk utilization, network traffic, and cold start duration by attaching a lightweight Lambda extension layer, surfacing insights on pre-built serverless dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Lambda", "LambdaInsights", "CloudWatch"]
  },
  {
    id: "aws-dop-156",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Alerting on Missing Log Heartbeats with CloudWatch Metric Alarms",
    scenario: "A critical on-premises batch processing agent uploads a heartbeat log line ('AGENT_STATUS: OK') to Amazon CloudWatch Logs every 5 minutes. If the agent crashes or network connectivity fails, no logs are uploaded. The on-call team must be alerted within 10 minutes if the heartbeat stops.",
    question: "How should the CloudWatch Metric Filter and Alarm be configured to detect the absence of logs?",
    options: [
      { id: 'A', text: "Configure the alarm with TreatMissingData set to 'ignore' and threshold >= 1" },
      { id: 'B', text: "Configure an Amazon EventBridge scheduled rule that checks the S3 bucket size every 5 minutes" },
      { id: 'C', text: "Create a metric filter that assigns a default value of 1 and set TreatMissingData to 'notBreaching'" },
      { id: 'D', text: "Create a metric filter counting occurrences of 'AGENT_STATUS: OK', and configure the CloudWatch alarm with TreatMissingData set to 'breaching' and a threshold < 1 over two 5-minute evaluation periods" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When monitoring for the cessation of an expected event (such as a heartbeat), metric filters emit datapoints only when logs arrive; if no logs arrive, CloudWatch receives missing data. By configuring the CloudWatch Alarm with 'TreatMissingData: breaching' (or 'TreatMissingData: bad'), CloudFormation/CloudWatch treats the lack of incoming data as an alarm breach, firing the notification when the heartbeat ceases.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "Alarms", "TreatMissingData"]
  },
  {
    id: "aws-dop-157",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Synthetics Canary: Validating Multi-Step User Checkout Flows",
    scenario: "An online retail site wants to ensure that its user login, shopping cart addition, and checkout payment workflows are operating successfully 24/7 across multiple geographic regions, even during low-traffic periods when few real customers are active.",
    question: "Which service capability provides automated end-to-end user workflow simulation?",
    options: [
      { id: 'A', text: "AWS WAF Bot Control rules configured in count mode" },
      { id: 'B', text: "CloudWatch Metric Filters searching for HTTP 200 in access logs" },
      { id: 'C', text: "Route 53 DNS health checks querying the homepage HTTP status code" },
      { id: 'D', text: "CloudWatch Synthetics GUI Workflow Canaries running Node.js Puppeteer or Python Selenium scripts on scheduled intervals" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon CloudWatch Synthetics canaries are configurable scripts that run on a schedule to monitor endpoints and APIs. GUI workflow canaries use headless browsers (Node.js Puppeteer or Python Selenium) running inside AWS Lambda to simulate user clicks, text input, form submissions, and multi-step transactions, capturing screenshots, network HAR files, and execution logs upon failure.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "Synthetics", "Testing"]
  },
  {
    id: "aws-dop-158",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Real-Time Security Event Correlation using CloudWatch Logs Subscription to Lambda",
    scenario: "A security operations team requires immediate automated isolation of EC2 instances that generate specific Linux kernel exploit logs (e.g., 'kernel: exploit attempt detected'). The response must isolate the instance security group within 15 seconds of the log entry appearing.",
    question: "Which event-driven architecture fulfills this sub-minute response SLA?",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs Subscription Filter on the /var/log/messages log group matching the exploit pattern, targeting an AWS Lambda function that modifies the instance security group to an isolation security group" },
      { id: 'B', text: "Use an AWS Systems Manager State Manager association scheduled to run every 2 hours" },
      { id: 'C', text: "Configure an AWS Config rule evaluated on 24-hour configuration changes" },
      { id: 'D', text: "Configure Amazon Athena to run an hourly query on CloudWatch log exports in S3 and invoke Lambda via SNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Logs Subscription Filters provide real-time streaming directly to an AWS Lambda function with sub-second latency. When the log entry containing the exploit signature arrives at CloudWatch Logs, the subscription filter immediately triggers the Lambda function with the compressed log batch, allowing the function to extract the EC2 instance ID and quarantine it instantly.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "Lambda", "Security"]
  },
  {
    id: "aws-dop-159",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Auditing VPC Flow Logs with CloudWatch Logs Insights",
    scenario: "A security audit requires analyzing VPC Flow Logs across three production VPCs to identify rejected inbound SSH connection attempts (port 22) grouped by source IP address over the last 7 days.",
    question: "How can the security engineer efficiently retrieve this summary without extracting logs to external systems?",
    options: [
      { id: 'A', text: "Execute a query in CloudWatch Logs Insights on the VPC Flow Log group: 'filter dstPort = 22 and action = \"REJECT\" | stats count(*) as rejections by srcAddr | sort rejections desc'" },
      { id: 'B', text: "Configure an Amazon EventBridge rule matching VPC Flow Log creation events" },
      { id: 'C', text: "Download all VPC Flow Log gzip archives from S3 and write a grep script on a local workstation" },
      { id: 'D', text: "Enable AWS GuardDuty and wait for an SSH brute-force finding to appear in Security Hub" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch Logs Insights parses standard VPC Flow Log fields (action, srcAddr, dstAddr, dstPort, protocol) automatically. By querying 'filter dstPort = 22 and action = \"REJECT\" | stats count(*) as rejections by srcAddr | sort rejections desc', CloudWatch Logs Insights scans and aggregates the rejection counts by IP address in seconds.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["VPC", "FlowLogs", "LogsInsights"]
  },
  {
    id: "aws-dop-160",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centrally Managing CloudWatch Agent Configurations with SSM Parameter Store",
    scenario: "A fleet of 500 Linux and Windows Amazon EC2 instances needs the CloudWatch unified agent deployed to collect custom disk and memory metrics, as well as application log files. The operations team needs to update the agent configuration file centrally without logging into individual instances.",
    question: "How should the operations team store and distribute the CloudWatch agent configuration?",
    options: [
      { id: 'A', text: "Embed the configuration in an Amazon Machine Image (AMI) and deploy an ASG instance refresh" },
      { id: 'B', text: "Hardcode the configuration file inside the EC2 user data script and reboot all instances" },
      { id: 'C', text: "Upload the configuration to an S3 bucket and run a cron job on instances that downloads it daily" },
      { id: 'D', text: "Store the CloudWatch Agent JSON configuration file in AWS Systems Manager Parameter Store, and use the AmazonCloudWatch-ManageAgent SSM document to apply the configuration across instances" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The unified Amazon CloudWatch agent integrates natively with AWS Systems Manager. Administrators store the JSON configuration file in Systems Manager Parameter Store (e.g., 'AmazonCloudWatch-linux-config'). The agent can then be installed, configured, or updated across hundreds of instances simultaneously using the pre-defined SSM document 'AmazonCloudWatch-ManageAgent' without manual instance intervention.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "SystemsManager", "EC2"]
  },
  {
    id: "aws-dop-161",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Correlating Logs, Metrics, and Traces with CloudWatch ServiceLens",
    scenario: "During an application outage, the on-call engineer sees an alarm for high latency on an order processing API. The engineer needs to trace the slow request through API Gateway to a Lambda function, identify the specific DynamoDB query that stalled, and view the corresponding Lambda execution log lines in a single integrated view.",
    question: "Which AWS observability capability integrates metrics, logs, and distributed traces into a unified service map?",
    options: [
      { id: 'A', text: "Amazon CloudWatch ServiceLens" },
      { id: 'B', text: "AWS CloudTrail Event History" },
      { id: 'C', text: "Amazon QuickSight dashboard" },
      { id: 'D', text: "AWS Config timeline view" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch ServiceLens integrates Amazon CloudWatch metrics and logs with AWS X-Ray distributed traces. It provides a visual service map showing service dependencies, error rates, and latencies. Clicking any node or edge allows drilling down directly from metrics into specific outlier traces and viewing the exact CloudWatch Logs for that trace in context.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "ServiceLens", "XRay"]
  },
  {
    id: "aws-dop-162",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Retention Policies and Automated Archive Lifecycle",
    scenario: "An enterprise generates 10 TB of application logs daily in CloudWatch Logs. Audit compliance mandates retaining logs for 7 years, but keeping 10 TB/day in active CloudWatch Logs storage indefinitely is cost-prohibitive. Active search is only required for the most recent 30 days.",
    question: "Which lifecycle architecture minimizes storage costs while meeting compliance requirements?",
    options: [
      { id: 'A', text: "Set CloudWatch Logs retention to Never Expire and request an AWS enterprise discount" },
      { id: 'B', text: "Delete log groups every 30 days and instruct developers to write logs to local /tmp directories" },
      { id: 'C', text: "Set the CloudWatch Logs retention period to 30 days on log groups, and stream logs via a Subscription Filter to Kinesis Data Firehose which archives them to an Amazon S3 bucket with S3 Lifecycle rules transitioning objects to S3 Glacier Deep Archive after 30 days" },
      { id: 'D', text: "Write a monthly cron job that uses the AWS CLI to export logs to EBS volumes attached to a management instance" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon CloudWatch Logs storage costs ($0.03/GB) are significantly higher than Amazon S3 Glacier Deep Archive ($0.00099/GB). By setting a 30-day retention on CloudWatch log groups and continuously exporting or streaming logs via Kinesis Data Firehose to Amazon S3, an S3 Lifecycle rule can automatically transition log objects to S3 Glacier Flexible or Deep Archive for long-term 7-year storage at minimal cost.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "S3", "CostOptimization"]
  },
  {
    id: "aws-dop-163",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Application Performance Monitoring with CloudWatch Application Signals",
    scenario: "A DevOps team wants to standardize Service Level Objectives (SLOs) and Service Level Indicators (SLIs) for microservices running on Amazon EKS and ECS (e.g., 99.9% of payment requests must succeed with latency < 200ms) without manually authoring dozens of complex metric math expressions.",
    question: "Which CloudWatch capability automatically discovers services and tracks SLO/SLI performance?",
    options: [
      { id: 'A', text: "Amazon Inspector" },
      { id: 'B', text: "Amazon CloudWatch Application Signals" },
      { id: 'C', text: "AWS Systems Manager Explorer" },
      { id: 'D', text: "AWS Budgets Alerts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudWatch Application Signals is an application performance monitoring (APM) feature that automatically discovers services and standardizes the collection of golden signals (volume, latency, errors, faults). It provides built-in tools to create, manage, and monitor Service Level Objectives (SLOs) and evaluate SLI compliance automatically.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "ApplicationSignals", "SLO"]
  },
  {
    id: "aws-dop-164",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Handling CloudWatch PutMetricData Rate Limits with Request Batching",
    scenario: "A fleet of microservices emits individual custom metrics to CloudWatch using the PutMetricData API. During peak traffic, instances receive 'ThrottlingException: Rate exceeded' errors from the CloudWatch API, resulting in lost monitoring metrics.",
    question: "How should the developers update the metric publishing implementation to eliminate throttling?",
    options: [
      { id: 'A', text: "Open an AWS support ticket to increase the PutMetricData API limit to 10,000,000 calls per second" },
      { id: 'B', text: "Store metrics in an Amazon DynamoDB table and query it using CloudWatch Synthetics" },
      { id: 'C', text: "Batch multiple MetricDatum objects into a single PutMetricData request (up to 1,000 metrics or 1 MB per call) and implement exponential backoff with jitter" },
      { id: 'D', text: "Send metric values over UDP to an Amazon SNS topic" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS CloudWatch PutMetricData API supports batching up to 1,000 MetricDatum items (or up to 1 MB) in a single API call. Batching metrics dramatically reduces API request volume and eliminates throttling. In addition, client SDKs should implement exponential backoff with jitter to handle temporary service contention smoothly.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "PutMetricData", "Resilience"]
  },
  {
    id: "aws-dop-165",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Tracing Asynchronous Event-Driven Architectures with AWS X-Ray",
    scenario: "An asynchronous order workflow passes messages from Amazon API Gateway through an Amazon SQS queue to an AWS Lambda function, which then publishes to Amazon SNS. The DevOps team notices that the X-Ray service map separates the API Gateway trace from the Lambda trace, showing two disconnected graphs.",
    question: "How should trace context propagation be configured across Amazon SQS?",
    options: [
      { id: 'A', text: "Configure an API Gateway WebSocket API to maintain persistent connection state" },
      { id: 'B', text: "Enable active tracing on Lambda and SQS, and ensure the producer embeds the X-Ray trace header (AWSTraceHeader) in the SQS message system attributes; Lambda extracts and continues the trace segment" },
      { id: 'C', text: "Replace Amazon SQS with an Amazon Kinesis Data Stream" },
      { id: 'D', text: "Pass the trace ID in the SQS message body JSON and manually construct a new segment with a random trace ID" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon SQS supports native X-Ray trace context propagation. When active tracing is enabled, SQS passes the X-Ray trace header in message system attributes. AWS Lambda automatically extracts the trace context from the incoming SQS event, allowing the Lambda execution segment to link directly to the upstream producer trace, creating an end-to-end continuous service map.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["XRay", "SQS", "EventDriven"]
  },
  {
    id: "aws-dop-166",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Cross-Account Dashboard Sharing for Executive Reporting",
    scenario: "A company wants to share operational CloudWatch dashboards displaying fleet availability and performance metrics with third-party executive stakeholders who do not have IAM user accounts or federated access in the AWS Organization.",
    question: "Which CloudWatch dashboard capability enables secure sharing without creating IAM credentials?",
    options: [
      { id: 'A', text: "Create a public Amazon S3 website bucket and mirror the dashboard HTML" },
      { id: 'B', text: "Grant the external stakeholders IAM AdministratorAccess credentials in a sandbox account" },
      { id: 'C', text: "Take daily screenshots of the dashboard and email them via Amazon SES" },
      { id: 'D', text: "Share the CloudWatch dashboard publicly with a passphrase or via Single Sign-On (SSO) using an external OpenID Connect (OIDC) identity provider" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon CloudWatch Dashboards support sharing dashboards with users outside of your AWS account. You can share dashboards publicly (with an optional passphrase), share with specific email addresses authenticated via Cognito/SSO, or integrate with an external OpenID Connect (OIDC) third-party identity provider, providing secure access without provisioning IAM roles or users.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "Dashboards", "Reporting"]
  },
  {
    id: "aws-dop-167",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Auditing CloudTrail Log Integrity and Delivery Delays",
    scenario: "A compliance audit requires verification that AWS CloudTrail management event logs are delivered to an Amazon S3 bucket within 15 minutes of an API event occurring, and that no log files have been tampered with, modified, or deleted after delivery.",
    question: "Which combination of CloudTrail features verifies delivery timeliness and immutability?",
    options: [
      { id: 'A', text: "Enable CloudTrail Log File Integrity Validation, enable S3 Object Lock in compliance mode on the target bucket, and monitor CloudTrail delivery metrics in CloudWatch" },
      { id: 'B', text: "Run an hourly Lambda function that compares MD5 hashes of local files against S3 objects" },
      { id: 'C', text: "Deploy an AWS Config rule that restarts CloudTrail every 24 hours" },
      { id: 'D', text: "Configure Amazon S3 server-side encryption with SSE-S3 and enable S3 versioning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudTrail Log File Integrity Validation uses SHA-256 hashing and digital signatures to generate digest files. Using the AWS CLI 'aws cloudtrail validate-logs', auditors can mathematically prove whether log files were modified, deleted, or unchanged. Combining this with Amazon S3 Object Lock (Compliance mode) prevents log alteration even by the AWS account root user.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudTrail", "Auditing", "Compliance"]
  },
  {
    id: "aws-dop-168",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Metric Filter Dimensions for Multi-Tenant Usage Tracking",
    scenario: "A SaaS application writes application logs with tenant ID and consumed units: 'TENANT: {tenantId} UNITS: {consumedUnits}'. The product management team needs individual CloudWatch metrics for each tenant to track consumption and set tenant-specific billing alarms.",
    question: "How can the DevOps team extract dynamic per-tenant metrics from the logs?",
    options: [
      { id: 'A', text: "Configure Amazon Athena to export CSV files to an S3 bucket every minute" },
      { id: 'B', text: "Create a CloudWatch Logs Metric Filter with metric dimensions, setting the dimension name to TenantId and dimension value to $tenantId extracted from the log pattern" },
      { id: 'C', text: "Stream all logs to Amazon Redshift and generate daily billing reports" },
      { id: 'D', text: "Write a separate Metric Filter for every individual tenant with hardcoded filter strings" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudWatch Logs Metric Filters support publishing metric values with up to three custom dimensions extracted directly from log fields. By configuring the Metric Filter with dimension 'TenantId = $tenantId', CloudWatch dynamically creates distinct metric series for each unique tenant, enabling per-tenant alerting and dashboards without creating hundreds of static filters.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "MetricFilters", "SaaS"]
  },
  {
    id: "aws-dop-169",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Monitoring Network Latency and Packet Loss with AWS Network Flow Monitor",
    scenario: "An enterprise hybrid application experiences intermittent network degradation between Amazon EC2 instances in an AWS Region and on-premises data centers connected via AWS Direct Connect. The network team needs to measure end-to-end packet loss and round-trip time (RTT) without installing third-party agent software.",
    question: "Which AWS feature provides native visibility into network performance across workloads?",
    options: [
      { id: 'A', text: "Amazon CloudWatch Network Flow Monitor (part of CloudWatch Network Monitor)" },
      { id: 'B', text: "AWS Trusted Advisor security checks" },
      { id: 'C', text: "Amazon GuardDuty DNS log monitoring" },
      { id: 'D', text: "Amazon Inspector network reachability package" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch Network Flow Monitor provides agentless visibility into the network health and performance of your AWS workloads. It measures round-trip time (RTT), packet retransmissions, and throughput across AWS resources and hybrid network paths, pinpointing whether degradation originates within AWS or on external hybrid links.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "Networking", "DirectConnect"]
  },
  {
    id: "aws-dop-170",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Optimizing CloudWatch Alarm Evaluation with M out of N Datapoints",
    scenario: "A high-traffic web service experiences occasional transient 1-minute network glitches where response latency briefly spikes before immediately returning to normal. A standard CloudWatch alarm with evaluation period 1 minute and datapoints to alarm 1 triggers false-alarm pages to on-call engineers multiple times per week.",
    question: "How should the alarm evaluation logic be configured to ignore single transient blips while still alerting on sustained degradation?",
    options: [
      { id: 'A', text: "Increase the alarm threshold to 10,000 milliseconds" },
      { id: 'B', text: "Disable alarm actions between 00:00 and 08:00 UTC" },
      { id: 'C', text: "Configure the alarm with an 'M out of N' evaluation rule, such as 3 out of 5 datapoints breaching the threshold within a 5-minute evaluation window" },
      { id: 'D', text: "Change the alarm metric statistic from Average to Maximum" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch alarms support 'M out of N' datapoint evaluation (e.g., 3 out of 5 periods). This requires that at least M datapoints within the last N evaluation periods breach the threshold before entering the ALARM state. This effectively filters out transient single-datapoint spikes while reliably triggering alerts on sustained performance degradation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "Alarms", "SRE"]
  },
  {
    id: "aws-dop-171",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Centralized Log Aggregation across Multiple AWS Regions using Kinesis",
    scenario: "A global company operates in five AWS Regions. Corporate compliance mandates consolidating all security and operating system logs from all regions into a single Amazon OpenSearch Service cluster in the primary region within seconds of generation.",
    question: "Which architecture pattern streams cross-region logs with minimal latency and high reliability?",
    options: [
      { id: 'A', text: "Run an hourly script on an EC2 instance that copies /var/log directories across regions using rsync over SSH" },
      { id: 'B', text: "In each secondary region, configure CloudWatch Logs Subscription Filters to stream to a local Kinesis Data Stream, replicated to the primary region's Kinesis Data Firehose via an AWS Lambda function or cross-region event bridge, delivering to OpenSearch" },
      { id: 'C', text: "Configure CloudWatch Logs in all secondary regions to stream directly to an OpenSearch endpoint in the primary region over public internet" },
      { id: 'D', text: "Export CloudWatch Logs to regional S3 buckets and configure S3 Cross-Region Replication (CRR) with Athena" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudWatch Logs Subscription Filters cannot target a destination in a different AWS Region directly. The standard high-throughput pattern is to stream logs to a regional Kinesis Data Stream in each secondary region. A lightweight cross-region forwarder (e.g., AWS Lambda or Kinesis replication) routes records to the central Kinesis Data Firehose in the primary region, which batches and indexes into Amazon OpenSearch Service.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatchLogs", "Kinesis", "MultiRegion"]
  },
  {
    id: "aws-dop-172",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Monitoring Memory and Disk Metrics on EC2 Fleets without CloudWatch Default Metrics",
    scenario: "A sysadmin assumes that Amazon EC2 provides default CloudWatch metrics for operating system RAM utilization and free disk space. During a critical database buffer exhaustion incident, the EC2 instance crashes without any prior CloudWatch alarm triggering.",
    question: "Why did CloudWatch fail to show memory utilization, and how is it resolved?",
    options: [
      { id: 'A', text: "Detailed Monitoring was disabled on the instance; enabling Detailed Monitoring automatically adds memory metrics" },
      { id: 'B', text: "The instance security group blocked outbound port 443 to the CloudWatch API" },
      { id: 'C', text: "CloudWatch does not support memory metrics on Linux operating systems" },
      { id: 'D', text: "RAM and disk space are operating system-level metrics that the hypervisor cannot observe; install the unified Amazon CloudWatch agent on the EC2 instances to publish these metrics" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Standard EC2 CloudWatch metrics are collected at the hypervisor level (CPU utilization, network in/out, disk read/write bytes). The hypervisor has zero visibility into guest OS memory allocation or filesystem utilization. To collect memory and disk metrics, you must install and run the unified Amazon CloudWatch Agent inside the guest operating system.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CloudWatch", "EC2", "CloudWatchAgent"]
  },
  {
    id: "aws-dop-173",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Automated Canary Analysis in Spinnaker or CodeDeploy using CloudWatch Alarms",
    scenario: "A continuous deployment pipeline deploys new application releases using canary deployments. The deployment engine must automatically assess error rates, CPU load, and latency during a 30-minute canary soak phase, automatically aborting the rollout and rolling back if any key metric degrades by more than 5% compared to the baseline fleet.",
    question: "Which mechanism connects deployment automation to automated metric health assessment?",
    options: [
      { id: 'A', text: "Schedule an AWS Lambda function to poll CloudWatch metrics once after 24 hours" },
      { id: 'B', text: "Configure CodeDeploy deployment rollback alarms targeting CloudWatch metric alarms, stopping traffic shifting and reverting automatically if an alarm triggers" },
      { id: 'C', text: "Configure a manual approval gate in CodePipeline requiring an operator to visually inspect Grafana dashboards" },
      { id: 'D', text: "Deploy an AWS Config rule that triggers an EC2 reboot when CPU exceeds 80%" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CodeDeploy allows associating Amazon CloudWatch Alarms with deployment groups. During canary or linear deployments (and during the post-shift baking period), CodeDeploy continuously monitors the configured CloudWatch alarms. If any alarm enters the ALARM state, CodeDeploy immediately halts the deployment, shifts 100% of traffic back to the original healthy fleet, and records a failed deployment.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["CodeDeploy", "CloudWatch", "Canary"]
  },
  {
    id: "aws-dop-174",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Security Remediation with EventBridge and SSM",
    scenario: "A security compliance policy mandates that if an Amazon S3 bucket is ever configured with public read access, the public access must be revoked immediately, and an alert must be published to a security Slack channel within 60 seconds.",
    question: "Which event-driven architecture satisfies this requirement automatically?",
    options: [
      { id: 'A', text: "Write a cron job on an EC2 instance that checks S3 permissions once every 24 hours" },
      { id: 'B', text: "Create an Amazon EventBridge rule that matches AWS Config compliance change events or CloudTrail PutBucketAcl API calls, triggering an AWS Systems Manager Automation runbook (or Lambda function) that applies S3 Block Public Access and sends an SNS notification" },
      { id: 'C', text: "Configure an S3 bucket lifecycle policy that deletes all objects in public buckets" },
      { id: 'D', text: "Send an email to the bucket creator requesting that they manually update bucket permissions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Event-driven auto-remediation combines AWS Config or CloudTrail events routed through Amazon EventBridge to automatically execute remediation workflows via AWS Systems Manager Automation documents or AWS Lambda functions. This closes security exposure windows within seconds without manual intervention.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-action-remediation.html",
    tags: ["Incident Response", "EventBridge", "SSM Automation", "Security"]
  },
  {
    id: "aws-dop-175",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon EventBridge Archive and Replay",
    scenario: "An order processing application uses Amazon EventBridge to route order events to downstream inventory and billing services. A bug in the billing Lambda function caused it to drop events for 4 hours. After deploying a code fix, the team needs to reprocess all order events that occurred during the outage window.",
    question: "Which EventBridge capability allows reprocessing past events?",
    options: [
      { id: 'A', text: "Amazon SQS Dead-Letter Queue redrive" },
      { id: 'B', text: "EventBridge Archive and Replay" },
      { id: 'C', text: "EventBridge Schema Discovery" },
      { id: 'D', text: "CloudWatch Logs Insights export" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EventBridge Archive and Replay allows developers to create an event archive on an event bus that records events indefinitely or for a defined retention period. When an incident occurs or downstream code is fixed, developers can start a replay to re-deliver past events to target rules.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-archive.html",
    tags: ["EventBridge", "Archive", "Replay", "Incident Response"]
  }
];

export default AWS_DOP_QUESTIONS_7;
