export const AWS_DVA_FLASHCARDS_3 = [
  {
    id: "aws-dva-fc-51",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: OpenAPI Extensions",
    hint: "Configuring integrations in Swagger/OpenAPI.",
    back: "API Gateway uses vendor extensions prefixed with <strong><code>x-amazon-apigateway-*</code></strong> (e.g. <code>x-amazon-apigateway-integration</code>) to embed backend routing and auth in OpenAPI specifications.",
    tags: ["API Gateway", "OpenAPI", "Swagger"]
  },
  {
    id: "aws-dva-fc-52",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Cache Invalidation Header",
    hint: "Flushing individual cached resources.",
    back: "Callers with <code>execute-api:InvalidateCache</code> permissions send the <strong><code>Cache-Control: max-age=0</code></strong> header to force API Gateway to fetch fresh data and update the cached entry.",
    tags: ["API Gateway", "Caching", "Cache Invalidation"]
  },
  {
    id: "aws-dva-fc-53",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: X-Ray Tracing Header",
    hint: "Distributed tracing across hops.",
    back: "When X-Ray tracing is enabled on a stage, API Gateway injects the <strong><code>X-Amzn-Trace-Id</code></strong> header into incoming requests and transmits trace segments to AWS X-Ray.",
    tags: ["API Gateway", "X-Ray", "Distributed Tracing"]
  },
  {
    id: "aws-dva-fc-54",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Integration Timeout Limit",
    hint: "Maximum backend processing window.",
    back: "API Gateway enforces a hard maximum integration timeout of <strong>29 seconds</strong>. Backends taking longer trigger an HTTP <strong>504 Gateway Timeout</strong>.",
    tags: ["API Gateway", "Limits", "Timeout"]
  },
  {
    id: "aws-dva-fc-55",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Cross-Account Lambda Invocation",
    hint: "Invoking functions in external AWS accounts.",
    back: "Cross-account invocation requires adding a statement to the Lambda function's <strong>resource-based policy</strong> in the target account granting <code>lambda:InvokeFunction</code> to the caller API Gateway ARN.",
    tags: ["API Gateway", "Lambda", "Cross-Account"]
  },
  {
    id: "aws-dva-fc-56",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Partition Key Cardinality",
    hint: "Preventing hot partitions.",
    back: "A well-designed <strong>partition key</strong> has high cardinality (many distinct values, e.g. <code>userId</code>, <code>orderId</code>), ensuring data and I/O requests are evenly distributed across physical partitions.",
    tags: ["DynamoDB", "Partition Key", "Scalability"]
  },
  {
    id: "aws-dva-fc-57",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Query vs. Scan",
    hint: "Efficient data access patterns.",
    back: "<strong>Query</strong> finds items using primary or index partition keys, consuming capacity only for returned items. <strong>Scan</strong> examines every item in the entire table before filtering, which is slow and costly.",
    tags: ["DynamoDB", "Query", "Scan", "Optimization"]
  },
  {
    id: "aws-dva-fc-58",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Read Consistency & RCU Calculation",
    hint: "Balancing consistency and cost.",
    back: "An <strong>Eventually Consistent Read</strong> (default) consumes <strong>0.5 RCU</strong> per 4 KB item. A <strong>Strongly Consistent Read</strong> guarantees the latest data but consumes <strong>1 full RCU</strong> per 4 KB.",
    tags: ["DynamoDB", "Read Consistency", "RCU"]
  },
  {
    id: "aws-dva-fc-59",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: GSI vs. LSI",
    hint: "Key differences in secondary indexes.",
    back: "<strong>GSI</strong> can have different partition/sort keys, has separate provisioned capacity, and can be added/deleted anytime. <strong>LSI</strong> must share the base table partition key and must be created at table creation.",
    tags: ["DynamoDB", "GSI", "LSI", "Indexes"]
  },
  {
    id: "aws-dva-fc-60",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Optimistic Locking",
    hint: "Preventing concurrent overwrite race conditions.",
    back: "<strong>Optimistic locking</strong> uses a version number attribute. Updates specify a <strong>ConditionExpression</strong> verifying the version has not changed. If concurrent writes occurred, a <code>ConditionalCheckFailedException</code> is raised.",
    tags: ["DynamoDB", "Optimistic Locking", "ConditionExpression"]
  },
  {
    id: "aws-dva-fc-61",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: TransactWriteItems vs. BatchWriteItem",
    hint: "ACID guarantees vs bulk execution.",
    back: "<strong>TransactWriteItems</strong> provides atomic (all-or-nothing) ACID guarantees across up to 100 items. <strong>BatchWriteItem</strong> performs non-atomic batch writes where individual item operations can fail independently.",
    tags: ["DynamoDB", "Transactions", "TransactWriteItems"]
  },
  {
    id: "aws-dva-fc-62",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Streams Retention & StreamViewType",
    hint: "Tracking item-level modifications.",
    back: "<strong>DynamoDB Streams</strong> stores time-ordered change logs for <strong>24 hours</strong>. <code>StreamViewType</code> controls whether the stream emits keys only, new image, old image, or both new and old images.",
    tags: ["DynamoDB", "DynamoDB Streams", "Event-Driven"]
  },
  {
    id: "aws-dva-fc-63",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Time to Live (TTL)",
    hint: "Zero-cost item expiration.",
    back: "<strong>TTL</strong> automatically purges expired records based on a Unix epoch timestamp attribute. TTL deletions occur in the background at <strong>zero consumed write capacity cost</strong>.",
    tags: ["DynamoDB", "TTL", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-64",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: DAX (DynamoDB Accelerator)",
    hint: "Microsecond in-memory caching.",
    back: "<strong>DAX</strong> is a fully managed, in-memory cache for DynamoDB delivering <strong>microsecond read latency</strong>. It is API-compatible with DynamoDB, requiring zero application logic refactoring.",
    tags: ["DynamoDB", "DAX", "Caching", "Performance"]
  },
  {
    id: "aws-dva-fc-65",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: WCU Formula",
    hint: "Calculating write throughput.",
    back: "1 <strong>WCU</strong> writes 1 item up to <strong>1 KB per second</strong>. Item sizes round UP to the nearest KB (e.g. 2.5 KB -> 3 KB = 3 WCU per write).",
    tags: ["DynamoDB", "WCU", "Capacity Planning"]
  },
  {
    id: "aws-dva-fc-66",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: RCU Formula for Strong Consistency",
    hint: "Calculating read throughput.",
    back: "1 <strong>RCU</strong> provides 1 strongly consistent read per second for an item up to <strong>4 KB</strong>. Sizes round UP to 4 KB chunks (e.g. 7.5 KB -> 8 KB = 2 RCU per read).",
    tags: ["DynamoDB", "RCU", "Capacity Planning"]
  },
  {
    id: "aws-dva-fc-67",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: ProjectionExpression vs. FilterExpression",
    hint: "Selecting specific attributes.",
    back: "<strong>ProjectionExpression</strong> limits which attributes are returned across the wire to conserve bandwidth. <strong>FilterExpression</strong> filters items after reading, which discards data but does NOT reduce consumed RCU.",
    tags: ["DynamoDB", "ProjectionExpression", "Performance"]
  },
  {
    id: "aws-dva-fc-68",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "DynamoDB: Query Pagination",
    hint: "Handling 1 MB query result boundaries.",
    back: "DynamoDB Query responses are capped at <strong>1 MB</strong>. If more matching records exist, DynamoDB returns <strong>LastEvaluatedKey</strong>, which clients supply as <strong>ExclusiveStartKey</strong> on the next call.",
    tags: ["DynamoDB", "Pagination", "LastEvaluatedKey"]
  },
  {
    id: "aws-dva-fc-69",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "SQS: Standard vs. FIFO Queues",
    hint: "Ordering and deduplication guarantees.",
    back: "<strong>FIFO queues</strong> guarantee exact ordering and strictly once processing (up to 3,000 msgs/sec with batching). <strong>Standard queues</strong> offer nearly unlimited throughput and at-least-once delivery with best-effort ordering.",
    tags: ["SQS", "FIFO", "Messaging"]
  },
  {
    id: "aws-dva-fc-70",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "SQS: Visibility Timeout",
    hint: "Preventing duplicate consumer processing.",
    back: "The <strong>Visibility Timeout</strong> (default 30s, max 12 hours) hides a message from other consumers while being processed. Consumers call <strong>ChangeMessageVisibility</strong> to extend the lease if extra time is needed.",
    tags: ["SQS", "Visibility Timeout", "ChangeMessageVisibility"]
  },
  {
    id: "aws-dva-fc-71",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "SQS: Long Polling (ReceiveMessageWaitTimeSeconds)",
    hint: "Minimizing empty ReceiveMessage calls.",
    back: "<strong>Long Polling</strong> waits up to <strong>20 seconds</strong> for messages to arrive at the queue before returning an empty response, eliminating empty receives and dramatically lowering API costs.",
    tags: ["SQS", "Long Polling", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-72",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "SQS: Dead Letter Queue (DLQ) & maxReceiveCount",
    hint: "Isolating poisoned messages.",
    back: "A <strong>Redrive Policy</strong> routes messages that fail processing to a <strong>Dead Letter Queue (DLQ)</strong> once the receive count exceeds <strong>maxReceiveCount</strong>, preventing infinite retry loops.",
    tags: ["SQS", "DLQ", "Redrive Policy"]
  },
  {
    id: "aws-dva-fc-73",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "SNS + SQS: Fanout Pattern",
    hint: "Decoupled asynchronous broadcasting.",
    back: "The <strong>Fanout pattern</strong> publishes events to a central <strong>Amazon SNS topic</strong>, which replicates the payload across multiple <strong>Amazon SQS queues</strong> for independent, parallel processing.",
    tags: ["SNS", "SQS", "Fanout", "Architecture"]
  },
  {
    id: "aws-dva-fc-74",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "SNS: Subscription Filter Policies",
    hint: "Server-side message routing.",
    back: "<strong>Subscription Filter Policies</strong> filter messages at the SNS topic level based on message attributes or JSON payloads, delivering only matching events to specific subscriber queues.",
    tags: ["SNS", "Subscription Filter Policy", "Messaging"]
  },
  {
    id: "aws-dva-fc-75",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "Amazon EventBridge: Content-Based Event Routing",
    hint: "Modern serverless event routing.",
    back: "<strong>Amazon EventBridge</strong> is a serverless event bus that evaluates events against declarative <strong>JSON rules</strong> and routes payloads to over 20 AWS targets (Lambda, SQS, Step Functions, Firehose).",
    tags: ["EventBridge", "Event Bus", "EDA"]
  }
];

export default AWS_DVA_FLASHCARDS_3;
