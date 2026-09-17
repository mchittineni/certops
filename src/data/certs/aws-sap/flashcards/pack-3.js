export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-51',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What is a delegated administrator, and why does it matter?',
    hint: 'Keep the management account out of daily use.',
    back: 'A member account registered to <strong>operate an Organizations-integrated service for the whole organization</strong> — GuardDuty, Security Hub, Config, Macie, Inspector, StackSets. It gets full configuration authority, not a read-only view. This is how you keep the <em>management account</em> unused day to day, which is the security posture auditors expect.',
    tags: ['Organizations', 'Delegated Administrator', 'Security']
  },
  {
    id: 'aws-sap-fc-52',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Two ways an account joins an organization',
    hint: 'Existing or brand new.',
    back: '<strong>Invite</strong> an account that already exists (it accepts, and can later be removed only if it has full billing details of its own), or <strong>create</strong> it from the management account, in which case it is a member from birth. Programmatic creation plus StackSets is how a landing zone scales; acquisitions almost always use invitation.',
    tags: ['Organizations', 'Account Management', 'Governance']
  },
  {
    id: 'aws-sap-fc-53',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does a tag policy enforce, and what does it not?',
    hint: 'Tags, not resource creation.',
    back: 'It declares the <strong>permitted keys and value sets</strong> for the organization and reports compliance; where you <em>enable enforcement</em> for a resource type it also blocks non-compliant tagging. It never rewrites a value and never retroactively tags. To require a tag <em>at creation</em>, use an IAM or SCP condition on <code>aws:RequestTag</code>.',
    tags: ['Organizations', 'Tag Policies', 'Cost Allocation']
  },
  {
    id: 'aws-sap-fc-54',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'AD Connector vs. AWS Managed Microsoft AD vs. Simple AD',
    hint: 'Proxy, real directory, or minimal.',
    back: '<strong>AD Connector</strong> proxies authentication to on-premises controllers — <em>no directory data in AWS</em>. <strong>Managed Microsoft AD</strong> is a real managed directory in AWS, supports trusts, and is required for features needing a local directory (FSx, RDS Windows auth, WorkSpaces at scale). <strong>Simple AD</strong> is a Samba-based, low-cost option with no trust support.',
    tags: ['Directory Service', 'AD Connector', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-55',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Walk the IAM policy evaluation order.',
    hint: 'Explicit deny always wins.',
    back: '1. <strong>Explicit deny anywhere</strong> → denied, full stop. 2. <strong>SCP/RCP</strong> must allow the service and action. 3. <strong>Permissions boundary</strong> and <strong>session policy</strong> must allow. 4. At least one <strong>identity or resource policy</strong> must allow. Otherwise the implicit deny applies. An SCP that simply <em>omits</em> a service excludes it, even with a full identity grant.',
    tags: ['IAM', 'Policy Evaluation', 'Permissions']
  },
  {
    id: 'aws-sap-fc-56',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'IAM Roles Anywhere — what problem does it solve?',
    hint: 'No static keys in the data centre.',
    back: 'It gives workloads <strong>outside AWS</strong> temporary credentials in exchange for an <strong>X.509 certificate</strong> from a CA registered as a trust anchor — so on-premises servers call AWS APIs with no long-lived access keys. Compare: EC2 instance profiles inside AWS, IRSA or Pod Identity for EKS, and OIDC federation for CI/CD pipelines.',
    tags: ['IAM Roles Anywhere', 'Hybrid', 'Credentials']
  },
  {
    id: 'aws-sap-fc-57',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What is a service-linked role?',
    hint: 'It appears without anyone creating it.',
    back: 'A role <strong>created and owned by an AWS service</strong>, named <code>AWSServiceRoleFor…</code>, with a policy the service defines so it can act on your account\'s behalf. It is assumed by a <em>service principal</em>, not by people; you cannot broaden it, and deleting it breaks the service. SCPs do not restrict service-linked roles.',
    tags: ['IAM', 'Service-Linked Role', 'Permissions']
  },
  {
    id: 'aws-sap-fc-58',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Gateway endpoint vs. interface endpoint (PrivateLink)',
    hint: 'Only two services get the free one.',
    back: '<strong>Gateway</strong> — S3 and DynamoDB only, a <em>route-table target</em>, free, no security group, same-Region only. <strong>Interface</strong> — an ENI with a private IP in your subnet, works for almost every service plus partner and your own services, supports security groups and endpoint policies, and is billed hourly plus per GB.',
    tags: ['VPC Endpoints', 'PrivateLink', 'Networking']
  },
  {
    id: 'aws-sap-fc-59',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does a VPC endpoint policy control?',
    hint: 'Everything passing through.',
    back: 'It is a <strong>resource policy on the endpoint</strong>, bounding every request that traverses it — so it can limit a subnet to two specific buckets. A bucket policy with <code>aws:SourceVpce</code> does the mirror image: it protects <em>those buckets</em> from other paths but leaves every other bucket reachable through the endpoint. Real perimeters use both.',
    tags: ['VPC Endpoints', 'Data Perimeter', 'S3']
  },
  {
    id: 'aws-sap-fc-60',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Security group vs. network ACL',
    hint: 'One remembers your connections.',
    back: '<strong>Security groups</strong> — stateful, attach to ENIs, <em>allow rules only</em>, all rules evaluated together. <strong>NACLs</strong> — stateless, attach to subnets, support <strong>allow and deny</strong>, evaluated in rule-number order with first match winning. Blocking one address inside an allowed range therefore needs a NACL; a security group cannot express it.',
    tags: ['VPC', 'Security Groups', 'Network ACL']
  },
  {
    id: 'aws-sap-fc-61',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'NAT gateway vs. internet gateway vs. egress-only internet gateway',
    hint: 'Direction and address family.',
    back: '<strong>Internet gateway</strong> — bidirectional for resources with public addresses, one per VPC. <strong>NAT gateway</strong> — outbound only for private subnets, lives in a public subnet, per-AZ for resilience, charged hourly plus per GB. <strong>Egress-only internet gateway</strong> — the IPv6 equivalent of NAT: outbound only, and free.',
    tags: ['VPC', 'NAT Gateway', 'Networking']
  },
  {
    id: 'aws-sap-fc-62',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'ALB target types — instance, IP, Lambda, ALB',
    hint: 'What gets registered?',
    back: '<strong>instance</strong> registers EC2 instance IDs. <strong>ip</strong> registers addresses — needed for awsvpc-mode containers, on-premises targets over VPN/DX, and peered VPCs. <strong>lambda</strong> invokes a function directly from a listener rule. An NLB can also target an <strong>ALB</strong>, which is how you put a static IP in front of layer-7 routing.',
    tags: ['ALB', 'Target Groups', 'Networking']
  },
  {
    id: 'aws-sap-fc-63',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How does a DynamoDB stream order change records?',
    hint: 'Per item, not per table.',
    back: '<strong>Ordered per item</strong>: every change to a given primary key lands in the same shard and is read in sequence. <strong>No ordering between different items</strong>, because their records may sit in different shards — and that is exactly what lets the stream scale with the table. Delivery is at-least-once, so consumers must be idempotent.',
    tags: ['DynamoDB', 'Streams', 'Ordering']
  },
  {
    id: 'aws-sap-fc-64',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'EFS performance and throughput modes',
    hint: 'Two axes, and one modern default.',
    back: 'Performance mode: <strong>General Purpose</strong> (lowest latency, the default) or <strong>Max I/O</strong> (higher aggregate throughput, higher latency — legacy). Throughput mode: <strong>Elastic</strong> (scales automatically, pay per use, now the recommended default), <strong>Provisioned</strong> (fixed MB/s), or <strong>Bursting</strong> (credits scale with stored size).',
    tags: ['EFS', 'Storage', 'Performance']
  },
  {
    id: 'aws-sap-fc-65',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Which FSx variant for which workload?',
    hint: 'Four file systems, four ecosystems.',
    back: '<strong>FSx for Windows File Server</strong> — SMB, NTFS ACLs, AD-integrated; the lift-and-shift target for Windows file shares. <strong>FSx for Lustre</strong> — HPC and ML, links to S3. <strong>FSx for NetApp ONTAP</strong> — multi-protocol NFS/SMB/iSCSI, snapshots and SnapMirror. <strong>FSx for OpenZFS</strong> — NFS with ZFS snapshots and cloning.',
    tags: ['FSx', 'Storage', 'Migration']
  },
  {
    id: 'aws-sap-fc-66',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does RDS Enhanced Monitoring show that CloudWatch does not?',
    hint: 'Inside the host.',
    back: '<strong>Per-process and per-thread</strong> CPU, memory and I/O read by an agent on the database host, at up to 1-second granularity — as opposed to the instance-level aggregate CloudWatch publishes. Compare <strong>Performance Insights</strong>, which attributes database load to <em>SQL statements and wait events</em> but stops at the database boundary.',
    tags: ['RDS', 'Enhanced Monitoring', 'Observability']
  },
  {
    id: 'aws-sap-fc-67',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Target tracking vs. step vs. simple vs. scheduled scaling',
    hint: 'Who designs the steps?',
    back: '<strong>Target tracking</strong> — give a metric and a target, AWS works out the capacity changes; the default choice. <strong>Step</strong> — you define each alarm threshold band and its capacity change. <strong>Simple</strong> — one adjustment per cooldown, the slow legacy option. <strong>Scheduled</strong> — open-loop, for known events; combine it with target tracking rather than replacing it.',
    tags: ['Auto Scaling', 'Target Tracking', 'Elasticity']
  },
  {
    id: 'aws-sap-fc-68',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why does adding capacity sometimes make latency worse?',
    hint: 'Look downstream.',
    back: 'Because the bottleneck is <strong>shared and downstream</strong>: more application instances mean more database connections, more calls to a rate-limited dependency, or more contention on one lock or hot partition. The fixes are <em>connection pooling</em>, <em>concurrency limits</em>, <em>caching</em>, and backpressure — not more instances. Load-test the dependency, not just the tier you scaled.',
    tags: ['Performance', 'Scaling', 'Bottlenecks']
  },
  {
    id: 'aws-sap-fc-69',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Which alarm should page, and which should not?',
    hint: 'Symptoms page; causes inform.',
    back: 'Page on <strong>symptoms the customer feels</strong> — error rate, p99 latency, queue age, SLO burn rate. Do not page on causes (CPU, disk, a single unhealthy host) that the system already handles; put those on a dashboard or a ticket. Use <strong>composite alarms</strong> to suppress a cascade, and alarm on <em>burn rate</em> so a slow leak still wakes someone.',
    tags: ['CloudWatch', 'Alerting', 'SLO']
  },
  {
    id: 'aws-sap-fc-70',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Where does cross-AZ and NAT data transfer cost come from?',
    hint: 'The quiet lines on the bill.',
    back: '<strong>Cross-AZ</strong> traffic is charged in both directions, so chatty services split across AZs pay twice — use zone-aware routing or topology-aware hints. <strong>NAT gateway</strong> charges hourly <em>plus per GB processed</em>, which makes S3 and DynamoDB traffic through NAT pure waste: add <strong>gateway endpoints</strong> and it becomes free.',
    tags: ['Data Transfer', 'NAT Gateway', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-71',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Where is an account quota increase requested?',
    hint: 'One console for all of them.',
    back: '<strong>Service Quotas</strong> — it lists every adjustable quota per <em>account and Region</em> and files the increase with AWS. Quotas are not organization-wide properties, so Organizations cannot set them, though you can use <strong>quota request templates</strong> to apply the same increases automatically to new accounts.',
    tags: ['Service Quotas', 'Limits', 'Operations']
  },
  {
    id: 'aws-sap-fc-72',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'AWS Schema Conversion Tool — what does its assessment report tell you?',
    hint: 'Before a heterogeneous move.',
    back: 'It classifies <strong>every schema object as automatically convertible or needing manual work</strong>, with an effort estimate — the number that sizes an Oracle-to-PostgreSQL project. DMS then moves the <em>data</em>; SCT converts the <em>schema and procedural code</em>. Consider <strong>Babelfish</strong> for Aurora PostgreSQL when the blocker is T-SQL and the client wire protocol.',
    tags: ['Schema Conversion Tool', 'DMS', 'Migration']
  },
  {
    id: 'aws-sap-fc-73',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'Replatform vs. refactor vs. rehost — the containerisation case',
    hint: 'Did the code change?',
    back: 'Moving a Java app from a self-managed Tomcat fleet onto managed containers <em>without code change</em> is <strong>replatform</strong>. <strong>Refactor</strong> means rewriting, typically into smaller services — containerisation alone does not require it. <strong>Rehost</strong> is lift and shift onto equivalent infrastructure. <strong>App2Container</strong> is the tool that automates the replatform.',
    tags: ['Migration Strategies', 'Replatform', 'Containers']
  },
  {
    id: 'aws-sap-fc-74',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you cut Windows licence cost on a .NET Framework app?',
    hint: 'Port the runtime, keep the code.',
    back: '<strong>Port to the cross-platform .NET runtime and run on Linux containers</strong>, keeping most of the code base — AWS publishes the Porting Assistant for .NET to assess and assist. Windows containers still run on Windows hosts, so the licence follows them. A dedicated host improves licence <em>economics</em> but leaves you on Windows.',
    tags: ['Modernization', 'Windows', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-75',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you validate a cutover before releasing traffic?',
    hint: 'Technical green is not business green.',
    back: 'Layer the checks: <strong>row counts and checksums</strong> (DMS data validation), <strong>synthetic transactions</strong> against the new stack, <strong>shadow or mirrored read traffic</strong> compared against the source, then a <strong>canary share of real users</strong> with the rollback path tested. Define the <em>business</em> success signal — orders per minute, not CPU — and agree the abort criteria in advance.',
    tags: ['Cutover', 'Validation', 'Migration']
  }
];

export default AWS_SAP_FLASHCARDS;
