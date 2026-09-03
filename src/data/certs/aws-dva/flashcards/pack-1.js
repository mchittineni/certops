export const AWS_DVA_FLASHCARDS_1 = [
  {
    id: "aws-dva-fc-1",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Provisioned Concurrency",
    hint: "Pre-initializing execution environments.",
    back: "<strong>Provisioned Concurrency</strong> initializes a requested number of runtime environments in advance. Invocations execute immediately with double-digit millisecond latency, eliminating cold starts for critical services.",
    tags: ["Lambda", "Serverless", "Provisioned Concurrency"]
  },
  {
    id: "aws-dva-fc-2",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Database Connection Pooling with RDS Proxy",
    hint: "Preventing database exhaustion under serverless scale.",
    back: "<strong>Amazon RDS Proxy</strong> pools and multiplexes database connections, allowing thousands of ephemeral Lambda instances to share a controlled pool of connections without overloading PostgreSQL or MySQL.",
    tags: ["Lambda", "RDS Proxy", "Database"]
  },
  {
    id: "aws-dva-fc-3",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Ephemeral Storage (/tmp) Limits",
    hint: "Configurable scratch disk capacity.",
    back: "Lambda provides configurable <strong>ephemeral storage (/tmp)</strong> ranging from <strong>512 MB to 10,240 MB (10 GB)</strong> for processing large files locally during execution.",
    tags: ["Lambda", "Storage", "Limits"]
  },
  {
    id: "aws-dva-fc-4",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Layers Maximum Size",
    hint: "Uncompressed size boundary for layers and packages.",
    back: "The total uncompressed size limit for a Lambda function deployment package, including all attached <strong>Lambda Layers</strong>, is <strong>250 MB</strong>.",
    tags: ["Lambda", "Lambda Layers", "Packaging"]
  },
  {
    id: "aws-dva-fc-5",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: BisectBatchOnFunctionError",
    hint: "Isolating poison pills in Kinesis and DynamoDB streams.",
    back: "When enabled on an event source mapping, <strong>BisectBatchOnFunctionError</strong> splits a failed batch in half upon error and retries recursively until the single corrupted record is isolated and sent to an On-Failure destination.",
    tags: ["Lambda", "Kinesis", "Event Source Mapping"]
  },
  {
    id: "aws-dva-fc-6",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Destinations vs. DLQs",
    hint: "Rich execution metadata on async failure.",
    back: "<strong>Destinations</strong> pass rich JSON metadata including invocation context, response payload, and stack traces to SQS, SNS, or EventBridge. Legacy <strong>DLQs</strong> only pass the original input payload.",
    tags: ["Lambda", "Destinations", "Error Handling"]
  },
  {
    id: "aws-dva-fc-7",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Global Scope Execution Reuse",
    hint: "Minimizing initialization latency.",
    back: "Objects and SDK clients declared <strong>outside the handler in global scope</strong> remain initialized in memory across warm invocations, reducing execution duration and database connection churn.",
    tags: ["Lambda", "Optimization", "Warm Starts"]
  },
  {
    id: "aws-dva-fc-8",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Container Image Maximum Size",
    hint: "Deploying containerized serverless functions.",
    back: "Lambda supports container images packaged in Amazon ECR up to <strong>10 GB</strong> in size, enabling large dependencies and machine learning inference runtimes.",
    tags: ["Lambda", "Container Images", "ECR"]
  },
  {
    id: "aws-dva-fc-9",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Reserved Concurrency",
    hint: "Guaranteed capacity and throttling cap.",
    back: "<strong>Reserved Concurrency</strong> guarantees a dedicated pool of concurrency for a function while preventing it from scaling beyond that threshold, safeguarding both the function and downstream resources.",
    tags: ["Lambda", "Concurrency", "Reserved Concurrency"]
  },
  {
    id: "aws-dva-fc-10",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: SnapStart",
    hint: "Sub-second cold starts for Java.",
    back: "<strong>Lambda SnapStart</strong> takes a Firecracker microVM memory snapshot of initialized Java functions upon version publication. Invocations resume from the cached snapshot, slashing cold starts by up to 90%.",
    tags: ["Lambda", "SnapStart", "Java"]
  },
  {
    id: "aws-dva-fc-11",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Maximum Memory & vCPU Scaling",
    hint: "Proportional compute allocation.",
    back: "Memory can be configured from <strong>128 MB to 10,240 MB</strong>. CPU scales proportionally: at <strong>1,769 MB</strong>, Lambda allocates 1 full vCPU, scaling up to 6 vCPUs at 10 GB.",
    tags: ["Lambda", "CPU", "Memory"]
  },
  {
    id: "aws-dva-fc-12",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Function URLs Authentication Modes",
    hint: "Exposing HTTPS endpoints without API Gateway.",
    back: "Function URLs support two auth types: <code>AWS_IAM</code> (callers must sign requests with SigV4) and <code>NONE</code> (public unauthenticated access with optional CORS rules).",
    tags: ["Lambda", "Function URLs", "IAM"]
  },
  {
    id: "aws-dva-fc-13",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Hyperplane VPC Networking",
    hint: "Low-latency private subnet connectivity.",
    back: "AWS Lambda uses <strong>Hyperplane ENIs</strong> created per subnet and security group during configuration, eliminating the legacy multi-second VPC cold start penalty.",
    tags: ["Lambda", "VPC", "Networking"]
  },
  {
    id: "aws-dva-fc-14",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: SQS Maximum Concurrency Setting",
    hint: "Throttling queue consumers gracefully.",
    back: "The <strong>Maximum Concurrency</strong> setting on an SQS event source mapping limits how many concurrent Lambda instances can be spawned by that queue, protecting downstream databases.",
    tags: ["Lambda", "SQS", "Concurrency"]
  },
  {
    id: "aws-dva-fc-15",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Invocation Types",
    hint: "Synchronous vs asynchronous execution modes.",
    back: "<code>RequestResponse</code> executes <strong>synchronously</strong> and returns execution results. <code>Event</code> executes <strong>asynchronously</strong>, returning HTTP 202 Accepted immediately while Lambda handles retries.",
    tags: ["Lambda", "SDK", "InvocationType"]
  },
  {
    id: "aws-dva-fc-16",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Maximum Execution Timeout",
    hint: "Hard limit on single invocation duration.",
    back: "The maximum execution timeout for an AWS Lambda function is <strong>15 minutes (900 seconds)</strong>. Workloads exceeding 15 minutes should use Step Functions or ECS.",
    tags: ["Lambda", "Limits", "Timeout"]
  },
  {
    id: "aws-dva-fc-17",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Aliases & Versioning",
    hint: "Mutable pointers to immutable snapshots.",
    back: "A Lambda <strong>version</strong> is an immutable snapshot of code and configuration. An <strong>alias</strong> is a mutable pointer (e.g. <code>PROD</code>) that can route traffic across versions with assigned percentage weights.",
    tags: ["Lambda", "Aliases", "Canary"]
  },
  {
    id: "aws-dva-fc-18",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Stream Retry Configuration",
    hint: "Preventing blocked shards.",
    back: "Configuring <strong>Maximum Retry Attempts</strong> and an <strong>On-Failure Destination</strong> allows stream event source mappings to isolate poisoned records after specified failures and proceed with subsequent shard records.",
    tags: ["Lambda", "DynamoDB Streams", "Event Source Mapping"]
  },
  {
    id: "aws-dva-fc-19",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Extensions Lifecycle",
    hint: "Integrating observability tools seamlessly.",
    back: "<strong>External extensions</strong> run as separate companion processes in the execution environment, starting before runtime initialization and continuing after invocations to flush telemetry.",
    tags: ["Lambda", "Extensions", "Telemetry"]
  },
  {
    id: "aws-dva-fc-20",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Basic Execution Role Permissions",
    hint: "Mandatory policy for CloudWatch logging.",
    back: "The <code>AWSLambdaBasicExecutionRole</code> managed policy grants permissions to create log groups, create log streams, and write log events via <code>logs:PutLogEvents</code>.",
    tags: ["Lambda", "CloudWatch Logs", "IAM"]
  },
  {
    id: "aws-dva-fc-21",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Power Tuning",
    hint: "Balancing cost and execution speed.",
    back: "The open-source <strong>AWS Lambda Power Tuning</strong> state machine tests functions across multiple memory configurations to find the optimal trade-off between speed and execution cost.",
    tags: ["Lambda", "Memory", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-22",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Environment Variable Size Limit",
    hint: "Capacity constraint for configuration keys and values.",
    back: "The total combined size of all environment variables for a Lambda function cannot exceed <strong>4 KB</strong>. Larger configurations should be fetched from Systems Manager Parameter Store or Secrets Manager.",
    tags: ["Lambda", "Security", "KMS"]
  },
  {
    id: "aws-dva-fc-23",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Managed Runtime Lifecycle",
    hint: "Upgrading runtime versions cleanly.",
    back: "Managed runtimes (e.g. <code>nodejs20.x</code>, <code>python3.12</code>) are upgraded by updating the function configuration or template, receiving automated security patches and OS kernel updates from AWS.",
    tags: ["Lambda", "Runtimes", "Maintenance"]
  },
  {
    id: "aws-dva-fc-24",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Dead-Letter Queue Target Types",
    hint: "Services supported by legacy Lambda DLQs.",
    back: "A Lambda function DLQ supports exactly two target service types: an <strong>Amazon SQS queue</strong> or an <strong>Amazon SNS topic</strong>.",
    tags: ["Lambda", "Destinations", "DLQ"]
  },
  {
    id: "aws-dva-fc-25",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Scaling Metric for Provisioned Concurrency",
    hint: "CloudWatch metric for capacity planning.",
    back: "<strong>ProvisionedConcurrencyUtilization</strong> tracks the percentage of provisioned capacity in use. Target tracking auto-scaling uses this metric to scale provisioned capacity dynamically.",
    tags: ["Lambda", "Auto Scaling", "Provisioned Concurrency"]
  }
];

export default AWS_DVA_FLASHCARDS_1;
