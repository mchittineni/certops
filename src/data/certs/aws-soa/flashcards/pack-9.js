export const AWS_SOA_FLASHCARDS_9 = [
  {
    id: 'aws-soa-fc-201',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are the three versioning states of an S3 bucket, and which transitions are allowed?',
    hint: 'There is no way back to the first state.',
    back: 'A bucket starts <strong>unversioned</strong>. Once <strong>enabled</strong>, it can only be <strong>suspended</strong>, never returned to unversioned. While suspended, new writes get the version ID <code>null</code> and overwrite any existing null version, but versions created while versioning was enabled are kept. To remove old versions, use lifecycle rules; suspension alone does not delete anything.',
    tags: ['S3', 'Versioning']
  },
  {
    id: 'aws-soa-fc-202',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What is an S3 delete marker, and how do you undo one?',
    hint: 'A placeholder, not a deletion.',
    back: 'In a versioned bucket, a DELETE <strong>without a version ID</strong> creates a <strong>delete marker</strong> that becomes the current version, so a plain GET returns 404 while earlier versions remain. To undo it, <strong>permanently delete the delete marker</strong> (a DELETE that names the marker\'s version ID); the previous version becomes current again. A marker with no noncurrent versions behind it is an <strong>expired object delete marker</strong>, which lifecycle can remove.',
    tags: ['S3', 'Delete markers']
  },
  {
    id: 'aws-soa-fc-203',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How do you permanently remove one object version from a versioned S3 bucket?',
    hint: 'Name it exactly.',
    back: 'Send a DELETE request that specifies the <strong>version ID</strong> (for example <code>aws s3api delete-object --bucket b --key k --version-id v</code>). That version is removed for good and no delete marker is created. It requires the <code>s3:DeleteObjectVersion</code> permission, and it is blocked by Object Lock retention or legal hold and, if enabled, requires MFA under MFA Delete.',
    tags: ['S3', 'Versioning']
  },
  {
    id: 'aws-soa-fc-204',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which S3 Lifecycle actions manage the cost of a versioned bucket?',
    hint: 'Noncurrent versions, delete markers and upload debris.',
    back: '<strong>NoncurrentVersionTransition</strong>: move noncurrent versions to a cheaper storage class after N days. <strong>NoncurrentVersionExpiration</strong>: permanently delete them after N days, optionally keeping the latest few with <strong>NewerNoncurrentVersions</strong>. <strong>ExpiredObjectDeleteMarker</strong>: clean up delete markers with nothing behind them. <strong>AbortIncompleteMultipartUpload</strong>: delete parts of uploads never finished. Expiration of <em>current</em> versions only adds delete markers in a versioned bucket.',
    tags: ['S3', 'Lifecycle', 'Versioning']
  },
  {
    id: 'aws-soa-fc-205',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does S3 MFA Delete protect, and who can turn it on?',
    hint: 'Only one identity, and not in the console.',
    back: 'MFA Delete requires a valid MFA code to <strong>permanently delete an object version</strong> or to <strong>change the bucket\'s versioning state</strong>. Only the bucket owner\'s <strong>root user</strong> can enable or disable it, using the AWS CLI or API with the root MFA device serial number and code; the console cannot. It cannot be used with lifecycle expiration of versions, because lifecycle cannot supply an MFA code.',
    tags: ['S3', 'MFA Delete']
  },
  {
    id: 'aws-soa-fc-206',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'S3 Object Lock: governance mode, compliance mode and legal hold?',
    hint: 'Two retention modes with an end date, one hold without.',
    back: '<strong>Governance mode</strong>: a retention period during which versions cannot be deleted or overwritten, except by users with <code>s3:BypassGovernanceRetention</code>. <strong>Compliance mode</strong>: no one, including root, can delete the version or shorten the retention until it ends. <strong>Legal hold</strong>: no end date; the version is protected until someone with <code>s3:PutObjectLegalHold</code> removes the hold, and it applies independently of any retention period.',
    tags: ['S3', 'Object Lock']
  },
  {
    id: 'aws-soa-fc-207',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does S3 Object Lock relate to versioning, and can you add it to an existing bucket?',
    hint: 'Locks apply to versions.',
    back: 'Object Lock protects individual <strong>object versions</strong>, so the bucket must have <strong>versioning enabled</strong>, and versioning cannot be suspended while Object Lock is on. Object Lock can be enabled at bucket creation or <strong>on an existing versioned bucket</strong>; once enabled it cannot be turned off. A <strong>default retention</strong> applies to new versions, while existing versions need retention or a legal hold applied individually, for example with S3 Batch Operations.',
    tags: ['S3', 'Object Lock', 'Versioning']
  },
  {
    id: 'aws-soa-fc-208',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What must be true for S3 replication, and what does live replication not copy?',
    hint: 'Versioning on both sides, and several things are left behind.',
    back: 'Requirements: <strong>versioning enabled</strong> on source and destination, and an IAM role S3 can assume with permission to read the source and write the destination (plus KMS permissions for SSE-KMS objects). Live replication <strong>does not copy</strong>: objects that existed before the rule (use <strong>Batch Replication</strong>), objects that are themselves replicas from another rule, delete markers unless delete marker replication is on, and deletes of specific versions, which are never replicated.',
    tags: ['S3', 'Replication']
  },
  {
    id: 'aws-soa-fc-209',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'S3 Same-Region Replication vs Cross-Region Replication: when is each used?',
    hint: 'Same features, different reason.',
    back: '<strong>Cross-Region Replication</strong>: copies objects to a bucket in another Region for <strong>disaster recovery</strong>, lower-latency access elsewhere, or compliance rules that need geographic separation. <strong>Same-Region Replication</strong>: copies within one Region, for example to aggregate logs, keep a copy in a separate account for isolation, or maintain production and test copies. Both need versioning and support Replication Time Control.',
    tags: ['S3', 'Replication']
  },
  {
    id: 'aws-soa-fc-210',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How do you turn on shadow copies for FSx for Windows File Server, and what are the defaults?',
    hint: 'A remote PowerShell endpoint, not the console.',
    back: 'Connect to the file system\'s <strong>Windows Remote PowerShell endpoint</strong> and run <code>Set-FsxShadowStorage</code> and <code>Set-FsxShadowCopySchedule</code>, or use the defaults, which allow shadow copies up to <strong>10% of the volume</strong> and take them at <strong>07:00 and 12:00 on weekdays</strong>. Users then restore files from <strong>Previous Versions</strong> in Windows Explorer. When shadow storage fills, the oldest copies are deleted.',
    tags: ['FSx for Windows', 'Shadow copies']
  },
  {
    id: 'aws-soa-fc-211',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How do users recover earlier versions of files on FSx for NetApp ONTAP?',
    hint: 'A hidden directory and a policy.',
    back: 'ONTAP takes space-efficient <strong>volume snapshots</strong> according to a <strong>snapshot policy</strong>; new volumes use the <code>default</code> policy, with hourly, daily and weekly copies retained by count. NFS users browse the <code>.snapshot</code> directory, and SMB users use <code>~snapshot</code> or Previous Versions, to copy files back themselves. Administrators can also restore a whole volume from a snapshot. Snapshots live on the same file system, so pair them with AWS Backup.',
    tags: ['FSx for NetApp ONTAP', 'Snapshots']
  },
  {
    id: 'aws-soa-fc-212',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What can you do with FSx for OpenZFS snapshots?',
    hint: 'Browse, roll back or clone.',
    back: 'OpenZFS snapshots are point-in-time, space-efficient copies of a <strong>volume</strong>, taken on demand or on a schedule. Users copy individual files from the read-only <code>.zfs/snapshot</code> directory; administrators can <strong>roll a volume back</strong> to a snapshot (discarding later changes) or create a new <strong>volume clone</strong> from it for testing. For protection beyond the file system, use AWS Backup.',
    tags: ['FSx for OpenZFS', 'Snapshots']
  },
  {
    id: 'aws-soa-fc-213',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Rank the four AWS disaster recovery strategies by RTO, RPO and cost.',
    hint: 'From cheapest and slowest to most expensive and fastest.',
    back: '<strong>Backup and restore</strong>: RPO and RTO of hours; lowest cost. <strong>Pilot light</strong>: data replicated live, core infrastructure ready but switched off; RPO of minutes, RTO of tens of minutes. <strong>Warm standby</strong>: a scaled-down, fully working copy always running; RPO of seconds to minutes, RTO of minutes. <strong>Multi-site active/active</strong>: full capacity serving traffic in several Regions; RPO and RTO near zero; highest cost.',
    tags: ['Disaster recovery', 'DR strategies']
  },
  {
    id: 'aws-soa-fc-214',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Pilot light vs warm standby: what is the practical difference?',
    hint: 'Can it take a request right now?',
    back: 'Both keep data replicated in the recovery Region. In <strong>pilot light</strong>, the application tier is <strong>not running</strong> (or is at zero), so it must be deployed or started before it can serve any request. In <strong>warm standby</strong>, a smaller copy of the <strong>whole stack is running</strong> and can serve traffic immediately, then scale up. Warm standby costs more but gives a shorter RTO and lets you test the recovery environment continuously.',
    tags: ['Disaster recovery', 'Pilot light', 'Warm standby']
  },
  {
    id: 'aws-soa-fc-215',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What new problems does multi-site active/active disaster recovery introduce?',
    hint: 'Two writers and a big bill.',
    back: 'Every Region must accept writes, so the data layer needs <strong>multi-writer replication</strong> such as DynamoDB global tables, and the application must tolerate <strong>write conflicts</strong> (last writer wins) or route each user\'s writes to a home Region. Routing (latency or geolocation with health checks) must steer traffic away from a failed Region. It also needs full capacity in each Region, so it is the most expensive strategy.',
    tags: ['Disaster recovery', 'Active/active']
  },
  {
    id: 'aws-soa-fc-216',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What recovery objectives does an Aurora global database support?',
    hint: 'Dedicated storage-level replication.',
    back: 'An Aurora global database replicates at the storage layer from one primary Region to secondary Regions with typical lag of <strong>under one second</strong>, so RPO is about a second. Promoting a secondary typically takes <strong>under a minute</strong> of RTO. Secondary clusters serve reads locally, and a <strong>headless</strong> secondary (no instances) lowers cost for disaster recovery at the price of a longer RTO while instances are added.',
    tags: ['Aurora', 'Global database']
  },
  {
    id: 'aws-soa-fc-217',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Aurora global database: switchover vs failover vs detach-and-promote?',
    hint: 'Planned, unplanned, and breaking the topology.',
    back: '<strong>Switchover</strong> (formerly managed planned failover): for planned events; waits until the secondary is fully synchronized, then swaps roles with <strong>no data loss</strong> and keeps the global topology. <strong>Failover</strong> (allow data loss): for Regional outages; promotes a secondary immediately, may lose unreplicated writes, and keeps the topology so the old primary can rejoin. <strong>Detach and promote</strong>: removes a secondary and makes it a standalone cluster, breaking the global database.',
    tags: ['Aurora', 'Global database', 'Failover']
  },
  {
    id: 'aws-soa-fc-218',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does AWS Elastic Disaster Recovery keep costs low while giving an RPO of seconds?',
    hint: 'A staging area and on-demand recovery instances.',
    back: 'The replication agent streams <strong>block-level changes</strong> continuously to a <strong>staging area</strong> subnet in the recovery Region, which uses small replication servers and low-cost EBS volumes. Full-size <strong>recovery instances</strong> are launched only for a drill or a real recovery, typically within minutes, from the latest or an earlier point-in-time snapshot. Non-disruptive <strong>drills</strong> let you test without stopping replication.',
    tags: ['Elastic Disaster Recovery']
  },
  {
    id: 'aws-soa-fc-219',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Why should a disaster recovery failover rely on data plane operations rather than control plane ones?',
    hint: 'Which parts of AWS are built to keep working during an event?',
    back: 'Control planes (creating or modifying resources, changing DNS records, launching instances) are more complex and may be impaired or throttled during a large event. Data planes (Route 53 answering queries and evaluating <strong>health checks</strong>, load balancers routing traffic, running instances serving requests) are designed for higher availability. So pre-provision what the recovery needs and trigger failover with <strong>health checks or routing controls</strong> instead of editing records or launching capacity mid-incident.',
    tags: ['Disaster recovery', 'Static stability']
  },
  {
    id: 'aws-soa-fc-220',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What happens when you promote an RDS cross-Region read replica?',
    hint: 'It stops following its source.',
    back: 'The replica becomes a <strong>standalone DB instance</strong> that accepts writes; replication from the source stops permanently, and the promotion takes a few minutes, including a reboot. Its endpoint does not change, but applications must be pointed at it, usually through a DNS record you control. Automated backups are enabled on it according to its retention setting. To protect it afterwards, create new replicas or Multi-AZ.',
    tags: ['RDS', 'Read replicas', 'Disaster recovery']
  },
  {
    id: 'aws-soa-fc-221',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Why use KMS multi-Region keys in a disaster recovery design?',
    hint: 'Same key material, same key ID, different Regions.',
    back: 'A <strong>multi-Region key</strong> and its replicas share key material and key ID across Regions, so data encrypted in one Region can be decrypted in another without re-encryption or cross-Region KMS calls. This simplifies encrypted replication and restores, for example client-side encrypted data or DynamoDB global tables with customer managed keys. Single-Region keys work too, but every cross-Region copy must be re-encrypted with a key in the destination Region.',
    tags: ['KMS', 'Multi-Region keys', 'Disaster recovery']
  },
  {
    id: 'aws-soa-fc-222',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'DynamoDB global tables: multi-Region eventual consistency vs multi-Region strong consistency?',
    hint: 'Which one gives an RPO of zero?',
    back: '<strong>Multi-Region eventual consistency</strong> (the default): writes replicate asynchronously, usually within a second; concurrent writes to the same item are resolved by <strong>last writer wins</strong>, and a Regional failure can lose writes not yet replicated. <strong>Multi-Region strong consistency</strong>: writes are replicated synchronously before success is returned, giving an <strong>RPO of zero</strong> and strongly consistent reads in any Region, at the cost of higher write latency and a three-Region deployment (or two Regions plus a witness).',
    tags: ['DynamoDB', 'Global tables', 'Consistency']
  },
  {
    id: 'aws-soa-fc-223',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How do S3 Multi-Region Access Points support failover?',
    hint: 'One global endpoint, several buckets, a routing switch.',
    back: 'A Multi-Region Access Point gives one global endpoint in front of buckets in several Regions. With <strong>failover controls</strong> you set buckets as <strong>active or passive</strong>; requests go to active buckets, and changing the routing status moves traffic to another Region within minutes. Pair it with <strong>replication</strong> (often two-way replication rules) so each bucket holds the data. The access point routes requests; it does not copy objects itself.',
    tags: ['S3', 'Multi-Region Access Points', 'Failover']
  },
  {
    id: 'aws-soa-fc-224',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'AWS Resilience Hub vs AWS Fault Injection Service: which answers which question?',
    hint: 'Assessing versus experimenting.',
    back: '<strong>Resilience Hub</strong> answers "can this application meet its RTO and RPO?" by analysing its resources against a <strong>resiliency policy</strong> and recommending improvements, alarms and SOPs. <strong>Fault Injection Service</strong> answers "what actually happens when this fails?" by running controlled <strong>experiments</strong> that inject faults with stop conditions. Resilience Hub can recommend FIS experiments to validate its findings.',
    tags: ['Resilience Hub', 'Fault Injection Service']
  },
  {
    id: 'aws-soa-fc-225',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does ElastiCache Global Datastore provide for disaster recovery?',
    hint: 'One writer Region, read replicas elsewhere, manual promotion.',
    back: 'Global Datastore (Valkey or Redis OSS) replicates a primary cluster to <strong>up to two secondary Regions</strong> with typical lag under a second. Secondary clusters serve low-latency reads but reject writes. In a Regional disaster you <strong>promote a secondary</strong> to primary, which takes about a minute, and repoint writers to it. It needs node-based clusters on supported node types, not ElastiCache Serverless.',
    tags: ['ElastiCache', 'Global Datastore']
  }
];

export default AWS_SOA_FLASHCARDS_9;
