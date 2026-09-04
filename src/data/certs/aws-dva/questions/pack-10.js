export const AWS_DVA_QUESTIONS_10 = [
  {
    id: "aws-dva-226",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Math for Error Rate Calculations",
    scenario: "An operations engineer monitors an API with separate CloudWatch metrics for `TotalRequests` and `ErrorCount`. The team needs to trigger an alarm if the error rate exceeds 2% of total requests.",
    question: "Which CloudWatch feature computes mathematical expressions across multiple metrics?",
    options: [
      { id: 'A', text: "CloudWatch Metric Filters" },
      { id: 'B', text: "CloudWatch Metric Math" },
      { id: 'C', text: "CloudWatch Logs Insights" },
      { id: 'D', text: "AWS CloudTrail Insights" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudWatch Metric Math allows developers to query multiple metrics and use mathematical expressions (e.g. `(ErrorCount / TotalRequests) * 100`) to create new calculated metrics on dashboards and associate them directly with CloudWatch Alarms.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html",
    tags: ["CloudWatch", "Metric Math", "Alarms"]
  },
  {
    id: "aws-dva-227",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Composite Alarms for Alert Fatigue Reduction",
    scenario: "An on-call team suffers from alert fatigue because an EC2 CPU alarm, a memory alarm, and an application latency alarm all fire separately during the same incident.",
    question: "Which CloudWatch feature combines multiple existing alarms using boolean logic into a single alert?",
    options: [
      { id: 'A', text: "CloudWatch Composite Alarms" },
      { id: 'B', text: "CloudWatch High-Resolution Alarms" },
      { id: 'C', text: "AWS EventBridge Rules alone" },
      { id: 'D', text: "CloudWatch Anomaly Detection" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Composite Alarms evaluate the states of multiple individual metric alarms using boolean logic (`ALARM(\"AlarmA\") AND ALARM(\"AlarmB\") OR ALARM(\"AlarmC\")`). This prevents alert storms by firing only when a composite condition is satisfied.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html",
    tags: ["CloudWatch", "Composite Alarms", "Operations"]
  },
  {
    id: "aws-dva-228",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Synthetics Canaries for User Flow Probing",
    scenario: "A retail banking website needs continuous 24/7 validation that users can log in, view account balances, and navigate menus, even during periods of zero real user traffic.",
    question: "Which CloudWatch feature runs automated headless browser scripts on a schedule to monitor user journeys?",
    options: [
      { id: 'A', text: "CloudWatch Synthetics Canaries" },
      { id: 'B', text: "CloudWatch Metric Filters" },
      { id: 'C', text: "AWS X-Ray Tracing" },
      { id: 'D', text: "Amazon Route 53 Health Checks alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Synthetics Canaries are configurable scripts (written in Node.js or Python using Puppeteer/Playwright) that run on a schedule to simulate user actions, monitor REST APIs, take UI screenshots, and alert when user journeys fail.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["CloudWatch", "Synthetics", "Canaries"]
  },
  {
    id: "aws-dva-229",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Agent Installation for Memory and Disk Metrics",
    scenario: "A sysadmin is monitoring EC2 instances. The CloudWatch console shows CPU and network metrics, but memory utilization (RAM) and free disk space metrics are missing.",
    question: "How should the developer collect OS-level memory and disk utilization metrics from EC2 instances?",
    options: [
      { id: 'A', text: "Install and configure the unified CloudWatch Agent on the EC2 instances" },
      { id: 'B', text: "Enable Enhanced Monitoring in the EC2 Console" },
      { id: 'C', text: "Reboot instances into Nitro Hypervisor mode" },
      { id: 'D', text: "Memory metrics are unavailable on AWS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon CloudWatch monitors EC2 hypervisor-level metrics (CPU, disk I/O, network) by default. Operating system-level metrics like RAM utilization and disk space require installing the unified CloudWatch Agent inside the guest OS.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html",
    tags: ["CloudWatch", "Agent", "EC2 Monitoring"]
  },
  {
    id: "aws-dva-230",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "ElastiCache Redis Cluster Mode Enabled vs Disabled",
    scenario: "An application cache dataset exceeds 500 GB, surpassing the maximum RAM capacity of a single Redis node. The application requires sharded caching across multiple nodes with horizontal write scaling.",
    question: "Which Amazon ElastiCache for Redis topology supports data sharding across multiple shards?",
    options: [
      { id: 'A', text: "Redis Cluster Mode Enabled" },
      { id: 'B', text: "Redis Cluster Mode Disabled" },
      { id: 'C', text: "Memcached Single Node" },
      { id: 'D', text: "DynamoDB DAX" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When `Cluster Mode Enabled` is configured, ElastiCache for Redis partitions data across multiple shards (up to 500 shards using 16,384 hash slots). This provides horizontal scaling of both memory and write throughput.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html#WhatIs.ClusterModes",
    tags: ["ElastiCache", "Redis", "Cluster Mode"]
  },
  {
    id: "aws-dva-231",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "ElastiCache Eviction Policies (allkeys-lru vs volatile-lru)",
    scenario: "A Redis cache reaches maximum memory capacity. The developer wants Redis to automatically evict the least recently used keys, but only among keys that have an explicit expiration (TTL) set.",
    question: "Which Redis maxmemory eviction policy should the developer configure in the cache parameter group?",
    options: [
      { id: 'A', text: "noeviction" },
      { id: 'B', text: "volatile-lru" },
      { id: 'C', text: "allkeys-random" },
      { id: 'D', text: "allkeys-lru" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `volatile-lru` eviction policy evicts the least recently used keys among those that have an expiration (TTL) set. In contrast, `allkeys-lru` evicts any key regardless of whether a TTL was set, while `noeviction` returns an out-of-memory error on writes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.Redis.html#ParameterGroups.Redis.NodeTypes",
    tags: ["ElastiCache", "Redis", "Eviction Policies"]
  },
  {
    id: "aws-dva-232",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB GSI Throttling Impact on Base Table Writes",
    scenario: "A developer notices that `PutItem` requests on a DynamoDB base table are failing with `ProvisionedThroughputExceededException`, even though the base table has 80% unused write capacity.",
    question: "What is the most likely cause of this write throttling?",
    options: [
      { id: 'A', text: "A Global Secondary Index (GSI) on the table has insufficient provisioned write capacity" },
      { id: 'B', text: "The table partition key is too long" },
      { id: 'C', text: "Point-in-time recovery is taking a backup" },
      { id: 'D', text: "The IAM role has expired" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Amazon DynamoDB, writes to a base table also consume write capacity on all Global Secondary Indexes (GSIs) containing the updated attributes. If any GSI lacks sufficient write capacity, it throttles the write operation on the entire base table to maintain consistency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html#GSI.ThroughputConsiderations",
    tags: ["DynamoDB", "GSI", "Throttling"]
  },
  {
    id: "aws-dva-233",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB BatchWriteItem UnprocessedItems Handling",
    scenario: "A developer uses the `BatchWriteItem` API to write 25 items to DynamoDB. The response returns an HTTP 200 status code, but the `UnprocessedItems` map contains 5 items.",
    question: "How should the developer handle the items returned in `UnprocessedItems`?",
    options: [
      { id: 'A', text: "Retry only the unprocessed items using exponential backoff and jitter" },
      { id: 'B', text: "Retry all 25 items immediately in a tight loop" },
      { id: 'C', text: "Delete and recreate the DynamoDB table" },
      { id: 'D', text: "Assume the items were committed because the HTTP status was 200" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When DynamoDB throttles individual items in a batch operation due to temporary capacity limits, it returns them in `UnprocessedItems` while committing the rest. The application must retry only those unprocessed items using exponential backoff and randomized jitter.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.BatchOperations",
    tags: ["DynamoDB", "BatchWriteItem", "Exponential Backoff"]
  },
  {
    id: "aws-dva-234",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB On-Demand vs Provisioned Capacity Mode",
    scenario: "A startup launches a new product with unpredictable, spiky traffic patterns that jump from 0 to 10,000 requests per second in minutes. The team does not want to manage capacity planning.",
    question: "Which DynamoDB capacity mode is best suited for unpredictable spiky workloads?",
    options: [
      { id: 'A', text: "On-Demand Capacity Mode" },
      { id: 'B', text: "Provisioned Capacity Mode with manual scaling" },
      { id: 'C', text: "Reserved Capacity Mode" },
      { id: 'D', text: "Fixed 5 RCU / 5 WCU" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DynamoDB On-Demand capacity mode automatically accommodates workloads as they ramp up or down to any previously reached traffic level without provisioning or capacity planning, charging purely on a per-request basis.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand",
    tags: ["DynamoDB", "On-Demand", "Capacity Planning"]
  },
  {
    id: "aws-dva-235",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Select for Server-Side Querying",
    scenario: "An analytics microservice reads a 5 GB CSV file stored in Amazon S3 to extract 50 rows matching a specific customer ID, incurring high network transfer latency and memory overhead.",
    question: "Which S3 feature performs server-side SQL filtering to return only the requested rows over the network?",
    options: [
      { id: 'A', text: "S3 Glacier Instant Retrieval" },
      { id: 'B', text: "S3 Batch Operations" },
      { id: 'C', text: "Amazon S3 Select" },
      { id: 'D', text: "Amazon Athena with a full table scan" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Select uses simple SQL statements (e.g. `SELECT * FROM s3object s WHERE s.customer_id = '123'`) to filter object contents directly on S3 storage servers, transmitting only the filtered records across the network and cutting transfer costs and latency.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html",
    tags: ["S3", "S3 Select", "Performance"]
  },
  {
    id: "aws-dva-236",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Inventory for Automated Content Auditing",
    scenario: "A compliance policy requires weekly auditing of 50 million objects stored in an enterprise S3 bucket. Running `ListObjectsV2` API calls takes hours and incurs substantial request charges.",
    question: "Which Amazon S3 feature delivers an automated daily or weekly CSV/ORC report of all objects and metadata?",
    options: [
      { id: 'A', text: "Amazon S3 Inventory" },
      { id: 'B', text: "Amazon S3 Storage Lens" },
      { id: 'C', text: "S3 Object Tagging" },
      { id: 'D', text: "CloudWatch Logs Insights" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Inventory provides scheduled (daily or weekly) lists of your objects and their respective metadata (size, storage class, encryption status, version ID) formatted in CSV, ORC, or Parquet files delivered directly to a destination bucket, eliminating costly `ListObjects` scans.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html",
    tags: ["S3", "S3 Inventory", "Auditing"]
  },
  {
    id: "aws-dva-237",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon CloudFront Cache Policies and Min/Max/Default TTL",
    scenario: "A developer configures an Amazon CloudFront distribution for dynamic API responses. Origin headers include `Cache-Control: max-age=60`, but the developer wants CloudFront to cache responses for at least 300 seconds.",
    question: "Which setting in a CloudFront Cache Policy overrides shorter origin max-age headers?",
    options: [
      { id: 'A', text: "Default TTL set to 0" },
      { id: 'B', text: "Origin Request Policy Cookies to All" },
      { id: 'C', text: "Minimum TTL set to 300 seconds" },
      { id: 'D', text: "Maximum TTL set to 60 seconds" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In CloudFront Cache Policies, the `Minimum TTL` setting enforces the lowest duration an object can remain in the cache. Even if the origin specifies a lower `max-age` (e.g. 60 seconds), CloudFront enforces the `Minimum TTL` (300 seconds) before revalidating with the origin.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cache-policies.html#understanding-cache-policy-settings",
    tags: ["CloudFront", "Cache Policy", "TTL"]
  },
  {
    id: "aws-dva-238",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudFront Invalidations vs Versioned File Names",
    scenario: "A developer releases a new CSS stylesheet `styles.css`. To serve the updated file immediately, the developer is deciding between creating a CloudFront invalidation or using versioned filenames (`styles.v2.css`).",
    question: "Why does AWS recommend versioned file names over cache invalidations for continuous deployments?",
    options: [
      { id: 'A', text: "CloudFront cannot invalidate CSS files" },
      { id: 'B', text: "Invalidations delete the files from the origin S3 bucket" },
      { id: 'C', text: "Invalidations take 24 hours to propagate across edge locations" },
      { id: 'D', text: "Versioned filenames guarantee instant updates at zero cost, preserve cached historical versions, and avoid invalidation API throttling and fees" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Using versioned filenames (or query string versions like `style.css?v=2`) is the AWS best practice for asset updates because it delivers instant cache updates globally at zero cost. CloudFront invalidations incur fees after 1,000 free paths per month and require time to process across all edge locations.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#ReplacingObjects",
    tags: ["CloudFront", "Invalidations", "Best Practices"]
  },
  {
    id: "aws-dva-239",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning for Cost-Performance Optimization",
    scenario: "A developer needs to determine whether allocating 512 MB, 1024 MB, or 1769 MB of memory to a compute-heavy image compression Lambda function will minimize cost and execution time.",
    question: "Which open-source AWS Step Functions-based utility executes parallel benchmarking across memory configurations?",
    options: [
      { id: 'A', text: "AWS Lambda Power Tuning" },
      { id: 'B', text: "CloudWatch Metrics Math" },
      { id: 'C', text: "AWS Compute Optimizer alone" },
      { id: 'D', text: "AWS Trusted Advisor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Lambda Power Tuning is an open-source tool powered by AWS Step Functions that runs multiple concurrent versions of a Lambda function across various memory configurations, analyzes execution time and cost, and visualizes the Pareto-optimal price/performance tradeoff.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["Lambda", "Power Tuning", "Optimization"]
  },
  {
    id: "aws-dva-240",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "API Gateway 4XX vs 5XX Error Troubleshooting",
    scenario: "A client application calls an API Gateway REST API and receives an HTTP 504 Gateway Timeout error after waiting for 30 seconds.",
    question: "In API Gateway CloudWatch execution logs, where did the timeout occur?",
    options: [
      { id: 'A', text: "The backend integration (e.g. Lambda or HTTP endpoint) failed to return a response before the API Gateway integration timeout (29 seconds)" },
      { id: 'B', text: "The client exceeded the usage plan burst throttle limit" },
      { id: 'C', text: "The API Gateway custom domain SSL certificate expired" },
      { id: 'D', text: "The client sent an invalid JSON request body" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An HTTP 504 Gateway Timeout error in API Gateway indicates that the backend endpoint (such as an AWS Lambda function or external HTTP integration) exceeded the maximum API Gateway integration timeout limit (default 29 seconds) before returning a response.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-troubleshooting-504-iam-role.html",
    tags: ["API Gateway", "504", "Troubleshooting"]
  },
  {
    id: "aws-dva-241",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Step Functions Execution History Error Inspection",
    scenario: "A multi-step order processing Step Functions state machine execution fails with status `FAILED`. The developer needs to inspect the exact input, output, and error traceback of the failed state.",
    question: "Where in the Step Functions console can the developer inspect the step-by-step state transition logs?",
    options: [
      { id: 'A', text: "AWS CloudTrail Event History alone" },
      { id: 'B', text: "Amazon EventBridge rules" },
      { id: 'C', text: "CloudWatch Synthetics console" },
      { id: 'D', text: "The Execution Event History tab" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Step Functions `Execution Event History` provides a complete, sequential audit trail of every state transition, showing timestamps, state names, input payloads, output payloads, and detailed error causes for failed steps.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/monitoring-history.html",
    tags: ["Step Functions", "Execution History", "Troubleshooting"]
  },
  {
    id: "aws-dva-242",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon SQS Backlog Auto Scaling Metric",
    scenario: "An auto-scaling fleet of worker EC2 instances processes messages from an Amazon SQS queue. The team needs to scale out instances based on queue backlog depth per instance.",
    question: "Which CloudWatch metric represents the count of messages available for retrieval in the SQS queue?",
    options: [
      { id: 'A', text: "ApproximateNumberOfMessagesVisible" },
      { id: 'B', text: "ApproximateNumberOfMessagesNotVisible" },
      { id: 'C', text: "ApproximateAgeOfOldestMessage" },
      { id: 'D', text: "NumberOfMessagesSent" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`ApproximateNumberOfMessagesVisible` reports the number of messages waiting in the queue to be read by workers. Dividing this metric by the number of active instances provides the backlog depth per worker used for target tracking auto scaling policies.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch.html",
    tags: ["SQS", "CloudWatch Metrics", "Auto Scaling"]
  },
  {
    id: "aws-dva-243",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon Kinesis Throughput Exceeded Backoff Strategy",
    scenario: "A high-throughput producer application writes records to an Amazon Kinesis Data Stream and receives `WriteProvisionedThroughputExceeded` errors during flash crowds.",
    question: "How should the developer handle this throttling error in the producer client code?",
    options: [
      { id: 'A', text: "Immediately drop all throttled records without retrying" },
      { id: 'B', text: "Switch the stream to FIFO mode" },
      { id: 'C', text: "Delete the stream and recreate it with standard settings" },
      { id: 'D', text: "Retry the putRecord requests using exponential backoff with full jitter, and increase shard count if throttling persists" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When Kinesis shard write capacity (1 MB/sec or 1,000 records/sec per shard) is exceeded, producers receive `WriteProvisionedThroughputExceeded`. Client applications must retry with exponential backoff and randomized jitter, while scaling up the number of shards if demand remains high.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-scaling.html",
    tags: ["Kinesis", "Throttling", "Resilience"]
  },
  {
    id: "aws-dva-244",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Health Dashboard API for Incident Monitoring",
    scenario: "An enterprise operations team wants automated Slack alerts whenever an AWS service disruption (such as an EC2 or DynamoDB regional incident) affects their specific AWS account resources.",
    question: "Which AWS service provides customized health alerts and notifications regarding service health affecting your account?",
    options: [
      { id: 'A', text: "Amazon Inspector" },
      { id: 'B', text: "AWS CloudTrail" },
      { id: 'C', text: "AWS Status Page (status.aws.amazon.com) alone" },
      { id: 'D', text: "AWS Health Dashboard (AWS Health API)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS Health Dashboard (and AWS Health API / EventBridge events) provides personalized visibility into AWS service disruptions, planned lifecycle maintenances, and account notifications that directly impact your specific AWS resources.",
    referenceUrl: "https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html",
    tags: ["AWS Health", "Incident Monitoring", "Reliability"]
  },
  {
    id: "aws-dva-245",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Trusted Advisor for Optimization Recommendations",
    scenario: "A developer wants automated recommendations to identify unattached EBS volumes, unencrypted S3 buckets, and idle RDS database instances across the AWS account.",
    question: "Which AWS service analyzes account resources against best practices in cost, performance, security, and fault tolerance?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor" },
      { id: 'B', text: "AWS Systems Manager" },
      { id: 'C', text: "Amazon GuardDuty" },
      { id: 'D', text: "AWS Compute Optimizer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Trusted Advisor scans your AWS environment and provides real-time guidance across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits, flagging idle resources and security gaps.",
    referenceUrl: "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
    tags: ["Trusted Advisor", "Optimization", "Well-Architected"]
  },
  {
    id: "aws-dva-246",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Lifecycle Transitions to Glacier Tiers",
    scenario: "A compliance policy requires moving transaction log objects from S3 Standard to cold archive storage after 90 days. The data must remain retrievable within milliseconds if an audit occurs.",
    question: "Which S3 Glacier storage class provides sub-second retrieval for infrequently accessed archive data?",
    options: [
      { id: 'A', text: "S3 Glacier Deep Archive" },
      { id: 'B', text: "S3 Glacier Flexible Retrieval (formerly Glacier)" },
      { id: 'C', text: "S3 Glacier Instant Retrieval" },
      { id: 'D', text: "S3 One Zone-IA" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "S3 Glacier Instant Retrieval is an archive storage class that provides the lowest cost storage for long-lived data that is rarely accessed, while still delivering milliseconds retrieval performance when accessed.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier-instant",
    tags: ["S3", "Glacier", "Storage Classes"]
  },
  {
    id: "aws-dva-247",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Anomaly Detection for Dynamic Baseline Alarms",
    scenario: "An e-commerce website experiences regular diurnal traffic patterns (high during daytime, low at night). Static CloudWatch alarm thresholds cause false alarms during peak hours or miss anomalies at night.",
    question: "Which CloudWatch feature uses machine learning to create dynamic baseline bands for metrics?",
    options: [
      { id: 'A', text: "CloudWatch Composite Alarms" },
      { id: 'B', text: "CloudWatch Logs Insights" },
      { id: 'C', text: "CloudWatch Metric Filters" },
      { id: 'D', text: "CloudWatch Anomaly Detection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudWatch Anomaly Detection applies machine learning algorithms to continuous metric history to determine expected normal baselines and generate anomaly bands. Alarms fire when metric values deviate outside the expected dynamic band.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html",
    tags: ["CloudWatch", "Anomaly Detection", "Machine Learning"]
  },
  {
    id: "aws-dva-248",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB ConsistentRead Capacity Consumption",
    scenario: "A developer executes a `GetItem` call to retrieve an item of size 8 KB from Amazon DynamoDB.",
    question: "How many Read Capacity Units (RCUs) are consumed when requesting Eventually Consistent vs Strongly Consistent reads?",
    options: [
      { id: 'A', text: "1 RCU for Eventually Consistent read, 2 RCUs for Strongly Consistent read" },
      { id: 'B', text: "2 RCUs for Eventually Consistent read, 4 RCUs for Strongly Consistent read" },
      { id: 'C', text: "0.5 RCU for Eventually Consistent read, 1 RCU for Strongly Consistent read" },
      { id: 'D', text: "8 RCUs for both modes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In DynamoDB, 1 RCU provides one Strongly Consistent read per second for an item up to 4 KB. An 8 KB item requires 8 KB / 4 KB = 2 RCUs for a Strongly Consistent read. An Eventually Consistent read requires half that amount: 1 RCU.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual",
    tags: ["DynamoDB", "RCU", "Capacity Calculation"]
  },
  {
    id: "aws-dva-249",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Lambda Concurrency vs SQS Visibility Timeout Alignment",
    scenario: "A Lambda function processes messages from an Amazon SQS queue. The function timeout is configured to 60 seconds. Messages are frequently being received twice by different function instances while still processing.",
    question: "What is the recommended relationship between SQS Visibility Timeout and Lambda Function Timeout?",
    options: [
      { id: 'A', text: "The Lambda timeout must be greater than the SQS visibility timeout" },
      { id: 'B', text: "The SQS Visibility Timeout must be set to 0 seconds" },
      { id: 'C', text: "The SQS Visibility Timeout must be exactly equal to the Lambda timeout" },
      { id: 'D', text: "The SQS Visibility Timeout must be at least 6 times the Lambda function timeout (e.g. 360 seconds)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS best practices mandate setting the SQS queue Visibility Timeout to at least 6 times the Lambda function timeout. This ensures that the Lambda function invocation and any internal retries have ample time to complete before SQS makes the message visible to another worker.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-queueconfig",
    tags: ["Lambda", "SQS", "Visibility Timeout"]
  },
  {
    id: "aws-dva-250",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Trace Header (X-Amzn-Trace-Id) Propagation",
    scenario: "A frontend client makes a request to API Gateway, which calls Lambda, which makes an HTTP request to an ECS container. In X-Ray, the trace breaks between Lambda and ECS, creating two separate disconnected traces.",
    question: "How should the developer maintain end-to-end trace context across distributed HTTP calls?",
    options: [
      { id: 'A', text: "Use the same IAM execution role on Lambda and ECS" },
      { id: 'B', text: "Extract and forward the X-Amzn-Trace-Id HTTP request header in all downstream HTTP client calls" },
      { id: 'C', text: "Add the user session token to the request payload" },
      { id: 'D', text: "Enable CloudWatch Logs metric filters on both services" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS X-Ray propagates trace context across HTTP boundaries using the `X-Amzn-Trace-Id` HTTP header. Downstream services inspect this header to join the existing trace rather than generating a new, disconnected root segment.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader",
    tags: ["X-Ray", "Trace Header", "Context Propagation"]
  }
];

export default AWS_DVA_QUESTIONS_10;
