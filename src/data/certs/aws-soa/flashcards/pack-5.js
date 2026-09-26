export const AWS_SOA_FLASHCARDS_5 = [
  {
    id: "aws-soa-fc-101",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "EFS vs FSx for Windows vs FSx for Lustre vs FSx for NetApp ONTAP: one-line use case for each.",
    hint: "Protocol and workload.",
    back: "<strong>EFS</strong>: elastic NFS for Linux, shared across AZs. <strong>FSx for Windows File Server</strong>: SMB shares with Active Directory and NTFS ACLs. <strong>FSx for Lustre</strong>: parallel file system for HPC and ML, linkable to S3. <strong>FSx for NetApp ONTAP</strong>: multiprotocol (NFS, SMB, iSCSI) with NetApp snapshots, SnapMirror, and FlexClone. <strong>FSx for OpenZFS</strong>: NFS with ZFS snapshots and clones.",
    tags: ["Shared storage","Amazon EFS","Amazon FSx"]
  },
  {
    id: "aws-soa-fc-102",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "EFS throughput modes: Elastic, Provisioned, Bursting. When to use each?",
    hint: "Spiky, steady-high, or small and occasional.",
    back: "<strong>Elastic</strong> (recommended default): throughput scales automatically with demand, billed per GB transferred; best for spiky or unpredictable loads. <strong>Provisioned</strong>: you pay for a fixed throughput level regardless of size; suits steady high throughput on small data. <strong>Bursting</strong>: throughput scales with stored size and uses burst credits (BurstCreditBalance); small file systems run out quickly.",
    tags: ["Amazon EFS","Throughput modes"]
  },
  {
    id: "aws-soa-fc-103",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are the EFS storage classes and lifecycle policies?",
    hint: "Three classes, three transitions.",
    back: "Classes: <strong>Standard</strong>, <strong>Infrequent Access (IA)</strong>, and <strong>Archive</strong>. Lifecycle policies: <strong>transition into IA</strong> after N days without access, <strong>transition into Archive</strong> after N days (requires Elastic throughput), and <strong>transition out of IA/Archive</strong> back to Standard on first access. IA and Archive have lower storage prices but charge per GB accessed.",
    tags: ["Amazon EFS","Lifecycle management"]
  },
  {
    id: "aws-soa-fc-104",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "EFS Regional vs EFS One Zone.",
    hint: "Durability vs price.",
    back: "<strong>Regional</strong> file systems store data redundantly across multiple Availability Zones and allow mount targets in every AZ. <strong>One Zone</strong> file systems keep data in a single AZ at a lower price, suited to dev/test or reproducible data; if that AZ is lost, the data can be lost. Instances in other AZs can still mount a One Zone file system, with cross-AZ charges.",
    tags: ["Amazon EFS","EFS One Zone"]
  },
  {
    id: "aws-soa-fc-105",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which CloudWatch metrics show EFS performance problems?",
    hint: "Credits, I/O limit, throughput share.",
    back: "<strong>BurstCreditBalance</strong> falling to zero in Bursting mode means throughput will drop to baseline. <strong>PercentIOLimit</strong> near 100 percent (General Purpose mode) shows the file system's I/O limit is being reached. <strong>MeteredIOBytes</strong> and <strong>PermittedThroughput</strong> compare usage with what is allowed, and <strong>ClientConnections</strong> counts mounted clients. Move to Elastic throughput when limits are hit.",
    tags: ["Amazon EFS","CloudWatch metrics"]
  },
  {
    id: "aws-soa-fc-106",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "FSx for Lustre: scratch vs persistent deployment types.",
    hint: "How long must the data live?",
    back: "<strong>Scratch</strong>: lowest cost, no replication, data lost if a file server fails; for short-lived processing with data kept in S3. <strong>Persistent</strong>: data replicated within one AZ and file servers replaced automatically; for longer-running workloads. Both can use a <strong>data repository association</strong> to lazy-load from and export to S3.",
    tags: ["Amazon FSx for Lustre","Deployment types"]
  },
  {
    id: "aws-soa-fc-107",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Amazon S3 Files vs Mountpoint for Amazon S3: how do they differ?",
    hint: "Full file system semantics vs fast object-backed client.",
    back: "<strong>S3 Files</strong> creates an NFS 4.1/4.2 file system for a bucket, built on Amazon EFS, mounted through mount targets from EC2, ECS, EKS, or Lambda, with file locking, POSIX permissions, in-place edits, and about 1 ms latency for active data, while data stays in S3. <strong>Mountpoint for Amazon S3</strong> is a client that maps S3 API calls to file operations for high-throughput reads and sequential writes of new files, without locking or in-place modification.",
    tags: ["Amazon S3 Files","Mountpoint for Amazon S3"]
  },
  {
    id: "aws-soa-fc-108",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does FSx for Windows File Server Multi-AZ provide over Single-AZ?",
    hint: "A standby file server.",
    back: "<strong>Multi-AZ</strong> deploys an active and a standby file server in two Availability Zones with synchronous replication and automatic failover, keeping shares available through an AZ outage. <strong>Single-AZ</strong> replicates within one zone and is cheaper. Use DFS Namespaces to present several file systems under one namespace.",
    tags: ["Amazon FSx for Windows File Server","Multi-AZ"]
  },
  {
    id: "aws-soa-fc-109",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Performance Insights and CloudWatch Database Insights: what is the relationship in 2026?",
    hint: "Same data, new home.",
    back: "The Performance Insights <strong>console</strong> reached end of life on July 31, 2026 and now redirects to <strong>CloudWatch Database Insights</strong>; the Performance Insights <strong>API</strong> continues unchanged. Database Insights <strong>Standard</strong> mode keeps DB load analysis (average active sessions by SQL, waits, hosts, users) with the same retention options; <strong>Advanced</strong> mode adds fleet monitoring, lock analysis, and execution plans.",
    tags: ["Performance Insights","Database Insights"]
  },
  {
    id: "aws-soa-fc-110",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is DB load measured in, and how do you read it against vCPUs?",
    hint: "Average active sessions.",
    back: "DB load is measured in <strong>average active sessions (AAS)</strong>: sessions running or waiting at each sampled second. Compare it with the <strong>Max vCPU</strong> line: load consistently above the vCPU count means sessions are queuing for CPU or waiting on resources. Slice by wait event to see whether time goes to CPU, I/O, locks, or other waits.",
    tags: ["Performance Insights","RDS"]
  },
  {
    id: "aws-soa-fc-111",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "RDS Enhanced Monitoring vs standard CloudWatch RDS metrics.",
    hint: "Agent on the host vs hypervisor view.",
    back: "<strong>Standard metrics</strong> (CPUUtilization, FreeableMemory, ReadIOPS, and so on) come from the hypervisor at one-minute granularity. <strong>Enhanced Monitoring</strong> runs an agent on the DB instance, reporting OS metrics and a <strong>process list</strong> at 1 to 60 second granularity into CloudWatch Logs (RDSOSMetrics). Use it when CPU or memory usage is not explained by SQL activity.",
    tags: ["RDS","Enhanced Monitoring"]
  },
  {
    id: "aws-soa-fc-112",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which RDS CloudWatch metrics point to storage bottlenecks versus compute bottlenecks?",
    hint: "Queue and latency vs CPU and memory.",
    back: "Storage: <strong>ReadIOPS/WriteIOPS</strong> flat at the volume's limit, rising <strong>DiskQueueDepth</strong>, higher <strong>ReadLatency/WriteLatency</strong>, and on gp2 a draining <strong>BurstBalance</strong>. Compute: high <strong>CPUUtilization</strong>, low <strong>FreeableMemory</strong> with growing <strong>SwapUsage</strong>. Storage limits are fixed by changing storage type or IOPS; compute limits by a larger instance class or offloading reads.",
    tags: ["RDS","CloudWatch metrics"]
  },
  {
    id: "aws-soa-fc-113",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What problems does RDS Proxy solve?",
    hint: "Connections and failovers.",
    back: "RDS Proxy <strong>pools and shares connections</strong>, protecting the database from connection storms (for example many Lambda invocations or containers) and reducing max_connections pressure. During failover it keeps client connections open and routes to the new primary, <strong>cutting failover disruption</strong> without relying on DNS. It can enforce IAM authentication and pull credentials from Secrets Manager.",
    tags: ["RDS Proxy","RDS"]
  },
  {
    id: "aws-soa-fc-114",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Multi-AZ DB instance vs Multi-AZ DB cluster vs read replicas: which can serve reads?",
    hint: "Only some standbys are readable.",
    back: "A <strong>Multi-AZ DB instance</strong> has one synchronous standby that <strong>cannot</strong> serve reads; it exists for failover. A <strong>Multi-AZ DB cluster</strong> has two readable standbys behind a reader endpoint and faster failover. <strong>Read replicas</strong> use asynchronous replication, serve reads, can be cross-Region, and can be promoted manually; watch <strong>ReplicaLag</strong>.",
    tags: ["RDS","Multi-AZ","Read replicas"]
  },
  {
    id: "aws-soa-fc-115",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "RDS parameter groups: static vs dynamic parameters.",
    hint: "Which ones need a reboot?",
    back: "<strong>Dynamic</strong> parameters apply immediately (or at the next maintenance window if you choose). <strong>Static</strong> parameters apply only after the DB instance <strong>reboots</strong>; until then the instance shows <strong>pending-reboot</strong>. The default parameter group cannot be edited; create a custom group and associate it with the instance.",
    tags: ["RDS","Parameter groups"]
  },
  {
    id: "aws-soa-fc-116",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do Performance Insights proactive recommendations work, and what do they require?",
    hint: "Automatic thresholds, paid retention.",
    back: "RDS analyzes monitored metrics, sets thresholds automatically based on what could be problematic for that resource, and raises a <strong>proactive recommendation</strong> when values cross them over a period, before users notice. They appear in the RDS console recommendations. They require database load monitoring with a <strong>paid-tier retention period</strong>, not the free seven days.",
    tags: ["Performance Insights","Recommendations"]
  },
  {
    id: "aws-soa-fc-117",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "EC2 placement groups: cluster vs spread vs partition.",
    hint: "Pack, separate, or group.",
    back: "<strong>Cluster</strong>: instances packed close together in one AZ for lowest latency and highest per-flow throughput (HPC). <strong>Spread</strong>: each instance on a distinct rack, <strong>max 7 running instances per AZ</strong> per group, for a few critical instances. <strong>Partition</strong>: instances divided into up to 7 partitions per AZ on separate racks, for large distributed systems such as HDFS, Cassandra, and Kafka.",
    tags: ["EC2","Placement groups"]
  },
  {
    id: "aws-soa-fc-118",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Cluster placement group best practices to avoid capacity errors.",
    hint: "Same type, one request, restart together.",
    back: "Launch all instances you need in a <strong>single launch request</strong>, use the <strong>same instance type</strong>, and consider a Capacity Reservation (on-demand capacity reservations can target a cluster placement group). If adding instances fails with InsufficientInstanceCapacity, <strong>stop and start all instances</strong> in the group together so EC2 can place them on new capacity. Placement groups cannot span AZs or merge.",
    tags: ["EC2","Placement groups"]
  },
  {
    id: "aws-soa-fc-119",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "ENA vs ENA Express vs EFA.",
    hint: "Standard, faster single flows, OS bypass.",
    back: "<strong>ENA</strong>: the standard enhanced networking interface, required on Nitro instances. <strong>ENA Express</strong>: uses AWS SRD to raise single-flow bandwidth (up to 25 Gbps) and cut tail latency between supported instances in the same AZ, with no application change. <strong>EFA</strong>: adds OS-bypass (libfabric) for MPI and NCCL traffic in HPC and ML clusters.",
    tags: ["EC2","Enhanced networking"]
  },
  {
    id: "aws-soa-fc-120",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are the EC2 per-flow bandwidth limits?",
    hint: "5, 10, and 25.",
    back: "A single flow (5-tuple) between instances is limited to <strong>5 Gbps</strong> outside a cluster placement group and up to <strong>10 Gbps</strong> inside one. <strong>ENA Express</strong> raises it to up to 25 Gbps within an AZ. Aggregate instance bandwidth is higher, so multi-stream transfers can use it; traffic to the internet or another Region is capped at lower rates for larger instances.",
    tags: ["EC2","Network performance"]
  },
  {
    id: "aws-soa-fc-121",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which ENA driver metrics reveal network shaping on an instance?",
    hint: "Allowance exceeded.",
    back: "The ENA driver counts packets queued or dropped when an instance exceeds its allowances: <strong>bw_in_allowance_exceeded</strong>, <strong>bw_out_allowance_exceeded</strong>, <strong>pps_allowance_exceeded</strong>, <strong>conntrack_allowance_exceeded</strong>, and <strong>linklocal_allowance_exceeded</strong> (DNS, metadata, NTP). Read them with ethtool -S or publish them with the CloudWatch agent's <strong>ethtool</strong> plugin; rising values mean you need a larger instance or less traffic.",
    tags: ["EC2","ENA","CloudWatch agent"]
  },
  {
    id: "aws-soa-fc-122",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Instance store vs EBS: key differences.",
    hint: "Ephemeral and local vs persistent and networked.",
    back: "<strong>Instance store</strong>: physically attached disks (often NVMe) with very high IOPS at no extra charge, but data is <strong>lost on stop, hibernate, or termination</strong>; ideal for caches, buffers, and scratch space. <strong>EBS</strong>: network-attached, persistent independent of the instance, snapshot-capable, and resizable with Elastic Volumes.",
    tags: ["EC2","Instance store","EBS"]
  },
  {
    id: "aws-soa-fc-123",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does it take to enable ENA on an older custom AMI?",
    hint: "Driver plus attribute.",
    back: "Install the <strong>ENA driver</strong> in the OS (modern Amazon Linux, Ubuntu, RHEL, and Windows AMIs include it), then set the <strong>enaSupport</strong> attribute on the instance (while stopped) or on the AMI you register. Nitro instance types refuse to launch without ENA. Verify with modinfo ena and ethtool -i eth0.",
    tags: ["EC2","Enhanced networking","ENA"]
  },
  {
    id: "aws-soa-fc-124",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does EC2 hibernation preserve, and what are its prerequisites?",
    hint: "RAM goes to disk.",
    back: "Hibernation saves the contents of <strong>RAM to the encrypted EBS root volume</strong> and restores it on start, so applications resume with warm caches and processes intact. It must be <strong>enabled at launch</strong>, requires an encrypted EBS root volume large enough for RAM, a supported instance family and OS, and RAM below the documented limit. Instance store data is still lost.",
    tags: ["EC2","Hibernation"]
  },
  {
    id: "aws-soa-fc-125",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EC2 instance families match which workload bottleneck?",
    hint: "Letters give it away.",
    back: "<strong>C</strong>: compute-optimized (batch, gaming, encoding). <strong>M</strong>: general purpose balance. <strong>R</strong>, <strong>X</strong>: memory-optimized (in-memory databases, caches). <strong>I</strong>, <strong>D</strong>: storage-optimized with local NVMe or HDD. <strong>P</strong>, <strong>G</strong>, <strong>Trn</strong>, <strong>Inf</strong>: accelerated computing. Suffixes: <strong>g</strong> Graviton, <strong>n</strong> network-optimized, <strong>d</strong> instance store, <strong>a</strong> AMD.",
    tags: ["EC2","Instance types"]
  }
];

export default AWS_SOA_FLASHCARDS_5;
