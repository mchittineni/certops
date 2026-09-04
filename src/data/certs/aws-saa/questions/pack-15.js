export const AWS_SAA_QUESTIONS_15 = [
  {
    id: "aws-saa-351",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "API Gateway Response Caching: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon API Gateway to reduce backend Lambda execution costs and achieve sub-10ms response times for frequent identical GET requests to an API Gateway REST API.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? API Gateway response caching with cache keys is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon CloudFront distribution with a default TTL of 0 seconds." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Memcached cluster in front of API Gateway." },
      { id: 'C', text: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys." },
      { id: 'D', text: "Increase Lambda function memory to 10,240 MB to execute GET requests faster." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys. API Gateway stage caching caches responses from backend integrations for a configurable Time to Live (TTL) period in seconds. Subsequent identical client requests are served directly from the API Gateway cache without invoking backend Lambda functions, drastically reducing latency and compute costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-saa-352",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "API Gateway Response Caching: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon API Gateway to reduce backend Lambda execution costs and achieve sub-10ms response times for frequent identical GET requests to an API Gateway REST API.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? API Gateway response caching with cache keys is being evaluated.",
    options: [
      { id: 'A', text: "Increase Lambda function memory to 10,240 MB to execute GET requests faster." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Memcached cluster in front of API Gateway." },
      { id: 'C', text: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with a default TTL of 0 seconds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys. API Gateway stage caching caches responses from backend integrations for a configurable Time to Live (TTL) period in seconds. Subsequent identical client requests are served directly from the API Gateway cache without invoking backend Lambda functions, drastically reducing latency and compute costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-saa-353",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "API Gateway Response Caching: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon API Gateway to reduce backend Lambda execution costs and achieve sub-10ms response times for frequent identical GET requests to an API Gateway REST API.",
    question: "Which solution properly implements these mandatory security and governance controls? API Gateway response caching with cache keys is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon ElastiCache for Memcached cluster in front of API Gateway." },
      { id: 'B', text: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with a default TTL of 0 seconds." },
      { id: 'D', text: "Increase Lambda function memory to 10,240 MB to execute GET requests faster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys. API Gateway stage caching caches responses from backend integrations for a configurable Time to Live (TTL) period in seconds. Subsequent identical client requests are served directly from the API Gateway cache without invoking backend Lambda functions, drastically reducing latency and compute costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-saa-354",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "API Gateway Response Caching: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon API Gateway to reduce backend Lambda execution costs and achieve sub-10ms response times for frequent identical GET requests to an API Gateway REST API.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? API Gateway response caching with cache keys is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon ElastiCache for Memcached cluster in front of API Gateway." },
      { id: 'B', text: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys." },
      { id: 'C', text: "Increase Lambda function memory to 10,240 MB to execute GET requests faster." },
      { id: 'D', text: "Deploy an Amazon CloudFront distribution with a default TTL of 0 seconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys. API Gateway stage caching caches responses from backend integrations for a configurable Time to Live (TTL) period in seconds. Subsequent identical client requests are served directly from the API Gateway cache without invoking backend Lambda functions, drastically reducing latency and compute costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-saa-355",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "API Gateway Response Caching: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon API Gateway to reduce backend Lambda execution costs and achieve sub-10ms response times for frequent identical GET requests to an API Gateway REST API.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? API Gateway response caching with cache keys is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon ElastiCache for Memcached cluster in front of API Gateway." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution with a default TTL of 0 seconds." },
      { id: 'C', text: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys." },
      { id: 'D', text: "Increase Lambda function memory to 10,240 MB to execute GET requests faster." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable API Gateway stage response caching with a configured TTL and define query string parameters as cache keys. API Gateway stage caching caches responses from backend integrations for a configurable Time to Live (TTL) period in seconds. Subsequent identical client requests are served directly from the API Gateway cache without invoking backend Lambda functions, drastically reducing latency and compute costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  },
  {
    id: "aws-saa-356",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Redshift Concurrency Scaling: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Redshift to maintain consistent fast query execution times when hundreds of business analysts submit concurrent analytical queries during morning reporting peaks.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon Redshift Concurrency Scaling with WLM is being evaluated.",
    options: [
      { id: 'A', text: "Migrate the Redshift cluster from RA3 node types to Dense Storage (ds2) node types." },
      { id: 'B', text: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue." },
      { id: 'C', text: "Deploy Amazon Aurora MySQL read replicas to offload analytical SQL reporting." },
      { id: 'D', text: "Schedule an AWS Glue ETL job to run every 5 minutes and store results in S3." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue. Amazon Redshift Concurrency Scaling automatically adds transient cluster capacity in seconds to support an virtually unlimited number of concurrent users and queries with consistent fast performance. Concurrency scaling credits accrue during cluster operation, often resulting in free scaling for typical bursty reporting patterns.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
    tags: ["Amazon Redshift", "Redshift", "Dr Failover"]
  },
  {
    id: "aws-saa-357",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Redshift Concurrency Scaling: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Redshift to maintain consistent fast query execution times when hundreds of business analysts submit concurrent analytical queries during morning reporting peaks.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon Redshift Concurrency Scaling with WLM is being evaluated.",
    options: [
      { id: 'A', text: "Deploy Amazon Aurora MySQL read replicas to offload analytical SQL reporting." },
      { id: 'B', text: "Migrate the Redshift cluster from RA3 node types to Dense Storage (ds2) node types." },
      { id: 'C', text: "Schedule an AWS Glue ETL job to run every 5 minutes and store results in S3." },
      { id: 'D', text: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue. Amazon Redshift Concurrency Scaling automatically adds transient cluster capacity in seconds to support an virtually unlimited number of concurrent users and queries with consistent fast performance. Concurrency scaling credits accrue during cluster operation, often resulting in free scaling for typical bursty reporting patterns.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
    tags: ["Amazon Redshift", "Redshift", "High Load Scale"]
  },
  {
    id: "aws-saa-358",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Redshift Concurrency Scaling: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Redshift to maintain consistent fast query execution times when hundreds of business analysts submit concurrent analytical queries during morning reporting peaks.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Redshift Concurrency Scaling with WLM is being evaluated.",
    options: [
      { id: 'A', text: "Migrate the Redshift cluster from RA3 node types to Dense Storage (ds2) node types." },
      { id: 'B', text: "Schedule an AWS Glue ETL job to run every 5 minutes and store results in S3." },
      { id: 'C', text: "Deploy Amazon Aurora MySQL read replicas to offload analytical SQL reporting." },
      { id: 'D', text: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue. Amazon Redshift Concurrency Scaling automatically adds transient cluster capacity in seconds to support an virtually unlimited number of concurrent users and queries with consistent fast performance. Concurrency scaling credits accrue during cluster operation, often resulting in free scaling for typical bursty reporting patterns.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
    tags: ["Amazon Redshift", "Redshift", "Security Compliance"]
  },
  {
    id: "aws-saa-359",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Redshift Concurrency Scaling: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Redshift to maintain consistent fast query execution times when hundreds of business analysts submit concurrent analytical queries during morning reporting peaks.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon Redshift Concurrency Scaling with WLM is being evaluated.",
    options: [
      { id: 'A', text: "Schedule an AWS Glue ETL job to run every 5 minutes and store results in S3." },
      { id: 'B', text: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue." },
      { id: 'C', text: "Deploy Amazon Aurora MySQL read replicas to offload analytical SQL reporting." },
      { id: 'D', text: "Migrate the Redshift cluster from RA3 node types to Dense Storage (ds2) node types." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue. Amazon Redshift Concurrency Scaling automatically adds transient cluster capacity in seconds to support an virtually unlimited number of concurrent users and queries with consistent fast performance. Concurrency scaling credits accrue during cluster operation, often resulting in free scaling for typical bursty reporting patterns.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
    tags: ["Amazon Redshift", "Redshift", "Hybrid Migration"]
  },
  {
    id: "aws-saa-360",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Redshift Concurrency Scaling: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Redshift to maintain consistent fast query execution times when hundreds of business analysts submit concurrent analytical queries during morning reporting peaks.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon Redshift Concurrency Scaling with WLM is being evaluated.",
    options: [
      { id: 'A', text: "Schedule an AWS Glue ETL job to run every 5 minutes and store results in S3." },
      { id: 'B', text: "Migrate the Redshift cluster from RA3 node types to Dense Storage (ds2) node types." },
      { id: 'C', text: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue." },
      { id: 'D', text: "Deploy Amazon Aurora MySQL read replicas to offload analytical SQL reporting." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Concurrency Scaling on the Amazon Redshift cluster workload management (WLM) query queue. Amazon Redshift Concurrency Scaling automatically adds transient cluster capacity in seconds to support an virtually unlimited number of concurrent users and queries with consistent fast performance. Concurrency scaling credits accrue during cluster operation, often resulting in free scaling for typical bursty reporting patterns.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html",
    tags: ["Amazon Redshift", "Redshift", "Resilience Failure"]
  },
  {
    id: "aws-saa-361",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Kinesis Enhanced Fan-Out: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Kinesis to stream high-throughput financial market data to five independent microservice consumers simultaneously without hitting shard read throughput limits or increasing latency.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon Kinesis Data Streams Enhanced Fan-Out is being evaluated.",
    options: [
      { id: 'A', text: "Store stream records in an Amazon DynamoDB table and have consumers poll DynamoDB." },
      { id: 'B', text: "Increase the number of Kinesis shards by a factor of 10 to provide extra read capacity." },
      { id: 'C', text: "Deploy an intermediate Amazon SQS queue between Kinesis and each consumer." },
      { id: 'D', text: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API. Kinesis Enhanced Fan-Out gives each registered consumer application its own dedicated 2 MB/sec read throughput per shard using an HTTP/2 connection (`SubscribeToShard`), eliminating contention among consumers and reducing end-to-end propagation latency to roughly 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-fanout.html",
    tags: ["Amazon Kinesis", "Kinesis", "Dr Failover"]
  },
  {
    id: "aws-saa-362",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Kinesis Enhanced Fan-Out: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Kinesis to stream high-throughput financial market data to five independent microservice consumers simultaneously without hitting shard read throughput limits or increasing latency.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon Kinesis Data Streams Enhanced Fan-Out is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an intermediate Amazon SQS queue between Kinesis and each consumer." },
      { id: 'B', text: "Increase the number of Kinesis shards by a factor of 10 to provide extra read capacity." },
      { id: 'C', text: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API." },
      { id: 'D', text: "Store stream records in an Amazon DynamoDB table and have consumers poll DynamoDB." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API. Kinesis Enhanced Fan-Out gives each registered consumer application its own dedicated 2 MB/sec read throughput per shard using an HTTP/2 connection (`SubscribeToShard`), eliminating contention among consumers and reducing end-to-end propagation latency to roughly 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-fanout.html",
    tags: ["Amazon Kinesis", "Kinesis", "High Load Scale"]
  },
  {
    id: "aws-saa-363",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Kinesis Enhanced Fan-Out: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Kinesis to stream high-throughput financial market data to five independent microservice consumers simultaneously without hitting shard read throughput limits or increasing latency.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Kinesis Data Streams Enhanced Fan-Out is being evaluated.",
    options: [
      { id: 'A', text: "Increase the number of Kinesis shards by a factor of 10 to provide extra read capacity." },
      { id: 'B', text: "Deploy an intermediate Amazon SQS queue between Kinesis and each consumer." },
      { id: 'C', text: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API." },
      { id: 'D', text: "Store stream records in an Amazon DynamoDB table and have consumers poll DynamoDB." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API. Kinesis Enhanced Fan-Out gives each registered consumer application its own dedicated 2 MB/sec read throughput per shard using an HTTP/2 connection (`SubscribeToShard`), eliminating contention among consumers and reducing end-to-end propagation latency to roughly 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-fanout.html",
    tags: ["Amazon Kinesis", "Kinesis", "Security Compliance"]
  },
  {
    id: "aws-saa-364",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Kinesis Enhanced Fan-Out: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Kinesis to stream high-throughput financial market data to five independent microservice consumers simultaneously without hitting shard read throughput limits or increasing latency.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon Kinesis Data Streams Enhanced Fan-Out is being evaluated.",
    options: [
      { id: 'A', text: "Store stream records in an Amazon DynamoDB table and have consumers poll DynamoDB." },
      { id: 'B', text: "Increase the number of Kinesis shards by a factor of 10 to provide extra read capacity." },
      { id: 'C', text: "Deploy an intermediate Amazon SQS queue between Kinesis and each consumer." },
      { id: 'D', text: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API. Kinesis Enhanced Fan-Out gives each registered consumer application its own dedicated 2 MB/sec read throughput per shard using an HTTP/2 connection (`SubscribeToShard`), eliminating contention among consumers and reducing end-to-end propagation latency to roughly 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-fanout.html",
    tags: ["Amazon Kinesis", "Kinesis", "Hybrid Migration"]
  },
  {
    id: "aws-saa-365",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Kinesis Enhanced Fan-Out: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Kinesis to stream high-throughput financial market data to five independent microservice consumers simultaneously without hitting shard read throughput limits or increasing latency.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon Kinesis Data Streams Enhanced Fan-Out is being evaluated.",
    options: [
      { id: 'A', text: "Increase the number of Kinesis shards by a factor of 10 to provide extra read capacity." },
      { id: 'B', text: "Deploy an intermediate Amazon SQS queue between Kinesis and each consumer." },
      { id: 'C', text: "Store stream records in an Amazon DynamoDB table and have consumers poll DynamoDB." },
      { id: 'D', text: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Register each consumer application as an Enhanced Fan-Out consumer using the HTTP/2 SubscribeToShard API. Kinesis Enhanced Fan-Out gives each registered consumer application its own dedicated 2 MB/sec read throughput per shard using an HTTP/2 connection (`SubscribeToShard`), eliminating contention among consumers and reducing end-to-end propagation latency to roughly 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-fanout.html",
    tags: ["Amazon Kinesis", "Kinesis", "Resilience Failure"]
  },
  {
    id: "aws-saa-366",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Lambda Provisioned Concurrency: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Lambda to eliminate cold start latency spikes for customer-facing checkout microservices invoked via an Application Load Balancer during flash sales.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Lambda Provisioned Concurrency is being evaluated.",
    options: [
      { id: 'A', text: "Switch the Lambda runtime from Python to Java without SnapStart enabled." },
      { id: 'B', text: "Increase the Lambda execution timeout from 3 seconds to 15 minutes." },
      { id: 'C', text: "Increase the Lambda ephemeral storage (/tmp) to 10 GB." },
      { id: 'D', text: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group. Provisioned Concurrency initializes a requested number of execution environments in advance so they are prepared to respond immediately with double-digit millisecond latency, completely eliminating initialization cold starts. Increasing timeout or ephemeral storage does not pre-warm runtimes.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-saa-367",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Lambda Provisioned Concurrency: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Lambda to eliminate cold start latency spikes for customer-facing checkout microservices invoked via an Application Load Balancer during flash sales.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Lambda Provisioned Concurrency is being evaluated.",
    options: [
      { id: 'A', text: "Increase the Lambda execution timeout from 3 seconds to 15 minutes." },
      { id: 'B', text: "Switch the Lambda runtime from Python to Java without SnapStart enabled." },
      { id: 'C', text: "Increase the Lambda ephemeral storage (/tmp) to 10 GB." },
      { id: 'D', text: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group. Provisioned Concurrency initializes a requested number of execution environments in advance so they are prepared to respond immediately with double-digit millisecond latency, completely eliminating initialization cold starts. Increasing timeout or ephemeral storage does not pre-warm runtimes.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-saa-368",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Lambda Provisioned Concurrency: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Lambda to eliminate cold start latency spikes for customer-facing checkout microservices invoked via an Application Load Balancer during flash sales.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Lambda Provisioned Concurrency is being evaluated.",
    options: [
      { id: 'A', text: "Increase the Lambda ephemeral storage (/tmp) to 10 GB." },
      { id: 'B', text: "Increase the Lambda execution timeout from 3 seconds to 15 minutes." },
      { id: 'C', text: "Switch the Lambda runtime from Python to Java without SnapStart enabled." },
      { id: 'D', text: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group. Provisioned Concurrency initializes a requested number of execution environments in advance so they are prepared to respond immediately with double-digit millisecond latency, completely eliminating initialization cold starts. Increasing timeout or ephemeral storage does not pre-warm runtimes.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-saa-369",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Lambda Provisioned Concurrency: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Lambda to eliminate cold start latency spikes for customer-facing checkout microservices invoked via an Application Load Balancer during flash sales.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Lambda Provisioned Concurrency is being evaluated.",
    options: [
      { id: 'A', text: "Increase the Lambda ephemeral storage (/tmp) to 10 GB." },
      { id: 'B', text: "Switch the Lambda runtime from Python to Java without SnapStart enabled." },
      { id: 'C', text: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group." },
      { id: 'D', text: "Increase the Lambda execution timeout from 3 seconds to 15 minutes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group. Provisioned Concurrency initializes a requested number of execution environments in advance so they are prepared to respond immediately with double-digit millisecond latency, completely eliminating initialization cold starts. Increasing timeout or ephemeral storage does not pre-warm runtimes.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-saa-370",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "Lambda Provisioned Concurrency: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Lambda to eliminate cold start latency spikes for customer-facing checkout microservices invoked via an Application Load Balancer during flash sales.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Lambda Provisioned Concurrency is being evaluated.",
    options: [
      { id: 'A', text: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group." },
      { id: 'B', text: "Switch the Lambda runtime from Python to Java without SnapStart enabled." },
      { id: 'C', text: "Increase the Lambda execution timeout from 3 seconds to 15 minutes." },
      { id: 'D', text: "Increase the Lambda ephemeral storage (/tmp) to 10 GB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Provisioned Concurrency on the Lambda function alias associated with the Application Load Balancer target group. Provisioned Concurrency initializes a requested number of execution environments in advance so they are prepared to respond immediately with double-digit millisecond latency, completely eliminating initialization cold starts. Increasing timeout or ephemeral storage does not pre-warm runtimes.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-saa-371",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "RDS Proxy Connection Pooling: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon RDS to prevent relational database connection exhaustion when thousands of ephemeral serverless Lambda functions concurrently query an Amazon RDS PostgreSQL database.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon RDS Proxy connection pooling and multiplexing is being evaluated.",
    options: [
      { id: 'A', text: "Increase the memory size of each Lambda function to 10,240 MB." },
      { id: 'B', text: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance." },
      { id: 'C', text: "Disable Multi-AZ replication on the Amazon RDS PostgreSQL instance." },
      { id: 'D', text: "Initialize a new database connection inside the Lambda handler function on every single invocation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance. Amazon RDS Proxy maintains an established pool of connections to the database and multiplexes thousands of incoming connections from ephemeral Lambda instances onto a controlled number of database connections, preventing connection exhaustion and memory depletion on PostgreSQL or MySQL.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Amazon RDS", "RDS", "Dr Failover"]
  },
  {
    id: "aws-saa-372",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "RDS Proxy Connection Pooling: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon RDS to prevent relational database connection exhaustion when thousands of ephemeral serverless Lambda functions concurrently query an Amazon RDS PostgreSQL database.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon RDS Proxy connection pooling and multiplexing is being evaluated.",
    options: [
      { id: 'A', text: "Increase the memory size of each Lambda function to 10,240 MB." },
      { id: 'B', text: "Disable Multi-AZ replication on the Amazon RDS PostgreSQL instance." },
      { id: 'C', text: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance." },
      { id: 'D', text: "Initialize a new database connection inside the Lambda handler function on every single invocation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance. Amazon RDS Proxy maintains an established pool of connections to the database and multiplexes thousands of incoming connections from ephemeral Lambda instances onto a controlled number of database connections, preventing connection exhaustion and memory depletion on PostgreSQL or MySQL.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Amazon RDS", "RDS", "High Load Scale"]
  },
  {
    id: "aws-saa-373",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "RDS Proxy Connection Pooling: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon RDS to prevent relational database connection exhaustion when thousands of ephemeral serverless Lambda functions concurrently query an Amazon RDS PostgreSQL database.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon RDS Proxy connection pooling and multiplexing is being evaluated.",
    options: [
      { id: 'A', text: "Increase the memory size of each Lambda function to 10,240 MB." },
      { id: 'B', text: "Initialize a new database connection inside the Lambda handler function on every single invocation." },
      { id: 'C', text: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance." },
      { id: 'D', text: "Disable Multi-AZ replication on the Amazon RDS PostgreSQL instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance. Amazon RDS Proxy maintains an established pool of connections to the database and multiplexes thousands of incoming connections from ephemeral Lambda instances onto a controlled number of database connections, preventing connection exhaustion and memory depletion on PostgreSQL or MySQL.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Amazon RDS", "RDS", "Security Compliance"]
  },
  {
    id: "aws-saa-374",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "RDS Proxy Connection Pooling: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon RDS to prevent relational database connection exhaustion when thousands of ephemeral serverless Lambda functions concurrently query an Amazon RDS PostgreSQL database.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon RDS Proxy connection pooling and multiplexing is being evaluated.",
    options: [
      { id: 'A', text: "Increase the memory size of each Lambda function to 10,240 MB." },
      { id: 'B', text: "Initialize a new database connection inside the Lambda handler function on every single invocation." },
      { id: 'C', text: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance." },
      { id: 'D', text: "Disable Multi-AZ replication on the Amazon RDS PostgreSQL instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance. Amazon RDS Proxy maintains an established pool of connections to the database and multiplexes thousands of incoming connections from ephemeral Lambda instances onto a controlled number of database connections, preventing connection exhaustion and memory depletion on PostgreSQL or MySQL.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Amazon RDS", "RDS", "Hybrid Migration"]
  },
  {
    id: "aws-saa-375",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d2",
    domainName: "Design High-Performing Architectures",
    title: "RDS Proxy Connection Pooling: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon RDS to prevent relational database connection exhaustion when thousands of ephemeral serverless Lambda functions concurrently query an Amazon RDS PostgreSQL database.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon RDS Proxy connection pooling and multiplexing is being evaluated.",
    options: [
      { id: 'A', text: "Disable Multi-AZ replication on the Amazon RDS PostgreSQL instance." },
      { id: 'B', text: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance." },
      { id: 'C', text: "Initialize a new database connection inside the Lambda handler function on every single invocation." },
      { id: 'D', text: "Increase the memory size of each Lambda function to 10,240 MB." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon RDS Proxy between the Lambda functions and the Amazon RDS PostgreSQL instance. Amazon RDS Proxy maintains an established pool of connections to the database and multiplexes thousands of incoming connections from ephemeral Lambda instances onto a controlled number of database connections, preventing connection exhaustion and memory depletion on PostgreSQL or MySQL.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["Amazon RDS", "RDS", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_15;
