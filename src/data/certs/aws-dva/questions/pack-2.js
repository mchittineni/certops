export const AWS_DVA_QUESTIONS_2 = [
  {
    id: "aws-dva-26",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Asynchronous Retry Count and Backoff",
    scenario: "An Amazon S3 event triggers a Lambda function asynchronously. The function fails on its first attempt due to a transient downstream service error.",
    question: "What is the default retry behavior executed by AWS Lambda for asynchronous invocations?",
    options: [
      { id: 'A', text: "Lambda automatically retries the invocation 2 times (3 attempts total) with exponential backoff" },
      { id: 'B', text: "Lambda immediately drops the event without any retries" },
      { id: 'C', text: "Lambda retries continuously for 14 days every 5 seconds" },
      { id: 'D', text: "Lambda converts the invocation to a synchronous HTTP request" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For asynchronous invocations, AWS Lambda automatically retries failed executions twice with delay intervals between 1 second and 2 minutes. If all retries fail, the event is either discarded or forwarded to a configured On-Failure Destination or Dead Letter Queue.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html",
    tags: ["Lambda", "Asynchronous", "Retries"]
  },
  {
    id: "aws-dva-27",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda /tmp Ephemeral Storage Encryption",
    scenario: "A financial services company processes regulated customer loan agreements in Lambda ephemeral storage (`/tmp`) and must ensure all local disk data is encrypted.",
    question: "How does AWS Lambda protect data written to the `/tmp` directory?",
    options: [
      { id: 'A', text: "AWS Lambda automatically encrypts data stored in ephemeral storage at rest using an AWS managed KMS key" },
      { id: 'B', text: "Developers must write a custom encryption filter using GPG in Python before saving to /tmp" },
      { id: 'C', text: "Ephemeral storage cannot be encrypted under any circumstances" },
      { id: 'D', text: "Developers must format /tmp with an ext4 encrypted filesystem manually" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data written to Lambda ephemeral storage (`/tmp`) is always encrypted at rest by default using an AWS managed key in AWS Key Management Service (AWS KMS) at no additional charge, meeting corporate compliance requirements.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-ephemeral-storage.html",
    tags: ["Lambda", "Encryption", "Security"]
  },
  {
    id: "aws-dva-28",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URLs CORS Configuration",
    scenario: "A developer exposes a Lambda Function URL with AuthType `NONE` to serve web traffic. Web browsers fail to read the response due to cross-origin headers.",
    question: "Where should the developer configure allowed origins, methods, and exposed headers for a Function URL?",
    options: [
      { id: 'A', text: "Configure the CORS settings directly in the Lambda Function URL configuration" },
      { id: 'B', text: "Deploy an Application Load Balancer in front of the Function URL" },
      { id: 'C', text: "Embed CORS headers in an S3 bucket policy" },
      { id: 'D', text: "Install an Apache web server inside the Lambda container" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Function URLs support native Cross-Origin Resource Sharing (CORS) configuration directly in the function URL settings, including `AllowOrigins`, `AllowMethods`, `AllowHeaders`, `ExposeHeaders`, `MaxAge`, and `AllowCredentials`, eliminating the need for proxy layers.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/urls-configuration.html",
    tags: ["Lambda", "Function URLs", "CORS"]
  },
  {
    id: "aws-dva-29",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Event Filtering for SQS Event Sources",
    scenario: "A Lambda function triggers from an Amazon SQS queue. The queue receives various transaction types, but the function only needs to process messages where `eventType` equals `OrderPlaced`.",
    question: "How should the developer prevent unnecessary Lambda invocations for non-matching events without writing code?",
    options: [
      { id: 'A', text: "Add an EC2 instance that reads messages and filters them before re-enqueueing" },
      { id: 'B', text: "Increase the SQS visibility timeout to 12 hours" },
      { id: 'C', text: "Define an Event Source Mapping Filter Criteria with a JSON pattern matching eventType" },
      { id: 'D', text: "Delete non-matching messages using a second Lambda function polling every second" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Event source mapping Filter Criteria allow developers to specify JSON filter patterns. Lambda only evaluates and invokes the function for messages matching the criteria. Non-matching messages are automatically filtered out without invoking or billing for Lambda compute.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html",
    tags: ["Lambda", "Event Filtering", "SQS"]
  },
  {
    id: "aws-dva-30",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Lambda Function URL IAM Request Signing",
    scenario: "A microservice client invokes a Lambda Function URL configured with AuthType `AWS_IAM`. The request receives an HTTP 403 Forbidden response.",
    question: "What must the calling client include in the HTTP request to authenticate successfully?",
    options: [
      { id: 'A', text: "A valid AWS Signature Version 4 (SigV4) authorization header signed with AWS credentials" },
      { id: 'B', text: "A basic authentication header with an IAM user password" },
      { id: 'C', text: "An OAuth 2.0 bearer token issued by Google Accounts" },
      { id: 'D', text: "A client SSL certificate installed in the browser" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a Lambda Function URL uses `AWS_IAM` authorization, incoming requests must be signed using AWS Signature Version 4 (SigV4) containing valid AWS IAM access key credentials. Unsigned requests receive an HTTP 403 Forbidden error.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html",
    tags: ["Lambda", "Function URLs", "SigV4"]
  },
  {
    id: "aws-dva-31",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway REST vs. HTTP APIs",
    scenario: "A development team needs a cost-effective API for a mobile client that only requires JWT authorization and OIDC integration without complex SOAP transformation.",
    question: "Which API Gateway type should the developer choose to minimize cost and latency?",
    options: [
      { id: 'A', text: "REST APIs" },
      { id: 'B', text: "Private REST APIs via VPC endpoints" },
      { id: 'C', text: "HTTP APIs" },
      { id: 'D', text: "WebSocket APIs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "API Gateway HTTP APIs are optimized for building serverless workloads with lower latency and up to 70% cost reduction compared to REST APIs, while natively supporting OIDC and JWT authorizers out of the box. REST APIs offer features like API keys and usage plans that are unnecessary for simple JWT mobile workloads.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["API Gateway", "HTTP APIs", "JWT"]
  },
  {
    id: "aws-dva-32",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Stage Variables and Lambda Aliases",
    scenario: "A team maintains Dev, Test, and Prod stages on an API Gateway REST API and wants each stage to invoke the corresponding Lambda function alias automatically without changing the API definition.",
    question: "How should the developer configure the integration URI in API Gateway?",
    options: [
      { id: 'A', text: "Use a stage variable in the integration ARN such as arn:aws:apigateway:...:${stageVariables.env}/invocations" },
      { id: 'B', text: "Use Route 53 DNS aliases pointing to three different EC2 instances" },
      { id: 'C', text: "Deploy three separate API Gateway instances in three distinct AWS accounts" },
      { id: 'D', text: "Hardcode the Lambda version number in the resource path" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stage variables act as environment variables for API Gateway stages. By defining an integration URI with `${stageVariables.env}`, the API routes invocations dynamically to matching Lambda aliases (`dev`, `test`, `prod`) based on the stage receiving the request. Hardcoding versions prevents multi-stage reuse.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/stage-variables.html",
    tags: ["API Gateway", "Stage Variables", "Lambda"]
  },
  {
    id: "aws-dva-33",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway CORS Preflight Options Request",
    scenario: "A single-page web app hosted on a custom domain makes AJAX requests to an API Gateway endpoint. Browsers block the requests due to Cross-Origin Resource Sharing (CORS) policy.",
    question: "Which HTTP method must API Gateway handle to satisfy browser preflight checks?",
    options: [
      { id: 'A', text: "GET" },
      { id: 'B', text: "PUT" },
      { id: 'C', text: "OPTIONS" },
      { id: 'D', text: "HEAD" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Web browsers send an HTTP `OPTIONS` preflight request before making cross-origin requests that use methods other than simple GET/POST or include custom headers. API Gateway must return `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers` in response to the OPTIONS call.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html",
    tags: ["API Gateway", "CORS", "OPTIONS"]
  },
  {
    id: "aws-dva-34",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Usage Plans and API Keys",
    scenario: "A SaaS provider monetizes their API Gateway REST API with Basic and Premium subscription tiers that impose rate limits (requests per second) and monthly quota allowances.",
    question: "Which combination of features should the developer configure to enforce these subscription boundaries?",
    options: [
      { id: 'A', text: "API Keys associated with Usage Plans defining rate limits and quotas" },
      { id: 'B', text: "VPC Security Groups filtering TCP port 443 packets" },
      { id: 'C', text: "WAF Web ACL rules tracking user agent strings" },
      { id: 'D', text: "IAM Policies attached to anonymous caller IP addresses" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Usage Plans in API Gateway REST APIs allow developers to specify throttle rates (token bucket steady-state rate and burst) and quotas (maximum requests per day, week, or month), which are enforced when callers supply their assigned API Key in the `x-api-key` request header. WAF does not handle monetization quotas natively.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
    tags: ["API Gateway", "Usage Plans", "API Keys"]
  },
  {
    id: "aws-dva-35",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Lambda Authorizer Types",
    scenario: "A microservice requires authentication where the incoming request supplies an OAuth token in the Authorization header as well as custom client identifiers in query parameters.",
    question: "Which type of API Gateway Lambda Authorizer should the developer deploy?",
    options: [
      { id: 'A', text: "A Basic Auth htpasswd authorizer" },
      { id: 'B', text: "A TOKEN authorizer" },
      { id: 'C', text: "An IAM Authorizer with Cognito identity pools" },
      { id: 'D', text: "A REQUEST authorizer" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `REQUEST` authorizer receives headers, query string parameters, stage variables, path parameters, and context in the `event` object, enabling complex authorization decisions based on multiple request inputs. In contrast, a `TOKEN` authorizer only receives the single token string from the specified authorization header.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html",
    tags: ["API Gateway", "Lambda Authorizer", "Security"]
  },
  {
    id: "aws-dva-36",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Payload Size Limits",
    scenario: "A mobile application attempts to upload high-resolution video files directly through an API Gateway REST API and receives an HTTP 413 Payload Too Large error.",
    question: "What is the maximum payload size limit for API Gateway requests and responses?",
    options: [
      { id: 'A', text: "10 MB" },
      { id: 'B', text: "100 MB" },
      { id: 'C', text: "50 MB" },
      { id: 'D', text: "6 MB" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway enforces a hard maximum payload size limit of 10 MB for both requests and responses. To upload files larger than 10 MB, developers should generate Amazon S3 presigned URLs from Lambda and upload the file directly to S3.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html",
    tags: ["API Gateway", "Limits", "Payload"]
  },
  {
    id: "aws-dva-37",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Mapping Templates (VTL)",
    scenario: "A developer needs to convert incoming legacy XML payloads to JSON format before sending them to a backend Lambda function, without modifying backend code.",
    question: "Which API Gateway feature enables server-side request transformations using Velocity Template Language (VTL)?",
    options: [
      { id: 'A', text: "Method Request Query String parameters" },
      { id: 'B', text: "Integration Request Mapping Templates" },
      { id: 'C', text: "Gateway Responses for 4XX errors" },
      { id: 'D', text: "Integration Response HTTP headers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "API Gateway Mapping Templates allow developers to define Velocity Template Language (VTL) scripts on the Integration Request to inspect, transform, filter, and restructure payload payloads (e.g. converting XML to JSON) before passing the data to backend services or DynamoDB. Method requests define schema validation, not transformations.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html",
    tags: ["API Gateway", "Mapping Templates", "VTL"]
  },
  {
    id: "aws-dva-38",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Canary Deployments",
    scenario: "A development team wants to validate a new version of their REST API with 5% of live production traffic and rollback automatically if 5XX errors increase.",
    question: "What built-in API Gateway deployment feature facilitates this testing methodology?",
    options: [
      { id: 'A', text: "Blue/green EC2 Auto Scaling groups" },
      { id: 'B', text: "API Gateway Canary release deployment on the stage" },
      { id: 'C', text: "Route 53 Weighted DNS failover records" },
      { id: 'D', text: "CloudFront Lambda@Edge origin request viewer filters" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "API Gateway allows developers to create a Canary release on an existing deployment stage. A percentage of incoming traffic is routed to the canary deployment while execution metrics (latency and 4XX/5XX errors) are tracked separately in CloudWatch, allowing safe testing and zero-downtime promotion.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html",
    tags: ["API Gateway", "Canary", "Deployment"]
  },
  {
    id: "aws-dva-39",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Response Caching",
    scenario: "An API endpoint returns weather forecast data that changes only once every 30 minutes. Thousands of identical requests per second are overwhelming the downstream Lambda function.",
    question: "How should the developer prevent redundant Lambda invocations while delivering fast responses?",
    options: [
      { id: 'A', text: "Increase Lambda concurrency to 10,000" },
      { id: 'B', text: "Deploy an Amazon CloudWatch Synthetics canary to warm the cache" },
      { id: 'C', text: "Add an SQS queue between API Gateway and the Lambda function" },
      { id: 'D', text: "Enable API Gateway caching on the stage and configure a TTL of 1800 seconds" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway stage caching caches backend responses for a specified TTL (e.g., 1800 seconds / 30 minutes). Identical requests with matching parameters or headers are served directly from the API Gateway cache without invoking the backend Lambda function, reducing latency and backend costs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html",
    tags: ["API Gateway", "Caching", "Performance"]
  },
  {
    id: "aws-dva-40",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway WebSocket APIs: Connection State",
    scenario: "A multiplayer gaming application uses an API Gateway WebSocket API. When clients connect, the application must store connection identifiers to broadcast state changes later.",
    question: "Which route and context parameter provides the unique connection identifier?",
    options: [
      { id: 'A', text: "The $ping route and the session cookie token" },
      { id: 'B', text: "The $disconnect route and the caller IAM user ARN" },
      { id: 'C', text: "The $default route and the client public IP address" },
      { id: 'D', text: "The $connect route and the connectionId context attribute ($context.connectionId)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In API Gateway WebSocket APIs, the `$connect` route fires when a client establishes a persistent connection. The `$context.connectionId` value contains the unique identifier assigned by API Gateway, which backend systems typically store in Amazon DynamoDB to push messages back to the client using the `@connections` API.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",
    tags: ["API Gateway", "WebSocket", "connectionId"]
  },
  {
    id: "aws-dva-41",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Request Validation",
    scenario: "A developer wants API Gateway to reject requests that have missing query string parameters or an invalid JSON body before invoking the backend Lambda function.",
    question: "Which feature should the developer configure to avoid paying for unnecessary Lambda executions?",
    options: [
      { id: 'A', text: "Lambda input validation checks inside the handler code" },
      { id: 'B', text: "Amazon CloudWatch Metric Alarms" },
      { id: 'C', text: "AWS WAF regex match statements" },
      { id: 'D', text: "API Gateway Request Validators using JSON Schema models" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway Request Validators evaluate incoming requests against defined JSON Schema models and required parameter rules at the API Gateway layer. If a request does not conform, API Gateway immediately returns an HTTP 400 Bad Request error without invoking or billing for backend Lambda execution.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html",
    tags: ["API Gateway", "Validation", "Cost Optimization"]
  },
  {
    id: "aws-dva-42",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Throttling: 429 Too Many Requests",
    scenario: "A client application submits bursts of 10,000 requests in 2 seconds to an API Gateway REST API and receives HTTP 429 errors.",
    question: "What algorithm and parameters govern API Gateway default account and stage throttling?",
    options: [
      { id: 'A', text: "Fixed window rate limiting reset at the start of every calendar hour" },
      { id: 'B', text: "Leaky bucket algorithm configured with TCP socket timeouts" },
      { id: 'C', text: "Round-robin load balancing across regional availability zones" },
      { id: 'D', text: "Token bucket algorithm configured with steady-state Rate and Burst capacity" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway uses the token bucket algorithm to enforce throttling limits. The `Rate` (tokens per second added to the bucket) governs sustained throughput, while the `Burst` (bucket capacity) accommodates instantaneous spikes. When the token bucket is empty, API Gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
    tags: ["API Gateway", "Throttling", "Token Bucket"]
  },
  {
    id: "aws-dva-43",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Mutual TLS (mTLS) Authentication",
    scenario: "A financial institution requires bidirectional certificate authentication (mTLS) between third-party banking servers and their API Gateway REST API.",
    question: "Where must the developer configure the trusted certificate authority (CA) bundle for mTLS in API Gateway?",
    options: [
      { id: 'A', text: "In AWS Secrets Manager as a binary secret" },
      { id: 'B', text: "In an Amazon DynamoDB table mapped via VTL template" },
      { id: 'C', text: "In the Lambda function deployment package zip file" },
      { id: 'D', text: "In an S3 bucket configured in the API Gateway Custom Domain Name settings" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway supports mutual TLS (mTLS) on Custom Domain Names. The developer uploads a truststore containing root and intermediate certificate authorities (CA) as a PEM file in Amazon S3 and references it in the custom domain configuration, allowing API Gateway to verify client certificates during the TLS handshake.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["API Gateway", "mTLS", "Security"]
  },
  {
    id: "aws-dva-44",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway AWS Service Proxy (Direct DynamoDB Integration)",
    scenario: "A high-throughput IoT ingestion endpoint must insert sensor readings directly into Amazon DynamoDB with the lowest possible latency and operational cost.",
    question: "How can the developer write to DynamoDB without deploying or paying for a Lambda function?",
    options: [
      { id: 'A', text: "Use Lambda synchronous invocations with maximum memory" },
      { id: 'B', text: "Configure an SQS queue to poll API Gateway every 5 seconds" },
      { id: 'C', text: "Attach an Amazon EC2 instance running Nginx reverse proxy" },
      { id: 'D', text: "Configure an API Gateway AWS Service Integration directly to DynamoDB using PutItem action and a VTL mapping template" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway can integrate directly with AWS services (such as DynamoDB, S3, SQS, Kinesis) as an 'AWS Service' integration type. Using execution roles and VTL mapping templates, API Gateway transforms incoming JSON into DynamoDB `PutItem` requests directly, eliminating Lambda invocation overhead and compute cost.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html",
    tags: ["API Gateway", "Service Integration", "DynamoDB"]
  },
  {
    id: "aws-dva-45",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Endpoint Types: Edge vs Regional vs Private",
    scenario: "An enterprise application serves internal business users who access APIs exclusively over private subnets and Direct Connect without traversing the public internet.",
    question: "Which API Gateway endpoint type is designed for this security requirement?",
    options: [
      { id: 'A', text: "Private API endpoints accessed via an interface VPC endpoint (AWS PrivateLink)" },
      { id: 'B', text: "Edge-optimized API endpoints with CloudFront distribution endpoints" },
      { id: 'C', text: "Regional API endpoints with public IP addresses" },
      { id: 'D', text: "Public WebSocket API endpoints with IAM authentication" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Private API endpoints can only be accessed from within a private VPC through an interface VPC endpoint (AWS PrivateLink) powered by AWS Hyperplane. Traffic remains entirely inside the AWS network backbone. Edge-optimized and Regional endpoints are accessible from the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html",
    tags: ["API Gateway", "Private APIs", "VPC"]
  },
  {
    id: "aws-dva-46",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Gateway Responses for Custom Error Formatting",
    scenario: "A company requires all 4XX and 5XX error responses returned by API Gateway (such as 403 Forbidden or 429 Throttled) to adhere to a standardized corporate JSON error structure.",
    question: "Which API Gateway feature allows customization of error payloads generated by the API Gateway layer itself?",
    options: [
      { id: 'A', text: "CloudWatch Alarms" },
      { id: 'B', text: "Method Responses" },
      { id: 'C', text: "Integration Responses" },
      { id: 'D', text: "Gateway Responses" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gateway Responses configure the HTTP status code, response headers, and response templates for errors generated directly by API Gateway before requests reach the backend (e.g., missing authentication token, request validation failure, unauthorized access, throttling). Integration Responses handle backend responses.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html",
    tags: ["API Gateway", "Gateway Responses", "Error Handling"]
  },
  {
    id: "aws-dva-47",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Mock Integration",
    scenario: "A frontend engineering team needs to start developing UI components against an API contract before backend developers finish writing the database integration.",
    question: "Which API Gateway integration type returns static simulated responses without calling any backend resource?",
    options: [
      { id: 'A', text: "MOCK integration" },
      { id: 'B', text: "HTTP integration" },
      { id: 'C', text: "AWS_PROXY integration" },
      { id: 'D', text: "LAMBDA integration" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `MOCK` integration in API Gateway generates API responses directly from mapping templates defined in the integration response without routing traffic to any backend service, enabling frontend teams to build and test against realistic API responses early in development.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-mock-integration.html",
    tags: ["API Gateway", "MOCK", "Prototyping"]
  },
  {
    id: "aws-dva-48",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Lambda Proxy vs. Custom Integration",
    scenario: "A developer builds a serverless REST API and wants Lambda to receive all raw HTTP request headers, query parameters, path variables, and body content without configuring mapping templates.",
    question: "Which integration type should the developer select?",
    options: [
      { id: 'A', text: "Lambda Proxy Integration (AWS_PROXY)" },
      { id: 'B', text: "Lambda Custom Integration" },
      { id: 'C', text: "HTTP Integration" },
      { id: 'D', text: "VPC Link Integration" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda Proxy Integration (`AWS_PROXY`) passes the entire raw HTTP request (headers, query strings, path parameters, body, requestContext) directly to the Lambda function in the `event` object. The function is responsible for returning a JSON object with `statusCode`, `headers`, and `body`, eliminating the need for VTL mapping templates.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html",
    tags: ["API Gateway", "Lambda Proxy", "AWS_PROXY"]
  },
  {
    id: "aws-dva-49",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Custom Domain Names & Path Mapping",
    scenario: "A company owns `api.example.com` and wants to route `/users` to the User Service API Gateway and `/orders` to the Order Service API Gateway under the same domain.",
    question: "Which feature should the developer configure?",
    options: [
      { id: 'A', text: "CloudFront signed URLs" },
      { id: 'B', text: "AWS WAF header rewriting rules" },
      { id: 'C', text: "API Gateway Custom Domain Name with Base Path Mappings" },
      { id: 'D', text: "Route 53 latency routing policies" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "API Gateway Custom Domain Names support Base Path Mappings. A single domain (e.g. `api.example.com`) can map distinct base paths (such as `users` and `orders`) to entirely different API Gateway deployments and stages, creating a unified API surface across decoupled microservices.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html",
    tags: ["API Gateway", "Custom Domains", "Routing"]
  },
  {
    id: "aws-dva-50",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "API Gateway Logging to CloudWatch",
    scenario: "A developer needs full access logs recorded for every HTTP request passing through an API Gateway stage, including client IP, caller identity, and response latency.",
    question: "Where is stage-level Access Logging configured in API Gateway?",
    options: [
      { id: 'A', text: "Inside the client browser local storage" },
      { id: 'B', text: "In the IAM Role trust policy" },
      { id: 'C', text: "In the resource policy JSON document" },
      { id: 'D', text: "In the Stage settings under CloudWatch Settings / Access Logging" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "API Gateway Access Logging is enabled in the Stage settings. Developers specify an Amazon CloudWatch Log Group ARN and a log format (using standard `$context` variables like `$context.identity.sourceIp`, `$context.responseLatency`, and `$context.status`) to record detailed request logs.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html",
    tags: ["API Gateway", "CloudWatch Logs", "Monitoring"]
  }
];

export default AWS_DVA_QUESTIONS_2;
