export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-226',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you distribute shared configuration to many accounts?',
    hint: 'Push it, do not let teams copy it.',
    back: 'For infrastructure, <strong>StackSets with service-managed permissions</strong> so new accounts inherit it. For runtime values, publish to <strong>Parameter Store</strong> or AppConfig in a shared account and grant cross-account read, or replicate via EventBridge. The anti-pattern is a wiki page teams copy from — it drifts the day after it is written.',
    tags: ['StackSets', 'Parameter Store', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-227',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you keep a build pipeline\'s AWS credentials short-lived?',
    hint: 'OIDC federation, no stored keys.',
    back: 'Register the CI provider (GitHub Actions, GitLab) as an <strong>OIDC identity provider</strong> and let the job assume a role, with the trust policy conditioned on <code>sub</code> so only the intended <strong>repository, branch or environment</strong> can assume it. No long-lived access keys in secrets at all. CodeBuild and CodePipeline use service roles natively.',
    tags: ['IAM', 'OIDC', 'CI/CD']
  },
  {
    id: 'aws-sap-fc-228',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you restrict an S3 bucket to one organization?',
    hint: 'One condition key.',
    back: 'A bucket policy denying access unless <strong><code>aws:PrincipalOrgID</code> equals your organization ID</strong> — which automatically covers accounts added later, unlike listing account IDs. Strengthen it with <code>aws:SourceVpce</code> to require your endpoints, and enforce it organization-wide with an <strong>RCP</strong> so no bucket owner can opt out.',
    tags: ['S3', 'Data Perimeter', 'Condition Keys']
  },
  {
    id: 'aws-sap-fc-229',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you share a KMS key across accounts for replication?',
    hint: 'Two policies and a grant.',
    back: 'The <strong>key policy</strong> must allow the other account (or the replication role) the needed operations, the caller needs a matching <strong>IAM policy</strong>, and cross-Region S3 replication needs keys in <em>both</em> Regions — which is why <strong>multi-Region keys</strong> simplify this. Scope with <code>kms:ViaService</code> so the key is usable only through the intended service.',
    tags: ['KMS', 'Cross-Account', 'Replication']
  },
  {
    id: 'aws-sap-fc-230',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you reduce the cost of cross-account log aggregation?',
    hint: 'Do not send everything to Logs.',
    back: 'Send high-volume logs <strong>straight to S3 in the log archive account via Firehose</strong> (or native CloudTrail/Flow Log delivery) and query with Athena, keeping CloudWatch Logs for what genuinely needs alarms and live tailing. Compress and partition, drop unused fields with a Firehose transform, and set retention per log group.',
    tags: ['CloudWatch Logs', 'Firehose', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-231',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What is a Route 53 Profile for?',
    hint: 'DNS configuration as a shareable unit.',
    back: 'It bundles <strong>private hosted zone associations, Resolver rules and DNS Firewall rule groups</strong> into one object you share with RAM and attach to many VPCs across accounts — so a new VPC inherits the whole DNS posture instead of needing a dozen individual associations. It replaces a lot of custom automation in large landing zones.',
    tags: ['Route 53', 'Profiles', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-232',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you pick a compute model for bursty batch jobs?',
    hint: 'Let the scheduler own capacity.',
    back: '<strong>AWS Batch</strong> with a Spot compute environment for long or heavy jobs — it queues, retries and scales capacity to zero between bursts. <strong>Lambda</strong> where each unit finishes inside 15 minutes and fits the memory ceiling. <strong>ECS or EKS scheduled tasks</strong> where you already run containers. Never a permanently-sized fleet sized for the peak.',
    tags: ['AWS Batch', 'Spot', 'Compute']
  },
  {
    id: 'aws-sap-fc-233',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you run scheduled work reliably?',
    hint: 'Cron on one instance is a single point of failure.',
    back: '<strong>EventBridge Scheduler</strong> (or a rule) triggering Lambda, a Step Functions state machine, or an ECS task — managed, with retry policy, a DLQ, flexible time windows and time-zone support. Make the job <strong>idempotent</strong>, because at-least-once invocation is the contract, and alarm on <em>absence</em> of a successful run, not just on failure.',
    tags: ['EventBridge Scheduler', 'Reliability', 'Serverless']
  },
  {
    id: 'aws-sap-fc-234',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you give a container task its own permissions?',
    hint: 'Two roles, easily confused.',
    back: 'The <strong>task role</strong> is what the application code uses to call AWS APIs — one per service, least privilege. The <strong>task execution role</strong> is what the ECS agent uses to pull the image from ECR, fetch secrets and write logs. Putting application permissions on the execution role, or using the instance role, gives every container the same access.',
    tags: ['ECS', 'Task Role', 'IAM']
  },
  {
    id: 'aws-sap-fc-235',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you secure traffic between containers?',
    hint: 'Identity, not just network position.',
    back: 'Give each service its own <strong>task role and security group</strong>, and reference security groups rather than CIDRs so rules follow the workload. For cryptographic identity use <strong>mTLS</strong> — App Mesh or a service mesh with certificates from <strong>Private CA</strong> — so a compromised pod cannot impersonate another. ECS <strong>Service Connect</strong> handles discovery and TLS with less machinery.',
    tags: ['Containers', 'mTLS', 'Security']
  },
  {
    id: 'aws-sap-fc-236',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Where should configuration live for a container workload?',
    hint: 'Not baked into the image.',
    back: 'Non-secret values in <strong>Parameter Store or AppConfig</strong>, secrets in <strong>Secrets Manager</strong>, both injected as environment variables or files by the task definition\'s <code>secrets</code> block at start-up. Baking configuration into the image means a rebuild per environment and secrets in layer history — which is how credentials end up in a registry.',
    tags: ['Containers', 'Configuration', 'Secrets Manager']
  },
  {
    id: 'aws-sap-fc-237',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design a system that degrades rather than fails?',
    hint: 'Decide what to drop in advance.',
    back: 'Classify features as <strong>critical or optional</strong>, then make optional dependencies fail open — serve stale cache, hide the recommendations panel, queue the non-urgent write. Add <strong>load shedding</strong> that rejects low-priority work early, <strong>bulkheads</strong> so one dependency cannot exhaust all threads, and a <strong>static fallback</strong> page at the edge. Then test it with FIS.',
    tags: ['Graceful Degradation', 'Resilience', 'Architecture']
  },
  {
    id: 'aws-sap-fc-238',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does a Nitro Enclave protect against?',
    hint: 'Your own operators.',
    back: 'It carves an isolated, hardened VM out of an EC2 instance with <strong>no persistent storage, no interactive access and no external networking</strong> — only a local vsock channel — so highly sensitive processing is shielded even from a root user on the parent instance. <strong>Cryptographic attestation</strong> lets KMS release a key only to a verified enclave image.',
    tags: ['Nitro Enclaves', 'Security', 'Confidential Computing']
  },
  {
    id: 'aws-sap-fc-239',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find which change caused an incident?',
    hint: 'Correlate a timeline.',
    back: 'Overlay the incident window with <strong>Config resource timelines</strong>, <strong>CloudTrail write events</strong>, deployment records from CodeDeploy or your pipeline, and <strong>CloudWatch anomaly detection bands</strong>. <strong>DevOps Guru</strong> will surface correlated anomalies automatically. The durable fix is tagging deployments and emitting a deployment marker onto dashboards.',
    tags: ['Config', 'CloudTrail', 'Incident Response']
  },
  {
    id: 'aws-sap-fc-240',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you detect drift in infrastructure as code?',
    hint: 'Two levels of detection.',
    back: '<strong>CloudFormation drift detection</strong> per stack (and StackSet drift across accounts) compares deployed resources with the template. <strong>Config rules</strong> catch resources nobody declared at all. Prevent rather than detect: remove human write access in production, use <strong>CloudFormation Hooks</strong> or Control Tower proactive controls, and deploy only through the pipeline.',
    tags: ['CloudFormation', 'Drift', 'Config']
  },
  {
    id: 'aws-sap-fc-241',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make a deployment reversible?',
    hint: 'Data is the hard part.',
    back: 'Keep releases <strong>backward and forward compatible</strong>: expand-then-contract schema changes, additive API versions, and feature flags so behaviour is switched off without a redeploy. Then blue/green or canary gives instant traffic rollback. A migration that drops a column makes rollback impossible however good the deployment tooling is.',
    tags: ['Deployment', 'Rollback', 'Schema Migration']
  },
  {
    id: 'aws-sap-fc-242',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce risk from a manual production change?',
    hint: 'Remove the ability, not the intent.',
    back: 'Take away standing write access — <strong>read-only by default, elevation through an approved, time-bound role</strong> — and route changes through the pipeline. For genuine emergencies, an <strong>SSM Automation runbook with an approval step</strong> gives a logged, parameterised path. Alarm on every console write in production so exceptions are visible.',
    tags: ['Change Management', 'IAM', 'Operations']
  },
  {
    id: 'aws-sap-fc-243',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle a quota that cannot be raised?',
    hint: 'Design around it.',
    back: 'Confirm it is a <strong>hard quota</strong> in Service Quotas, then <strong>shard across the quota boundary</strong> — more accounts, more Regions, more shards or partitions — and add <strong>client-side rate limiting and backpressure</strong> so you degrade instead of erroring. Monitor utilisation as a metric with an alarm well below the ceiling, not after the throttling starts.',
    tags: ['Service Quotas', 'Scaling', 'Resilience']
  },
  {
    id: 'aws-sap-fc-244',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why does a dependency that fails slowly hurt more than one that fails fast?',
    hint: 'Thread and connection exhaustion.',
    back: 'Slow responses hold connections, threads and Lambda concurrency open, so the caller\'s capacity drains and the failure spreads to unrelated requests — a fast error would have been shed harmlessly. Defend with <strong>aggressive timeouts (well below the client\'s), bulkheads, circuit breakers and concurrency caps</strong>. Always set a timeout shorter than the caller\'s patience.',
    tags: ['Timeouts', 'Resilience', 'Bulkhead']
  },
  {
    id: 'aws-sap-fc-245',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you make incident reviews produce change?',
    hint: 'Blameless, with owned actions.',
    back: 'Run them <strong>blameless</strong> and focused on contributing factors and missing safeguards, not individuals. Each review yields a small number of <strong>owned, dated, prioritised actions in the normal backlog</strong>, and you track completion. Publish the review internally. A postmortem whose actions are never scheduled converts an outage into paperwork.',
    tags: ['Incident Review', 'Operational Excellence', 'Culture']
  },
  {
    id: 'aws-sap-fc-246',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep audit continuity through a migration?',
    hint: 'The old evidence still matters.',
    back: 'Export the legacy audit trail to <strong>S3 with Object Lock</strong> before decommissioning, document the <strong>chain of custody and the cut-over timestamp</strong>, and stand up the AWS trail (organization CloudTrail, Config) <em>before</em> the first workload moves so there is no gap. Agree retention with compliance up front — it usually outlives the source system.',
    tags: ['Auditing', 'Object Lock', 'Compliance']
  },
  {
    id: 'aws-sap-fc-247',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate object storage permissions faithfully?',
    hint: 'ACLs do not translate.',
    back: 'Map the source\'s per-object ACLs to an <strong>S3 bucket policy plus prefix design and IAM roles</strong>, because S3 now discourages object ACLs entirely (Object Ownership enforced, ACLs disabled). Where consumers need distinct scoped access to different prefixes, use <strong>S3 Access Points</strong> — one policy per consumer rather than one giant bucket policy.',
    tags: ['S3', 'Access Points', 'Migration']
  },
  {
    id: 'aws-sap-fc-248',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep file permissions through a file-share migration?',
    hint: 'Use a protocol-aware tool.',
    back: '<strong>DataSync</strong> in SMB or NFS mode preserves <strong>ACLs, ownership, timestamps and symlinks</strong>, and verifies what it copied. A generic object copy flattens all of that, which surfaces weeks later as a permissions incident. Choose the target to match the protocol: FSx for Windows for SMB, EFS or FSx for Lustre/ONTAP for NFS.',
    tags: ['DataSync', 'FSx', 'Migration']
  },
  {
    id: 'aws-sap-fc-249',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you decide how much to change during a migration?',
    hint: 'Change one variable at a time.',
    back: 'Keep the change surface small for the move itself — <strong>rehost or replatform first, then modernise once it is stable in AWS</strong> — because a simultaneous rewrite makes any problem ambiguous between the new platform and the new code. The exception is a change that <em>unblocks</em> the move, such as an unsupported database version.',
    tags: ['Migration Strategies', 'Risk', 'Modernization']
  },
  {
    id: 'aws-sap-fc-250',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you reduce cost straight after a rehost?',
    hint: 'Lift and shift leaves the old shape behind.',
    back: 'On-premises sizing reflects a three-year hardware purchase, so: <strong>right-size with Compute Optimizer</strong>, move gp2 volumes to <strong>gp3</strong>, delete orphaned snapshots and volumes, <strong>schedule non-production off</strong>, then apply <strong>Savings Plans</strong> to the baseline once it has settled. Commit <em>after</em> right-sizing, or you lock in the oversized shape.',
    tags: ['Cost Optimization', 'Right-Sizing', 'Post-Migration']
  }
];

export default AWS_SAP_FLASHCARDS;
