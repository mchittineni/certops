export const AZURE_AZ305_FLASHCARDS_11 = [
  {
    id: "azure-az305-fc-251",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure VM backup: standard policy vs enhanced policy. What does the enhanced policy add?",
    hint: "Frequency, snapshot retention, newer VM types.",
    back: "The <strong>standard policy</strong> allows one backup a day (or week) and keeps instant restore snapshots for 1 to 5 days. The <strong>enhanced policy</strong> adds <strong>multiple backups a day</strong> (every 4, 6, 8 or 12 hours), instant restore retention of <strong>up to 30 days</strong>, and support for <strong>Trusted Launch</strong> VMs and <strong>Premium SSD v2 and Ultra</strong> disks, which the standard policy cannot protect. New designs should default to the enhanced policy.",
    tags: ["Azure Backup", "Enhanced policy"]
  },
  {
    id: "azure-az305-fc-252",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "What is the instant restore tier of an Azure VM backup, and why does its retention matter?",
    hint: "Snapshots near the disks vs copies in the vault.",
    back: "Each VM backup first takes <strong>managed disk snapshots</strong> that stay in your subscription (the snapshot or operational tier) for the instant restore retention period, then copies the data to the vault. Restores from a snapshot skip the copy back from the vault, so they are <strong>much faster</strong>, which lowers RTO for recent recovery points. Longer snapshot retention costs more in snapshot storage, so size it to how far back most restores go.",
    tags: ["Azure Backup", "Instant restore", "RTO"]
  },
  {
    id: "azure-az305-fc-253",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure VM backup consistency: application-consistent vs file-system consistent vs crash-consistent?",
    hint: "What was flushed before the snapshot?",
    back: "<strong>Application-consistent</strong>: VSS on Windows, or pre and post scripts on Linux, flush application memory and pending I/O, so apps start without recovery; the best result. <strong>File-system consistent</strong>: the file systems were frozen, but applications may need their own recovery (the Linux default without scripts). <strong>Crash-consistent</strong>: like a power loss; taken when the VM is shut down or the agent cannot quiesce, and data in flight may be lost.",
    tags: ["Azure Backup", "Consistency"]
  },
  {
    id: "azure-az305-fc-254",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure VM backup restore options: create new VM, restore disks, replace existing. When do you use each?",
    hint: "Whole machine, parts, or overwrite.",
    back: "<strong>Create new VM</strong>: a quick full copy of the VM from a recovery point, for testing or when the original is gone. <strong>Restore disks</strong>: creates managed disks you can attach to an existing VM or use with a template to build a customised VM, ideal for replacing one corrupted disk. <strong>Replace existing</strong>: overwrites the current VM's disks with the recovery point, keeping its configuration. Cross Region Restore and cross-subscription restore extend where the result lands.",
    tags: ["Azure Backup", "Restore"]
  },
  {
    id: "azure-az305-fc-255",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How does file-level recovery from an Azure VM backup work?",
    hint: "A script and a temporary mount.",
    back: "You pick a recovery point and download a <strong>script</strong>; running it on a machine (the original VM or another with a compatible OS) connects the recovery point's disks over <strong>iSCSI</strong> and mounts them as local drives. You then copy the files you need and unmount; the connection is temporary and expires after about 12 hours. No disk or VM is restored, so it is the fastest way to recover individual files and folders.",
    tags: ["Azure Backup", "File-level recovery"]
  },
  {
    id: "azure-az305-fc-256",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Disk Backup vs Azure VM backup: when do you choose disk-level protection?",
    hint: "Agentless snapshots of individual disks.",
    back: "<strong>Azure Disk Backup</strong> (in a <strong>Backup vault</strong>) takes agentless, <strong>crash-consistent incremental snapshots</strong> of individual managed disks as often as every hour and keeps them in a snapshot resource group in your subscription; restores create a new disk. Choose it for frequent rollback points on specific disks, disks shared between VMs, or disks whose VM is covered by another method. Choose <strong>VM backup</strong> when you need application consistency, vaulted long-term copies, or whole-VM restores.",
    tags: ["Azure Disk Backup", "Backup vault", "Managed disks"]
  },
  {
    id: "azure-az305-fc-257",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup for AKS: what is backed up, and what must be in place?",
    hint: "An extension, a storage account and Trusted Access.",
    back: "It backs up <strong>Kubernetes resources</strong> (deployments, config maps, secrets and so on) and <strong>persistent volumes</strong> (Azure Disk through CSI snapshots) per cluster or namespace, and restores them to the same or another cluster. You need the <strong>backup extension</strong> installed in the cluster with a <strong>storage account</strong> for resource backups, <strong>Trusted Access</strong> between the <strong>Backup vault</strong> and the cluster, and a policy that keeps snapshots in the operational tier and, optionally, copies to the vault tier.",
    tags: ["Azure Backup", "AKS"]
  },
  {
    id: "azure-az305-fc-258",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "App Service automatic backups vs custom backups: what can each do?",
    hint: "Built-in and fixed vs configured and flexible.",
    back: "<strong>Automatic backups</strong> are built in for Basic, Standard and Premium plans: taken regularly, retained for a fixed 30 days, app content and configuration only, no storage account needed. <strong>Custom backups</strong> write to a <strong>storage account you choose</strong> on your own schedule with <strong>your own retention</strong>, can include supported <strong>linked databases</strong> from connection strings, and can be triggered on demand. Use custom backups when retention or database inclusion requirements go beyond the defaults.",
    tags: ["App Service", "Backup"]
  },
  {
    id: "azure-az305-fc-259",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which compute resources should you not back up with Azure Backup, and how are they recovered instead?",
    hint: "Stateless things are rebuilt, not restored.",
    back: "Stateless, platform-managed compute is <strong>redeployed, not restored</strong>: AKS node VMs, Uniform scale set instances, App Service workers, Functions and Container Apps replicas. Recover them from <strong>infrastructure as code</strong> (Bicep, Terraform), container images in a registry and CI/CD pipelines, and protect only the <strong>state</strong> they depend on (databases, storage, Kubernetes persistent volumes, Key Vault). Backing up disposable instances adds cost and gives restores that drift from the declared configuration.",
    tags: ["Backup strategy", "Infrastructure as code", "Stateless compute"]
  },
  {
    id: "azure-az305-fc-260",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Can Azure Backup protect VMs in a Virtual Machine Scale Set?",
    hint: "It depends on the orchestration mode.",
    back: "Azure VM backup supports individual VMs in scale sets using <strong>Flexible orchestration</strong>, because each instance is a standard VM resource. <strong>Uniform</strong> scale set instances are not supported, since they are meant to be identical and disposable. For Uniform sets, keep state off the instances and rebuild from the image and model; if a Flexible set holds stateful instances, protect each VM (or its data disks) individually.",
    tags: ["Azure Backup", "Virtual Machine Scale Sets"]
  },
  {
    id: "azure-az305-fc-261",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Selective disk backup: what does it change about backup and restore?",
    hint: "Include some data disks, skip others.",
    back: "A VM backup policy can include the <strong>OS disk plus only chosen data disks</strong> (by LUN), excluding disks such as scratch or tempdb volumes to cut backup storage and time. At restore, only the included disks come back: <strong>restore disks</strong> returns those disks, and a restore that creates or replaces a VM brings back the VM without the excluded disks, which must be recreated. Record which LUNs are excluded so recovery runbooks recreate them.",
    tags: ["Azure Backup", "Selective disk backup"]
  },
  {
    id: "azure-az305-fc-262",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup vault-archive tier: which recovery points can move there, and what are the trade-offs?",
    hint: "Old, long-term points only.",
    back: "Eligible points are long-term <strong>monthly and yearly</strong> recovery points (for Azure VMs and SQL or SAP HANA in VMs) that have been in the vault-standard tier for <strong>at least three months</strong>; a policy can move them automatically or you move them on demand. Archive storage costs far less, but points stay there for a <strong>minimum of 180 days</strong> (early deletion is charged) and must be <strong>rehydrated</strong> before a restore, which takes hours. Use it for compliance retention that is rarely restored.",
    tags: ["Azure Backup", "Archive tier", "Long-term retention"]
  },
  {
    id: "azure-az305-fc-263",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "SQL Server on an Azure VM: Azure Backup vs Automated Backup vs manual backup to URL?",
    hint: "Managed vault, extension to storage, or do it yourself.",
    back: "<strong>Azure Backup for SQL Server</strong>: streaming full, differential and log backups into a Recovery Services vault with policy retention up to years, 15-minute log backups and central monitoring; the default choice. <strong>Automated Backup</strong> (SQL IaaS Agent extension): writes backups to a storage account you own with up to 90 days of retention. <strong>Backup to URL</strong>: T-SQL or Agent jobs you manage yourself, for special cases such as copying a database elsewhere.",
    tags: ["SQL Server on Azure VMs", "Azure Backup"]
  },
  {
    id: "azure-az305-fc-264",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup for SQL Server in VMs: which backup types and frequencies can a policy use?",
    hint: "Full, differential, log.",
    back: "<strong>Full</strong> backups daily or weekly; <strong>differential</strong> backups up to once a day when fulls are weekly; <strong>log</strong> backups as often as <strong>every 15 minutes</strong>, giving point-in-time restore with an RPO of about 15 minutes. <strong>Auto-protection</strong> on an instance or availability group automatically protects databases added later, and backups follow the availability group's backup preference so they can run on a secondary replica.",
    tags: ["Azure Backup", "SQL Server on Azure VMs"]
  },
  {
    id: "azure-az305-fc-265",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "SAP HANA on Azure VMs: Backint streaming backups vs HANA snapshot backups. When do you need both?",
    hint: "Log granularity vs restore speed for large databases.",
    back: "<strong>Backint</strong> streaming backups (certified by SAP) send full, differential, incremental and <strong>log backups every 15 minutes</strong> to a Recovery Services vault, enabling point-in-time recovery, but restoring multi-terabyte databases streams all data back and takes hours. <strong>HANA snapshot</strong> backups use managed disk snapshots coordinated with HANA for <strong>fast restores regardless of size</strong>. Large databases with tight RTOs combine snapshots for the data with Backint log backups for point-in-time recovery.",
    tags: ["Azure Backup", "SAP HANA"]
  },
  {
    id: "azure-az305-fc-266",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure SQL Database automated backups: how often does each backup type run, and how long are they kept?",
    hint: "Weekly, twice daily or daily, every few minutes.",
    back: "Azure takes <strong>full backups weekly</strong>, <strong>differential backups every 12 or 24 hours</strong> and <strong>transaction log backups about every 10 minutes</strong>, with no configuration. Point-in-time restore retention is <strong>1 to 35 days</strong> (7 by default; Basic is limited to 7). For longer needs, a <strong>long-term retention</strong> policy keeps weekly, monthly or yearly full backups for up to 10 years. Restores always create a new database.",
    tags: ["Azure SQL Database", "Automated backups"]
  },
  {
    id: "azure-az305-fc-267",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure SQL Managed Instance: how do you take your own backup of a database when the service manages backups?",
    hint: "One BACKUP option is mandatory.",
    back: "Automated backups work as in SQL Database (full, differential, log, 1 to 35 days, plus optional LTR). For your own copy, run <strong>BACKUP DATABASE ... TO URL WITH COPY_ONLY</strong> to a storage account using a credential; user backups must be <strong>copy-only</strong> so they do not break the service's backup chain. Copy-only backups are used to move a database elsewhere or keep an ad hoc copy, and copy-only backups of databases protected by service-managed TDE are blocked, so use customer-managed TDE, whose key the restore target can access.",
    tags: ["Azure SQL Managed Instance", "Copy-only backup"]
  },
  {
    id: "azure-az305-fc-268",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure SQL Database geo-restore vs active geo-replication: what RPO and RTO do you get from each?",
    hint: "Backups vs a live replica.",
    back: "<strong>Geo-restore</strong> restores from geo-replicated backups to any region: RPO up to <strong>1 hour</strong> and RTO up to about <strong>12 hours</strong>, at no extra cost beyond geo-redundant backup storage; fine for workloads that tolerate hours of recovery. <strong>Active geo-replication</strong> or a <strong>failover group</strong> keeps a live readable secondary: RPO of seconds and RTO of minutes, at the cost of running the secondary.",
    tags: ["Azure SQL Database", "Geo-restore", "Geo-replication"]
  },
  {
    id: "azure-az305-fc-269",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How are Azure SQL Hyperscale backups different from other service tiers?",
    hint: "Snapshots, not backup files.",
    back: "Hyperscale backups are <strong>storage snapshots</strong> of the data files held by page servers, plus the log, so there is no full/differential cycle and backups add no load on compute. A point-in-time restore in the same region completes in <strong>minutes regardless of database size</strong>, even at tens of terabytes, because it restores snapshots rather than copying backup files. Retention is 1 to 35 days, with LTR and geo-restore also available.",
    tags: ["Hyperscale", "Backups", "Restore"]
  },
  {
    id: "azure-az305-fc-270",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Database for PostgreSQL and MySQL flexible server backups: what is built in, and what is fixed at creation?",
    hint: "Retention range, restore target, redundancy choice.",
    back: "Both take automatic backups (snapshots plus transaction logs) with retention of up to <strong>35 days</strong>, and a point-in-time restore always creates a <strong>new server</strong>. Backup storage is locally or zone-redundant by default; <strong>geo-redundant backup storage</strong>, which enables geo-restore to the paired region, must be chosen <strong>when the server is created</strong>. For retention beyond 35 days, protect PostgreSQL flexible server with <strong>Azure Backup long-term retention</strong> in a Backup vault.",
    tags: ["PostgreSQL", "MySQL", "Backups"]
  },
  {
    id: "azure-az305-fc-271",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cosmos DB periodic backup mode: how does it work by default, and how do you restore?",
    hint: "Every few hours, two copies, and a support ticket.",
    back: "Periodic mode, the default, takes a full backup every <strong>4 hours</strong> and keeps the latest <strong>2 backups</strong> (8 hours) by default; you can set the interval (1 to 24 hours), the retention and the backup storage redundancy (geo, zone or local). Restores are requested through a <strong>support ticket</strong> and go to a new account. Restores cannot target an arbitrary second, so it suits workloads that can accept that granularity and process.",
    tags: ["Cosmos DB", "Periodic backup"]
  },
  {
    id: "azure-az305-fc-272",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cosmos DB continuous backup: 7-day vs 30-day tier, restore targets, and can you switch back to periodic?",
    hint: "One-way migration.",
    back: "<strong>Continuous 7-day</strong> tier is free for backup storage and gives self-service point-in-time restore to any second in the last 7 days; the <strong>30-day</strong> tier extends that window at a cost. A restore of an account point in time creates a <strong>new account</strong>, and deleted databases or containers can also be restored into the existing account. Migrating an account from periodic to continuous is <strong>one way</strong>: you cannot switch it back to periodic afterwards.",
    tags: ["Cosmos DB", "Continuous backup"]
  },
  {
    id: "azure-az305-fc-273",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "What happens to Azure SQL Database backups if the logical server itself is deleted?",
    hint: "PITR backups go with the server; LTR backups stay.",
    back: "Deleting a <strong>logical server</strong> deletes its databases and their <strong>point-in-time restore backups</strong>, so deleted databases on that server can no longer be restored. <strong>Long-term retention backups</strong> are kept after server deletion and can be restored to another server until they expire. Protect production servers with a <strong>CanNotDelete resource lock</strong> and configure LTR for anything that must survive an accidental server deletion.",
    tags: ["Azure SQL Database", "Backups", "Resource locks"]
  },
  {
    id: "azure-az305-fc-274",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What must an Azure VM have for Azure Backup to protect it successfully?",
    hint: "An agent and a network path.",
    back: "The <strong>Azure VM Agent</strong> must be installed and running, because Azure Backup installs its backup extension through it to coordinate snapshots (VSS or Linux scripts). For workload backups such as SQL Server or SAP HANA, the VM also needs <strong>outbound connectivity</strong> to Azure Backup, Azure Storage and Microsoft Entra ID, through service tags, private endpoints for the vault, or a proxy. A VM that is shut down still gets crash-consistent backups.",
    tags: ["Azure Backup", "Prerequisites"]
  },
  {
    id: "azure-az305-fc-275",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How do you make sure every new production VM is backed up without relying on people to enable it?",
    hint: "Policy with a remediation effect.",
    back: "Assign the built-in <strong>Azure Policy</strong> definitions that <strong>configure backup on VMs</strong> with (or without) a given tag to a Recovery Services vault in the same location, using a <strong>DeployIfNotExists</strong> effect and a remediation task for existing VMs. Assign it at management group scope so every subscription is covered, pair it with an audit policy for reporting, and use the Business Continuity Center views to track protection gaps.",
    tags: ["Azure Backup", "Azure Policy", "Governance"]
  }
];

export default AZURE_AZ305_FLASHCARDS_11;
