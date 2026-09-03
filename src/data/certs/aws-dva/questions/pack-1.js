export const AWS_DVA_QUESTIONS_1 = [
  {
    id: "aws-dva-1",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Cold Starts & Provisioned Concurrency",
    scenario: "A microservice running on AWS Lambda experiences unacceptable cold start latency spikes during flash sales.",
    question: "How should a developer eliminate initialization cold starts for predictable low-latency response times?",
    options: [
      { id: 'A', text: "Increase the function timeout setting from 3 seconds to 15 minutes" },
      { id: 'B', text: "Switch the Lambda function runtime from Node.js to Java without ahead-of-time compilation" },
      { id: 'C', text: "Increase ephemeral disk storage in /tmp to 10 GB" },
      { id: 'D', text: "Configure Provisioned Concurrency for the Lambda function alias or version" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring Provisioned Concurrency initializes a requested number of execution environments in advance so that incoming requests are immediately served with double-digit millisecond latency without cold starts. Increasing timeout only allows functions to run longer, allocating more ephemeral storage does not initialize runtimes, and migrating to Java runtime without SnapStart typically increases cold start latency.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["Lambda", "Serverless", "Provisioned Concurrency"]
  },
  {
    id: "aws-dva-2",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Database Connection Management with RDS Proxy",
    scenario: "A serverless order-processing Lambda function connects to an Amazon RDS PostgreSQL instance. During high load spikes, RDS exhausts its available connection pool and rejects queries.",
    question: "What is the recommended architecture to manage and share database connections efficiently across Lambda invocations?",
    options: [
      { id: 'A', text: "Increase the memory of the Lambda function to 10,240 MB" },
      { id: 'B', text: "Disable multi-AZ deployment on the RDS instance" },
      { id: 'C', text: "Deploy Amazon RDS Proxy between Lambda and the PostgreSQL database" },
      { id: 'D', text: "Initialize a new database connection inside the Lambda handler function on every request" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon RDS Proxy maintains a managed pool of database connections and allows thousands of concurrent Lambda instances to share and multiplex connections, preventing database exhaustion. Initializing connections inside the handler establishes new connections on every single invocation and quickly exhausts database resources. Scaling Lambda memory increases compute capacity but does not solve relational connection limits.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Lambda", "RDS Proxy", "Database"]
  },
  {
    id: "aws-dva-3",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Ephemeral Storage Configuration",
    scenario: "A data-processing Lambda function downloads a 4 GB compressed dataset, extracts it, and generates analysis files before uploading results to S3.",
    question: "How should the developer configure the Lambda execution environment to support temporary storage larger than the default 512 MB?",
    options: [
      { id: 'A', text: "Mount an Amazon S3 bucket directly as a local POSIX block device in the handler code" },
      { id: 'B', text: "Increase the Lambda ephemeral storage (/tmp) setting up to 10,240 MB" },
      { id: 'C', text: "Attach an EBS General Purpose SSD volume to the Lambda function directly" },
      { id: 'D', text: "Write the extracted files to the /var/task deployment package directory" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Lambda supports configuring ephemeral storage (`/tmp`) from 512 MB up to 10,240 MB (10 GB) directly in function settings. The deployment package directory `/var/task` is read-only at runtime, EBS volumes cannot be directly attached to Lambda functions, and S3 is an object store accessible via APIs rather than a native POSIX local filesystem.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-ephemeral-storage.html",
    tags: ["Lambda", "Storage", "Limits"]
  },
  {
    id: "aws-dva-4",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Layers for Shared Dependencies",
    scenario: "Multiple Python Lambda functions in an application utilize identical third-party libraries (NumPy, Pandas) and custom internal SDKs, causing excessive deployment package sizes.",
    question: "What is the most effective way to share these common libraries across all functions?",
    options: [
      { id: 'A', text: "Package the shared libraries into a Lambda Layer and reference the layer ARN in each function" },
      { id: 'B', text: "Upload the libraries to an S3 bucket and download them inside the handler on every invocation" },
      { id: 'C', text: "Bundle the dependencies into every individual function deployment zip package" },
      { id: 'D', text: "Copy the source code files into the /tmp folder using a pre-traffic hook" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Layers allow common runtime dependencies and custom libraries to be packaged once and shared across multiple functions, reducing deployment artifact sizes and speeding up pipeline deployments. Downloading libraries from S3 on every invocation introduces latency, and bundling dependencies into every function duplicates storage.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html",
    tags: ["Lambda", "Lambda Layers", "Packaging"]
  },
  {
    id: "aws-dva-5",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Event Source Mapping Batch Failure Handling",
    scenario: "A Lambda function processes batches of messages from an Amazon Kinesis Data Stream. When a single record in a batch of 100 fails due to a schema validation error, the entire batch retries and blocks the shard.",
    question: "Which feature should the developer enable in the event source mapping to isolate and bypass only the corrupted record?",
    options: [
      { id: 'A', text: "Set the BatchSize to 10,000 records" },
      { id: 'B', text: "Enable BisectBatchOnFunctionError and configure an On-Failure Destination" },
      { id: 'C', text: "Increase the MaximumRecordAgeInSeconds to 7 days" },
      { id: 'D', text: "Disable stream checkpoints in the consumer function" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enabling `BisectBatchOnFunctionError` splits the failed batch into two smaller sub-batches and retries them, continually isolating the single poison-pill record until it reaches maximum retry limits and is routed to an On-Failure Destination (SQS or SNS), allowing shard processing to continue. Increasing record age prolongs stream blockage, and larger batch sizes exacerbate batch processing failures.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html",
    tags: ["Lambda", "Kinesis", "Event Source Mapping"]
  },
  {
    id: "aws-dva-6",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Asynchronous Invocation Destinations",
    scenario: "An image processing pipeline invokes a Lambda function asynchronously using the Event invocation type. If processing fails after the built-in 2 retries, notifications must be recorded with execution context.",
    question: "What is the modern, recommended AWS mechanism to capture failed asynchronous invocations and execution metadata?",
    options: [
      { id: 'A', text: "Configure Lambda Destinations for On-Failure targeting an Amazon SQS queue or SNS topic" },
      { id: 'B', text: "Write custom try/catch blocks that invoke an Amazon SNS topic synchronously" },
      { id: 'C', text: "Configure a Dead Letter Queue (DLQ) in the Amazon S3 lifecycle rules" },
      { id: 'D', text: "Inspect CloudWatch Logs manually and rerun failed jobs from the console" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Destinations for asynchronous invocations provide comprehensive JSON metadata (request payload, response payload, stack trace, and execution details) directly to target services such as SQS, SNS, EventBridge, or another Lambda function upon failure. Legacy Dead Letter Queues only record the invocation payload without execution error details.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
    tags: ["Lambda", "Destinations", "Error Handling"]
  },
  {
    id: "aws-dva-7",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Global Scope Execution Reuse",
    scenario: "A Lambda function queries an external REST API for static configuration metadata. Currently, the function fetches this metadata on every invocation, adding 150 ms to total duration.",
    question: "How can a developer optimize execution time by caching the static metadata across invocations?",
    options: [
      { id: 'A', text: "Fetch the configuration data in the global scope outside the Lambda handler function" },
      { id: 'B', text: "Store the configuration in the event object passed into the handler parameter" },
      { id: 'C', text: "Write the configuration data to Amazon SQS and read it on each execution" },
      { id: 'D', text: "Provision a dedicated DynamoDB Accelerator (DAX) cluster for static string caching" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Code declared outside the Lambda handler in global scope runs during execution environment initialization and persists in memory across warm invocations. Reusing initialized SDK clients, database connections, and cached static data across invocations substantially lowers execution duration. Passing data in event payloads alters caller contracts, and external queues add network overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["Lambda", "Optimization", "Warm Starts"]
  },
  {
    id: "aws-dva-8",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Container Images",
    scenario: "A machine learning inference Lambda function requires heavy dependencies (PyTorch, SciPy) and custom binaries that total 8 GB in uncompressed size.",
    question: "How can a developer deploy this large application artifact to AWS Lambda?",
    options: [
      { id: 'A', text: "Package the application as a Docker container image (up to 10 GB) and deploy via Amazon ECR" },
      { id: 'B', text: "Compress the file using gzip and stream it into memory during cold start" },
      { id: 'C', text: "Upload the 8 GB file directly as a standard zip file to the Lambda console" },
      { id: 'D', text: "Split the code across 32 individual Lambda layers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Lambda supports packaging functions as container images up to 10 GB stored in Amazon Elastic Container Registry (ECR). Standard zip deployment packages have a hard limit of 250 MB uncompressed (including layers), and Lambda layers have a maximum combined uncompressed size limit of 250 MB.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
    tags: ["Lambda", "Container Images", "ECR"]
  },
  {
    id: "aws-dva-9",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Reserved Concurrency Protection",
    scenario: "A developer has a critical billing Lambda function that must never be starved of execution capacity when other non-critical functions in the same AWS account experience traffic spikes.",
    question: "How should the developer guarantee capacity for the critical function and prevent other functions from exceeding account limits?",
    options: [
      { id: 'A', text: "Allocate Reserved Concurrency specifically to the critical Lambda function" },
      { id: 'B', text: "Configure Provisioned Concurrency on the non-critical functions" },
      { id: 'C', text: "Increase the AWS Lambda execution timeout to 900 seconds" },
      { id: 'D', text: "Migrate the billing service to Amazon EC2 Spot Instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assigning Reserved Concurrency reserves a dedicated portion of the account concurrency pool exclusively for that function, guaranteeing capacity even during account-wide throttling spikes, while also capping maximum concurrency to protect downstream systems. Provisioned concurrency readies environments but does not reserve exclusive capacity against account limits.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html",
    tags: ["Lambda", "Concurrency", "Reserved Concurrency"]
  },
  {
    id: "aws-dva-10",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Microservices",
    scenario: "An enterprise microservice running Java on AWS Lambda suffers from cold start times exceeding 8 seconds due to extensive framework initialization and class loading.",
    question: "Which feature should the developer activate to reduce Java cold starts to sub-second durations?",
    options: [
      { id: 'A', text: "Enable AWS Lambda SnapStart for the Java function and publish a new version" },
      { id: 'B', text: "Increase function RAM from 1 GB to 2 GB" },
      { id: 'C', text: "Mount an Amazon EFS volume to store pre-compiled class bytecode" },
      { id: 'D', text: "Replace the JVM with Node.js runtime code" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda SnapStart initializes the function during version publication, takes a Firecracker microVM snapshot of the initialized memory and disk state, encrypts it, and caches it. Subsequent cold starts resume from the snapshot, reducing cold start times by up to 90% for Java runtimes. Scaling memory provides linear CPU scaling but does not eliminate JVM classloading initialization.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["Lambda", "SnapStart", "Java"]
  },
  {
    id: "aws-dva-11",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda CPU Allocation via Memory Scaling",
    scenario: "A compute-intensive image manipulation function runs on Lambda with 512 MB memory. Processing takes 40 seconds per image, which is too slow for real-time user uploads.",
    question: "How can the developer increase the CPU capacity allocated to the function?",
    options: [
      { id: 'A', text: "Configure multi-threading flags in the operating system environment" },
      { id: 'B', text: "Increase the allocated memory setting in Lambda configuration" },
      { id: 'C', text: "Enable provisioned concurrency on the default $LATEST version" },
      { id: 'D', text: "Add an additional network interface (ENI) to the VPC configuration" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Lambda allocates CPU power proportionally to the configured memory setting. At 1,769 MB of memory, a function is allocated the equivalent of one full vCPU. Increasing memory up to 10,240 MB provides up to 6 vCPUs, drastically accelerating CPU-bound tasks. Adding ENIs only affects VPC networking, and OS threading flags cannot exceed allocated hypervisor resources.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html",
    tags: ["Lambda", "CPU", "Memory"]
  },
  {
    id: "aws-dva-12",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs Authentication Types",
    scenario: "A developer creates a dedicated HTTPS endpoint directly on a Lambda function using Lambda Function URLs. The endpoint must be restricted so only authenticated AWS IAM principals can invoke it.",
    question: "Which AuthType should the developer select when creating the Function URL?",
    options: [
      { id: 'A', text: "NONE" },
      { id: 'B', text: "AWS_IAM" },
      { id: 'C', text: "BASIC_AUTH" },
      { id: 'D', text: "COGNITO_USER_POOLS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Lambda Function URLs support two authorization types: `AWS_IAM` (requiring callers to sign HTTP requests using SigV4 credentials) and `NONE` (public unauthenticated access with optional CORS). Lambda Function URLs do not natively support built-in Cognito or basic auth authorization modes; those require API Gateway or custom handler code.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html",
    tags: ["Lambda", "Function URLs", "IAM"]
  },
  {
    id: "aws-dva-13",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda VPC Hyperplane ENI Networking",
    scenario: "A Lambda function must access an Amazon ElastiCache Redis cluster located inside a private VPC subnet. Previously, VPC cold starts took several seconds.",
    question: "How does modern AWS Lambda VPC connectivity operate to provide fast cold starts?",
    options: [
      { id: 'A', text: "Lambda assigns a public IPv4 address to every concurrent execution container" },
      { id: 'B', text: "Lambda requires all private databases to be exposed via an internet gateway" },
      { id: 'C', text: "Lambda establishes an IPSec VPN tunnel between the AWS Lambda service and the VPC" },
      { id: 'D', text: "Lambda creates shared Hyperplane Elastic Network Interfaces (ENIs) per subnet during configuration" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Modern AWS Lambda VPC networking utilizes AWS Hyperplane technology to create shared Elastic Network Interfaces (ENIs) for each subnet/security group combination when the function is configured or updated, reducing VPC cold starts from tens of seconds to milliseconds while conserving private IP addresses across invocations. Lambda inside VPCs does not use public IPs directly.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html",
    tags: ["Lambda", "VPC", "Networking"]
  },
  {
    id: "aws-dva-14",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SQS ScalingConfig Maximum Concurrency",
    scenario: "A Lambda function consumes messages from an Amazon SQS standard queue. Suddenly, a huge surge of 1,000,000 messages arrives, causing the Lambda function to rapidly scale up and exhaust backend database connections.",
    question: "Which event source mapping parameter should the developer set to cap maximum concurrency without modifying account limits?",
    options: [
      { id: 'A', text: "BatchSize" },
      { id: 'B', text: "Maximum Concurrency (ScalingConfig)" },
      { id: 'C', text: "VisibilityTimeout" },
      { id: 'D', text: "ReceiveMessageWaitTimeSeconds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `ScalingConfig` setting `MaximumConcurrency` on an SQS event source mapping allows developers to limit the maximum number of concurrent Lambda instances invoked by that specific queue (between 2 and 1,000), protecting downstream relational databases from being overwhelmed while buffering messages in SQS. BatchSize alters records per invocation, not total concurrent workers.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html",
    tags: ["Lambda", "SQS", "Concurrency"]
  },
  {
    id: "aws-dva-15",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Synchronous Invocation Type",
    scenario: "A frontend application invokes a Lambda function using the AWS SDK. The caller needs to wait for the computation result and parse the HTTP return payload.",
    question: "Which invocation type must be passed in the InvocationType parameter?",
    options: [
      { id: 'A', text: "RequestResponse" },
      { id: 'B', text: "DryRun" },
      { id: 'C', text: "Stream" },
      { id: 'D', text: "Event" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`RequestResponse` specifies synchronous invocation, where the caller connection remains open until the function completes execution and returns the response payload or error. `Event` performs asynchronous execution where Lambda returns HTTP 202 Accepted immediately without waiting for results, and `DryRun` validates parameter permissions without executing code.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html",
    tags: ["Lambda", "SDK", "InvocationType"]
  },
  {
    id: "aws-dva-16",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Maximum Execution Timeout Limit",
    scenario: "A developer writes a long-running report generation function on AWS Lambda. The function terminates abruptly with a Task timed out after 3.00 seconds error.",
    question: "What is the maximum execution timeout that can be configured for a single Lambda invocation?",
    options: [
      { id: 'A', text: "15 minutes (900 seconds)" },
      { id: 'B', text: "5 minutes (300 seconds)" },
      { id: 'C', text: "1 hour (3600 seconds)" },
      { id: 'D', text: "24 hours" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Lambda has a maximum configurable execution timeout of 15 minutes (900 seconds). For background processing jobs that exceed 15 minutes, developers should consider AWS Step Functions, Amazon ECS tasks, or AWS Batch.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html",
    tags: ["Lambda", "Limits", "Timeout"]
  },
  {
    id: "aws-dva-17",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Aliases and Weighted Traffic Routing",
    scenario: "A development team wants to implement blue/green canary deployments for a serverless REST API by routing 10% of user traffic to a new Lambda function version while sending 90% to the stable version.",
    question: "What feature natively supports weighted traffic distribution across two Lambda function versions?",
    options: [
      { id: 'A', text: "Application Load Balancer path routing rules" },
      { id: 'B', text: "CloudWatch Synthetics canaries" },
      { id: 'C', text: "Lambda Aliases with routing configuration weights" },
      { id: 'D', text: "Route 53 latency-based routing records" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Lambda Aliases allow developers to point to a specific function version and assign a percentage routing configuration (e.g. 90% to version 1 and 10% to version 2). This enables native canary and linear traffic shifting when paired with AWS CodeDeploy. Route 53 routes between DNS endpoints rather than function versions.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html",
    tags: ["Lambda", "Aliases", "Canary"]
  },
  {
    id: "aws-dva-18",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Retries with Event Source Mapping on DynamoDB Streams",
    scenario: "A Lambda function experiences errors processing records from a DynamoDB stream. If unhandled, the stream stops processing records on that shard until the 24-hour retention expires.",
    question: "How can a developer configure the event source mapping to drop bad records after 3 failed attempts and continue processing the shard?",
    options: [
      { id: 'A', text: "Delete the DynamoDB stream and recreate it" },
      { id: 'B', text: "Configure Maximum Retry Attempts to 3 and attach an On-Failure Destination" },
      { id: 'C', text: "Increase the DynamoDB write capacity units (WCU)" },
      { id: 'D', text: "Set the Lambda function timeout to 1 second" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For stream-based event sources (DynamoDB Streams and Kinesis), developers can configure `MaximumRetryAttempts` (e.g., 3) and an On-Failure Destination (SQS or SNS). Once records exceed the retry limit, Lambda sends metadata to the destination and advances the shard iterator, preventing shard blockage. Deleting the stream destroys event history.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html",
    tags: ["Lambda", "DynamoDB Streams", "Event Source Mapping"]
  },
  {
    id: "aws-dva-19",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda External Extensions Architecture",
    scenario: "A DevOps engineer wants to send telemetry data to Datadog from Lambda functions without modifying application handler code or adding latency to user responses.",
    question: "Which AWS Lambda capability runs auxiliary monitoring processes in parallel alongside the runtime environment?",
    options: [
      { id: 'A', text: "Lambda External Extensions" },
      { id: 'B', text: "AWS Systems Manager Run Command" },
      { id: 'C', text: "Amazon CloudWatch Synthetics" },
      { id: 'D', text: "Amazon EC2 User Data scripts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Extensions run companion processes within the execution environment alongside function code. External extensions start before runtime initialization and continue running after the function invocation finishes, allowing diagnostic and telemetry tools (such as Datadog, Dynatrace, or AWS AppConfig) to capture metrics and flush logs without adding latency to the main response. SSM Run Command cannot target Lambda microVMs.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-extensions.html",
    tags: ["Lambda", "Extensions", "Telemetry"]
  },
  {
    id: "aws-dva-20",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Basic Execution Role CloudWatch Permissions",
    scenario: "A newly deployed Lambda function fails to write log entries to Amazon CloudWatch Logs, and no log group is created.",
    question: "What is the most likely cause of this issue?",
    options: [
      { id: 'A', text: "The Lambda execution role lacks permissions for logs:CreateLogGroup, logs:CreateLogStream, and logs:PutLogEvents" },
      { id: 'B', text: "CloudWatch Logs does not support serverless architectures" },
      { id: 'C', text: "The developer forgot to install the CloudWatch agent inside the zip file" },
      { id: 'D', text: "Lambda functions only log to local text files in /tmp" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For Lambda to write standard out and error logs to CloudWatch Logs, its execution IAM role must include the `AWSLambdaBasicExecutionRole` policy or explicit permissions for `logs:CreateLogGroup`, `logs:CreateLogStream`, and `logs:PutLogEvents`. CloudWatch natively ingests Lambda logs without requiring agent installations.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
    tags: ["Lambda", "CloudWatch Logs", "IAM"]
  },
  {
    id: "aws-dva-21",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Cost Optimization with Power Tuning",
    scenario: "A CPU-intensive calculation takes 12 seconds to execute on a 128 MB Lambda function. By increasing memory to 1024 MB, the execution time drops to 1.5 seconds.",
    question: "What impact does this change have on execution cost and user experience?",
    options: [
      { id: 'A', text: "Cost increases by a factor of 800% because memory is higher" },
      { id: 'B', text: "The function fails because 1024 MB exceeds AWS limits" },
      { id: 'C', text: "Execution time drops by 87.5% and overall cost remains almost identical or lower due to proportional GB-second billing" },
      { id: 'D', text: "Cold starts increase by 10 minutes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Because AWS Lambda bills based on GB-seconds (gigabyte of RAM multiplied by runtime in seconds), a function that completes 8x faster at 8x memory consumes the same or fewer total GB-seconds while delivering a dramatic 87.5% latency improvement for end users. The AWS Lambda Power Tuning open-source tool automates finding this cost-performance sweet spot.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["Lambda", "Memory", "Cost Optimization"]
  },
  {
    id: "aws-dva-22",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Environment Variables KMS Encryption",
    scenario: "A developer needs to configure sensitive third-party API credentials in Lambda environment variables and ensure they are protected at rest using a customer managed key.",
    question: "Which configuration satisfies this requirement?",
    options: [
      { id: 'A', text: "Use AWS KMS Customer Managed Keys (CMK) with Lambda encryption helpers" },
      { id: 'B', text: "Pass credentials in HTTP query strings during function invocation" },
      { id: 'C', text: "Hardcode credentials in the function code and push to private Git repositories" },
      { id: 'D', text: "Save the API keys in plain text inside the S3 deployment bucket metadata" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda environment variables can be encrypted at rest using custom AWS KMS keys, and developers can use Lambda encryption helpers or AWS Secrets Manager to decrypt sensitive values client-side. Hardcoding secrets in code violates security standards, and plain text storage in bucket metadata or query strings exposes credentials.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html",
    tags: ["Lambda", "Security", "KMS"]
  },
  {
    id: "aws-dva-23",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Runtime Upgrades and Maintenance",
    scenario: "A security scan alerts that Node.js 14 runtime has reached end-of-life on AWS Lambda and must be upgraded across 50 functions.",
    question: "What step must the developer take to update the execution runtime?",
    options: [
      { id: 'A', text: "Compile Node.js 20 binaries into a Lambda Layer and invoke them via shell script" },
      { id: 'B', text: "Reboot the AWS data center hosting the serverless fleet" },
      { id: 'C', text: "Update the runtime parameter in the function configuration or SAM template to nodejs20.x" },
      { id: 'D', text: "Provision a new Amazon EC2 instance and install Node.js manually" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Updating the managed runtime in Lambda configuration, CloudFormation, or SAM templates (`runtime: nodejs20.x`) directs AWS Lambda to execute the code using the updated managed runtime container image, ensuring security patches and active support without infrastructure management.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html",
    tags: ["Lambda", "Runtimes", "Maintenance"]
  },
  {
    id: "aws-dva-24",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Destinations vs DLQ Metadata Richness",
    scenario: "A developer is evaluating whether to migrate legacy Lambda asynchronous error handling from Dead Letter Queues (DLQs) to Lambda Destinations.",
    question: "What critical information is included in a Lambda Destination failure payload that is missing from an SQS DLQ message?",
    options: [
      { id: 'A', text: "The complete stack trace, error message, and execution context details" },
      { id: 'B', text: "The caller IAM user credentials and access key secret" },
      { id: 'C', text: "The physical server rack ID hosting the hypervisor" },
      { id: 'D', text: "The unencrypted AWS root account password" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Destinations provide rich JSON execution records containing the function ARN, request context, original invocation payload, response payload, error code, and detailed stack trace. In contrast, legacy DLQs only receive the original raw invocation payload without explanation of why the function failed.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
    tags: ["Lambda", "Destinations", "DLQ"]
  },
  {
    id: "aws-dva-25",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Provisioned Concurrency Auto Scaling",
    scenario: "An e-commerce Lambda function handles regular traffic surges every day at 12:00 PM and 6:00 PM. Provisioned Concurrency is costly if left at maximum capacity 24/7.",
    question: "How can the developer dynamically scale Provisioned Concurrency based on schedule or utilization?",
    options: [
      { id: 'A', text: "Configure Application Auto Scaling with scheduled actions or target tracking for Provisioned Concurrency" },
      { id: 'B', text: "Deploy a cron job on an EC2 instance that updates the function timeout" },
      { id: 'C', text: "Write an endless loop in the Lambda handler that sleeps between requests" },
      { id: 'D', text: "Enable DynamoDB Auto Scaling on the Lambda function" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Auto Scaling integrates natively with Lambda Provisioned Concurrency, allowing developers to configure Target Tracking scaling policies (e.g. maintaining utilization at 70%) or Scheduled Scaling actions (scaling up before anticipated traffic surges and down afterwards) to minimize costs. Lambda timeouts have no effect on concurrency.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/monitoring-concurrency.html",
    tags: ["Lambda", "Auto Scaling", "Provisioned Concurrency"]
  }
];

export default AWS_DVA_QUESTIONS_1;
