export const AWS_SOA_FLASHCARDS_8 = [
  {
    id: 'aws-soa-fc-176',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are the building blocks of AWS Backup, and what does each hold?',
    hint: 'Plan, rule, assignment, vault, recovery point.',
    back: 'A <strong>backup plan</strong> contains one or more <strong>backup rules</strong> (schedule, backup window, lifecycle, target vault, copy actions). A <strong>resource assignment</strong> selects what the plan protects, by ARN, resource type or <strong>tag</strong>. A <strong>backup vault</strong> is the encrypted container that stores <strong>recovery points</strong>, each of which is one backup of one resource that you can restore.',
    tags: ['AWS Backup']
  },
  {
    id: 'aws-soa-fc-177',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'AWS Backup vs Amazon Data Lifecycle Manager: when is each the right tool?',
    hint: 'One is broad, one is narrow but has EBS-only extras.',
    back: '<strong>AWS Backup</strong>: one policy engine across many services (EC2, EBS, RDS, Aurora, DynamoDB, EFS, FSx, S3 and more), with vaults, Vault Lock, cross-Region and cross-account copies, audit reports and restore testing. <strong>Data Lifecycle Manager</strong>: only EBS snapshots and EBS-backed AMIs, with free, tag-driven policies, count-based retention, fast snapshot restore enablement, snapshot archiving and AMI deprecation. Use DLM for simple EBS or AMI lifecycles; use AWS Backup for governance across services.',
    tags: ['AWS Backup', 'Data Lifecycle Manager']
  },
  {
    id: 'aws-soa-fc-178',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'AWS Backup Vault Lock: governance mode vs compliance mode?',
    hint: 'Who, if anyone, can remove the lock?',
    back: 'Both enforce minimum and maximum retention and block early deletion of recovery points. <strong>Governance mode</strong>: users with the right IAM permissions can change or remove the lock, which suits testing and internal policy. <strong>Compliance mode</strong>: after a <strong>grace time</strong> of at least 3 days, the lock becomes immutable; no one, including the root user or AWS, can delete recovery points early or remove the lock. Use compliance mode for regulatory write-once-read-many requirements.',
    tags: ['AWS Backup', 'Vault Lock']
  },
  {
    id: 'aws-soa-fc-179',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which schedule and window settings does an AWS Backup rule have, and what are their limits?',
    hint: 'How often, when it may start, how long it may run.',
    back: '<strong>Frequency</strong>: hourly, every 12 hours, daily, weekly, monthly or a custom cron expression; <strong>hourly is the most frequent periodic backup</strong>, and continuous backup covers anything tighter. <strong>Start within</strong>: how long after the scheduled time a job may start before it is cancelled (default 8 hours). <strong>Complete within</strong>: how long a started job may run (default 7 days). Each rule also sets the lifecycle, the target vault and optional copy actions.',
    tags: ['AWS Backup', 'Backup rules']
  },
  {
    id: 'aws-soa-fc-180',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What rules apply to moving AWS Backup recovery points to cold storage?',
    hint: 'Not every resource, and not for a short stay.',
    back: 'Only <strong>some resource types</strong> support cold storage transition, for example EFS and DynamoDB (once AWS Backup advanced DynamoDB features are enabled). Recovery points must remain in cold storage for at least <strong>90 days</strong>, so the retention period must be at least 90 days longer than the transition time. Continuous backups cannot move to cold storage. Restores from cold storage take longer, so keep recent points warm.',
    tags: ['AWS Backup', 'Cold storage']
  },
  {
    id: 'aws-soa-fc-181',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which resources support AWS Backup continuous backup, and how far back can you restore?',
    hint: 'Point-in-time recovery managed by AWS Backup.',
    back: 'Continuous backup is available for <strong>Amazon RDS</strong>, <strong>Aurora</strong>, <strong>Amazon S3</strong> and SAP HANA on EC2. It lets you restore to any point in time within the retention period, up to <strong>35 days</strong>. For longer retention, combine it with periodic (snapshot) rules in the same plan. For S3, versioning must be enabled on the bucket.',
    tags: ['AWS Backup', 'Continuous backup']
  },
  {
    id: 'aws-soa-fc-182',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What must be in place for AWS Backup to copy recovery points to another account?',
    hint: 'Organization, opt-in, vault policy, keys.',
    back: 'Both accounts in the same <strong>AWS Organization</strong>; <strong>cross-account backup enabled</strong> in the management account\'s AWS Backup settings; a <strong>vault access policy</strong> on the destination vault that allows the source account to copy in; and, for resources whose backups use the source resource\'s key (such as RDS or EBS), a <strong>customer managed KMS key</strong> shared with the destination. Backups encrypted with AWS managed keys cannot be copied across accounts.',
    tags: ['AWS Backup', 'Cross-account', 'KMS']
  },
  {
    id: 'aws-soa-fc-183',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What do AWS Organizations backup policies give you that per-account backup plans do not?',
    hint: 'Inheritance and immutability for member admins.',
    back: 'A <strong>backup policy</strong> attached to the root, an OU or an account creates the defined backup plan in every member account in scope, including accounts added later, and it is inherited down the OU tree. Member account administrators can see the policy-managed plan but <strong>cannot edit or delete it</strong>. It is managed from the management account or a delegated administrator and is the standard way to enforce backups across many accounts.',
    tags: ['AWS Backup', 'AWS Organizations']
  },
  {
    id: 'aws-soa-fc-184',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does AWS Backup restore testing do?',
    hint: 'Scheduled proof that backups restore.',
    back: 'A <strong>restore testing plan</strong> picks recovery points (for example the latest, or a random one from a time range) of selected resources on a schedule, restores them automatically, optionally runs your validation (for example through a Lambda function triggered by EventBridge), records how long each restore took, and then deletes the restored resources. It gives auditors evidence that backups are usable and that restore time fits the RTO.',
    tags: ['AWS Backup', 'Restore testing']
  },
  {
    id: 'aws-soa-fc-185',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does AWS Backup Audit Manager provide?',
    hint: 'Frameworks, controls, reports.',
    back: 'Audit Manager evaluates your backup activity against <strong>frameworks</strong> made of <strong>controls</strong>, such as "resources are protected by a backup plan", "backups meet a minimum frequency and retention", "recovery points are encrypted" or "backups are copied cross-Region". It records compliance continuously (using AWS Config) and produces daily <strong>reports</strong> of jobs and compliance that you can hand to auditors.',
    tags: ['AWS Backup', 'Audit Manager']
  },
  {
    id: 'aws-soa-fc-186',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What is an AWS Backup logically air-gapped vault?',
    hint: 'Isolation plus sharing for recovery.',
    back: 'A vault type whose recovery points are stored in an <strong>AWS-owned, isolated account</strong>, <strong>locked in compliance mode</strong> by default, and protected from deletion by anyone in your account. It can be <strong>shared through AWS RAM</strong> with another account, even a newly created one, which can then restore directly from it without first copying the data. It is designed for recovery when the source account itself is compromised.',
    tags: ['AWS Backup', 'Logically air-gapped vault']
  },
  {
    id: 'aws-soa-fc-187',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'RDS automated backups vs manual snapshots: how do they differ?',
    hint: 'Retention and what happens when the instance is deleted.',
    back: '<strong>Automated backups</strong>: a daily snapshot plus transaction logs, retained 1 to 35 days, enabling <strong>point-in-time restore</strong>; setting retention to 0 disables them. They are removed when the instance is deleted unless you choose to retain them. <strong>Manual snapshots</strong>: taken on demand or by AWS Backup, kept until you delete them, survive instance deletion, restore only to the moment they were taken, and can be shared with other accounts.',
    tags: ['RDS', 'Backups']
  },
  {
    id: 'aws-soa-fc-188',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does RDS point-in-time restore work, and how recent can the restore point be?',
    hint: 'A new instance, and a lag of a few minutes.',
    back: 'RDS restores the most recent daily snapshot before the target time and replays <strong>transaction logs</strong> up to the chosen second, creating a <strong>new DB instance</strong> with a new endpoint; the original is untouched. Logs are uploaded about every five minutes, so the <strong>latest restorable time</strong> is usually within the last five minutes. Choose the security group and parameter group during the restore, or defaults are applied.',
    tags: ['RDS', 'Point-in-time restore']
  },
  {
    id: 'aws-soa-fc-189',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Aurora backtrack, point-in-time restore or clone: which recovery tool fits which need?',
    hint: 'In place, new cluster, or a cheap copy.',
    back: '<strong>Backtrack</strong> (Aurora MySQL): rewind the <strong>same cluster in place</strong> within minutes to an earlier time in the backtrack window; the fastest way to undo a bad change when the whole database can go back. <strong>Point-in-time restore</strong>: create a <strong>new cluster</strong> at any second in the backup retention period; slower, but the original stays available for comparison. <strong>Clone</strong>: a copy-on-write copy of the <strong>current</strong> state for testing or forensics; it cannot go back in time.',
    tags: ['Aurora', 'Backtrack', 'Cloning']
  },
  {
    id: 'aws-soa-fc-190',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are the limits of Aurora backtracking?',
    hint: 'Engine, window, and when it can be turned on.',
    back: 'Backtracking is available only for <strong>Aurora MySQL</strong>. The target window can be up to <strong>72 hours</strong>, and change records for the window are billed. It must be enabled when the cluster is <strong>created or restored from a snapshot</strong>, not added to an existing cluster in place. Backtracking rewinds the <strong>entire cluster</strong>, not a single table, and briefly disrupts connections while it runs.',
    tags: ['Aurora', 'Backtrack']
  },
  {
    id: 'aws-soa-fc-191',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'DynamoDB point-in-time recovery vs on-demand backups: what does each give you?',
    hint: 'Any second versus kept forever.',
    back: '<strong>Point-in-time recovery</strong>: continuous backups that restore the table to <strong>any second</strong> within a recovery period of up to <strong>35 days</strong>, into a new table. <strong>On-demand backups</strong>: full backups taken when you ask (or by AWS Backup), kept until deleted, for long-term retention and archiving. Neither affects table performance or consumes provisioned capacity.',
    tags: ['DynamoDB', 'Backups']
  },
  {
    id: 'aws-soa-fc-192',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does DynamoDB export to Amazon S3 work, and why use it instead of a Scan?',
    hint: 'It reads from backups, not from the table.',
    back: 'Export to S3 requires <strong>point-in-time recovery</strong> and reads from the continuous backup data, so it <strong>consumes no read capacity</strong> and does not affect live traffic. You can export a full copy as of any point in the recovery window, or an <strong>incremental export</strong> of changes between two times, in DynamoDB JSON or Amazon Ion format. The data can then be queried with Athena or re-imported with import from S3 into a new table.',
    tags: ['DynamoDB', 'Export to S3']
  },
  {
    id: 'aws-soa-fc-193',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'EBS snapshots are incremental. What happens when you delete one?',
    hint: 'Blocks still needed are never lost.',
    back: 'Each snapshot stores only blocks changed since the previous snapshot, but every snapshot can restore the <strong>full volume</strong>. Deleting a snapshot removes only blocks that <strong>no other snapshot references</strong>; blocks still needed by later snapshots are kept. So you can delete older snapshots safely, although the storage saved may be small. Snapshots are stored regionally and can be copied to other Regions and accounts.',
    tags: ['EBS', 'Snapshots']
  },
  {
    id: 'aws-soa-fc-194',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'When should you use the EBS Snapshots Archive tier, and what does a restore cost in time?',
    hint: 'Cheap to keep, slow to bring back.',
    back: 'Archiving converts a snapshot to a <strong>full</strong> (not incremental) snapshot in a tier that costs up to about <strong>75% less</strong> to store. It has a <strong>minimum of 90 days</strong> in the archive, and restoring it to the standard tier takes <strong>24 to 72 hours</strong> before a volume can be created. Use it for rarely needed, long-retention snapshots such as month-end or compliance copies, never for recovery with a short RTO.',
    tags: ['EBS', 'Snapshots Archive']
  },
  {
    id: 'aws-soa-fc-195',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does Recycle Bin protect, and how is it configured?',
    hint: 'Accidental deletion of snapshots and images.',
    back: 'Recycle Bin keeps deleted <strong>EBS snapshots</strong> and <strong>EBS-backed AMIs</strong> for a retention period you set in a <strong>retention rule</strong>, from 1 day to 1 year. Rules apply to all resources of that type in the Region or only to those with matching <strong>tags</strong>, and can be locked to stop them being weakened. Recover a resource before its retention expires, after which it is permanently deleted.',
    tags: ['EBS', 'Recycle Bin']
  },
  {
    id: 'aws-soa-fc-196',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How is EBS fast snapshot restore scoped and billed?',
    hint: 'Per snapshot, per zone, per hour, with credits.',
    back: 'Fast snapshot restore is enabled for a specific <strong>snapshot</strong> in specific <strong>Availability Zones</strong>. Volumes created from it in those zones are fully initialized and deliver full performance at once. It is billed for every hour it stays enabled in each zone, whether or not you create volumes, and volume creation is limited by a <strong>credit bucket</strong> that is smaller for larger snapshots. Enable it only for snapshots on the recovery path.',
    tags: ['EBS', 'Fast snapshot restore']
  },
  {
    id: 'aws-soa-fc-197',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'RTO vs RPO: what does each measure, and what improves it?',
    hint: 'Time to recover versus data you can lose.',
    back: '<strong>Recovery time objective</strong>: the maximum acceptable time from disruption until service is restored; improved by faster restore methods, standby resources and automation. <strong>Recovery point objective</strong>: the maximum acceptable amount of data loss, measured as time since the last recoverable point; improved by more frequent backups, continuous backup or replication. Lower values of either usually cost more.',
    tags: ['RTO', 'RPO', 'Disaster recovery']
  },
  {
    id: 'aws-soa-fc-198',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'EFS protection: AWS Backup vs EFS replication?',
    hint: 'History versus a live copy.',
    back: '<strong>AWS Backup</strong> keeps point-in-time recovery points of the file system, supports full restores and <strong>item-level restores</strong> of specific files or directories, and protects against deletion or corruption. <strong>EFS replication</strong> keeps a read-only copy in another Region or zone that is typically minutes behind, for disaster recovery; it replicates deletions and corruption too, so it is not a backup. Use both for full protection.',
    tags: ['EFS', 'AWS Backup', 'Replication']
  },
  {
    id: 'aws-soa-fc-199',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does RDS cross-Region automated backup replication give you?',
    hint: 'Point-in-time restore in a second Region without a running instance.',
    back: 'RDS replicates an instance\'s <strong>automated snapshots and transaction logs</strong> to a destination Region, with its own retention. You can then do a <strong>point-in-time restore in the destination Region</strong> with an RPO of minutes, and no database instance runs there until you restore. It costs less than a cross-Region read replica, at the price of a longer RTO because the restore must complete first.',
    tags: ['RDS', 'Cross-Region backups']
  },
  {
    id: 'aws-soa-fc-200',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which RDS snapshots can you share with another AWS account?',
    hint: 'Manual only, and the key matters.',
    back: 'Only <strong>manual</strong> snapshots can be shared (copy an automated one to make it manual). Unencrypted snapshots can be shared with specific accounts or made public. Snapshots encrypted with a <strong>customer managed KMS key</strong> can be shared with specific accounts if the key policy lets them use the key. Snapshots encrypted with the <strong>AWS managed key</strong> cannot be shared, and encrypted snapshots can never be public.',
    tags: ['RDS', 'Snapshots', 'KMS']
  }
];

export default AWS_SOA_FLASHCARDS_8;
