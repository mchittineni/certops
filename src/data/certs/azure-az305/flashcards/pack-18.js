export const AZURE_AZ305_FLASHCARDS_18 = [
  {
    id: 'azure-az305-fc-426',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What does the Azure Migrate appliance do, and where does it run?',
    hint: 'A small VM that sits next to what it inventories.',
    back: 'The <strong>Azure Migrate appliance</strong> is a lightweight VM (or server) deployed <strong>on-premises</strong> that discovers servers agentlessly: through <strong>vCenter Server</strong> for VMware, through the <strong>Hyper-V hosts</strong> for Hyper-V, and directly with credentials for physical or other-cloud servers. It collects configuration and performance metadata, and optionally installed software, SQL instances, web apps and dependencies, and sends it to the Azure Migrate project to drive assessments and agentless migration.',
    tags: ['Azure Migrate', 'Discovery']
  },
  {
    id: 'azure-az305-fc-427',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Migrate sizing: performance-based vs as-on-premises. When do you use each?',
    hint: 'Allocated versus actually used.',
    back: '<strong>Performance-based</strong> sizing recommends VM sizes and disk types from collected CPU, memory, IOPS and throughput utilization, so over-provisioned servers are right-sized and costs drop; it needs enough performance history to be trustworthy. <strong>As-on-premises</strong> sizing matches the allocated cores, memory and disk sizes, ignoring usage; use it for a quick like-for-like estimate, when performance data is unavailable, or when a workload must keep its current allocation.',
    tags: ['Azure Migrate', 'Assessment']
  },
  {
    id: 'azure-az305-fc-428',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Migrate assessment settings: what do performance history, percentile utilization and comfort factor control?',
    hint: 'How far back, which point in the range, and how much spare room.',
    back: '<strong>Performance history</strong>: the window of collected data the assessment considers (for example a day, a week or a month); choose one that includes periodic peaks. <strong>Percentile utilization</strong>: which point in that window is used for sizing (95th by default), so rare spikes are ignored but regular peaks count. <strong>Comfort factor</strong>: a multiplier applied to the chosen utilization to leave headroom for growth or seasonal load.',
    tags: ['Azure Migrate', 'Assessment settings']
  },
  {
    id: 'azure-az305-fc-429',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How is the confidence rating of a performance-based Azure Migrate assessment calculated, and how do you raise it?',
    hint: 'Stars follow the share of data points actually received.',
    back: 'The rating reflects the percentage of expected performance data points available for the selected history: <strong>0-20% = 1 star</strong>, 21-40% = 2, 41-60% = 3, 61-80% = 4, <strong>81-100% = 5 stars</strong>. Low ratings come from creating the assessment too soon after discovery starts, servers powered off during the window, or missing counters. Fix the cause and <strong>recalculate</strong> once the appliance has collected data for the full history; as-on-premises assessments carry no rating because they use no performance data.',
    tags: ['Azure Migrate', 'Confidence rating']
  },
  {
    id: 'azure-az305-fc-430',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What do the Azure readiness categories in an Azure VM assessment mean?',
    hint: 'Four outcomes, one of which usually means missing data.',
    back: '<strong>Ready</strong>: the server can migrate as-is. <strong>Ready with conditions</strong>: it can migrate but has issues to address, such as an operating system with only partial support or a disk configuration that needs change. <strong>Not ready</strong>: a blocker prevents it from running in Azure, such as an unsupported OS or a disk larger than the maximum; remediate before moving. <strong>Readiness unknown</strong>: data was insufficient to decide, often because metadata could not be collected.',
    tags: ['Azure Migrate', 'Readiness']
  },
  {
    id: 'azure-az305-fc-431',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which assessment types can Azure Migrate produce, and what does each size?',
    hint: 'One per kind of target.',
    back: '<strong>Azure VM</strong>: VM sizes, disks and cost for rehosting servers. <strong>Azure SQL</strong>: best-fit among Azure SQL Database, Azure SQL Managed Instance and SQL Server on Azure VMs, with tiers and blockers. <strong>Web apps</strong>: readiness and plans for Azure App Service, or for AKS as containers. <strong>Azure VMware Solution</strong>: AVS node count and cost for moving VMware estates unchanged. A <strong>business case</strong> sits above these and compares total on-premises cost with Azure.',
    tags: ['Azure Migrate', 'Assessment types']
  },
  {
    id: 'azure-az305-fc-432',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Agentless vs agent-based dependency analysis in Azure Migrate: how do they differ?',
    hint: 'One uses the appliance you already have.',
    back: '<strong>Agentless</strong> analysis uses the Azure Migrate appliance to collect TCP connection data from servers through the hypervisor or with guest credentials; nothing is installed in the guests, it is the default, and results appear as a dependency map and a CSV export for building groups. <strong>Agent-based</strong> analysis required the Microsoft Monitoring Agent and Dependency agent on every server and a Log Analytics workspace; the Log Analytics agent is retired, so agentless is the recommended option.',
    tags: ['Azure Migrate', 'Dependency analysis']
  },
  {
    id: 'azure-az305-fc-433',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'When no Azure Migrate appliance can be deployed, how can you still get an assessment?',
    hint: 'Bring your own inventory.',
    back: 'Use <strong>import-based discovery</strong>: fill in the Azure Migrate <strong>CSV template</strong> (server name, cores, memory, disks, OS and optionally CPU and memory utilization) or import an <strong>RVTools</strong> export from vCenter. Azure VM assessments and business cases can be built from the imported servers, with performance-based sizing if utilization values are supplied. Accuracy is lower than appliance data, and imported servers cannot be migrated agentlessly or used for dependency analysis.',
    tags: ['Azure Migrate', 'Import-based discovery']
  },
  {
    id: 'azure-az305-fc-434',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which Azure Migrate replication method fits VMware, Hyper-V, physical servers and other clouds?',
    hint: 'Hypervisor access decides whether you need agents.',
    back: '<strong>VMware</strong>: agentless replication through the appliance and vCenter snapshots (agent-based also available). <strong>Hyper-V</strong>: agentless, by installing the Azure Site Recovery provider and Recovery Services agent on the hosts. <strong>Physical servers, AWS or GCP VMs</strong>: agent-based, with the <strong>Mobility service</strong> on each server and a <strong>replication appliance</strong> in the source environment, because there is no hypervisor the migration can use.',
    tags: ['Azure Migrate', 'Server migration']
  },
  {
    id: 'azure-az305-fc-435',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Agent-based migration in Azure Migrate: what are the components and how does replication data flow?',
    hint: 'Agent in each guest, a relay in the source site, storage in Azure.',
    back: 'The <strong>Mobility service</strong> on each source server captures disk writes in memory and sends them to the <strong>replication appliance</strong>, which combines a configuration server (coordinates communication with Azure) and a <strong>process server</strong> (caches, compresses and encrypts the data). The process server forwards data to a cache storage account and on to managed disks in Azure. Add <strong>scale-out process servers</strong> for large estates, and keep port 443 outbound and 9443 between servers and appliance open.',
    tags: ['Azure Migrate', 'Agent-based migration']
  },
  {
    id: 'azure-az305-fc-436',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Test migration vs migration in Azure Migrate: what does each do to the source and replication?',
    hint: 'One is a rehearsal.',
    back: '<strong>Test migration</strong> creates Azure VMs from the latest replicated data in a virtual network you choose (ideally isolated), while replication continues and the source servers keep running; afterwards you <strong>clean up</strong> the test resources. <strong>Migration</strong> is the cutover: optionally shut down the source for a final sync with no data loss, create the Azure VMs, and stop replication. Always run at least one test migration first.',
    tags: ['Azure Migrate', 'Test migration']
  },
  {
    id: 'azure-az305-fc-437',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'VMware HCX in Azure VMware Solution: which migration types does it offer, and what does network extension add?',
    hint: 'Bulk, live, cold, and a hybrid of bulk and live.',
    back: '<strong>Bulk migration</strong>: replicates many VMs in parallel and switches over in a scheduled window with a reboot. <strong>vMotion</strong>: live, one VM at a time, no downtime. <strong>Cold migration</strong>: for powered-off VMs. <strong>Replication Assisted vMotion</strong>: bulk-style parallel replication with a live vMotion switchover. <strong>Network extension</strong> stretches on-premises layer 2 segments into AVS, so VMs keep their IP and MAC addresses and can move in any order.',
    tags: ['Azure VMware Solution', 'HCX']
  },
  {
    id: 'azure-az305-fc-438',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Virtual Network Manager connectivity configurations: hub-and-spoke vs mesh',
    hint: 'Peerings to a hub, or a group where everyone talks directly.',
    back: '<strong>Hub-and-spoke</strong> creates and maintains peerings between a hub VNet and every VNet in a network group, optionally letting spokes use the hub\'s gateway; turning on <strong>direct connectivity</strong> also lets spokes in the group reach each other without going through the hub. <strong>Mesh</strong> puts the group\'s VNets into a <strong>connected group</strong> so every VNet reaches every other directly, within a region or globally. Dynamic network group membership through Azure Policy adds new VNets automatically.',
    tags: ['Virtual Network Manager', 'Network topology']
  },
  {
    id: 'azure-az305-fc-439',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Managed Instance link: how does it work and what does it need?',
    hint: 'An availability group feature stretched into Azure.',
    back: 'The <strong>Managed Instance link</strong> uses <strong>distributed availability groups</strong> to replicate databases from SQL Server (2016 and later, with the required updates) to Azure SQL Managed Instance in near real time. It needs network connectivity between the SQL Server host and the instance (VPN or ExpressRoute) and certificate-based trust. Use it for near-zero-downtime migration by failing over, for read scale-out in Azure, or for disaster recovery, including failover back to SQL Server 2022.',
    tags: ['SQL Managed Instance', 'Managed Instance link']
  },
  {
    id: 'azure-az305-fc-440',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Log Replay Service for Azure SQL Managed Instance: what are its autocomplete and continuous modes?',
    hint: 'Does it stop by itself, or wait for you?',
    back: 'The <strong>Log Replay Service</strong> restores a chain of full, differential and log backups from <strong>Blob Storage</strong> into Managed Instance. In <strong>autocomplete</strong> mode you name the last backup file, and LRS brings the database online automatically after restoring it. In <strong>continuous</strong> mode LRS keeps restoring new log backups as they arrive until you issue a manual <strong>complete</strong> command at cutover. It needs no network path from SQL Server to Azure, only the ability to upload backups.',
    tags: ['SQL Managed Instance', 'Log Replay Service']
  },
  {
    id: 'azure-az305-fc-441',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Database Migration Service for SQL Server: which targets support online migration and which only offline?',
    hint: 'One target is database-scoped and only supports the offline path.',
    back: '<strong>Azure SQL Managed Instance</strong> and <strong>SQL Server on Azure VMs</strong>: online (continuous restore of log backups until cutover) or offline. <strong>Azure SQL Database</strong>: offline only, copying schema and data during a downtime window. DMS reaches the source through a <strong>self-hosted integration runtime</strong> and can read backups from an SMB share or Blob Storage for the managed instance and VM targets.',
    tags: ['Database Migration Service', 'SQL Server']
  },
  {
    id: 'azure-az305-fc-442',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which common SQL Server features block a move to Azure SQL Database but not to Managed Instance?',
    hint: 'Anything that reaches outside a single database.',
    back: 'Azure SQL Database does not support <strong>cross-database queries with three-part names</strong> (use elastic query instead), <strong>SQL Server Agent</strong> (use elastic jobs), <strong>Database Mail</strong>, <strong>linked servers</strong>, <strong>CLR assemblies</strong>, <strong>Service Broker</strong> across databases, or native <strong>backup and restore</strong> from .bak files. Azure SQL Managed Instance supports all of these, which is why assessments often recommend it for instance-dependent applications.',
    tags: ['Azure SQL Database', 'Compatibility']
  },
  {
    id: 'azure-az305-fc-443',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'BACPAC export or native backup and restore: which fits which Azure SQL target?',
    hint: 'One is a logical export, the other a page-level copy.',
    back: 'A <strong>BACPAC</strong> is a logical export of schema and data; import it into <strong>Azure SQL Database</strong> (which cannot restore native .bak files). It is offline and slow for large databases. A native <strong>.bak backup</strong> restored from Blob Storage (backup to URL) works for <strong>Azure SQL Managed Instance</strong> and <strong>SQL Server on Azure VMs</strong>, preserving the database exactly and allowing log-backup chains for near-online moves.',
    tags: ['Azure SQL', 'BACPAC']
  },
  {
    id: 'azure-az305-fc-444',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What are the options for moving MySQL to Azure Database for MySQL Flexible Server?',
    hint: 'Dump tools for downtime, replication for near-zero.',
    back: '<strong>Database Migration Service</strong>: offline or <strong>online</strong> migration, with an initial load followed by binlog-based change replication until cutover. <strong>mysqldump or mydumper/myloader</strong>: offline logical export and import, fine for small databases or generous windows. <strong>Data-in replication</strong>: configure the flexible server as a replica of the source using binary log replication, then promote it at cutover. Choose online options when downtime must be minutes.',
    tags: ['MySQL', 'Database migration']
  },
  {
    id: 'azure-az305-fc-445',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Migration service in Azure Database for PostgreSQL: which sources and modes does it support?',
    hint: 'Built into the target server, not a separate service.',
    back: 'The <strong>migration service</strong> runs from the Azure Database for PostgreSQL <strong>flexible server</strong> and migrates from on-premises servers, Azure VMs, Amazon RDS and Aurora PostgreSQL, Google Cloud SQL and the retired Single Server. <strong>Offline</strong> mode copies data during downtime; <strong>online</strong> mode uses logical replication to keep syncing changes until cutover, keeping downtime to minutes. It includes premigration validation of extensions, versions and connectivity.',
    tags: ['PostgreSQL', 'Migration service']
  },
  {
    id: 'azure-az305-fc-446',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Why can\'t a 0.0.0.0/0 route send traffic for a private endpoint through Azure Firewall, and what does?',
    hint: 'Longest prefix match, plus a subnet setting.',
    back: 'A private endpoint adds a <strong>/32 system route</strong> for its IP, and the most specific prefix wins, so a default route never overrides it. Network policies for private endpoints are <strong>disabled by default</strong> on a subnet; set <code>privateEndpointNetworkPolicies</code> to <code>RouteTableEnabled</code> (or <code>Enabled</code>, which also applies NSGs) on the private endpoint\'s subnet. A UDR with a prefix no broader than the VNet address space, such as the subnet range, can then send traffic through the firewall.',
    tags: ['Private endpoint', 'Routing']
  },
  {
    id: 'azure-az305-fc-447',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Cosmos DB for MongoDB: RU-based or vCore-based for a migrated MongoDB workload?',
    hint: 'Elastic, globally distributed throughput versus a familiar cluster model.',
    back: '<strong>RU-based</strong>: throughput in request units (provisioned, autoscale or serverless), instant scale, multi-region writes and global distribution; best for new, elastic, globally distributed apps. <strong>vCore-based</strong>: a cluster of vCores and storage with pricing and behaviour close to self-managed MongoDB, higher feature compatibility for complex aggregations and long-running queries, plus integrated vector search; the usual choice for lift-and-shift of existing MongoDB applications.',
    tags: ['Cosmos DB for MongoDB', 'Database migration']
  },
  {
    id: 'azure-az305-fc-448',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Planning a server cutover: which steps keep downtime short and rollback possible?',
    hint: 'Name resolution, final sync and a way back.',
    back: 'Before the window: complete a <strong>test migration</strong>, lower <strong>DNS TTLs</strong> days ahead so clients switch quickly, and confirm backups of the source. During the window: stop application traffic, <strong>shut down the source</strong> and let the final delta sync run, start the Azure VMs, update DNS and connection strings, and run smoke tests. Keep the source servers <strong>powered off but intact</strong> until sign-off so rollback means repointing DNS; decommission them only after a hypercare period.',
    tags: ['Migration', 'Cutover']
  },
  {
    id: 'azure-az305-fc-449',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Migrate business case vs assessment: what question does each answer?',
    hint: 'Why move, versus what to move to.',
    back: 'A <strong>business case</strong> answers "should we move, and what will it save?": it compares on-premises total cost of ownership with Azure cost over several years, including Azure Hybrid Benefit and facilities costs, for leadership decisions. An <strong>assessment</strong> answers "what exactly should each workload become?": readiness, right-sized targets (VM size, SQL tier, App Service plan, AVS nodes) and monthly cost for planning the migration itself.',
    tags: ['Azure Migrate', 'Business case']
  },
  {
    id: 'azure-az305-fc-450',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which PaaS targets can Azure Migrate assess discovered web apps for?',
    hint: 'Two hosts: one managed web platform, one container platform.',
    back: 'Azure Migrate discovers <strong>ASP.NET apps on IIS</strong> and <strong>Java apps on Tomcat</strong>, then assesses them for <strong>Azure App Service</strong> (readiness, App Service plan and cost) or for <strong>Azure Kubernetes Service</strong> as containers (node sizing). App Service is the simplest route when the app needs no OS customization; AKS suits teams already standardizing on Kubernetes or apps that need container-level control.',
    tags: ['Azure Migrate', 'Web apps']
  }
];

export default AZURE_AZ305_FLASHCARDS_18;
