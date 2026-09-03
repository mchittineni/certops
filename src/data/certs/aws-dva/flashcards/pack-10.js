export const AWS_DVA_FLASHCARDS_10 = [
  {
    id: "aws-dva-fc-226",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Metric Math",
    hint: "Formulas across multiple metrics.",
    back: "<strong>Metric Math</strong> performs real-time calculations across metrics (e.g. <code>(Errors / Total) * 100</code>) to generate percentage error rates for graphing and alerting.",
    tags: ["CloudWatch", "Metric Math", "Alarms"]
  },
  {
    id: "aws-dva-fc-227",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Composite Alarms",
    hint: "Boolean logic across multiple alarms.",
    back: "<strong>Composite Alarms</strong> combine multiple alarms with boolean expressions (<code>AND</code>, <code>OR</code>, <code>NOT</code>), suppressing duplicate alerts and reducing pager fatigue.",
    tags: ["CloudWatch", "Composite Alarms", "Operations"]
  },
  {
    id: "aws-dva-fc-228",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Synthetics Canaries",
    hint: "Simulating end-to-end user journeys.",
    back: "<strong>Synthetics Canaries</strong> run automated headless browser scripts (Puppeteer/Selenium) to continuously test user workflows and endpoints from the outside in.",
    tags: ["CloudWatch", "Synthetics", "Canaries"]
  },
  {
    id: "aws-dva-fc-229",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Unified Agent",
    hint: "Gathering OS-level memory and disk metrics.",
    back: "The <strong>unified CloudWatch Agent</strong> must be installed on EC2 instances to collect in-guest OS telemetry like memory utilization, swap usage, and disk space.",
    tags: ["CloudWatch", "Agent", "EC2 Monitoring"]
  },
  {
    id: "aws-dva-fc-230",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "ElastiCache: Redis Cluster Mode Enabled",
    hint: "Horizontal data sharding.",
    back: "<strong>Cluster Mode Enabled</strong> shards data across multiple node groups using hash slots, providing horizontal scaling of memory (up to petabytes) and write capacity.",
    tags: ["ElastiCache", "Redis", "Cluster Mode"]
  },
  {
    id: "aws-dva-fc-231",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "ElastiCache Redis: Eviction Policies",
    hint: "Memory reclamation strategies.",
    back: "<strong>volatile-lru</strong> evicts the least recently used keys that have an expiration set. <strong>allkeys-lru</strong> evicts any LRU key regardless of TTL.",
    tags: ["ElastiCache", "Redis", "Eviction Policies"]
  },
  {
    id: "aws-dva-fc-232",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "DynamoDB: GSI Write Throttling Backpressure",
    hint: "Index capacity bottlenecks.",
    back: "Writes to a base table fail if a <strong>Global Secondary Index (GSI)</strong> is throttled. Base table write capacity cannot exceed the write capacity of its GSIs.",
    tags: ["DynamoDB", "GSI", "Throttling"]
  },
  {
    id: "aws-dva-fc-233",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "DynamoDB: UnprocessedItems Handling",
    hint: "Retrying throttled batch items.",
    back: "<code>BatchWriteItem</code> returns partial successes with <strong>UnprocessedItems</strong>. Applications must isolate and retry only those failed items with exponential backoff.",
    tags: ["DynamoDB", "BatchWriteItem", "Exponential Backoff"]
  },
  {
    id: "aws-dva-fc-234",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "DynamoDB: On-Demand vs. Provisioned",
    hint: "Elastic request-based scaling.",
    back: "<strong>On-Demand mode</strong> scales instantly to accommodate spiky, unpredictable workloads without capacity planning, charging per read/write request unit.",
    tags: ["DynamoDB", "On-Demand", "Capacity Planning"]
  },
  {
    id: "aws-dva-fc-235",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3: S3 Select",
    hint: "Server-side SQL filtering on S3.",
    back: "<strong>S3 Select</strong> filters CSV, JSON, or Parquet objects directly on S3 servers using SQL queries, returning only matching rows to dramatically reduce network transfer time.",
    tags: ["S3", "S3 Select", "Performance"]
  },
  {
    id: "aws-dva-fc-236",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3: Inventory Reports",
    hint: "Scheduled automated bucket listings.",
    back: "<strong>S3 Inventory</strong> delivers daily or weekly reports of all bucket objects and encryption states in CSV/ORC, eliminating expensive repetitive <code>ListObjects</code> API calls.",
    tags: ["S3", "S3 Inventory", "Auditing"]
  },
  {
    id: "aws-dva-fc-237",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudFront: Cache Policy TTL Settings",
    hint: "Enforcing caching boundaries.",
    back: "CloudFront <strong>Minimum TTL</strong> overrides origin headers that specify shorter caching periods, guaranteeing objects remain cached at the edge for at least that minimum duration.",
    tags: ["CloudFront", "Cache Policy", "TTL"]
  },
  {
    id: "aws-dva-fc-238",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudFront: Versioned URLs vs. Invalidations",
    hint: "Zero-cost instant asset deployment.",
    back: "<strong>Versioned filenames</strong> (e.g. <code>app.v2.js</code>) are preferred over invalidations because they update instantly worldwide at zero cost without API limits or propagation delays.",
    tags: ["CloudFront", "Invalidations", "Best Practices"]
  },
  {
    id: "aws-dva-fc-239",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "Lambda: Power Tuning",
    hint: "Optimizing memory and cost tradeoffs.",
    back: "<strong>AWS Lambda Power Tuning</strong> benchmarks functions across memory tiers (128 MB to 10 GB) to find the sweet spot between execution speed and cost.",
    tags: ["Lambda", "Power Tuning", "Optimization"]
  },
  {
    id: "aws-dva-fc-240",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "API Gateway: 504 Gateway Timeout",
    hint: "Backend integration latency limit.",
    back: "An HTTP <strong>504 Gateway Timeout</strong> occurs when the backend endpoint fails to respond within API Gateway's hard <strong>29-second integration timeout</strong> limit.",
    tags: ["API Gateway", "504", "Troubleshooting"]
  },
  {
    id: "aws-dva-fc-241",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "Step Functions: Execution Event History",
    hint: "Auditing workflow state transitions.",
    back: "The <strong>Execution Event History</strong> in Step Functions logs the exact input, output, and error message for every state transition in a workflow.",
    tags: ["Step Functions", "Execution History", "Troubleshooting"]
  },
  {
    id: "aws-dva-fc-242",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "SQS: ApproximateNumberOfMessagesVisible",
    hint: "Backlog auto-scaling metric.",
    back: "<strong>ApproximateNumberOfMessagesVisible</strong> measures messages waiting to be processed, serving as the primary metric for target tracking worker auto-scaling.",
    tags: ["SQS", "CloudWatch Metrics", "Auto Scaling"]
  },
  {
    id: "aws-dva-fc-243",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "Kinesis: WriteProvisionedThroughputExceeded",
    hint: "Producer retry strategies.",
    back: "Throttled Kinesis producers must retry using <strong>exponential backoff with jitter</strong> to prevent retry storms while increasing shard capacity as needed.",
    tags: ["Kinesis", "Throttling", "Resilience"]
  },
  {
    id: "aws-dva-fc-244",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "AWS Health Dashboard: Account-Specific Events",
    hint: "Personalized service health tracking.",
    back: "The <strong>AWS Health Dashboard</strong> emits events to EventBridge when service disruptions or scheduled maintenance impact resources in your specific account.",
    tags: ["AWS Health", "Incident Monitoring", "Reliability"]
  },
  {
    id: "aws-dva-fc-245",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "AWS Trusted Advisor: Best Practice Checks",
    hint: "Automated account optimization.",
    back: "<strong>AWS Trusted Advisor</strong> evaluates accounts across Cost, Security, Fault Tolerance, Performance, and Service Limits to provide automated remediation advice.",
    tags: ["Trusted Advisor", "Optimization", "Well-Architected"]
  },
  {
    id: "aws-dva-fc-246",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3 Glacier: Instant vs. Flexible vs. Deep Archive",
    hint: "Retrieval time differences.",
    back: "<strong>Glacier Instant Retrieval</strong> provides sub-second access for archive data. <strong>Flexible Retrieval</strong> takes minutes to hours. <strong>Deep Archive</strong> takes 12 to 48 hours.",
    tags: ["S3", "Glacier", "Storage Classes"]
  },
  {
    id: "aws-dva-fc-247",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Anomaly Detection",
    hint: "Dynamic metric baseline alerting.",
    back: "<strong>Anomaly Detection</strong> creates dynamic statistical bands around metrics based on historical trends, eliminating false positives from diurnal traffic cycles.",
    tags: ["CloudWatch", "Anomaly Detection", "Machine Learning"]
  },
  {
    id: "aws-dva-fc-248",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "DynamoDB: RCU Calculation for Reads",
    hint: "4 KB chunks and consistency multipliers.",
    back: "Each <strong>4 KB chunk</strong> consumes <strong>1 RCU</strong> for Strongly Consistent reads and <strong>0.5 RCU</strong> for Eventually Consistent reads.",
    tags: ["DynamoDB", "RCU", "Capacity Calculation"]
  },
  {
    id: "aws-dva-fc-249",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "Lambda + SQS: Visibility Timeout Rule",
    hint: "Preventing duplicate message processing.",
    back: "Set the SQS <strong>Visibility Timeout to at least 6x the Lambda function timeout</strong> to prevent message reprocessing while functions are still actively running.",
    tags: ["Lambda", "SQS", "Visibility Timeout"]
  },
  {
    id: "aws-dva-fc-250",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: X-Amzn-Trace-Id Header",
    hint: "Distributed trace context propagation.",
    back: "Propagating the <strong>X-Amzn-Trace-Id</strong> HTTP header across microservice boundaries links downstream subsegments to the parent trace for uninterrupted end-to-end visibility.",
    tags: ["X-Ray", "Trace Header", "Context Propagation"]
  }
];

export default AWS_DVA_FLASHCARDS_10;
