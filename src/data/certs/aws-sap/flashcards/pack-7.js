export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-151',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does AWS Audit Manager do that Config does not?',
    hint: 'Evidence for a framework, collected continuously.',
    back: 'It maps controls from a <strong>framework</strong> (SOC 2, PCI DSS, HIPAA, or your own) to AWS data sources and <strong>collects evidence continuously</strong> into an assessment report an auditor can consume. Config evaluates resource compliance; Audit Manager assembles the <em>evidence package</em> and tracks control ownership and review.',
    tags: ['Audit Manager', 'Compliance', 'Governance']
  },
  {
    id: 'aws-sap-fc-152',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Network Firewall vs. Gateway Load Balancer vs. security groups',
    hint: 'Managed stateful, third-party, or per-ENI.',
    back: '<strong>Network Firewall</strong> — AWS-managed stateful inspection with Suricata rules, domain allow-lists and IPS, deployed per-AZ in an inspection subnet. <strong>GWLB</strong> — transparently scales <em>third-party</em> appliances you already standardised on. <strong>Security groups</strong> — per-ENI allow-only, no inspection. Firewall Manager pushes the first two across the organization.',
    tags: ['Network Firewall', 'GWLB', 'Networking']
  },
  {
    id: 'aws-sap-fc-153',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'What does VPC IPAM manage?',
    hint: 'Addresses as a governed resource.',
    back: 'Hierarchical <strong>pools of address space per organization, Region and environment</strong>, with automatic allocation to VPCs, monitoring of utilisation and overlap, and compliance reporting. It is the answer to "who owns 10.20.0.0/16" and the way to stop the next acquisition-style CIDR collision before it happens.',
    tags: ['IPAM', 'VPC', 'Networking']
  },
  {
    id: 'aws-sap-fc-154',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you expose an internal service to many consumer accounts privately?',
    hint: 'One-way, no route table changes.',
    back: '<strong>PrivateLink</strong>: put the service behind an NLB (or GWLB), create a <strong>VPC endpoint service</strong>, and let consumers create interface endpoints. Traffic is <em>unidirectional</em> consumer-to-provider, needs no route propagation, and works with <strong>overlapping CIDRs</strong>. Peering and Transit Gateway instead join whole networks, which is far more exposure than a single service needs.',
    tags: ['PrivateLink', 'Multi-Account', 'Networking']
  },
  {
    id: 'aws-sap-fc-155',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you federate workforce access to many accounts?',
    hint: 'One identity source, no IAM users.',
    back: '<strong>IAM Identity Center</strong> connected to your IdP (Entra ID, Okta, or Active Directory) with <strong>SCIM</strong> provisioning users and groups automatically. Assign <strong>permission sets</strong> to groups per account or OU; people get a portal and short-lived credentials, and leavers disappear when the IdP says so. No IAM users, no per-account SAML providers.',
    tags: ['IAM Identity Center', 'SCIM', 'Federation']
  },
  {
    id: 'aws-sap-fc-156',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you stop a snapshot being copied out of the organization?',
    hint: 'Two controls, both needed.',
    back: 'Deny the sharing actions with an <strong>SCP</strong> (<code>ec2:ModifySnapshotAttribute</code>, RDS share equivalents) conditioned on the target being outside <code>aws:PrincipalOrgID</code>, and <strong>encrypt with a customer managed KMS key</strong> whose policy grants no external account — an encrypted snapshot is useless without the key. Detect with Config rules for public or externally shared snapshots.',
    tags: ['Organizations', 'SCP', 'Data Exfiltration']
  },
  {
    id: 'aws-sap-fc-157',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'Who should own the security tooling account?',
    hint: 'Not the management account.',
    back: 'A dedicated <strong>security account registered as delegated administrator</strong> for GuardDuty, Security Hub, Config, Macie, Inspector and Detective, receiving findings from every member account, with read-only cross-account roles for responders. The <strong>log archive account</strong> stays separate and write-only. The management account holds neither, so its blast radius stays minimal.',
    tags: ['Landing Zone', 'Security', 'Delegated Administrator']
  },
  {
    id: 'aws-sap-fc-158',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'S3 storage classes and the trade-off each makes',
    hint: 'Latency, AZ count, and minimum duration.',
    back: '<strong>Standard</strong> (ms, no minimum) → <strong>Intelligent-Tiering</strong> (auto-moves, small monitoring fee, no retrieval charge) → <strong>Standard-IA</strong> (ms, 30-day min) → <strong>One Zone-IA</strong> (single AZ, ~20% cheaper) → <strong>Glacier Instant Retrieval</strong> (ms, 90-day min) → <strong>Glacier Flexible Retrieval</strong> (minutes–12 h) → <strong>Deep Archive</strong> (12 h, 180-day min).',
    tags: ['S3', 'Storage Classes', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-159',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'S3 Object Lock — governance vs. compliance mode',
    hint: 'Can anyone override it?',
    back: '<strong>Governance mode</strong> can be overridden by a principal with <code>s3:BypassGovernanceRetention</code> — useful for mistakes. <strong>Compliance mode</strong> cannot be overridden by <em>anyone, including the root user</em>, until retention expires. Both need versioning, and a <strong>legal hold</strong> is an indefinite lock independent of a retention period. This is the WORM control regulators ask for.',
    tags: ['S3', 'Object Lock', 'Compliance']
  },
  {
    id: 'aws-sap-fc-160',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve one dataset over both file and object protocols?',
    hint: 'Do not copy it twice.',
    back: 'For NFS/SMB plus S3 on the same data, use <strong>FSx for NetApp ONTAP</strong> (multi-protocol) or <strong>File Gateway</strong> where S3 is the source of truth and the gateway presents the share. For Linux clients wanting an S3 bucket as a mount, <strong>Mountpoint for Amazon S3</strong> gives file-like access without a second copy to keep in step.',
    tags: ['FSx', 'Storage Gateway', 'Mountpoint']
  },
  {
    id: 'aws-sap-fc-161',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'WAF rule types you should know',
    hint: 'Five, plus managed groups.',
    back: '<strong>Rate-based</strong> (requests per five minutes per key) · <strong>IP set</strong> · <strong>Geo match</strong> · <strong>String/regex match</strong> on any request component · <strong>Managed rule groups</strong> (Core, SQLi, Known Bad Inputs, Bot Control, Account Takeover Prevention). Deploy in <strong>count mode</strong> first to measure false positives, then flip to block.',
    tags: ['WAF', 'Security', 'Edge']
  },
  {
    id: 'aws-sap-fc-162',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'What does Shield Advanced add over Shield Standard?',
    hint: 'People, credits, and layer 7.',
    back: 'Standard is free and always on for layer 3/4. <strong>Advanced</strong> adds the <strong>Shield Response Team</strong>, automatic application-layer mitigation, health-based detection, cost-protection credits for scaling during an attack, WAF at no extra charge on protected resources, and global threat dashboards — priced per month with a one-year commitment.',
    tags: ['Shield', 'DDoS', 'Security']
  },
  {
    id: 'aws-sap-fc-163',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you deliver large private files to untrusted clients?',
    hint: 'Never proxy bytes through your app.',
    back: 'Issue <strong>pre-signed URLs</strong> (S3, short expiry, per-object) or <strong>CloudFront signed URLs / signed cookies</strong> when you want edge caching, geo restriction and a whole-path grant. The origin stays private behind <strong>Origin Access Control</strong>. Proxying downloads through your compute burns bandwidth, adds latency, and caps concurrency for no benefit.',
    tags: ['S3', 'CloudFront', 'Pre-Signed URLs']
  },
  {
    id: 'aws-sap-fc-164',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you enforce a fair per-tenant rate limit?',
    hint: 'The limit belongs at the front door.',
    back: '<strong>API Gateway usage plans and API keys</strong> give per-tenant throttle and quota directly. For finer or dynamic limits, key a <strong>token bucket in DynamoDB or ElastiCache</strong> on the tenant and check it in an authorizer. WAF rate-based rules key on IP by default, which punishes shared NATs — so use a header or custom key for tenant fairness.',
    tags: ['API Gateway', 'Throttling', 'Multi-Tenancy']
  },
  {
    id: 'aws-sap-fc-165',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'ACM vs. AWS Private CA',
    hint: 'Public trust versus your own trust store.',
    back: '<strong>ACM</strong> issues free <em>public</em> certificates that renew automatically, usable on ALB, CloudFront, API Gateway — but the private key never leaves AWS, so you cannot install one on an EC2 instance directly. <strong>Private CA</strong> issues certificates trusted only by your own chain, for internal mTLS, service meshes and IoT, priced per CA per month plus per certificate.',
    tags: ['ACM', 'Private CA', 'TLS']
  },
  {
    id: 'aws-sap-fc-166',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does Container Insights give you beyond CloudWatch basics?',
    hint: 'The cluster hierarchy.',
    back: 'Metrics and logs rolled up by <strong>cluster, service, task and pod</strong>, with container-level CPU, memory, disk and network, plus performance events and map views. On EKS it can run via the <strong>ADOT or CloudWatch agent</strong> as a DaemonSet. Without it you see instance metrics and cannot attribute pressure to a workload.',
    tags: ['Container Insights', 'EKS', 'Observability']
  },
  {
    id: 'aws-sap-fc-167',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut the cost of an over-provisioned Kubernetes cluster?',
    hint: 'Requests, then nodes, then pricing.',
    back: 'Right-size <strong>pod requests</strong> first (VPA recommendations; requests, not limits, drive scheduling waste), then let <strong>Karpenter</strong> consolidate and pick cheaper instance types including Spot, then apply <strong>Compute Savings Plans</strong> to the steady baseline. Attribute the spend with <strong>split cost allocation data</strong> or Kubecost so teams see their own share.',
    tags: ['EKS', 'Karpenter', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-168',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'An Auto Scaling group keeps replacing healthy instances. Why?',
    hint: 'Two health check sources disagree.',
    back: 'Usually the <strong>ELB health check is stricter than the boot time</strong>: the instance is terminated before the app is ready, so add a <strong>health check grace period</strong> and a lifecycle hook. Other causes: the health check path hitting a failing dependency, an <strong>impaired zone</strong>, or an instance refresh with too low a minimum healthy percentage.',
    tags: ['Auto Scaling', 'Health Checks', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-169',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Why does a scaling group oscillate, and how do you damp it?',
    hint: 'Feedback loop with lag.',
    back: 'The metric responds slower than the policy acts, so it overshoots and flaps. Damp it with <strong>target tracking</strong> (which handles this natively), a longer <strong>cooldown or warm-up</strong>, scaling on a <em>smoothed</em> metric such as requests per target rather than instantaneous CPU, and asymmetric behaviour: <strong>scale out fast, scale in slowly</strong>.',
    tags: ['Auto Scaling', 'Elasticity', 'Troubleshooting']
  },
  {
    id: 'aws-sap-fc-170',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'Blue/green vs. canary vs. rolling deployment',
    hint: 'Where does the risk sit?',
    back: '<strong>Blue/green</strong> — two full environments, switch traffic at once; instant rollback, double capacity cost. <strong>Canary</strong> — a small traffic share first, watch the metrics, then ramp; lowest blast radius, needs good telemetry. <strong>Rolling</strong> — replace in batches; cheap, but mixed versions coexist so schema and API changes must be backward compatible.',
    tags: ['Deployment', 'Canary', 'Release']
  },
  {
    id: 'aws-sap-fc-171',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'What does AppConfig add over a configuration file or Parameter Store?',
    hint: 'Validated, gradual, and revertible.',
    back: 'Configuration and <strong>feature flags deployed like code</strong>: JSON-schema or Lambda <strong>validators</strong> reject bad values before rollout, a <strong>deployment strategy</strong> ramps the change gradually, and a <strong>CloudWatch alarm rollback</strong> reverts it automatically. That turns a config change from an untested production edit into a monitored release.',
    tags: ['AppConfig', 'Feature Flags', 'Release']
  },
  {
    id: 'aws-sap-fc-172',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you move a Windows file server estate?',
    hint: 'Keep the ACLs.',
    back: '<strong>FSx for Windows File Server</strong> joined to a directory, populated with <strong>DataSync</strong> in SMB mode, which preserves <strong>NTFS ACLs, timestamps and ownership</strong> — the detail a naive copy destroys. Keep users on the old share until cutover via DFS namespaces, then repoint. FSx File Gateway helps where local access must continue.',
    tags: ['FSx', 'DataSync', 'Windows']
  },
  {
    id: 'aws-sap-fc-173',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is AWS Transfer Family for in a migration?',
    hint: 'Partners who will not change.',
    back: 'Managed <strong>SFTP, FTPS, FTP and AS2</strong> endpoints in front of S3 or EFS, so external partners keep their existing scripts and credentials while the data lands natively in AWS. It is an <em>integration</em> tool, not a bulk migration one — DataSync or Snow moves the historical volume.',
    tags: ['Transfer Family', 'SFTP', 'Integration']
  },
  {
    id: 'aws-sap-fc-174',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What do you do with a workload that must stay in one country?',
    hint: 'Region first, then the edge cases.',
    back: 'Pick an in-country <strong>Region</strong> and pin it with an SCP denying every other Region. Where no Region exists or the data must stay on premises, use <strong>Outposts</strong>, <strong>Local Zones</strong> or <strong>Dedicated Local Zones</strong>. Also control the <em>metadata</em> path: KMS key residency, log destinations, and support case contents.',
    tags: ['Data Residency', 'Outposts', 'Compliance']
  },
  {
    id: 'aws-sap-fc-175',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What does a migration factory actually standardise?',
    hint: 'Repeatability beats heroics.',
    back: 'A small <strong>CCoE</strong> plus a repeatable pipeline: intake and assessment templates, a chosen <strong>strategy per pattern</strong> (not per server), automated landing-zone provisioning, standard runbooks for test/cutover/rollback, and a metrics dashboard per wave. The aim is that wave ten costs a fraction of wave one instead of the same.',
    tags: ['Migration Factory', 'CCoE', 'Operating Model']
  }
];

export default AWS_SAP_FLASHCARDS;
