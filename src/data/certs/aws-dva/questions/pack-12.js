export const AWS_DVA_QUESTIONS_12 = [
  {
    id: "aws-dva-276",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs with CORS: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Lambda to expose a serverless microservice to web browser clients via an HTTPS endpoint with minimal latency, direct authentication, and built-in CORS support without deploying an API Gateway.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Lambda Function URLs with CORS configuration is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Application Load Balancer with an internal listener and a Lambda target group." },
      { id: 'B', text: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL." },
      { id: 'C', text: "Deploy an Amazon API Gateway REST API with a mock integration." },
      { id: 'D', text: "Configure Amazon CloudFront with an S3 origin and a custom origin request header." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL. Lambda Function URLs provide a dedicated HTTP(S) endpoint for any Lambda function with built-in Cross-Origin Resource Sharing (CORS) support and optional IAM authentication, eliminating the cost and architectural complexity of API Gateway for simple webhooks or direct endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-dva-277",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs with CORS: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Lambda to expose a serverless microservice to web browser clients via an HTTPS endpoint with minimal latency, direct authentication, and built-in CORS support without deploying an API Gateway.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Lambda Function URLs with CORS configuration is being implemented.",
    options: [
      { id: 'A', text: "Configure Amazon CloudFront with an S3 origin and a custom origin request header." },
      { id: 'B', text: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL." },
      { id: 'C', text: "Deploy an Application Load Balancer with an internal listener and a Lambda target group." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with a mock integration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL. Lambda Function URLs provide a dedicated HTTP(S) endpoint for any Lambda function with built-in Cross-Origin Resource Sharing (CORS) support and optional IAM authentication, eliminating the cost and architectural complexity of API Gateway for simple webhooks or direct endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-dva-278",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs with CORS: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Lambda to expose a serverless microservice to web browser clients via an HTTPS endpoint with minimal latency, direct authentication, and built-in CORS support without deploying an API Gateway.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Lambda Function URLs with CORS configuration is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway REST API with a mock integration." },
      { id: 'B', text: "Deploy an Application Load Balancer with an internal listener and a Lambda target group." },
      { id: 'C', text: "Configure Amazon CloudFront with an S3 origin and a custom origin request header." },
      { id: 'D', text: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL. Lambda Function URLs provide a dedicated HTTP(S) endpoint for any Lambda function with built-in Cross-Origin Resource Sharing (CORS) support and optional IAM authentication, eliminating the cost and architectural complexity of API Gateway for simple webhooks or direct endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-dva-279",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs with CORS: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Lambda to expose a serverless microservice to web browser clients via an HTTPS endpoint with minimal latency, direct authentication, and built-in CORS support without deploying an API Gateway.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Lambda Function URLs with CORS configuration is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway REST API with a mock integration." },
      { id: 'B', text: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL." },
      { id: 'C', text: "Configure Amazon CloudFront with an S3 origin and a custom origin request header." },
      { id: 'D', text: "Deploy an Application Load Balancer with an internal listener and a Lambda target group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL. Lambda Function URLs provide a dedicated HTTP(S) endpoint for any Lambda function with built-in Cross-Origin Resource Sharing (CORS) support and optional IAM authentication, eliminating the cost and architectural complexity of API Gateway for simple webhooks or direct endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-dva-280",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs with CORS: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Lambda to expose a serverless microservice to web browser clients via an HTTPS endpoint with minimal latency, direct authentication, and built-in CORS support without deploying an API Gateway.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Lambda Function URLs with CORS configuration is being implemented.",
    options: [
      { id: 'A', text: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL." },
      { id: 'B', text: "Deploy an Amazon API Gateway REST API with a mock integration." },
      { id: 'C', text: "Deploy an Application Load Balancer with an internal listener and a Lambda target group." },
      { id: 'D', text: "Configure Amazon CloudFront with an S3 origin and a custom origin request header." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an AWS Lambda Function URL with AuthType set to AWS_IAM or NONE and configure the built-in CORS settings on the Function URL. Lambda Function URLs provide a dedicated HTTP(S) endpoint for any Lambda function with built-in Cross-Origin Resource Sharing (CORS) support and optional IAM authentication, eliminating the cost and architectural complexity of API Gateway for simple webhooks or direct endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-dva-281",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Functions: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Lambda to reduce cold start latency by up to 90% for a Spring Boot microservice running on AWS Lambda using the Corretto Java runtime.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Lambda SnapStart for Java runtimes is being implemented.",
    options: [
      { id: 'A', text: "Enable AWS Lambda SnapStart on the Java function and publish a new version." },
      { id: 'B', text: "Increase the ephemeral storage (/tmp) to 10,240 MB." },
      { id: 'C', text: "Switch the runtime environment from x86_64 to ARM64 Graviton." },
      { id: 'D', text: "Increase the Lambda function execution timeout from 3 seconds to 15 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Lambda SnapStart on the Java function and publish a new version. Lambda SnapStart for Java initializes the function code, takes a Firecracker microVM snapshot of the initialized memory and disk state, and caches the snapshot. When the function is invoked, Lambda resumes execution from the cached snapshot rather than initializing from scratch, reducing cold starts from multiple seconds to sub-200 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-dva-282",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Functions: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Lambda to reduce cold start latency by up to 90% for a Spring Boot microservice running on AWS Lambda using the Corretto Java runtime.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Lambda SnapStart for Java runtimes is being implemented.",
    options: [
      { id: 'A', text: "Enable AWS Lambda SnapStart on the Java function and publish a new version." },
      { id: 'B', text: "Switch the runtime environment from x86_64 to ARM64 Graviton." },
      { id: 'C', text: "Increase the Lambda function execution timeout from 3 seconds to 15 minutes." },
      { id: 'D', text: "Increase the ephemeral storage (/tmp) to 10,240 MB." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Lambda SnapStart on the Java function and publish a new version. Lambda SnapStart for Java initializes the function code, takes a Firecracker microVM snapshot of the initialized memory and disk state, and caches the snapshot. When the function is invoked, Lambda resumes execution from the cached snapshot rather than initializing from scratch, reducing cold starts from multiple seconds to sub-200 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-dva-283",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Functions: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Lambda to reduce cold start latency by up to 90% for a Spring Boot microservice running on AWS Lambda using the Corretto Java runtime.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Lambda SnapStart for Java runtimes is being implemented.",
    options: [
      { id: 'A', text: "Enable AWS Lambda SnapStart on the Java function and publish a new version." },
      { id: 'B', text: "Increase the Lambda function execution timeout from 3 seconds to 15 minutes." },
      { id: 'C', text: "Increase the ephemeral storage (/tmp) to 10,240 MB." },
      { id: 'D', text: "Switch the runtime environment from x86_64 to ARM64 Graviton." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Lambda SnapStart on the Java function and publish a new version. Lambda SnapStart for Java initializes the function code, takes a Firecracker microVM snapshot of the initialized memory and disk state, and caches the snapshot. When the function is invoked, Lambda resumes execution from the cached snapshot rather than initializing from scratch, reducing cold starts from multiple seconds to sub-200 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-dva-284",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Functions: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Lambda to reduce cold start latency by up to 90% for a Spring Boot microservice running on AWS Lambda using the Corretto Java runtime.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Lambda SnapStart for Java runtimes is being implemented.",
    options: [
      { id: 'A', text: "Enable AWS Lambda SnapStart on the Java function and publish a new version." },
      { id: 'B', text: "Increase the Lambda function execution timeout from 3 seconds to 15 minutes." },
      { id: 'C', text: "Increase the ephemeral storage (/tmp) to 10,240 MB." },
      { id: 'D', text: "Switch the runtime environment from x86_64 to ARM64 Graviton." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Lambda SnapStart on the Java function and publish a new version. Lambda SnapStart for Java initializes the function code, takes a Firecracker microVM snapshot of the initialized memory and disk state, and caches the snapshot. When the function is invoked, Lambda resumes execution from the cached snapshot rather than initializing from scratch, reducing cold starts from multiple seconds to sub-200 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-dva-285",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda SnapStart for Java Functions: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Lambda to reduce cold start latency by up to 90% for a Spring Boot microservice running on AWS Lambda using the Corretto Java runtime.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Lambda SnapStart for Java runtimes is being implemented.",
    options: [
      { id: 'A', text: "Increase the ephemeral storage (/tmp) to 10,240 MB." },
      { id: 'B', text: "Increase the Lambda function execution timeout from 3 seconds to 15 minutes." },
      { id: 'C', text: "Switch the runtime environment from x86_64 to ARM64 Graviton." },
      { id: 'D', text: "Enable AWS Lambda SnapStart on the Java function and publish a new version." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AWS Lambda SnapStart on the Java function and publish a new version. Lambda SnapStart for Java initializes the function code, takes a Firecracker microVM snapshot of the initialized memory and disk state, and caches the snapshot. When the function is invoked, Lambda resumes execution from the cached snapshot rather than initializing from scratch, reducing cold starts from multiple seconds to sub-200 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-dva-286",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Init Phase and Global Scope Reuse: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Lambda to optimize execution duration and reduce database connection churn for an AWS Lambda function querying Amazon Aurora MySQL.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Lambda initialization outside the handler function is being implemented.",
    options: [
      { id: 'A', text: "Reinitialize the database connection inside the Lambda handler function on every single invocation." },
      { id: 'B', text: "Pass the database connection object in the incoming event payload." },
      { id: 'C', text: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function." },
      { id: 'D', text: "Store database connection credentials in a local file in the /tmp directory." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function. Code declared outside the Lambda handler function executes during the Init phase of the execution environment. SDK clients, database connections, and configuration data remain initialized in memory and are reused across warm invocations, substantially reducing execution latency and connection overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-dva-287",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Init Phase and Global Scope Reuse: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Lambda to optimize execution duration and reduce database connection churn for an AWS Lambda function querying Amazon Aurora MySQL.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Lambda initialization outside the handler function is being implemented.",
    options: [
      { id: 'A', text: "Pass the database connection object in the incoming event payload." },
      { id: 'B', text: "Store database connection credentials in a local file in the /tmp directory." },
      { id: 'C', text: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function." },
      { id: 'D', text: "Reinitialize the database connection inside the Lambda handler function on every single invocation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function. Code declared outside the Lambda handler function executes during the Init phase of the execution environment. SDK clients, database connections, and configuration data remain initialized in memory and are reused across warm invocations, substantially reducing execution latency and connection overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-dva-288",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Init Phase and Global Scope Reuse: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Lambda to optimize execution duration and reduce database connection churn for an AWS Lambda function querying Amazon Aurora MySQL.",
    question: "Which solution properly implements these mandatory security and governance controls? Lambda initialization outside the handler function is being implemented.",
    options: [
      { id: 'A', text: "Reinitialize the database connection inside the Lambda handler function on every single invocation." },
      { id: 'B', text: "Pass the database connection object in the incoming event payload." },
      { id: 'C', text: "Store database connection credentials in a local file in the /tmp directory." },
      { id: 'D', text: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function. Code declared outside the Lambda handler function executes during the Init phase of the execution environment. SDK clients, database connections, and configuration data remain initialized in memory and are reused across warm invocations, substantially reducing execution latency and connection overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-dva-289",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Init Phase and Global Scope Reuse: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Lambda to optimize execution duration and reduce database connection churn for an AWS Lambda function querying Amazon Aurora MySQL.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Lambda initialization outside the handler function is being implemented.",
    options: [
      { id: 'A', text: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function." },
      { id: 'B', text: "Reinitialize the database connection inside the Lambda handler function on every single invocation." },
      { id: 'C', text: "Store database connection credentials in a local file in the /tmp directory." },
      { id: 'D', text: "Pass the database connection object in the incoming event payload." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function. Code declared outside the Lambda handler function executes during the Init phase of the execution environment. SDK clients, database connections, and configuration data remain initialized in memory and are reused across warm invocations, substantially reducing execution latency and connection overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-dva-290",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Init Phase and Global Scope Reuse: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Lambda to optimize execution duration and reduce database connection churn for an AWS Lambda function querying Amazon Aurora MySQL.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Lambda initialization outside the handler function is being implemented.",
    options: [
      { id: 'A', text: "Pass the database connection object in the incoming event payload." },
      { id: 'B', text: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function." },
      { id: 'C', text: "Reinitialize the database connection inside the Lambda handler function on every single invocation." },
      { id: 'D', text: "Store database connection credentials in a local file in the /tmp directory." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Initialize the database connection and AWS SDK clients in the global scope outside the Lambda handler function. Code declared outside the Lambda handler function executes during the Init phase of the execution environment. SDK clients, database connections, and configuration data remain initialized in memory and are reused across warm invocations, substantially reducing execution latency and connection overhead.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-dva-291",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Response Streaming: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes AWS Lambda to stream large JSON documents and progressive web responses up to 20 MB back to client browsers without buffering the entire payload in memory.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? AWS Lambda Response Streaming for Node.js is being implemented.",
    options: [
      { id: 'A', text: "Increase the Lambda memory size to 10,240 MB to accommodate larger return objects." },
      { id: 'B', text: "Split the JSON document into multiple 6 MB chunks and send multiple SQS messages." },
      { id: 'C', text: "Write the payload to an Amazon S3 bucket and return a presigned URL." },
      { id: 'D', text: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator. AWS Lambda supports Response Streaming for Node.js runtimes, allowing functions to send response payloads incrementally as they are generated. This enables streaming of responses larger than the traditional 6 MB synchronous payload limit (up to 20 MB) and reduces time to first byte for client applications.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html",
    tags: ["AWS Lambda", "Lambda", "Dr Failover"]
  },
  {
    id: "aws-dva-292",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Response Streaming: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes AWS Lambda to stream large JSON documents and progressive web responses up to 20 MB back to client browsers without buffering the entire payload in memory.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? AWS Lambda Response Streaming for Node.js is being implemented.",
    options: [
      { id: 'A', text: "Increase the Lambda memory size to 10,240 MB to accommodate larger return objects." },
      { id: 'B', text: "Write the payload to an Amazon S3 bucket and return a presigned URL." },
      { id: 'C', text: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator." },
      { id: 'D', text: "Split the JSON document into multiple 6 MB chunks and send multiple SQS messages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator. AWS Lambda supports Response Streaming for Node.js runtimes, allowing functions to send response payloads incrementally as they are generated. This enables streaming of responses larger than the traditional 6 MB synchronous payload limit (up to 20 MB) and reduces time to first byte for client applications.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html",
    tags: ["AWS Lambda", "Lambda", "High Load Scale"]
  },
  {
    id: "aws-dva-293",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Response Streaming: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes AWS Lambda to stream large JSON documents and progressive web responses up to 20 MB back to client browsers without buffering the entire payload in memory.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Lambda Response Streaming for Node.js is being implemented.",
    options: [
      { id: 'A', text: "Split the JSON document into multiple 6 MB chunks and send multiple SQS messages." },
      { id: 'B', text: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator." },
      { id: 'C', text: "Increase the Lambda memory size to 10,240 MB to accommodate larger return objects." },
      { id: 'D', text: "Write the payload to an Amazon S3 bucket and return a presigned URL." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator. AWS Lambda supports Response Streaming for Node.js runtimes, allowing functions to send response payloads incrementally as they are generated. This enables streaming of responses larger than the traditional 6 MB synchronous payload limit (up to 20 MB) and reduces time to first byte for client applications.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html",
    tags: ["AWS Lambda", "Lambda", "Security Compliance"]
  },
  {
    id: "aws-dva-294",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Response Streaming: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes AWS Lambda to stream large JSON documents and progressive web responses up to 20 MB back to client browsers without buffering the entire payload in memory.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? AWS Lambda Response Streaming for Node.js is being implemented.",
    options: [
      { id: 'A', text: "Split the JSON document into multiple 6 MB chunks and send multiple SQS messages." },
      { id: 'B', text: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator." },
      { id: 'C', text: "Write the payload to an Amazon S3 bucket and return a presigned URL." },
      { id: 'D', text: "Increase the Lambda memory size to 10,240 MB to accommodate larger return objects." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator. AWS Lambda supports Response Streaming for Node.js runtimes, allowing functions to send response payloads incrementally as they are generated. This enables streaming of responses larger than the traditional 6 MB synchronous payload limit (up to 20 MB) and reduces time to first byte for client applications.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html",
    tags: ["AWS Lambda", "Lambda", "Hybrid Migration"]
  },
  {
    id: "aws-dva-295",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Response Streaming: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes AWS Lambda to stream large JSON documents and progressive web responses up to 20 MB back to client browsers without buffering the entire payload in memory.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? AWS Lambda Response Streaming for Node.js is being implemented.",
    options: [
      { id: 'A', text: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator." },
      { id: 'B', text: "Split the JSON document into multiple 6 MB chunks and send multiple SQS messages." },
      { id: 'C', text: "Write the payload to an Amazon S3 bucket and return a presigned URL." },
      { id: 'D', text: "Increase the Lambda memory size to 10,240 MB to accommodate larger return objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Lambda response streaming using the `awslambda.streamifyResponse()` decorator. AWS Lambda supports Response Streaming for Node.js runtimes, allowing functions to send response payloads incrementally as they are generated. This enables streaming of responses larger than the traditional 6 MB synchronous payload limit (up to 20 MB) and reduces time to first byte for client applications.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html",
    tags: ["AWS Lambda", "Lambda", "Resilience Failure"]
  },
  {
    id: "aws-dva-296",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway HTTP APIs vs REST APIs: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon API Gateway to build an API fronting AWS Lambda and internal HTTP endpoints that requires minimal latency, native OIDC/OAuth 2.0 authorization, and up to 70% cost reduction compared to REST APIs.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon API Gateway HTTP APIs for low-latency workloads is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS AppSync GraphQL API with API Key authentication." },
      { id: 'B', text: "Deploy an Amazon API Gateway HTTP API with JWT authorizers." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with a private Application Load Balancer origin." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with Lambda authorizers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway HTTP API with JWT authorizers. API Gateway HTTP APIs are specifically designed for low-latency, cost-effective API proxying, offering up to 70% cost savings and lower latency compared to REST APIs. They include native support for JWT authorization with OpenID Connect (OIDC) and OAuth 2.0 without requiring custom Lambda authorizers.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-dva-297",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway HTTP APIs vs REST APIs: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon API Gateway to build an API fronting AWS Lambda and internal HTTP endpoints that requires minimal latency, native OIDC/OAuth 2.0 authorization, and up to 70% cost reduction compared to REST APIs.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon API Gateway HTTP APIs for low-latency workloads is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway HTTP API with JWT authorizers." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution with a private Application Load Balancer origin." },
      { id: 'C', text: "Deploy an AWS AppSync GraphQL API with API Key authentication." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with Lambda authorizers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway HTTP API with JWT authorizers. API Gateway HTTP APIs are specifically designed for low-latency, cost-effective API proxying, offering up to 70% cost savings and lower latency compared to REST APIs. They include native support for JWT authorization with OpenID Connect (OIDC) and OAuth 2.0 without requiring custom Lambda authorizers.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-dva-298",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway HTTP APIs vs REST APIs: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon API Gateway to build an API fronting AWS Lambda and internal HTTP endpoints that requires minimal latency, native OIDC/OAuth 2.0 authorization, and up to 70% cost reduction compared to REST APIs.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon API Gateway HTTP APIs for low-latency workloads is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway HTTP API with JWT authorizers." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution with a private Application Load Balancer origin." },
      { id: 'C', text: "Deploy an AWS AppSync GraphQL API with API Key authentication." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with Lambda authorizers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway HTTP API with JWT authorizers. API Gateway HTTP APIs are specifically designed for low-latency, cost-effective API proxying, offering up to 70% cost savings and lower latency compared to REST APIs. They include native support for JWT authorization with OpenID Connect (OIDC) and OAuth 2.0 without requiring custom Lambda authorizers.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-dva-299",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway HTTP APIs vs REST APIs: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon API Gateway to build an API fronting AWS Lambda and internal HTTP endpoints that requires minimal latency, native OIDC/OAuth 2.0 authorization, and up to 70% cost reduction compared to REST APIs.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon API Gateway HTTP APIs for low-latency workloads is being implemented.",
    options: [
      { id: 'A', text: "Deploy an AWS AppSync GraphQL API with API Key authentication." },
      { id: 'B', text: "Deploy an Amazon API Gateway REST API with Lambda authorizers." },
      { id: 'C', text: "Deploy an Amazon CloudFront distribution with a private Application Load Balancer origin." },
      { id: 'D', text: "Deploy an Amazon API Gateway HTTP API with JWT authorizers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway HTTP API with JWT authorizers. API Gateway HTTP APIs are specifically designed for low-latency, cost-effective API proxying, offering up to 70% cost savings and lower latency compared to REST APIs. They include native support for JWT authorization with OpenID Connect (OIDC) and OAuth 2.0 without requiring custom Lambda authorizers.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-dva-300",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway HTTP APIs vs REST APIs: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon API Gateway to build an API fronting AWS Lambda and internal HTTP endpoints that requires minimal latency, native OIDC/OAuth 2.0 authorization, and up to 70% cost reduction compared to REST APIs.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon API Gateway HTTP APIs for low-latency workloads is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway HTTP API with JWT authorizers." },
      { id: 'B', text: "Deploy an Amazon CloudFront distribution with a private Application Load Balancer origin." },
      { id: 'C', text: "Deploy an AWS AppSync GraphQL API with API Key authentication." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with Lambda authorizers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway HTTP API with JWT authorizers. API Gateway HTTP APIs are specifically designed for low-latency, cost-effective API proxying, offering up to 70% cost savings and lower latency compared to REST APIs. They include native support for JWT authorization with OpenID Connect (OIDC) and OAuth 2.0 without requiring custom Lambda authorizers.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_12;
