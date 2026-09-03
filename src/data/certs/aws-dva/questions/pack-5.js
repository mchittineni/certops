export const AWS_DVA_QUESTIONS_5 = [
  {
    id: "aws-dva-101",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Network Perimeter Condition: aws:SourceIp vs aws:VpcSourceIp",
    scenario: "A developer wants to restrict access to an internal corporate S3 bucket so requests succeed only when sent from an on-premises office static public IP range.",
    question: "Which IAM condition key evaluates the public IP address of the incoming caller?",
    options: [
      { id: 'A', text: "aws:PrincipalArn" },
      { id: 'B', text: "aws:RequestedRegion" },
      { id: 'C', text: "aws:SourceIp" },
      { id: 'D', text: "aws:VpcSourceIp" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `aws:SourceIp` condition key compares the public IP address from which the caller is making the request against specified CIDR blocks. In contrast, `aws:sourceVpce` or `aws:sourceVpc` evaluate requests arriving via VPC endpoints.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-sourceip",
    tags: ["IAM", "SourceIp", "Conditions"]
  },
  {
    id: "aws-dva-102",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "STS DecodeAuthorizationMessage for Permission Troubleshooting",
    scenario: "An API call made by a developer fails with an encoded authorization failure message string (e.g. `AQAAAH...`).",
    question: "Which AWS STS API operation decodes this encrypted failure string to reveal the exact failing IAM policy evaluation details?",
    options: [
      { id: 'A', text: "sts:DecodeAuthorizationMessage" },
      { id: 'B', text: "sts:GetCallerIdentity" },
      { id: 'C', text: "sts:GetSessionToken" },
      { id: 'D', text: "iam:SimulateCustomPolicy" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `sts:DecodeAuthorizationMessage` API decodes additional information about the authorization status of a request from an encoded message string, providing detailed JSON explaining which user, action, resource, and policy statement caused the authorization denial.",
    referenceUrl: "https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html",
    tags: ["STS", "DecodeAuthorizationMessage", "Troubleshooting"]
  },
  {
    id: "aws-dva-103",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Asymmetric Key Pairs for External Signing",
    scenario: "An enterprise document workflow requires digital signing of PDF contracts where external clients can verify the signature using an open public key without AWS credentials.",
    question: "Which AWS KMS key type supports public key distribution for external signature verification?",
    options: [
      { id: 'A', text: "An Asymmetric KMS Key Pair for signing and verification (RSA or ECC)" },
      { id: 'B', text: "A Symmetric Encryption KMS Key" },
      { id: 'C', text: "An AWS Managed SSE-S3 Key" },
      { id: 'D', text: "A CloudHSM classic DES key" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS KMS supports asymmetric key pairs consisting of an RSA or ECC public and private key. The private key never leaves KMS and is used for signing operations, while the public key can be freely exported and distributed to external clients to verify digital signatures without AWS authentication.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html",
    tags: ["KMS", "Asymmetric Keys", "Digital Signatures"]
  },
  {
    id: "aws-dva-104",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Grants vs. Key Policies for Temporary Access",
    scenario: "An auto-scaling fleet of EC2 instances needs temporary, programmatic permission to decrypt database snapshot volumes without updating and redeploying the static KMS key policy.",
    question: "Which KMS mechanism delegates programmatic, temporary permissions with retired lifecycles?",
    options: [
      { id: 'A', text: "KMS Key Aliases" },
      { id: 'B', text: "S3 Bucket ACLs" },
      { id: 'C', text: "IAM Instance Profiles alone" },
      { id: 'D', text: "KMS Grants (CreateGrant)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "KMS Grants provide a flexible, programmatic mechanism to delegate long-term or temporary permissions to AWS principals on a specific KMS key without modifying the key policy. Grants can be created dynamically (e.g. by AWS services like EBS or RDS) and revoked or retired when no longer needed.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["KMS", "Grants", "Delegation"]
  },
  {
    id: "aws-dva-105",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS Secrets Manager Cross-Account Sharing",
    scenario: "An organization maintains a central Security Account containing sensitive API tokens in Secrets Manager. An application running in a Production Account needs to retrieve the secret.",
    question: "Which combination of configurations enables cross-account secret access?",
    options: [
      { id: 'A', text: "Create a VPC Peering connection and disable all IAM policies" },
      { id: 'B', text: "Send the secret value in an SQS message across accounts" },
      { id: 'C', text: "Attach a Resource-Based Policy to the secret in the Security Account granting access to the Production Account role, and grant the role kms:Decrypt on the KMS key" },
      { id: 'D', text: "Copy the secret to an unencrypted public S3 bucket" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Secrets Manager supports resource-based policies directly on secrets. To enable cross-account access, the secret's resource policy must permit the external account or role, and the target role must have `secretsmanager:GetSecretValue` permissions and `kms:Decrypt` permissions on the backing Customer Managed Key.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html",
    tags: ["Secrets Manager", "Cross-Account", "Resource Policy"]
  },
  {
    id: "aws-dva-106",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Systems Manager Parameter Store Path Hierarchies",
    scenario: "A developer manages 50 configuration parameters across multiple environments (/prod/db/host, /prod/db/user, /dev/db/host). The application needs to retrieve all production database settings in a single API call.",
    question: "Which Systems Manager API operation retrieves all parameters under a specific hierarchical path?",
    options: [
      { id: 'A', text: "GetParametersByPath with Path set to /prod/db and Recursive set to true" },
      { id: 'B', text: "DescribeParameters with a regex filter" },
      { id: 'C', text: "BatchGetParameterByPrefix" },
      { id: 'D', text: "GetParameter with a wildcard asterisk" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `GetParametersByPath` API in Systems Manager Parameter Store retrieves all parameters matching a specified hierarchical path (e.g. `/prod/db/`), optionally recursing through sub-paths. This enables applications to load environment configurations in a single network request.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-hierarchies.html",
    tags: ["Parameter Store", "Hierarchies", "GetParametersByPath"]
  },
  {
    id: "aws-dva-107",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool Lambda Triggers (Pre Sign-up, Post Confirmation)",
    scenario: "A company requires custom fraud screening when a user signs up. If the user's email domain is from a disposable email service, the registration must be rejected before the account is created.",
    question: "Which Cognito User Pool trigger should the developer implement?",
    options: [
      { id: 'A', text: "Pre Sign-up Lambda Trigger" },
      { id: 'B', text: "Post Confirmation Lambda Trigger" },
      { id: 'C', text: "Pre Authentication Lambda Trigger" },
      { id: 'D', text: "Custom Message Lambda Trigger" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `Pre Sign-up` Lambda trigger executes before Amazon Cognito creates a new user profile. The Lambda function can validate user attributes (such as denying disposable email domains), auto-confirm users, or reject the registration by throwing an error.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html",
    tags: ["Cognito", "Lambda Triggers", "Pre Sign-up"]
  },
  {
    id: "aws-dva-108",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool Pre Token Generation Trigger",
    scenario: "An API Gateway endpoint requires custom user role claims (e.g. `roles: ['billing_admin']`) inside the Cognito JWT token to evaluate authorization decisions.",
    question: "Which Cognito User Pool trigger customizes the identity or access token claims before issuance?",
    options: [
      { id: 'A', text: "Post Authentication Lambda Trigger" },
      { id: 'B', text: "Define Auth Challenge Lambda Trigger" },
      { id: 'C', text: "Pre Token Generation Lambda Trigger" },
      { id: 'D', text: "Verify Auth Challenge Response Trigger" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Pre Token Generation` Lambda trigger executes before Cognito issues identity or access tokens. The function can inspect user attributes or query external databases to add, override, or suppress claims directly in the generated JWT token.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html",
    tags: ["Cognito", "JWT", "Pre Token Generation"]
  },
  {
    id: "aws-dva-109",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway Resource Policies for VPC Endpoint Restrictions",
    scenario: "An organization publishes a REST API on API Gateway and mandates that it can only be invoked by internal applications originating from a specific VPC endpoint ID (`vpce-12345678`).",
    question: "Where should the developer configure this access control policy?",
    options: [
      { id: 'A', text: "In the API Gateway Resource Policy using the aws:sourceVpce condition key" },
      { id: 'B', text: "In an S3 bucket policy" },
      { id: 'C', text: "In the client browser HTTP headers" },
      { id: 'D', text: "In Route 53 health check settings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway Resource Policies are JSON policy documents attached directly to a REST API. Developers use the condition `\"StringEquals\": { \"aws:sourceVpce\": \"vpce-12345678\" }` to restrict invocation exclusively to traffic flowing through that specific interface VPC endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-resource-policies.html",
    tags: ["API Gateway", "Resource Policies", "VPC Endpoint"]
  },
  {
    id: "aws-dva-110",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Block Public Access Four Flags",
    scenario: "A cloud administrator enables S3 Block Public Access at the account level. A developer tries to upload an object with a public ACL (`public-read`).",
    question: "Which specific S3 Block Public Access setting prevents uploading objects with public ACLs?",
    options: [
      { id: 'A', text: "BlockPublicPolicy" },
      { id: 'B', text: "RestrictPublicBuckets" },
      { id: 'C', text: "BlockPublicAcls" },
      { id: 'D', text: "IgnorePublicAcls" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`BlockPublicAcls` causes S3 to reject `PUT` requests that specify a public access control list (ACL) such as `public-read`, returning an HTTP 403 Access Denied error and preventing public objects from being uploaded.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
    tags: ["S3", "Block Public Access", "Security"]
  },
  {
    id: "aws-dva-111",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Amazon S3 Access Points for Granular Multi-Team Management",
    scenario: "A shared S3 data lake bucket stores raw logs, financial records, and marketing data. Different teams require distinct access permissions, network routing rules, and prefixes.",
    question: "Which Amazon S3 feature creates unique hostnames with dedicated access policies for each application or team?",
    options: [
      { id: 'A', text: "AWS Storage Gateway" },
      { id: 'B', text: "Amazon S3 Access Points" },
      { id: 'C', text: "Amazon S3 Object Lockers" },
      { id: 'D', text: "Amazon S3 Static Website Hosting" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon S3 Access Points are named network endpoints attached to buckets that have dedicated access policies and network controls (e.g. restricting access to a specific VPC). Each access point simplifies managing data access at scale for distinct teams and applications.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html",
    tags: ["S3", "Access Points", "Governance"]
  },
  {
    id: "aws-dva-112",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Object Ownership: BucketOwnerEnforced",
    scenario: "In an enterprise S3 bucket, objects uploaded by cross-account users are owned by the external accounts, causing access issues for the bucket owner.",
    question: "Which S3 Object Ownership setting disables access control lists (ACLs) and makes the bucket owner the sole owner of all objects?",
    options: [
      { id: 'A', text: "BucketOwnerEnforced" },
      { id: 'B', text: "BucketOwnerPreferred" },
      { id: 'C', text: "ObjectWriter" },
      { id: 'D', text: "ACLsEnabled" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `BucketOwnerEnforced` setting in S3 Object Ownership disables all ACLs on the bucket and its objects. The bucket owner automatically owns and has full control over all objects, regardless of which AWS account uploaded them, enforcing modern IAM-based access control.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html",
    tags: ["S3", "Object Ownership", "BucketOwnerEnforced"]
  },
  {
    id: "aws-dva-113",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM Role Trust Policy vs Permissions Policy",
    scenario: "A developer creates an IAM role for a Lambda function. The function fails to execute with an `AssumeRole` access denied error upon invocation.",
    question: "Which component of the IAM role defines which AWS service principal is permitted to assume the role?",
    options: [
      { id: 'A', text: "The AWS KMS key policy" },
      { id: 'B', text: "The Permissions Policy attached to the role" },
      { id: 'C', text: "The Trust Policy (Principal: { Service: lambda.amazonaws.com })" },
      { id: 'D', text: "The IAM Group membership" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An IAM role consists of two distinct policies: the `Trust Policy` (which specifies which principal, such as `lambda.amazonaws.com` or an EC2 service, is allowed to assume the role via `sts:AssumeRole`) and `Permissions Policies` (which define what actions the assumed role can perform).",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html",
    tags: ["IAM", "Trust Policy", "Security"]
  },
  {
    id: "aws-dva-114",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "IAM PassRole Permission Requirements",
    scenario: "A developer without administrative privileges creates an Amazon EC2 instance and tries to attach an existing IAM instance profile to the instance, receiving an `AccessDenied` on `iam:PassRole`.",
    question: "Why is the `iam:PassRole` permission required for this operation?",
    options: [
      { id: 'A', text: "To prevent developers from passing high-privilege IAM roles to compute resources to escalate their own permissions" },
      { id: 'B', text: "iam:PassRole is only required for deleting IAM users" },
      { id: 'C', text: "PassRole is required to encrypt EC2 EBS root volumes" },
      { id: 'D', text: "The developer must be an AWS Organizations management account root user" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `iam:PassRole` permission controls which IAM roles a user can pass to an AWS service (such as EC2, Lambda, or CodeBuild). Without `iam:PassRole` restrictions, a developer with limited permissions could launch an EC2 instance with an administrator role and gain full control of the account.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html",
    tags: ["IAM", "PassRole", "Privilege Escalation"]
  },
  {
    id: "aws-dva-115",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Multi-Region Keys (MRK) Replication",
    scenario: "A multi-region active-active application stores encrypted customer data in S3 in `us-east-1` and replicates objects to `eu-west-1`. Decrypting replicated data in `eu-west-1` requires access to matching cryptographic keys without re-encrypting across regions.",
    question: "Which AWS KMS feature supports creating interoperable keys with identical key IDs and key material across multiple AWS regions?",
    options: [
      { id: 'A', text: "KMS Multi-Region Keys (MRKs)" },
      { id: 'B', text: "CloudHSM Classic clusters" },
      { id: 'C', text: "AWS CloudTrail Event Keys" },
      { id: 'D', text: "KMS Asymmetric Key Pairs" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS KMS Multi-Region Keys (MRKs) are AWS KMS keys in different AWS Regions that have the same key ID, key material, and key specs. Ciphertext encrypted under an MRK in one Region can be decrypted under the related MRK in another Region without needing to re-encrypt over the network.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html",
    tags: ["KMS", "Multi-Region Keys", "Encryption"]
  },
  {
    id: "aws-dva-116",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "KMS Key Deletion Waiting Period (7 to 30 Days)",
    scenario: "An administrator schedules the deletion of an unused Customer Managed Key (CMK) in AWS KMS. The administrator attempts to delete the key immediately to save costs.",
    question: "What is the minimum mandatory waiting period enforced by AWS KMS before a key is permanently deleted?",
    options: [
      { id: 'A', text: "7 days (configurable between 7 and 30 days)" },
      { id: 'B', text: "0 days (immediate deletion is allowed)" },
      { id: 'C', text: "24 hours" },
      { id: 'D', text: "90 days" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS KMS enforces a mandatory minimum waiting period of 7 days (and up to 30 days) when scheduling key deletion. During this window, the key state changes to `PendingDeletion`, all encrypt and decrypt operations fail, and administrators can cancel deletion if needed, preventing accidental data loss.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html",
    tags: ["KMS", "Key Deletion", "Governance"]
  },
  {
    id: "aws-dva-117",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Secrets Manager Random Password Generation",
    scenario: "A deployment pipeline provisions an Amazon RDS database and needs to generate a cryptographically secure 32-character master password meeting complexity rules without custom scripts.",
    question: "Which AWS Secrets Manager API operation generates random passwords conforming to customizable character constraints?",
    options: [
      { id: 'A', text: "CreatePasswordHash" },
      { id: 'B', text: "GetRandomPassword" },
      { id: 'C', text: "GenerateSecretString" },
      { id: 'D', text: "RandomizeSecret" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `GetRandomPassword` API in AWS Secrets Manager generates a random string of specified length (up to 4,096 characters) with options to include/exclude uppercase, lowercase, numbers, punctuation symbols, and specific characters, ideal for bootstrapping database passwords.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html",
    tags: ["Secrets Manager", "GetRandomPassword", "Automation"]
  },
  {
    id: "aws-dva-118",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Systems Manager Parameter Store Advanced Tier Features",
    scenario: "An application configuration string is 6 KB in size and requires automated expiration notifications after 90 days. Standard Parameter Store limits size to 4 KB.",
    question: "Which parameter tier in Systems Manager Parameter Store supports parameters up to 8 KB and parameter policies?",
    options: [
      { id: 'A', text: "Encrypted Parameter tier" },
      { id: 'B', text: "Enterprise Parameter tier" },
      { id: 'C', text: "Standard Parameter tier" },
      { id: 'D', text: "Advanced Parameter tier" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `Advanced Parameter tier` in Systems Manager Parameter Store increases maximum parameter size from 4 KB to 8 KB, supports parameter policies (such as expiration dates and notifications via EventBridge), and supports over 10,000 parameters per account.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html",
    tags: ["Parameter Store", "Advanced Tier", "Configuration"]
  },
  {
    id: "aws-dva-119",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool OAuth 2.0 Authorization Code Grant",
    scenario: "A single-page web application integrates with Amazon Cognito Hosted UI. For maximum security, the client application must exchange an authorization code for tokens via backend server calls rather than exposing tokens in browser URL fragments.",
    question: "Which OAuth 2.0 grant flow should the developer configure?",
    options: [
      { id: 'A', text: "Authorization Code Grant with PKCE (Proof Key for Code Exchange)" },
      { id: 'B', text: "Implicit Grant" },
      { id: 'C', text: "Client Credentials Grant" },
      { id: 'D', text: "Resource Owner Password Credentials Grant" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The OAuth 2.0 `Authorization Code Grant` (recommended with PKCE for single-page and mobile apps) returns a temporary authorization code to the browser callback, which the client backend exchanges directly for tokens via an HTTPS POST request, preventing token exposure in browser history and URL bars.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html",
    tags: ["Cognito", "OAuth", "Authorization Code"]
  },
  {
    id: "aws-dva-120",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito User Pool Machine-to-Machine Client Credentials",
    scenario: "A backend daemon service needs to authenticate with an API Gateway REST API without any human user interaction or password prompts.",
    question: "Which OAuth 2.0 grant type in Cognito User Pools facilitates machine-to-machine (M2M) server authentication?",
    options: [
      { id: 'A', text: "Client Credentials Grant" },
      { id: 'B', text: "Authorization Code Grant" },
      { id: 'C', text: "Implicit Grant" },
      { id: 'D', text: "Device Code Grant" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The OAuth 2.0 `Client Credentials` grant type is designed for machine-to-machine communication where a client application authenticates using its `client_id` and `client_secret` to obtain an access token with custom scopes, without end-user involvement.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html#token-endpoint",
    tags: ["Cognito", "Client Credentials", "M2M"]
  },
  {
    id: "aws-dva-121",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "Cognito Identity Pool Role Mapping Rules",
    scenario: "A company wants authenticated users in the `Admins` Cognito group to receive an IAM role with elevated privileges, while regular users receive a read-only role.",
    question: "How should the developer configure role assignment in Cognito Identity Pools?",
    options: [
      { id: 'A', text: "Configure Rule-Based Role Mapping on the Identity Pool based on claims in the ID token" },
      { id: 'B', text: "Create separate AWS accounts for each user group" },
      { id: 'C', text: "Hardcode the admin IAM secret key in the mobile client code" },
      { id: 'D', text: "Disable IAM roles and use basic authentication" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cognito Identity Pools support Rule-Based Role Mapping. Developers can evaluate token claims (such as `cognito:groups` matching `Admins`) and dynamically map authenticated users to different IAM roles with distinct permission policies.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/role-based-access-control.html",
    tags: ["Cognito", "Identity Pools", "Role Mapping"]
  },
  {
    id: "aws-dva-122",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "API Gateway TLS 1.2 Minimum Security Policy",
    scenario: "A compliance standard requires that an enterprise API Gateway Custom Domain Name must reject all TLS 1.0 and TLS 1.1 client connections.",
    question: "Which security policy should the developer select on the Custom Domain Name?",
    options: [
      { id: 'A', text: "TLS_1_2" },
      { id: 'B', text: "TLS_1_0" },
      { id: 'C', text: "SSL_v3" },
      { id: 'D', text: "PLAINTEXT_FALLBACK" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway Custom Domain Names allow developers to choose a Security Policy. Selecting `TLS_1_2` enforces that clients must establish connections using TLS 1.2 or higher, rejecting legacy, insecure TLS 1.0 and 1.1 handshakes.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-custom-domain-tls-version.html",
    tags: ["API Gateway", "TLS", "Compliance"]
  },
  {
    id: "aws-dva-123",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "AWS WAF Rate-Based Rules for HTTP Flood Mitigation",
    scenario: "A public web application receives malicious traffic spikes where individual IP addresses submit 20,000 HTTP POST requests per minute, overwhelming backend databases.",
    question: "Which AWS WAF rule type tracks incoming request volume per IP and automatically blocks offenders?",
    options: [
      { id: 'A', text: "A Size Constraint Rule" },
      { id: 'B', text: "An SQL Injection Rule" },
      { id: 'C', text: "A Geo-Match Rule" },
      { id: 'D', text: "A Rate-Based Rule with a 5-minute evaluation window" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS WAF Rate-Based Rules monitor the volume of requests arriving from each IP address over a sliding 5-minute evaluation window. If an IP exceeds the configured limit (e.g. 100 requests per 5 minutes), WAF automatically blocks further requests from that IP.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html",
    tags: ["WAF", "Rate-Based Rules", "DDoS"]
  },
  {
    id: "aws-dva-124",
    difficulty: "medium",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 Server Access Logging vs CloudTrail Data Events",
    scenario: "A security team needs to audit who downloaded sensitive financial reports from S3, including the source IP, user agent, and HTTP response code.",
    question: "Which logging option records detailed object-level read operations with sub-minute delivery into AWS CloudTrail?",
    options: [
      { id: 'A', text: "CloudTrail Object-Level Data Events for S3" },
      { id: 'B', text: "S3 Server Access Logging alone" },
      { id: 'C', text: "VPC Flow Logs" },
      { id: 'D', text: "AWS Config History alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS CloudTrail Data Events for S3 record detailed API activity (such as `GetObject`, `PutObject`, and `DeleteObject`) with caller identity, source IP, and timestamp, integrating directly with CloudTrail Insights, EventBridge, and Athena for auditing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging.html",
    tags: ["S3", "CloudTrail", "Data Events"]
  },
  {
    id: "aws-dva-125",
    difficulty: "easy",
    certId: "aws-dva",
    domainId: "d2",
    domainName: "Security",
    title: "S3 CORS Configuration for Browser Fetch Requests",
    scenario: "A frontend React application running on `https://app.example.com` attempts to fetch JSON files from `https://assets.example.com.s3.amazonaws.com` via JavaScript `fetch()`, receiving a CORS origin error.",
    question: "What must be configured on the assets S3 bucket to permit the request?",
    options: [
      { id: 'A', text: "A public S3 bucket policy with Principal: *" },
      { id: 'B', text: "An S3 CORS configuration rule allowing Origin https://app.example.com and Method GET" },
      { id: 'C', text: "An S3 lifecycle rule to purge old versions" },
      { id: 'D', text: "An IAM policy granting s3:GetObject to anonymous users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cross-Origin Resource Sharing (CORS) rules on the S3 bucket define permitted origins (`AllowedOrigins: ['https://app.example.com']`), allowed HTTP methods (`AllowedMethods: ['GET']`), allowed headers, and max age, instructing S3 to return proper `Access-Control-Allow-Origin` headers to the browser.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html",
    tags: ["S3", "CORS", "Web Security"]
  }
];

export default AWS_DVA_QUESTIONS_5;
