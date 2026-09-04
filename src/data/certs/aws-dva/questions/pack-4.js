export const AWS_DVA_QUESTIONS_4 = [
  {
    id: "aws-dva-76",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "AWS Step Functions Standard vs Express Workflows",
    scenario: "A developer is orchestrating a high-throughput IoT data ingestion pipeline processing 15,000 executions per second with durations under 2 minutes. Cost and high throughput are the primary considerations.",
    question: "Which Step Functions workflow type should the developer choose?",
    options: [
      { id: 'A', text: "Batch Workflows" },
      { id: 'B', text: "Dynamic Workflows" },
      { id: 'C', text: "Standard Workflows" },
      { id: 'D', text: "Express Workflows" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Step Functions Express Workflows are designed for high-volume, short-duration (up to 5 minutes) event-processing workloads, supporting over 100,000 executions per second at a fraction of the cost of Standard Workflows. Standard Workflows are billed per state transition and suited for long-running, audit-critical workflows.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html",
    tags: ["Step Functions", "Express Workflows", "Serverless"]
  },
  {
    id: "aws-dva-77",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "AWS Step Functions Error Handling with Retry and Catch",
    scenario: "A Step Functions state machine calls an external payment gateway Lambda task that occasionally fails with a transient 503 Service Unavailable error.",
    question: "How should the developer configure the state machine definition to automatically retry with exponential backoff and route to a fallback state if all retries fail?",
    options: [
      { id: 'A', text: "Configure a Retry block with BackoffRate and an adjacent Catch block pointing to a fallback state" },
      { id: 'B', text: "Wrap the Lambda function in an infinite while loop" },
      { id: 'C', text: "Configure an SQS queue between every Step Functions state" },
      { id: 'D', text: "Increase the state machine timeout to 1 year" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon States Language (ASL) allows states to define `Retry` fields (with `ErrorEquals`, `IntervalSeconds`, `MaxAttempts`, and `BackoffRate`) for automated retry handling, and `Catch` fields that capture unhandled errors and transition smoothly to fallback or remediation states.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html",
    tags: ["Step Functions", "ASL", "Error Handling"]
  },
  {
    id: "aws-dva-78",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "AWS AppSync GraphQL API Subscriptions",
    scenario: "A mobile social networking app requires real-time live chat updates pushed to thousands of connected clients whenever a new message is posted.",
    question: "Which managed AWS GraphQL feature enables real-time updates over WebSockets?",
    options: [
      { id: 'A', text: "Amazon S3 Static Hosting" },
      { id: 'B', text: "AWS CloudFormation Change Sets" },
      { id: 'C', text: "AWS AppSync GraphQL Subscriptions" },
      { id: 'D', text: "Amazon Simple Email Service (SES)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS AppSync supports real-time data synchronization using GraphQL Subscriptions. Clients subscribe to mutations, and AppSync automatically manages persistent WebSocket connections to push data updates to millions of active subscribers seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/appsync/latest/devguide/aws-appsync-real-time-data.html",
    tags: ["AppSync", "GraphQL", "Real-Time"]
  },
  {
    id: "aws-dva-79",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon Kinesis Data Streams Shard Scaling",
    scenario: "A real-time telemetry stream experiences throughput exceptions because incoming data volume increases from 1 MB/sec to 4 MB/sec.",
    question: "How can the developer adjust the Kinesis Data Stream capacity to handle the increased throughput?",
    options: [
      { id: 'A', text: "Increase the Lambda function execution timeout to 15 minutes" },
      { id: 'B', text: "Perform Shard Splitting or increase provisioned shard count to 4 shards" },
      { id: 'C', text: "Decrease the data retention period from 7 days to 24 hours" },
      { id: 'D', text: "Convert the Kinesis stream to an SQS FIFO queue" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each Kinesis Data Stream shard supports up to 1 MB/sec or 1,000 records/sec for writes, and 2 MB/sec for reads. Splitting shards or increasing the provisioned shard count provides linear capacity scaling for higher throughput.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-resharding.html",
    tags: ["Kinesis", "Shards", "Scaling"]
  },
  {
    id: "aws-dva-80",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    domainName: "Development with AWS Services",
    title: "Amazon Kinesis Enhanced Fan-Out",
    scenario: "Multiple consumer applications (Fraud Detection, Dashboards, Archiving) read from the same Kinesis stream. When reading simultaneously, consumers experience read throttling.",
    question: "Which Kinesis feature provides dedicated 2 MB/sec throughput per shard per consumer application?",
    options: [
      { id: 'A', text: "Standard SQS polling with maximum batch size" },
      { id: 'B', text: "CloudWatch Logs Insights export" },
      { id: 'C', text: "Kinesis Data Firehose buffer interval tuning" },
      { id: 'D', text: "Enhanced Fan-Out with HTTP/2 SubscribeToShard API" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kinesis Enhanced Fan-Out provides dedicated 2 MB/sec read throughput per shard for each registered consumer application independently, utilizing HTTP/2 streaming via the `SubscribeToShard` API and reducing delivery latency to under 70 milliseconds.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html",
    tags: ["Kinesis", "Enhanced Fan-Out", "Streaming"]
  },
  {
    id: "aws-dva-81",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Lambda Execution Role Least Privilege",
    scenario: "A developer writes a Lambda function that only reads items from a specific DynamoDB table `Customers`. The developer currently uses `AdministratorAccess`.",
    question: "How should the developer adhere to the principle of least privilege for production deployment?",
    options: [
      { id: 'A', text: "Enable DynamoDB Streams without IAM policies" },
      { id: 'B', text: "Create a dedicated IAM execution role granting dynamodb:GetItem and dynamodb:Query restricted to the Customers table ARN" },
      { id: 'C', text: "Attach the AmazonDynamoDBFullAccess policy to the default account root user" },
      { id: 'D', text: "Hardcode temporary access keys in the Lambda function environment variables" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adhering to least privilege requires granting only the specific permissions needed (`dynamodb:GetItem`, `dynamodb:Query`) restricted to the exact resource ARN (`arn:aws:dynamodb:...:table/Customers`). AdministratorAccess or table-wide full access violates security governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html",
    tags: ["IAM", "Lambda", "Least Privilege"]
  },
  {
    id: "aws-dva-82",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "STS AssumeRole for Temporary Cross-Account Credentials",
    scenario: "A worker service running on Amazon EC2 in Account A needs to read objects from an Amazon S3 bucket located in Account B without storing long-term credentials.",
    question: "Which AWS Security Token Service (STS) API operation generates temporary credentials to access the cross-account bucket?",
    options: [
      { id: 'A', text: "iam:CreateAccessKey" },
      { id: 'B', text: "sts:AssumeRole" },
      { id: 'C', text: "sts:DecodeAuthorizationMessage" },
      { id: 'D', text: "sts:GetFederationToken" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `sts:AssumeRole` API returns temporary credentials (access key ID, secret access key, and session token) that allow the caller to assume an IAM role in Account B, provided Account B has configured a trust policy allowing the principal in Account A to assume the role.",
    referenceUrl: "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html",
    tags: ["STS", "AssumeRole", "Cross-Account"]
  },
  {
    id: "aws-dva-83",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Envelope Encryption with GenerateDataKey",
    scenario: "An enterprise data application encrypts 50 GB database backups before uploading them to Amazon S3. Encrypting multi-gigabyte files directly with the KMS Encrypt API is not supported.",
    question: "How should the developer implement client-side encryption using KMS Envelope Encryption?",
    options: [
      { id: 'A', text: "Transmit the 50 GB payload directly to the kms:Encrypt API endpoint" },
      { id: 'B', text: "Disable encryption at rest to avoid KMS API limits" },
      { id: 'C', text: "Call kms:GenerateDataKey to obtain a plaintext data key and an encrypted data key, encrypt data locally with the plaintext key, then securely erase the plaintext key and store the encrypted key with the ciphertext" },
      { id: 'D', text: "Store the plaintext encryption key in the S3 object metadata headers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS KMS Encrypt API has a hard limit of 4 KB per request. In envelope encryption, the developer calls `kms:GenerateDataKey`, encrypts the large file locally using the returned plaintext data key, destroys the plaintext key in memory, and stores the encrypted data key alongside the encrypted ciphertext.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#enveloping",
    tags: ["KMS", "Envelope Encryption", "GenerateDataKey"]
  },
  {
    id: "aws-dva-84",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Policy Primacy over IAM Policies",
    scenario: "A developer creates a Customer Managed Key (CMK) in AWS KMS. An administrator attaches an IAM policy granting `kms:*` to the developer, but the developer still receives an AccessDenied error when calling `kms:Encrypt`.",
    question: "What is the primary cause of this permission failure?",
    options: [
      { id: 'A', text: "The developer must be logged in as the AWS root account user" },
      { id: 'B', text: "KMS keys take 7 days to become active after creation" },
      { id: 'C', text: "KMS keys do not support IAM policies under any circumstances" },
      { id: 'D', text: "The KMS Key Policy does not explicitly grant permissions or delegate authorization to the AWS account root principal" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "KMS Key Policies are the primary authorization mechanism for KMS keys. An IAM policy cannot grant access to a KMS key unless the key policy itself explicitly includes a statement delegating permissions to the account (e.g. principal `root`), which then enables IAM policies to manage access.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html",
    tags: ["KMS", "Key Policy", "Security"]
  },
  {
    id: "aws-dva-85",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Automatic Key Rotation Annual Schedule",
    scenario: "A financial compliance audit mandates that all cryptographic keys used to encrypt credit card tokens must be rotated every calendar year.",
    question: "How can the developer satisfy this mandate with the least operational overhead?",
    options: [
      { id: 'A', text: "Enable Automatic Key Rotation on the Customer Managed Key (CMK) in KMS" },
      { id: 'B', text: "Manually create a new CMK each year, re-encrypt all existing database records, and delete the old key" },
      { id: 'C', text: "Write a cron job that calls kms:UpdateKeyDescription annually" },
      { id: 'D', text: "Rotate the IAM access keys of the developer every 90 days" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling automatic key rotation on a KMS Customer Managed Key instructs KMS to automatically rotate the backing cryptographic material every year (or customized schedule) without changing the Key ID, ARN, or key policies. KMS seamlessly retains older backing keys to decrypt historical data.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",
    tags: ["KMS", "Key Rotation", "Compliance"]
  },
  {
    id: "aws-dva-86",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS Secrets Manager Automated Rotation with Lambda",
    scenario: "A developer stores database credentials for an Amazon Aurora cluster in AWS Secrets Manager. Corporate security mandates rotating the database password every 30 days automatically.",
    question: "How should the developer configure automatic rotation in Secrets Manager?",
    options: [
      { id: 'A', text: "Disable authentication on the Aurora cluster" },
      { id: 'B', text: "Write an EC2 cron job that runs ALTER USER in the database and updates a plain text S3 file" },
      { id: 'C', text: "Change the database master password manually in the AWS Console on the first of each month" },
      { id: 'D', text: "Configure automatic rotation in Secrets Manager using a managed rotation Lambda function template" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Secrets Manager provides native automated rotation using AWS Lambda functions. AWS provides pre-built Lambda templates for Amazon Aurora, RDS, and DocumentDB that handle the 4-step rotation process (createSecret, setSecret, testSecret, finishSecret) seamlessly.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secrets Manager", "Rotation", "Lambda"]
  },
  {
    id: "aws-dva-87",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS Secrets Manager In-Memory Client Caching",
    scenario: "A high-throughput Lambda function reads database credentials from Secrets Manager on every single invocation, incurring high API costs and occasional GetSecretValue throttling.",
    question: "How can the developer eliminate redundant Secrets Manager API calls and reduce latency?",
    options: [
      { id: 'A', text: "Disable SSL/TLS encryption between Lambda and the database" },
      { id: 'B', text: "Use the AWS Secrets Manager client-side caching library to cache credentials in memory across invocations" },
      { id: 'C', text: "Hardcode the database password in the Lambda handler code" },
      { id: 'D', text: "Store the password in an unencrypted S3 bucket" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The AWS Secrets Manager caching libraries (available for Python, Java, Node.js, and Go) cache secret values locally in memory with a configurable TTL, drastically reducing API calls, avoiding throttling, and lowering Secrets Manager API costs while supporting automatic secret rotation.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets-cache-python.html",
    tags: ["Secrets Manager", "Caching", "Performance"]
  },
  {
    id: "aws-dva-88",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Systems Manager Parameter Store SecureString Type",
    scenario: "A team needs to store an API key that must be encrypted with KMS and accessed across microservices. The configuration string is 3 KB in size.",
    question: "Which AWS Systems Manager Parameter Store configuration satisfies these criteria?",
    options: [
      { id: 'A', text: "Standard Parameter tier with type SecureString encrypted with a KMS key" },
      { id: 'B', text: "Advanced Parameter tier with type Boolean" },
      { id: 'C', text: "Standard Parameter tier with type String in plain text" },
      { id: 'D', text: "AWS CloudTrail log parameter" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Systems Manager Parameter Store supports `SecureString` parameter types, which automatically encrypt sensitive text using AWS KMS. Standard parameters support sizes up to 4 KB at no cost. Advanced parameters support sizes up to 8 KB and parameter policies.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-about.html",
    tags: ["Systems Manager", "Parameter Store", "SecureString"]
  },
  {
    id: "aws-dva-89",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager vs Parameter Store Functional Distinction",
    scenario: "An architect is deciding between Systems Manager Parameter Store and AWS Secrets Manager for storing application configurations and third-party API credentials.",
    question: "Which distinguishing feature is unique to AWS Secrets Manager?",
    options: [
      { id: 'A', text: "Built-in automated rotation using AWS Lambda and native integration with Amazon RDS" },
      { id: 'B', text: "Support for KMS encryption" },
      { id: 'C', text: "Hierarchical naming paths (e.g. /app/prod/key)" },
      { id: 'D', text: "Integration with IAM policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Secrets Manager uniquely provides built-in automated secret rotation via Lambda functions, automatic generation of random passwords, and cross-account secret sharing. Parameter Store provides basic KMS-encrypted storage (SecureString) and hierarchical paths but does not manage automated credential rotation natively.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-comparison.html",
    tags: ["Secrets Manager", "Parameter Store", "Architecture"]
  },
  {
    id: "aws-dva-90",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools vs Identity Pools Architectural Roles",
    scenario: "A mobile application requires a user directory with email registration, password resets, and MFA, and also needs to grant logged-in users temporary AWS credentials to upload photos to their private S3 folder.",
    question: "Which combination of Amazon Cognito services provides both user authentication and authorized AWS resource access?",
    options: [
      { id: 'A', text: "IAM users created programmatically for every mobile user" },
      { id: 'B', text: "Cognito Identity Pool alone without a user directory" },
      { id: 'C', text: "Cognito User Pool for authentication and user management, paired with Cognito Identity Pool for temporary AWS credentials" },
      { id: 'D', text: "Cognito User Pool alone for both authentication and STS credential generation" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Cognito User Pools act as the Identity Provider (IdP) managing user sign-up, sign-in, MFA, and JWT token issuance. Cognito Identity Pools (Federated Identities) exchange those tokens for temporary, scoped AWS IAM credentials from STS to access AWS services like S3.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
    tags: ["Cognito", "User Pools", "Identity Pools"]
  },
  {
    id: "aws-dva-91",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pools ID Token vs Access Token",
    scenario: "A developer integrates an application with Cognito User Pools. After successful authentication, Cognito returns three tokens to the client.",
    question: "Which token contains user identity attributes (such as email, name, and custom claims) formatted as OIDC claims?",
    options: [
      { id: 'A', text: "ID Token" },
      { id: 'B', text: "Refresh Token" },
      { id: 'C', text: "Access Token" },
      { id: 'D', text: "Session Token" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Cognito `ID Token` is a JSON Web Token (JWT) containing identity claims about the authenticated user (e.g., `sub`, `email`, `email_verified`, and custom attributes) conforming to the OpenID Connect (OIDC) specification. The `Access Token` contains scopes and group memberships, and the `Refresh Token` is used to retrieve new ID and access tokens.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html",
    tags: ["Cognito", "JWT", "ID Token"]
  },
  {
    id: "aws-dva-92",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito Identity Pools Unauthenticated Guest Access",
    scenario: "An online shopping application allows guest visitors to browse products and save items in a temporary cart before creating an account or logging in.",
    question: "How can Cognito Identity Pools support guest access with restricted AWS permissions?",
    options: [
      { id: 'A', text: "Create a dummy user in Cognito User Pools with password 'guest'" },
      { id: 'B', text: "Enable Unauthenticated Identities in the Identity Pool and assign a guest IAM role with read-only permissions" },
      { id: 'C', text: "Create an IAM root user access key and embed it in the mobile app binary" },
      { id: 'D', text: "Disable all authentication on the backend DynamoDB table" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cognito Identity Pools support 'Unauthenticated identities' (guest access). When enabled, guest users receive temporary, scoped AWS credentials associated with an unauthenticated IAM role, allowing restricted access (e.g. read-only product catalog access) before logging in.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html",
    tags: ["Cognito", "Identity Pools", "Guest Access"]
  },
  {
    id: "aws-dva-93",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Presigned URLs for Secure Direct Uploads",
    scenario: "A photo-sharing web application allows users to upload high-resolution images to S3 directly from web browsers without routing uploads through backend server instances.",
    question: "How should the developer securely permit uploads to a private S3 bucket without granting public write permissions?",
    options: [
      { id: 'A', text: "Generate an Amazon S3 presigned URL with an expiration time in the backend and return it to the browser for direct HTTP PUT upload" },
      { id: 'B', text: "Make the S3 bucket completely public with anonymous write access" },
      { id: 'C', text: "Embed company AWS IAM access keys in the client-side JavaScript bundle" },
      { id: 'D', text: "Require users to install the AWS CLI and configure local profiles" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 presigned URLs grant time-limited permission to upload (`PUT`) or download (`GET`) a specific S3 object using the credentials of the IAM identity that generated the URL. The client uploads directly to S3 via standard HTTP PUT without exposing AWS credentials or burdening application servers.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html",
    tags: ["S3", "Presigned URLs", "Security"]
  },
  {
    id: "aws-dva-94",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Bucket Policy Enforcing TLS (aws:SecureTransport)",
    scenario: "A security policy mandates that all data transferred into or out of an Amazon S3 bucket must use TLS encryption in transit.",
    question: "Which Condition statement in an S3 bucket policy denies unencrypted HTTP requests?",
    options: [
      { id: 'A', text: "Condition: { Bool: { aws:SecureTransport: false } }" },
      { id: 'B', text: "Condition: { StringEquals: { s3:x-amz-server-side-encryption: AES256 } }" },
      { id: 'C', text: "Condition: { IpAddress: { aws:SourceIp: 10.0.0.0/8 } }" },
      { id: 'D', text: "Condition: { Null: { aws:PrincipalArn: true } }" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To enforce encryption in transit, an S3 bucket policy includes a `Deny` statement on `s3:*` with the condition `\"Bool\": { \"aws:SecureTransport\": \"false\" }`. Any incoming request sent over unencrypted HTTP (port 80) is immediately rejected.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    tags: ["S3", "Bucket Policy", "TLS"]
  },
  {
    id: "aws-dva-95",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Server-Side Encryption Auditability (SSE-KMS vs SSE-S3)",
    scenario: "A developer must store sensitive healthcare documents in S3 where the encryption keys are managed by AWS, but every encrypt and decrypt event must generate an auditable entry in AWS CloudTrail.",
    question: "Which S3 encryption mode satisfies this audit requirement?",
    options: [
      { id: 'A', text: "Client-Side Symmetric Master Key encryption without AWS services" },
      { id: 'B', text: "Server-Side Encryption with Amazon S3 managed keys (SSE-S3)" },
      { id: 'C', text: "Server-Side Encryption with Customer-Provided Keys (SSE-C)" },
      { id: 'D', text: "Server-Side Encryption with AWS KMS (SSE-KMS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SSE-KMS (`aws:kms`) encrypts S3 objects using AWS KMS keys. Whenever an object is encrypted or decrypted, KMS logs the API event in AWS CloudTrail, providing complete auditability of who accessed the data and when. SSE-S3 (`AES256`) uses internal AWS keys that do not log individual decrypt events in CloudTrail.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html",
    tags: ["S3", "SSE-KMS", "CloudTrail"]
  },
  {
    id: "aws-dva-96",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Native Cognito User Pool Authorizer",
    scenario: "A developer wants to protect an API Gateway REST API so only users who log in through an Amazon Cognito User Pool can call the endpoints.",
    question: "How should the developer configure authorization in API Gateway with the least custom code?",
    options: [
      { id: 'A', text: "Create a Cognito User Pool Authorizer in API Gateway and attach it to API methods" },
      { id: 'B', text: "Deploy a custom Lambda authorizer that manually verifies the JWT signature" },
      { id: 'C', text: "Pass the user password in an HTTP Basic Authorization header" },
      { id: 'D', text: "Embed an IAM secret key in every client browser request" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway natively integrates with Amazon Cognito User Pools as a built-in authorizer. API Gateway automatically validates the incoming JWT identity or access token, verifies token signatures, checks token expiration, and grants access without executing any custom Lambda authorizer code.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html",
    tags: ["API Gateway", "Cognito", "Authorizer"]
  },
  {
    id: "aws-dva-97",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Policy Evaluation Logic: Explicit Deny Overrides Allow",
    scenario: "A developer has an IAM policy attached to their user granting `s3:GetObject` on `my-bucket/*`. However, a group policy contains a statement denying `s3:GetObject` on all resources for users outside the corporate office IP range.",
    question: "What is the outcome when the developer accesses an object in `my-bucket` from home without a VPN?",
    options: [
      { id: 'A', text: "Access is granted on weekdays but denied on weekends" },
      { id: 'B', text: "Access is denied because an explicit Deny statement in any policy always overrides all Allow statements" },
      { id: 'C', text: "Access is permitted if the request uses multi-factor authentication" },
      { id: 'D', text: "Access is allowed because the user-level policy takes precedence over the group policy" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS IAM policy evaluation follows the rule that an explicit `Deny` in any applicable policy (identity-based, resource-based, permission boundary, or SCP) always overrides any and all `Allow` statements. If an explicit deny matches, access is definitively denied.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["IAM", "Policy Evaluation", "Security"]
  },
  {
    id: "aws-dva-98",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Permission Boundaries for Delegated Administration",
    scenario: "An enterprise organization delegates IAM role creation to developers in sandbox accounts. Security teams must ensure developers cannot create roles with higher privileges than their own.",
    question: "Which IAM feature restricts the maximum permissions an IAM entity can possess?",
    options: [
      { id: 'A', text: "IAM Permission Boundaries" },
      { id: 'B', text: "IAM Access Analyzer" },
      { id: 'C', text: "AWS Organizations Service Control Policies (SCPs)" },
      { id: 'D', text: "IAM Credential Reports" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An IAM Permission Boundary is an advanced policy that sets the maximum permissions an identity-based policy can grant to an IAM user or role. An entity can only perform actions that are allowed by both its identity-based policy and its permission boundary, preventing privilege escalation.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM", "Permission Boundaries", "Governance"]
  },
  {
    id: "aws-dva-99",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS WAF Association with API Gateway REST Stages",
    scenario: "A public API Gateway REST API is targeted by automated SQL injection attacks and cross-site scripting (XSS) probes from malicious botnets.",
    question: "Which AWS security service can be associated with API Gateway stages to block malicious HTTP payloads automatically?",
    options: [
      { id: 'A', text: "AWS WAF (Web Application Firewall)" },
      { id: 'B', text: "AWS Shield Standard" },
      { id: 'C', text: "Amazon GuardDuty" },
      { id: 'D', text: "AWS Security Hub" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS WAF can be directly associated with API Gateway REST and HTTP API stages. AWS WAF evaluates incoming HTTP requests against managed rule sets (e.g. AWSManagedRulesSQLiRuleSet, CommonRuleSet) and custom regex rules, blocking malicious requests at the edge before they hit API Gateway.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html",
    tags: ["WAF", "API Gateway", "Security"]
  },
  {
    id: "aws-dva-100",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Object Lock Compliance Mode WORM Storage",
    scenario: "A financial institution must store regulatory transaction records in S3 where files cannot be deleted or overwritten by anyone, including the AWS account root user, for 7 years.",
    question: "Which Amazon S3 feature enforces this write-once-read-many (WORM) storage model?",
    options: [
      { id: 'A', text: "S3 Glacier Vault Lock alone without retention" },
      { id: 'B', text: "S3 Object Lock in Governance Mode" },
      { id: 'C', text: "S3 Bucket Versioning alone" },
      { id: 'D', text: "S3 Object Lock in Compliance Mode" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "S3 Object Lock in `Compliance Mode` ensures that protected objects cannot be deleted, altered, or overwritten by any user, including the root user in the AWS account, for the duration of the retention period, satisfying SEC Rule 17a-4 compliance requirements. Governance mode allows privileged users with specific IAM permissions to bypass the lock.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3", "Object Lock", "Compliance"]
  }
];

export default AWS_DVA_QUESTIONS_4;
