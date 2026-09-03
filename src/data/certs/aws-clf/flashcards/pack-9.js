export const AWS_CLF_FLASHCARDS_9 = [
  {
    id: "aws-clf-fc-201",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Tool: Reviewing Workload Health",
    hint: "Free self-service console review measuring architectures against official pillars.",
    back: "The <strong>AWS Well-Architected Tool</strong> provides a structured questionnaire to review workloads against AWS architectural best practices. It produces a clear report highlighting high- and medium-risk issues and provides step-by-step remediation advice.",
    tags: ["Well-Architected", "Best Practices", "Governance"]
  },
  {
    id: "aws-clf-fc-202",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d1",
    front: "Disaster Recovery: Multi-Region Active-Active Strategy",
    hint: "Zero RPO/RTO serving traffic simultaneously from multiple independent global regions.",
    back: "In a <strong>Multi-Region Active-Active</strong> architecture, full application stacks run concurrently in two or more AWS Regions. Global databases (like Aurora Global Database or DynamoDB Global Tables) replicate data bi-directionally, providing near-zero RTO and RPO during regional catastrophes.",
    tags: ["Disaster Recovery", "Active-Active", "Multi-Region", "Resilience"]
  },
  {
    id: "aws-clf-fc-203",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon GuardDuty Finding Types: Recon, UnauthorizedAccess, Trojan",
    hint: "Categorizing threats from port scanning to compromised cryptocurrency mining.",
    back: "GuardDuty groups findings into clear threat classifications: <code>Recon:EC2/Portscan</code> (reconnaissance), <code>UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration</code> (compromised keys), and <code>CryptoCurrency:EC2/BitcoinTool.B!DNS</code> (malicious compute hijacking).",
    tags: ["GuardDuty", "Threat Classification", "Security"]
  },
  {
    id: "aws-clf-fc-204",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS WAF Rule Groups and Managed Rulesets",
    hint: "Pre-configured security rules maintained by AWS and third-party security vendors.",
    back: "<strong>AWS Managed Rules for AWS WAF</strong> provides pre-packaged collections of rules maintained by AWS Threat Research teams (e.g. Core Rule Set, Known Bad Inputs, Amazon IP Reputation list, SQLi rule set) protecting applications without writing custom regex patterns.",
    tags: ["WAF", "Managed Rules", "Security"]
  },
  {
    id: "aws-clf-fc-205",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS KMS Envelope Encryption: Master Key vs. Data Key",
    hint: "KMS protects the plaintext Data Key, which encrypts large payloads locally.",
    back: "In <strong>Envelope Encryption</strong>, KMS uses a Key Management Service key to generate a plaintext <strong>Data Key</strong> and an encrypted Data Key. Your application encrypts gigabytes of data locally with the plaintext Data Key, stores the encrypted Data Key alongside the ciphertext, and deletes the plaintext key from memory.",
    tags: ["KMS", "Envelope Encryption", "Cryptography", "Security"]
  },
  {
    id: "aws-clf-fc-206",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Shield Advanced: Cost Protection for Scaling During DDoS",
    hint: "Credit reimbursement for resource scaling caused by malicious volumetric DDoS attacks.",
    back: "When an attack hits applications behind Route 53, CloudFront, or ALBs, Auto Scaling may launch hundreds of instances. <strong>AWS Shield Advanced</strong> includes DDoS cost protection, reimbursing spikes in compute and bandwidth costs incurred as a direct result of a validated DDoS attack.",
    tags: ["Shield Advanced", "DDoS", "Cost Protection", "Security"]
  },
  {
    id: "aws-clf-fc-207",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon Inspector: Continuous Vulnerability Scanning on Push",
    hint: "Automated container image scanning triggered on ECR push and EC2 launch.",
    back: "Amazon Inspector automatically activates vulnerability assessment whenever an EC2 instance launches or a container image is pushed to <strong>Amazon ECR</strong>. It re-evaluates images dynamically whenever new CVE entries are published to the national vulnerability database.",
    tags: ["Inspector", "ECR", "Vulnerability", "Containers"]
  },
  {
    id: "aws-clf-fc-208",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Secrets Manager: Built-In Rotation Workflows",
    hint: "Pre-built Lambda functions rotating database passwords without application disruption.",
    back: "AWS Secrets Manager provides native, pre-written Lambda functions to rotate passwords on schedules (e.g. every 30 days) for Amazon RDS (MySQL, PostgreSQL, Oracle, SQL Server) and Amazon DocumentDB, updating both the database and the secret simultaneously.",
    tags: ["Secrets Manager", "Rotation", "RDS", "Security"]
  },
  {
    id: "aws-clf-fc-209",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Compute Optimizer: What Metrics Does It Analyze?",
    hint: "CPU, memory, storage IOPS, and network throughput utilization history.",
    back: "AWS Compute Optimizer analyzes CloudWatch metric history for CPU utilization, memory usage (when the CloudWatch agent is installed), local disk I/O, and network bandwidth over a 14-day observation period to identify rightsizing opportunities.",
    tags: ["Compute Optimizer", "Rightsizing", "FinOps", "EC2"]
  },
  {
    id: "aws-clf-fc-210",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Glacier Instant Retrieval",
    hint: "Archival pricing with millisecond access for data accessed once a quarter.",
    back: "<strong>S3 Glacier Instant Retrieval</strong> is designed for archive data that is rarely accessed (once a quarter) but requires the same <strong>millisecond retrieval performance</strong> as S3 Standard. It offers up to 68% storage cost savings compared to S3 Standard-IA.",
    tags: ["S3", "Glacier Instant", "Archival", "Storage"]
  },
  {
    id: "aws-clf-fc-211",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon FSx for NetApp ONTAP",
    hint: "Full NetApp ONTAP enterprise storage features with Multi-Protocol NFS, SMB, and iSCSI support.",
    back: "<strong>FSx for NetApp ONTAP</strong> provides complete enterprise data management capabilities\u2014including deduplication, compression, snapshots, cloning, and tiering\u2014accessible over NFS, SMB, and iSCSI, making it easy to migrate on-premises enterprise storage directly to AWS.",
    tags: ["FSx", "NetApp", "Enterprise Storage", "Hybrid"]
  },
  {
    id: "aws-clf-fc-212",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Aurora Global Database",
    hint: "Global database spanning multiple regions with sub-second cross-region replication latency.",
    back: "An <strong>Aurora Global Database</strong> spans multiple AWS Regions, enabling fast local reads with sub-second replication latency across continents. In the event of a regional disaster, a secondary region can be promoted to read-write mode in under one minute.",
    tags: ["Aurora", "Global Database", "Multi-Region", "Databases"]
  },
  {
    id: "aws-clf-fc-213",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon DynamoDB Global Tables",
    hint: "Fully managed multi-region, active-active multi-master NoSQL replication.",
    back: "<strong>DynamoDB Global Tables</strong> automatically replicates DynamoDB table writes across your choice of AWS Regions in near real time. Applications can read and write to local regional tables with single-digit millisecond latency worldwide.",
    tags: ["DynamoDB", "Global Tables", "Multi-Region", "NoSQL"]
  },
  {
    id: "aws-clf-fc-214",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Route 53 Health Checks and DNS Failover",
    hint: "Automated health probes redirecting DNS records away from unhealthy web endpoints.",
    back: "Route 53 monitors the health and performance of web endpoints using automated HTTP/HTTPS/TCP health checks. If an endpoint fails health checks, Route 53 automatically updates DNS records to route traffic to a secondary standby resource.",
    tags: ["Route 53", "Health Checks", "Failover", "High Availability"]
  },
  {
    id: "aws-clf-fc-215",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudFront Origin Access Control (OAC)",
    hint: "Restricting S3 bucket access so users must view content exclusively through CloudFront.",
    back: "<strong>Origin Access Control (OAC)</strong> signs CloudFront requests to Amazon S3 origins with SigV4 authentication. Paired with a restrictive S3 bucket policy, OAC prevents users from bypassing CloudFront CDN caching, WAF rules, and georestriction policies.",
    tags: ["CloudFront", "OAC", "S3", "Security"]
  },
  {
    id: "aws-clf-fc-216",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Global Accelerator vs. Amazon CloudFront",
    hint: "Non-HTTP TCP/UDP static Anycast acceleration vs. HTTP edge content caching.",
    back: "<strong>Amazon CloudFront</strong> caches HTTP/HTTPS web content and media files at global edge locations. <strong>AWS Global Accelerator</strong> does not cache content; it proxies raw TCP/UDP dynamic traffic over AWS global private fiber using static Anycast IPs for low-latency gaming, VoIP, or IoT.",
    tags: ["Global Accelerator", "CloudFront", "Networking", "Performance"]
  },
  {
    id: "aws-clf-fc-217",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SQS Long Polling vs. Short Polling",
    hint: "Waiting up to 20 seconds for messages to arrive vs. instant partial-queue sampling.",
    back: "In <strong>Short Polling</strong>, SQS samples a subset of servers and returns immediately even if no messages are found. In <strong>Long Polling</strong> (<code>WaitTimeSeconds > 0</code>, up to 20 seconds), SQS waits until messages arrive, substantially reducing empty responses and lowering API costs.",
    tags: ["SQS", "Long Polling", "Messaging", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-218",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EventBridge Schema Registry: Event Autodiscovery",
    hint: "Discovering, generating, and downloading code bindings for JSON event payloads.",
    back: "The <strong>EventBridge Schema Registry</strong> automatically discovers and stores the schemas of events passing through your event bus. Developers can download code bindings in Java, Python, or TypeScript to treat events as strongly typed objects in their IDE.",
    tags: ["EventBridge", "Schema Registry", "Event-Driven", "Developer Tools"]
  },
  {
    id: "aws-clf-fc-219",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudFormation Change Sets",
    hint: "Previewing how proposed template updates will impact running resources before execution.",
    back: "Before updating a production CloudFormation stack, creating a <strong>Change Set</strong> allows engineers to inspect exactly which resources will be created, modified, or deleted (especially whether an update requires replacement of a database or server).",
    tags: ["CloudFormation", "Change Sets", "IaC", "DevOps"]
  },
  {
    id: "aws-clf-fc-220",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudWatch Logs Insights: Fast Log Querying",
    hint: "Interactive SQL-like syntax for searching and analyzing terabytes of log data in seconds.",
    back: "<strong>CloudWatch Logs Insights</strong> enables fast, interactive searching and analysis of log data in CloudWatch. With a specialized query syntax (<code>fields</code>, <code>filter</code>, <code>stats</code>, <code>sort</code>), engineers can troubleshoot errors and identify latency spikes without provisioning servers.",
    tags: ["CloudWatch", "Logs Insights", "Troubleshooting", "Observability"]
  },
  {
    id: "aws-clf-fc-221",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS DataSync vs. AWS Snow Family: When to Use Which?",
    hint: "High-speed network bandwidth transfer vs. physical shipment of terabytes/petabytes.",
    back: "Use <strong>AWS DataSync</strong> when you have adequate network bandwidth and need continuous or recurring automated online transfers. Use the <strong>AWS Snow Family</strong> when bandwidth is limited, offline, or transferring tens of terabytes over the wire would take weeks or months.",
    tags: ["DataSync", "Snow Family", "Migration", "Storage"]
  },
  {
    id: "aws-clf-fc-222",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Athena Workgroups: Cost and Query Governance",
    hint: "Isolating users, capping query data scan limits, and separating Athena billing.",
    back: "<strong>Athena Workgroups</strong> separate queries by team or application. Administrators can set <strong>Data Usage Limits</strong> per query or per hour, enforcing cost caps to prevent rogue SQL queries from scanning terabytes of unpartitioned data.",
    tags: ["Athena", "Workgroups", "Governance", "FinOps"]
  },
  {
    id: "aws-clf-fc-223",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Free Tier: Monitoring Free Tier Usage",
    hint: "Built-in console table alerting when you approach 85% of monthly free tier limits.",
    back: "The <strong>AWS Free Tier table</strong> in the Billing Console tracks current service usage against free tier limits. AWS sends automatic email alerts through AWS Budgets when your account exceeds 85% of any monthly free tier allowance.",
    tags: ["Free Tier", "Billing", "Budgets"]
  },
  {
    id: "aws-clf-fc-224",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Allocation Tags: Enforcing Tagging with AWS Organizations",
    hint: "Using Tag Policies to mandate proper cost tags on all created resources.",
    back: "<strong>Tag Policies</strong> in AWS Organizations define standardized tagging rules across all member accounts. They enforce consistent capitalization, allowed tag values, and can prevent resources from launching unless required cost tags (e.g. <code>CostCenter</code>) are attached.",
    tags: ["Tag Policies", "Organizations", "FinOps", "Governance"]
  },
  {
    id: "aws-clf-fc-225",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "Enterprise On-Ramp Support Plan",
    hint: "Mid-tier enterprise support featuring 30-minute response times and pooled TAM support.",
    back: "<strong>Enterprise On-Ramp</strong> is positioned between Business and Enterprise Support ($5,500/month minimum). It provides 24/7 access to cloud engineers, 30-minute response for business-critical outages, and access to a <strong>pooled Technical Account Manager (TAM)</strong>.",
    tags: ["Support Plans", "Enterprise On-Ramp", "TAM"]
  }
];

export default AWS_CLF_FLASHCARDS_9;
