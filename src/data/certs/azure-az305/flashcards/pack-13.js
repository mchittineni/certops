export const AZURE_AZ305_FLASHCARDS_13 = [
  {
    id: "azure-az305-fc-301",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "LRS, ZRS, GRS and GZRS: where do the copies live and what failure does each survive?",
    hint: "Count the datacenters, then count the regions.",
    back: "<strong>LRS</strong>: three synchronous copies in one datacenter; survives disk and rack failure only. <strong>ZRS</strong>: synchronous copies across three availability zones; survives a zone outage with no failover. <strong>GRS</strong>: LRS in the primary plus an asynchronous LRS copy in the paired region; survives a regional disaster after failover. <strong>GZRS</strong>: ZRS in the primary plus the asynchronous paired-region copy; survives both, which is why Microsoft recommends (RA-)GZRS for maximum durability and availability.",
    tags: ["Azure Storage", "Redundancy"]
  },
  {
    id: "azure-az305-fc-302",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What does the \"RA-\" in RA-GRS and RA-GZRS add, and how does an app reach it?",
    hint: "Reading before anyone presses failover.",
    back: "Read access to the secondary region <strong>at all times</strong>, not just after a failover. The secondary is exposed at the account name with a <code>-secondary</code> suffix, for example <code>contoso-secondary.blob.core.windows.net</code>. It is <strong>read-only</strong> and eventually consistent, so apps must tolerate slightly stale data. Plain GRS and GZRS replicate the same way but give no access to the secondary until the account fails over.",
    tags: ["Azure Storage", "RA-GRS", "Secondary endpoint"]
  },
  {
    id: "azure-az305-fc-303",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which redundancy options do premium block blob and premium file share accounts support?",
    hint: "Premium stays in one region.",
    back: "Both <strong>premium block blob</strong> (BlockBlobStorage) and <strong>premium file share</strong> (FileStorage) accounts support only <strong>LRS and ZRS</strong>; no GRS or GZRS. Standard general-purpose v2 accounts support every option (LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS). Premium page blobs and managed disks have their own rules. For a regional copy of premium data, replicate it yourself: object replication for block blobs, or scheduled copies with AzCopy for files.",
    tags: ["Azure Storage", "Premium storage", "Redundancy"]
  },
  {
    id: "azure-az305-fc-304",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Storage account failover: customer-managed planned vs customer-managed unplanned vs Microsoft-managed?",
    hint: "Who triggers it, and are both regions still up?",
    back: "<strong>Planned</strong>: you trigger it while both regions are healthy; it swaps primary and secondary with <strong>no data loss</strong> and keeps geo-redundancy, so it suits DR drills and pre-emptive moves before a forecast disaster. <strong>Unplanned</strong>: you trigger it when the primary is unavailable; writes not yet replicated are <strong>lost</strong>. <strong>Microsoft-managed</strong>: initiated by Microsoft only for a whole region in an extreme disaster, never per account, so never plan around it.",
    tags: ["Azure Storage", "Account failover"]
  },
  {
    id: "azure-az305-fc-305",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "After a customer-managed unplanned failover of a GZRS account, what redundancy do you end up with and how do you get GZRS back?",
    hint: "The old primary's copy is gone.",
    back: "The account becomes <strong>LRS</strong> in the new primary region and the copy in the original primary is deleted. Re-enable geo-redundancy (it returns as <strong>GRS</strong>), which re-replicates and bills the data to a new secondary; <strong>archived blobs must be rehydrated</strong> first. Failing back later lands as <strong>ZRS</strong> in the original region, and re-enabling geo-redundancy then restores <strong>GZRS</strong>. A planned failover avoids all of this: geo-redundancy is kept throughout.",
    tags: ["Azure Storage", "Unplanned failover", "GZRS"]
  },
  {
    id: "azure-az305-fc-306",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What does a storage account's Last Sync Time tell you?",
    hint: "The line between safe and at risk.",
    back: "The most recent time at which <strong>all</strong> writes to the primary region were also present on the secondary (for Data Lake accounts, including namespace metadata such as ACLs). Anything written before it is guaranteed on the secondary; anything after it <strong>may be lost</strong> in an unplanned failover. Compare it with your own write log to estimate data loss before deciding to fail over. Geo-replication itself has no SLA on how far behind it runs.",
    tags: ["Azure Storage", "Last Sync Time", "RPO"]
  },
  {
    id: "azure-az305-fc-307",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which storage configurations cannot use customer-managed account failover?",
    hint: "One sync service, one performance tier, one protocol.",
    back: "<strong>Azure File Sync</strong> cloud endpoints (failover disrupts sync and can lose tiered files), <strong>premium block blob</strong> accounts (they cannot be geo-redundant at all), and accounts with <strong>NFS 3.0</strong> enabled (they cannot be created with geo-redundancy). Object replication and change feed support vary by failover type, and point-in-time restore is reset to the failover completion time. Check these before writing a runbook that says \"fail over the account\".",
    tags: ["Azure Storage", "Account failover", "Limitations"]
  },
  {
    id: "azure-az305-fc-308",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Object replication: what are its prerequisites and main limits?",
    hint: "Two features on, one namespace off.",
    back: "Requires <strong>blob versioning on both accounts</strong> and the <strong>change feed on the source</strong>. Block blobs only, general-purpose v2 or premium block blob accounts, <strong>no hierarchical namespace</strong>, no archive-tier blobs, no snapshots. A source can replicate to at most <strong>two</strong> destination accounts, each policy holds up to 1,000 container rules, and the <strong>destination container becomes read-only</strong> while a rule targets it. Replication is asynchronous unless priority replication adds its 15-minute SLA.",
    tags: ["Object replication", "Blob Storage"]
  },
  {
    id: "azure-az305-fc-309",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Object replication vs GRS: when is object replication the better way to get blob data into another region?",
    hint: "You choose the region and the scope.",
    back: "Choose <strong>object replication</strong> when you need a <strong>region other than the pair</strong>, only <strong>some containers or prefixes</strong>, copies in <strong>another subscription or tenant</strong>, a <strong>readable copy with its own endpoint</strong> for local compute, or a regional copy of <strong>premium block blob</strong> data. Choose <strong>GRS/GZRS</strong> when you want the whole account protected automatically with account failover and no policies to manage. The two can be combined.",
    tags: ["Object replication", "GRS", "Blob Storage"]
  },
  {
    id: "azure-az305-fc-310",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Designing an application to use an RA-GZRS account's secondary during an outage: what must the code handle?",
    hint: "Stale, read-only, and when to switch back.",
    back: "Send reads to the <strong>secondary endpoint</strong> when the primary fails repeatedly (a circuit breaker, or the SDK's geo-redundant secondary URI retry option), and switch back once the primary recovers. Accept <strong>eventual consistency</strong>: data newer than the Last Sync Time may be missing. Writes still fail until a failover, so either queue them, degrade to <strong>read-only mode</strong>, or trigger failover. Test the path, since an untested fallback is not a design.",
    tags: ["Azure Storage", "RA-GZRS", "Application design"]
  },
  {
    id: "azure-az305-fc-311",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Cosmos DB availability SLAs: single region, with zones, multi-region, and multi-region writes?",
    hint: "Four configurations, climbing from four nines to five.",
    back: "<strong>Single region without zones</strong>: 99.99% for reads and writes. <strong>Single region with availability zones</strong>: 99.995%. <strong>Multiple regions with one write region</strong>: 99.999% for reads, 99.99% for writes (writes wait for failover). <strong>Multiple regions with multi-region writes</strong>: 99.999% for reads and writes. Choose the lowest configuration that meets the stated read and write targets.",
    tags: ["Cosmos DB", "SLA"]
  },
  {
    id: "azure-az305-fc-312",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cosmos DB single-write-region account: service-managed failover vs manual failover?",
    hint: "Does Azure act on its own, or wait for you?",
    back: "With <strong>service-managed failover</strong> enabled, Azure promotes the next region in your <strong>failover priority list</strong> to write region during a regional outage and the SDKs redirect writes automatically; it is the recommended setting for production. <strong>Manual failover</strong> (changing the write region yourself) is for planned moves and drills, and it only works while the account's regions are reachable. Read regions fail over on the client side through the SDK's preferred regions in either case.",
    tags: ["Cosmos DB", "Failover"]
  },
  {
    id: "azure-az305-fc-313",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cosmos DB regional outage: what RPO does each consistency level give?",
    hint: "Only one combination reaches zero.",
    back: "With <strong>one write region</strong>: <strong>strong</strong> gives RPO 0; <strong>bounded staleness</strong> loses at most the configured K versions or T seconds; <strong>session, consistent prefix and eventual</strong> can lose up to about 15 minutes. With <strong>multi-region writes</strong>, strong is not allowed, bounded staleness is bounded by K and T, and the weaker levels again allow up to about 15 minutes. RTO is typically minutes with service-managed failover, and near zero for multi-region writes.",
    tags: ["Cosmos DB", "RPO", "Consistency"]
  },
  {
    id: "azure-az305-fc-314",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cosmos DB multi-region writes: what are the conflict resolution options?",
    hint: "One rule without code, one with a stored procedure, one left to you.",
    back: "<strong>Last writer wins</strong> (default): the version with the highest value of a numeric path wins, <code>_ts</code> unless you set a custom path such as <code>/version</code>. <strong>Custom with a merge stored procedure</strong>: your server-side JavaScript decides, run exactly once per conflict. <strong>Custom without a procedure</strong>: conflicts are written to the <strong>conflicts feed</strong> for your application to resolve. The policy is set when the container is created.",
    tags: ["Cosmos DB", "Multi-region writes", "Conflict resolution"]
  },
  {
    id: "azure-az305-fc-315",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "When can you turn on availability zones for a region in a Cosmos DB account?",
    hint: "It is a property of adding the region.",
    back: "Zone redundancy is chosen <strong>when a region is added</strong> to the account, including the first region at account creation, and only in regions that have availability zones. To enable it on a region already in use, add another region, fail over or remove the original, and re-add it with zones enabled. Zones protect against a datacenter failure within the region and raise the single-region SLA to 99.995%.",
    tags: ["Cosmos DB", "Availability zones"]
  },
  {
    id: "azure-az305-fc-316",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What does the Cosmos DB SDK's preferred regions setting do?",
    hint: "An ordered list the client follows.",
    back: "It gives the client an <strong>ordered list of regions</strong> to read from (and, with multi-region writes, write to). The SDK sends requests to the first available region in the list and <strong>automatically retries the next</strong> if that region becomes unavailable, so reads keep flowing during an outage without code changes. Set it per deployment so each application instance prefers its nearest region.",
    tags: ["Cosmos DB", "Preferred regions", "SDK"]
  },
  {
    id: "azure-az305-fc-317",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Why might a Cosmos DB account refuse strong consistency across your chosen regions?",
    hint: "Distance and the speed of light.",
    back: "Strong consistency requires each write to be committed in every region before it is acknowledged, so write latency grows with distance. Accounts whose regions are more than about <strong>5,000 miles (8,000 km)</strong> apart are <strong>blocked by default</strong> from using strong consistency; enabling it requires a support request. Strong is also incompatible with multi-region writes. When latency matters more than RPO 0, bounded staleness is the usual compromise.",
    tags: ["Cosmos DB", "Consistency", "Multi-region"]
  },
  {
    id: "azure-az305-fc-318",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Files: which redundancy options exist for standard SMB, premium SMB and NFS shares?",
    hint: "Protocol and tier limit the choice.",
    back: "<strong>Standard (HDD) SMB shares</strong> in general-purpose v2 accounts: LRS, ZRS, GRS or GZRS. <strong>Premium (SSD) SMB shares</strong> in FileStorage accounts: <strong>LRS or ZRS</strong> only. <strong>NFS shares</strong> require premium FileStorage accounts, so they are also LRS or ZRS. For a copy in another region where geo-redundancy is unavailable, schedule AzCopy or use backup with a separate vault.",
    tags: ["Azure Files", "Redundancy"]
  },
  {
    id: "azure-az305-fc-319",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure NetApp Files: cross-zone replication vs cross-region replication?",
    hint: "Same region or another one.",
    back: "NetApp Files volumes are placed in a single zone. <strong>Cross-zone replication</strong> asynchronously replicates a volume to a destination volume in <strong>another zone of the same region</strong>, protecting against a zone failure while keeping data in-region. <strong>Cross-region replication</strong> replicates to a destination volume in <strong>another region</strong> on a schedule (as often as every 10 minutes), for regional disaster recovery. Either destination is activated by breaking the replication.",
    tags: ["Azure NetApp Files", "Replication"]
  },
  {
    id: "azure-az305-fc-320",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "ZRS managed disks: what do they make possible that LRS disks cannot, and which disk types offer them?",
    hint: "A disk that is not tied to one zone.",
    back: "A <strong>ZRS disk</strong> is replicated synchronously across three zones, so when the VM's zone fails you can <strong>force-detach</strong> the disk and attach it to a VM in another zone with no data loss, and a <strong>ZRS shared disk</strong> can serve cluster nodes in different zones. ZRS is offered for <strong>Premium SSD and Standard SSD</strong>; <strong>Ultra Disks</strong> are zonal LRS only. ZRS writes cost slightly more latency than LRS.",
    tags: ["Managed disks", "ZRS"]
  },
  {
    id: "azure-az305-fc-321",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Can a Blob Storage account with NFS 3.0 enabled be geo-redundant?",
    hint: "The protocol fixes the redundancy choices.",
    back: "No. An account with <strong>NFS 3.0</strong> enabled cannot be configured with GRS, GZRS or their read-access variants, and it cannot be failed over. Use <strong>LRS or ZRS</strong> for the NFS account and, if a regional copy is required, copy the data on a schedule to a separate geo-redundant account. NFS 3.0 also requires the hierarchical namespace and a private network path.",
    tags: ["Blob Storage", "NFS 3.0", "Redundancy"]
  },
  {
    id: "azure-az305-fc-322",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How do you change an existing storage account from LRS to ZRS without downtime?",
    hint: "Ask for a conversion, not a copy.",
    back: "Request a <strong>customer-initiated conversion</strong> from the account's redundancy settings in the portal (or CLI/PowerShell): Azure migrates the data to ZRS in the background while the account keeps its name, endpoints and availability. Changes between LRS and GRS, or ZRS and GZRS, are a simple setting change. A <strong>manual migration</strong> by copying to a new account is needed only for unsupported combinations and requires an application cutover.",
    tags: ["Azure Storage", "Redundancy conversion"]
  },
  {
    id: "azure-az305-fc-323",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Failing over a Data Lake Storage (hierarchical namespace) account: what consistency risk should you plan for?",
    hint: "Replication happens file by file.",
    back: "Geo-replication of hierarchical namespace accounts works at the <strong>file level</strong>, so after an unplanned failover some files in a directory may have replicated while others have not; <strong>consistency across files in a container or directory is not guaranteed</strong>. Design pipelines to be idempotent and able to reprocess, record what was written after the Last Sync Time, and validate data sets after failover. Planned failover avoids the issue because both regions are in sync.",
    tags: ["Data Lake Storage", "Account failover"]
  },
  {
    id: "azure-az305-fc-324",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "When a storage account fails over, which region does it move to?",
    hint: "You do not get to choose.",
    back: "Always to the account's <strong>secondary region</strong>, which for GRS and GZRS is the <strong>Azure paired region</strong> of the primary (for example West Europe fails over to North Europe). You cannot pick another region, and the storage resource provider does not fail over, so management operations still target the original region. Failover is a disaster recovery tool, not a way to relocate an account; migrate the data instead.",
    tags: ["Azure Storage", "Account failover", "Paired regions"]
  },
  {
    id: "azure-az305-fc-325",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Premium block blob data needs a copy in another region. How do you provide it?",
    hint: "Geo-redundancy is off the table for this account type.",
    back: "Premium block blob accounts support only LRS and ZRS, so use <strong>object replication</strong> to a second account in the target region (premium block blob or general-purpose v2), with versioning on both accounts and change feed on the source. Put the source on <strong>ZRS</strong> for zone resilience, add <strong>priority replication</strong> if you need a time SLA, and remember the destination container is read-only while the rule is active.",
    tags: ["Premium block blobs", "Object replication"]
  }
];

export default AZURE_AZ305_FLASHCARDS_13;
