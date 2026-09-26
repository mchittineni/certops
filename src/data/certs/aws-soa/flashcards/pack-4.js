export const AWS_SOA_FLASHCARDS_4 = [
  {
    id: "aws-soa-fc-76",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does AWS Compute Optimizer analyze, and what does it need to get started?",
    hint: "Opt in, then wait for history.",
    back: "Compute Optimizer recommends sizes for <strong>EC2 instances, Auto Scaling groups, EBS volumes, Lambda functions, ECS services on Fargate</strong>, RDS databases, and commercial software licenses, using CloudWatch utilization history. You must <strong>opt in</strong> (account or organization). It needs roughly 30 hours of metrics; memory-aware EC2 recommendations need memory metrics from the <strong>CloudWatch agent</strong>.",
    tags: ["Compute Optimizer","Right-sizing"]
  },
  {
    id: "aws-soa-fc-77",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Compute Optimizer findings: what do Over-provisioned, Under-provisioned, and Optimized mean?",
    hint: "Compared with what the workload actually used.",
    back: "<strong>Over-provisioned</strong>: at least one resource dimension (CPU, memory, network, storage) could shrink while still meeting performance, so you can save money. <strong>Under-provisioned</strong>: a dimension falls short and performance is at risk. <strong>Optimized</strong>: the size fits. Each recommendation shows a <strong>performance risk</strong> rating and projected utilization for the suggested options.",
    tags: ["Compute Optimizer","Findings"]
  },
  {
    id: "aws-soa-fc-78",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What do Compute Optimizer's enhanced infrastructure metrics change?",
    hint: "A longer look back, for a fee.",
    back: "By default Compute Optimizer analyzes the last <strong>14 days</strong> of metrics. The paid <strong>enhanced infrastructure metrics</strong> feature extends the lookback to <strong>up to 3 months</strong> for EC2 instances and Auto Scaling groups, capturing monthly or quarterly cycles that a two-week window would miss. It can be turned on per resource, account, or organization.",
    tags: ["Compute Optimizer","Enhanced infrastructure metrics"]
  },
  {
    id: "aws-soa-fc-79",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Burstable T instances: standard vs unlimited credit mode.",
    hint: "What happens at zero credits?",
    back: "T instances earn CPU credits at a fixed rate and spend them above <strong>baseline</strong>. In <strong>standard</strong> mode, when CPUCreditBalance hits zero the instance is held at baseline. In <strong>unlimited</strong> mode (the default for T3/T4g) it keeps bursting and you pay for surplus credits if the 24-hour average exceeds baseline. A workload that is always above baseline belongs on M, C, or R instances.",
    tags: ["EC2","Burstable instances"]
  },
  {
    id: "aws-soa-fc-80",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which CloudWatch metrics show whether a T instance is out of CPU credits?",
    hint: "Balance and usage.",
    back: "<strong>CPUCreditBalance</strong> (credits banked), <strong>CPUCreditUsage</strong> (credits spent), and, in unlimited mode, <strong>CPUSurplusCreditBalance</strong> and <strong>CPUSurplusCreditsCharged</strong>. A balance falling to zero with CPUUtilization flattening at the baseline percentage is the classic sign of throttling in standard mode.",
    tags: ["EC2","CPU credits"]
  },
  {
    id: "aws-soa-fc-81",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are AWS Graviton instances, and what usually needs to change to adopt them?",
    hint: "Arm64.",
    back: "Graviton instances (families with a <strong>g</strong>, such as m7g, c7g, r8g, t4g) use AWS-designed <strong>Arm64</strong> processors and typically give better price-performance than comparable x86 instances. Interpreted and JVM workloads often move with only an Arm64 AMI and runtime; compiled code and native libraries need Arm64 builds. Test before switching a fleet.",
    tags: ["EC2","Graviton"]
  },
  {
    id: "aws-soa-fc-82",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What can EC2 CPU options change, and why would you use them?",
    hint: "Cores and threads per core.",
    back: "CPU options let you set the <strong>number of active cores</strong> and <strong>threads per core</strong> (1 disables simultaneous multithreading) for an instance while keeping its memory and other resources. Uses: reducing <strong>per-core license</strong> costs, or workloads such as some HPC codes that run better with one thread per core. You still pay the full instance price.",
    tags: ["EC2","CPU options"]
  },
  {
    id: "aws-soa-fc-83",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How does Lambda memory size affect CPU and cost?",
    hint: "One knob controls both.",
    back: "Lambda allocates <strong>CPU in proportion to memory</strong> (128 MB to 10,240 MB), reaching about <strong>one vCPU at 1,769 MB</strong> and up to 6 vCPUs at the top. Cost is memory times duration, so more memory can be cheaper for CPU-bound code if duration falls enough. Use Compute Optimizer Lambda recommendations or a power-tuning test to find the sweet spot.",
    tags: ["Lambda","Performance tuning"]
  },
  {
    id: "aws-soa-fc-84",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "gp3 vs gp2: how are performance and price determined?",
    hint: "Decoupled vs tied to size.",
    back: "<strong>gp2</strong>: 3 IOPS per GiB (minimum 100), bursting to 3,000 IOPS on smaller volumes using I/O credits; throughput also scales with size. <strong>gp3</strong>: a fixed baseline of <strong>3,000 IOPS and 125 MiB/s</strong> at any size, with more IOPS and throughput provisioned separately, and a lower price per GiB. Converting with Elastic Volumes needs no downtime.",
    tags: ["EBS","gp3","gp2"]
  },
  {
    id: "aws-soa-fc-85",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does the EBS BurstBalance metric mean?",
    hint: "Only some volume types have it.",
    back: "BurstBalance is the percentage of I/O or throughput credits left for <strong>gp2</strong>, <strong>st1</strong>, and <strong>sc1</strong> volumes. At 0 percent the volume falls back to its baseline performance. gp3, io1, and io2 have no burst bucket and do not publish it. A volume that regularly drains it should move to gp3 with provisioned performance.",
    tags: ["EBS","Burst balance"]
  },
  {
    id: "aws-soa-fc-86",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EBS CloudWatch metrics diagnose latency and saturation, and how?",
    hint: "Ops, bytes, time, queue.",
    back: "IOPS = (VolumeReadOps + VolumeWriteOps) / period seconds; throughput = (VolumeReadBytes + VolumeWriteBytes) / period. Average latency = VolumeTotalReadTime / VolumeReadOps (and similarly for writes). A rising <strong>VolumeQueueLength</strong> with ops or throughput flat at the provisioned limit means the volume is saturated; flat ops below the limit point to the <strong>instance's EBS bandwidth</strong> or the application.",
    tags: ["EBS","CloudWatch metrics"]
  },
  {
    id: "aws-soa-fc-87",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Why can an EBS volume deliver less than its provisioned IOPS on some instances?",
    hint: "The instance has limits too.",
    back: "Each instance type has a maximum <strong>EBS bandwidth, throughput, and IOPS</strong> (EBS-optimized limits, often burstable on smaller sizes for 30 minutes a day). If the volume's provisioned performance exceeds the instance's limit, the instance caps it. Check instance-level metrics such as EBSIOBalance% and EBSByteBalance% and pick a larger or EBS-focused instance type.",
    tags: ["EBS","EBS-optimized"]
  },
  {
    id: "aws-soa-fc-88",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "st1 vs sc1: when to use each HDD volume type?",
    hint: "Throughput vs cold.",
    back: "<strong>st1</strong> (Throughput Optimized HDD): frequently accessed, large sequential workloads such as log processing, data warehouses, and big data. <strong>sc1</strong> (Cold HDD): infrequently accessed sequential data at the lowest EBS price. Neither can be a boot volume, and both perform poorly with small random I/O.",
    tags: ["EBS","st1","sc1"]
  },
  {
    id: "aws-soa-fc-89",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "io2 Block Express: when do you need it instead of gp3?",
    hint: "Latency, IOPS ceiling, durability.",
    back: "Choose <strong>io2</strong> (Block Express) for workloads needing <strong>sub-millisecond latency</strong>, IOPS or throughput beyond gp3's maximums (up to 256,000 IOPS and 4,000 MiB/s per volume), <strong>99.999 percent durability</strong>, or <strong>Multi-Attach</strong>. For most other workloads gp3 is cheaper. io2 bills per GiB plus per provisioned IOPS.",
    tags: ["EBS","io2"]
  },
  {
    id: "aws-soa-fc-90",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Why are volumes restored from snapshots slow at first, and what are the fixes?",
    hint: "Blocks come from S3 on first touch.",
    back: "Restored volumes are <strong>lazily loaded</strong>: each block is fetched from S3 the first time it is read, adding latency until the volume is initialized. Fixes: <strong>Fast Snapshot Restore</strong> (per snapshot per AZ, billed hourly) creates fully initialized volumes; or pre-read every block with dd or fio; or provision an <strong>initialization rate</strong> for the volume on creation to finish loading within a predictable time.",
    tags: ["EBS","Snapshots","Fast Snapshot Restore"]
  },
  {
    id: "aws-soa-fc-91",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What can you change with Elastic Volumes, and what must you do afterwards?",
    hint: "Size, type, performance; then the OS.",
    back: "Elastic Volumes changes a volume's <strong>size</strong>, <strong>type</strong>, <strong>IOPS</strong>, and <strong>throughput</strong> while it stays attached and in use; progress goes through modifying, optimizing, completed. Size can only increase. After enlarging, extend the <strong>partition and file system</strong> (growpart, then xfs_growfs or resize2fs; Disk Management on Windows). There is a wait before the same volume can be modified again.",
    tags: ["EBS","Elastic Volumes"]
  },
  {
    id: "aws-soa-fc-92",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EBS status checks detect a volume that stops completing I/O?",
    hint: "One per volume, one per instance.",
    back: "<strong>VolumeStalledIOCheck</strong> is a per-volume CloudWatch metric (Nitro instances) that fails when the volume stops completing I/O. <strong>StatusCheckFailed_AttachedEBS</strong> is an instance-level status check covering reachability and I/O of all attached volumes. Alarm on them; the system and instance status checks do not cover this.",
    tags: ["EBS","Status checks"]
  },
  {
    id: "aws-soa-fc-93",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "When should you use S3 multipart upload, and what are its limits?",
    hint: "100 MB recommended, 5 GB required.",
    back: "Use multipart upload for objects over <strong>100 MB</strong>; it is <strong>required above 5 GB</strong>, the single-PUT maximum. Parts are 5 MiB to 5 GiB (except the last), up to <strong>10,000 parts</strong>, uploaded in parallel and retried individually. Incomplete uploads keep their parts, and their charges, until completed or aborted.",
    tags: ["S3","Multipart upload"]
  },
  {
    id: "aws-soa-fc-94",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "When does S3 Transfer Acceleration help, and when does it not?",
    hint: "Distance is the key word.",
    back: "It helps clients <strong>far from the bucket's Region</strong> upload or download over long internet paths: traffic enters the nearest CloudFront edge and rides the AWS backbone. It does little for clients in the same Region, and you pay only when it is faster. Requirements: DNS-compliant bucket name without dots, and the s3-accelerate endpoint.",
    tags: ["S3","Transfer Acceleration"]
  },
  {
    id: "aws-soa-fc-95",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are the S3 request rate limits, and how do you scale beyond them?",
    hint: "Per prefix, not per bucket.",
    back: "S3 supports at least <strong>3,500 PUT/COPY/POST/DELETE</strong> and <strong>5,500 GET/HEAD</strong> requests per second <strong>per partitioned prefix</strong>, with no limit on prefixes. Scale by spreading keys across more prefixes and parallelizing; retry 503 Slow Down with exponential backoff while S3 scales partitions. For very high rates with low latency in one AZ, consider S3 Express One Zone.",
    tags: ["S3","Request rates"]
  },
  {
    id: "aws-soa-fc-96",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "AWS DataSync vs Snowball Edge vs S3 CLI sync for moving on-premises data.",
    hint: "Network-managed, offline, or DIY.",
    back: "<strong>DataSync</strong>: managed online transfer from NFS, SMB, HDFS, or object storage with an agent, scheduling, bandwidth limits, incremental copies, and <strong>integrity verification</strong>. <strong>Snowball Edge</strong>: offline devices when bandwidth is too low for the timeline. <strong>CLI s3 sync</strong>: simple ad hoc copies with no managed verification or scheduling.",
    tags: ["DataSync","Data migration"]
  },
  {
    id: "aws-soa-fc-97",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are the minimum storage durations that matter when writing S3 Lifecycle rules?",
    hint: "30, 90, 180.",
    back: "Objects must be in S3 Standard at least <strong>30 days</strong> before a lifecycle transition to <strong>Standard-IA</strong> or <strong>One Zone-IA</strong>, and those classes bill for a 30-day minimum. <strong>Glacier Instant Retrieval</strong> and <strong>Glacier Flexible Retrieval</strong> bill for a <strong>90-day</strong> minimum, and <strong>Deep Archive</strong> for <strong>180 days</strong>. Early deletion or transition is charged for the remainder.",
    tags: ["S3","Lifecycle","Storage classes"]
  },
  {
    id: "aws-soa-fc-98",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is S3 Express One Zone, and what are its trade-offs?",
    hint: "Directory buckets, one AZ.",
    back: "A storage class in <strong>directory buckets</strong> located in <strong>one Availability Zone</strong> you choose, giving consistent <strong>single-digit millisecond</strong> latency and very high request rates for co-located compute (ML training, analytics, HPC). Trade-offs: data is stored in a single AZ (lost if the zone is lost), directory buckets use session-based auth and differ in features from general purpose buckets, and storage costs more per GB.",
    tags: ["S3 Express One Zone","Performance"]
  },
  {
    id: "aws-soa-fc-99",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do byte-range fetches improve S3 download performance?",
    hint: "One object, many simultaneous pieces.",
    back: "A GET with a Range header retrieves only part of an object, so a client can open <strong>several connections in parallel</strong>, each fetching a different range, and reassemble the result, multiplying throughput for large objects. It also lets you retry only a failed range. Align ranges with the part size used in the multipart upload for best results.",
    tags: ["S3","Byte-range fetches"]
  },
  {
    id: "aws-soa-fc-100",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "S3 Intelligent-Tiering: which tiers exist and when do objects move?",
    hint: "30, 90, and optional archive tiers.",
    back: "Objects start in <strong>Frequent Access</strong>, move to <strong>Infrequent Access</strong> after 30 days without access and to <strong>Archive Instant Access</strong> after 90 days, all with millisecond retrieval and no retrieval fees. Optional <strong>Archive Access</strong> (90+ days) and <strong>Deep Archive Access</strong> (180+ days) tiers require asynchronous restore. A small per-object monitoring fee applies; objects under 128 KB are not moved.",
    tags: ["S3","Intelligent-Tiering"]
  }
];

export default AWS_SOA_FLASHCARDS_4;
