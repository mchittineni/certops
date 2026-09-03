export const AWS_DVA_FLASHCARDS_5 = [
  {
    id: "aws-dva-fc-101",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: aws:SourceIp Condition",
    hint: "Restricting API calls by caller IP.",
    back: "The <strong>aws:SourceIp</strong> condition key evaluates caller public IP addresses against CIDR ranges, enforcing network perimeter access control in IAM and bucket policies.",
    tags: ["IAM", "SourceIp", "Conditions"]
  },
  {
    id: "aws-dva-fc-102",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "STS: DecodeAuthorizationMessage",
    hint: "Deciphering AccessDenied error tokens.",
    back: "<strong>sts:DecodeAuthorizationMessage</strong> decodes opaque authorization failure strings into readable JSON detailing which IAM statement or permission boundary triggered the denial.",
    tags: ["STS", "DecodeAuthorizationMessage", "Troubleshooting"]
  },
  {
    id: "aws-dva-fc-103",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Asymmetric Key Pairs",
    hint: "Public-key cryptography and signing.",
    back: "KMS <strong>Asymmetric Key Pairs</strong> generate an exportable public key for external signature verification while protecting the private key inside KMS hardware security modules.",
    tags: ["KMS", "Asymmetric Keys", "Digital Signatures"]
  },
  {
    id: "aws-dva-fc-104",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Grants (CreateGrant)",
    hint: "Programmatic delegated permissions.",
    back: "<strong>KMS Grants</strong> provide temporary, fine-grained access control on KMS keys without editing key policies, commonly used by services like EBS and Redshift to decrypt resources dynamically.",
    tags: ["KMS", "Grants", "Delegation"]
  },
  {
    id: "aws-dva-fc-105",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager: Cross-Account Access",
    hint: "Sharing secrets between AWS accounts.",
    back: "Cross-account access requires a <strong>Resource-Based Policy on the secret</strong> granting access to the external principal, alongside <strong>kms:Decrypt</strong> permissions on the custom KMS key.",
    tags: ["Secrets Manager", "Cross-Account", "Resource Policy"]
  },
  {
    id: "aws-dva-fc-106",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Parameter Store: Path Hierarchies",
    hint: "Bulk parameter retrieval.",
    back: "Using <strong>GetParametersByPath</strong> with hierarchical paths (e.g. <code>/app/prod/</code>) enables applications to fetch structured configuration sets in a single API request.",
    tags: ["Parameter Store", "Hierarchies", "GetParametersByPath"]
  },
  {
    id: "aws-dva-fc-107",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Pre Sign-up Trigger",
    hint: "Custom registration validation.",
    back: "The <strong>Pre Sign-up</strong> Lambda trigger executes before user creation, enabling developers to validate input, reject fraudulent domains, or auto-verify attributes programmatically.",
    tags: ["Cognito", "Lambda Triggers", "Pre Sign-up"]
  },
  {
    id: "aws-dva-fc-108",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Pre Token Generation Trigger",
    hint: "Injecting custom claims into JWTs.",
    back: "The <strong>Pre Token Generation</strong> trigger allows developers to customize identity and access token claims (e.g. adding roles or tenant IDs) before Cognito issues the token to the client.",
    tags: ["Cognito", "JWT", "Pre Token Generation"]
  },
  {
    id: "aws-dva-fc-109",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "API Gateway: Resource Policies",
    hint: "Controlling API access by VPC or IP.",
    back: "<strong>API Gateway Resource Policies</strong> control who can invoke an API based on caller accounts, source IP ranges, or specific interface VPC endpoint IDs (<code>aws:sourceVpce</code>).",
    tags: ["API Gateway", "Resource Policies", "VPC Endpoint"]
  },
  {
    id: "aws-dva-fc-110",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Block Public Access Settings",
    hint: "Preventing accidental public data leaks.",
    back: "The 4 Block Public Access flags: <strong>BlockPublicAcls</strong> (rejects public ACL PUTs), <strong>IgnorePublicAcls</strong>, <strong>BlockPublicPolicy</strong>, and <strong>RestrictPublicBuckets</strong>.",
    tags: ["S3", "Block Public Access", "Security"]
  },
  {
    id: "aws-dva-fc-111",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: Access Points",
    hint: "Per-application bucket management.",
    back: "<strong>S3 Access Points</strong> provide dedicated hostnames and access policies for individual applications or teams accessing a shared bucket, avoiding complex monolithic bucket policies.",
    tags: ["S3", "Access Points", "Governance"]
  },
  {
    id: "aws-dva-fc-112",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: BucketOwnerEnforced",
    hint: "Disabling legacy ACLs completely.",
    back: "Setting <strong>BucketOwnerEnforced</strong> disables all ACLs and ensures the bucket owner owns every object, simplifying governance exclusively through IAM and bucket policies.",
    tags: ["S3", "Object Ownership", "BucketOwnerEnforced"]
  },
  {
    id: "aws-dva-fc-113",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: Trust Policy vs. Permissions Policy",
    hint: "Who can assume vs what they can do.",
    back: "A <strong>Trust Policy</strong> defines which principal (service/user) can assume the role. A <strong>Permissions Policy</strong> defines what AWS actions the assumed role can execute.",
    tags: ["IAM", "Trust Policy", "Security"]
  },
  {
    id: "aws-dva-fc-114",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "IAM: iam:PassRole",
    hint: "Preventing privilege escalation.",
    back: "The <strong>iam:PassRole</strong> permission ensures users can only attach pre-approved roles to compute services (EC2, Lambda), preventing unauthorized privilege escalation.",
    tags: ["IAM", "PassRole", "Privilege Escalation"]
  },
  {
    id: "aws-dva-fc-115",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Multi-Region Keys (MRKs)",
    hint: "Cross-region interoperable encryption.",
    back: "<strong>Multi-Region Keys (MRKs)</strong> share the same Key ID and cryptographic material across regions, enabling seamless decryption in secondary regions without re-encrypting data.",
    tags: ["KMS", "Multi-Region Keys", "Encryption"]
  },
  {
    id: "aws-dva-fc-116",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "KMS: Key Deletion Waiting Period",
    hint: "Preventing catastrophic data loss.",
    back: "KMS key deletion has a mandatory waiting window of <strong>7 to 30 days</strong> (default 30 days). Immediate deletion is impossible, giving administrators time to cancel deletion if needed.",
    tags: ["KMS", "Key Deletion", "Governance"]
  },
  {
    id: "aws-dva-fc-117",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Secrets Manager: GetRandomPassword API",
    hint: "Automated password generation.",
    back: "<strong>GetRandomPassword</strong> generates cryptographically secure strings meeting custom length and character inclusion rules, streamlining automated infrastructure provisioning.",
    tags: ["Secrets Manager", "GetRandomPassword", "Automation"]
  },
  {
    id: "aws-dva-fc-118",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Parameter Store: Advanced Tier",
    hint: "Higher limits and parameter policies.",
    back: "The <strong>Advanced tier</strong> in Parameter Store expands parameter size to <strong>8 KB</strong>, supports parameter policies (e.g. <code>Expiration</code> and <code>ExpirationNotification</code>), and charges a modest storage fee.",
    tags: ["Parameter Store", "Advanced Tier", "Configuration"]
  },
  {
    id: "aws-dva-fc-119",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Authorization Code with PKCE",
    hint: "Secure token acquisition for SPAs.",
    back: "The <strong>Authorization Code Grant with PKCE</strong> avoids exposing tokens in URL fragments, exchanging a temporary code for JWT tokens via a secure back-channel.",
    tags: ["Cognito", "OAuth", "Authorization Code"]
  },
  {
    id: "aws-dva-fc-120",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Client Credentials Grant",
    hint: "Machine-to-machine authentication.",
    back: "The <strong>Client Credentials grant</strong> allows backend services to authenticate directly using client IDs and secrets to obtain access tokens with custom OAuth scopes.",
    tags: ["Cognito", "Client Credentials", "M2M"]
  },
  {
    id: "aws-dva-fc-121",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "Cognito: Role-Based Access Control",
    hint: "Dynamic IAM role assignment.",
    back: "Cognito Identity Pools support <strong>Rule-Based Role Mapping</strong>, evaluating claims (e.g. <code>cognito:groups</code>) in the user's ID token to assign distinct IAM roles dynamically.",
    tags: ["Cognito", "Identity Pools", "Role Mapping"]
  },
  {
    id: "aws-dva-fc-122",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "API Gateway: Minimum TLS Version",
    hint: "Enforcing modern transport security.",
    back: "Configuring the <strong>TLS_1_2</strong> security policy on Custom Domain Names rejects deprecated TLS 1.0 and 1.1 connections, meeting security compliance standards.",
    tags: ["API Gateway", "TLS", "Compliance"]
  },
  {
    id: "aws-dva-fc-123",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "AWS WAF: Rate-Based Rules",
    hint: "Automated IP-based flood blocking.",
    back: "A <strong>Rate-Based Rule</strong> tracks request counts per IP over a 5-minute window, temporarily blocking IPs that exceed the threshold to mitigate HTTP flood DDoS attacks.",
    tags: ["WAF", "Rate-Based Rules", "DDoS"]
  },
  {
    id: "aws-dva-fc-124",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: CloudTrail Data Events",
    hint: "Auditing object-level S3 access.",
    back: "<strong>CloudTrail Data Events</strong> capture detailed object-level API calls (<code>GetObject</code>, <code>PutObject</code>) with caller identity and timestamps for security compliance.",
    tags: ["S3", "CloudTrail", "Data Events"]
  },
  {
    id: "aws-dva-fc-125",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    front: "S3: CORS Rules",
    hint: "Enabling cross-origin browser requests.",
    back: "An S3 <strong>CORS configuration</strong> defines allowed origins and methods (e.g. <code>GET</code> from <code>https://app.example.com</code>), enabling client browsers to read bucket assets.",
    tags: ["S3", "CORS", "Web Security"]
  }
];

export default AWS_DVA_FLASHCARDS_5;
