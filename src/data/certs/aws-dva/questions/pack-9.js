export const AWS_DVA_QUESTIONS_9 = [
  {
    id: "aws-dva-201",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Rollback Triggers on CloudWatch Alarms",
    scenario: "A CloudFormation stack update modifies a production database. If a database CPU alarm triggers during the stack update, CloudFormation must automatically roll back the stack.",
    question: "Which CloudFormation feature monitors alarms during stack operations and initiates rollbacks?",
    options: [
      { id: 'A', text: "Drift Detection" },
      { id: 'B', text: "Rollback Triggers" },
      { id: 'C', text: "Change Sets" },
      { id: 'D', text: "DeletionPolicy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudFormation `Rollback Triggers` allow you to specify CloudWatch alarms that CloudFormation monitors during stack creation and update operations. If any alarm triggers, CloudFormation rolls back the entire operation to the previous stable state.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html",
    tags: ["CloudFormation", "Rollback Triggers", "Resilience"]
  },
  {
    id: "aws-dva-202",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Stack Termination Protection",
    scenario: "An administrator wants to prevent accidental deletion of a core networking CloudFormation stack from the AWS Console or CLI.",
    question: "Which CloudFormation setting prevents a stack from being deleted until explicitly disabled?",
    options: [
      { id: 'A', text: "Termination Protection (EnableTerminationProtection)" },
      { id: 'B', text: "CloudFormation StackSet Lock" },
      { id: 'C', text: "IAM Deny on sts:AssumeRole" },
      { id: 'D', text: "DeletionPolicy: Retain" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling `Termination Protection` on a CloudFormation stack prevents the stack from being deleted. If a user attempts to delete the stack via the console or CLI, the operation fails until an administrator explicitly disables termination protection.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html",
    tags: ["CloudFormation", "Termination Protection", "Safety"]
  },
  {
    id: "aws-dva-203",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CloudFormation Package and Deploy Commands",
    scenario: "A developer uses CloudFormation to deploy a Lambda function whose code is located in a local directory `src/`. CloudFormation requires code zip files to be stored in an Amazon S3 bucket.",
    question: "Which AWS CLI command zips the local code directory, uploads it to S3, and updates the template with the S3 URL?",
    options: [
      { id: 'A', text: "aws cloudformation deploy" },
      { id: 'B', text: "aws cloudformation package" },
      { id: 'C', text: "aws cloudformation create-change-set" },
      { id: 'D', text: "aws s3 cp" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `aws cloudformation package` command scans a template for local resource references (like `Code: ./src`), packages the local files into a zip archive, uploads them to an Amazon S3 bucket, and outputs a modified template with the S3 URL.",
    referenceUrl: "https://docs.aws.amazon.com/cli/latest/reference/cloudformation/package.html",
    tags: ["CloudFormation", "CLI", "aws cloudformation package"]
  },
  {
    id: "aws-dva-204",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy AllAtOnce Deployment Policy",
    scenario: "A developer is deploying a non-production test application on a single EC2 instance where speed is the only priority and downtime during the 30-second restart is acceptable.",
    question: "Which CodeDeploy deployment configuration deploys the revision to all instances simultaneously in the fastest possible time?",
    options: [
      { id: 'A', text: "CodeDeployDefault.HalfAtATime" },
      { id: 'B', text: "CodeDeployDefault.AllAtOnce" },
      { id: 'C', text: "Canary10Percent5Minutes" },
      { id: 'D', text: "CodeDeployDefault.OneAtATime" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`CodeDeployDefault.AllAtOnce` deploys the new application revision to all target instances at the same time, maximizing deployment speed. Because all instances update concurrently, application downtime occurs during service restarts.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["CodeDeploy", "AllAtOnce", "Deployment Configurations"]
  },
  {
    id: "aws-dva-205",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    domainName: "Deployment",
    title: "CodeDeploy Rolling OneAtATime Deployment Policy",
    scenario: "A development team deploys updates to an EC2 auto scaling fleet of 4 instances. Deployments must guarantee that at least 3 instances remain online and healthy at all times.",
    question: "Which predefined deployment configuration updates one instance at a time?",
    options: [
      { id: 'A', text: "Linear10PercentEvery1Minute" },
      { id: 'B', text: "CodeDeployDefault.OneAtATime" },
      { id: 'C', text: "CodeDeployDefault.AllAtOnce" },
      { id: 'D', text: "CodeDeployDefault.HalfAtATime" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`CodeDeployDefault.OneAtATime` deploys the revision to only one instance at a time. The deployment pauses until the current instance passes health validation before moving to the next instance, ensuring maximum availability during updates.",
    referenceUrl: "https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html",
    tags: ["CodeDeploy", "OneAtATime", "High Availability"]
  },
  {
    id: "aws-dva-206",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Annotations vs Metadata",
    scenario: "A developer instruments a microservice with AWS X-Ray. The application records transaction values and user tier identifiers. Developers need to filter traces in the X-Ray console using the user tier.",
    question: "Which X-Ray data type should the developer use for the user tier attribute?",
    options: [
      { id: 'A', text: "HTTP Request headers" },
      { id: 'B', text: "Subsegment traces" },
      { id: 'C', text: "Metadata (unindexed key-value pairs of any data type)" },
      { id: 'D', text: "Annotations (indexed key-value pairs used for filter expressions)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "X-Ray `Annotations` are indexed key-value pairs (strings, numbers, booleans) that can be used with filter expressions in the X-Ray console to search and filter traces. `Metadata` key-value pairs can contain any type (including lists and objects) but are not indexed and cannot be used in filter queries.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-annotations",
    tags: ["X-Ray", "Annotations", "Metadata"]
  },
  {
    id: "aws-dva-207",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Subsegments for Downstream Calls",
    scenario: "A Lambda function calls an external third-party payment gateway and an internal microservice. In X-Ray traces, the function appears as a single monolithic block without timing breakdown for the external HTTP calls.",
    question: "How should the developer instrument the application to record detailed timing for individual external HTTP calls?",
    options: [
      { id: 'A', text: "Enable CloudWatch Logs metric filters" },
      { id: 'B', text: "Increase the X-Ray sampling rate to 100%" },
      { id: 'C', text: "Deploy a separate X-Ray daemon on an EC2 instance in every AZ" },
      { id: 'D', text: "Create custom Subsegments in the code using the AWS X-Ray SDK around downstream API calls" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In AWS X-Ray, a `Segment` represents the overall compute resource (e.g. the Lambda function). `Subsegments` provide granular timing and context for downstream calls (HTTP APIs, SQL queries, DynamoDB calls) made within that segment, allowing precise latency attribution in service maps.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-subsegments",
    tags: ["X-Ray", "Subsegments", "Instrumentation"]
  },
  {
    id: "aws-dva-208",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Sampling Rules Configuration",
    scenario: "A high-traffic e-commerce website generates 100,000 requests per second. Tracing every single request to X-Ray incurs excessive operational cost and storage overhead.",
    question: "How can the developer trace a statistically significant representative sample while guaranteeing at least 1 request per second is traced?",
    options: [
      { id: 'A', text: "Configure custom X-Ray Sampling Rules with a fixed rate (e.g. 5%) and a reservoir size of 1 request per second" },
      { id: 'B', text: "Enable and disable X-Ray tracing manually every hour via the AWS CLI" },
      { id: 'C', text: "Set the Lambda function memory to 128 MB" },
      { id: 'D', text: "Trace only requests that return HTTP 500 errors" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "X-Ray Sampling Rules allow developers to control sampling rates dynamically. A `Reservoir` ensures a minimum number of requests per second are traced (guaranteeing service activity is captured even under low traffic), while the `FixedRate` percentage samples additional traffic above the reservoir limit.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-console-sampling.html",
    tags: ["X-Ray", "Sampling Rules", "Cost Optimization"]
  },
  {
    id: "aws-dva-209",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Daemon Port and Protocol",
    scenario: "A developer is packaging an application into a Docker container running on Amazon ECS on EC2. The application uses the X-Ray SDK and needs to communicate with the X-Ray daemon.",
    question: "Which port and network protocol does the X-Ray daemon listen on for incoming UDP trace data?",
    options: [
      { id: 'A', text: "TCP port 443" },
      { id: 'B', text: "TCP port 8080" },
      { id: 'C', text: "UDP port 53" },
      { id: 'D', text: "UDP port 2000" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS X-Ray daemon listens for incoming trace segment traffic on UDP port 2000. UDP is used so that trace transmission is non-blocking and never impacts application performance or latency if network packets are dropped.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon-configuration.html",
    tags: ["X-Ray", "Daemon", "UDP"]
  },
  {
    id: "aws-dva-210",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Embedded Metric Format (EMF) Asynchronous Ingestion",
    scenario: "A serverless application on AWS Lambda needs to generate high-cardinality real-time operational metrics without making synchronous PutMetricData API calls that add latency and cost.",
    question: "Which CloudWatch feature generates metrics asynchronously directly from standard JSON logs?",
    options: [
      { id: 'A', text: "CloudWatch Embedded Metric Format (EMF)" },
      { id: 'B', text: "AWS CloudTrail Insights" },
      { id: 'C', text: "CloudWatch Synthetics Canaries" },
      { id: 'D', text: "CloudWatch Metric Filters" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Embedded Metric Format (EMF) allows applications to output structured JSON logs containing metric data directly to `stdout`. CloudWatch Logs automatically extracts the metrics asynchronously and publishes them to CloudWatch Metrics with zero API latency overhead.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html",
    tags: ["CloudWatch", "EMF", "Metrics"]
  },
  {
    id: "aws-dva-211",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters for Error Rate Tracking",
    scenario: "A legacy application writes unformatted text logs to a CloudWatch Log Group. The operations team needs to trigger an alarm whenever the word `FATAL_ERROR` appears more than 5 times in 5 minutes.",
    question: "How should the developer extract metric data from the existing log stream?",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter with a filter pattern of [..., words = *FATAL_ERROR*] that increments a custom metric" },
      { id: 'B', text: "Export the logs to S3 and run Athena queries every hour" },
      { id: 'C', text: "Write a Lambda function that downloads the log group files every minute" },
      { id: 'D', text: "Install the Datadog agent on the CloudWatch data center" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Metric Filters scan incoming log events in real time against specified text or JSON filter patterns. When a pattern match occurs, CloudWatch increments or publishes values to a designated CloudWatch Metric, which can then trigger standard CloudWatch Alarms.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch", "Metric Filters", "Monitoring"]
  },
  {
    id: "aws-dva-212",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Logs Insights Queries for Outage Diagnostics",
    scenario: "A production outage occurred 30 minutes ago across 200 Lambda functions. Developers need to calculate the 99th percentile execution duration grouped by function name across 5 million log lines.",
    question: "Which interactive query tool provides fast, distributed log analysis using a dedicated query language?",
    options: [
      { id: 'A', text: "Amazon CloudWatch Logs Insights" },
      { id: 'B', text: "Amazon QuickSight alone" },
      { id: 'C', text: "AWS X-Ray Analytics" },
      { id: 'D', text: "Amazon S3 Select" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Logs Insights is a purpose-built interactive log query engine that allows developers to search, analyze, and aggregate millions of log events across multiple log groups using commands like `filter`, `stats pct(duration, 99) by @logStream`, `sort`, and `limit`.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["CloudWatch", "Logs Insights", "Troubleshooting"]
  },
  {
    id: "aws-dva-213",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "ElastiCache Lazy Loading (Cache-Aside) Pattern",
    scenario: "An application reads product catalog data that rarely changes. When a cache miss occurs, the application must read from the database, write the result into the cache, and return the data.",
    question: "Which caching pattern is implemented here?",
    options: [
      { id: 'A', text: "Lazy Loading (Cache-Aside)" },
      { id: 'B', text: "Write-Through" },
      { id: 'C', text: "Write-Behind" },
      { id: 'D', text: "Refresh-Ahead" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Lazy Loading (Cache-Aside), the application checks the cache first. If a cache miss occurs, it queries the primary database, populates the cache with the fetched record, and returns the result. Only requested data is cached, avoiding memory waste on inactive records.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html#Strategies.LazyLoading",
    tags: ["ElastiCache", "Caching", "Lazy Loading"]
  },
  {
    id: "aws-dva-214",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "ElastiCache Write-Through Pattern for Data Consistency",
    scenario: "A developer needs to ensure that cached product inventory counts are never stale when updates are applied in the database.",
    question: "Which caching pattern writes data to the cache at the same time it writes to the primary database?",
    options: [
      { id: 'A', text: "Write-Through" },
      { id: 'B', text: "Lazy Loading" },
      { id: 'C', text: "Eviction-Only" },
      { id: 'D', text: "Time-Based Invalidation" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the Write-Through caching pattern, the application writes or updates data in both the primary database and the cache simultaneously. This guarantees that cache reads always reflect the latest data, eliminating stale reads at the expense of higher write latency.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Strategies.html#Strategies.WriteThrough",
    tags: ["ElastiCache", "Write-Through", "Caching"]
  },
  {
    id: "aws-dva-215",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "ElastiCache Redis vs Memcached Engine Selection",
    scenario: "A developer is evaluating in-memory caching solutions. The application requires caching complex data structures (sorted sets, hashes, lists), automated multi-AZ failover, and in-transit encryption.",
    question: "Which Amazon ElastiCache engine meets these requirements?",
    options: [
      { id: 'A', text: "Amazon CloudFront" },
      { id: 'B', text: "Amazon DynamoDB DAX" },
      { id: 'C', text: "Amazon ElastiCache for Redis" },
      { id: 'D', text: "Amazon ElastiCache for Memcached" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon ElastiCache for Redis supports advanced data structures (sorted sets, lists, hashes, bitmaps, geospatial data), Multi-AZ replication with automatic failover, read replicas, clustering, backup/restore, and in-transit/at-rest encryption. Memcached is a simple multithreaded key-value store without persistence or replication.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html",
    tags: ["ElastiCache", "Redis", "Memcached"]
  },
  {
    id: "aws-dva-216",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Multipart Upload for Parallel Transfers",
    scenario: "A media rendering service uploads 500 MB video files to Amazon S3. Network interruptions frequently cause uploads to fail halfway through, forcing the entire file to restart.",
    question: "Which S3 feature allows parallel, resumable uploads for objects larger than 100 MB?",
    options: [
      { id: 'A', text: "S3 Transfer Acceleration" },
      { id: 'B', text: "S3 Byte-Range Fetches" },
      { id: 'C', text: "S3 Glacier Instant Retrieval" },
      { id: 'D', text: "Amazon S3 Multipart Upload" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon S3 Multipart Upload breaks objects into parts (from 5 MB up to 5 GB each) and uploads them independently in parallel. If a part fails, only that single part needs to be retried rather than the entire file. AWS recommends Multipart Upload for all objects over 100 MB.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["S3", "Multipart Upload", "Performance"]
  },
  {
    id: "aws-dva-217",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Byte-Range Fetches for Stream Optimization",
    scenario: "A video streaming application needs to stream the first 5 MB chunk of a 4 GB video file immediately to start playback without waiting for the full video to download.",
    question: "Which HTTP header enables downloading a specific byte range from an S3 object?",
    options: [
      { id: 'A', text: "The Range HTTP header (e.g. Range: bytes=0-5242880)" },
      { id: 'B', text: "The Content-Range header in the request" },
      { id: 'C', text: "The Cache-Control header" },
      { id: 'D', text: "The x-amz-part-number header" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 supports byte-range fetches via standard HTTP `Range` request headers (e.g. `Range: bytes=0-5242880`). This enables parallelized multi-threaded downloads, resuming interrupted downloads, and streaming video headers with sub-second time to first frame.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html#optimizing-performance-guidelines",
    tags: ["S3", "Byte-Range Fetches", "Performance"]
  },
  {
    id: "aws-dva-218",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "Amazon S3 Transfer Acceleration via CloudFront Edge",
    scenario: "A global application has users in Asia, Europe, and South America uploading data directly to an S3 bucket located in `us-east-1`. Long-distance internet routing causes slow upload speeds.",
    question: "Which AWS feature accelerates uploads across geographically dispersed locations using Amazon CloudFront Edge Locations?",
    options: [
      { id: 'A', text: "Amazon Route 53 Geolocation Routing" },
      { id: 'B', text: "AWS Global Accelerator alone" },
      { id: 'C', text: "Amazon S3 Transfer Acceleration" },
      { id: 'D', text: "AWS Direct Connect" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Transfer Acceleration routes uploads through Amazon CloudFront's globally distributed Edge Locations. Data enters the AWS network at the nearest edge location and travels to the target S3 bucket over the optimized, congestion-free AWS private global network backbone.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["S3", "Transfer Acceleration", "CloudFront"]
  },
  {
    id: "aws-dva-219",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Write Sharding and Key Salting for Hot Partitions",
    scenario: "A DynamoDB table records candidate votes during an election. All votes for candidate A use the partition key `CandidateA`, creating severe write throttling while overall provisioned capacity is underutilized.",
    question: "Which schema design pattern resolves hot partition throttling by distributing write traffic?",
    options: [
      { id: 'A', text: "Enable DynamoDB point-in-time recovery" },
      { id: 'B', text: "Switch the table from on-demand to provisioned mode" },
      { id: 'C', text: "Write Sharding / Key Salting by appending a random suffix (e.g. CandidateA.1 to CandidateA.10) to the partition key" },
      { id: 'D', text: "Change the table read capacity units from 1 to 100" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Write sharding (key salting) appends a random or calculated suffix (e.g. `.1` to `.N`) to a heavily accessed partition key value. Writes are distributed evenly across N distinct physical partitions, completely avoiding hot-partition write throttling. Queries can read from all N partitions in parallel.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-sharding.html",
    tags: ["DynamoDB", "Write Sharding", "Key Salting"]
  },
  {
    id: "aws-dva-220",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch High-Resolution Metrics StorageResolution 1",
    scenario: "A high-frequency algorithmic trading application requires custom metrics published and alerted on at 1-second intervals instead of the standard 1-minute interval.",
    question: "How can the developer publish sub-minute metrics to Amazon CloudWatch?",
    options: [
      { id: 'A', text: "Stream metrics to Amazon SNS and query via SMS" },
      { id: 'B', text: "Configure a CloudWatch metric filter with interval set to 0" },
      { id: 'C', text: "High-resolution metrics are not supported in AWS" },
      { id: 'D', text: "Publish custom metrics with StorageResolution set to 1 second using PutMetricData" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudWatch supports High-Resolution Metrics. By specifying `StorageResolution: 1` in the `PutMetricData` API call, metrics are stored at 1-second resolution. High-resolution alarms can evaluate and trigger within 10 seconds.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#high-resolution-metrics",
    tags: ["CloudWatch", "High-Resolution Metrics", "Performance"]
  },
  {
    id: "aws-dva-221",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Service Graph for Dependency Visualization",
    scenario: "A developer is troubleshooting an e-commerce application where checkout latency increased from 200ms to 4 seconds. The system consists of 15 microservices calling each other.",
    question: "Which AWS X-Ray feature displays an interactive visual map showing all interconnected services and their error rates?",
    options: [
      { id: 'A', text: "AWS Systems Manager Inventory" },
      { id: 'B', text: "X-Ray Service Graph" },
      { id: 'C', text: "X-Ray Trace List" },
      { id: 'D', text: "CloudWatch Metric Math" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS X-Ray Service Graph visualizes relationships and dependencies between microservices, showing nodes for compute services, databases, and external APIs with color-coded circles indicating success rates, latency averages, and error percentages.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-servicegraph",
    tags: ["X-Ray", "Service Graph", "Observability"]
  },
  {
    id: "aws-dva-222",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray Filter Expressions for Trace Queries",
    scenario: "An on-call engineer needs to find all X-Ray traces that resulted in an HTTP 500 error and took longer than 2.5 seconds to complete.",
    question: "Which X-Ray filter expression matches these criteria?",
    options: [
      { id: 'A', text: "SELECT * WHERE time > 2.5" },
      { id: 'B', text: "http.status == 500" },
      { id: 'C', text: "responsetime > 2.5 AND error = true" },
      { id: 'D', text: "latency == 2.5 AND code == 500" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS X-Ray Filter Expressions allow developers to query traces using built-in keywords such as `responsetime`, `error`, `fault`, `throttle`, and custom annotations (e.g. `responsetime > 2.5 AND error = true`).",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html",
    tags: ["X-Ray", "Filter Expressions", "Troubleshooting"]
  },
  {
    id: "aws-dva-223",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS X-Ray SDK Automatic HTTP Instrumentation",
    scenario: "A developer is writing a Node.js microservice using the `axios` or native `https` library to make downstream REST API calls. The developer wants all outbound calls traced in X-Ray automatically.",
    question: "How should the developer instrument outbound HTTP calls using the AWS X-Ray SDK?",
    options: [
      { id: 'A', text: "Enable CloudTrail data events on the target endpoints" },
      { id: 'B', text: "Write a custom middleware that manually logs timestamps to a text file" },
      { id: 'C', text: "Deploy an EC2 proxy server running Squid" },
      { id: 'D', text: "Wrap the HTTP/HTTPS library using the AWS X-Ray SDK captureHTTPs function at application startup" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS X-Ray SDK provides automated capture methods (e.g. `AWSXRay.captureHTTPs(require('https'))`). Once wrapped at startup, all outbound HTTP/S calls automatically generate child subsegments with timing, request headers, and response status codes.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-nodejs-httpclients.html",
    tags: ["X-Ray", "Instrumentation", "HTTP Tracing"]
  },
  {
    id: "aws-dva-224",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Logs Subscription Filters to Kinesis and Lambda",
    scenario: "An enterprise security operations center (SOC) requires real-time streaming of all CloudWatch Logs to an external third-party SIEM system.",
    question: "Which CloudWatch Logs feature streams log events to Amazon Kinesis Data Streams or Lambda in near-real-time?",
    options: [
      { id: 'A', text: "CloudWatch Metric Streams" },
      { id: 'B', text: "CloudWatch Logs Insights Scheduled Queries" },
      { id: 'C', text: "CloudWatch Logs Subscription Filters" },
      { id: 'D', text: "S3 Export Tasks" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CloudWatch Logs Subscription Filters stream incoming log events in real time to Amazon Kinesis Data Streams, Amazon Kinesis Data Firehose, or an AWS Lambda function, enabling real-time forwarding to third-party log analytics platforms like Splunk or Datadog.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions.html",
    tags: ["CloudWatch", "Subscription Filters", "Streaming"]
  },
  {
    id: "aws-dva-225",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Contributor Insights for Top Talker Analysis",
    scenario: "A DynamoDB table experiences unexpected capacity spikes. The engineering team needs to identify which specific partition keys are generating the heaviest read and write traffic.",
    question: "Which CloudWatch feature identifies top talkers and outliers in high-cardinality log and metric data?",
    options: [
      { id: 'A', text: "CloudWatch Contributor Insights" },
      { id: 'B', text: "CloudWatch Metric Math" },
      { id: 'C', text: "CloudWatch Composite Alarms" },
      { id: 'D', text: "Amazon GuardDuty" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudWatch Contributor Insights analyzes log data in real time to generate reports on the 'top talkers' (e.g. top client IPs, most requested URLs, or hottest DynamoDB partition keys), visualizing high-cardinality outliers that impact system performance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html",
    tags: ["CloudWatch", "Contributor Insights", "High Cardinality"]
  }
];

export default AWS_DVA_QUESTIONS_9;
