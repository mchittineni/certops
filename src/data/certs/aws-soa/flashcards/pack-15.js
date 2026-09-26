export const AWS_SOA_FLASHCARDS_15 = [
  {
    id: 'aws-soa-fc-351',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What are the building blocks of AWS Config?',
    hint: 'Record, deliver, evaluate, aggregate.',
    back: 'The <strong>configuration recorder</strong> records configuration items for chosen resource types in one Region. The <strong>delivery channel</strong> sends configuration history and snapshots to an S3 bucket and optionally notifications to SNS. <strong>Config rules</strong> evaluate resources as compliant or noncompliant. <strong>Conformance packs</strong> bundle rules. <strong>Aggregators</strong> collect data from many accounts and Regions into one. Config is Regional, so a recorder is needed in every Region you want covered.',
    tags: ['AWS Config']
  },
  {
    id: 'aws-soa-fc-352',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'AWS Config managed rules vs custom rules: what are the options?',
    hint: 'AWS-written, Lambda, or Guard.',
    back: '<strong>Managed rules</strong> are predefined by AWS (for example <code>encrypted-volumes</code>, <code>required-tags</code>, <code>s3-bucket-public-read-prohibited</code>) and accept parameters. <strong>Custom Lambda rules</strong> run your function to evaluate resources, for any logic you can code. <strong>Custom policy rules</strong> are written in <strong>CloudFormation Guard</strong> syntax and evaluated by Config without a Lambda function. All can be packaged into conformance packs.',
    tags: ['AWS Config', 'Config rules']
  },
  {
    id: 'aws-soa-fc-353',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Config rule trigger types and evaluation modes: what are they?',
    hint: 'On change, on a clock, or before deployment.',
    back: '<strong>Configuration change</strong> triggers evaluate when Config records a change to in-scope resources (scope by type, tag or ID). <strong>Periodic</strong> triggers run every 1, 3, 6, 12 or 24 hours, for checks that are not tied to a resource change. A rule can use both. Evaluation mode is <strong>detective</strong> (existing resources) and, for supported rules, <strong>proactive</strong>, which evaluates a resource configuration before it is deployed, for example from a CloudFormation hook.',
    tags: ['AWS Config', 'Config rules']
  },
  {
    id: 'aws-soa-fc-354',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Conformance pack vs organization conformance pack?',
    hint: 'One account, or every account in the org.',
    back: 'A <strong>conformance pack</strong> is a YAML template of Config rules (and optional remediation actions) deployed as one unit in an account and Region, with a <strong>compliance score</strong>. An <strong>organization conformance pack</strong> is deployed from the management account or a Config delegated administrator to all member accounts, including new ones. AWS provides sample templates such as Operational Best Practices for PCI DSS, HIPAA and CIS benchmarks.',
    tags: ['AWS Config', 'Conformance packs']
  },
  {
    id: 'aws-soa-fc-355',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do AWS Config advanced queries help with compliance audits?',
    hint: 'SQL over the current configuration.',
    back: 'Advanced queries use a <strong>SQL SELECT</strong> subset over the <strong>current</strong> configuration state of recorded resources, for example listing all EBS volumes where <code>configuration.encrypted = false</code> or counting instances by type. Run them in one account or against an <strong>aggregator</strong> to query every account and Region at once. They do not query history; for past states, use each resource\'s configuration timeline.',
    tags: ['AWS Config', 'Advanced queries']
  },
  {
    id: 'aws-soa-fc-356',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What are the ways to keep workloads inside approved Regions?',
    hint: 'Prevent with policy, reduce the surface, detect the rest.',
    back: '<strong>Prevent</strong>: an SCP denying actions when <code>aws:RequestedRegion</code> is not approved, with <code>NotAction</code> exemptions for global services; AWS Control Tower offers this as the Region deny control. <strong>Reduce</strong>: leave <strong>opt-in Regions</strong> disabled. <strong>Detect</strong>: Config aggregator queries or Security Hub findings for resources in unexpected Regions. Default Regions cannot be disabled, so the SCP is the real control.',
    tags: ['SCP', 'Data residency', 'Regions']
  },
  {
    id: 'aws-soa-fc-357',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What is an opt-in Region?',
    hint: 'Newer Regions start switched off.',
    back: 'Regions introduced after March 2019, such as af-south-1 or ap-east-1, are <strong>disabled by default</strong> and must be enabled per account (or centrally through AWS Organizations) before resources can be created there. Disabling an opt-in Region stops new resource creation and use there, reducing attack surface. Regions that were available earlier are always enabled and cannot be disabled.',
    tags: ['Regions', 'Account settings']
  },
  {
    id: 'aws-soa-fc-358',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'AWS Control Tower controls: preventive vs detective vs proactive?',
    hint: 'Block, notice, or check before creation.',
    back: '<strong>Preventive</strong> controls block actions, implemented as SCPs, RCPs or declarative policies (for example deny changes to CloudTrail). <strong>Detective</strong> controls report noncompliance using AWS Config rules (for example unencrypted volumes). <strong>Proactive</strong> controls check resources before provisioning through CloudFormation hooks and fail noncompliant stack operations. Controls are also labeled mandatory, strongly recommended or elective and apply per OU.',
    tags: ['Control Tower', 'Guardrails']
  },
  {
    id: 'aws-soa-fc-359',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'AWS Audit Manager vs AWS Artifact vs AWS Config: which proves what?',
    hint: 'Your controls, AWS\'s controls, your resources.',
    back: '<strong>Audit Manager</strong> continuously collects evidence of <strong>your</strong> controls from Config, CloudTrail, Security Hub and others, mapped to frameworks like SOC 2 or PCI DSS, and produces assessment reports. <strong>Artifact</strong> provides <strong>AWS\'s</strong> own compliance reports and agreements (SOC reports, ISO certificates, BAA). <strong>Config</strong> evaluates and records the compliance of <strong>resource configurations</strong> and is one of Audit Manager\'s evidence sources.',
    tags: ['Audit Manager', 'AWS Artifact', 'AWS Config']
  },
  {
    id: 'aws-soa-fc-360',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you implement a data classification scheme with AWS services?',
    hint: 'Label, discover, enforce, monitor.',
    back: '<strong>Label</strong> resources with a classification tag, standardized by <strong>tag policies</strong> and required by SCP conditions on <code>aws:RequestTag</code>. <strong>Discover</strong> unlabeled sensitive data with <strong>Amazon Macie</strong>. <strong>Enforce</strong> handling per class with ABAC policies on tags, encryption with class-specific KMS keys, and S3 Block Public Access. <strong>Monitor</strong> with Config rules such as <code>required-tags</code> and Macie findings routed through EventBridge.',
    tags: ['Data classification', 'Tagging']
  },
  {
    id: 'aws-soa-fc-361',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What kinds of findings does Amazon Macie produce?',
    hint: 'One about the bucket, one about the contents.',
    back: '<strong>Policy findings</strong> describe the security or privacy of an S3 bucket itself, such as public access, shared with an external account, or default encryption disabled; Macie generates them from bucket metadata continuously. <strong>Sensitive data findings</strong> report objects containing sensitive data, from automated discovery or classification jobs, with the data types and counts found. Findings go to the Macie console, EventBridge and optionally Security Hub.',
    tags: ['Amazon Macie', 'Findings']
  },
  {
    id: 'aws-soa-fc-362',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Macie automated sensitive data discovery vs sensitive data discovery jobs?',
    hint: 'Sampling everywhere vs targeted full scans.',
    back: '<strong>Automated discovery</strong> continuously samples representative objects across all buckets in the account or organization, including new buckets, and maintains a <strong>sensitivity score</strong> per bucket with predictable cost. <strong>Discovery jobs</strong> are one-time or scheduled scans you define for specific buckets, with scope criteria and sampling depth up to every object; use them for deep investigations or compliance scans of known data stores.',
    tags: ['Amazon Macie', 'Automated discovery']
  },
  {
    id: 'aws-soa-fc-363',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What can Organizations tag policies enforce, and what can they not?',
    hint: 'Spelling and values, but not presence.',
    back: 'Tag policies standardize <strong>tag keys (including capitalization)</strong> and <strong>allowed values</strong>, report noncompliant resources, and with <strong>enforcement</strong> enabled for specific resource types, block tagging operations that use noncompliant values. They <strong>do not require</strong> that a tag exists, and they do not retroactively fix existing tags. Pair them with an SCP that denies create actions when <code>aws:RequestTag/key</code> is null to make the tag mandatory.',
    tags: ['Tag policies', 'AWS Organizations']
  },
  {
    id: 'aws-soa-fc-364',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'AWS owned vs AWS managed vs customer managed KMS keys?',
    hint: 'Who controls the policy and rotation?',
    back: '<strong>AWS owned keys</strong>: used by a service across many accounts; invisible to you, free, no control. <strong>AWS managed keys</strong> (<code>aws/s3</code>, <code>aws/ebs</code>): created in your account for one service; you can see and audit them but cannot change their policy or rotation (yearly), and they cannot be used cross-account. <strong>Customer managed keys</strong>: you control key policy, grants, rotation period, deletion and cross-account use.',
    tags: ['KMS', 'Key types']
  },
  {
    id: 'aws-soa-fc-365',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What is envelope encryption, and why does KMS use it?',
    hint: 'A key to encrypt the key.',
    back: 'KMS keys encrypt at most <strong>4 KB</strong> directly, so services call <code>GenerateDataKey</code> to get a <strong>data key</strong> in plaintext and encrypted form. Data is encrypted locally with the plaintext data key, which is then discarded, and the <strong>encrypted data key</strong> is stored with the data. To read, the service calls <code>Decrypt</code> on the data key. Large data never travels to KMS, and access to the KMS key controls access to everything.',
    tags: ['KMS', 'Envelope encryption']
  },
  {
    id: 'aws-soa-fc-366',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Symmetric vs asymmetric vs HMAC KMS keys: when do you use each?',
    hint: 'Service integration, public key use, or message authentication.',
    back: '<strong>Symmetric</strong> (AES-256) keys are the default and the only type AWS services use for encryption at rest; key material never leaves KMS. <strong>Asymmetric</strong> RSA, ECC or SM2 key pairs are for signing and verification or public-key encryption where the public key is downloaded and used outside AWS. <strong>HMAC</strong> keys generate and verify message authentication codes. Only symmetric keys support automatic rotation.',
    tags: ['KMS', 'Key types']
  },
  {
    id: 'aws-soa-fc-367',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What does the default KMS key policy do, and who are key administrators vs key users?',
    hint: 'One statement makes IAM policies count.',
    back: 'The default policy gives the <strong>account root principal</strong> full access, which does not mean only the root user: it lets <strong>IAM policies</strong> in the account grant KMS permissions for the key. The console adds <strong>key administrators</strong> (manage the key, not use it: enable, disable, policy, schedule deletion) and <strong>key users</strong> (Encrypt, Decrypt, GenerateDataKey, plus grant permissions for AWS services). Remove the root statement and only principals named in the key policy can use the key.',
    tags: ['KMS', 'Key policy']
  },
  {
    id: 'aws-soa-fc-368',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What are KMS grants, and when do they matter operationally?',
    hint: 'Delegated, temporary permissions often created by services.',
    back: 'A <strong>grant</strong> gives a grantee principal permission for specific operations on a key, without editing the key policy. AWS services such as EBS, RDS and Secrets Manager create grants to use your customer managed key for your resources, which is why roles need <code>kms:CreateGrant</code>, ideally with <code>kms:GrantIsForAWSResource</code>. Grants are listed with <code>ListGrants</code>, removed with <code>RetireGrant</code> or <code>RevokeGrant</code>, and become effective after brief eventual consistency (grant tokens bridge the gap).',
    tags: ['KMS', 'Grants']
  },
  {
    id: 'aws-soa-fc-369',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'KMS key states: what can you do with a key in each?',
    hint: 'Enabled, disabled, pending deletion.',
    back: '<strong>Enabled</strong>: usable. <strong>Disabled</strong>: no cryptographic operations; re-enable any time. <strong>PendingDeletion</strong>: unusable, deleted after the <strong>7 to 30 day</strong> waiting period (default 30) unless you cancel, which returns it to Disabled. <strong>PendingImport</strong>: waiting for imported key material. Deletion is irreversible and makes all data encrypted under the key unrecoverable, so prefer disabling and alarm on use of a key pending deletion via CloudTrail.',
    tags: ['KMS', 'Key lifecycle']
  },
  {
    id: 'aws-soa-fc-370',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How does KMS key rotation work for each kind of key?',
    hint: 'Automatic, on demand, yearly, or manual.',
    back: '<strong>Customer managed symmetric keys</strong>: optional <strong>automatic rotation</strong> with a period from 90 to 2,560 days (default 365), plus a limited number of <strong>on-demand rotations</strong>; key ID and ARN stay the same and older material still decrypts existing data. <strong>AWS managed keys</strong>: rotated automatically every year. Keys that do not support automatic rotation (asymmetric, HMAC, custom key stores) are rotated <strong>manually</strong> by creating a new key and repointing an <strong>alias</strong>.',
    tags: ['KMS', 'Key rotation']
  },
  {
    id: 'aws-soa-fc-371',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What are KMS aliases for, and what are their limits?',
    hint: 'A friendly name you can move.',
    back: 'An alias such as <code>alias/app-data</code> is a friendly name that points to one key; applications can reference the alias for most cryptographic operations, so a manual rotation just <strong>repoints the alias</strong> to a new key. Aliases are <strong>Regional</strong> and per account, an alias names only one key at a time (a key can have several aliases), and names beginning <code>alias/aws/</code> are reserved for AWS managed keys. Decrypt with a symmetric key does not need the key ID at all.',
    tags: ['KMS', 'Aliases']
  },
  {
    id: 'aws-soa-fc-372',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Imported key material vs CloudHSM key store vs external key store: when would you use them?',
    hint: 'Where does the key material come from and live?',
    back: '<strong>Imported material (BYOK)</strong>: you generate the material and import it into a KMS key; you can set an expiration and delete it for immediate unavailability. <strong>AWS CloudHSM key store</strong>: key material is generated and kept in your single-tenant CloudHSM cluster. <strong>External key store (XKS)</strong>: material stays in an HSM outside AWS, reached through a proxy. Each adds operational burden and availability risk, so use them only when a regulation demands it.',
    tags: ['KMS', 'Custom key stores']
  },
  {
    id: 'aws-soa-fc-373',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'Which existing resources can be encrypted in place, and which need a copy?',
    hint: 'Some take a setting change; some are fixed at creation.',
    back: '<strong>In place</strong>: SQS queues and SNS topics (enable SSE), DynamoDB tables (switch between AWS owned, AWS managed and customer managed keys), and S3 default encryption for <strong>new</strong> objects. <strong>Copy or recreate</strong>: existing S3 objects (copy onto themselves, for example with Batch Operations), EBS volumes (snapshot, encrypted copy, new volume), RDS instances (encrypted snapshot copy, restore) and EFS file systems (new encrypted file system plus data migration).',
    tags: ['Encryption at rest', 'Migration']
  },
  {
    id: 'aws-soa-fc-374',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'What does the kms:ViaService condition key do?',
    hint: 'Use the key only through a particular service.',
    back: '<code>kms:ViaService</code> limits a key permission to requests that an AWS service makes on the principal\'s behalf, such as <code>ec2.eu-west-1.amazonaws.com</code> or <code>s3.eu-west-1.amazonaws.com</code>. A role can then use the key for EBS volumes or S3 objects but cannot call Decrypt directly from the CLI. Combine it with <code>kms:CallerAccount</code> in the key policy to scope use to one account\'s requests through that service.',
    tags: ['KMS', 'Policy conditions']
  },
  {
    id: 'aws-soa-fc-375',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd4',
    front: 'How do you troubleshoot and prevent KMS throttling?',
    hint: 'The quota is shared across keys in the Region.',
    back: 'Cryptographic operations share a <strong>per-account, per-Region request quota</strong> (the value varies by Region and can be raised through Service Quotas); exceeding it returns <code>ThrottlingException</code>, visible in CloudTrail and in CloudWatch usage metrics. Reduce calls with <strong>S3 Bucket Keys</strong>, data key caching in the AWS Encryption SDK, and batching; retry with exponential backoff. Spreading work across more keys in the same Region does not help.',
    tags: ['KMS', 'Quotas', 'Troubleshooting']
  }
];

export default AWS_SOA_FLASHCARDS_15;
