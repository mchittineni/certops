export const AWS_DVA_QUESTIONS_3 = [
  {
    id: "aws-dva-51",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway OpenAPI (Swagger) Import",
    scenario: "A developer has an existing OpenAPI 3.0 definition for a REST API. They want to automate creating the entire API Gateway resource hierarchy, models, and integrations.",
    question: "How should the developer import this specification into API Gateway?",
    options: [
      { id: 'A', text: "Use the API Gateway Import API or aws apigateway put-rest-api with AWS extensions (x-amazon-apigateway-*)" },
      { id: 'B', text: "Convert the YAML file into an S3 bucket lifecycle policy" },
      { id: 'C', text: "Copy each endpoint manually into the console using the click-through wizard" },
      { id: 'D', text: "Compile the OpenAPI file into a Linux kernel module" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway natively supports importing OpenAPI 2.0 (Swagger) and 3.0 definitions. By adding `x-amazon-apigateway-*` vendor extensions, developers can define integrations, authorizers, and CORS configurations directly in OpenAPI files and deploy them via the AWS CLI or CI/CD pipelines.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api.html",
    tags: ["API Gateway", "OpenAPI", "Swagger"]
  },
  {
    id: "aws-dva-52",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Flush Cache for Specific Keys",
    scenario: "A developer updates a catalog item in the database and needs to invalidate the API Gateway stage cache for that specific item immediately without flushing the entire stage cache.",
    question: "How can an authorized client bypass or invalidate the cache for an individual request?",
    options: [
      { id: 'A', text: "Restart the API Gateway service from the management console" },
      { id: 'B', text: "Change the REST API deployment ID" },
      { id: 'C', text: "Include the Cache-Control: max-age=0 header in the request with appropriate IAM execute-api:InvalidateCache permissions" },
      { id: 'D', text: "Delete and recreate the API Gateway stage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Callers with `execute-api:InvalidateCache` IAM permissions can send a `Cache-Control: max-age=0` header in the HTTP request. API Gateway bypasses the cache, queries the backend, and refreshes the cache entry for that specific cache key without clearing the entire cache.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["API Gateway", "Caching", "Cache Invalidation"]
  },
  {
    id: "aws-dva-53",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway X-Ray Tracing Activation",
    scenario: "A developer is instrumenting a distributed serverless application with AWS X-Ray to trace requests from the client through API Gateway into downstream Lambda functions and DynamoDB.",
    question: "How can the developer enable X-Ray tracing in API Gateway?",
    options: [
      { id: 'A', text: "Add an X-Ray tracking header manually in client browser cookies" },
      { id: 'B', text: "Configure Amazon CloudWatch Logs Insights subscription filters" },
      { id: 'C', text: "Enable X-Ray Tracing checkbox in the API Gateway Stage settings" },
      { id: 'D', text: "Install the X-Ray daemon inside the API Gateway deployment package" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In API Gateway, enabling 'X-Ray Tracing' in Stage settings instructs API Gateway to sample incoming requests, generate the `X-Amzn-Trace-Id` header, and emit trace segments to AWS X-Ray, providing an end-to-end distributed trace across downstream Lambda functions and AWS services.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html",
    tags: ["API Gateway", "X-Ray", "Distributed Tracing"]
  },
  {
    id: "aws-dva-54",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Default Timeout Limit",
    scenario: "A long-running report query takes 35 seconds to compute. When invoked through an API Gateway REST API, the client always receives an HTTP 504 Gateway Timeout error after exactly 29 seconds.",
    question: "What is the maximum integration timeout for an API Gateway request?",
    options: [
      { id: 'A', text: "120 seconds" },
      { id: 'B', text: "15 minutes" },
      { id: 'C', text: "29 seconds" },
      { id: 'D', text: "60 seconds" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "API Gateway REST and HTTP APIs have a hard maximum integration execution timeout of 29 seconds across all integration types (Lambda, HTTP, AWS Services). Operations requiring longer computation must be handled asynchronously via queues, Step Functions, or WebSockets.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html",
    tags: ["API Gateway", "Limits", "Timeout"]
  },
  {
    id: "aws-dva-55",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Cross-Account Lambda Invocation",
    scenario: "A company hosts their API Gateway in Account A and wants it to invoke a backend Lambda function residing in Account B.",
    question: "Which configuration allows API Gateway in Account A to invoke the Lambda function in Account B?",
    options: [
      { id: 'A', text: "Configure an S3 bucket policy in Account B with public read access" },
      { id: 'B', text: "Attach a DynamoDB stream between the two accounts" },
      { id: 'C', text: "Grant lambda:InvokeFunction permissions to the API Gateway execution ARN in the Lambda resource-based policy in Account B" },
      { id: 'D', text: "Create an IAM user in Account A and embed access keys in the API request headers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cross-account Lambda invocation from API Gateway requires adding a permission to the Lambda function's resource-based policy in Account B, granting `lambda:InvokeFunction` to the service principal `apigateway.amazonaws.com` with a source ARN matching the API Gateway in Account A (`arn:aws:execute-api:...`).",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-cross-account-lambda.html",
    tags: ["API Gateway", "Lambda", "Cross-Account"]
  },
  {
    id: "aws-dva-56",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Partition Key Design & High Cardinality",
    scenario: "An online retail store experiences throttling on a DynamoDB table during sales because all orders for today share the partition key `2026-09-03`.",
    question: "How should the developer redesign the primary key to distribute read and write traffic evenly across storage partitions?",
    options: [
      { id: 'A', text: "Scan the entire table instead of querying" },
      { id: 'B', text: "Use a composite primary key with high-cardinality attributes like customer ID or append random suffix hashes (write sharding)" },
      { id: 'C', text: "Decrease the provisioned write capacity units (WCU)" },
      { id: 'D', text: "Use a boolean attribute (active=true) as the partition key" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "DynamoDB partitions data based on the MD5 hash of the partition key. High-cardinality attributes (such as UUIDs, customer IDs, or hash-sharded dates) ensure even distribution of I/O across underlying partitions, preventing hot partitions. Low-cardinality keys concentrate traffic on a single partition and cause throttling.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html",
    tags: ["DynamoDB", "Partition Key", "Scalability"]
  },
  {
    id: "aws-dva-57",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs. Scan Efficiency",
    scenario: "An inventory service retrieves all products belonging to a specific category. A developer uses a Scan operation with a filter expression, resulting in high read capacity consumption and slow responses.",
    question: "How can the developer optimize this retrieval to consume minimal read capacity units?",
    options: [
      { id: 'A', text: "Export the table to S3 on every read operation" },
      { id: 'B', text: "Execute the Scan operation using multiple threads in parallel" },
      { id: 'C', text: "Double the provisioned read capacity units (RCU) on the base table" },
      { id: 'D', text: "Create a Global Secondary Index with category as the partition key and use the Query API" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `Query` operation directly accesses items matching a specific partition key value and optional sort key condition, consuming capacity only for matching items. In contrast, a `Scan` reads every single item in the entire table before applying the filter expression, consuming massive RCU.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-query-scan.html",
    tags: ["DynamoDB", "Query", "Scan", "Optimization"]
  },
  {
    id: "aws-dva-58",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Strongly Consistent vs. Eventually Consistent Reads",
    scenario: "A banking application updates account balances in DynamoDB and immediately reads back the balance to display on a transaction receipt.",
    question: "Which read consistency model guarantees returning the most up-to-date balance at the cost of doubling RCU consumption?",
    options: [
      { id: 'A', text: "Eventually Consistent Read" },
      { id: 'B', text: "Transactional Scan Read" },
      { id: 'C', text: "Strongly Consistent Read" },
      { id: 'D', text: "Lazy Cached Read" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A `Strongly Consistent Read` returns a response with the most up-to-date data, reflecting all successful write operations that occurred prior to the read. It costs 1 Read Capacity Unit (RCU) per 4 KB, whereas an `Eventually Consistent Read` costs 0.5 RCU per 4 KB but may return stale data.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html",
    tags: ["DynamoDB", "Read Consistency", "RCU"]
  },
  {
    id: "aws-dva-59",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Index (GSI) vs Local Secondary Index (LSI)",
    scenario: "A developer designs a DynamoDB table with a partition key `CustomerID` and sort key `OrderDate`. They need to query orders by `Status` across all customers and require dedicated throughput.",
    question: "Which index type should the developer create?",
    options: [
      { id: 'A', text: "Local Secondary Index (LSI) with Status as the partition key" },
      { id: 'B', text: "Global Secondary Index (GSI) with Status as the partition key" },
      { id: 'C', text: "DynamoDB Accelerator (DAX) secondary key" },
      { id: 'D', text: "Composite primary key on the base table" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A Global Secondary Index (GSI) can have a partition key and sort key that differ from the base table, queries across all partitions, can be added or deleted at any time, and has its own independently provisioned read/write capacity. An LSI must share the base table partition key and can only be created at table creation time.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["DynamoDB", "GSI", "LSI", "Indexes"]
  },
  {
    id: "aws-dva-60",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Attribute",
    scenario: "Two concurrent processes attempt to update the same customer profile item in DynamoDB simultaneously. The application must prevent the second update from overwriting the first update.",
    question: "Which DynamoDB pattern ensures optimistic concurrency control?",
    options: [
      { id: 'A', text: "Include a versionNumber attribute and use a ConditionExpression expecting the current versionNumber" },
      { id: 'B', text: "Lock the entire table using a pessimistic database transaction lock" },
      { id: 'C', text: "Disable concurrent writes in DynamoDB table settings" },
      { id: 'D', text: "Route all writes through a single-threaded SQS FIFO queue with a 10-second delay" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Optimistic locking in DynamoDB uses a version attribute (e.g. `versionNumber`). When updating an item, the client increments the version and supplies a `ConditionExpression: versionNumber = :currentVersion`. If another process modified the item in the interim, the condition fails with `ConditionalCheckFailedException`, allowing the application to retry.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html#WorkingWithItems.ConditionalUpdate",
    tags: ["DynamoDB", "Optimistic Locking", "ConditionExpression"]
  },
  {
    id: "aws-dva-61",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Transactions: TransactWriteItems",
    scenario: "A financial ledger microservice must debit Account A and credit Account B in DynamoDB. Either both updates must succeed together, or neither should take effect.",
    question: "Which DynamoDB API operation provides all-or-nothing atomicity across multiple items?",
    options: [
      { id: 'A', text: "PutItem with ReturnValues" },
      { id: 'B', text: "TransactWriteItems" },
      { id: 'C', text: "BatchWriteItem" },
      { id: 'D', text: "UpdateItem in a parallel loop" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`TransactWriteItems` provides ACID transaction guarantees, executing up to 100 write actions or 4 MB of data atomically across multiple items and tables. If any single condition check or write operation fails, the entire transaction is cancelled and rolled back. `BatchWriteItem` performs independent writes without atomicity.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html",
    tags: ["DynamoDB", "Transactions", "TransactWriteItems"]
  },
  {
    id: "aws-dva-62",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams & Lambda Event-Driven Processing",
    scenario: "A retail platform requires real-time fraud analysis whenever a customer profile or payment method is updated in DynamoDB.",
    question: "Which architecture captures item-level change events in chronological sequence?",
    options: [
      { id: 'A', text: "Run a cron job that executes a full table Scan every minute" },
      { id: 'B', text: "Enable DynamoDB Streams on the table and configure an AWS Lambda trigger" },
      { id: 'C', text: "Enable CloudTrail data events and write a custom Bash log parser" },
      { id: 'D', text: "Configure S3 lifecycle rules on the DynamoDB backup bucket" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "DynamoDB Streams captures a time-ordered sequence of item-level modifications (inserts, updates, deletes) in a DynamoDB table and stores them for up to 24 hours. Attaching an AWS Lambda trigger allows real-time, event-driven processing of every database modification.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["DynamoDB", "DynamoDB Streams", "Event-Driven"]
  },
  {
    id: "aws-dva-63",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Time to Live (TTL) Automatic Expiration",
    scenario: "An analytics table stores session tracking data that should be retained for only 30 days. Deleting expired records via batch jobs consumes significant write capacity.",
    question: "What is the most cost-effective and automated way to remove expired items without consuming write capacity?",
    options: [
      { id: 'A', text: "Configure an S3 Glacier archival lifecycle rule" },
      { id: 'B', text: "Schedule a nightly Lambda function that runs a Scan and calls DeleteItem on every expired item" },
      { id: 'C', text: "Decrease the write capacity units (WCU) to zero at midnight" },
      { id: 'D', text: "Enable Time to Live (TTL) on a timestamp attribute in epoch seconds" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "DynamoDB Time to Live (TTL) automatically identifies and purges expired items based on a timestamp attribute formatted in Unix epoch seconds. Deletions performed by TTL do not consume provisioned read or write capacity units, saving costs.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html",
    tags: ["DynamoDB", "TTL", "Cost Optimization"]
  },
  {
    id: "aws-dva-64",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Accelerator (DAX) In-Memory Caching",
    scenario: "A high-traffic gaming leaderboard experiences millions of read requests per second on a DynamoDB table. Read latency must drop from single-digit milliseconds to microseconds.",
    question: "Which fully managed, seamless caching service should the developer deploy?",
    options: [
      { id: 'A', text: "DynamoDB Accelerator (DAX)" },
      { id: 'B', text: "Amazon ElastiCache Memcached cluster" },
      { id: 'C', text: "Amazon CloudFront distribution" },
      { id: 'D', text: "Amazon S3 Transfer Acceleration" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically designed for DynamoDB. It provides microsecond response times for read-heavy workloads and is API-compatible, requiring minimal SDK client changes without altering data models.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["DynamoDB", "DAX", "Caching", "Performance"]
  },
  {
    id: "aws-dva-65",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Write Capacity Units (WCU) Calculation",
    scenario: "An application writes 10 items per second to a DynamoDB table. Each item has a size of 2.5 KB.",
    question: "How many provisioned Write Capacity Units (WCU) are required?",
    options: [
      { id: 'A', text: "25 WCU" },
      { id: 'B', text: "30 WCU" },
      { id: 'C', text: "10 WCU" },
      { id: 'D', text: "3 WCU" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "One Write Capacity Unit (WCU) provides one write per second for an item up to 1 KB in size. An item of 2.5 KB rounds up to the next 1 KB boundary (3 KB), requiring 3 WCU per item. For 10 items per second: 10 * 3 = 30 WCU.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html",
    tags: ["DynamoDB", "WCU", "Capacity Planning"]
  },
  {
    id: "aws-dva-66",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Read Capacity Units (RCU) Calculation for Strong Consistency",
    scenario: "An application performs 10 strongly consistent reads per second on items that are 7.5 KB in size.",
    question: "How many provisioned Read Capacity Units (RCU) are required?",
    options: [
      { id: 'A', text: "20 RCU" },
      { id: 'B', text: "10 RCU" },
      { id: 'C', text: "8 RCU" },
      { id: 'D', text: "40 RCU" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "One Read Capacity Unit (RCU) provides one strongly consistent read per second for an item up to 4 KB. An item of 7.5 KB rounds up to the next 4 KB boundary (8 KB), requiring 2 RCU per item. For 10 reads per second: 10 * 2 = 20 RCU.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html",
    tags: ["DynamoDB", "RCU", "Capacity Planning"]
  },
  {
    id: "aws-dva-67",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB ProjectionExpression for Bandwidth Optimization",
    scenario: "A DynamoDB table contains items with 50 attributes totaling 300 KB. A search endpoint only displays the `title` and `price` attributes on mobile search results.",
    question: "Which parameter should the developer include in the Query operation to retrieve only the required attributes and minimize network transfer?",
    options: [
      { id: 'A', text: "ProjectionExpression" },
      { id: 'B', text: "FilterExpression" },
      { id: 'C', text: "KeyConditionExpression" },
      { id: 'D', text: "ConditionExpression" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `ProjectionExpression` specifies the exact attributes to return from an item, reducing payload size and network serialization overhead over the wire. `FilterExpression` filters results after the read operation has completed on the partition but does not reduce consumed RCU.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html",
    tags: ["DynamoDB", "ProjectionExpression", "Performance"]
  },
  {
    id: "aws-dva-68",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Pagination with LastEvaluatedKey",
    scenario: "A Query operation against a DynamoDB table returns 1 MB of data, reaching the single-response size limit, while more matching records exist in the table.",
    question: "How should the client application retrieve the next page of query results?",
    options: [
      { id: 'A', text: "Increase the DynamoDB single response limit to 100 MB" },
      { id: 'B', text: "Use a Scan operation with a random offset" },
      { id: 'C', text: "Pass the LastEvaluatedKey from the previous response as the ExclusiveStartKey in the subsequent Query request" },
      { id: 'D', text: "Repeat the exact same query with double the RCU" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "DynamoDB limits query responses to 1 MB. When matching data exceeds 1 MB, DynamoDB returns `LastEvaluatedKey`. The client passes this value into `ExclusiveStartKey` on the next Query call to resume retrieval from that point.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.Pagination.html",
    tags: ["DynamoDB", "Pagination", "LastEvaluatedKey"]
  },
  {
    id: "aws-dva-69",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon SQS Standard vs FIFO Queues",
    scenario: "A financial trading platform requires guaranteed first-in, first-out message ordering and zero duplicate messages for stock trade executions.",
    question: "Which SQS queue type should the developer select?",
    options: [
      { id: 'A', text: "Amazon SNS standard topic" },
      { id: 'B', text: "Amazon SQS dead letter queue" },
      { id: 'C', text: "Amazon SQS standard queue with long polling" },
      { id: 'D', text: "Amazon SQS FIFO queue with MessageGroupId and MessageDeduplicationId" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SQS FIFO (First-In-First-Out) queues preserve the exact order in which messages are sent and received, and provide exactly-once processing using message deduplication IDs and message group IDs. Standard queues offer high throughput but cannot guarantee strict ordering or prevent duplicates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["SQS", "FIFO", "Messaging"]
  },
  {
    id: "aws-dva-70",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Visibility Timeout and Extension",
    scenario: "A worker process consumes a message from SQS. Message processing usually takes 20 seconds, but complex jobs can take up to 90 seconds. The queue visibility timeout is 30 seconds.",
    question: "How can the worker prevent other consumers from picking up and processing the message while it is still working on the job?",
    options: [
      { id: 'A', text: "Call the ChangeMessageVisibility API to extend the visibility timeout before the initial 30 seconds expires" },
      { id: 'B', text: "Configure a Dead Letter Queue with maximum receive count set to 1" },
      { id: 'C', text: "Delete the message immediately when received and recreate it if processing fails" },
      { id: 'D', text: "Increase the SQS delay seconds on the queue" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a consumer needs more time to finish processing a message, it can extend the visibility window by calling `ChangeMessageVisibility` periodically, preventing the message from becoming visible to other workers while processing continues.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html",
    tags: ["SQS", "Visibility Timeout", "ChangeMessageVisibility"]
  },
  {
    id: "aws-dva-71",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling",
    scenario: "An application polls an SQS queue continuously. When the queue is empty, the application generates millions of empty ReceiveMessage calls, resulting in high AWS API costs.",
    question: "How should the developer configure polling to eliminate empty responses and reduce costs?",
    options: [
      { id: 'A', text: "Increase the polling frequency to 1 millisecond intervals" },
      { id: 'B', text: "Deploy an EC2 instance that sleeps for 24 hours" },
      { id: 'C', text: "Enable Long Polling by setting ReceiveMessageWaitTimeSeconds to a value between 1 and 20 seconds" },
      { id: 'D', text: "Switch from SQS to an S3 bucket lifecycle rule" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SQS Long Polling (`ReceiveMessageWaitTimeSeconds` up to 20 seconds) keeps the HTTP connection open until a message arrives or the timeout expires, drastically reducing false empty responses, network traffic, and API request costs.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["SQS", "Long Polling", "Cost Optimization"]
  },
  {
    id: "aws-dva-72",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Dead Letter Queue (DLQ) & Redrive Policy",
    scenario: "A consumer fails to process a corrupted message from an SQS queue. The message returns to the queue repeatedly, wasting worker compute cycles in an infinite loop.",
    question: "Which configuration isolates poisoned messages after 5 failed attempts?",
    options: [
      { id: 'A', text: "Configure a Dead Letter Queue (DLQ) with a Redrive Policy setting maxReceiveCount to 5" },
      { id: 'B', text: "Set the queue visibility timeout to 0 seconds" },
      { id: 'C', text: "Enable SQS message deduplication with content-based hashing" },
      { id: 'D', text: "Delete the queue and recreate it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Redrive Policy directs SQS to move a message to a designated Dead Letter Queue (DLQ) after it has been received and failed `maxReceiveCount` times (e.g. 5), allowing developers to analyze and remediate poisoned messages without blocking queue consumers.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["SQS", "DLQ", "Redrive Policy"]
  },
  {
    id: "aws-dva-73",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon SNS Fanout Pattern with SQS",
    scenario: "An e-commerce order placement event must trigger three independent backend systems: Payment Processing, Fraud Detection, and Inventory Management. Each service must process events asynchronously at its own pace.",
    question: "Which architectural pattern satisfies these requirements?",
    options: [
      { id: 'A', text: "Have each service poll the database directly using cron jobs" },
      { id: 'B', text: "Send the order event to a single SQS queue and let all three services compete for messages" },
      { id: 'C', text: "Publish the order event to an Amazon SNS topic and subscribe three dedicated Amazon SQS queues to the topic (Fanout pattern)" },
      { id: 'D', text: "Create three separate API Gateway endpoints that write synchronously to S3" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The SNS Fanout pattern publishes a single message to an Amazon SNS topic, which immediately replicates and fans out the message to multiple subscribed Amazon SQS queues. Each downstream service processes messages from its own queue independently and reliably.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sns-subs-queue.html",
    tags: ["SNS", "SQS", "Fanout", "Architecture"]
  },
  {
    id: "aws-dva-74",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon SNS Message Filtering",
    scenario: "Multiple customer notification services subscribe to an SNS topic. The Fraud Alert service only needs to receive messages where the attribute `severity` is set to `critical`.",
    question: "How can the developer prevent the Fraud Alert service from receiving non-critical messages without writing custom filtering code?",
    options: [
      { id: 'A', text: "Filter the messages inside the downstream service after receiving them" },
      { id: 'B', text: "Configure a Subscription Filter Policy on the Fraud Alert SNS subscription" },
      { id: 'C', text: "Create separate SNS topics for every customer in the database" },
      { id: 'D', text: "Encrypt the message using KMS and withhold the decryption key" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SNS Subscription Filter Policies evaluate incoming message attributes (or message body in newer SNS configurations) against defined JSON policies. Non-matching messages are discarded before delivery, preventing unnecessary queue pollution and compute overhead.",
    referenceUrl: "https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html",
    tags: ["SNS", "Subscription Filter Policy", "Messaging"]
  },
  {
    id: "aws-dva-75",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon EventBridge Rules and Event Bus",
    scenario: "A SaaS platform receives webhook events from external partners and needs to route specific order events to a Lambda function, customer signup events to SQS, and security events to Kinesis Firehose.",
    question: "Which AWS serverless event bus service provides declarative JSON pattern matching and native integration with dozens of AWS targets?",
    options: [
      { id: 'A', text: "Amazon Simple Notification Service (SNS)" },
      { id: 'B', text: "Amazon EventBridge" },
      { id: 'C', text: "Amazon Kinesis Data Streams" },
      { id: 'D', text: "Amazon Simple Queue Service (SQS)" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EventBridge is a serverless event bus that connects application data from SaaS partners, custom microservices, and AWS services. EventBridge rules use declarative JSON event patterns to inspect event metadata and route events to over 20 AWS targets without custom routing code.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is-how-it-works.html",
    tags: ["EventBridge", "Event Bus", "EDA"]
  }
];

export default AWS_DVA_QUESTIONS_3;
