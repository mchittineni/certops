export const AWS_DVA_QUESTIONS_13 = [
  {
    id: "aws-dva-301",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs Connection Management: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon API Gateway to build a real-time collaborative chat application with persistent two-way communication between clients and backend microservices.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? API Gateway WebSocket APIs with @connections API is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon SNS HTTP topic with client browser subscriptions." },
      { id: 'B', text: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients." },
      { id: 'C', text: "Deploy an Amazon API Gateway REST API with client polling every 500 milliseconds." },
      { id: 'D', text: "Deploy an Application Load Balancer with long polling HTTP request handlers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients. API Gateway WebSocket APIs maintain persistent bidirectional stateful connections with client browsers. The `$connect` route stores client `connectionId` values (e.g. in DynamoDB), and backend services send messages directly to specific connected clients at any time using the API Gateway `@connections` API callback endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-dva-302",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs Connection Management: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon API Gateway to build a real-time collaborative chat application with persistent two-way communication between clients and backend microservices.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? API Gateway WebSocket APIs with @connections API is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon SNS HTTP topic with client browser subscriptions." },
      { id: 'B', text: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients." },
      { id: 'C', text: "Deploy an Application Load Balancer with long polling HTTP request handlers." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with client polling every 500 milliseconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients. API Gateway WebSocket APIs maintain persistent bidirectional stateful connections with client browsers. The `$connect` route stores client `connectionId` values (e.g. in DynamoDB), and backend services send messages directly to specific connected clients at any time using the API Gateway `@connections` API callback endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-dva-303",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs Connection Management: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon API Gateway to build a real-time collaborative chat application with persistent two-way communication between clients and backend microservices.",
    question: "Which solution properly implements these mandatory security and governance controls? API Gateway WebSocket APIs with @connections API is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients." },
      { id: 'B', text: "Deploy an Application Load Balancer with long polling HTTP request handlers." },
      { id: 'C', text: "Deploy an Amazon SNS HTTP topic with client browser subscriptions." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with client polling every 500 milliseconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients. API Gateway WebSocket APIs maintain persistent bidirectional stateful connections with client browsers. The `$connect` route stores client `connectionId` values (e.g. in DynamoDB), and backend services send messages directly to specific connected clients at any time using the API Gateway `@connections` API callback endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-dva-304",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs Connection Management: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon API Gateway to build a real-time collaborative chat application with persistent two-way communication between clients and backend microservices.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? API Gateway WebSocket APIs with @connections API is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Application Load Balancer with long polling HTTP request handlers." },
      { id: 'B', text: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients." },
      { id: 'C', text: "Deploy an Amazon SNS HTTP topic with client browser subscriptions." },
      { id: 'D', text: "Deploy an Amazon API Gateway REST API with client polling every 500 milliseconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients. API Gateway WebSocket APIs maintain persistent bidirectional stateful connections with client browsers. The `$connect` route stores client `connectionId` values (e.g. in DynamoDB), and backend services send messages directly to specific connected clients at any time using the API Gateway `@connections` API callback endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-dva-305",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs Connection Management: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon API Gateway to build a real-time collaborative chat application with persistent two-way communication between clients and backend microservices.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? API Gateway WebSocket APIs with @connections API is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon API Gateway REST API with client polling every 500 milliseconds." },
      { id: 'B', text: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients." },
      { id: 'C', text: "Deploy an Amazon SNS HTTP topic with client browser subscriptions." },
      { id: 'D', text: "Deploy an Application Load Balancer with long polling HTTP request handlers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon API Gateway WebSocket API, store connection IDs in Amazon DynamoDB upon `$connect`, and use the `@connections` API to push messages to connected clients. API Gateway WebSocket APIs maintain persistent bidirectional stateful connections with client browsers. The `$connect` route stores client `connectionId` values (e.g. in DynamoDB), and backend services send messages directly to specific connected clients at any time using the API Gateway `@connections` API callback endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  },
  {
    id: "aws-dva-306",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Presigned URLs for Secure Direct Uploads: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon S3 to allow mobile application users to upload multi-gigabyte video files directly to an Amazon S3 bucket without streaming through application servers or exposing AWS credentials.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon S3 Presigned URLs for direct client uploads is being implemented.",
    options: [
      { id: 'A', text: "Embed AWS IAM access keys in the mobile application binary with restricted S3 permissions." },
      { id: 'B', text: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload." },
      { id: 'C', text: "Stream video chunks through an Amazon API Gateway REST API backed by AWS Lambda." },
      { id: 'D', text: "Configure the Amazon S3 bucket with public write access enabled via bucket policy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload. An S3 presigned URL grants temporary permission to upload or download a specific object using the security credentials of the IAM user or role that generated the URL. Mobile clients upload files directly to S3 over HTTPS without traversing intermediate application servers or exposing AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-dva-307",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Presigned URLs for Secure Direct Uploads: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon S3 to allow mobile application users to upload multi-gigabyte video files directly to an Amazon S3 bucket without streaming through application servers or exposing AWS credentials.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon S3 Presigned URLs for direct client uploads is being implemented.",
    options: [
      { id: 'A', text: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload." },
      { id: 'B', text: "Embed AWS IAM access keys in the mobile application binary with restricted S3 permissions." },
      { id: 'C', text: "Configure the Amazon S3 bucket with public write access enabled via bucket policy." },
      { id: 'D', text: "Stream video chunks through an Amazon API Gateway REST API backed by AWS Lambda." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload. An S3 presigned URL grants temporary permission to upload or download a specific object using the security credentials of the IAM user or role that generated the URL. Mobile clients upload files directly to S3 over HTTPS without traversing intermediate application servers or exposing AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-dva-308",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Presigned URLs for Secure Direct Uploads: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon S3 to allow mobile application users to upload multi-gigabyte video files directly to an Amazon S3 bucket without streaming through application servers or exposing AWS credentials.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Presigned URLs for direct client uploads is being implemented.",
    options: [
      { id: 'A', text: "Configure the Amazon S3 bucket with public write access enabled via bucket policy." },
      { id: 'B', text: "Embed AWS IAM access keys in the mobile application binary with restricted S3 permissions." },
      { id: 'C', text: "Stream video chunks through an Amazon API Gateway REST API backed by AWS Lambda." },
      { id: 'D', text: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload. An S3 presigned URL grants temporary permission to upload or download a specific object using the security credentials of the IAM user or role that generated the URL. Mobile clients upload files directly to S3 over HTTPS without traversing intermediate application servers or exposing AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-dva-309",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Presigned URLs for Secure Direct Uploads: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon S3 to allow mobile application users to upload multi-gigabyte video files directly to an Amazon S3 bucket without streaming through application servers or exposing AWS credentials.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon S3 Presigned URLs for direct client uploads is being implemented.",
    options: [
      { id: 'A', text: "Stream video chunks through an Amazon API Gateway REST API backed by AWS Lambda." },
      { id: 'B', text: "Configure the Amazon S3 bucket with public write access enabled via bucket policy." },
      { id: 'C', text: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload." },
      { id: 'D', text: "Embed AWS IAM access keys in the mobile application binary with restricted S3 permissions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload. An S3 presigned URL grants temporary permission to upload or download a specific object using the security credentials of the IAM user or role that generated the URL. Mobile clients upload files directly to S3 over HTTPS without traversing intermediate application servers or exposing AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-dva-310",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Presigned URLs for Secure Direct Uploads: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon S3 to allow mobile application users to upload multi-gigabyte video files directly to an Amazon S3 bucket without streaming through application servers or exposing AWS credentials.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon S3 Presigned URLs for direct client uploads is being implemented.",
    options: [
      { id: 'A', text: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload." },
      { id: 'B', text: "Embed AWS IAM access keys in the mobile application binary with restricted S3 permissions." },
      { id: 'C', text: "Configure the Amazon S3 bucket with public write access enabled via bucket policy." },
      { id: 'D', text: "Stream video chunks through an Amazon API Gateway REST API backed by AWS Lambda." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate an Amazon S3 presigned PUT URL with a short expiration window on the application backend and provide it to the mobile client for direct upload. An S3 presigned URL grants temporary permission to upload or download a specific object using the security credentials of the IAM user or role that generated the URL. Mobile clients upload files directly to S3 over HTTPS without traversing intermediate application servers or exposing AWS credentials.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-dva-311",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Multipart Upload APIs: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon S3 to upload large video files exceeding 100 MB reliably over unstable networks with support for parallel part uploads and resuming interrupted transfers.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon S3 Multipart Upload API operations is being implemented.",
    options: [
      { id: 'A', text: "Stream the file as a base64-encoded string through an Amazon SQS standard queue." },
      { id: 'B', text: "Upload the file to an Amazon DynamoDB table in 400 KB binary chunks." },
      { id: 'C', text: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`." },
      { id: 'D', text: "Execute a single standard S3 `PutObject` API call with a 10-minute timeout." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`. The S3 Multipart Upload API allows files from 5 MB up to 5 TB to be uploaded in parts independently and in parallel. If transmission of any individual part fails, only that specific part needs to be retried without restarting the entire upload from the beginning.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["Amazon S3", "S3", "Dr Failover"]
  },
  {
    id: "aws-dva-312",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Multipart Upload APIs: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon S3 to upload large video files exceeding 100 MB reliably over unstable networks with support for parallel part uploads and resuming interrupted transfers.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon S3 Multipart Upload API operations is being implemented.",
    options: [
      { id: 'A', text: "Stream the file as a base64-encoded string through an Amazon SQS standard queue." },
      { id: 'B', text: "Upload the file to an Amazon DynamoDB table in 400 KB binary chunks." },
      { id: 'C', text: "Execute a single standard S3 `PutObject` API call with a 10-minute timeout." },
      { id: 'D', text: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`. The S3 Multipart Upload API allows files from 5 MB up to 5 TB to be uploaded in parts independently and in parallel. If transmission of any individual part fails, only that specific part needs to be retried without restarting the entire upload from the beginning.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["Amazon S3", "S3", "High Load Scale"]
  },
  {
    id: "aws-dva-313",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Multipart Upload APIs: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon S3 to upload large video files exceeding 100 MB reliably over unstable networks with support for parallel part uploads and resuming interrupted transfers.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon S3 Multipart Upload API operations is being implemented.",
    options: [
      { id: 'A', text: "Execute a single standard S3 `PutObject` API call with a 10-minute timeout." },
      { id: 'B', text: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`." },
      { id: 'C', text: "Upload the file to an Amazon DynamoDB table in 400 KB binary chunks." },
      { id: 'D', text: "Stream the file as a base64-encoded string through an Amazon SQS standard queue." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`. The S3 Multipart Upload API allows files from 5 MB up to 5 TB to be uploaded in parts independently and in parallel. If transmission of any individual part fails, only that specific part needs to be retried without restarting the entire upload from the beginning.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["Amazon S3", "S3", "Security Compliance"]
  },
  {
    id: "aws-dva-314",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Multipart Upload APIs: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon S3 to upload large video files exceeding 100 MB reliably over unstable networks with support for parallel part uploads and resuming interrupted transfers.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon S3 Multipart Upload API operations is being implemented.",
    options: [
      { id: 'A', text: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`." },
      { id: 'B', text: "Stream the file as a base64-encoded string through an Amazon SQS standard queue." },
      { id: 'C', text: "Upload the file to an Amazon DynamoDB table in 400 KB binary chunks." },
      { id: 'D', text: "Execute a single standard S3 `PutObject` API call with a 10-minute timeout." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`. The S3 Multipart Upload API allows files from 5 MB up to 5 TB to be uploaded in parts independently and in parallel. If transmission of any individual part fails, only that specific part needs to be retried without restarting the entire upload from the beginning.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["Amazon S3", "S3", "Hybrid Migration"]
  },
  {
    id: "aws-dva-315",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "S3 Multipart Upload APIs: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon S3 to upload large video files exceeding 100 MB reliably over unstable networks with support for parallel part uploads and resuming interrupted transfers.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon S3 Multipart Upload API operations is being implemented.",
    options: [
      { id: 'A', text: "Upload the file to an Amazon DynamoDB table in 400 KB binary chunks." },
      { id: 'B', text: "Execute a single standard S3 `PutObject` API call with a 10-minute timeout." },
      { id: 'C', text: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`." },
      { id: 'D', text: "Stream the file as a base64-encoded string through an Amazon SQS standard queue." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Initiate an S3 Multipart Upload using `CreateMultipartUpload`, upload parts concurrently with `UploadPart`, and finalize the object using `CompleteMultipartUpload`. The S3 Multipart Upload API allows files from 5 MB up to 5 TB to be uploaded in parts independently and in parallel. If transmission of any individual part fails, only that specific part needs to be retried without restarting the entire upload from the beginning.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["Amazon S3", "S3", "Resilience Failure"]
  },
  {
    id: "aws-dva-316",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon SQS to reduce Amazon SQS operational costs and eliminate empty receive responses when consumer worker instances poll queues that have intermittent message traffic.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon SQS Long Polling with ReceiveMessageWaitTimeSeconds is being implemented.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch to restart consumer instances every 5 minutes." },
      { id: 'B', text: "Increase the number of consumer EC2 instances polling the queue continuously." },
      { id: 'C', text: "Decrease the SQS message visibility timeout to 0 seconds." },
      { id: 'D', text: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue. Long polling waits up to 20 seconds for messages to arrive in the queue before sending a response, querying all servers. This eliminates empty `ReceiveMessage` responses, drastically reduces API call volume and costs, and reduces message delivery latency compared to short polling.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["Amazon SQS", "SQS", "Dr Failover"]
  },
  {
    id: "aws-dva-317",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon SQS to reduce Amazon SQS operational costs and eliminate empty receive responses when consumer worker instances poll queues that have intermittent message traffic.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon SQS Long Polling with ReceiveMessageWaitTimeSeconds is being implemented.",
    options: [
      { id: 'A', text: "Increase the number of consumer EC2 instances polling the queue continuously." },
      { id: 'B', text: "Configure Amazon CloudWatch to restart consumer instances every 5 minutes." },
      { id: 'C', text: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue." },
      { id: 'D', text: "Decrease the SQS message visibility timeout to 0 seconds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue. Long polling waits up to 20 seconds for messages to arrive in the queue before sending a response, querying all servers. This eliminates empty `ReceiveMessage` responses, drastically reduces API call volume and costs, and reduces message delivery latency compared to short polling.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["Amazon SQS", "SQS", "High Load Scale"]
  },
  {
    id: "aws-dva-318",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon SQS to reduce Amazon SQS operational costs and eliminate empty receive responses when consumer worker instances poll queues that have intermittent message traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon SQS Long Polling with ReceiveMessageWaitTimeSeconds is being implemented.",
    options: [
      { id: 'A', text: "Decrease the SQS message visibility timeout to 0 seconds." },
      { id: 'B', text: "Configure Amazon CloudWatch to restart consumer instances every 5 minutes." },
      { id: 'C', text: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue." },
      { id: 'D', text: "Increase the number of consumer EC2 instances polling the queue continuously." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue. Long polling waits up to 20 seconds for messages to arrive in the queue before sending a response, querying all servers. This eliminates empty `ReceiveMessage` responses, drastically reduces API call volume and costs, and reduces message delivery latency compared to short polling.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["Amazon SQS", "SQS", "Security Compliance"]
  },
  {
    id: "aws-dva-319",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon SQS to reduce Amazon SQS operational costs and eliminate empty receive responses when consumer worker instances poll queues that have intermittent message traffic.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon SQS Long Polling with ReceiveMessageWaitTimeSeconds is being implemented.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch to restart consumer instances every 5 minutes." },
      { id: 'B', text: "Increase the number of consumer EC2 instances polling the queue continuously." },
      { id: 'C', text: "Decrease the SQS message visibility timeout to 0 seconds." },
      { id: 'D', text: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue. Long polling waits up to 20 seconds for messages to arrive in the queue before sending a response, querying all servers. This eliminates empty `ReceiveMessage` responses, drastically reduces API call volume and costs, and reduces message delivery latency compared to short polling.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["Amazon SQS", "SQS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-320",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS Long Polling vs Short Polling: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon SQS to reduce Amazon SQS operational costs and eliminate empty receive responses when consumer worker instances poll queues that have intermittent message traffic.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon SQS Long Polling with ReceiveMessageWaitTimeSeconds is being implemented.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch to restart consumer instances every 5 minutes." },
      { id: 'B', text: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue." },
      { id: 'C', text: "Increase the number of consumer EC2 instances polling the queue continuously." },
      { id: 'D', text: "Decrease the SQS message visibility timeout to 0 seconds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Long Polling by setting `ReceiveMessageWaitTimeSeconds` to 20 seconds on the SQS queue. Long polling waits up to 20 seconds for messages to arrive in the queue before sending a response, querying all servers. This eliminates empty `ReceiveMessage` responses, drastically reduces API call volume and costs, and reduces message delivery latency compared to short polling.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html",
    tags: ["Amazon SQS", "SQS", "Resilience Failure"]
  },
  {
    id: "aws-dva-321",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS FIFO Message Deduplication and Grouping: Dr Failover",
    scenario: "A high-availability enterprise cloud service requires strict operational resilience and automated disaster recovery capabilities. The engineering team must eliminate single points of failure across operational workflows. The application utilizes Amazon SQS to process financial ledger transactions strictly in the order they occurred per customer account while preventing duplicate message processing within a 5-minute window.",
    question: "Which implementation or architectural approach satisfies these resilience criteria? Amazon SQS FIFO queue with MessageGroupId and DeduplicationId is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon SNS standard topic configured with subscriber message ordering filters." },
      { id: 'B', text: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction." },
      { id: 'C', text: "Deploy an Amazon Kinesis Data Stream with a single shard for all customers." },
      { id: 'D', text: "Deploy a standard SQS queue with an Amazon DynamoDB table storing processed message hashes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction. SQS FIFO queues preserve exact message ordering within each `MessageGroupId` and ensure that multiple consumer threads can process different groups concurrently without interleaving. The `MessageDeduplicationId` (or content-based deduplication) guarantees exactly-once processing by rejecting duplicate messages sent within 5 minutes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["Amazon SQS", "SQS", "Dr Failover"]
  },
  {
    id: "aws-dva-322",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS FIFO Message Deduplication and Grouping: High Load Scale",
    scenario: "A high-throughput digital platform experiences sudden spikes in concurrent user traffic during flash promotions. Developers must ensure sub-second response times and predictable scaling under peak throughput. The application utilizes Amazon SQS to process financial ledger transactions strictly in the order they occurred per customer account while preventing duplicate message processing within a 5-minute window.",
    question: "Which architectural approach should the developer recommend to handle this workload efficiently? Amazon SQS FIFO queue with MessageGroupId and DeduplicationId is being implemented.",
    options: [
      { id: 'A', text: "Deploy a standard SQS queue with an Amazon DynamoDB table storing processed message hashes." },
      { id: 'B', text: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction." },
      { id: 'C', text: "Deploy an Amazon SNS standard topic configured with subscriber message ordering filters." },
      { id: 'D', text: "Deploy an Amazon Kinesis Data Stream with a single shard for all customers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction. SQS FIFO queues preserve exact message ordering within each `MessageGroupId` and ensure that multiple consumer threads can process different groups concurrently without interleaving. The `MessageDeduplicationId` (or content-based deduplication) guarantees exactly-once processing by rejecting duplicate messages sent within 5 minutes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["Amazon SQS", "SQS", "High Load Scale"]
  },
  {
    id: "aws-dva-323",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS FIFO Message Deduplication and Grouping: Security Compliance",
    scenario: "A financial and healthcare service must adhere to strict regulatory compliance, encryption standards, and least privilege access principles. Security auditors require verified enforcement across all application tiers. The application utilizes Amazon SQS to process financial ledger transactions strictly in the order they occurred per customer account while preventing duplicate message processing within a 5-minute window.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon SQS FIFO queue with MessageGroupId and DeduplicationId is being implemented.",
    options: [
      { id: 'A', text: "Deploy a standard SQS queue with an Amazon DynamoDB table storing processed message hashes." },
      { id: 'B', text: "Deploy an Amazon Kinesis Data Stream with a single shard for all customers." },
      { id: 'C', text: "Deploy an Amazon SNS standard topic configured with subscriber message ordering filters." },
      { id: 'D', text: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction. SQS FIFO queues preserve exact message ordering within each `MessageGroupId` and ensure that multiple consumer threads can process different groups concurrently without interleaving. The `MessageDeduplicationId` (or content-based deduplication) guarantees exactly-once processing by rejecting duplicate messages sent within 5 minutes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["Amazon SQS", "SQS", "Security Compliance"]
  },
  {
    id: "aws-dva-324",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS FIFO Message Deduplication and Grouping: Hybrid Migration",
    scenario: "An enterprise development team is refactoring a legacy monolithic application into cloud-native microservices on AWS. The architecture must minimize operational complexity while leveraging managed services. The application utilizes Amazon SQS to process financial ledger transactions strictly in the order they occurred per customer account while preventing duplicate message processing within a 5-minute window.",
    question: "Which solution provides a robust implementation while minimizing ongoing operational maintenance? Amazon SQS FIFO queue with MessageGroupId and DeduplicationId is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon Kinesis Data Stream with a single shard for all customers." },
      { id: 'B', text: "Deploy an Amazon SNS standard topic configured with subscriber message ordering filters." },
      { id: 'C', text: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction." },
      { id: 'D', text: "Deploy a standard SQS queue with an Amazon DynamoDB table storing processed message hashes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction. SQS FIFO queues preserve exact message ordering within each `MessageGroupId` and ensure that multiple consumer threads can process different groups concurrently without interleaving. The `MessageDeduplicationId` (or content-based deduplication) guarantees exactly-once processing by rejecting duplicate messages sent within 5 minutes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["Amazon SQS", "SQS", "Hybrid Migration"]
  },
  {
    id: "aws-dva-325",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "SQS FIFO Message Deduplication and Grouping: Resilience Failure",
    scenario: "A distributed cloud application experiences intermittent downstream service timeouts and connection exhaustion during peak operational hours. The development team must establish automated recovery and fault isolation. The application utilizes Amazon SQS to process financial ledger transactions strictly in the order they occurred per customer account while preventing duplicate message processing within a 5-minute window.",
    question: "Which design pattern or service configuration eliminates bottlenecks and provides automated fault recovery? Amazon SQS FIFO queue with MessageGroupId and DeduplicationId is being implemented.",
    options: [
      { id: 'A', text: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction." },
      { id: 'B', text: "Deploy an Amazon Kinesis Data Stream with a single shard for all customers." },
      { id: 'C', text: "Deploy an Amazon SNS standard topic configured with subscriber message ordering filters." },
      { id: 'D', text: "Deploy a standard SQS queue with an Amazon DynamoDB table storing processed message hashes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an Amazon SQS FIFO queue, populate `MessageGroupId` with the customer account ID, and specify a unique `MessageDeduplicationId` for each transaction. SQS FIFO queues preserve exact message ordering within each `MessageGroupId` and ensure that multiple consumer threads can process different groups concurrently without interleaving. The `MessageDeduplicationId` (or content-based deduplication) guarantees exactly-once processing by rejecting duplicate messages sent within 5 minutes.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["Amazon SQS", "SQS", "Resilience Failure"]
  }
];

export default AWS_DVA_QUESTIONS_13;
