export const AZURE_AZ305_FLASHCARDS_10 = [
  {
    id: "azure-az305-fc-226",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "RPO vs RTO: what does each measure, and which Azure service choice does each usually drive?",
    hint: "Data lost vs time down.",
    back: "<strong>Recovery point objective (RPO)</strong>: the maximum acceptable <strong>data loss</strong>, measured back in time from the failure (for example 15 minutes). <strong>Recovery time objective (RTO)</strong>: the maximum acceptable <strong>downtime</strong> until the service runs again (for example 2 hours). An RPO of minutes for VMs points to continuous replication such as Azure Site Recovery; an RPO of a day with an RTO of hours or days is usually met by Azure Backup restores.",
    tags: ["RPO", "RTO", "Recovery objectives"]
  },
  {
    id: "azure-az305-fc-227",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup vs Azure Site Recovery: what problem does each solve?",
    hint: "Going back in time vs moving somewhere else.",
    back: "<strong>Azure Backup</strong> keeps point-in-time copies for days to years so you can <strong>restore</strong> data or whole machines after deletion, corruption or ransomware; typical RPO is hours to a day. <strong>Azure Site Recovery</strong> continuously <strong>replicates</strong> machines to another region, zone or to Azure so you can <strong>fail over</strong> the running workload after an outage, with an RPO of minutes but recovery points kept only for days. Critical workloads often use both.",
    tags: ["Azure Backup", "Azure Site Recovery"]
  },
  {
    id: "azure-az305-fc-228",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure-to-Azure Site Recovery: which components live in the source region and which in the target region?",
    hint: "Vault, cache, extension.",
    back: "<strong>Source region</strong>: the protected VMs with the Site Recovery <strong>Mobility service extension</strong> installed automatically, which captures disk writes, and a <strong>cache storage account</strong> that stages changes. <strong>Target region</strong>: the <strong>Recovery Services vault</strong>, the replica managed disks, and the target resource group, virtual network and optional availability set or zone where VMs are created at failover. The vault sits in the target so it survives a source-region outage.",
    tags: ["Azure Site Recovery", "Architecture"]
  },
  {
    id: "azure-az305-fc-229",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery recovery points: crash-consistent vs application-consistent. How often is each created?",
    hint: "Minutes vs at least an hour.",
    back: "<strong>Crash-consistent</strong> points capture what was on disk, like pulling the power cord, and are created about <strong>every 5 minutes</strong>; most applications recover from them. <strong>Application-consistent</strong> points use VSS on Windows (or pre/post scripts on Linux) to flush in-memory data and pending I/O, and can be taken no more often than <strong>every hour</strong>. App-consistent snapshots add load on the VM, so take them only as often as the workload needs.",
    tags: ["Azure Site Recovery", "Recovery points"]
  },
  {
    id: "azure-az305-fc-230",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How long can Azure Site Recovery keep recovery points, and why does that matter for design?",
    hint: "Days, not months.",
    back: "Recovery point retention for Azure-to-Azure replication is configurable up to <strong>15 days</strong>. That makes Site Recovery a disaster recovery tool, not a backup: it cannot restore last month's state after corruption that went unnoticed, and corruption replicates to the target within minutes. For longer history or ransomware recovery, add <strong>Azure Backup</strong>, which can protect the same VMs at the same time.",
    tags: ["Azure Site Recovery", "Retention"]
  },
  {
    id: "azure-az305-fc-231",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery: test failover vs planned failover vs unplanned failover. When do you use each?",
    hint: "Drill, move, disaster.",
    back: "<strong>Test failover</strong>: a drill that creates VMs in a network you choose, ideally isolated, while replication and production continue; clean it up afterwards. <strong>Planned failover</strong>: a controlled move with zero data loss while the source is still healthy, supported for Hyper-V replication to Azure and for failback to the original site. <strong>Unplanned failover</strong>: used in a real outage, recovering from the latest or a chosen recovery point, accepting loss of changes after it.",
    tags: ["Azure Site Recovery", "Failover"]
  },
  {
    id: "azure-az305-fc-232",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "What can an Azure Site Recovery recovery plan contain?",
    hint: "Groups, order, scripts, pauses.",
    back: "A recovery plan groups replicated machines into up to <strong>seven groups</strong> that fail over and start <strong>in sequence</strong> (database, then app, then web), with <strong>pre and post actions</strong>: Azure Automation runbooks (update DNS, attach a load balancer, change connection strings) and <strong>manual actions</strong> that pause the plan until someone confirms a step. Test, planned and unplanned failovers can all run against the plan, turning a runbook document into one click.",
    tags: ["Azure Site Recovery", "Recovery plans"]
  },
  {
    id: "azure-az305-fc-233",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery multi-VM consistency: what does it guarantee, and what does it cost?",
    hint: "Shared recovery points, a group limit, and a port.",
    back: "VMs placed in the same <strong>replication group</strong> get <strong>shared crash-consistent and app-consistent recovery points</strong>, so after failover they all return to the same moment, which matters for workloads that span VMs, such as clustered or distributed databases. A group holds up to <strong>16 VMs</strong>, the VMs coordinate over network port 20004, and the coordination adds CPU overhead, so enable it only where cross-VM consistency is actually required.",
    tags: ["Azure Site Recovery", "Multi-VM consistency"]
  },
  {
    id: "azure-az305-fc-234",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery reprotect and failback: what happens after a failover to the DR region?",
    hint: "Reverse, then return.",
    back: "After failing over, the VMs run in the DR region unprotected. <strong>Reprotect</strong> reverses replication so they replicate back to the original region, reusing existing disks there where possible so only changes are sent. When the original region is ready, run a <strong>failover</strong> back to it (failback), then reprotect again to restore the original direction. Skipping reprotect leaves the workload with no DR copy while it runs in the secondary.",
    tags: ["Azure Site Recovery", "Failback", "Reprotect"]
  },
  {
    id: "azure-az305-fc-235",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "How do you keep the same private IP addresses for VMs after a Site Recovery failover?",
    hint: "Match the address space.",
    back: "Make the <strong>target VNet's address space and subnet match the source</strong>: Site Recovery then gives each failed-over VM the same private IP it had, if that address is free in the target subnet. Because the address spaces overlap, the source and target VNets cannot be peered, so connectivity to the target is designed separately (for example a separate VPN or ExpressRoute connection activated at failover). If the target uses a different range, IPs change and applications or DNS must be updated.",
    tags: ["Azure Site Recovery", "Networking", "IP retention"]
  },
  {
    id: "azure-az305-fc-236",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Reserved VM instances vs capacity reservations: which one guarantees VMs will start in the DR region?",
    hint: "One is a discount, the other holds capacity.",
    back: "<strong>Reserved VM instances</strong> are a <strong>billing discount</strong> for committing to a VM size for one or three years; they do not guarantee capacity. <strong>On-demand capacity reservations</strong> <strong>hold compute capacity</strong> for a VM size in a region or zone, billed at pay-as-you-go rates whether used or not (reservation discounts can apply to them). Site Recovery can associate replicated VMs with a <strong>capacity reservation group</strong> in the target region, so failover has capacity when everyone is failing over.",
    tags: ["Capacity reservation", "Azure Site Recovery"]
  },
  {
    id: "azure-az305-fc-237",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which regions can Azure Site Recovery replicate an Azure VM to?",
    hint: "Not only the pair.",
    back: "Any region in the same <strong>geographic cluster</strong> as the source (for example any region in the Americas cluster for a US source), not only the paired region, plus another <strong>availability zone in the same region</strong> with zone-to-zone disaster recovery. Choose the target by latency to users, capacity, service availability and data residency rules; zone-to-zone is the option when data must never leave the region.",
    tags: ["Azure Site Recovery", "Region selection", "Zone to zone"]
  },
  {
    id: "azure-az305-fc-238",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery for on-premises VMware and physical servers: what is deployed where?",
    hint: "One appliance, one agent per machine.",
    back: "In the modernized experience, a <strong>Site Recovery replication appliance</strong> is deployed on-premises (from an OVA or on a Windows server); it connects to vCenter, discovers VMs and receives replicated data. The <strong>Mobility service</strong> agent is installed (usually pushed by the appliance) on every protected VMware VM or <strong>physical server</strong>. Data goes to a <strong>Recovery Services vault</strong> in Azure over the internet, VPN or ExpressRoute, and the appliance also handles failback to vSphere.",
    tags: ["Azure Site Recovery", "VMware", "Physical servers"]
  },
  {
    id: "azure-az305-fc-239",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Site Recovery for Hyper-V: what changes with and without System Center VMM?",
    hint: "Where the provider goes.",
    back: "<strong>Without VMM</strong>: hosts and clusters are grouped into a <strong>Hyper-V site</strong>, and the Site Recovery provider and Recovery Services agent are installed on <strong>each Hyper-V host</strong>. <strong>With VMM</strong>: the provider is installed on the <strong>VMM server</strong>, the Recovery Services agent on each host, and VM networks are mapped to Azure VNets through VMM. In both cases no agent is needed inside guest VMs.",
    tags: ["Azure Site Recovery", "Hyper-V"]
  },
  {
    id: "azure-az305-fc-240",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "MARS agent vs Azure Backup Server (MABS) vs System Center DPM: which on-premises backup tool fits which need?",
    hint: "Agent only, free server, licensed server.",
    back: "<strong>MARS agent</strong>: installed on a Windows machine, backs up <strong>files, folders and system state</strong> directly to a Recovery Services vault, up to three times a day, with no backup server. <strong>Azure Backup Server</strong>: a free on-premises server that protects <strong>Hyper-V and VMware VMs, SQL Server, Exchange, SharePoint</strong> with local disk for short-term restores and Azure for long-term copies. <strong>DPM</strong>: the same capabilities with a System Center licence, plus tape support.",
    tags: ["Azure Backup", "MARS agent", "Azure Backup Server"]
  },
  {
    id: "azure-az305-fc-241",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Recovery Services vault vs Backup vault: which datasources go in each?",
    hint: "Classic workloads vs newer datasources.",
    back: "<strong>Recovery Services vault</strong>: Azure VMs, SQL Server and SAP HANA in Azure VMs, Azure Files, MARS agent, Azure Backup Server and DPM, and it also hosts Site Recovery. <strong>Backup vault</strong>: newer datasources such as <strong>Azure Disk Backup</strong>, <strong>Azure Blob</strong> backup, <strong>Azure Database for PostgreSQL</strong> (including flexible server long-term retention), <strong>Azure Kubernetes Service</strong> and Azure Database for MySQL flexible server. Many designs need one of each.",
    tags: ["Azure Backup", "Backup vault", "Recovery Services vault"]
  },
  {
    id: "azure-az305-fc-242",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Backup vault storage redundancy: LRS vs ZRS vs GRS, and when can you change it?",
    hint: "Set it before the first backup.",
    back: "<strong>LRS</strong>: cheapest, copies in one datacentre. <strong>ZRS</strong>: copies across availability zones, keeping data in region and surviving a zone outage. <strong>GRS</strong> (the default for Recovery Services vaults): copies to the paired region, and enabling <strong>Cross Region Restore</strong> lets you restore there at any time. The redundancy can be changed only <strong>before any item is protected</strong>; afterwards you must create a new vault and move protection to it.",
    tags: ["Azure Backup", "Storage redundancy", "Cross Region Restore"]
  },
  {
    id: "azure-az305-fc-243",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cross Region Restore: what does it provide, and what does it not?",
    hint: "Restore anywhere, anytime, but not fast replication.",
    back: "On a <strong>GRS vault with Cross Region Restore enabled</strong>, backup data replicated to the paired region can be restored there <strong>at any time</strong>, for drills or during an outage, without waiting for Microsoft to declare a disaster. It covers Azure VMs, SQL Server and SAP HANA in VMs, among others. It does <strong>not</strong> give a low RPO: secondary-region data lags the primary by hours, and a restore takes longer than a Site Recovery failover, so it suits workloads with an RPO and RTO of a day or more.",
    tags: ["Azure Backup", "Cross Region Restore"]
  },
  {
    id: "azure-az305-fc-244",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup soft delete: what does it protect against, and for how long?",
    hint: "Undo for deleted backups.",
    back: "When backup data is deleted, soft delete keeps it recoverable for <strong>14 days</strong> by default at no extra cost, so an accidental or malicious deletion can be undone by undeleting the item and resuming protection. <strong>Enhanced soft delete</strong> lets you extend retention up to 180 days and make soft delete <strong>always-on</strong> so it cannot be disabled. It is on by default for new vaults.",
    tags: ["Azure Backup", "Soft delete"]
  },
  {
    id: "azure-az305-fc-245",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Immutable vault: unlocked vs locked. What does each prevent?",
    hint: "One way door.",
    back: "An <strong>immutable vault</strong> blocks operations that would delete recovery points before they expire, such as reducing retention in a policy or stopping protection with data deletion. <strong>Enabled but unlocked</strong>, immutability can still be turned off. <strong>Locked</strong>, it becomes <strong>irreversible</strong>: nobody, including Microsoft support, can disable it, so recovery points survive a compromised administrator. Combine with soft delete and multi-user authorization for ransomware resilience.",
    tags: ["Azure Backup", "Immutable vault", "Ransomware"]
  },
  {
    id: "azure-az305-fc-246",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Backup multi-user authorization: how does a Resource Guard protect a vault?",
    hint: "A second party must approve critical operations.",
    back: "A <strong>Resource Guard</strong> is an Azure resource, ideally in a <strong>different subscription or tenant</strong> owned by a security team, that is linked to a vault. Critical operations, such as disabling soft delete or immutability, reducing retention, stopping protection or removing MUA, then require the requester to also hold permission on the Resource Guard, typically granted just in time through PIM. A single compromised backup administrator or subscription Owner can no longer destroy backups alone.",
    tags: ["Azure Backup", "Multi-user authorization", "Resource Guard"]
  },
  {
    id: "azure-az305-fc-247",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Why exclude disks from Site Recovery replication, and which disks are good candidates?",
    hint: "Churn you do not need to recover.",
    back: "Every write to a replicated disk is sent to the target, so disks with high <strong>churn</strong> of data you can regenerate push VMs past replication limits, raise RPO and add cost. Good candidates to <strong>exclude</strong>: disks holding SQL Server <strong>tempdb</strong>, the Windows <strong>page file</strong>, scratch or cache areas, and data rebuilt after failover. Excluded disks are not recreated with data at failover, so recovery plans or scripts must recreate and configure them.",
    tags: ["Azure Site Recovery", "Exclude disks", "Data churn"]
  },
  {
    id: "azure-az305-fc-248",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Can a VM be protected by Azure Backup and Azure Site Recovery at the same time?",
    hint: "They are complementary.",
    back: "Yes. The two services work independently on the same Azure VM: <strong>Azure Backup</strong> takes scheduled snapshots and vaults recovery points for long-term point-in-time restore, while <strong>Site Recovery</strong> continuously replicates disks to another region or zone for failover. Using both is the standard pattern for critical workloads that need both a low-RPO regional recovery and weeks or years of restorable history.",
    tags: ["Azure Backup", "Azure Site Recovery"]
  },
  {
    id: "azure-az305-fc-249",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Backup and restore, pilot light, warm standby, hot standby: how do these DR strategies map to Azure services?",
    hint: "From cheapest and slowest to most expensive and fastest.",
    back: "<strong>Backup and restore</strong>: Azure Backup with Cross Region Restore or geo-restore; hours to days of RTO, lowest cost. <strong>Pilot light</strong>: data replicated continuously (Site Recovery, database geo-replication) but compute created only at failover. <strong>Warm standby</strong>: a scaled-down copy of the environment running in the DR region, scaled up at failover. <strong>Hot standby or active-active</strong>: full capacity in both regions behind Front Door or Traffic Manager; lowest RTO, highest cost.",
    tags: ["Disaster recovery", "DR strategies"]
  },
  {
    id: "azure-az305-fc-250",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Why can't Azure Site Recovery deliver zero RPO between regions, and what can?",
    hint: "Synchronous replication and distance.",
    back: "Site Recovery replicates disk writes <strong>asynchronously</strong>, because synchronous replication over hundreds of kilometres would add unacceptable latency to every write; a failover can therefore lose the latest writes. Zero or near-zero data loss needs <strong>synchronous replication</strong>, which Azure offers within a region across zones (zone-redundant storage, SQL Database Business Critical zone redundancy, SQL Server availability groups in synchronous commit). Cross-region, services such as Cosmos DB with strong consistency trade write latency for zero RPO.",
    tags: ["Azure Site Recovery", "RPO", "Synchronous replication"]
  }
];

export default AZURE_AZ305_FLASHCARDS_10;
