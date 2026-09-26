export const AZURE_AZ305_FLASHCARDS_12 = [
  {
    id: "azure-az305-fc-276",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Virtual machine connectivity SLA: what do a single VM, an availability set and availability zones each earn?",
    hint: "Three tiers, each adding a nine or half of one.",
    back: "<strong>Single VM</strong>: 99.9% when every OS and data disk is Premium SSD, Premium SSD v2 or Ultra Disk (Standard SSD drops it to 99.5%, Standard HDD to 95%). <strong>Two or more VMs in an availability set</strong> (or spread across fault domains in a scale set): 99.95%. <strong>Two or more VMs across two or more availability zones</strong> in one region: 99.99%. A requirement for four nines inside one region therefore means zones, not better disks or a bigger availability set.",
    tags: ["Virtual machines", "SLA"]
  },
  {
    id: "azure-az305-fc-277",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Fault domain vs update domain in an availability set: which failure does each protect against?",
    hint: "One is about hardware, the other about the calendar.",
    back: "A <strong>fault domain</strong> is a group of hosts sharing a power source and network switch, so spreading VMs across fault domains (up to 3 in most regions) protects against an <strong>unplanned</strong> rack or hardware failure. An <strong>update domain</strong> (up to 20, default 5) is a group rebooted together during <strong>planned</strong> platform maintenance; the platform updates one update domain at a time. Neither protects against a whole datacenter or zone failing.",
    tags: ["Availability sets", "Fault domains"]
  },
  {
    id: "azure-az305-fc-278",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Availability set, availability zones or a scale set: how do you choose for a VM tier?",
    hint: "Start from whether the region has zones and whether the tier scales.",
    back: "Use <strong>availability zones</strong> whenever the region has them and the workload tolerates the small inter-zone latency: they protect against a datacenter failure and earn 99.99%. Use an <strong>availability set</strong> only in regions without zones, or when VMs must stay in one datacenter for latency, accepting rack-level protection. Use a <strong>Virtual Machine Scale Set</strong> (Flexible orchestration) when the tier needs autoscale or many identical instances; it can itself span zones or fault domains, so it is a management layer on top of either choice.",
    tags: ["Availability zones", "Availability sets", "Scale sets"]
  },
  {
    id: "azure-az305-fc-279",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Zonal vs zone-redundant resources: what is the difference and who handles a zone failure?",
    hint: "Pinned or spread.",
    back: "A <strong>zonal</strong> resource is pinned to one zone you choose (a VM, a zonal public IP, an Ultra Disk); if that zone fails, the resource fails and <em>you</em> must have another instance elsewhere. A <strong>zone-redundant</strong> resource is replicated or served across several zones by the platform (ZRS storage, a zone-redundant load balancer frontend, a zone-redundant SQL database), and Azure handles the zone failure transparently. Some zone settings are fixed at creation and need a redeploy to change.",
    tags: ["Availability zones", "Resilience"]
  },
  {
    id: "azure-az305-fc-280",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Virtual Machine Scale Sets: Flexible vs Uniform orchestration. Which should a new design use?",
    hint: "Microsoft's default for new scale sets.",
    back: "<strong>Flexible</strong> is the recommended default: instances are standard VM resources, you can mix VM sizes and Spot with regular capacity, manage each VM individually, and spread across zones or fault domains, and it works with standard VM APIs and tools. <strong>Uniform</strong> manages identical instances from one model through scale set APIs; it suits large stateless fleets built for it, but it is older and less flexible. Both support autoscale and automatic instance repairs.",
    tags: ["Virtual Machine Scale Sets", "Orchestration"]
  },
  {
    id: "azure-az305-fc-281",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Zone-spanning scale set: what changes when you turn on strict zone balancing?",
    hint: "Best effort vs refuse.",
    back: "By default a zone-spanning scale set uses <strong>best-effort</strong> balancing: it tries to keep instance counts per zone within one of each other but will still scale out into the zones that have capacity if one zone cannot supply VMs. With <strong>strict zone balancing</strong> (<code>zoneBalance: true</code>) the scale set refuses a scale-out that would leave the zones unbalanced, so capacity stays evenly spread at the price of failed scale-outs when one zone is constrained. Pick strict when losing a zone must never remove more than its share of capacity.",
    tags: ["Virtual Machine Scale Sets", "Availability zones"]
  },
  {
    id: "azure-az305-fc-282",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Why can \"zone 1\" in one subscription be a different datacenter from \"zone 1\" in another?",
    hint: "Logical numbers, physical buildings.",
    back: "Zone numbers are <strong>logical</strong>: Azure maps logical zones 1, 2 and 3 to <strong>physical</strong> zones independently for each subscription to spread load. Two subscriptions that both deploy to \"zone 1\" may land in different physical zones, which matters when tiers in separate subscriptions must be colocated or deliberately separated. Check the mapping with the <code>availabilityZoneMappings</code> returned by the locations API or the <code>checkZonePeers</code> operation before relying on zone numbers across subscriptions.",
    tags: ["Availability zones", "Subscriptions"]
  },
  {
    id: "azure-az305-fc-283",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Front Door origin groups: in what order do health, priority, latency and weight decide which origin serves a request?",
    hint: "Healthy first, then the lowest number, then the fastest, then the split.",
    back: "Front Door first drops origins whose <strong>health probes</strong> are failing, then keeps only those with the lowest <strong>priority</strong> value, so priority 1 origins serve and priority 2 origins stand by (active-passive). Among the remaining origins it keeps those within the <strong>latency sensitivity</strong> window of the fastest one, then splits traffic by <strong>weight</strong> (active-active or canary). Probe interval and the sample size needed to mark an origin unhealthy set how fast failover happens.",
    tags: ["Front Door", "Origin groups", "Failover"]
  },
  {
    id: "azure-az305-fc-284",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Health endpoint monitoring: what should a health probe endpoint check so that failover decisions are correct?",
    hint: "Too shallow misses outages; too deep causes them.",
    back: "A <strong>shallow</strong> probe (the process answers) misses failures in critical dependencies; a <strong>deep</strong> probe that calls every dependency can mark all regions unhealthy when a shared or non-critical dependency blips, causing needless failover. Check the dependencies the instance <strong>cannot serve without</strong> (its database, its own queue), cache the result briefly, return fast, and protect the endpoint from abuse. Load balancers, Front Door and Traffic Manager all act on what it returns.",
    tags: ["Health probes", "Resilience", "Failover"]
  },
  {
    id: "azure-az305-fc-285",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Multi-region deployment: active-active vs active-passive (hot, warm, cold). How do cost and recovery time trade off?",
    hint: "The more that is already running, the faster and dearer.",
    back: "<strong>Active-active</strong>: both regions serve traffic; near-zero RTO but full double cost and the hardest data design (multi-write or conflict handling). <strong>Active-passive hot</strong>: the secondary is fully scaled but idle; fast failover, nearly double cost. <strong>Warm</strong>: the secondary runs at reduced scale and scales out on failover; moderate cost and RTO. <strong>Cold</strong>: infrastructure is deployed only on failover from IaC and backups; cheapest, slowest. Match the choice to the stated RTO and budget.",
    tags: ["Multi-region", "Disaster recovery", "Cost optimization"]
  },
  {
    id: "azure-az305-fc-286",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What does an App Service plan need before it can be zone redundant?",
    hint: "A tier family and a minimum count.",
    back: "A <strong>Premium v2, v3 or v4</strong> plan in a region with availability zones, on a scale unit that supports zones, running <strong>at least two instances</strong>. Zone redundancy has no separate meter; you pay only for the instances, and the platform enforces the two-instance minimum. When enabled, every app in the plan becomes zone redundant. Basic and Standard plans are nonzonal: extra instances spread across fault domains only.",
    tags: ["App Service", "Zone redundancy"]
  },
  {
    id: "azure-az305-fc-287",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "AKS pricing tiers: Free vs Standard vs Premium. Which one production needs, and why?",
    hint: "The control plane's SLA lives in the tier.",
    back: "<strong>Free</strong>: no financially backed SLA for the API server; for dev/test and small clusters. <strong>Standard</strong>: financially backed uptime SLA for the Kubernetes API server (99.95% with availability zones, 99.9% without) and a control plane scaled for larger clusters; the production default. <strong>Premium</strong>: everything in Standard plus <strong>Long-Term Support</strong> for Kubernetes versions. Zone resilience for workloads still comes from spreading node pools across zones.",
    tags: ["AKS", "SLA"]
  },
  {
    id: "azure-az305-fc-288",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which Azure SQL Managed Instance service tiers can be zone redundant, and how does each achieve it?",
    hint: "Remote storage vs replicas, applied across zones.",
    back: "<strong>General Purpose</strong>: stateless compute nodes are spread over availability zones and the database files sit on <strong>zone-redundant storage</strong>, so the engine restarts on a node in a surviving zone. <strong>Business Critical</strong>: the primary and its Always On replicas are placed in different zones, with automatic failover. Existing instances can be converted online, at the cost of slightly higher commit latency. <strong>Next-gen General Purpose</strong> zone redundancy is still in preview. Zone redundancy protects against a zone outage; a region outage still needs a failover group.",
    tags: ["SQL Managed Instance", "Zone redundancy"]
  },
  {
    id: "azure-az305-fc-289",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Which Azure SQL Database service tiers support zone redundancy?",
    hint: "Everything except the two cheapest DTU tiers.",
    back: "<strong>General Purpose</strong>, <strong>Business Critical</strong> and <strong>Hyperscale</strong> in the vCore model, and <strong>Premium</strong> in the DTU model, in regions with availability zones. <strong>Basic</strong> and <strong>Standard</strong> DTU tiers do not support it. Zone-redundant configurations carry the 99.995% availability SLA. For a small database that only needs zone resilience, zone-redundant General Purpose is usually the cheapest qualifying option.",
    tags: ["Azure SQL Database", "Zone redundancy"]
  },
  {
    id: "azure-az305-fc-290",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Failover groups vs active geo-replication for Azure SQL Database: when do you pick each?",
    hint: "Unit of failover, number of secondaries, and endpoints.",
    back: "<strong>Failover group</strong>: one or many databases fail over together to <strong>one</strong> secondary server, with read-write and read-only <strong>listener</strong> names that follow the roles, so connection strings never change; also the only option for SQL Managed Instance. <strong>Active geo-replication</strong>: per database, up to <strong>four</strong> readable secondaries in any regions, each failed over individually and addressed by its own server name. Pick groups for app-transparent DR; pick geo-replication for several regional read copies.",
    tags: ["Azure SQL Database", "Failover groups", "Active geo-replication"]
  },
  {
    id: "azure-az305-fc-291",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "What are the two listener endpoints of an Azure SQL Database failover group?",
    hint: "One for writes, one for reads, both following the roles.",
    back: "The <strong>read-write listener</strong> <code>&lt;fog-name&gt;.database.windows.net</code> always points to the current primary server. The <strong>read-only listener</strong> <code>&lt;fog-name&gt;.secondary.database.windows.net</code> always points to the current secondary. After a failover both DNS records are updated, so applications using the listeners need no connection-string changes; applications using the individual server names do.",
    tags: ["Azure SQL Database", "Failover groups"]
  },
  {
    id: "azure-az305-fc-292",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "Failover group: planned failover vs forced failover. Which can lose data?",
    hint: "Does it wait for the secondary to catch up?",
    back: "A <strong>planned failover</strong> (the default \"failover\") first fully synchronises the secondary, then swaps roles, so there is <strong>no data loss</strong>; it needs both regions reachable and suits DR drills and planned relocations. A <strong>forced failover</strong> promotes the secondary immediately without waiting, so transactions not yet replicated are <strong>lost</strong>; it is the choice when the primary region is down. The same distinction applies to geo-replication.",
    tags: ["Azure SQL Database", "Failover groups"]
  },
  {
    id: "azure-az305-fc-293",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "SQL Server on Azure VMs: Always On availability group vs failover cluster instance?",
    hint: "Replicated databases vs one instance on shared storage.",
    back: "An <strong>availability group</strong> replicates chosen databases to secondary instances with their own storage; secondaries can be readable, span zones or regions, and fail over per group, but instance-level objects (logins, jobs) must be synced by hand. A <strong>failover cluster instance</strong> protects the whole instance on <strong>shared storage</strong> (Azure shared disks, premium file shares, Elastic SAN, or S2D); there is one copy of the data and no readable secondary. Choose AGs for read offload or cross-region; FCI to lift an existing clustered instance as is.",
    tags: ["SQL Server on Azure VMs", "Availability groups", "Failover cluster instance"]
  },
  {
    id: "azure-az305-fc-294",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "Cluster quorum witness on Azure VMs: which type is usually recommended, and why?",
    hint: "No extra VM and no single zone.",
    back: "A <strong>cloud witness</strong>: a small blob in an Azure Storage account casts the tie-breaking vote, so a two-node cluster needs no third VM and the witness is independent of any node's zone (use a ZRS account). A <strong>file share witness</strong> needs a share hosted somewhere reliable, never on a cluster node. A <strong>disk witness</strong> needs an Azure shared disk and suits clusters already using shared storage. Elastic SAN FCIs cannot currently use a cloud witness.",
    tags: ["SQL Server on Azure VMs", "Quorum", "Cloud witness"]
  },
  {
    id: "azure-az305-fc-295",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Availability group listener on Azure VMs: VNN with a load balancer, DNN, or multi-subnet?",
    hint: "Which option removes the extra moving part entirely?",
    back: "In a <strong>single subnet</strong>, Azure networking cannot move a floating IP between VMs, so you need either a <strong>virtual network name (VNN)</strong> listener behind an Azure Load Balancer (slower failover, a probe to manage) or a <strong>distributed network name (DNN)</strong>, which resolves to all node IPs and needs clients that support <code>MultiSubnetFailover=True</code>. Deploying each replica in its <strong>own subnet</strong> (multi-subnet) restores the on-premises model and removes the need for either the load balancer or the DNN.",
    tags: ["SQL Server on Azure VMs", "Availability groups", "Listener"]
  },
  {
    id: "azure-az305-fc-296",
    difficulty: "easy",
    certId: "azure-az305",
    domainId: "d3",
    front: "PostgreSQL or MySQL flexible server: zone-redundant vs same-zone high availability?",
    hint: "Where does the standby live, and which tier cannot have one?",
    back: "Both modes keep a <strong>synchronously replicated standby</strong> with automatic failover and no loss of committed data. <strong>Zone-redundant</strong> puts the standby in a different availability zone, surviving a zone outage. <strong>Same-zone</strong> puts it in the primary's zone, protecting against host and storage failure only, and is the choice in regions without zones. Neither is available on the <strong>Burstable</strong> tier. Read replicas are asynchronous and are not an HA mechanism.",
    tags: ["PostgreSQL flexible server", "MySQL flexible server", "High availability"]
  },
  {
    id: "azure-az305-fc-297",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "Azure Managed Redis active geo-replication: how does it work, and what are its constraints?",
    hint: "Active-active, conflict-free, and identical instances.",
    back: "Up to <strong>five</strong> Managed Redis instances in different regions form one group; <strong>every instance accepts writes</strong>, and changes sync using conflict-free replicated data types (CRDTs), with eventual consistency and no sync-time SLA. All members must share SKU, size, eviction and clustering policy, modules and TLS settings; high availability must be on, data persistence is not supported, and <code>FLUSHALL</code> is blocked. If a region fails, point clients to another member and <strong>force-unlink</strong> the failed one so metadata does not build up.",
    tags: ["Azure Managed Redis", "Geo-replication"]
  },
  {
    id: "azure-az305-fc-298",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "How do you calculate the composite SLA of components that all must work, such as a web app and its database?",
    hint: "Serial dependencies multiply.",
    back: "Multiply the SLAs: a web tier at <strong>99.95%</strong> depending on a database at <strong>99.99%</strong> gives 0.9995 x 0.9999 = <strong>99.94%</strong>, lower than either part. Every extra serial dependency (cache, queue, gateway) lowers the figure further, which is why a design can miss its target even when each service looks strong. Raise the composite by adding redundancy (zones, a second region) or by removing hard dependencies with queues and fallbacks.",
    tags: ["SLA", "Composite SLA"]
  },
  {
    id: "azure-az305-fc-299",
    difficulty: "medium",
    certId: "azure-az305",
    domainId: "d3",
    front: "How does deploying to two regions in parallel change the availability calculation?",
    hint: "The chance that both are down at once.",
    back: "For independent redundant deployments the combined availability is <strong>1 - (1 - A) x (1 - B)</strong>. Two regional stacks at 99.9% each give 1 - 0.001 x 0.001 = <strong>99.9999%</strong> in theory. Then multiply by the SLA of whatever sits in front, such as Front Door or Traffic Manager, because that global component is now a serial dependency. The model assumes independent failures and working failover, so shared dependencies and untested failover erode the figure.",
    tags: ["SLA", "Multi-region"]
  },
  {
    id: "azure-az305-fc-300",
    difficulty: "hard",
    certId: "azure-az305",
    domainId: "d3",
    front: "SQL Managed Instance failover group: what must be decided when the secondary instance is created?",
    hint: "A shared DNS zone, set up front.",
    back: "The secondary must be created as a <strong>DNS zone partner</strong> of the primary so both instances share the same DNS zone; that keeps the group's listener names and TLS certificates valid after failover, and it cannot be changed later. The two instances also need network connectivity between their virtual networks (global peering, VPN or ExpressRoute) for replication, a secondary sized to match the primary, and no overlapping address ranges. Managed Instance has no active geo-replication, so the failover group is its only built-in cross-region option.",
    tags: ["SQL Managed Instance", "Failover groups"]
  }
];

export default AZURE_AZ305_FLASHCARDS_12;
