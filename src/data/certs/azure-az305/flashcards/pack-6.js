export const AZURE_AZ305_FLASHCARDS_6 = [
  {
    id: 'azure-az305-fc-126',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Azure SQL Database vs SQL Managed Instance vs SQL Server on a VM: what is the first-pass decision rule?',
    hint: 'Scope of compatibility vs how much you manage.',
    back: '<strong>Azure SQL Database</strong>: database-scoped PaaS for new cloud apps; serverless and Hyperscale options, least management. <strong>SQL Managed Instance</strong>: instance-scoped PaaS with near-complete SQL Server compatibility (Agent, cross-database queries, linked servers, CLR) for lift-and-shift without OS management. <strong>SQL Server on Azure VMs</strong>: IaaS for anything needing the <strong>operating system</strong>, a specific engine version, or features the PaaS services lack, such as FILESTREAM or Reporting Services on the same server.',
    tags: ['Azure SQL', 'Relational data']
  },
  {
    id: 'azure-az305-fc-127',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'DTU vs vCore purchasing model for Azure SQL Database: what does each bundle, and which unlocks discounts?',
    hint: 'One is a fixed bundle, the other lets you pick the parts.',
    back: '<strong>DTU</strong>: a blended measure of CPU, memory and I/O sold in fixed levels (Basic, Standard, Premium) with storage included up to a cap; simple, but no independent scaling. <strong>vCore</strong>: choose vCores, hardware configuration and storage separately, pick General Purpose, Business Critical or Hyperscale and provisioned or serverless compute. Only vCore supports <strong>Azure Hybrid Benefit</strong> and <strong>reserved capacity</strong>.',
    tags: ['Azure SQL Database', 'Purchasing models']
  },
  {
    id: 'azure-az305-fc-128',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'General Purpose vs Business Critical vs Hyperscale in Azure SQL Database: one line each.',
    hint: 'Budget, latency, scale.',
    back: '<strong>General Purpose</strong>: budget-oriented, remote premium storage, up to 4 TB. <strong>Business Critical</strong>: local SSD for lowest I/O latency, several hot replicas including a free readable one, In-Memory OLTP, up to 4 TB. <strong>Hyperscale</strong>: decoupled storage up to 128 TB, snapshot backups and fast restores regardless of size, rapid scaling and extra replicas; Microsoft now positions it as the default for new OLTP workloads.',
    tags: ['Azure SQL Database', 'Service tiers']
  },
  {
    id: 'azure-az305-fc-129',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Provisioned vs serverless compute in Azure SQL Database: which usage pattern suits each?',
    hint: 'Steady vs intermittent.',
    back: '<strong>Provisioned</strong>: you choose a fixed vCore count, billed hourly; best for regular, predictable load with high average utilisation, or many databases in an elastic pool. <strong>Serverless</strong>: compute scales automatically between a min and max vCore setting and is billed per second of use; best for intermittent, unpredictable single databases. Serverless is available in General Purpose and Hyperscale, not Business Critical, and not in the DTU model.',
    tags: ['Azure SQL Database', 'Serverless']
  },
  {
    id: 'azure-az305-fc-130',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'What is an Azure SQL logical server, and what does it not do?',
    hint: 'A container, not a machine.',
    back: 'A <strong>logical server</strong> is an administrative container for databases: it holds server-level logins and admin settings, firewall rules, auditing and threat-protection policies, and provides the connection endpoint. It has <strong>no compute of its own</strong> and is not a SQL Server instance: each database or elastic pool on it has its own service tier and size, and databases on the same server do not share resources unless they are in the same elastic pool.',
    tags: ['Azure SQL Database', 'Logical server']
  },
  {
    id: 'azure-az305-fc-131',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Which Azure open-source database options are current, and which have been retired?',
    hint: 'Flexible is the survivor.',
    back: 'Current: <strong>Azure Database for PostgreSQL flexible server</strong> and <strong>Azure Database for MySQL flexible server</strong>. Retired: Azure Database for PostgreSQL <strong>single server</strong> (March 2025), Azure Database for MySQL single server (2024) and <strong>Azure Database for MariaDB</strong> (2025). New designs use flexible server, which adds zone-redundant HA, stop/start, custom maintenance windows and Burstable compute.',
    tags: ['PostgreSQL', 'MySQL', 'Flexible server']
  },
  {
    id: 'azure-az305-fc-132',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Azure Hybrid Benefit for Azure SQL: who qualifies and where does it apply?',
    hint: 'Software Assurance, vCore only.',
    back: 'Customers with SQL Server core licences covered by <strong>Software Assurance</strong> (or qualifying subscriptions) can apply them to <strong>vCore-based</strong> Azure SQL Database, SQL Managed Instance and SQL Server on Azure VMs, paying only the base compute rate. It does not apply to the DTU model, and it is <strong>not available for new Hyperscale databases</strong>, which carry no SQL licence fee in the first place. Enterprise licences with SA also grant extra rights, such as free passive disaster-recovery replicas.',
    tags: ['Azure Hybrid Benefit', 'Licensing']
  },
  {
    id: 'azure-az305-fc-133',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'How do General Purpose and Business Critical differ architecturally, in both SQL Database and Managed Instance?',
    hint: 'Where the files live and how many copies are running.',
    back: '<strong>General Purpose</strong> separates stateless compute from data and log files held on <strong>remote Azure premium storage</strong>; if the node fails, a new one attaches to the same files, so failover takes longer and I/O latency is higher. <strong>Business Critical</strong> keeps data on <strong>local SSD</strong> in an Always On availability group of several replicas, giving low latency, fast failover, a free readable secondary and In-Memory OLTP, at a considerably higher price.',
    tags: ['Azure SQL', 'Service tiers']
  },
  {
    id: 'azure-az305-fc-134',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'What are the four layers of the Hyperscale architecture?',
    hint: 'Compute, pages, log, long-term storage.',
    back: '<strong>Compute nodes</strong> (primary, high-availability replicas and named replicas) run the engine with a local SSD cache. <strong>Page servers</strong> each serve a range of data pages and keep them current. The <strong>log service</strong> accepts the transaction log from the primary, makes it durable and feeds replicas and page servers. <strong>Azure Storage</strong> holds the data files long term and enables snapshot-based backups. Because storage is decoupled, compute scales and restores complete without moving data.',
    tags: ['Hyperscale', 'Architecture']
  },
  {
    id: 'azure-az305-fc-135',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Serverless auto-pause: what are the delay limits, which tier supports it, and what does a paused database cost?',
    hint: 'Fifteen minutes to seven days.',
    back: 'The auto-pause delay ranges from <strong>15 minutes to 7 days</strong> (default 60 minutes), or <strong>-1</strong> to disable it. While paused, only <strong>storage</strong> is billed; the next login resumes the database and the first connection attempt may fail and need a retry. Auto-pause is supported only in <strong>General Purpose</strong> serverless; Hyperscale serverless scales but does not pause. With auto-pause disabled, the minimum vCores and memory are always billed.',
    tags: ['Serverless', 'Auto-pause']
  },
  {
    id: 'azure-az305-fc-136',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'SQL Managed Instance vs Azure SQL Database: which features exist only on each side?',
    hint: 'Instance-scoped features vs cloud-native options.',
    back: 'Only <strong>Managed Instance</strong>: SQL Server Agent, linked servers, cross-database queries and transactions within the instance, Database Mail, CLR, Service Broker and native VNet deployment. Only <strong>Azure SQL Database</strong>: Hyperscale, serverless compute, active geo-replication and elastic pools of single databases. Both have TDE, Always Encrypted, auditing, failover groups and Entra authentication.',
    tags: ['SQL Managed Instance', 'Azure SQL Database', 'Feature comparison']
  },
  {
    id: 'azure-az305-fc-137',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'What SQL Server capabilities push a workload past Managed Instance to a VM?',
    hint: 'Files in the database, services on the box, or the OS itself.',
    back: '<strong>FILESTREAM and FileTable</strong>, which Managed Instance does not support. <strong>Reporting Services or Analysis Services</strong> installed on the same server (MI hosts only the database engine; SSIS packages can run on an Azure-SSIS integration runtime). Any need for <strong>operating system access</strong>, third-party agents or a specific older <strong>engine version</strong>. Otherwise, MI covers most instance-level features, including Agent, CLR and cross-database queries.',
    tags: ['SQL Managed Instance', 'SQL Server on VMs']
  },
  {
    id: 'azure-az305-fc-138',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'What does registering a SQL Server VM with the SQL IaaS Agent extension give you?',
    hint: 'It turns a VM into a manageable SQL resource.',
    back: 'It creates a <strong>SQL virtual machine</strong> resource that enables portal and API management: switching the licence between pay-as-you-go and <strong>Azure Hybrid Benefit</strong> (or free DR replica), <strong>automated backup</strong> to Azure storage, storage configuration, the <strong>best practices assessment</strong>, and Defender for SQL integration. It works for Marketplace and self-installed SQL Server alike, and Azure registers new SQL VMs automatically when the feature is enabled on the subscription.',
    tags: ['SQL Server on VMs', 'SQL IaaS Agent extension']
  },
  {
    id: 'azure-az305-fc-139',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'SQL Server on Azure VMs: where should data, log and tempdb files go?',
    hint: 'Read cache for data, no cache for log, local disk for tempdb.',
    back: '<strong>Data files</strong>: Premium SSD (or Premium SSD v2) disks, striped for throughput, with <strong>read-only</strong> host caching. <strong>Transaction log</strong>: separate disks with host caching <strong>None</strong>, since log writes are sequential. <strong>tempdb</strong>: the <strong>local ephemeral SSD</strong> where the VM size has one, because it is fast, free of remote disk limits and rebuilt at every restart. Choose VM sizes whose disk throughput limits match the workload.',
    tags: ['SQL Server on VMs', 'Storage performance']
  },
  {
    id: 'azure-az305-fc-140',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'PostgreSQL flexible server compute tiers: Burstable vs General Purpose vs Memory Optimized.',
    hint: 'One of them cannot have high availability.',
    back: '<strong>Burstable</strong> (B-series): cheap, credit-based CPU for low average load with brief spikes, such as dev/test or small apps; <strong>no high availability</strong>. <strong>General Purpose</strong> (D-series): balanced CPU and memory for most production workloads. <strong>Memory Optimized</strong> (E-series): high memory per vCore for large working sets and heavy caching. Zone-redundant or same-zone HA requires General Purpose or Memory Optimized.',
    tags: ['PostgreSQL', 'Compute tiers']
  },
  {
    id: 'azure-az305-fc-141',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'MySQL flexible server tiers: which tier names exist, and which support HA?',
    hint: 'The top tier was renamed.',
    back: '<strong>Burstable</strong>: low-cost, credit-based compute for light or intermittent workloads; high availability is not supported. <strong>General Purpose</strong>: balanced production workloads. <strong>Business Critical</strong> (formerly Memory Optimized): high memory per vCore and the best performance for demanding OLTP. General Purpose and Business Critical support same-zone and zone-redundant HA with a synchronous standby and automatic failover.',
    tags: ['MySQL', 'Compute tiers']
  },
  {
    id: 'azure-az305-fc-142',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Azure SQL reserved capacity: what can it cover, and how flexible is it?',
    hint: 'vCores, one or three years, not serverless.',
    back: 'Reservations commit to a number of <strong>vCores</strong> of a given tier and hardware family for <strong>one or three years</strong>, for Azure SQL Database (single and pooled), SQL Managed Instance, and more. The discount applies automatically to matching resources in the chosen scope (resource group, subscription, shared or management group), with <strong>size flexibility</strong> across compute sizes in the same tier and family. It does not apply to the DTU model or to serverless compute, and it stacks with Azure Hybrid Benefit.',
    tags: ['Reservations', 'Azure SQL', 'Cost optimization']
  },
  {
    id: 'azure-az305-fc-143',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'How can non-production Azure SQL databases be billed at a lower rate without shrinking them?',
    hint: 'A subscription offer, not a service tier.',
    back: 'Run them in an <strong>Enterprise Dev/Test</strong> or <strong>Pay-As-You-Go Dev/Test</strong> subscription, available to Visual Studio subscribers. vCore-based Azure SQL resources there are billed <strong>without the SQL licence component</strong>, so the same size costs less. The offer is for development and testing only; production workloads must not run in those subscriptions.',
    tags: ['Dev/Test pricing', 'Cost optimization']
  },
  {
    id: 'azure-az305-fc-144',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'SQL Managed Instance General Purpose vs Business Critical: what extra do you get for the Business Critical price?',
    hint: 'Same architectural split as SQL Database.',
    back: '<strong>General Purpose</strong> MI keeps files on remote storage, with I/O latency and throughput that depend on file size and storage limits, and one compute node. <strong>Business Critical</strong> MI uses local SSD in an availability group of replicas, giving lower latency, faster failover, a built-in <strong>read-only replica</strong> reachable with ApplicationIntent=ReadOnly, and In-Memory OLTP. Choose Business Critical for latency-sensitive, mission-critical OLTP.',
    tags: ['SQL Managed Instance', 'Service tiers']
  },
  {
    id: 'azure-az305-fc-145',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Can a Hyperscale database go back to General Purpose?',
    hint: 'Only if it came from somewhere else, and only for a while.',
    back: 'Only by <strong>reverse migration</strong>, which is allowed for a database that was <strong>converted</strong> to Hyperscale from another tier and only within <strong>45 days</strong> of that conversion. It goes to General Purpose first; from there you can change to another tier. A database created directly in Hyperscale cannot be reverse migrated, and backups cannot be restored across the Hyperscale boundary, though pre-migration backups remain restorable to non-Hyperscale tiers during their retention.',
    tags: ['Hyperscale', 'Service tiers']
  },
  {
    id: 'azure-az305-fc-146',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Which Azure SQL tiers support In-Memory OLTP memory-optimized tables?',
    hint: 'Local SSD tiers only.',
    back: '<strong>Business Critical</strong> (and Premium in the DTU model) in Azure SQL Database, and Business Critical SQL Managed Instance. <strong>General Purpose</strong> does not support In-Memory OLTP. <strong>Hyperscale</strong> supports only a subset (memory-optimized table types, table variables and natively compiled modules) but not durable or non-durable memory-optimized tables, and a database containing In-Memory OLTP objects cannot be converted to Hyperscale until they are dropped.',
    tags: ['In-Memory OLTP', 'Service tiers']
  },
  {
    id: 'azure-az305-fc-147',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Hyperscale serverless vs General Purpose serverless: what differs?',
    hint: 'Size, pausing and memory.',
    back: 'Both scale vCores automatically and bill per second. <strong>General Purpose</strong> serverless is limited to 4 TB of storage and supports <strong>auto-pause</strong>. <strong>Hyperscale</strong> serverless supports databases up to 128 TB, can apply serverless to its replicas, and adapts memory to workload demand, but it <strong>does not auto-pause</strong>, so there is always a minimum compute charge. Serverless in both runs only on standard-series (Gen5) hardware.',
    tags: ['Serverless', 'Hyperscale']
  },
  {
    id: 'azure-az305-fc-148',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Oracle workloads on Azure: Oracle Database@Azure vs Oracle on Azure VMs.',
    hint: 'RAC is the deciding feature.',
    back: '<strong>Oracle Database@Azure</strong> runs Oracle Exadata Database Service and Autonomous Database on Oracle-managed hardware inside Azure datacentres, delivered into your virtual networks with low latency, with <strong>RAC and Exadata features</strong> and billing through Azure. <strong>Oracle on Azure VMs</strong> suits single-instance databases protected with Data Guard, but <strong>Oracle RAC is not supported</strong> on Azure VMs. Re-platforming to Azure SQL or PostgreSQL is the third option when code changes are acceptable.',
    tags: ['Oracle Database@Azure', 'Relational data']
  },
  {
    id: 'azure-az305-fc-149',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'An application is certified only on an out-of-support SQL Server version. What are the options on Azure?',
    hint: 'PaaS always runs the latest engine.',
    back: 'Run that version on an <strong>Azure virtual machine</strong>, which receives <strong>Extended Security Updates at no extra charge</strong> for the ESU period, keeping the exact engine the vendor certifies. SQL Database and Managed Instance always run the current engine; a database <strong>compatibility level</strong> preserves query behaviour but not the engine version, so they suit apps certified by compatibility level rather than by version. On-premises or Arc-enabled servers must pay for ESUs.',
    tags: ['SQL Server on VMs', 'Extended Security Updates']
  },
  {
    id: 'azure-az305-fc-150',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd2',
    front: 'Why is Hyperscale often cheaper than Business Critical for a large, busy database, and when is it not the right answer?',
    hint: 'Licence fee, storage model, and what it gives up.',
    back: 'Hyperscale carries <strong>no SQL licence fee</strong>, bills storage only as allocated, and gets fast restores and read replicas without paying for three Business Critical replicas, so large workloads often cost less. It is not the answer when the design needs <strong>memory-optimized tables</strong>, the absolute lowest commit latency of local-SSD Business Critical, <strong>Azure Hybrid Benefit</strong> on new databases, or <strong>auto-pause</strong>.',
    tags: ['Hyperscale', 'Business Critical', 'Cost optimization']
  }
];

export default AZURE_AZ305_FLASHCARDS_6;
