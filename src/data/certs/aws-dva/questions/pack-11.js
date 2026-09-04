export const AWS_DVA_QUESTIONS_11 = [
  {
    id: "aws-dva-251",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB TransactWriteItems Atomicity: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to execute atomic multi-item ACID transactions across multiple DynamoDB tables with all-or-nothing guarantees.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? DynamoDB TransactWriteItems API is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction." },
      { id: 'B', text: "Execute multiple independent BatchWriteItem requests sequentially." },
      { id: 'C', text: "Write a custom distributed two-phase commit coordinator using AWS Lambda." },
      { id: 'D', text: "Use DynamoDB Streams to replicate updates across tables asynchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction. DynamoDB TransactWriteItems provides all-or-nothing, atomicity, consistency, isolation, and durability (ACID) across up to 100 items or 4 MB of data in multiple tables within a single AWS Region. BatchWriteItem does not guarantee transactional atomicity, and custom distributed commit coordinators add unnecessary failure modes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-dva-252",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB TransactWriteItems Atomicity: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to execute atomic multi-item ACID transactions across multiple DynamoDB tables with all-or-nothing guarantees.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? DynamoDB TransactWriteItems API is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction." },
      { id: 'B', text: "Execute multiple independent BatchWriteItem requests sequentially." },
      { id: 'C', text: "Write a custom distributed two-phase commit coordinator using AWS Lambda." },
      { id: 'D', text: "Use DynamoDB Streams to replicate updates across tables asynchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction. DynamoDB TransactWriteItems provides all-or-nothing, atomicity, consistency, isolation, and durability (ACID) across up to 100 items or 4 MB of data in multiple tables within a single AWS Region. BatchWriteItem does not guarantee transactional atomicity, and custom distributed commit coordinators add unnecessary failure modes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-dva-253",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB TransactWriteItems Atomicity: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to execute atomic multi-item ACID transactions across multiple DynamoDB tables with all-or-nothing guarantees.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB TransactWriteItems API is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction." },
      { id: 'B', text: "Execute multiple independent BatchWriteItem requests sequentially." },
      { id: 'C', text: "Write a custom distributed two-phase commit coordinator using AWS Lambda." },
      { id: 'D', text: "Use DynamoDB Streams to replicate updates across tables asynchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction. DynamoDB TransactWriteItems provides all-or-nothing, atomicity, consistency, isolation, and durability (ACID) across up to 100 items or 4 MB of data in multiple tables within a single AWS Region. BatchWriteItem does not guarantee transactional atomicity, and custom distributed commit coordinators add unnecessary failure modes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-dva-254",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB TransactWriteItems Atomicity: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to execute atomic multi-item ACID transactions across multiple DynamoDB tables with all-or-nothing guarantees.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? DynamoDB TransactWriteItems API is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction." },
      { id: 'B', text: "Execute multiple independent BatchWriteItem requests sequentially." },
      { id: 'C', text: "Write a custom distributed two-phase commit coordinator using AWS Lambda." },
      { id: 'D', text: "Use DynamoDB Streams to replicate updates across tables asynchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction. DynamoDB TransactWriteItems provides all-or-nothing, atomicity, consistency, isolation, and durability (ACID) across up to 100 items or 4 MB of data in multiple tables within a single AWS Region. BatchWriteItem does not guarantee transactional atomicity, and custom distributed commit coordinators add unnecessary failure modes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-dva-255",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB TransactWriteItems Atomicity: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to execute atomic multi-item ACID transactions across multiple DynamoDB tables with all-or-nothing guarantees.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? DynamoDB TransactWriteItems API is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction." },
      { id: 'B', text: "Execute multiple independent BatchWriteItem requests sequentially." },
      { id: 'C', text: "Write a custom distributed two-phase commit coordinator using AWS Lambda." },
      { id: 'D', text: "Use DynamoDB Streams to replicate updates across tables asynchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB TransactWriteItems API to execute all write operations as a single atomic transaction. DynamoDB TransactWriteItems provides all-or-nothing, atomicity, consistency, isolation, and durability (ACID) across up to 100 items or 4 MB of data in multiple tables within a single AWS Region. BatchWriteItem does not guarantee transactional atomicity, and custom distributed commit coordinators add unnecessary failure modes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html#transaction-apis-txwriteitems",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-dva-256",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs Scan Optimization: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to retrieve items matching a specific partition key and range condition with single-digit millisecond latency without consuming excessive read capacity.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? DynamoDB Query API with KeyConditionExpression is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition." },
      { id: 'B', text: "Use the DynamoDB Scan API with a FilterExpression on the non-key attributes." },
      { id: 'C', text: "Export the DynamoDB table to Amazon S3 using AWS Glue and query with Amazon Athena." },
      { id: 'D', text: "Execute a Parallel Scan with 10 segments across the entire table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition. The DynamoDB Query API finds items using primary key attributes directly, reading only contiguous items matching the partition key and sort key range. The Scan API reads every single item in the entire table before applying a FilterExpression, consuming massive read capacity and introducing high latency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-dva-257",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs Scan Optimization: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to retrieve items matching a specific partition key and range condition with single-digit millisecond latency without consuming excessive read capacity.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? DynamoDB Query API with KeyConditionExpression is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition." },
      { id: 'B', text: "Use the DynamoDB Scan API with a FilterExpression on the non-key attributes." },
      { id: 'C', text: "Export the DynamoDB table to Amazon S3 using AWS Glue and query with Amazon Athena." },
      { id: 'D', text: "Execute a Parallel Scan with 10 segments across the entire table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition. The DynamoDB Query API finds items using primary key attributes directly, reading only contiguous items matching the partition key and sort key range. The Scan API reads every single item in the entire table before applying a FilterExpression, consuming massive read capacity and introducing high latency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-dva-258",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs Scan Optimization: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to retrieve items matching a specific partition key and range condition with single-digit millisecond latency without consuming excessive read capacity.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB Query API with KeyConditionExpression is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition." },
      { id: 'B', text: "Use the DynamoDB Scan API with a FilterExpression on the non-key attributes." },
      { id: 'C', text: "Export the DynamoDB table to Amazon S3 using AWS Glue and query with Amazon Athena." },
      { id: 'D', text: "Execute a Parallel Scan with 10 segments across the entire table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition. The DynamoDB Query API finds items using primary key attributes directly, reading only contiguous items matching the partition key and sort key range. The Scan API reads every single item in the entire table before applying a FilterExpression, consuming massive read capacity and introducing high latency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-dva-259",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs Scan Optimization: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to retrieve items matching a specific partition key and range condition with single-digit millisecond latency without consuming excessive read capacity.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? DynamoDB Query API with KeyConditionExpression is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition." },
      { id: 'B', text: "Use the DynamoDB Scan API with a FilterExpression on the non-key attributes." },
      { id: 'C', text: "Export the DynamoDB table to Amazon S3 using AWS Glue and query with Amazon Athena." },
      { id: 'D', text: "Execute a Parallel Scan with 10 segments across the entire table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition. The DynamoDB Query API finds items using primary key attributes directly, reading only contiguous items matching the partition key and sort key range. The Scan API reads every single item in the entire table before applying a FilterExpression, consuming massive read capacity and introducing high latency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-dva-260",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Query vs Scan Optimization: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to retrieve items matching a specific partition key and range condition with single-digit millisecond latency without consuming excessive read capacity.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? DynamoDB Query API with KeyConditionExpression is being implemented.",
    options: [
      { id: 'A', text: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition." },
      { id: 'B', text: "Use the DynamoDB Scan API with a FilterExpression on the non-key attributes." },
      { id: 'C', text: "Export the DynamoDB table to Amazon S3 using AWS Glue and query with Amazon Athena." },
      { id: 'D', text: "Execute a Parallel Scan with 10 segments across the entire table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the DynamoDB Query API with a KeyConditionExpression specifying the partition key value and sort key range condition. The DynamoDB Query API finds items using primary key attributes directly, reading only contiguous items matching the partition key and sort key range. The Scan API reads every single item in the entire table before applying a FilterExpression, consuming massive read capacity and introducing high latency.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-dva-261",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams Event Source Mapping: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to capture real-time item-level modifications and trigger an asynchronous downstream notification pipeline in the exact order of modifications.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? DynamoDB Streams with AWS Lambda event source mapping is being implemented.",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping." },
      { id: 'B', text: "Configure Amazon CloudWatch Events to monitor DynamoDB PutItem API calls." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue that application clients write to before updating DynamoDB." },
      { id: 'D', text: "Schedule an AWS Lambda function every 5 minutes to poll the table using the Scan API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table. When connected to AWS Lambda via an event source mapping, Lambda functions poll the stream shards and process changes in strict per-partition order with built-in retry mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-dva-262",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams Event Source Mapping: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to capture real-time item-level modifications and trigger an asynchronous downstream notification pipeline in the exact order of modifications.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? DynamoDB Streams with AWS Lambda event source mapping is being implemented.",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping." },
      { id: 'B', text: "Configure Amazon CloudWatch Events to monitor DynamoDB PutItem API calls." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue that application clients write to before updating DynamoDB." },
      { id: 'D', text: "Schedule an AWS Lambda function every 5 minutes to poll the table using the Scan API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table. When connected to AWS Lambda via an event source mapping, Lambda functions poll the stream shards and process changes in strict per-partition order with built-in retry mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-dva-263",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams Event Source Mapping: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to capture real-time item-level modifications and trigger an asynchronous downstream notification pipeline in the exact order of modifications.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB Streams with AWS Lambda event source mapping is being implemented.",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping." },
      { id: 'B', text: "Configure Amazon CloudWatch Events to monitor DynamoDB PutItem API calls." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue that application clients write to before updating DynamoDB." },
      { id: 'D', text: "Schedule an AWS Lambda function every 5 minutes to poll the table using the Scan API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table. When connected to AWS Lambda via an event source mapping, Lambda functions poll the stream shards and process changes in strict per-partition order with built-in retry mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-dva-264",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams Event Source Mapping: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to capture real-time item-level modifications and trigger an asynchronous downstream notification pipeline in the exact order of modifications.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? DynamoDB Streams with AWS Lambda event source mapping is being implemented.",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping." },
      { id: 'B', text: "Configure Amazon CloudWatch Events to monitor DynamoDB PutItem API calls." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue that application clients write to before updating DynamoDB." },
      { id: 'D', text: "Schedule an AWS Lambda function every 5 minutes to poll the table using the Scan API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table. When connected to AWS Lambda via an event source mapping, Lambda functions poll the stream shards and process changes in strict per-partition order with built-in retry mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-dva-265",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Streams Event Source Mapping: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to capture real-time item-level modifications and trigger an asynchronous downstream notification pipeline in the exact order of modifications.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? DynamoDB Streams with AWS Lambda event source mapping is being implemented.",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping." },
      { id: 'B', text: "Configure Amazon CloudWatch Events to monitor DynamoDB PutItem API calls." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue that application clients write to before updating DynamoDB." },
      { id: 'D', text: "Schedule an AWS Lambda function every 5 minutes to poll the table using the Scan API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable DynamoDB Streams with ViewType set to NEW_IMAGE or NEW_AND_OLD_IMAGES, and configure an AWS Lambda event source mapping. DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table. When connected to AWS Lambda via an event source mapping, Lambda functions poll the stream shards and process changes in strict per-partition order with built-in retry mechanisms.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-dva-266",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Indexes (GSI): Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to query orders by customer email and order status when the base table partition key is orderId.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? DynamoDB Global Secondary Index (GSI) with sparse projection is being implemented.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes." },
      { id: 'B', text: "Create a Local Secondary Index (LSI) with customerEmail as the alternate partition key." },
      { id: 'C', text: "Perform a Scan operation with a FilterExpression on customerEmail." },
      { id: 'D', text: "Create a separate DynamoDB table for customer emails and maintain synchronization using batch scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes. Global Secondary Indexes (GSIs) allow querying across different partition keys and sort keys than the base table. They can be added or deleted at any time and have independent provisioned or on-demand throughput. Local Secondary Indexes (LSIs) must use the same partition key as the base table and can only be created at table creation.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-dva-267",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Indexes (GSI): High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to query orders by customer email and order status when the base table partition key is orderId.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? DynamoDB Global Secondary Index (GSI) with sparse projection is being implemented.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes." },
      { id: 'B', text: "Create a Local Secondary Index (LSI) with customerEmail as the alternate partition key." },
      { id: 'C', text: "Perform a Scan operation with a FilterExpression on customerEmail." },
      { id: 'D', text: "Create a separate DynamoDB table for customer emails and maintain synchronization using batch scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes. Global Secondary Indexes (GSIs) allow querying across different partition keys and sort keys than the base table. They can be added or deleted at any time and have independent provisioned or on-demand throughput. Local Secondary Indexes (LSIs) must use the same partition key as the base table and can only be created at table creation.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-dva-268",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Indexes (GSI): Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to query orders by customer email and order status when the base table partition key is orderId.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB Global Secondary Index (GSI) with sparse projection is being implemented.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes." },
      { id: 'B', text: "Create a Local Secondary Index (LSI) with customerEmail as the alternate partition key." },
      { id: 'C', text: "Perform a Scan operation with a FilterExpression on customerEmail." },
      { id: 'D', text: "Create a separate DynamoDB table for customer emails and maintain synchronization using batch scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes. Global Secondary Indexes (GSIs) allow querying across different partition keys and sort keys than the base table. They can be added or deleted at any time and have independent provisioned or on-demand throughput. Local Secondary Indexes (LSIs) must use the same partition key as the base table and can only be created at table creation.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-dva-269",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Indexes (GSI): Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to query orders by customer email and order status when the base table partition key is orderId.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? DynamoDB Global Secondary Index (GSI) with sparse projection is being implemented.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes." },
      { id: 'B', text: "Create a Local Secondary Index (LSI) with customerEmail as the alternate partition key." },
      { id: 'C', text: "Perform a Scan operation with a FilterExpression on customerEmail." },
      { id: 'D', text: "Create a separate DynamoDB table for customer emails and maintain synchronization using batch scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes. Global Secondary Indexes (GSIs) allow querying across different partition keys and sort keys than the base table. They can be added or deleted at any time and have independent provisioned or on-demand throughput. Local Secondary Indexes (LSIs) must use the same partition key as the base table and can only be created at table creation.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-dva-270",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Global Secondary Indexes (GSI): Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to query orders by customer email and order status when the base table partition key is orderId.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? DynamoDB Global Secondary Index (GSI) with sparse projection is being implemented.",
    options: [
      { id: 'A', text: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes." },
      { id: 'B', text: "Create a Local Secondary Index (LSI) with customerEmail as the alternate partition key." },
      { id: 'C', text: "Perform a Scan operation with a FilterExpression on customerEmail." },
      { id: 'D', text: "Create a separate DynamoDB table for customer emails and maintain synchronization using batch scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a Global Secondary Index (GSI) with customerEmail as the partition key and orderStatus as the sort key, projecting only required attributes. Global Secondary Indexes (GSIs) allow querying across different partition keys and sort keys than the base table. They can be added or deleted at any time and have independent provisioned or on-demand throughput. Local Secondary Indexes (LSIs) must use the same partition key as the base table and can only be created at table creation.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  },
  {
    id: "aws-dva-271",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Number: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to prevent concurrent write conflicts and lost updates when multiple application workers update the same inventory item simultaneously.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? DynamoDB Optimistic Locking using conditional updates is being implemented.",
    options: [
      { id: 'A', text: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call." },
      { id: 'B', text: "Implement pessimistic database row locking using DynamoDB Transactions." },
      { id: 'C', text: "Enable DynamoDB point-in-time recovery (PITR) to rollback conflicting updates." },
      { id: 'D', text: "Deploy an intermediate Amazon SQS queue to serialize all application read and write operations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call. Optimistic locking in DynamoDB uses a version number attribute on each item. When updating an item, the application increments the version number and includes a ConditionExpression ensuring the version number matches the value read initially (`attribute_exists(version) AND version = :expected`). If another process updated the item first, the conditional check fails and the client retries.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.OptimisticLocking.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Dr Failover"]
  },
  {
    id: "aws-dva-272",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Number: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to prevent concurrent write conflicts and lost updates when multiple application workers update the same inventory item simultaneously.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? DynamoDB Optimistic Locking using conditional updates is being implemented.",
    options: [
      { id: 'A', text: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call." },
      { id: 'B', text: "Implement pessimistic database row locking using DynamoDB Transactions." },
      { id: 'C', text: "Enable DynamoDB point-in-time recovery (PITR) to rollback conflicting updates." },
      { id: 'D', text: "Deploy an intermediate Amazon SQS queue to serialize all application read and write operations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call. Optimistic locking in DynamoDB uses a version number attribute on each item. When updating an item, the application increments the version number and includes a ConditionExpression ensuring the version number matches the value read initially (`attribute_exists(version) AND version = :expected`). If another process updated the item first, the conditional check fails and the client retries.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.OptimisticLocking.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "High Load Scale"]
  },
  {
    id: "aws-dva-273",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Number: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to prevent concurrent write conflicts and lost updates when multiple application workers update the same inventory item simultaneously.",
    question: "Which solution properly implements these mandatory security and governance controls? DynamoDB Optimistic Locking using conditional updates is being implemented.",
    options: [
      { id: 'A', text: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call." },
      { id: 'B', text: "Implement pessimistic database row locking using DynamoDB Transactions." },
      { id: 'C', text: "Enable DynamoDB point-in-time recovery (PITR) to rollback conflicting updates." },
      { id: 'D', text: "Deploy an intermediate Amazon SQS queue to serialize all application read and write operations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call. Optimistic locking in DynamoDB uses a version number attribute on each item. When updating an item, the application increments the version number and includes a ConditionExpression ensuring the version number matches the value read initially (`attribute_exists(version) AND version = :expected`). If another process updated the item first, the conditional check fails and the client retries.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.OptimisticLocking.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Security Compliance"]
  },
  {
    id: "aws-dva-274",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Number: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to prevent concurrent write conflicts and lost updates when multiple application workers update the same inventory item simultaneously.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? DynamoDB Optimistic Locking using conditional updates is being implemented.",
    options: [
      { id: 'A', text: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call." },
      { id: 'B', text: "Implement pessimistic database row locking using DynamoDB Transactions." },
      { id: 'C', text: "Enable DynamoDB point-in-time recovery (PITR) to rollback conflicting updates." },
      { id: 'D', text: "Deploy an intermediate Amazon SQS queue to serialize all application read and write operations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call. Optimistic locking in DynamoDB uses a version number attribute on each item. When updating an item, the application increments the version number and includes a ConditionExpression ensuring the version number matches the value read initially (`attribute_exists(version) AND version = :expected`). If another process updated the item first, the conditional check fails and the client retries.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.OptimisticLocking.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Hybrid Migration"]
  },
  {
    id: "aws-dva-275",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "DynamoDB Optimistic Locking with Version Number: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to prevent concurrent write conflicts and lost updates when multiple application workers update the same inventory item simultaneously.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? DynamoDB Optimistic Locking using conditional updates is being implemented.",
    options: [
      { id: 'A', text: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call." },
      { id: 'B', text: "Implement pessimistic database row locking using DynamoDB Transactions." },
      { id: 'C', text: "Enable DynamoDB point-in-time recovery (PITR) to rollback conflicting updates." },
      { id: 'D', text: "Deploy an intermediate Amazon SQS queue to serialize all application read and write operations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement optimistic locking using a versionNumber attribute and a ConditionalCheckExpression in the UpdateItem API call. Optimistic locking in DynamoDB uses a version number attribute on each item. When updating an item, the application increments the version number and includes a ConditionExpression ensuring the version number matches the value read initially (`attribute_exists(version) AND version = :expected`). If another process updated the item first, the conditional check fails and the client retries.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBMapper.OptimisticLocking.html",
    tags: ["Amazon DynamoDB", "DynamoDB", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_11;
