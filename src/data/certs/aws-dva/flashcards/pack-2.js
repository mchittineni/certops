export const AWS_DVA_FLASHCARDS_2 = [
  {
    id: "aws-dva-fc-26",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Asynchronous Retry Policy",
    hint: "Default retry behavior for async invocations.",
    back: "For asynchronous invocations (e.g. S3 events, SNS, CLI <code>--invocation-type Event</code>), Lambda automatically retries failed executions <strong>2 times</strong> (3 attempts total) with exponential backoff.",
    tags: ["Lambda", "Asynchronous", "Retries"]
  },
  {
    id: "aws-dva-fc-27",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Ephemeral Disk Encryption",
    hint: "Default encryption for /tmp storage.",
    back: "All data written to <strong>/tmp</strong> ephemeral storage in AWS Lambda is automatically encrypted at rest using an <strong>AWS managed KMS key</strong> at zero extra charge.",
    tags: ["Lambda", "Encryption", "Security"]
  },
  {
    id: "aws-dva-fc-28",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Function URL CORS Support",
    hint: "Native cross-origin resource sharing.",
    back: "Lambda Function URLs provide <strong>native CORS configuration</strong> settings, allowing developers to define permitted origins, headers, methods, and credentials without an intermediary API Gateway.",
    tags: ["Lambda", "Function URLs", "CORS"]
  },
  {
    id: "aws-dva-fc-29",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: Event Source Filtering",
    hint: "Filtering records before function invocation.",
    back: "<strong>Filter Criteria</strong> on event source mappings inspect incoming payloads against JSON filter rules, discarding non-matching events before invoking Lambda to reduce compute costs.",
    tags: ["Lambda", "Event Filtering", "SQS"]
  },
  {
    id: "aws-dva-fc-30",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Lambda: SigV4 Request Signing for Function URLs",
    hint: "Authenticating IAM-protected Function URLs.",
    back: "When <code>AuthType: AWS_IAM</code> is configured on a Function URL, clients must sign requests using <strong>AWS Signature Version 4 (SigV4)</strong> using IAM access keys and credentials.",
    tags: ["Lambda", "Function URLs", "SigV4"]
  },
  {
    id: "aws-dva-fc-31",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: HTTP APIs vs. REST APIs",
    hint: "Key architectural trade-offs.",
    back: "<strong>HTTP APIs</strong> offer lower latency, up to 70% cost savings, and native OIDC/JWT authorizers for simple serverless apps. <strong>REST APIs</strong> support features like API keys, usage plans, request validation, WAF, and caching.",
    tags: ["API Gateway", "HTTP APIs", "JWT"]
  },
  {
    id: "aws-dva-fc-32",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Stage Variables",
    hint: "Environment variables for API stages.",
    back: "<strong>Stage variables</strong> act as configuration parameters for stages. In integration ARNs (e.g. <code>arn:...:${stageVariables.lambdaAlias}</code>), they dynamically route requests to distinct Lambda aliases per stage.",
    tags: ["API Gateway", "Stage Variables", "Lambda"]
  },
  {
    id: "aws-dva-fc-33",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: CORS Preflight Method",
    hint: "Handling browser cross-origin requests.",
    back: "Browsers send an HTTP <strong>OPTIONS</strong> preflight request before making cross-origin requests. API Gateway must reply with <code>Access-Control-Allow-Origin</code>, <code>Methods</code>, and <code>Headers</code>.",
    tags: ["API Gateway", "CORS", "OPTIONS"]
  },
  {
    id: "aws-dva-fc-34",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Usage Plans & API Keys",
    hint: "Monetizing and throttling consumer tiers.",
    back: "<strong>Usage Plans</strong> bind API Keys to specific throttle rates (requests per second) and burst capacities, plus overall monthly or daily request <strong>quotas</strong> for tiered API access.",
    tags: ["API Gateway", "Usage Plans", "API Keys"]
  },
  {
    id: "aws-dva-fc-35",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: TOKEN vs. REQUEST Authorizer",
    hint: "Context available to custom Lambda authorizers.",
    back: "A <strong>TOKEN authorizer</strong> receives only the authorization header string. A <strong>REQUEST authorizer</strong> receives the complete context: headers, query parameters, stage variables, and path parameters.",
    tags: ["API Gateway", "Lambda Authorizer", "Security"]
  },
  {
    id: "aws-dva-fc-36",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Maximum Payload Limit",
    hint: "Maximum request and response body size.",
    back: "API Gateway enforces a hard limit of <strong>10 MB</strong> on all request and response payloads. Larger files must be uploaded directly to Amazon S3 via presigned URLs.",
    tags: ["API Gateway", "Limits", "Payload"]
  },
  {
    id: "aws-dva-fc-37",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Mapping Templates (VTL)",
    hint: "Data transformation without code.",
    back: "<strong>Velocity Template Language (VTL)</strong> mapping templates transform request payloads (e.g. converting XML to JSON) and format backend responses before they leave API Gateway.",
    tags: ["API Gateway", "Mapping Templates", "VTL"]
  },
  {
    id: "aws-dva-fc-38",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Canary Deployments",
    hint: "Traffic shifting and validation on stages.",
    back: "A <strong>Canary release</strong> directs a percentage of stage traffic to a newly deployed API version, isolating CloudWatch metrics to evaluate performance before full promotion.",
    tags: ["API Gateway", "Canary", "Deployment"]
  },
  {
    id: "aws-dva-fc-39",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Stage Caching TTL",
    hint: "Offloading redundant backend compute.",
    back: "Enabling <strong>stage caching</strong> caches responses by query parameters or headers for a configurable <strong>TTL</strong> (default 300s, max 3600s), shielding backends from redundant calls.",
    tags: ["API Gateway", "Caching", "Performance"]
  },
  {
    id: "aws-dva-fc-40",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: WebSocket Connection ID",
    hint: "Stateful real-time connections.",
    back: "In WebSocket APIs, the <code>$connect</code> route receives a unique <code>$context.connectionId</code>. Applications persist this ID in DynamoDB to push asynchronous messages via the <code>@connections</code> API.",
    tags: ["API Gateway", "WebSocket", "connectionId"]
  },
  {
    id: "aws-dva-fc-41",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Request Validation",
    hint: "Validating payloads before backend execution.",
    back: "<strong>Request Validators</strong> check request parameters and validate JSON bodies against JSON Schema models at API Gateway, rejecting invalid requests with <strong>400 Bad Request</strong> before invoking Lambda.",
    tags: ["API Gateway", "Validation", "Cost Optimization"]
  },
  {
    id: "aws-dva-fc-42",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Throttling Algorithm",
    hint: "Rate limiting mechanics.",
    back: "API Gateway uses the <strong>Token Bucket algorithm</strong>. <code>Rate</code> adds tokens steadily, and <code>Burst</code> defines bucket size. Exceeding capacity triggers an HTTP <strong>429 Too Many Requests</strong> error.",
    tags: ["API Gateway", "Throttling", "Token Bucket"]
  },
  {
    id: "aws-dva-fc-43",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Mutual TLS (mTLS)",
    hint: "Bidirectional certificate verification.",
    back: "<strong>mTLS</strong> is configured on Custom Domain Names by storing a truststore PEM file (containing root/intermediate CAs) in an <strong>Amazon S3 bucket</strong>.",
    tags: ["API Gateway", "mTLS", "Security"]
  },
  {
    id: "aws-dva-fc-44",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: AWS Service Proxy",
    hint: "Serverless architectures without Lambda.",
    back: "An <strong>AWS Service Integration</strong> connects API Gateway directly to services like DynamoDB, SQS, or Kinesis, executing actions (e.g. <code>PutItem</code>) via VTL without Lambda compute costs.",
    tags: ["API Gateway", "Service Integration", "DynamoDB"]
  },
  {
    id: "aws-dva-fc-45",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Private Endpoints",
    hint: "Restricting API traffic to internal networks.",
    back: "<strong>Private APIs</strong> can only be invoked from within a VPC through an <strong>Interface VPC Endpoint</strong> (AWS PrivateLink), keeping traffic completely off the public internet.",
    tags: ["API Gateway", "Private APIs", "VPC"]
  },
  {
    id: "aws-dva-fc-46",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Gateway Responses",
    hint: "Standardizing system error messages.",
    back: "<strong>Gateway Responses</strong> customize HTTP status codes, headers, and JSON error bodies for errors generated directly by API Gateway (e.g. 403 Forbidden, 429 Throttled) before reaching backends.",
    tags: ["API Gateway", "Gateway Responses", "Error Handling"]
  },
  {
    id: "aws-dva-fc-47",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Mock Integration",
    hint: "Simulated backend endpoints.",
    back: "A <strong>MOCK integration</strong> generates responses directly from integration mapping templates without forwarding traffic to any backend, allowing frontend prototyping against API contracts.",
    tags: ["API Gateway", "MOCK", "Prototyping"]
  },
  {
    id: "aws-dva-fc-48",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Lambda Proxy Integration",
    hint: "Raw event passing without mapping.",
    back: "<strong>Lambda Proxy (AWS_PROXY)</strong> passes the raw HTTP request into the Lambda <code>event</code> object, requiring the function to return a structured JSON response with <code>statusCode</code> and <code>body</code>.",
    tags: ["API Gateway", "Lambda Proxy", "AWS_PROXY"]
  },
  {
    id: "aws-dva-fc-49",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Base Path Mapping",
    hint: "Multi-service routing under one domain.",
    back: "<strong>Base Path Mappings</strong> allow a single Custom Domain (e.g. <code>api.example.com</code>) to map subpaths (<code>/orders</code>, <code>/users</code>) to separate API Gateway instances and stages.",
    tags: ["API Gateway", "Custom Domains", "Routing"]
  },
  {
    id: "aws-dva-fc-50",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "API Gateway: Access Logging Format",
    hint: "Configuring diagnostic HTTP logs.",
    back: "Stage <strong>Access Logging</strong> specifies a CloudWatch Log Group and uses <code>$context</code> variables (such as <code>$context.identity.sourceIp</code> and <code>$context.responseLatency</code>) to output structured JSON logs.",
    tags: ["API Gateway", "CloudWatch Logs", "Monitoring"]
  }
];

export default AWS_DVA_FLASHCARDS_2;
