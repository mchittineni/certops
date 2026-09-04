export const AWS_DVA_QUESTIONS_20 = [
  {
    id: "aws-dva-476",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters and Alarms: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon CloudWatch to monitor application error logs and trigger an automated incident notification when more than 10 `NullPointerException` errors occur within a 5-minute window.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? CloudWatch Metric Filters for log-based alarm generation is being implemented.",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric." },
      { id: 'B', text: "Configure an S3 lifecycle rule to inspect log files as they are uploaded." },
      { id: 'C', text: "Deploy an AWS WAF Web ACL to scan log files in CloudWatch." },
      { id: 'D', text: "Write a custom Python script that polls the log group every second using `GetLogEvents`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric. CloudWatch Metric Filters scan incoming log events as they are ingested into log groups, matching search patterns or regular expressions. The filter extracts values and increments a custom CloudWatch metric, which can then back standard CloudWatch Alarms to trigger automated notifications or remediation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["Amazon CloudWatch", "CloudWatch", "Dr Failover"]
  },
  {
    id: "aws-dva-477",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters and Alarms: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon CloudWatch to monitor application error logs and trigger an automated incident notification when more than 10 `NullPointerException` errors occur within a 5-minute window.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? CloudWatch Metric Filters for log-based alarm generation is being implemented.",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric." },
      { id: 'B', text: "Configure an S3 lifecycle rule to inspect log files as they are uploaded." },
      { id: 'C', text: "Deploy an AWS WAF Web ACL to scan log files in CloudWatch." },
      { id: 'D', text: "Write a custom Python script that polls the log group every second using `GetLogEvents`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric. CloudWatch Metric Filters scan incoming log events as they are ingested into log groups, matching search patterns or regular expressions. The filter extracts values and increments a custom CloudWatch metric, which can then back standard CloudWatch Alarms to trigger automated notifications or remediation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["Amazon CloudWatch", "CloudWatch", "High Load Scale"]
  },
  {
    id: "aws-dva-478",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters and Alarms: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon CloudWatch to monitor application error logs and trigger an automated incident notification when more than 10 `NullPointerException` errors occur within a 5-minute window.",
    question: "Which solution properly implements these mandatory security and governance controls? CloudWatch Metric Filters for log-based alarm generation is being implemented.",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric." },
      { id: 'B', text: "Configure an S3 lifecycle rule to inspect log files as they are uploaded." },
      { id: 'C', text: "Deploy an AWS WAF Web ACL to scan log files in CloudWatch." },
      { id: 'D', text: "Write a custom Python script that polls the log group every second using `GetLogEvents`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric. CloudWatch Metric Filters scan incoming log events as they are ingested into log groups, matching search patterns or regular expressions. The filter extracts values and increments a custom CloudWatch metric, which can then back standard CloudWatch Alarms to trigger automated notifications or remediation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["Amazon CloudWatch", "CloudWatch", "Security Compliance"]
  },
  {
    id: "aws-dva-479",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters and Alarms: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon CloudWatch to monitor application error logs and trigger an automated incident notification when more than 10 `NullPointerException` errors occur within a 5-minute window.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? CloudWatch Metric Filters for log-based alarm generation is being implemented.",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric." },
      { id: 'B', text: "Configure an S3 lifecycle rule to inspect log files as they are uploaded." },
      { id: 'C', text: "Deploy an AWS WAF Web ACL to scan log files in CloudWatch." },
      { id: 'D', text: "Write a custom Python script that polls the log group every second using `GetLogEvents`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric. CloudWatch Metric Filters scan incoming log events as they are ingested into log groups, matching search patterns or regular expressions. The filter extracts values and increments a custom CloudWatch metric, which can then back standard CloudWatch Alarms to trigger automated notifications or remediation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["Amazon CloudWatch", "CloudWatch", "Hybrid Migration"]
  },
  {
    id: "aws-dva-480",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "CloudWatch Metric Filters and Alarms: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon CloudWatch to monitor application error logs and trigger an automated incident notification when more than 10 `NullPointerException` errors occur within a 5-minute window.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? CloudWatch Metric Filters for log-based alarm generation is being implemented.",
    options: [
      { id: 'A', text: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric." },
      { id: 'B', text: "Configure an S3 lifecycle rule to inspect log files as they are uploaded." },
      { id: 'C', text: "Deploy an AWS WAF Web ACL to scan log files in CloudWatch." },
      { id: 'D', text: "Write a custom Python script that polls the log group every second using `GetLogEvents`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Metric Filter on the application log group matching `NullPointerException`, publish to a custom metric, and configure an alarm on that metric. CloudWatch Metric Filters scan incoming log events as they are ingested into log groups, matching search patterns or regular expressions. The filter extracts values and increments a custom CloudWatch metric, which can then back standard CloudWatch Alarms to trigger automated notifications or remediation.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["Amazon CloudWatch", "CloudWatch", "Resilience Failure"]
  },
  {
    id: "aws-dva-481",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Lambda to determine the optimal memory allocation for an AWS Lambda function that balances minimal execution duration with lowest cost per million invocations.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Lambda Power Tuning state machine is being implemented.",
    options: [
      { id: 'A', text: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB)." },
      { id: 'B', text: "Assign the maximum 10,240 MB memory to all Lambda functions unconditionally." },
      { id: 'C', text: "Assign the minimum 128 MB memory to all Lambda functions to save money." },
      { id: 'D', text: "Monitor EC2 CPU utilization metrics in CloudWatch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB). AWS Lambda allocates proportional CPU power, network bandwidth, and memory as memory configuration increases. The open-source AWS Lambda Power Tuning state machine runs multiple concurrent test invocations across memory sizes to generate a visual Pareto chart identifying the sweet spot between cost and execution speed.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-dva-482",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Lambda to determine the optimal memory allocation for an AWS Lambda function that balances minimal execution duration with lowest cost per million invocations.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Lambda Power Tuning state machine is being implemented.",
    options: [
      { id: 'A', text: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB)." },
      { id: 'B', text: "Assign the maximum 10,240 MB memory to all Lambda functions unconditionally." },
      { id: 'C', text: "Assign the minimum 128 MB memory to all Lambda functions to save money." },
      { id: 'D', text: "Monitor EC2 CPU utilization metrics in CloudWatch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB). AWS Lambda allocates proportional CPU power, network bandwidth, and memory as memory configuration increases. The open-source AWS Lambda Power Tuning state machine runs multiple concurrent test invocations across memory sizes to generate a visual Pareto chart identifying the sweet spot between cost and execution speed.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-dva-483",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Lambda to determine the optimal memory allocation for an AWS Lambda function that balances minimal execution duration with lowest cost per million invocations.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Lambda Power Tuning state machine is being implemented.",
    options: [
      { id: 'A', text: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB)." },
      { id: 'B', text: "Assign the maximum 10,240 MB memory to all Lambda functions unconditionally." },
      { id: 'C', text: "Assign the minimum 128 MB memory to all Lambda functions to save money." },
      { id: 'D', text: "Monitor EC2 CPU utilization metrics in CloudWatch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB). AWS Lambda allocates proportional CPU power, network bandwidth, and memory as memory configuration increases. The open-source AWS Lambda Power Tuning state machine runs multiple concurrent test invocations across memory sizes to generate a visual Pareto chart identifying the sweet spot between cost and execution speed.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-dva-484",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Lambda to determine the optimal memory allocation for an AWS Lambda function that balances minimal execution duration with lowest cost per million invocations.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Lambda Power Tuning state machine is being implemented.",
    options: [
      { id: 'A', text: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB)." },
      { id: 'B', text: "Assign the maximum 10,240 MB memory to all Lambda functions unconditionally." },
      { id: 'C', text: "Assign the minimum 128 MB memory to all Lambda functions to save money." },
      { id: 'D', text: "Monitor EC2 CPU utilization metrics in CloudWatch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB). AWS Lambda allocates proportional CPU power, network bandwidth, and memory as memory configuration increases. The open-source AWS Lambda Power Tuning state machine runs multiple concurrent test invocations across memory sizes to generate a visual Pareto chart identifying the sweet spot between cost and execution speed.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-dva-485",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "AWS Lambda Power Tuning: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Lambda to determine the optimal memory allocation for an AWS Lambda function that balances minimal execution duration with lowest cost per million invocations.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Lambda Power Tuning state machine is being implemented.",
    options: [
      { id: 'A', text: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB)." },
      { id: 'B', text: "Assign the maximum 10,240 MB memory to all Lambda functions unconditionally." },
      { id: 'C', text: "Assign the minimum 128 MB memory to all Lambda functions to save money." },
      { id: 'D', text: "Monitor EC2 CPU utilization metrics in CloudWatch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the open-source AWS Lambda Power Tuning state machine to benchmark the function across different memory configurations (128 MB to 10,240 MB). AWS Lambda allocates proportional CPU power, network bandwidth, and memory as memory configuration increases. The open-source AWS Lambda Power Tuning state machine runs multiple concurrent test invocations across memory sizes to generate a visual Pareto chart identifying the sweet spot between cost and execution speed.",
    referenceUrl: "https://github.com/alexcasalboni/aws-lambda-power-tuning",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-dva-486",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Accelerator (DAX) Caching: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon DynamoDB to reduce DynamoDB read latency from single-digit milliseconds to microseconds for read-heavy e-commerce product catalogs without changing application query logic.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon DynamoDB Accelerator (DAX) in-memory cache is being implemented.",
    options: [
      { id: 'A', text: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Redis cluster and write custom cache invalidation logic." },
      { id: 'C', text: "Increase the table read capacity units (RCU) by a factor of 100." },
      { id: 'D', text: "Configure a Global Secondary Index with all attributes projected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client. DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically built for DynamoDB. It provides microsecond read latency for cache hits and is API-compatible with DynamoDB, meaning applications can integrate DAX simply by swapping the SDK client without rewriting query logic.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["Amazon DynamoDB", "DAX", "Dr Failover"]
  },
  {
    id: "aws-dva-487",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Accelerator (DAX) Caching: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon DynamoDB to reduce DynamoDB read latency from single-digit milliseconds to microseconds for read-heavy e-commerce product catalogs without changing application query logic.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon DynamoDB Accelerator (DAX) in-memory cache is being implemented.",
    options: [
      { id: 'A', text: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Redis cluster and write custom cache invalidation logic." },
      { id: 'C', text: "Increase the table read capacity units (RCU) by a factor of 100." },
      { id: 'D', text: "Configure a Global Secondary Index with all attributes projected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client. DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically built for DynamoDB. It provides microsecond read latency for cache hits and is API-compatible with DynamoDB, meaning applications can integrate DAX simply by swapping the SDK client without rewriting query logic.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["Amazon DynamoDB", "DAX", "High Load Scale"]
  },
  {
    id: "aws-dva-488",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Accelerator (DAX) Caching: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon DynamoDB to reduce DynamoDB read latency from single-digit milliseconds to microseconds for read-heavy e-commerce product catalogs without changing application query logic.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon DynamoDB Accelerator (DAX) in-memory cache is being implemented.",
    options: [
      { id: 'A', text: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Redis cluster and write custom cache invalidation logic." },
      { id: 'C', text: "Increase the table read capacity units (RCU) by a factor of 100." },
      { id: 'D', text: "Configure a Global Secondary Index with all attributes projected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client. DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically built for DynamoDB. It provides microsecond read latency for cache hits and is API-compatible with DynamoDB, meaning applications can integrate DAX simply by swapping the SDK client without rewriting query logic.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["Amazon DynamoDB", "DAX", "Security Compliance"]
  },
  {
    id: "aws-dva-489",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Accelerator (DAX) Caching: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon DynamoDB to reduce DynamoDB read latency from single-digit milliseconds to microseconds for read-heavy e-commerce product catalogs without changing application query logic.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon DynamoDB Accelerator (DAX) in-memory cache is being implemented.",
    options: [
      { id: 'A', text: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Redis cluster and write custom cache invalidation logic." },
      { id: 'C', text: "Increase the table read capacity units (RCU) by a factor of 100." },
      { id: 'D', text: "Configure a Global Secondary Index with all attributes projected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client. DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically built for DynamoDB. It provides microsecond read latency for cache hits and is API-compatible with DynamoDB, meaning applications can integrate DAX simply by swapping the SDK client without rewriting query logic.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["Amazon DynamoDB", "DAX", "Hybrid Migration"]
  },
  {
    id: "aws-dva-490",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "DynamoDB Accelerator (DAX) Caching: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon DynamoDB to reduce DynamoDB read latency from single-digit milliseconds to microseconds for read-heavy e-commerce product catalogs without changing application query logic.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon DynamoDB Accelerator (DAX) in-memory cache is being implemented.",
    options: [
      { id: 'A', text: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client." },
      { id: 'B', text: "Deploy an Amazon ElastiCache for Redis cluster and write custom cache invalidation logic." },
      { id: 'C', text: "Increase the table read capacity units (RCU) by a factor of 100." },
      { id: 'D', text: "Configure a Global Secondary Index with all attributes projected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a DynamoDB Accelerator (DAX) cluster and point the application to the DAX cluster endpoint using the DAX SDK client. DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache specifically built for DynamoDB. It provides microsecond read latency for cache hits and is API-compatible with DynamoDB, meaning applications can integrate DAX simply by swapping the SDK client without rewriting query logic.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
    tags: ["Amazon DynamoDB", "DAX", "Resilience Failure"]
  },
  {
    id: "aws-dva-491",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "S3 Transfer Acceleration: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon S3 to speed up file uploads from global client applications across Europe, Asia, and South America to a centralized S3 bucket located in us-east-1.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon S3 Transfer Acceleration over CloudFront edge network is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain." },
      { id: 'B', text: "Enable S3 Versioning on the bucket." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with caching enabled for POST requests." },
      { id: 'D', text: "Configure Route 53 Geolocation routing to the S3 website endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain. Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between clients and S3 buckets. It uses Amazon CloudFront's globally distributed edge locations to ingest data onto the optimized AWS private network backbone, dramatically reducing upload latency over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-dva-492",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "S3 Transfer Acceleration: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon S3 to speed up file uploads from global client applications across Europe, Asia, and South America to a centralized S3 bucket located in us-east-1.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon S3 Transfer Acceleration over CloudFront edge network is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain." },
      { id: 'B', text: "Enable S3 Versioning on the bucket." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with caching enabled for POST requests." },
      { id: 'D', text: "Configure Route 53 Geolocation routing to the S3 website endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain. Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between clients and S3 buckets. It uses Amazon CloudFront's globally distributed edge locations to ingest data onto the optimized AWS private network backbone, dramatically reducing upload latency over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-dva-493",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "S3 Transfer Acceleration: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon S3 to speed up file uploads from global client applications across Europe, Asia, and South America to a centralized S3 bucket located in us-east-1.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Transfer Acceleration over CloudFront edge network is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain." },
      { id: 'B', text: "Enable S3 Versioning on the bucket." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with caching enabled for POST requests." },
      { id: 'D', text: "Configure Route 53 Geolocation routing to the S3 website endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain. Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between clients and S3 buckets. It uses Amazon CloudFront's globally distributed edge locations to ingest data onto the optimized AWS private network backbone, dramatically reducing upload latency over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-dva-494",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "S3 Transfer Acceleration: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon S3 to speed up file uploads from global client applications across Europe, Asia, and South America to a centralized S3 bucket located in us-east-1.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon S3 Transfer Acceleration over CloudFront edge network is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain." },
      { id: 'B', text: "Enable S3 Versioning on the bucket." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with caching enabled for POST requests." },
      { id: 'D', text: "Configure Route 53 Geolocation routing to the S3 website endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain. Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between clients and S3 buckets. It uses Amazon CloudFront's globally distributed edge locations to ingest data onto the optimized AWS private network backbone, dramatically reducing upload latency over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-dva-495",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "S3 Transfer Acceleration: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon S3 to speed up file uploads from global client applications across Europe, Asia, and South America to a centralized S3 bucket located in us-east-1.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon S3 Transfer Acceleration over CloudFront edge network is being implemented.",
    options: [
      { id: 'A', text: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain." },
      { id: 'B', text: "Enable S3 Versioning on the bucket." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with caching enabled for POST requests." },
      { id: 'D', text: "Configure Route 53 Geolocation routing to the S3 website endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon S3 Transfer Acceleration on the target bucket and update client upload endpoints to use the `s3-accelerate` domain. Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between clients and S3 buckets. It uses Amazon CloudFront's globally distributed edge locations to ingest data onto the optimized AWS private network backbone, dramatically reducing upload latency over the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-dva-496",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "OpenSearch Service Log Analytics: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon OpenSearch to index and search millions of structured application logs in real time with support for complex text queries, dashboards, and automated anomaly detection.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon OpenSearch Service for real-time distributed log analysis is being implemented.",
    options: [
      { id: 'A', text: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards." },
      { id: 'B', text: "Store logs in Amazon S3 and download them to local workstations for grep analysis." },
      { id: 'C', text: "Write logs directly to an Amazon RDS MySQL database table." },
      { id: 'D', text: "Stream logs to an Amazon SQS standard queue and inspect message payloads manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards. Amazon OpenSearch Service provides managed distributed search and analytics, allowing terabytes of log data from CloudWatch Logs, Kinesis, or Fluent Bit to be ingested, indexed in near-real-time, and analyzed using powerful Lucene full-text queries and interactive OpenSearch Dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["Amazon OpenSearch", "OpenSearch", "Dr Failover"]
  },
  {
    id: "aws-dva-497",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "OpenSearch Service Log Analytics: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon OpenSearch to index and search millions of structured application logs in real time with support for complex text queries, dashboards, and automated anomaly detection.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon OpenSearch Service for real-time distributed log analysis is being implemented.",
    options: [
      { id: 'A', text: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards." },
      { id: 'B', text: "Store logs in Amazon S3 and download them to local workstations for grep analysis." },
      { id: 'C', text: "Write logs directly to an Amazon RDS MySQL database table." },
      { id: 'D', text: "Stream logs to an Amazon SQS standard queue and inspect message payloads manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards. Amazon OpenSearch Service provides managed distributed search and analytics, allowing terabytes of log data from CloudWatch Logs, Kinesis, or Fluent Bit to be ingested, indexed in near-real-time, and analyzed using powerful Lucene full-text queries and interactive OpenSearch Dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["Amazon OpenSearch", "OpenSearch", "High Load Scale"]
  },
  {
    id: "aws-dva-498",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "OpenSearch Service Log Analytics: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon OpenSearch to index and search millions of structured application logs in real time with support for complex text queries, dashboards, and automated anomaly detection.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon OpenSearch Service for real-time distributed log analysis is being implemented.",
    options: [
      { id: 'A', text: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards." },
      { id: 'B', text: "Store logs in Amazon S3 and download them to local workstations for grep analysis." },
      { id: 'C', text: "Write logs directly to an Amazon RDS MySQL database table." },
      { id: 'D', text: "Stream logs to an Amazon SQS standard queue and inspect message payloads manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards. Amazon OpenSearch Service provides managed distributed search and analytics, allowing terabytes of log data from CloudWatch Logs, Kinesis, or Fluent Bit to be ingested, indexed in near-real-time, and analyzed using powerful Lucene full-text queries and interactive OpenSearch Dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["Amazon OpenSearch", "OpenSearch", "Security Compliance"]
  },
  {
    id: "aws-dva-499",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "OpenSearch Service Log Analytics: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon OpenSearch to index and search millions of structured application logs in real time with support for complex text queries, dashboards, and automated anomaly detection.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon OpenSearch Service for real-time distributed log analysis is being implemented.",
    options: [
      { id: 'A', text: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards." },
      { id: 'B', text: "Store logs in Amazon S3 and download them to local workstations for grep analysis." },
      { id: 'C', text: "Write logs directly to an Amazon RDS MySQL database table." },
      { id: 'D', text: "Stream logs to an Amazon SQS standard queue and inspect message payloads manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards. Amazon OpenSearch Service provides managed distributed search and analytics, allowing terabytes of log data from CloudWatch Logs, Kinesis, or Fluent Bit to be ingested, indexed in near-real-time, and analyzed using powerful Lucene full-text queries and interactive OpenSearch Dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["Amazon OpenSearch", "OpenSearch", "Hybrid Migration"]
  },
  {
    id: "aws-dva-500",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d4",
    domainName: "Troubleshooting and Optimization",
    title: "OpenSearch Service Log Analytics: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon OpenSearch to index and search millions of structured application logs in real time with support for complex text queries, dashboards, and automated anomaly detection.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon OpenSearch Service for real-time distributed log analysis is being implemented.",
    options: [
      { id: 'A', text: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards." },
      { id: 'B', text: "Store logs in Amazon S3 and download them to local workstations for grep analysis." },
      { id: 'C', text: "Write logs directly to an Amazon RDS MySQL database table." },
      { id: 'D', text: "Stream logs to an Amazon SQS standard queue and inspect message payloads manually." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stream logs from Amazon CloudWatch Logs to an Amazon OpenSearch Service cluster and visualize them using OpenSearch Dashboards. Amazon OpenSearch Service provides managed distributed search and analytics, allowing terabytes of log data from CloudWatch Logs, Kinesis, or Fluent Bit to be ingested, indexed in near-real-time, and analyzed using powerful Lucene full-text queries and interactive OpenSearch Dashboards.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["Amazon OpenSearch", "OpenSearch", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_20;
