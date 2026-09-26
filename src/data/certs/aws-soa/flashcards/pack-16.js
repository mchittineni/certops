export const AWS_SOA_FLASHCARDS_16 = [
  {
    id: 'aws-soa-fc-376',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'ACM DNS validation vs email validation: which one supports hands-off renewal?',
    hint: 'One of them needs a person to click a link every time.',
    back: '<strong>DNS validation</strong>: ACM gives you a CNAME record; as long as that record stays in DNS and the certificate is in use, ACM renews automatically with no action. <strong>Email validation</strong>: a domain contact must approve an email at issuance and again at each renewal. Prefer DNS validation, and in Route 53 let ACM create the record for you.',
    tags: ['ACM', 'Certificate validation']
  },
  {
    id: 'aws-soa-fc-377',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which Region must hold an ACM certificate used by CloudFront, and which by an ALB?',
    hint: 'One is global, one is regional.',
    back: '<strong>CloudFront</strong>: the certificate must be in <strong>us-east-1</strong> (N. Virginia), whatever Region the origin runs in. <strong>ALB, NLB, API Gateway regional endpoints</strong>: the certificate must be in the <strong>same Region</strong> as the resource. ACM certificates are regional resources, so a multi-Region app needs a certificate per Region plus one in us-east-1 for CloudFront.',
    tags: ['ACM', 'CloudFront', 'Regions']
  },
  {
    id: 'aws-soa-fc-378',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What conditions must hold for ACM to renew an issued public certificate automatically?',
    hint: 'Two conditions: usage and proof of control.',
    back: 'The certificate must be <strong>in use</strong> (associated with an integrated service such as ELB, CloudFront or API Gateway) and ACM must be able to <strong>revalidate every domain</strong>: for DNS validation the CNAME record must still resolve; for email validation someone must approve the renewal email. Unused certificates are not renewed. <strong>Imported certificates are never renewed</strong> by ACM; you re-import a new one onto the same ARN.',
    tags: ['ACM', 'Certificate renewal']
  },
  {
    id: 'aws-soa-fc-379',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you get warned before an ACM certificate (including an imported one) expires?',
    hint: 'An event, a managed rule, and a metric.',
    back: 'ACM sends a daily <strong>ACM Certificate Approaching Expiration</strong> event to EventBridge, starting 45 days out by default (tunable with the account-level <code>DaysBeforeExpiry</code> setting); route it to SNS. ACM also publishes the CloudWatch metric <strong>DaysToExpiry</strong> for alarms, and the AWS Config managed rule <strong>acm-certificate-expiration-check</strong> flags certificates inside a chosen window.',
    tags: ['ACM', 'EventBridge', 'Monitoring']
  },
  {
    id: 'aws-soa-fc-380',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What controls which TLS versions and ciphers an ALB or NLB TLS listener accepts?',
    hint: 'It is chosen per listener by name.',
    back: 'The listener\'s <strong>security policy</strong>, a predefined set of protocols and ciphers such as <code>ELBSecurityPolicy-TLS13-1-2-2021-06</code> (TLS 1.3 and 1.2, the console default) or FIPS and TLS 1.3-only variants. Changing the policy is the way to drop TLS 1.0/1.1. Security groups, WAF and the certificate itself do not restrict the negotiated protocol version.',
    tags: ['ELB', 'TLS', 'Security policy']
  },
  {
    id: 'aws-soa-fc-381',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'NLB with a TLS listener vs NLB with a TCP listener on 443: where does TLS terminate?',
    hint: 'Only one of them needs a certificate on the load balancer.',
    back: '<strong>TLS listener</strong>: the NLB terminates TLS using an ACM certificate, offloading the handshake, and can optionally re-encrypt to a TLS target group. <strong>TCP listener</strong>: the NLB passes encrypted bytes straight through, so TLS terminates on the target, which holds the certificate; use this when the target must see the original TLS session or perform mutual TLS itself.',
    tags: ['NLB', 'TLS', 'Encryption in transit']
  },
  {
    id: 'aws-soa-fc-382',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'CloudFront viewer protocol policy vs origin protocol policy: what does each govern?',
    hint: 'Two legs of the journey.',
    back: '<strong>Viewer protocol policy</strong> (per cache behavior): viewer to CloudFront; options are HTTP and HTTPS, <strong>Redirect HTTP to HTTPS</strong>, or HTTPS only. <strong>Origin protocol policy</strong> (per custom origin): CloudFront to origin; HTTP only, HTTPS only, or match viewer. For end-to-end encryption set both to HTTPS, and the origin must present a certificate trusted by a public CA that matches the origin domain name.',
    tags: ['CloudFront', 'HTTPS']
  },
  {
    id: 'aws-soa-fc-383',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'ALB mutual TLS: passthrough mode vs verify mode.',
    hint: 'Who checks the client certificate?',
    back: '<strong>Passthrough</strong>: the ALB accepts any client certificate chain and forwards it to targets in the <code>X-Amzn-Mtls-Clientcert</code> header; the application does the validation. <strong>Verify</strong>: the ALB validates the client certificate against a <strong>trust store</strong> of CA certificates (and optional revocation lists) and rejects failures itself. Either way mTLS authenticates clients; it does not change backend encryption.',
    tags: ['ALB', 'Mutual TLS']
  },
  {
    id: 'aws-soa-fc-384',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'When do you need AWS Private CA instead of public ACM certificates?',
    hint: 'Think about names a public CA cannot validate.',
    back: 'Use <strong>AWS Private CA</strong> when certificates are for <strong>internal names</strong> (private hosted zones, <code>.internal</code> domains), for <strong>client or device identity</strong> (mTLS, IoT), or when you must control the CA hierarchy. Private certificates requested through ACM from the CA can be attached to ELB and are renewed by ACM. Public ACM certificates need a publicly validatable domain and are trusted by browsers; private ones are trusted only where you distribute the root.',
    tags: ['AWS Private CA', 'ACM']
  },
  {
    id: 'aws-soa-fc-385',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you force every request to an S3 bucket to use HTTPS?',
    hint: 'A condition key that is true or false per request.',
    back: 'Add a bucket policy statement with <strong>Effect: Deny</strong>, Principal <code>*</code>, Action <code>s3:*</code> on the bucket and its objects, with the condition <code>"Bool": {"aws:SecureTransport": "false"}</code>. The explicit deny beats any allow. Default encryption and Block Public Access do not affect transport; the AWS Config rule <strong>s3-bucket-ssl-requests-only</strong> checks buckets for this policy.',
    tags: ['S3', 'Encryption in transit']
  },
  {
    id: 'aws-soa-fc-386',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you make an RDS database reject unencrypted connections, by engine?',
    hint: 'A parameter group setting, and its name differs by engine.',
    back: '<strong>PostgreSQL</strong>: set <code>rds.force_ssl = 1</code> (default 1 from PostgreSQL 15). <strong>MySQL / MariaDB</strong>: set <code>require_secure_transport = ON</code>, or require SSL per user. <strong>SQL Server</strong>: set <code>rds.force_ssl = 1</code> and reboot. <strong>Oracle</strong>: add the SSL option to an option group. Encryption at rest is a separate setting and does nothing for connections.',
    tags: ['RDS', 'TLS']
  },
  {
    id: 'aws-soa-fc-387',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Secrets Manager vs Parameter Store SecureString: how do you choose?',
    hint: 'Rotation and cross-Region copies are the tie-breakers.',
    back: '<strong>Secrets Manager</strong>: built-in <strong>rotation</strong> (managed or Lambda), multi-Region <strong>replication</strong>, resource policies for cross-account access, 64 KB values, priced per secret and per API call. <strong>Parameter Store</strong>: hierarchical config and secrets, SecureString encryption with KMS, standard tier free, no native rotation. Choose Secrets Manager for credentials that must rotate; Parameter Store for configuration and static values.',
    tags: ['Secrets Manager', 'Parameter Store']
  },
  {
    id: 'aws-soa-fc-388',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Parameter Store standard vs advanced tier: what does advanced add?',
    hint: 'Size, count, and policies.',
    back: '<strong>Standard</strong>: values up to <strong>4 KB</strong>, up to 10,000 parameters per account and Region, no charge for storage, no parameter policies. <strong>Advanced</strong>: values up to <strong>8 KB</strong>, up to 100,000 parameters, <strong>parameter policies</strong> (Expiration, ExpirationNotification, NoChangeNotification), and sharing with other accounts, billed per parameter per month. A standard parameter can be upgraded; an advanced one cannot be downgraded.',
    tags: ['Parameter Store', 'Advanced parameters']
  },
  {
    id: 'aws-soa-fc-389',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What do the AWSCURRENT, AWSPENDING and AWSPREVIOUS staging labels mean in Secrets Manager?',
    hint: 'They move during the four rotation steps.',
    back: '<strong>AWSCURRENT</strong>: the version applications should use; GetSecretValue returns it by default. <strong>AWSPENDING</strong>: the new version created during rotation (createSecret), set in the database (setSecret) and tested (testSecret). At finishSecret, AWSCURRENT moves to the new version and the old one gets <strong>AWSPREVIOUS</strong>, which is how you roll back. Applications should never read AWSPENDING.',
    tags: ['Secrets Manager', 'Rotation']
  },
  {
    id: 'aws-soa-fc-390',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Single-user vs alternating-users rotation: when does each fit?',
    hint: 'Does the old password keep working?',
    back: '<strong>Single user</strong>: one database user whose password is changed in place; simple, but connections opened with the old password can fail briefly, so it suits apps that retry or reconnect gracefully. <strong>Alternating users</strong>: a separate superuser secret lets rotation switch between two users (the second a clone with <code>_clone</code> appended), so the previous credentials stay valid until the next rotation. Pick it for high availability workloads.',
    tags: ['Secrets Manager', 'Rotation strategy']
  },
  {
    id: 'aws-soa-fc-391',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What does managed rotation for an RDS master user password give you?',
    hint: 'Set one flag on the DB instance.',
    back: 'With <code>ManageMasterUserPassword</code> enabled, RDS creates and owns a Secrets Manager secret for the master user and rotates it on a schedule (7 days by default) using <strong>managed rotation</strong>, so there is no rotation Lambda function to deploy, patch or give network access. You can change the schedule and KMS key, but you cannot edit the rotation logic. Application users still need their own secrets with Lambda-based rotation.',
    tags: ['Secrets Manager', 'RDS', 'Managed rotation']
  },
  {
    id: 'aws-soa-fc-392',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'A rotation Lambda function runs in a VPC. What network access does it need?',
    hint: 'It talks to two things.',
    back: 'It must reach <strong>the database</strong> (security group rules on the DB port) and <strong>the Secrets Manager API</strong>. In private subnets without a NAT gateway, add an <strong>interface VPC endpoint</strong> for <code>secretsmanager</code> with private DNS and allow HTTPS from the function. Symptoms of a missing path: the function times out at createSecret. A function outside the VPC reaches the API but loses the private database.',
    tags: ['Secrets Manager', 'Lambda', 'VPC endpoints']
  },
  {
    id: 'aws-soa-fc-393',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How are secrets injected into an ECS task, and which role needs the permission?',
    hint: 'Before the container starts versus after.',
    back: 'In the container definition, <code>secrets</code> entries with <code>valueFrom</code> point to a Secrets Manager ARN or Parameter Store parameter; the ECS agent fetches them at launch and sets them as environment variables. The <strong>task execution role</strong> needs <code>secretsmanager:GetSecretValue</code> or <code>ssm:GetParameters</code>, plus <code>kms:Decrypt</code> for a customer managed key. The <strong>task role</strong> is only for calls the app makes at runtime.',
    tags: ['ECS', 'Secrets Manager', 'IAM']
  },
  {
    id: 'aws-soa-fc-394',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What happens when you delete a Secrets Manager secret, and how do you undo it?',
    hint: 'Deletion is scheduled, not immediate.',
    back: 'The secret is <strong>scheduled for deletion</strong> after a recovery window of <strong>7 to 30 days</strong> (default 30). During the window it cannot be read and its name cannot be reused, but <strong>RestoreSecret</strong> cancels the deletion and brings back the same ARN and versions. <code>ForceDeleteWithoutRecovery</code> skips the window and cannot be undone.',
    tags: ['Secrets Manager', 'Recovery']
  },
  {
    id: 'aws-soa-fc-395',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'GuardDuty, Inspector, Config, Security Hub: which question does each answer?',
    hint: 'Threats, vulnerabilities, configuration, and the roll-up.',
    back: '<strong>GuardDuty</strong>: is something malicious happening? (threat detection from CloudTrail, VPC flow logs, DNS logs, runtime data). <strong>Inspector</strong>: what software vulnerabilities and network exposure do my EC2, ECR images and Lambda functions have? <strong>Config</strong>: are my resources configured the way my rules require, and how did they change? <strong>Security Hub</strong>: one prioritized view of all findings plus security standard controls.',
    tags: ['Security Hub', 'GuardDuty', 'Inspector', 'AWS Config']
  },
  {
    id: 'aws-soa-fc-396',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'GuardDuty trusted IP list vs suppression rule: what is the difference in outcome?',
    hint: 'Is a finding created at all?',
    back: '<strong>Trusted IP list</strong>: GuardDuty generates <strong>no findings</strong> for traffic from those addresses (for supported data sources), so nothing is recorded. <strong>Suppression rule</strong>: findings are still generated but <strong>automatically archived</strong> when they match the filter, so they stay searchable and are not sent to Security Hub, S3 exports or EventBridge. Choose suppression when auditors want a record.',
    tags: ['GuardDuty', 'Suppression rules']
  },
  {
    id: 'aws-soa-fc-397',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Amazon Inspector EC2 scanning: agent-based vs hybrid (agentless) mode.',
    hint: 'What happens to instances that are not SSM managed?',
    back: '<strong>Agent-based</strong>: Inspector uses the <strong>SSM Agent</strong> to collect inventory, so only SSM managed instances (instance profile with AmazonSSMManagedInstanceCore, reachable SSM endpoints) are scanned; others show as unmanaged. <strong>Hybrid</strong>: SSM managed instances are still scanned by agent, and instances without it are scanned <strong>agentlessly</strong> from EBS snapshots Inspector takes. Coverage and scan status show on the Inspector coverage page.',
    tags: ['Amazon Inspector', 'EC2', 'Systems Manager']
  },
  {
    id: 'aws-soa-fc-398',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Security Hub automation rules vs custom actions vs EventBridge rules on imported findings.',
    hint: 'Change a field, let a human push a button, or react to everything.',
    back: '<strong>Automation rules</strong>: update or suppress findings inside Security Hub (severity, workflow status, notes) as they arrive; they cannot call functions. <strong>Custom actions</strong>: an analyst selects findings and sends them to EventBridge as <em>Security Hub Findings - Custom Action</em> events. <strong>EventBridge rules on Security Hub Findings - Imported</strong>: fully automatic response to every matching new or updated finding.',
    tags: ['Security Hub', 'EventBridge', 'Automation']
  },
  {
    id: 'aws-soa-fc-399',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'AWS Config remediation: what does an automatic remediation need to work?',
    hint: 'A runbook, an identity, and a parameter mapping.',
    back: 'A <strong>Systems Manager Automation runbook</strong> (AWS-managed such as <code>AWS-DisablePublicAccessForSecurityGroup</code> or custom), an <strong>IAM role</strong> the runbook assumes (passed as <code>AutomationAssumeRole</code>), and a parameter mapped to the noncompliant <strong>resource ID</strong>. Set it to automatic with a retry count and time window, or leave it manual so an operator starts it from the rule. Executions are tracked against the rule.',
    tags: ['AWS Config', 'Auto remediation']
  },
  {
    id: 'aws-soa-fc-400',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'GuardDuty reports role credentials used from outside AWS. What are the first containment steps?',
    hint: 'Temporary credentials cannot be deleted, but they can be denied.',
    back: 'Use the role\'s <strong>Revoke active sessions</strong> action, which attaches the <code>AWSRevokeOlderSessions</code> inline policy denying tokens issued before now; the instance fetches fresh credentials from IMDS. Then enforce <strong>IMDSv2</strong>, review CloudTrail for what the stolen credentials did, and investigate how they leaked (SSRF is common). Stopping the instance or detaching the profile does not invalidate tokens already issued.',
    tags: ['GuardDuty', 'IAM', 'Incident response']
  }
];

export default AWS_SOA_FLASHCARDS_16;
