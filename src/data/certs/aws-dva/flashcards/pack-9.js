export const AWS_DVA_FLASHCARDS_9 = [
  {
    id: "aws-dva-fc-201",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Rollback Triggers",
    hint: "Alarm-driven infrastructure rollback.",
    back: "<strong>Rollback Triggers</strong> monitor CloudWatch Alarms during stack provisioning, automatically rolling back changes if operational thresholds are breached.",
    tags: ["CloudFormation", "Rollback Triggers", "Resilience"]
  },
  {
    id: "aws-dva-fc-202",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: Termination Protection",
    hint: "Preventing accidental stack deletion.",
    back: "<strong>Termination Protection</strong> prevents users from deleting critical CloudFormation stacks until protection is explicitly disabled.",
    tags: ["CloudFormation", "Termination Protection", "Safety"]
  },
  {
    id: "aws-dva-fc-203",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CloudFormation: package Command",
    hint: "Packaging local artifacts to S3.",
    back: "The <strong>aws cloudformation package</strong> command zips local code directories, uploads them to S3, and replaces local paths in the template with S3 locations.",
    tags: ["CloudFormation", "CLI", "aws cloudformation package"]
  },
  {
    id: "aws-dva-fc-204",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: AllAtOnce Configuration",
    hint: "Fastest simultaneous deployment.",
    back: "<strong>CodeDeployDefault.AllAtOnce</strong> deploys to all instances concurrently for maximum speed, accepting downtime on single-instance fleets.",
    tags: ["CodeDeploy", "AllAtOnce", "Deployment Configurations"]
  },
  {
    id: "aws-dva-fc-205",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d3",
    front: "CodeDeploy: OneAtATime Configuration",
    hint: "Gradual single-instance rollouts.",
    back: "<strong>CodeDeployDefault.OneAtATime</strong> updates instances sequentially one-by-one, guaranteeing maximum capacity remains active during rollouts.",
    tags: ["CodeDeploy", "OneAtATime", "High Availability"]
  },
  {
    id: "aws-dva-fc-206",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Annotations vs. Metadata",
    hint: "Searchable vs detailed trace context.",
    back: "<strong>Annotations</strong> are indexed key-value pairs used with filter expressions to search traces. <strong>Metadata</strong> is unindexed and holds detailed diagnostic data (objects/arrays) not searchable in console queries.",
    tags: ["X-Ray", "Annotations", "Metadata"]
  },
  {
    id: "aws-dva-fc-207",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Segments vs. Subsegments",
    hint: "Granular latency attribution.",
    back: "A <strong>Segment</strong> represents the host compute environment (e.g. Lambda/EC2). <strong>Subsegments</strong> break down work inside the segment, recording timing for downstream HTTP requests, database queries, and custom code.",
    tags: ["X-Ray", "Subsegments", "Instrumentation"]
  },
  {
    id: "aws-dva-fc-208",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Sampling Rules (Reservoir & FixedRate)",
    hint: "Controlling trace volume and cost.",
    back: "X-Ray sampling rules configure a <strong>Reservoir</strong> (guaranteed traces per second, e.g. 1/sec) and a <strong>FixedRate</strong> percentage for excess traffic, providing representative tracing at controlled cost.",
    tags: ["X-Ray", "Sampling Rules", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-209",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Daemon Port & Protocol",
    hint: "Fast non-blocking trace transmission.",
    back: "The AWS X-Ray daemon listens on <strong>UDP port 2000</strong>. Using UDP ensures that emitting telemetry segments is completely non-blocking and does not slow down user application threads.",
    tags: ["X-Ray", "Daemon", "UDP"]
  },
  {
    id: "aws-dva-fc-210",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Embedded Metric Format (EMF)",
    hint: "Zero-latency asynchronous custom metrics.",
    back: "<strong>Embedded Metric Format (EMF)</strong> embeds metric directives in structured JSON log entries. CloudWatch Logs ingests the log and automatically extracts and graphs the metric asynchronously without PutMetricData API latency.",
    tags: ["CloudWatch", "EMF", "Metrics"]
  },
  {
    id: "aws-dva-fc-211",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Metric Filters",
    hint: "Transforming log text into graphable metrics.",
    back: "A <strong>Metric Filter</strong> monitors CloudWatch Logs in real time, matching text patterns (e.g. <code>ERROR</code>) and incrementing a custom CloudWatch metric that can trigger automated alarms.",
    tags: ["CloudWatch", "Metric Filters", "Monitoring"]
  },
  {
    id: "aws-dva-fc-212",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Logs Insights",
    hint: "Interactive serverless log querying.",
    back: "<strong>CloudWatch Logs Insights</strong> queries and aggregates millions of log entries across log groups with a dedicated syntax (<code>fields</code>, <code>filter</code>, <code>stats</code>, <code>sort</code>) for rapid troubleshooting.",
    tags: ["CloudWatch", "Logs Insights", "Troubleshooting"]
  },
  {
    id: "aws-dva-fc-213",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "ElastiCache: Lazy Loading (Cache-Aside)",
    hint: "On-demand cache population.",
    back: "In <strong>Lazy Loading (Cache-Aside)</strong>, data is loaded into the cache only when a cache miss occurs. Unrequested data never consumes cache memory, but initial requests suffer a cache-miss latency penalty.",
    tags: ["ElastiCache", "Caching", "Lazy Loading"]
  },
  {
    id: "aws-dva-fc-214",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "ElastiCache: Write-Through Pattern",
    hint: "Synchronous cache consistency.",
    back: "In <strong>Write-Through</strong> caching, every database write is paired with an immediate cache update, guaranteeing cached items are never stale at the cost of slightly higher write latency.",
    tags: ["ElastiCache", "Write-Through", "Caching"]
  },
  {
    id: "aws-dva-fc-215",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "ElastiCache: Redis vs. Memcached",
    hint: "Choosing the right in-memory engine.",
    back: "<strong>Redis</strong> supports rich data structures (sets, hashes), multi-AZ replication, persistence, and clustering. <strong>Memcached</strong> is a pure multi-threaded string/object cache without persistence or replicas.",
    tags: ["ElastiCache", "Redis", "Memcached"]
  },
  {
    id: "aws-dva-fc-216",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3: Multipart Upload",
    hint: "Reliable large object uploads.",
    back: "<strong>Multipart Upload</strong> splits objects into parts (5 MB to 5 GB) uploaded in parallel. It is recommended for files > <strong>100 MB</strong> and mandatory for files > <strong>5 GB</strong>.",
    tags: ["S3", "Multipart Upload", "Performance"]
  },
  {
    id: "aws-dva-fc-217",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3: Byte-Range Fetches",
    hint: "Downloading specific object segments.",
    back: "Using the <strong>Range: bytes=start-end</strong> HTTP header allows applications to download specific byte segments in parallel or resume interrupted transfers without re-downloading the entire object.",
    tags: ["S3", "Byte-Range Fetches", "Performance"]
  },
  {
    id: "aws-dva-fc-218",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "S3: Transfer Acceleration",
    hint: "Fast global uploads via edge locations.",
    back: "<strong>S3 Transfer Acceleration</strong> enables fast, secure uploads over long distances by routing traffic through globally distributed <strong>CloudFront Edge Locations</strong> into the AWS private backbone.",
    tags: ["S3", "Transfer Acceleration", "CloudFront"]
  },
  {
    id: "aws-dva-fc-219",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "DynamoDB: Write Sharding / Key Salting",
    hint: "Mitigating hot write partitions.",
    back: "<strong>Write Sharding (Key Salting)</strong> appends random or calculated suffixes (e.g. <code>.1</code> to <code>.10</code>) to popular partition keys, spreading writes evenly across underlying physical partitions.",
    tags: ["DynamoDB", "Write Sharding", "Key Salting"]
  },
  {
    id: "aws-dva-fc-220",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: High-Resolution Metrics",
    hint: "Sub-minute metric precision.",
    back: "Setting <strong>StorageResolution: 1</strong> in <code>PutMetricData</code> records metrics at <strong>1-second resolution</strong>, enabling high-resolution alarms that evaluate within 10 or 30 seconds.",
    tags: ["CloudWatch", "High-Resolution Metrics", "Performance"]
  },
  {
    id: "aws-dva-fc-221",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Service Graph",
    hint: "Visualizing microservice architectures.",
    back: "The <strong>X-Ray Service Graph</strong> renders an interactive topology map of microservices, highlighting error hotspots and latency bottlenecks in color-coded nodes.",
    tags: ["X-Ray", "Service Graph", "Observability"]
  },
  {
    id: "aws-dva-fc-222",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray: Filter Expressions",
    hint: "Filtering traces by latency and error.",
    back: "X-Ray uses dedicated <strong>Filter Expressions</strong> (e.g. <code>responsetime &gt; 2.5 AND error = true</code>) to isolate anomalous execution traces in the console.",
    tags: ["X-Ray", "Filter Expressions", "Troubleshooting"]
  },
  {
    id: "aws-dva-fc-223",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "X-Ray SDK: Outbound HTTP Tracing",
    hint: "Automatic downstream request capture.",
    back: "The X-Ray SDK provides <strong>captureHTTPs</strong> wrappers that automatically generate subsegments for all outbound HTTP/HTTPS calls made by the application.",
    tags: ["X-Ray", "Instrumentation", "HTTP Tracing"]
  },
  {
    id: "aws-dva-fc-224",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Subscription Filters",
    hint: "Real-time log streaming.",
    back: "<strong>Subscription Filters</strong> deliver log events in real time to <strong>Kinesis Data Streams</strong>, <strong>Firehose</strong>, or <strong>Lambda</strong> for forwarding to external SIEM systems.",
    tags: ["CloudWatch", "Subscription Filters", "Streaming"]
  },
  {
    id: "aws-dva-fc-225",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    front: "CloudWatch: Contributor Insights",
    hint: "Identifying top talkers and hot keys.",
    back: "<strong>Contributor Insights</strong> analyzes structured log data to identify the highest contributors ('top talkers') causing capacity spikes or error bursts in real time.",
    tags: ["CloudWatch", "Contributor Insights", "High Cardinality"]
  }
];

export default AWS_DVA_FLASHCARDS_9;
