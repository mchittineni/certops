export const AWS_CLF_FLASHCARDS_2 = [
  {
    id: "aws-clf-fc-26",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Capital Expenditure (CapEx) vs. Operational Expenditure (OpEx) in Cloud Computing",
    hint: "Upfront hardware investment versus pay-as-you-go consumption.",
    back: "<strong>CapEx</strong> requires large upfront capital investment in physical servers, datacenters, and depreciation over time. <strong>OpEx</strong> treats IT as an ongoing operational utility expense where you pay only for compute, storage, and network resources actually consumed.",
    tags: ["Cloud Concepts", "Economics", "CapEx", "OpEx"]
  },
  {
    id: "aws-clf-fc-27",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Global Infrastructure: Region vs. Availability Zone",
    hint: "Geographic boundary vs. isolated failure domain.",
    back: "An <strong>AWS Region</strong> is a distinct physical geographic location with 3 or more AZs. An <strong>Availability Zone (AZ)</strong> consists of one or more discrete physical data centers engineered with redundant power, networking, and cooling to prevent correlated failures.",
    tags: ["Global Infrastructure", "Regions", "Availability Zones"]
  },
  {
    id: "aws-clf-fc-28",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Local Zones vs. AWS Wavelength",
    hint: "Single-digit millisecond latency to metro centers vs. 5G telco networks.",
    back: "<strong>AWS Local Zones</strong> place compute, storage, and database services close to large population or industry centers that have no local AWS Region. <strong>AWS Wavelength</strong> embeds AWS services directly inside telecom 5G networks for ultra-low latency mobile devices.",
    tags: ["Edge Services", "Local Zones", "Wavelength"]
  },
  {
    id: "aws-clf-fc-29",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Outposts: Hybrid Cloud Architecture",
    hint: "Bringing native AWS infrastructure directly on-premises.",
    back: "<strong>AWS Outposts</strong> delivers physical racks of AWS-designed hardware into an on-premises datacenter or colocation facility. It provides the exact same AWS APIs, console, hardware, and services locally while remaining connected to the nearest AWS Region.",
    tags: ["Hybrid", "Outposts", "On-Premises"]
  },
  {
    id: "aws-clf-fc-30",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Six Advantages of Cloud Computing: Economies of Scale",
    hint: "Massive scale yields lower prices for all customers.",
    back: "Because hundreds of thousands of customers aggregate their usage on AWS, AWS achieves massive <strong>economies of scale</strong>, translating into lower pay-as-you-go prices and frequent price reductions passed on to customers.",
    tags: ["Cloud Concepts", "Economies of Scale"]
  },
  {
    id: "aws-clf-fc-31",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Six Advantages of Cloud Computing: Stop Guessing Capacity",
    hint: "Eliminate idle server waste and out-of-capacity outages.",
    back: "Instead of paying for idle capacity or suffering outages during spikes, cloud <strong>elasticity</strong> lets applications automatically scale up or down based on real-time traffic demand, provisioning exactly what is needed.",
    tags: ["Elasticity", "Capacity", "Scalability"]
  },
  {
    id: "aws-clf-fc-32",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Six Advantages of Cloud Computing: Go Global in Minutes",
    hint: "Deploying applications to multiple continents with a few clicks.",
    back: "With AWS global infrastructure spanning dozens of regions worldwide, developers can deploy multi-region low-latency applications to global end-users in minutes using Route 53, CloudFront, and cross-region replication.",
    tags: ["Global Footprint", "Cloud Concepts"]
  },
  {
    id: "aws-clf-fc-33",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "Vertical Scaling (Scaling Up) vs. Horizontal Scaling (Scaling Out)",
    hint: "Adding horsepower to one box vs. adding more boxes.",
    back: "<strong>Vertical scaling</strong> upgrades the CPU, RAM, or storage of an existing EC2 instance (e.g. <code>t3.micro</code> to <code>m5.xlarge</code>). <strong>Horizontal scaling</strong> adds more instances to an Auto Scaling group behind a load balancer, providing true fault tolerance.",
    tags: ["Scalability", "Auto Scaling", "Architecture"]
  },
  {
    id: "aws-clf-fc-34",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "Elasticity vs. Scalability",
    hint: "Dynamic automated adaptation vs. ability to grow to handle workload.",
    back: "<strong>Scalability</strong> is the architectural ability of a system to accommodate growth by adding resources. <strong>Elasticity</strong> is the automated, real-time mechanism (like EC2 Auto Scaling) that dynamically provisions resources during peaks and deprovisions them when demand drops.",
    tags: ["Elasticity", "Scalability", "Auto Scaling"]
  },
  {
    id: "aws-clf-fc-35",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d1",
    front: "Disaster Recovery Strategies: Pilot Light vs. Warm Standby",
    hint: "Minimal critical core running vs. scaled-down fully functional copy.",
    back: "In <strong>Pilot Light</strong>, only the core data tier is replicated and kept running; compute instances are launched only during failover. In <strong>Warm Standby</strong>, a scaled-down but fully functional version of every application tier runs continuously in a secondary region, ready to handle full load quickly.",
    tags: ["Disaster Recovery", "Pilot Light", "Warm Standby"]
  },
  {
    id: "aws-clf-fc-36",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "RTO vs. RPO in Business Continuity",
    hint: "Recovery time vs. acceptable data loss window.",
    back: "<strong>RTO (Recovery Time Objective)</strong> is the maximum acceptable duration of system downtime after a disaster before service is restored. <strong>RPO (Recovery Point Objective)</strong> is the maximum acceptable data loss measured in time between the last backup and the outage.",
    tags: ["Disaster Recovery", "RTO", "RPO"]
  },
  {
    id: "aws-clf-fc-37",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Well-Architected Framework: The Six Pillars",
    hint: "Operational Excellence, Security, Reliability, Performance, Cost, Sustainability.",
    back: "The six pillars are: <strong>Operational Excellence</strong> (run and monitor workloads), <strong>Security</strong> (protect data and assets), <strong>Reliability</strong> (recover from disruptions), <strong>Performance Efficiency</strong> (use compute efficiently), <strong>Cost Optimization</strong> (avoid unneeded expense), and <strong>Sustainability</strong> (minimize environmental impacts).",
    tags: ["Well-Architected", "Best Practices"]
  },
  {
    id: "aws-clf-fc-38",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "AWS Cloud Adoption Framework (AWS CAF): The Six Perspectives",
    hint: "Business, People, Governance, Platform, Security, Operations.",
    back: "AWS CAF organizes cloud transformation into two categories: <strong>Business capabilities</strong> (Business, People, Governance) focusing on strategy and organizational change, and <strong>Technical capabilities</strong> (Platform, Security, Operations) focusing on architecture and operational delivery.",
    tags: ["Cloud Adoption Framework", "CAF", "Governance"]
  },
  {
    id: "aws-clf-fc-39",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Shared Responsibility Model: Customer vs. AWS Responsibilities",
    hint: "Security IN the cloud vs. Security OF the cloud.",
    back: "<strong>AWS</strong> protects the infrastructure: hardware, data center facilities, networking cables, virtualization hypervisors. The <strong>customer</strong> is responsible for OS patching, firewall/security group configurations, IAM access, application code, and data encryption.",
    tags: ["Shared Responsibility", "Security", "Compliance"]
  },
  {
    id: "aws-clf-fc-40",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Shared Responsibility Model: EC2 vs. Amazon S3 / DynamoDB",
    hint: "IaaS full OS control vs. PaaS/SaaS managed abstraction.",
    back: "For <strong>EC2 (IaaS)</strong>, the customer owns OS security patching, antivirus, and firewall rules. For <strong>S3 / DynamoDB (PaaS/Managed)</strong>, AWS manages the OS, database engine patching, and underlying servers; the customer only manages data classification, IAM access policies, and bucket configurations.",
    tags: ["Shared Responsibility", "IaaS", "PaaS", "S3", "EC2"]
  },
  {
    id: "aws-clf-fc-41",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "Root User Best Practices in AWS IAM",
    hint: "Never use root for daily operations; lock it down immediately.",
    back: "The <strong>AWS root account</strong> has unrestricted administrative access. Best practices: enable Multi-Factor Authentication (MFA), delete root access keys, lock root credentials away, and create dedicated IAM Administrator users/roles for daily administrative tasks.",
    tags: ["IAM", "Root User", "MFA", "Security"]
  },
  {
    id: "aws-clf-fc-42",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM User vs. IAM Role vs. IAM Group",
    hint: "Permanent human identity vs. temporary credential vs. user collection.",
    back: "An <strong>IAM User</strong> represents a single persistent human or service with long-term credentials. An <strong>IAM Role</strong> has no permanent credentials and is assumed temporarily by EC2 instances, Lambda, or federated users. An <strong>IAM Group</strong> is a collection of users used to attach common policies.",
    tags: ["IAM", "Roles", "Users", "Groups"]
  },
  {
    id: "aws-clf-fc-43",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "IAM Policies: Identity-Based vs. Resource-Based Policies",
    hint: "Attached to the caller vs. attached directly to the cloud resource.",
    back: "<strong>Identity-based policies</strong> are attached to IAM users, groups, or roles defining what actions they can perform. <strong>Resource-based policies</strong> (e.g. S3 Bucket Policies, KMS Key Policies) are attached directly to the resource specifying who can access it and under what conditions.",
    tags: ["IAM", "Policies", "Permissions"]
  },
  {
    id: "aws-clf-fc-44",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "Principle of Least Privilege in IAM",
    hint: "Granting only the permissions strictly required to perform a job.",
    back: "The <strong>Principle of Least Privilege</strong> dictates that identities are granted only the minimum permissions necessary for their specific tasks. Start with zero access and incrementally add fine-grained actions (e.g. <code>s3:GetObject</code> on a single bucket prefix) rather than wildcard <code>*</code> permissions.",
    tags: ["IAM", "Least Privilege", "Security"]
  },
  {
    id: "aws-clf-fc-45",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Organizations: Service Control Policies (SCPs)",
    hint: "Account-level guardrails that override all IAM permissions.",
    back: "<strong>Service Control Policies (SCPs)</strong> act as boundary guardrails applied to member accounts or Organizational Units (OUs) in AWS Organizations. An SCP cannot grant permissions; it sets maximum limits. Even the root user of a member account cannot bypass an explicit deny in an SCP.",
    tags: ["Organizations", "SCPs", "Governance"]
  },
  {
    id: "aws-clf-fc-46",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "Multi-Factor Authentication (MFA): Types Supported by AWS",
    hint: "Virtual authenticator apps, FIDO security keys, and hardware TOTP tokens.",
    back: "AWS supports <strong>Virtual MFA apps</strong> (Google Authenticator, Microsoft Authenticator), <strong>FIDO security keys</strong> (YubiKey via WebAuthn), and <strong>Hardware TOTP tokens</strong> to protect root and IAM accounts with an extra possession factor.",
    tags: ["IAM", "MFA", "Security"]
  },
  {
    id: "aws-clf-fc-47",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Key Management Service (AWS KMS) vs. AWS CloudHSM",
    hint: "Multi-tenant managed encryption service vs. dedicated FIPS 140-2 Level 3 hardware appliance.",
    back: "<strong>AWS KMS</strong> is a managed, multi-tenant encryption service integrated natively with AWS services. <strong>AWS CloudHSM</strong> provides dedicated, single-tenant hardware security module appliances inside your VPC meeting strict FIPS 140-2 Level 3 cryptographic compliance requirements.",
    tags: ["KMS", "CloudHSM", "Encryption"]
  },
  {
    id: "aws-clf-fc-48",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS KMS: Customer Managed Keys vs. AWS Managed Keys",
    hint: "Full customer lifecycle control vs. automated free service keys.",
    back: "<strong>Customer Managed Keys (CMKs)</strong> allow customers to create, rotate, disable, and define key policies (costs $1/month). <strong>AWS Managed Keys</strong> are created automatically by AWS services (like <code>aws/s3</code>), have fixed policies managed by AWS, and are free to store.",
    tags: ["KMS", "Encryption", "Security"]
  },
  {
    id: "aws-clf-fc-49",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Secrets Manager vs. AWS Systems Manager Parameter Store",
    hint: "Automatic secret rotation for databases vs. hierarchical config store.",
    back: "<strong>AWS Secrets Manager</strong> is purpose-built for database credentials with built-in automated rotation for RDS and fine-grained billing. <strong>SSM Parameter Store</strong> offers free standard parameters for general application configurations, licensing keys, and strings with optional KMS encryption.",
    tags: ["Secrets Manager", "Parameter Store", "Security"]
  },
  {
    id: "aws-clf-fc-50",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Shield Standard vs. AWS Shield Advanced",
    hint: "Free automated L3/L4 DDoS protection vs. paid enterprise 24/7 SRT defense with cost protection.",
    back: "<strong>Shield Standard</strong> is automatically enabled at no cost for all AWS customers, defending against common Layer 3 and 4 SYN floods and UDP reflection attacks. <strong>Shield Advanced</strong> ($3,000/month) includes 24/7 DDoS Response Team (SRT) support, advanced Layer 7 mitigation, and DDoS cost protection.",
    tags: ["Shield", "DDoS", "Security"]
  }
];

export default AWS_CLF_FLASHCARDS_2;
