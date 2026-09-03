export const AWS_CLF_FLASHCARDS_8 = [
  {
    id: "aws-clf-fc-176",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    front: "Loose Coupling vs. Tight Coupling in Cloud Architecture",
    hint: "Independent asynchronous message queues vs. direct synchronous API dependency.",
    back: "<strong>Tight coupling</strong> means components depend directly on each other's availability; if service B fails, service A fails. <strong>Loose coupling</strong> uses intermediate message queues (Amazon SQS) or event buses (EventBridge) so components scale and fail independently without breaking the system.",
    tags: ["Architecture", "Decoupling", "SQS", "Resilience"]
  },
  {
    id: "aws-clf-fc-177",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    front: "Single Point of Failure (SPOF) Mitigation",
    hint: "Eliminating single hardware/software points whose failure halts the entire system.",
    back: "A <strong>Single Point of Failure</strong> is any non-redundant component. Mitigate SPOFs by deploying EC2 instances across multiple Availability Zones behind an Application Load Balancer, using RDS Multi-AZ, and storing state in Amazon S3 or DynamoDB.",
    tags: ["SPOF", "High Availability", "Resilience"]
  },
  {
    id: "aws-clf-fc-178",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Identity Center (successor to AWS Single Sign-On)",
    hint: "Centralized portal for multi-account AWS access and cloud application sign-in.",
    back: "<strong>AWS IAM Identity Center</strong> provides a single portal where workforce users sign in once with corporate credentials (like Microsoft Entra ID or Okta) to access assigned accounts across AWS Organizations and third-party SaaS applications.",
    tags: ["Identity Center", "SSO", "IAM", "Workforce"]
  },
  {
    id: "aws-clf-fc-179",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Directory Service: Managed Active Directory",
    hint: "AWS Managed Microsoft AD vs. Simple AD vs. AD Connector.",
    back: "<strong>AWS Directory Service</strong> connects AWS resources with Active Directory. <strong>AWS Managed Microsoft AD</strong> runs real Microsoft Windows Server AD in AWS; <strong>AD Connector</strong> proxies directory requests directly to on-premises AD; <strong>Simple AD</strong> is a standalone Samba-based directory.",
    tags: ["Directory Service", "Active Directory", "Identity"]
  },
  {
    id: "aws-clf-fc-180",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS CloudTrail: Management Events vs. Data Events",
    hint: "Control plane administrative actions vs. high-volume data plane access operations.",
    back: "<strong>Management Events</strong> (logged by default for free) record control plane actions like creating an EC2 instance or updating an IAM role. <strong>Data Events</strong> (opt-in, paid) record high-volume object-level operations, like S3 <code>GetObject</code> or Lambda <code>Invoke</code> calls.",
    tags: ["CloudTrail", "Management Events", "Data Events", "Auditing"]
  },
  {
    id: "aws-clf-fc-181",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Certificate Manager (ACM): Free SSL/TLS Certificates",
    hint: "Automated provisioning and renewal of public SSL/TLS certificates for CloudFront and ELB.",
    back: "<strong>AWS Certificate Manager (ACM)</strong> provisions, manages, and automatically renews public SSL/TLS certificates for free when used with integrated AWS services like Elastic Load Balancing, Amazon CloudFront, and Amazon API Gateway.",
    tags: ["ACM", "Certificates", "TLS", "Security"]
  },
  {
    id: "aws-clf-fc-182",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS KMS Key Policies vs. IAM Policies for KMS",
    hint: "The primary authorization document for a KMS key; IAM alone is not enough.",
    back: "A <strong>KMS Key Policy</strong> is mandatory and is the primary mechanism to control access to a KMS key. Even an IAM user with full <code>AdministratorAccess</code> cannot use a KMS key unless the key policy explicitly delegates permission to the account or identity.",
    tags: ["KMS", "Key Policy", "IAM", "Security"]
  },
  {
    id: "aws-clf-fc-183",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Trusted Advisor: Security Checks in the Basic Plan",
    hint: "Seven core security checks free for all customers.",
    back: "All AWS accounts get access to 7 core Trusted Advisor checks at no cost: <strong>S3 Bucket Permissions</strong> (open access), <strong>Security Groups</strong> (unrestricted ports), <strong>IAM Use</strong> (no root access keys), <strong>MFA on Root Account</strong>, <strong>EBS Public Snapshots</strong>, <strong>RDS Public Snapshots</strong>, and <strong>Service Limits</strong>.",
    tags: ["Trusted Advisor", "Security", "Basic Support"]
  },
  {
    id: "aws-clf-fc-184",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Elastic Container Service (ECS): EC2 vs. Fargate Launch Types",
    hint: "Managing the underlying host instances yourself vs. completely serverless task execution.",
    back: "Under the <strong>EC2 Launch Type</strong>, you manage the EC2 instances, cluster capacity, and OS patching. Under the <strong>Fargate Launch Type</strong>, AWS provisions and runs containers serverlessly, eliminating all virtual machine management.",
    tags: ["ECS", "Fargate", "EC2", "Containers"]
  },
  {
    id: "aws-clf-fc-185",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Object Storage: Flat Namespace and Keys",
    hint: "Buckets contain objects identified by unique string keys rather than a hierarchical filesystem.",
    back: "Amazon S3 is an object store, not a file system. Folders in the console are simply visual prefixes in the object's string <strong>key</strong> (e.g. <code>photos/2026/vacation.jpg</code>). S3 scales horizontally because requests are partitioned across keys rather than directory tree locks.",
    tags: ["S3", "Object Storage", "Keys", "Architecture"]
  },
  {
    id: "aws-clf-fc-186",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EBS Multi-Attach",
    hint: "Attaching a single Provisioned IOPS EBS volume to multiple EC2 instances simultaneously.",
    back: "<strong>EBS Multi-Attach</strong> allows a single Provisioned IOPS SSD volume (<code>io1</code> or <code>io2</code>) to be attached concurrently to up to 16 Nitro-based EC2 instances within the same Availability Zone for clustered applications requiring shared raw block storage.",
    tags: ["EBS", "Multi-Attach", "Storage", "High Availability"]
  },
  {
    id: "aws-clf-fc-187",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Route 53: Domain Registration and DNS Hosting",
    hint: "Domain registrar capabilities combined with highly available global authoritative DNS resolution.",
    back: "Amazon Route 53 is both an ICANN-accredited <strong>Domain Registrar</strong> (purchase domains like <code>example.com</code>) and an authoritative <strong>DNS Service</strong> connecting user queries to AWS resources via 100% SLA global anycast DNS servers.",
    tags: ["Route 53", "DNS", "Domains", "Networking"]
  },
  {
    id: "aws-clf-fc-188",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Direct Connect Dedicated Connection vs. Hosted Connection",
    hint: "Dedicated 1 Gbps / 10 Gbps / 100 Gbps physical port vs. shared partner VLAN allocation.",
    back: "A <strong>Dedicated Connection</strong> provides a physical Ethernet port (1, 10, or 100 Gbps) dedicated solely to you from AWS. A <strong>Hosted Connection</strong> is provisioned through an AWS Direct Connect Partner across a shared network link in flexible bandwidth tiers from 50 Mbps up to 10 Gbps.",
    tags: ["Direct Connect", "Hybrid", "Networking"]
  },
  {
    id: "aws-clf-fc-189",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS VPN CloudHub: Spoke-to-Spoke Connectivity",
    hint: "Interconnecting multiple branch offices through an AWS Virtual Private Gateway.",
    back: "<strong>AWS VPN CloudHub</strong> lets organizations with multiple branch offices and remote locations use AWS as a low-cost central communication hub. Each site connects to an AWS Virtual Private Gateway over IPsec VPN, enabling secure inter-site branch communications.",
    tags: ["VPN", "CloudHub", "Networking", "Hybrid"]
  },
  {
    id: "aws-clf-fc-190",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SQS Visibility Timeout",
    hint: "The window of time during which a consumed message is hidden from other workers.",
    back: "When a worker receives a message from an SQS queue, the <strong>Visibility Timeout</strong> (default 30 seconds, max 12 hours) prevents other consumers from receiving it. If the worker processes and deletes the message, it is gone; if the worker crashes, the message reappears for another worker.",
    tags: ["SQS", "Visibility Timeout", "Messaging", "Decoupling"]
  },
  {
    id: "aws-clf-fc-191",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SQS Dead-Letter Queues (DLQs)",
    hint: "Isolating unprocessable poison pill messages after repeated processing failures.",
    back: "A <strong>Dead-Letter Queue (DLQ)</strong> catches messages that fail to be processed after a configured maximum receive count. Isolating poison pill messages prevents them from looping indefinitely and blocking other consumer workers.",
    tags: ["SQS", "Dead-Letter Queue", "DLQ", "Messaging"]
  },
  {
    id: "aws-clf-fc-192",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudFormation Drift Detection",
    hint: "Identifying out-of-band manual configuration changes to stack resources.",
    back: "<strong>CloudFormation Drift Detection</strong> compares the actual live configuration of deployed AWS resources with their expected configuration declared in the CloudFormation template, alerting administrators to accidental manual changes made in the AWS Management Console.",
    tags: ["CloudFormation", "Drift Detection", "IaC", "DevOps"]
  },
  {
    id: "aws-clf-fc-193",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon CloudWatch Synthetics: Canary Monitoring",
    hint: "Simulating user clicks and transactions 24/7 to catch website issues before customers do.",
    back: "<strong>CloudWatch Synthetics Canaries</strong> are configurable Node.js or Python scripts that run on a schedule to monitor web endpoints, REST APIs, and multi-step user workflows (like logging in and checkout), sounding alarms if response times degrade.",
    tags: ["CloudWatch", "Synthetics", "Monitoring", "Observability"]
  },
  {
    id: "aws-clf-fc-194",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CloudTrail Event History vs. CloudTrail Trail",
    hint: "Free 90-day search history vs. permanent delivery to an encrypted S3 bucket.",
    back: "<strong>CloudTrail Event History</strong> provides a free, rolling 90-day view of management events in the AWS console. A <strong>CloudTrail Trail</strong> must be created to deliver logs permanently to an Amazon S3 bucket, stream them to CloudWatch Logs, and retain multi-year audit compliance records.",
    tags: ["CloudTrail", "Event History", "Compliance", "Auditing"]
  },
  {
    id: "aws-clf-fc-195",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Application Auto Scaling: Beyond EC2",
    hint: "Scaling DynamoDB, ECS tasks, Aurora replicas, and AppStream fleets automatically.",
    back: "While EC2 Auto Scaling handles virtual machines, <strong>Application Auto Scaling</strong> manages automatic scaling across other AWS services\u2014including DynamoDB read/write capacity units, ECS task counts, Aurora Read Replicas, and SageMaker model endpoints.",
    tags: ["Auto Scaling", "DynamoDB", "ECS", "Serverless"]
  },
  {
    id: "aws-clf-fc-196",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Price Reductions: Continuous Innovation Philosophy",
    hint: "Passing operational economies of scale back to customers automatically.",
    back: "A core founding philosophy of AWS is that as customer adoption grows and AWS achieves greater operational economies of scale, AWS proactively passes these cost reductions back to customers in the form of lower list prices across core services.",
    tags: ["Pricing", "Economies of Scale", "Cloud Philosophy"]
  },
  {
    id: "aws-clf-fc-197",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Allocation: Amortized Costs vs. Unblended Costs",
    hint: "Actual accrual accounting for upfront commitments vs. raw cash invoices.",
    back: "<strong>Unblended Costs</strong> show cash payments in the period billed (e.g. paying $1,200 upfront for a Reserved Instance in Month 1). <strong>Amortized Costs</strong> spread that upfront payment evenly across the entire commitment period ($100/month for 12 months) for accurate financial reporting.",
    tags: ["FinOps", "Cost Explorer", "Amortized Costs", "Billing"]
  },
  {
    id: "aws-clf-fc-198",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Partner Network (APN): Consultative and Technology Tiers",
    hint: "Vetted global partner community helping customers build and migrate on AWS.",
    back: "The <strong>AWS Partner Network (APN)</strong> is a global community of partners offering software (Technology Partners) and professional migration/consulting services (Consulting Partners). Partners gain certifications, validated competencies, and funding to assist customers.",
    tags: ["APN", "Partners", "Consulting", "Ecosystem"]
  },
  {
    id: "aws-clf-fc-199",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Professional Services: Advisory and Delivery Experts",
    hint: "Global team of AWS enterprise experts assisting with complex cloud migrations.",
    back: "<strong>AWS Professional Services</strong> is a dedicated team of AWS consultants who work alongside customer teams and APN partners to execute enterprise cloud transformations, design specialized architectures, and ensure compliance in heavily regulated industries.",
    tags: ["Professional Services", "Consulting", "Enterprise"]
  },
  {
    id: "aws-clf-fc-200",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Quick Starts (now AWS Solutions Library): Automated Deployments",
    hint: "Production-ready reference architectures deployable with single-click CloudFormation templates.",
    back: "The <strong>AWS Solutions Library</strong> provides vetted, enterprise-ready reference architecture deployments built by AWS solutions architects. They use automated CloudFormation templates to provision secure environments (like HIPAA clusters or CI/CD pipelines) in minutes.",
    tags: ["Solutions Library", "Quick Starts", "CloudFormation", "Best Practices"]
  }
];

export default AWS_CLF_FLASHCARDS_8;
