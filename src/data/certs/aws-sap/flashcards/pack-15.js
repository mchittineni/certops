export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-351',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you standardise network controls across accounts?',
    hint: 'Push policy, do not review pull requests.',
    back: '<strong>Firewall Manager policies</strong> for WAF, Shield, Network Firewall, DNS Firewall and security group baselines, applied per OU and auto-remediating; <strong>StackSets</strong> for the VPC and endpoint baseline; <strong>RAM-shared subnets</strong> so teams cannot invent their own topology. Detect the rest with Config rules rather than relying on review.',
    tags: ['Firewall Manager', 'StackSets', 'Networking']
  },
  {
    id: 'aws-sap-fc-352',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you segment a network for compliance?',
    hint: 'Accounts are the strongest boundary.',
    back: 'Use <strong>separate accounts</strong> for the regulated scope — the hardest boundary AWS offers — then <strong>TGW route table segments</strong> so the scope only reaches what it must, <strong>Network Firewall</strong> at the chokepoint for inspection and logging, and endpoint policies to bound data egress. Document the scope boundary, because auditors test the boundary, not the diagram.',
    tags: ['Segmentation', 'Compliance', 'Transit Gateway']
  },
  {
    id: 'aws-sap-fc-353',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you detect publicly exposed resources?',
    hint: 'Three complementary detectors.',
    back: '<strong>IAM Access Analyzer</strong> for policy-based exposure (buckets, roles, KMS keys, queues), <strong>Config rules</strong> for specific misconfigurations like public snapshots or open security groups, and <strong>Inspector network reachability</strong> for actual internet paths to instances. Prevent with S3 Block Public Access at the account level and an SCP that stops it being switched off.',
    tags: ['Access Analyzer', 'Config', 'Security']
  },
  {
    id: 'aws-sap-fc-354',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you block public AMI sharing across an estate?',
    hint: 'Prevent, then detect, then bound.',
    back: 'An <strong>SCP denying <code>ec2:ModifyImageAttribute</code></strong> where the launch permission would be <code>all</code>, plus the account-level <strong>block public access for AMIs</strong> setting. Detect existing exposure with a Config rule, and keep licence-bound images shared only within the organization using <code>aws:PrincipalOrgID</code> on the sharing condition.',
    tags: ['EC2', 'AMI', 'SCP']
  },
  {
    id: 'aws-sap-fc-355',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you reuse a licence-bound AMI across accounts?',
    hint: 'Share, do not copy, and track it.',
    back: 'Share the AMI (and the <strong>KMS key</strong> if encrypted) with the organization via launch permissions, keep it built once by <strong>Image Builder</strong> in a shared account, and track entitlement with <strong>License Manager</strong> rules that block a launch exceeding the licence count. Copying the AMI per account multiplies both storage and licence-tracking problems.',
    tags: ['AMI', 'License Manager', 'Multi-Account']
  },
  {
    id: 'aws-sap-fc-356',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you know where guardrails cannot reach?',
    hint: 'Map the exceptions deliberately.',
    back: 'Keep an explicit register: the <strong>management account</strong>, <strong>service-linked roles</strong>, resources shared <em>to</em> you by outsiders, anything created before the control existed, <strong>non-Organizations partner accounts</strong>, and Regions you never enabled but have not denied. Each gap needs a compensating detective control, because an SCP you assume covers everything is a false sense of safety.',
    tags: ['Organizations', 'SCP', 'Governance']
  },
  {
    id: 'aws-sap-fc-357',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you keep a landing zone current?',
    hint: 'Treat it as a product.',
    back: 'Version the baseline in code, run <strong>Control Tower landing zone updates and account re-enrolment</strong> on a cadence, monitor <strong>drift</strong>, and publish a changelog so teams know what changed. Give it an owner and a roadmap — an unmaintained landing zone diverges account by account until the guardrails describe nothing real.',
    tags: ['Control Tower', 'Landing Zone', 'Operations']
  },
  {
    id: 'aws-sap-fc-358',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose between managed and self-managed search?',
    hint: 'Count the operational surface.',
    back: '<strong>OpenSearch Service</strong> (or Serverless) unless you need a plugin or version AWS does not offer — it removes cluster upgrades, snapshotting, node replacement and shard rebalancing, which is most of the work. Self-managed on EC2 or EKS is justified by a hard dependency, not by a preference; price both including the engineer time.',
    tags: ['OpenSearch', 'Managed Services', 'Operations']
  },
  {
    id: 'aws-sap-fc-359',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you query archived logs cost-effectively?',
    hint: 'S3 plus a query engine.',
    back: 'Land them in <strong>S3 partitioned by date and source</strong>, in a columnar format where possible, and query with <strong>Athena</strong> — you pay per TB scanned rather than for a running cluster, and partitioning cuts the scan dramatically. Use <strong>CloudTrail Lake</strong> for audit history specifically, and keep only the alarm-relevant subset in CloudWatch Logs.',
    tags: ['Athena', 'S3', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-360',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you protect objects from accidental deletion?',
    hint: 'Four layers, increasing strength.',
    back: '<strong>Versioning</strong> so a delete writes a marker rather than destroying data, <strong>MFA delete</strong> on version removal, a <strong>bucket policy or SCP denying delete</strong> for all but a break-glass role, and <strong>Object Lock</strong> for genuine immutability. Add <strong>replication to another account</strong> so a compromised account cannot reach the copy.',
    tags: ['S3', 'Versioning', 'Object Lock']
  },
  {
    id: 'aws-sap-fc-361',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose storage for a machine learning training set?',
    hint: 'Throughput per epoch.',
    back: '<strong>S3</strong> as the durable source of truth, read directly or via <strong>Mountpoint</strong>. For repeated high-throughput epochs over the same data, <strong>FSx for Lustre linked to the S3 bucket</strong> gives hundreds of GB/s with lazy loading and write-back. EFS suits shared notebooks and checkpoints rather than bulk training throughput.',
    tags: ['FSx for Lustre', 'S3', 'Machine Learning']
  },
  {
    id: 'aws-sap-fc-362',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve machine learning inference with spiky demand?',
    hint: 'Match the hosting to the traffic shape.',
    back: '<strong>SageMaker Serverless Inference</strong> for intermittent traffic with tolerance for cold starts, <strong>real-time endpoints with autoscaling</strong> for steady low latency, <strong>asynchronous inference</strong> for large payloads and long runtimes, and <strong>batch transform</strong> for offline scoring. Use <strong>multi-model endpoints</strong> where many small models share a host.',
    tags: ['SageMaker', 'Inference', 'Elasticity']
  },
  {
    id: 'aws-sap-fc-363',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle clock skew in a distributed ledger or ordering system?',
    hint: 'Do not trust wall clocks.',
    back: 'Use <strong>logical ordering</strong> — sequence numbers, a monotonic counter, or a single writer that assigns order — rather than timestamps from multiple hosts. Where physical time is required, use the <strong>Amazon Time Sync Service</strong> (with clock bound accuracy on Nitro instances) and record the uncertainty. Last-writer-wins on wall clocks silently loses writes.',
    tags: ['Distributed Systems', 'Time Sync', 'Ordering']
  },
  {
    id: 'aws-sap-fc-364',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you sign requests between internal services?',
    hint: 'Identity on the request, not the network.',
    back: '<strong>SigV4 with IAM roles</strong> where the callee is an AWS-fronted API (API Gateway, ALB with IAM auth, AppSync) — the caller signs with its task or instance role and you get authentication, authorisation and CloudTrail for free. For service-to-service outside that, <strong>mTLS with Private CA</strong> or short-lived JWTs from a trusted issuer.',
    tags: ['SigV4', 'mTLS', 'Security']
  },
  {
    id: 'aws-sap-fc-365',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the cost of a chatty observability agent?',
    hint: 'Cardinality is the bill.',
    back: 'Cut <strong>metric cardinality</strong> — every unique dimension combination is a billable custom metric, so drop per-request or per-instance-ID labels. Batch and aggregate at the agent, use the <strong>embedded metric format</strong> so metrics ride existing logs, sample traces, and lengthen collection intervals for metrics nobody alarms on.',
    tags: ['CloudWatch', 'Cardinality', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-366',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you identify a slow serverless cold start?',
    hint: 'One specific log field.',
    back: 'The <strong><code>Init Duration</code> field in the REPORT line</strong> (and the initialisation subsegment in X-Ray) separates cold-start cost from execution. Fixes in order: shrink the deployment package and dependency graph, move work out of the handler\'s init path, use <strong>SnapStart</strong> for JVM runtimes, and <strong>provisioned concurrency</strong> only where latency genuinely requires it.',
    tags: ['Lambda', 'Cold Starts', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-367',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why did Lambda cost suddenly rise?',
    hint: 'Three multipliers.',
    back: 'Cost is <strong>invocations × duration × memory</strong>, so check each: a retry storm or recursive trigger (an S3 event writing back to the same bucket) inflating invocations, a slow dependency inflating duration, or a memory increase applied fleet-wide. Also check whether <strong>provisioned concurrency</strong> was left on, since it bills whether used or not.',
    tags: ['Lambda', 'Cost Optimization', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-368',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you upgrade a cluster without a maintenance window?',
    hint: 'Add new, drain old.',
    back: 'Blue/green at the node level: create a <strong>new node group on the new version</strong>, <strong>cordon and drain</strong> the old one so pods reschedule respecting <strong>pod disruption budgets</strong>, then delete it. Upgrade the control plane first, one minor version at a time, after checking deprecated API usage and add-on compatibility. Aurora and RDS use blue/green deployments for the same purpose.',
    tags: ['EKS', 'Upgrades', 'Operations']
  },
  {
    id: 'aws-sap-fc-369',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you rotate a database credential without downtime?',
    hint: 'Two secrets, alternating.',
    back: '<strong>Secrets Manager\'s alternating-users rotation strategy</strong>: two database users, rotate one while the other serves traffic, so there is no window where the live credential is invalid. Applications must <strong>fetch the secret rather than cache it forever</strong>, and retry once on an auth failure. Better still, remove the password with <strong>IAM database authentication</strong>.',
    tags: ['Secrets Manager', 'Rotation', 'Databases']
  },
  {
    id: 'aws-sap-fc-370',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you reduce the impact of a dependency upgrade?',
    hint: 'Make the change observable and small.',
    back: 'Ship it <strong>alone</strong>, behind a <strong>feature flag or canary</strong>, with the metrics that would reveal a regression already on a dashboard and an <strong>automatic rollback on alarm</strong>. Pin versions and scan with Inspector or dependency tooling so you upgrade deliberately rather than transitively. Bundling an upgrade with a feature release makes attribution impossible.',
    tags: ['Deployment', 'Canary', 'Dependencies']
  },
  {
    id: 'aws-sap-fc-371',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you replicate servers with minimal source impact?',
    hint: 'Throttle and schedule.',
    back: 'MGN replicates continuously at block level; control the impact with <strong>bandwidth throttling per server</strong>, staggered initial syncs outside business hours, and a <strong>staging subnet sized for the aggregate</strong>. The agent is lightweight, but the <em>initial full sync</em> is the heavy phase — plan it, and monitor source disk and network while it runs.',
    tags: ['MGN', 'Replication', 'Migration']
  },
  {
    id: 'aws-sap-fc-372',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload with an unsupported database version?',
    hint: 'Remediate before you move.',
    back: 'RDS supports specific engine versions, so you either <strong>upgrade on premises first</strong> (safer to isolate), <strong>upgrade as part of the move</strong> with DMS to a supported target version, or <strong>run it on EC2</strong> as an interim step and migrate to managed later. Pick deliberately — discovering it during the cutover window is the failure mode.',
    tags: ['RDS', 'DMS', 'Migration']
  },
  {
    id: 'aws-sap-fc-373',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'When is AWS App Runner the right choice?',
    hint: 'Container to URL, nothing in between.',
    back: 'When you want a <strong>container or source repository deployed to an HTTPS endpoint with autoscaling, TLS and a managed load balancer</strong> and no cluster, task definition or networking to design. It trades control for speed, so it suits internal tools and small services. Reach for <strong>ECS or EKS</strong> once you need sidecars, custom networking, or fine-grained scheduling.',
    tags: ['App Runner', 'Containers', 'Serverless']
  },
  {
    id: 'aws-sap-fc-374',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you replace a licensed message broker?',
    hint: 'Protocol compatibility decides.',
    back: 'If the application speaks <strong>JMS, AMQP, MQTT or STOMP</strong> and you will not change code, use <strong>Amazon MQ</strong> (ActiveMQ or RabbitMQ) — a replatform. If you can change the code, move to <strong>SQS and SNS</strong> or EventBridge for a fully managed, horizontally scalable design with no broker to size. Amazon MQ is the bridge; the native services are the destination.',
    tags: ['Amazon MQ', 'SQS', 'Replatform']
  },
  {
    id: 'aws-sap-fc-375',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you modernise authentication during a migration?',
    hint: 'Decouple it from the app.',
    back: 'Move from in-application credentials to a <strong>central identity provider with OIDC or SAML</strong>, fronting the app with <strong>ALB OIDC authentication, Cognito, or Verified Access</strong> so the application receives a validated identity rather than handling passwords. Do it as a distinct step, not inside the migration wave, so a failure is attributable.',
    tags: ['Cognito', 'Authentication', 'Modernization']
  }
];

export default AWS_SAP_FLASHCARDS;
