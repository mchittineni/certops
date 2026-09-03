export const AWS_DVA_FLASHCARDS_4 = [
  {
    id: "aws-dva-fc-76",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Step Functions: Standard vs. Express Workflows",
    hint: "Workflow orchestration selection.",
    back: "<strong>Standard Workflows</strong> run up to 1 year, provide exactly-once execution history, and bill per state transition. <strong>Express Workflows</strong> run up to 5 minutes, support 100k+ executions/sec, and bill by duration and memory.",
    tags: ["Step Functions", "Express Workflows", "Serverless"]
  },
  {
    id: "aws-dva-fc-77",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "Step Functions: Retry & Catch in ASL",
    hint: "State machine error resilience.",
    back: "In Amazon States Language, <strong>Retry</strong> blocks specify <code>IntervalSeconds</code>, <code>MaxAttempts</code>, and <code>BackoffRate</code> for transient errors, while <strong>Catch</strong> transitions to a designated fallback state upon failure.",
    tags: ["Step Functions", "ASL", "Error Handling"]
  },
  {
    id: "aws-dva-fc-78",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "AWS AppSync: Real-Time Subscriptions",
    hint: "GraphQL data synchronization.",
    back: "<strong>AWS AppSync</strong> uses GraphQL <strong>Subscriptions</strong> to automatically push real-time data updates to connected clients over managed WebSockets whenever GraphQL mutations occur.",
    tags: ["AppSync", "GraphQL", "Real-Time"]
  },
  {
    id: "aws-dva-fc-79",
    difficulty: "hard",
    certId: "aws-dva",
    domainId: "d1",
    front: "Kinesis: Shard Throughput Limits",
    hint: "Capacity boundaries per shard.",
    back: "A single Kinesis shard provides <strong>1 MB/sec write</strong> (1,000 records/sec) and <strong>2 MB/sec read</strong> throughput. Capacity scales linearly by adding or splitting shards.",
    tags: ["Kinesis", "Shards", "Scaling"]
  },
  {
    id: "aws-dva-fc-80",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d1",
    front: "Kinesis: Enhanced Fan-Out",
    hint: "Dedicated throughput per consumer.",
    back: "<strong>Enhanced Fan-Out</strong> grants each registered consumer a dedicated <strong>2 MB/sec per shard</strong> pipe over HTTP/2 (<code>SubscribeToShard</code>), eliminating contention between multiple consumer apps.",
    tags: ["Kinesis", "Enhanced Fan-Out", "Streaming"]
  },
  {
    id: "aws-dva-fc-81",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Least Privilege Execution Roles",
    hint: "Restricting serverless execution permissions.",
    back: "Lambda execution roles should grant only the <strong>minimum specific API actions</strong> (e.g. <code>dynamodb:GetItem</code>) scoped precisely to the <strong>target resource ARNs</strong>.",
    tags: ["IAM", "Lambda", "Least Privilege"]
  },
  {
    id: "aws-dva-fc-82",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "STS: AssumeRole API",
    hint: "Obtaining temporary session credentials.",
    back: "<strong>sts:AssumeRole</strong> returns temporary credentials valid from 15 minutes to 12 hours, allowing services and users to assume cross-account or elevated IAM roles securely.",
    tags: ["STS", "AssumeRole", "Cross-Account"]
  },
  {
    id: "aws-dva-fc-83",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Envelope Encryption",
    hint: "Protecting large payloads efficiently.",
    back: "The <strong>kms:GenerateDataKey</strong> API returns a plaintext data key and an encrypted data key. Applications encrypt large payloads locally with the plaintext key, discard it, and store the encrypted key with the ciphertext.",
    tags: ["KMS", "Envelope Encryption", "GenerateDataKey"]
  },
  {
    id: "aws-dva-fc-84",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Key Policy Primacy",
    hint: "Mandatory access control for KMS keys.",
    back: "<strong>KMS Key Policies</strong> are the primary access control mechanism. IAM policies have no effect unless the KMS key policy explicitly permits IAM delegation by granting access to the account root principal.",
    tags: ["KMS", "Key Policy", "Security"]
  },
  {
    id: "aws-dva-fc-85",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Automatic Key Rotation",
    hint: "Automated backing key renewal.",
    back: "When <strong>Automatic Key Rotation</strong> is enabled, KMS generates new cryptographic material annually while retaining prior backing keys to decrypt older data, preserving the same Key ID and ARN.",
    tags: ["KMS", "Key Rotation", "Compliance"]
  },
  {
    id: "aws-dva-fc-86",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager: Automated Rotation",
    hint: "Zero-downtime credential renewal.",
    back: "<strong>AWS Secrets Manager</strong> integrates with AWS Lambda to rotate credentials automatically (e.g. every 30 days) across 4 steps: <code>createSecret</code>, <code>setSecret</code>, <code>testSecret</code>, and <code>finishSecret</code>.",
    tags: ["Secrets Manager", "Rotation", "Lambda"]
  },
  {
    id: "aws-dva-fc-87",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager: Client-Side Caching",
    hint: "Preventing API throttling and costs.",
    back: "AWS provides <strong>client-side caching libraries</strong> for Secrets Manager that cache secret values in local memory with a TTL, minimizing <code>GetSecretValue</code> calls and preventing throttling.",
    tags: ["Secrets Manager", "Caching", "Performance"]
  },
  {
    id: "aws-dva-fc-88",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Systems Manager Parameter Store: SecureString",
    hint: "KMS-encrypted configuration storage.",
    back: "<strong>SecureString</strong> parameters in Systems Manager Parameter Store encrypt sensitive text with AWS KMS upon storage and decrypt transparently when retrieved with <code>WithDecryption: true</code>.",
    tags: ["Systems Manager", "Parameter Store", "SecureString"]
  },
  {
    id: "aws-dva-fc-89",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager vs. Parameter Store",
    hint: "Architectural trade-offs.",
    back: "<strong>Secrets Manager</strong> specializes in credentials with automated Lambda rotation, cross-account sharing, and automatic generation. <strong>Parameter Store</strong> provides cost-effective hierarchical configuration and SecureString storage.",
    tags: ["Secrets Manager", "Parameter Store", "Architecture"]
  },
  {
    id: "aws-dva-fc-90",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: User Pools vs. Identity Pools",
    hint: "Authentication vs Authorization.",
    back: "<strong>Cognito User Pools</strong> are identity directories providing sign-up, sign-in, and JWT tokens (authentication). <strong>Identity Pools</strong> exchange tokens for temporary AWS IAM credentials (authorization) to access AWS services.",
    tags: ["Cognito", "User Pools", "Identity Pools"]
  },
  {
    id: "aws-dva-fc-91",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: ID Token vs. Access Token",
    hint: "JWT token distinctions.",
    back: "The <strong>ID Token</strong> contains user profile claims (email, name, sub) for UI display. The <strong>Access Token</strong> contains OAuth scopes and groups used to authorize API Gateway calls.",
    tags: ["Cognito", "JWT", "ID Token"]
  },
  {
    id: "aws-dva-fc-92",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Unauthenticated Identities",
    hint: "Enabling guest access securely.",
    back: "Cognito Identity Pools allow <strong>Unauthenticated Identities</strong>, vending temporary scoped AWS credentials mapped to a restricted guest IAM role for anonymous app visitors.",
    tags: ["Cognito", "Identity Pools", "Guest Access"]
  },
  {
    id: "aws-dva-fc-93",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Presigned URLs",
    hint: "Time-limited direct access.",
    back: "<strong>Presigned URLs</strong> grant time-limited permissions (e.g. 15 minutes) for clients to upload or download specific S3 objects directly using HTTP PUT/GET without exposing AWS credentials.",
    tags: ["S3", "Presigned URLs", "Security"]
  },
  {
    id: "aws-dva-fc-94",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Enforcing In-Transit Encryption",
    hint: "Mandating HTTPS via bucket policy.",
    back: "An S3 bucket policy with <code>Effect: Deny</code> and condition <strong>aws:SecureTransport: false</strong> rejects all unencrypted HTTP traffic, strictly enforcing TLS/HTTPS in transit.",
    tags: ["S3", "Bucket Policy", "TLS"]
  },
  {
    id: "aws-dva-fc-95",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: SSE-S3 vs. SSE-KMS vs. SSE-C",
    hint: "Encryption at rest options.",
    back: "<strong>SSE-S3</strong> uses AWS-managed AES-256 keys (no audit trail). <strong>SSE-KMS</strong> uses KMS keys, providing full CloudTrail audit trails and key policies. <strong>SSE-C</strong> requires the client to supply the encryption key with every request.",
    tags: ["S3", "SSE-KMS", "CloudTrail"]
  },
  {
    id: "aws-dva-fc-96",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "API Gateway: Cognito User Pool Authorizer",
    hint: "Zero-code JWT token validation.",
    back: "A <strong>Cognito User Pool Authorizer</strong> on API Gateway automatically validates JWT tokens against the Cognito User Pool, eliminating the need to write and maintain custom authorizer Lambda code.",
    tags: ["API Gateway", "Cognito", "Authorizer"]
  },
  {
    id: "aws-dva-fc-97",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Policy Evaluation Logic",
    hint: "The rule of explicit deny.",
    back: "In AWS IAM policy evaluation: default is <strong>Implicit Deny</strong>. Any matching <strong>Explicit Deny</strong> immediately overrides all <strong>Allow</strong> statements across all policy types.",
    tags: ["IAM", "Policy Evaluation", "Security"]
  },
  {
    id: "aws-dva-fc-98",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Permission Boundaries",
    hint: "Capping maximum permissions.",
    back: "An <strong>IAM Permission Boundary</strong> defines the maximum permissions boundary for an IAM user or role, preventing developers from escalating privileges when creating new roles.",
    tags: ["IAM", "Permission Boundaries", "Governance"]
  },
  {
    id: "aws-dva-fc-99",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "AWS WAF: Web Application Firewall",
    hint: "Layer 7 HTTP request inspection.",
    back: "<strong>AWS WAF</strong> inspects Layer 7 HTTP/HTTPS traffic on API Gateway stages, Application Load Balancers, and CloudFront distributions, blocking SQL injection, XSS, and malicious bots.",
    tags: ["WAF", "API Gateway", "Security"]
  },
  {
    id: "aws-dva-fc-100",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Object Lock Compliance vs. Governance Mode",
    hint: "WORM data protection.",
    back: "In <strong>Compliance Mode</strong>, no user (including the AWS root user) can delete objects during the retention period. In <strong>Governance Mode</strong>, users with specific IAM permissions can bypass the lock.",
    tags: ["S3", "Object Lock", "Compliance"]
  }
];

export default AWS_DVA_FLASHCARDS_4;
