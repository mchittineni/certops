export const AWS_CLF_FLASHCARDS_3 = [
  {
    id: "aws-clf-fc-51",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS WAF (Web Application Firewall): Scope and Capabilities",
    hint: "Layer 7 filtering for SQL injection, cross-site scripting (XSS), and rate limiting.",
    back: "<strong>AWS WAF</strong> inspects Layer 7 HTTP/HTTPS requests at CloudFront, Application Load Balancers, API Gateway, and AppSync. It enforces rules to block SQL injection (SQLi), XSS, IP reputation lists, and volumetric request floods using managed or custom rules.",
    tags: ["WAF", "Layer 7", "Security", "Firewall"]
  },
  {
    id: "aws-clf-fc-52",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon GuardDuty: How Threat Detection Works",
    hint: "Machine learning analysis of non-intrusive metadata streams without agents.",
    back: "<strong>Amazon GuardDuty</strong> continuously analyzes AWS CloudTrail management/data events, VPC Flow Logs, and DNS query logs using machine learning and anomaly detection to flag compromised instances, unauthorized bitcoin mining, or credential exfiltration without needing agent installations.",
    tags: ["GuardDuty", "Threat Detection", "Machine Learning"]
  },
  {
    id: "aws-clf-fc-53",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon Inspector: Automated Vulnerability Assessment",
    hint: "Automated vulnerability and software exposure scanning for compute assets.",
    back: "<strong>Amazon Inspector</strong> scans Amazon EC2 instances, container images in Amazon ECR, and AWS Lambda functions for software vulnerabilities (CVEs) and unintended network accessibility against continually updated vulnerability databases.",
    tags: ["Inspector", "Vulnerability Scanning", "Compliance"]
  },
  {
    id: "aws-clf-fc-54",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon Macie: Data Privacy and PII Discovery",
    hint: "Machine learning and pattern matching to discover sensitive data in S3.",
    back: "<strong>Amazon Macie</strong> uses machine learning and regular expressions to discover, classify, and protect sensitive data stored in Amazon S3 buckets\u2014such as Personally Identifiable Information (PII), credit card numbers, and secret keys.",
    tags: ["Macie", "PII", "S3", "Data Privacy"]
  },
  {
    id: "aws-clf-fc-55",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Security Hub: Centralized Cloud Security Posture",
    hint: "Single-pane aggregation of security findings and compliance benchmarks.",
    back: "<strong>AWS Security Hub</strong> aggregates, organizes, and prioritizes security findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, and AWS Firewall Manager. It automatically benchmarks environments against CIS AWS Foundations and PCI-DSS standards.",
    tags: ["Security Hub", "Compliance", "Posture Management"]
  },
  {
    id: "aws-clf-fc-56",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Artifact: Compliance Reports and Agreements",
    hint: "Self-service portal for downloading official audit documentation and contracts.",
    back: "<strong>AWS Artifact</strong> provides on-demand, self-service access to AWS compliance reports (SOC 1/2/3, PCI-DSS, ISO 27001) and allows organizations to review and sign legal agreements such as the Business Associate Addendum (BAA) for HIPAA compliance.",
    tags: ["Artifact", "Compliance", "Audit", "HIPAA"]
  },
  {
    id: "aws-clf-fc-57",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "VPC Security Groups vs. Network Access Control Lists (NACLs)",
    hint: "Stateful instance firewall vs. stateless subnet barrier.",
    back: "<strong>Security Groups</strong> operate at the EC2/ENI level, are stateful (inbound traffic automatically allows return outbound traffic), and allow permit-only rules. <strong>NACLs</strong> operate at the subnet boundary, are stateless (return ports must be opened), and evaluate numbered allow and deny rules in order.",
    tags: ["Security Groups", "NACL", "VPC", "Networking"]
  },
  {
    id: "aws-clf-fc-58",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Penetration Testing Policy: What Can You Test?",
    hint: "Permitted user-owned services vs. prohibited infrastructure attacks.",
    back: "Customers can perform security assessments against 8 permitted services (including EC2, RDS, CloudFront, Lambda, API Gateway) without prior AWS approval. Prohibited attacks include Denial of Service (DoS/DDoS) simulation, port flooding, or attacking underlying AWS infrastructure.",
    tags: ["Security", "Penetration Testing", "Compliance"]
  },
  {
    id: "aws-clf-fc-59",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EC2 Instance Types: The Core Families",
    hint: "General Purpose (M/T), Compute (C), Memory (R/X), Storage (I/D), Accelerated (P/G).",
    back: "EC2 offers tailored instance families: <strong>T/M (General Purpose)</strong> for balanced workloads, <strong>C (Compute Optimized)</strong> for CPU-bound batch processing, <strong>R/X (Memory Optimized)</strong> for high-performance caches/in-memory DBs, <strong>I/D (Storage Optimized)</strong> for high IOPS, and <strong>P/G (Accelerated)</strong> for GPUs/ML.",
    tags: ["EC2", "Instance Types", "Compute"]
  },
  {
    id: "aws-clf-fc-60",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "EC2 Pricing Models: Spot Instances vs. On-Demand vs. Reserved",
    hint: "Surplus capacity discount vs. maximum flexibility vs. long-term commitment.",
    back: "<strong>On-Demand</strong> offers pay-by-the-second flexibility with no commitment. <strong>Spot Instances</strong> offer up to 90% discounts using spare EC2 capacity but can be reclaimed with a 2-minute notice. <strong>Reserved Instances / Savings Plans</strong> offer up to 72% discounts in exchange for a 1- or 3-year usage commitment.",
    tags: ["EC2", "Pricing", "Spot Instances", "Savings Plans"]
  },
  {
    id: "aws-clf-fc-61",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "EC2 Dedicated Hosts vs. Dedicated Instances",
    hint: "Physical socket/core visibility for BYOL vs. single-tenant hardware isolation.",
    back: "<strong>Dedicated Hosts</strong> give full physical server visibility, allowing you to control socket and core configurations to satisfy strict Per-Core Bring-Your-Own-License (BYOL) software agreements. <strong>Dedicated Instances</strong> run on hardware dedicated to a single customer account without socket-level server visibility.",
    tags: ["EC2", "Dedicated Hosts", "Compliance", "Licensing"]
  },
  {
    id: "aws-clf-fc-62",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Lambda: Serverless Event-Driven Compute",
    hint: "Zero server management, run code on triggers, billed per millisecond.",
    back: "<strong>AWS Lambda</strong> lets you run code without provisioning or managing servers. You pay only for compute time consumed in 1-millisecond increments. Execution is strictly capped at a <strong>15-minute maximum timeout</strong> per invocation.",
    tags: ["Lambda", "Serverless", "Compute"]
  },
  {
    id: "aws-clf-fc-63",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon ECS vs. Amazon EKS",
    hint: "AWS-native container orchestration vs. standard open-source Kubernetes.",
    back: "<strong>Amazon ECS (Elastic Container Service)</strong> is AWS's proprietary, deeply integrated container orchestrator engineered for simplicity. <strong>Amazon EKS (Elastic Kubernetes Service)</strong> runs certified upstream open-source Kubernetes, ensuring portable container operations across clouds.",
    tags: ["Containers", "ECS", "EKS", "Kubernetes"]
  },
  {
    id: "aws-clf-fc-64",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Fargate: Serverless Container Execution",
    hint: "Run containers without provisioning or patching underlying EC2 host servers.",
    back: "<strong>AWS Fargate</strong> is a serverless compute engine for both Amazon ECS and EKS. Fargate removes the operational burden of provisioning, scaling, patching, and securing virtual machine clusters\u2014you define CPU and memory at the container level and pay only for running task resources.",
    tags: ["Fargate", "Containers", "Serverless", "ECS"]
  },
  {
    id: "aws-clf-fc-65",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Storage Classes: The Retrieval Spectrum",
    hint: "Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier tiers.",
    back: "<strong>Standard</strong>: Active frequent data (ms). <strong>Intelligent-Tiering</strong>: Auto-shifts based on unknown access. <strong>Standard-IA</strong>: Infrequent data across 3+ AZs. <strong>One Zone-IA</strong>: Non-critical infrequent data in 1 AZ (20% cheaper). <strong>Glacier Instant / Flexible / Deep Archive</strong>: Cold archival storage down to fractions of a cent per GB.",
    tags: ["S3", "Storage Classes", "Storage"]
  },
  {
    id: "aws-clf-fc-66",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Intelligent-Tiering: How It Works",
    hint: "Automated cost optimization without operational overhead or retrieval fees.",
    back: "<strong>S3 Intelligent-Tiering</strong> automatically moves objects between frequent, infrequent, and archive access tiers based on real-time access patterns. It incurs a tiny monthly monitoring fee per 1,000 objects but charges <strong>zero retrieval fees</strong> when objects are accessed.",
    tags: ["S3", "Intelligent-Tiering", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-67",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "S3 Lifecycle Policies: Automating Object Transitions and Expiration",
    hint: "Rule-based data progression from hot storage to cold archive to deletion.",
    back: "<strong>S3 Lifecycle configurations</strong> automatically transition objects between storage classes over time (e.g. S3 Standard \u2192 Standard-IA after 30 days \u2192 Glacier Deep Archive after 90 days) and trigger automatic expiration/deletion after regulatory retention periods end.",
    tags: ["S3", "Lifecycle", "Automation"]
  },
  {
    id: "aws-clf-fc-68",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "S3 Versioning and S3 Object Lock: WORM Compliance",
    hint: "Preserve every object revision and enforce Write-Once-Read-Many protection.",
    back: "<strong>S3 Versioning</strong> preserves multiple variants of an object to protect against accidental overwrites or deletes. <strong>S3 Object Lock</strong> provides WORM (Write Once, Read Many) compliance in Governance or Compliance modes to prevent deletion even by the root account for regulatory requirements.",
    tags: ["S3", "Versioning", "Object Lock", "Compliance"]
  },
  {
    id: "aws-clf-fc-69",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EBS: Elastic Block Store Volume Types",
    hint: "General Purpose SSD (gp3), Provisioned IOPS (io2), Throughput Optimized HDD (st1).",
    back: "<strong>gp3</strong> is the standard balance of price and performance for boot disks and general apps. <strong>io2 Block Express</strong> provides sub-millisecond latency and high IOPS for critical databases. <strong>st1</strong> is low-cost magnetic HDD optimized for large, sequential throughput like Big Data.",
    tags: ["EBS", "Block Storage", "Compute"]
  },
  {
    id: "aws-clf-fc-70",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "EBS Snapshots: Point-in-Time Incremental Backups",
    hint: "Block-level differential snapshots stored redundantly in Amazon S3.",
    back: "<strong>EBS Snapshots</strong> capture point-in-time state of EBS volumes. The first snapshot is a full volume copy; subsequent snapshots are <strong>incremental</strong>, saving only altered storage blocks. Snapshots are stored under the hood with 11 nines of durability in Amazon S3.",
    tags: ["EBS", "Snapshots", "Backups", "S3"]
  },
  {
    id: "aws-clf-fc-71",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EFS vs. Amazon EBS vs. Amazon S3",
    hint: "Shared network file system vs. single-instance block disk vs. object store.",
    back: "<strong>EBS</strong> is raw block storage attached to a single EC2 instance in one AZ. <strong>EFS</strong> is an elastic, shared POSIX NFS file system mountable concurrently across hundreds of EC2 instances and AZs. <strong>S3</strong> is an internet-accessible REST API object storage for unstructured data.",
    tags: ["Storage", "EBS", "EFS", "S3"]
  },
  {
    id: "aws-clf-fc-72",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon FSx: Managed High-Performance Specialized File Systems",
    hint: "Native Windows File Server, Lustre for HPC, and NetApp ONTAP.",
    back: "<strong>Amazon FSx</strong> offers fully managed third-party file systems: <strong>FSx for Windows File Server</strong> (native SMB, Active Directory integration), <strong>FSx for Lustre</strong> (sub-millisecond HPC/AI compute workloads), and <strong>FSx for NetApp ONTAP</strong>.",
    tags: ["FSx", "File Storage", "Windows", "HPC"]
  },
  {
    id: "aws-clf-fc-73",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon RDS: Relational Database Service Managed Capabilities",
    hint: "Automated backups, multi-AZ high availability, read replicas, and engine patching.",
    back: "<strong>Amazon RDS</strong> manages relational engines (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server). AWS automates hardware provisioning, OS and engine patching, point-in-time transaction log backups, and Multi-AZ synchronous replication.",
    tags: ["RDS", "Databases", "Relational"]
  },
  {
    id: "aws-clf-fc-74",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon RDS Multi-AZ vs. Read Replicas",
    hint: "High availability / disaster recovery vs. horizontal read scalability.",
    back: "<strong>Multi-AZ</strong> creates a synchronous standby copy in a second AZ that automatically takes over via DNS failover during hardware/AZ failure (standby handles no read traffic). <strong>Read Replicas</strong> create asynchronous copies to serve read-heavy queries and scale read throughput.",
    tags: ["RDS", "Multi-AZ", "Read Replicas", "High Availability"]
  },
  {
    id: "aws-clf-fc-75",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Aurora: Cloud-Native Relational Engine",
    hint: "Up to 5x MySQL / 3x PostgreSQL performance with 6-way storage replication across 3 AZs.",
    back: "<strong>Amazon Aurora</strong> separates compute from storage. It replicates 6 copies of data across 3 Availability Zones, auto-repairs disk sectors, supports up to 15 Read Replicas with sub-10ms lag, and features <strong>Aurora Serverless v2</strong> for automatic fractional-second auto-scaling.",
    tags: ["Aurora", "Databases", "High Availability"]
  }
];

export default AWS_CLF_FLASHCARDS_3;
