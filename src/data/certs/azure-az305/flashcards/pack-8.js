export const AZURE_AZ305_FLASHCARDS_8 = [
  {
    id: "azure-az305-fc-176",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Blob access tiers: what is the minimum storage duration of cool, cold and archive, and what happens if you delete earlier?",
    hint: "30, 90, 180.",
    back: "<strong>Hot</strong>: no minimum. <strong>Cool</strong>: 30 days. <strong>Cold</strong>: 90 days. <strong>Archive</strong>: 180 days. Deleting, overwriting or moving a blob to another tier before the minimum triggers an <strong>early deletion charge</strong> prorated for the remaining days, so a colder tier is only cheaper if the data stays there long enough. Each step colder lowers the storage price and raises the read and transaction prices.",
    tags: ["Blob storage", "Access tiers"]
  },
  {
    id: "azure-az305-fc-177",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Which blob access tiers are online and which is offline? What does offline mean in practice?",
    hint: "One tier needs a step before you can read it.",
    back: "<strong>Hot, cool and cold</strong> are online: a blob is read directly with millisecond first-byte latency. <strong>Archive</strong> is offline: the blob's data cannot be read or modified until it is <strong>rehydrated</strong> to an online tier, either by changing its tier or by copying it to a new blob in an online tier. Metadata and blob properties can still be read while the blob is archived.",
    tags: ["Blob storage", "Archive tier"]
  },
  {
    id: "azure-az305-fc-178",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Archive rehydration: standard vs high priority. How long does each take, and can you change your mind?",
    hint: "Hours vs under an hour, with a size condition.",
    back: "<strong>Standard priority</strong> can take up to <strong>15 hours</strong>. <strong>High priority</strong> completes in <strong>under 1 hour for objects smaller than 10 GB</strong> and costs more per GB. A pending request can be <strong>upgraded</strong> from standard to high while it is in progress, but not downgraded. Use an Event Grid BlobTierChanged or BlobCreated event to trigger the next step when rehydration finishes instead of polling.",
    tags: ["Blob storage", "Rehydration"]
  },
  {
    id: "azure-az305-fc-179",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Which storage account redundancy options cannot hold blobs in the archive tier?",
    hint: "Anything with zones in it.",
    back: "Archive is supported only on <strong>LRS, GRS and RA-GRS</strong> accounts. Accounts using <strong>ZRS, GZRS or RA-GZRS</strong> cannot archive blobs. If a design needs zone redundancy for active data and archive for old data, the old data is copied to a separate LRS or GRS account by a job such as AzCopy or Data Factory, or you accept cold as the coldest tier in the zone-redundant account.",
    tags: ["Blob storage", "Archive tier", "Redundancy"]
  },
  {
    id: "azure-az305-fc-180",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Lifecycle management: which conditions can a rule use, and what must you enable to tier by last read?",
    hint: "Created, modified, accessed, and a tracking switch.",
    back: "A rule filters on blob type, <strong>prefix</strong> and <strong>blob index tags</strong>, and acts on <strong>days since creation, last modification or last access</strong> (and on version or snapshot age). Actions tier to cool, cold or archive, or delete. Tiering by last read requires <strong>last access time tracking</strong> enabled on the account; with it, <code>enableAutoTierToHotFromCool</code> moves a blob back to hot when it is read. Policies run about once a day, so changes can take up to 24 hours to take effect.",
    tags: ["Lifecycle management", "Blob storage"]
  },
  {
    id: "azure-az305-fc-181",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Block blobs vs append blobs vs page blobs: which workload uses each?",
    hint: "Objects, logs, disks.",
    back: "<strong>Block blobs</strong>: general objects such as documents, media, backups and data lake files, up to about 190.7 TiB each. <strong>Append blobs</strong>: append-only workloads such as logging, where writes add blocks to the end and existing blocks cannot change (about 195 GiB maximum). <strong>Page blobs</strong>: random read/write in 512-byte pages up to 8 TiB, the format behind virtual hard disks. Only block blobs support access tiers.",
    tags: ["Blob storage", "Blob types"]
  },
  {
    id: "azure-az305-fc-182",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Which storage account type do you create for each need: general blobs and files, low-latency blobs, premium file shares?",
    hint: "Standard GPv2 and two premium kinds.",
    back: "<strong>Standard general-purpose v2</strong>: blobs (all tiers), Data Lake, standard file shares, queues and tables, with every redundancy option; the default choice. <strong>Premium block blobs</strong> (BlockBlobStorage): SSD-backed block and append blobs for low latency and high transaction rates, LRS or ZRS only, no access tiers. <strong>Premium file shares</strong> (FileStorage): SSD SMB and NFS shares, LRS or ZRS. Premium page blob accounts exist for page blobs only.",
    tags: ["Storage accounts", "Account types"]
  },
  {
    id: "azure-az305-fc-183",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "When does a premium block blob account cost less than the standard hot tier despite a higher per-GB price?",
    hint: "Which part of the bill dominates?",
    back: "When the bill is dominated by <strong>transactions, not capacity</strong>: small objects with very high read and write rates (IoT telemetry, interactive apps, AI feature stores, analytics on many small files). Premium block blob storage charges more per GB stored but much less per operation, and adds consistently low latency. For large, rarely touched objects, the standard hot, cool or cold tier stays cheaper.",
    tags: ["Premium block blob", "Cost optimization"]
  },
  {
    id: "azure-az305-fc-184",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Data Lake Storage: how do Azure RBAC and POSIX ACLs combine when a user reads a file?",
    hint: "One is checked first and can short-circuit the other.",
    back: "Azure <strong>RBAC is evaluated first</strong>. If a role assignment such as Storage Blob Data Reader grants the operation, access is allowed and <strong>ACLs are not checked</strong>. Only if RBAC does not grant it are the file and directory <strong>ACLs</strong> evaluated, which need execute permission on every parent folder. So use RBAC for broad container-wide access and ACLs for fine-grained folder access, and assign ACL entries to <strong>groups</strong> because each ACL holds at most 32 entries.",
    tags: ["Data Lake Storage", "ACLs", "RBAC"]
  },
  {
    id: "azure-az305-fc-185",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "What does enabling the hierarchical namespace change about Blob storage?",
    hint: "Directories become real.",
    back: "It turns the account into <strong>Data Lake Storage</strong>: directories are real objects, so <strong>renaming or deleting a directory is one atomic operation</strong> rather than one call per blob, <strong>POSIX-style ACLs</strong> apply to files and folders, and the ABFS driver used by Spark, Databricks, Synapse and Fabric works natively. It also unlocks SFTP and NFS 3.0 for blobs. It is set when the account is created, though an existing account can be upgraded one way.",
    tags: ["Data Lake Storage", "Hierarchical namespace"]
  },
  {
    id: "azure-az305-fc-186",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Blob storage NFS 3.0 vs Azure Files NFS 4.1: how do you choose?",
    hint: "Locking, price, and what else reads the data.",
    back: "<strong>Blob NFS 3.0</strong> (hierarchical namespace, VNet-only access) suits large-scale, mostly sequential, read-heavy data such as genomics, media rendering or analytics inputs, at blob prices, and the same data is readable over the Blob and Data Lake APIs; it has no file locking. <strong>Azure Files NFS 4.1</strong> (SSD shares only) is a general-purpose POSIX file system with <strong>file locking</strong> and low latency for application servers, home directories and content management, at a higher price per GB.",
    tags: ["NFS", "Blob storage", "Azure Files"]
  },
  {
    id: "azure-az305-fc-187",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Files SSD vs HDD shares: what does each suit, and which protocols does each support?",
    hint: "Only one kind of media offers NFS.",
    back: "<strong>SSD (premium) shares</strong> in FileStorage accounts give consistent low latency and high IOPS for databases, FSLogix profiles and busy application shares, and are the <strong>only shares that support NFS 4.1</strong> as well as SMB. <strong>HDD (standard) shares</strong> in general-purpose v2 accounts are cheaper per GiB for general file shares, team shares and File Sync targets, and support <strong>SMB only</strong>. Both scale to 100 TiB per share.",
    tags: ["Azure Files", "Performance tiers"]
  },
  {
    id: "azure-az305-fc-188",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Files billing: what does the provisioned v2 model change compared with pay-as-you-go access tiers?",
    hint: "Three dials instead of one.",
    back: "In <strong>pay-as-you-go</strong> (HDD shares), you pay for stored data plus transactions, with transaction optimized, hot and cool tiers trading storage price against transaction price. In <strong>provisioned v2</strong>, you provision <strong>storage, IOPS and throughput independently</strong> for each share and pay for what you provision, with no per-transaction charge, which makes busy shares predictable to budget. The older provisioned v1 model tied IOPS and throughput to the provisioned size.",
    tags: ["Azure Files", "Billing models", "Cost optimization"]
  },
  {
    id: "azure-az305-fc-189",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Files vs Azure NetApp Files: which requirements push you to NetApp Files?",
    hint: "Enterprise NAS features and latency.",
    back: "Choose <strong>Azure NetApp Files</strong> for enterprise NAS needs: <strong>sub-millisecond latency</strong>, very high throughput per volume, SAP HANA and Oracle certification, dual-protocol (NFS and SMB on the same volume), NFSv3 and NFSv4.1 with Kerberos, instant snapshots and cross-region replication. Choose <strong>Azure Files</strong> for general-purpose managed SMB or NFS shares, File Sync hybrid caching and lower entry cost, where millisecond latency is acceptable.",
    tags: ["Azure NetApp Files", "Azure Files"]
  },
  {
    id: "azure-az305-fc-190",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure NetApp Files service levels: how do Standard, Premium and Ultra differ?",
    hint: "Throughput per provisioned TiB.",
    back: "With auto QoS, throughput scales with provisioned capacity: <strong>Standard</strong> about 16 MiB/s per TiB, <strong>Premium</strong> 64 MiB/s per TiB, <strong>Ultra</strong> 128 MiB/s per TiB. A <strong>Flexible</strong> level lets throughput be set independently of capacity. Capacity pools with <strong>manual QoS</strong> let you assign throughput to each volume from the pool's total. Volumes can move between pools to change level without migrating data.",
    tags: ["Azure NetApp Files", "Service levels"]
  },
  {
    id: "azure-az305-fc-191",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Managed disk types from fastest to cheapest: which workload goes on each?",
    hint: "Ultra, Premium SSD v2, Premium SSD, Standard SSD, Standard HDD.",
    back: "<strong>Ultra Disk</strong>: top-tier, sub-millisecond I/O such as SAP HANA and transaction logs. <strong>Premium SSD v2</strong>: production databases that need tunable IOPS and throughput independent of size. <strong>Premium SSD</strong>: production workloads, and OS disks needing the highest single-VM SLA. <strong>Standard SSD</strong>: web servers, light production and dev/test. <strong>Standard HDD</strong>: backups and infrequently accessed data.",
    tags: ["Managed disks", "Disk types"]
  },
  {
    id: "azure-az305-fc-192",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Premium SSD v2 and Ultra Disk: which limitations catch designers out?",
    hint: "Boot, caching, and the numbers at the top.",
    back: "Neither can be an <strong>OS disk</strong>; both are data disks only, and neither supports <strong>host caching</strong>. <strong>Premium SSD v2</strong> reaches 80,000 IOPS and 1,200 MB/s per disk, with 3,000 IOPS and 125 MB/s included free at any size. <strong>Ultra Disk</strong> reaches 400,000 IOPS and 10,000 MB/s per disk. Both let IOPS and throughput be changed while attached, and both depend on regional and zonal availability of the VM size.",
    tags: ["Managed disks", "Premium SSD v2", "Ultra Disk"]
  },
  {
    id: "azure-az305-fc-193",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Managed disk bursting: credit-based vs on-demand. Which disks get which?",
    hint: "Small disks earn credits; large disks pay per burst.",
    back: "<strong>Credit-based bursting</strong> is free and automatic on Premium SSD <strong>P20 and smaller</strong> (and small Standard SSDs): the disk banks credits while under its baseline and bursts to 3,500 IOPS for up to 30 minutes. <strong>On-demand bursting</strong> is opt-in on Premium SSD <strong>larger than 512 GiB</strong>: it bursts above baseline (up to 30,000 IOPS) whenever needed, billed with an enablement fee plus burst transactions. Neither suits sustained load; size or tier for that instead.",
    tags: ["Managed disks", "Bursting"]
  },
  {
    id: "azure-az305-fc-194",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "What are Azure shared disks for, and what do they not do?",
    hint: "Clusters, not file sharing.",
    back: "A shared disk (Ultra, Premium SSD v2, Premium SSD or Standard SSD with <strong>maxShares</strong> above 1) attaches one managed disk to several VMs at once so <strong>clustered applications</strong> such as Windows Server Failover Clustering or Pacemaker can use SCSI persistent reservations to coordinate access. It is <strong>not a file share</strong>: without cluster software managing ownership, two VMs writing to the same disk will corrupt it.",
    tags: ["Managed disks", "Shared disks", "Clustering"]
  },
  {
    id: "azure-az305-fc-195",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Ephemeral OS disks: what do you gain and what do you give up?",
    hint: "Fast and free, but not persistent.",
    back: "The OS disk is created on the VM's <strong>local cache, temporary disk or NVMe storage</strong>, so it costs nothing extra, gives lower read and write latency, and reimages faster: ideal for <strong>stateless</strong> scale sets and AKS nodes. You give up persistence: a VM with an ephemeral OS disk cannot be stopped and deallocated, cannot be snapshotted or protected by Azure Backup, and loses its OS state on reimage or host move.",
    tags: ["Managed disks", "Ephemeral OS disks"]
  },
  {
    id: "azure-az305-fc-196",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Elastic SAN vs managed disks: when does a SAN win?",
    hint: "Pooling performance across many volumes.",
    back: "<strong>Managed disks</strong> give each volume its own capacity and performance, so every disk is sized for its own peak. <strong>Elastic SAN</strong> provisions capacity and performance once at the SAN level and shares it across volume groups and volumes served over <strong>iSCSI</strong> to VMs, AKS and Azure VMware Solution. It wins when you consolidate many volumes whose peaks do not coincide, often when migrating from an on-premises SAN, and when you want to bypass per-VM disk attachment limits.",
    tags: ["Elastic SAN", "Managed disks"]
  },
  {
    id: "azure-az305-fc-197",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure File Sync cloud tiering: which two policies control what stays on the local server?",
    hint: "Free space and age.",
    back: "The <strong>volume free space policy</strong> keeps a set percentage of the local volume free, tiering the coldest files to Azure first when space runs low. The <strong>date policy</strong> tiers files not accessed within a set number of days, even if space is available. Tiered files remain visible as reparse points and are <strong>recalled on access</strong>. The free space policy always wins when both apply.",
    tags: ["Azure File Sync", "Cloud tiering"]
  },
  {
    id: "azure-az305-fc-198",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d2",
    front: "Blob index tags vs blob metadata: which one can you search and use in lifecycle rules?",
    hint: "One is indexed by the service.",
    back: "<strong>Blob index tags</strong> (up to 10 key-value pairs per blob) are indexed by the storage service: <strong>Find Blobs by Tags</strong> queries across every container in the account, lifecycle rules and ABAC role conditions can filter on them, and tags can change without rewriting the blob. <strong>Metadata</strong> is stored with the blob but is <strong>not indexed</strong>, so finding blobs by metadata means listing and reading them yourself.",
    tags: ["Blob storage", "Blob index tags"]
  },
  {
    id: "azure-az305-fc-199",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d2",
    front: "Azure Managed Lustre vs Azure NetApp Files vs Azure Files for HPC: which fits a scratch file system for hundreds of nodes?",
    hint: "Parallel file system, integrated with Blob.",
    back: "<strong>Azure Managed Lustre</strong>: a managed parallel file system for HPC and AI training, scaling to very high aggregate throughput across hundreds or thousands of clients, with <strong>Blob storage integration</strong> to import inputs and export results, so the file system can be treated as scratch. <strong>Azure NetApp Files</strong> suits enterprise NAS and moderately parallel HPC with low latency. <strong>Azure Files</strong> suits general shares, not large parallel I/O.",
    tags: ["Azure Managed Lustre", "HPC", "File storage"]
  },
  {
    id: "azure-az305-fc-200",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d2",
    front: "Blob storage vs Azure Files vs managed disks: what is the first question that picks between them?",
    hint: "How does the application reach the data?",
    back: "Ask <strong>how the application accesses the data</strong>. Through REST APIs or SDKs as objects (images, backups, data lake files): <strong>Blob storage</strong>. Through a mounted file share over SMB or NFS by many clients: <strong>Azure Files</strong> (or NetApp Files for enterprise NAS needs). As a block device attached to one VM (OS, database files): <strong>managed disks</strong>. Cost and performance tiering come after the access model is settled.",
    tags: ["Storage selection", "Blob storage", "Azure Files"]
  }
];

export default AZURE_AZ305_FLASHCARDS_8;
