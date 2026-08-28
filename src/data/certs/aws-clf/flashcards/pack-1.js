export const AWS_CLF_FLASHCARDS_1 = [
  {
    id: "aws-clf-fc-1",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "What are the six pillars of the AWS Well-Architected Framework?",
    hint: "Two were added after original five.",
    back: "Operational Excellence · Security · Reliability · Performance Efficiency · Cost Optimization · Sustainability.",
    tags: ["Well-Architected", "Cloud Concepts"]
  },
  {
    id: "aws-clf-fc-2",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "Explain the AWS Shared Responsibility Model in one line each.",
    hint: "\"of\" versus \"in\".",
    back: "AWS is responsible for security <strong>OF</strong> the cloud — hardware, global facilities, hypervisors. The customer is responsible for security <strong>IN</strong> the cloud — IAM, OS patching on EC2, encryption, firewall configs.",
    tags: ["Shared Responsibility", "Security"]
  },
  {
    id: "aws-clf-fc-3",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Region vs. Availability Zone vs. Edge Location",
    hint: "Nested physical scopes.",
    back: "A <strong>Region</strong> is a geographic area with 3+ AZs. An <strong>Availability Zone</strong> is 1+ discrete data centres with independent power/cooling. An <strong>Edge Location / PoP</strong> caches CloudFront content and terminates Route 53/Global Accelerator traffic.",
    tags: ["Global Infrastructure", "Cloud Concepts"]
  },
  {
    id: "aws-clf-fc-4",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "What do the four AWS Support plans provide?",
    hint: "Response time and TAM access.",
    back: "<strong>Basic</strong>: Free, docs & core Trusted Advisor. <strong>Developer</strong>: Business hours email. <strong>Business</strong>: 24/7 phone/chat, all Trusted Advisor checks, 1hr SLA. <strong>Enterprise</strong>: Dedicated TAM, 15-min critical response, concierge billing.",
    tags: ["Support Plans", "Billing"]
  },
  {
    id: "aws-clf-fc-5",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "Pricing Calculator vs. Cost Explorer vs. AWS Budgets",
    hint: "Three cost management tools.",
    back: "<strong>Pricing Calculator</strong>: Estimate costs before building. <strong>Cost Explorer</strong>: Visualize and forecast historical spend. <strong>AWS Budgets</strong>: Set custom spend/usage thresholds with email alerts and automated actions.",
    tags: ["Cost Explorer", "Budgets", "Billing"]
  },
  {
    id: "aws-clf-fc-6",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Compute Comparison: EC2 vs ECS/EKS vs Fargate vs Lambda",
    hint: "Level of abstraction.",
    back: "<strong>EC2</strong>: Full OS control, you manage the server. <strong>ECS/EKS</strong>: Managed container orchestration. <strong>Fargate</strong>: Serverless container compute engine (no servers to manage). <strong>Lambda</strong>: Event-driven serverless functions billed per ms.",
    tags: ["Compute", "EC2", "Lambda", "Fargate"]
  },
  {
    id: "aws-clf-fc-7",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "What do AWS Organizations Service Control Policies (SCPs) control?",
    hint: "Guardrails vs permissions.",
    back: "<strong>Service Control Policies (SCPs)</strong> specify the maximum available permissions for accounts in an Organization. They act as preventative guardrails and never grant permissions on their own.",
    tags: ["Organizations", "SCP", "Security"]
  },
  {
    id: "aws-clf-fc-8",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Offline Data vs Database vs Server Migration Services",
    hint: "Snowball, DMS, MGN.",
    back: "<strong>Snowball/Snowmobile</strong>: Petabyte-scale physical offline data transport. <strong>AWS DMS</strong>: Database migration and ongoing replication. <strong>AWS Application Migration Service (MGN)</strong>: Automated lift-and-shift server replication into EC2.",
    tags: ["Migration", "Snowball", "DMS", "MGN"]
  },
  {
    id: "aws-clf-fc-9",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "CloudTrail vs. CloudWatch vs. AWS Config",
    hint: "Who did it, performance health, compliance state.",
    back: "<strong>CloudTrail</strong>: Records API call audit logs (who did what, when, and from where). <strong>CloudWatch</strong>: Performance metrics, alarms, and log monitoring. <strong>AWS Config</strong>: Resource configuration history and compliance evaluation rules.",
    tags: ["CloudTrail", "CloudWatch", "Config", "Auditing"]
  },
  {
    id: "aws-clf-fc-10",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Name the six advantages of cloud computing.",
    hint: "CapEx, scale, capacity, speed, DC maintenance, global.",
    back: "Trade capital expense for variable expense · Benefit from massive economies of scale · Stop guessing capacity · Increase speed and agility · Stop spending money running and maintaining data centres · Go global in minutes.",
    tags: ["Cloud Concepts", "Value Proposition"]
  },
  {
    id: "aws-clf-fc-11",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "What is High Availability (HA) vs Fault Tolerance (FT)?",
    hint: "Uptime duration vs seamless zero-downtime.",
    back: "<strong>High Availability</strong> ensures high operational uptime with minimal disruption (e.g. Multi-AZ failover). <strong>Fault Tolerance</strong> provides continuous seamless operation with zero downtime even when components fail.",
    tags: ["High Availability", "Fault Tolerance", "Cloud Concepts"]
  },
  {
    id: "aws-clf-fc-12",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM Users vs IAM Groups vs IAM Roles vs IAM Policies",
    hint: "Core IAM identities.",
    back: "<strong>IAM User</strong>: Identity with permanent credentials. <strong>IAM Group</strong>: Collection of users sharing policies. <strong>IAM Role</strong>: Identity with temporary credentials for services/federated users. <strong>IAM Policy</strong>: JSON document defining permissions.",
    tags: ["IAM", "Security", "Policies"]
  },
  {
    id: "aws-clf-fc-13",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "What is the Principle of Least Privilege in IAM?",
    hint: "Minimal necessary access.",
    back: "Users, roles, and applications should be granted only the minimum permissions necessary to perform their required job duties, and no more.",
    tags: ["IAM", "Least Privilege", "Security"]
  },
  {
    id: "aws-clf-fc-14",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Security Groups vs Network Access Control Lists (NACLs)",
    hint: "Instance vs Subnet level, stateful vs stateless.",
    back: "<strong>Security Groups</strong>: Stateful virtual firewalls at the instance/ENI level with ALLOW rules only. <strong>Network ACLs</strong>: Stateless subnet-level firewalls supporting ordered ALLOW and DENY rules.",
    tags: ["Security Groups", "NACLs", "VPC", "Security"]
  },
  {
    id: "aws-clf-fc-15",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Shield Standard vs AWS Shield Advanced",
    hint: "Free L3/L4 protection vs enterprise 24/7 SRT.",
    back: "<strong>Shield Standard</strong>: Automatic, free protection against Layer 3/4 DDoS for all AWS customers. <strong>Shield Advanced</strong>: Paid 24/7 access to Shield Response Team (SRT), financial cost protection, and L7 attack mitigation.",
    tags: ["Shield", "DDoS", "Security"]
  },
  {
    id: "aws-clf-fc-16",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "What is AWS WAF and what does it protect against?",
    hint: "Layer 7 web exploits.",
    back: "<strong>AWS WAF</strong> is a Web Application Firewall that monitors Layer 7 HTTP/HTTPS traffic to block SQL Injection, Cross-Site Scripting (XSS), bot traffic, and rate-based abuse.",
    tags: ["WAF", "Security", "Layer 7"]
  },
  {
    id: "aws-clf-fc-17",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "Amazon GuardDuty vs Amazon Inspector vs Amazon Macie",
    hint: "Threats, vulnerabilities, sensitive data.",
    back: "<strong>GuardDuty</strong>: Intelligent threat detection analyzing CloudTrail, VPC Flow, and DNS logs. <strong>Inspector</strong>: Automated vulnerability management for EC2 and ECR. <strong>Macie</strong>: Sensitive data discovery (PII) in Amazon S3.",
    tags: ["GuardDuty", "Inspector", "Macie", "Security"]
  },
  {
    id: "aws-clf-fc-18",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "What is AWS Artifact?",
    hint: "Compliance reports portal.",
    back: "<strong>AWS Artifact</strong> is an on-demand self-service portal to download AWS compliance certifications (SOC, PCI-DSS, ISO) and review legal agreements like the HIPAA Business Associate Addendum (BAA).",
    tags: ["Artifact", "Compliance", "Security"]
  },
  {
    id: "aws-clf-fc-19",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS KMS vs AWS CloudHSM",
    hint: "Multi-tenant managed vs dedicated single-tenant hardware.",
    back: "<strong>AWS KMS</strong>: Fully managed, shared encryption key service with FIPS 140-2 Level 2/3 validation. <strong>AWS CloudHSM</strong>: Dedicated, single-tenant physical Hardware Security Modules under full customer control.",
    tags: ["KMS", "CloudHSM", "Encryption", "Security"]
  },
  {
    id: "aws-clf-fc-20",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Storage Classes from hottest to coldest",
    hint: "Standard down to Deep Archive.",
    back: "S3 Standard → S3 Intelligent-Tiering → S3 Standard-IA → S3 One Zone-IA → S3 Glacier Instant Retrieval → S3 Glacier Flexible Retrieval → S3 Glacier Deep Archive.",
    tags: ["S3", "Storage Classes", "Storage"]
  },
  {
    id: "aws-clf-fc-21",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EBS vs Amazon EFS vs Amazon S3",
    hint: "Block vs File vs Object storage.",
    back: "<strong>EBS</strong>: Block storage volume attached to a single EC2 instance in one AZ. <strong>EFS</strong>: Elastic shared POSIX network file system for multiple instances across AZs. <strong>S3</strong>: Scalable object storage accessed via HTTP APIs.",
    tags: ["EBS", "EFS", "S3", "Storage"]
  },
  {
    id: "aws-clf-fc-22",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon RDS vs Amazon Aurora vs Amazon DynamoDB",
    hint: "Managed SQL, cloud-native SQL, serverless NoSQL.",
    back: "<strong>RDS</strong>: Managed relational database (MySQL, PostgreSQL, Oracle, SQL Server). <strong>Aurora</strong>: High-performance MySQL/PostgreSQL-compatible DB with 6-way replication. <strong>DynamoDB</strong>: Single-digit ms serverless NoSQL.",
    tags: ["RDS", "Aurora", "DynamoDB", "Databases"]
  },
  {
    id: "aws-clf-fc-23",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "EC2 Purchasing Models: On-Demand vs Spot vs Savings Plans",
    hint: "Flexibility, discounts, long-term commitments.",
    back: "<strong>On-Demand</strong>: Pay per second, maximum flexibility, zero commitment. <strong>Spot Instances</strong>: Up to 90% discount for fault-tolerant workloads. <strong>Savings Plans</strong>: Up to 72% discount for 1/3-year commitment.",
    tags: ["EC2", "Pricing Models", "FinOps"]
  },
  {
    id: "aws-clf-fc-24",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Route 53 Routing Policies",
    hint: "Simple, Weighted, Latency, Failover, Geolocation.",
    back: "<strong>Simple</strong>: Single record. <strong>Weighted</strong>: Split traffic by %. <strong>Latency</strong>: Route to lowest ping Region. <strong>Failover</strong>: Active-passive DR. <strong>Geolocation</strong>: Route by user continent/country.",
    tags: ["Route 53", "DNS", "Networking"]
  },
  {
    id: "aws-clf-fc-25",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Application Load Balancer (ALB) vs Network Load Balancer (NLB)",
    hint: "Layer 7 vs Layer 4.",
    back: "<strong>ALB</strong>: Layer 7 HTTP/HTTPS load balancer supporting path and host routing. <strong>NLB</strong>: Layer 4 ultra-high-throughput TCP/UDP load balancer with static anycast IPs.",
    tags: ["ALB", "NLB", "Load Balancing", "Networking"]
  }
];

export default AWS_CLF_FLASHCARDS_1;
