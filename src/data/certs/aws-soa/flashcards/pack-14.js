export const AWS_SOA_FLASHCARDS_14 = [
  {
    id: 'aws-soa-fc-326',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How does AWS evaluate policies to decide whether a request in a member account is allowed?',
    hint: 'One explicit deny ends the discussion.',
    back: 'An <strong>explicit deny</strong> in any applicable policy wins. Otherwise the request must be permitted by every guardrail that applies: <strong>SCPs</strong> (for the principal\'s account) and <strong>RCPs</strong> (for the resource\'s account), then the <strong>permissions boundary</strong> and <strong>session policy</strong> if present, and finally allowed by an <strong>identity-based</strong> or <strong>resource-based</strong> policy. Anything not explicitly allowed is implicitly denied.',
    tags: ['IAM', 'Policy evaluation']
  },
  {
    id: 'aws-soa-fc-327',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Identity-based vs resource-based policies: what does each need for cross-account access?',
    hint: 'Both accounts have to agree.',
    back: '<strong>Identity-based</strong> policies attach to users, groups and roles and say what that identity may do. <strong>Resource-based</strong> policies attach to resources (S3 buckets, KMS keys, SQS queues, Lambda functions, role trust policies) and name principals. For <strong>cross-account</strong> access, the resource policy must allow the external principal <strong>and</strong> that principal\'s own identity policy must allow the action. Within one account, either policy alone is usually enough (KMS keys and role trust policies are exceptions).',
    tags: ['IAM', 'Resource-based policies']
  },
  {
    id: 'aws-soa-fc-328',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What does a permissions boundary do, and what does it not do?',
    hint: 'A ceiling, not a grant.',
    back: 'A permissions boundary is a managed policy set on a user or role that defines the <strong>maximum permissions</strong> its identity policies can grant. Effective permissions are the <strong>intersection</strong> of the boundary and the identity policies. A boundary <strong>grants nothing</strong> by itself and does not limit resource-based policies that name the principal directly. Common use: let developers create roles only if they attach an approved boundary.',
    tags: ['IAM', 'Permissions boundaries']
  },
  {
    id: 'aws-soa-fc-329',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'An IAM role has two policy types. What does each control?',
    hint: 'Who may become it, and what it may do.',
    back: 'The <strong>trust policy</strong> (a resource-based policy on the role) names the principals allowed to assume it, such as an AWS service, another account or a federated provider, with optional conditions like <code>sts:ExternalId</code> or MFA. The <strong>permissions policies</strong> (identity-based) define what the role can do once assumed. Callers also need <code>sts:AssumeRole</code> permission, or <code>iam:PassRole</code> to hand the role to a service.',
    tags: ['IAM roles', 'Trust policy']
  },
  {
    id: 'aws-soa-fc-330',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How long can an assumed-role session last?',
    hint: 'There is a role setting and a special case.',
    back: 'Each role has a <strong>maximum session duration</strong> from <strong>1 to 12 hours</strong> (default 1 hour); callers request a duration up to that limit with <code>DurationSeconds</code>. <strong>Role chaining</strong> (using one role\'s credentials to assume another) is limited to <strong>1 hour</strong> regardless of the setting. Existing sessions cannot be shortened after issue, so to cut off access immediately use the role\'s <strong>Revoke active sessions</strong> option, which adds a deny for tokens issued before now.',
    tags: ['IAM roles', 'STS']
  },
  {
    id: 'aws-soa-fc-331',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which global condition keys appear most in operational IAM policies?',
    hint: 'Where from, which org, which Region, MFA, TLS.',
    back: '<code>aws:SourceIp</code> (public caller IP; not set for VPC endpoint traffic), <code>aws:SourceVpce</code>/<code>aws:SourceVpc</code> (endpoint traffic), <code>aws:PrincipalOrgID</code> (caller\'s organization), <code>aws:RequestedRegion</code> (target Region), <code>aws:MultiFactorAuthPresent</code> (use with BoolIfExists), <code>aws:SecureTransport</code> (TLS), <code>aws:PrincipalTag</code>/<code>aws:ResourceTag</code> (ABAC) and <code>aws:PrincipalArn</code> (exceptions in SCPs).',
    tags: ['IAM', 'Policy conditions']
  },
  {
    id: 'aws-soa-fc-332',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How does attribute-based access control (ABAC) work in IAM?',
    hint: 'Compare tags on the caller with tags on the resource.',
    back: 'Tag principals (for example <code>team=blue</code>) and resources the same way, then write one policy whose condition requires <code>aws:ResourceTag/team</code> to equal <code>${aws:PrincipalTag/team}</code>. New resources and people need tags, not new policies. Protect it by controlling tagging with <code>aws:RequestTag</code> and <code>aws:TagKeys</code> conditions so users cannot retag resources into another team. With IAM Identity Center, user attributes from the identity source can be passed as session tags.',
    tags: ['IAM', 'ABAC', 'Tags']
  },
  {
    id: 'aws-soa-fc-333',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'SAML 2.0 federation vs web identity (OIDC) federation vs IAM Identity Center: which fits which users?',
    hint: 'Workforce, workloads, or many accounts at once.',
    back: '<strong>IAM Identity Center</strong>: the recommended workforce option across many accounts, with permission sets and an access portal, backed by its directory, Active Directory or an external IdP. <strong>IAM SAML provider</strong>: per-account workforce federation to roles via <code>AssumeRoleWithSAML</code>, for special cases. <strong>OIDC / web identity</strong>: workloads such as GitHub Actions or EKS service accounts exchanging tokens via <code>AssumeRoleWithWebIdentity</code>. App end users belong in <strong>Amazon Cognito</strong>.',
    tags: ['Federation', 'IAM Identity Center']
  },
  {
    id: 'aws-soa-fc-334',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which MFA device types does IAM support, and how many per user?',
    hint: 'Phishing resistance matters.',
    back: '<strong>Passkeys and FIDO security keys</strong> (phishing-resistant), <strong>virtual authenticator apps</strong> (TOTP) and <strong>hardware TOTP tokens</strong>. SMS MFA is no longer supported for IAM users. Each IAM user and the root user can register up to <strong>eight</strong> MFA devices of any mix, so a backup device can be kept. Require MFA in policies with <code>aws:MultiFactorAuthPresent</code>; for CLI use, call <code>sts get-session-token</code> with the MFA code.',
    tags: ['IAM', 'MFA']
  },
  {
    id: 'aws-soa-fc-335',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What is centralized root access for member accounts?',
    hint: 'Manage root credentials from one place.',
    back: 'From the management account or a delegated administrator, IAM can <strong>remove root credentials</strong> (password, access keys, MFA, signing certificates) from member accounts and block their recovery, so new accounts can be created without root credentials at all. Privileged tasks that need root, such as <strong>unlocking an S3 bucket policy that denies everyone</strong> or an SQS queue policy, are performed with short-lived root sessions via <code>sts:AssumeRoot</code>, scoped to a specific task.',
    tags: ['Root user', 'AWS Organizations']
  },
  {
    id: 'aws-soa-fc-336',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What can IAM Access Analyzer do, feature by feature?',
    hint: 'Find, prune, validate, prove, generate.',
    back: '<strong>External access analyzer</strong> (free): findings for resources shared outside the zone of trust (account or organization). <strong>Unused access analyzer</strong> (paid): unused roles, access keys, passwords and permissions. <strong>Policy validation</strong>: grammar errors, security warnings and suggestions while authoring. <strong>Custom policy checks</strong>: automated-reasoning tests such as no new access or access not granted. <strong>Policy generation</strong>: least-privilege policies from CloudTrail activity.',
    tags: ['IAM Access Analyzer']
  },
  {
    id: 'aws-soa-fc-337',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you use Access Analyzer archive rules without hiding real risk?',
    hint: 'Expected sharing should not bury unexpected sharing.',
    back: 'Archive rules automatically archive <strong>new findings</strong> that match criteria you define, such as a trusted partner account ID as principal or a specific bucket shared through a known CloudFront OAC. Keep rules narrow (resource plus principal, not whole resource types) and review archived findings periodically. Resolving the policy is the fix for unintended access; archiving is only for access that is <strong>intended</strong>.',
    tags: ['IAM Access Analyzer', 'Findings']
  },
  {
    id: 'aws-soa-fc-338',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What does an AccessDenied error message tell you today?',
    hint: 'It often names the type of policy responsible.',
    back: 'For many services, the message states whether the denial came from an <strong>explicit deny</strong> or <strong>no allow</strong> and names the policy type: identity-based policy, resource-based policy, permissions boundary, session policy, <strong>service control policy</strong> or <strong>resource control policy</strong>. The same text appears in CloudTrail. Use it to decide where to look, then confirm with the IAM policy simulator or by reading the named policy.',
    tags: ['IAM', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-339',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What is in the IAM credential report?',
    hint: 'Users and their credentials, not permissions.',
    back: 'A CSV of every <strong>IAM user</strong> (and the root user) with password enabled and last used, password last changed and next rotation, <strong>MFA active</strong>, each <strong>access key</strong>\'s status, last rotated and last used date, Region and service, and signing certificates. Generate it at most every four hours. Use it to find stale keys and users without MFA; use last accessed information to find unused permissions.',
    tags: ['IAM', 'Credential report']
  },
  {
    id: 'aws-soa-fc-340',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which CloudTrail fields matter when troubleshooting a denied call?',
    hint: 'Who, what, and why it failed.',
    back: '<code>userIdentity</code> (type, ARN, and for roles <code>sessionContext.sessionIssuer</code> showing the real role), <code>eventName</code> and <code>eventSource</code>, <code>errorCode</code> such as AccessDenied or UnauthorizedOperation, <code>errorMessage</code> with the policy type, <code>sourceIPAddress</code> and <code>vpcEndpointId</code>, and <code>requestParameters</code>. Filter by the access key ID to trace everything one credential did.',
    tags: ['CloudTrail', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-341',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which principals do SCPs not affect?',
    hint: 'One account and one kind of role.',
    back: 'SCPs do not restrict the <strong>management account</strong> (any user or role in it) or <strong>service-linked roles</strong>. They do apply to every other IAM user, role and the <strong>root user</strong> of member accounts. SCPs affect only principals inside the organization; to limit what outside principals can do with your resources, use <strong>resource control policies</strong> or resource policies.',
    tags: ['SCP', 'AWS Organizations']
  },
  {
    id: 'aws-soa-fc-342',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'SCP deny-list vs allow-list strategy: how does each work?',
    hint: 'What happens to FullAWSAccess?',
    back: '<strong>Deny list</strong> (default): keep the AWS-managed <code>FullAWSAccess</code> SCP attached everywhere and add SCPs with explicit denies; new services are available automatically. <strong>Allow list</strong>: replace FullAWSAccess with SCPs allowing only chosen services; an action must be allowed at <strong>every level</strong> from root to account, and new services stay blocked until added. Limits: up to 5 SCPs per root, OU or account, each up to 5,120 characters.',
    tags: ['SCP', 'Strategy']
  },
  {
    id: 'aws-soa-fc-343',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Resource control policies vs service control policies?',
    hint: 'Principal side versus resource side.',
    back: '<strong>SCPs</strong> cap what <strong>principals in your member accounts</strong> can do, anywhere. <strong>RCPs</strong> cap what <strong>any principal, including external ones</strong>, can do with <strong>resources in your member accounts</strong>, for supported services such as S3, STS, KMS, SQS and Secrets Manager. Together they build a data perimeter: SCPs stop your identities reaching untrusted resources, RCPs stop untrusted identities reaching yours. Neither applies to the management account, and neither grants permissions.',
    tags: ['Resource control policies', 'SCP', 'Data perimeter']
  },
  {
    id: 'aws-soa-fc-344',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'IAM Identity Center permission sets: which policy types can they include, and what is the catch with customer managed policies?',
    hint: 'One type must already exist in the account.',
    back: 'A permission set can hold <strong>AWS managed policies</strong>, an <strong>inline policy</strong>, references to <strong>customer managed policies</strong> by name and path, and a <strong>permissions boundary</strong>, plus a session duration of 1 to 12 hours. Identity Center creates a role in each assigned account. The catch: referenced customer managed policies are <strong>not created for you</strong>; a policy with that exact name must exist in every assigned account, or provisioning fails.',
    tags: ['IAM Identity Center', 'Permission sets']
  },
  {
    id: 'aws-soa-fc-345',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which identity sources can IAM Identity Center use?',
    hint: 'Only one at a time.',
    back: 'The <strong>Identity Center directory</strong> (users and groups created in Identity Center), <strong>Active Directory</strong> through AWS Managed Microsoft AD or AD Connector, or an <strong>external identity provider</strong> such as Okta, Microsoft Entra ID or Ping over SAML 2.0, usually with <strong>SCIM</strong> automatic provisioning of users and groups. Only one identity source is active, and changing it can remove existing assignments.',
    tags: ['IAM Identity Center', 'Identity sources']
  },
  {
    id: 'aws-soa-fc-346',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Why register a delegated administrator for AWS services in an organization?',
    hint: 'Keep people out of the management account.',
    back: 'Many services (Security Hub, GuardDuty, Config, Access Analyzer, StackSets, Systems Manager, IAM Identity Center and others) let the management account <strong>delegate administration</strong> to a member account, such as a security tooling account. Teams then manage the service organization-wide without signing in to the management account, which should be used as little as possible because SCPs do not restrict it.',
    tags: ['AWS Organizations', 'Delegated administrator']
  },
  {
    id: 'aws-soa-fc-347',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which Trusted Advisor checks do all accounts get, and what needs Business Support or higher?',
    hint: 'Basic gets the core security checks.',
    back: '<strong>Basic and Developer</strong> Support include the core security checks (S3 bucket permissions, security groups with specific ports unrestricted, IAM use, MFA on root, public EBS and RDS snapshots) and service limits checks. <strong>Business, Enterprise On-Ramp and Enterprise</strong> unlock the full set across cost optimization, performance, security, fault tolerance, service limits and operational excellence, plus API access, EventBridge integration and organizational view.',
    tags: ['Trusted Advisor', 'Support plans']
  },
  {
    id: 'aws-soa-fc-348',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What do Trusted Advisor check colors mean, and how do you handle accepted exceptions?',
    hint: 'Red, yellow, green, and an exclude button.',
    back: '<strong>Red</strong>: action recommended. <strong>Yellow</strong>: investigation recommended. <strong>Green</strong>: no problem detected. Refresh checks after remediation to update the status. For resources that are flagged but intentional, such as a public website bucket, <strong>exclude the resource</strong> from the check so the summary reflects real issues; revisit exclusions regularly. Weekly notification emails summarize changes for chosen contacts.',
    tags: ['Trusted Advisor']
  },
  {
    id: 'aws-soa-fc-349',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How can you act on Trusted Advisor results programmatically?',
    hint: 'Events in one Region, or APIs.',
    back: 'Trusted Advisor sends <strong>check status change events</strong> to EventBridge in <strong>us-east-1</strong> only; rules there can invoke Lambda or forward to other Regions. The <strong>Trusted Advisor API</strong> and the older AWS Support API let you list checks, refresh them and read results (Business Support or higher). For many accounts, <strong>organizational view</strong> writes consolidated reports to S3, and <strong>Trusted Advisor Priority</strong> (Enterprise) surfaces prioritized recommendations from the account team.',
    tags: ['Trusted Advisor', 'EventBridge', 'Automation']
  },
  {
    id: 'aws-soa-fc-350',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Why is iam:PassRole a privilege escalation risk, and how do you scope it?',
    hint: 'Handing a role to a service is almost like using it.',
    back: 'Passing a role to a service (EC2 instance profile, Lambda, CloudFormation, ECS) lets that service act with the role\'s permissions, so a user who can pass an admin role to Lambda can run admin actions through code. Scope <code>iam:PassRole</code> to specific role ARNs, and restrict the receiving service with the <code>iam:PassedToService</code> condition. Never grant <code>iam:PassRole</code> on <code>*</code> to non-administrators.',
    tags: ['IAM', 'PassRole', 'Least privilege']
  }
];

export default AWS_SOA_FLASHCARDS_14;
