export const AWS_CLF_QUESTIONS_9 = [
  {
    id: "aws-clf-201",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Disaster Recovery Cross-Region Replication",
    scenario: "An enterprise wants to establish a disaster recovery target in a secondary AWS Region for critical EC2 instances with continuous asynchronous replication and automated non-disruptive DR drills.",
    question: "Which AWS service enables automated continuous server replication for disaster recovery with non-disruptive testing?",
    options: [
      { id: 'A', text: "AWS Backup" },
      { id: 'B', text: "AWS Elastic Disaster Recovery (AWS DRS)" },
      { id: 'C', text: "AWS DataSync" },
      { id: 'D', text: "AWS Snowcone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Elastic Disaster Recovery (AWS DRS) provides continuous, block-level replication of servers into a low-cost staging area in your target AWS Region and allows non-disruptive DR drill testing.",
    referenceUrl: "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html",
    tags: ["DRS", "Disaster Recovery", "Business Continuity"]
  },
  {
    id: "aws-clf-202",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Shield Advanced 24/7 DDoS Response Team (SRT)",
    scenario: "An e-commerce portal experiences complex Layer 7 application DDoS attacks during a global sale. The enterprise needs 24x7 direct access to the AWS Shield Response Team (SRT) and financial DDoS cost protection.",
    question: "Which AWS service tier provides 24x7 engagement with the AWS Shield Response Team (SRT) and cost protection against billing spikes during DDoS attacks?",
    options: [
      { id: 'A', text: "Amazon GuardDuty" },
      { id: 'B', text: "AWS WAF alone" },
      { id: 'C', text: "AWS Shield Standard" },
      { id: 'D', text: "AWS Shield Advanced" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Shield Advanced provides specialized DDoS mitigation support, 24x7 direct access to the AWS Shield Response Team (SRT), real-time metrics, and financial DDoS cost protection against scaling charges.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/shield-advanced-features.html",
    tags: ["AWS Shield", "Shield Advanced", "DDoS", "Security"]
  },
  {
    id: "aws-clf-203",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Multipart Upload for Large Objects",
    scenario: "A developer is writing a client tool to upload 50 GB backup archive files to Amazon S3 over an unstable network connection and wants to ensure failed parts can be retried individually.",
    question: "Which Amazon S3 feature enables uploading large files in parallel parts and resuming interrupted transfers?",
    options: [
      { id: 'A', text: "S3 Intelligent-Tiering" },
      { id: 'B', text: "S3 Transfer Acceleration" },
      { id: 'C', text: "S3 Cross-Region Replication" },
      { id: 'D', text: "S3 Multipart Upload" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "S3 Multipart Upload allows you to upload a single object as a set of parts in parallel, improving throughput and enabling quick recovery from network issues by retrying only failed parts (mandatory for objects >5 GB).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["S3", "Multipart Upload", "Storage", "Performance"]
  },
  {
    id: "aws-clf-204",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EBS Volume Modification Without Downtime (Elastic Volumes)",
    scenario: "A production database running on an Amazon EC2 instance is running out of disk space on its attached 500 GB gp3 EBS volume. The database must remain online and accessible during the volume expansion.",
    question: "How can an administrator increase the size of an attached Amazon EBS volume without stopping the EC2 instance or detaching the volume?",
    options: [
      { id: 'A', text: "Use Amazon EBS Elastic Volumes to modify the volume size and IOPS dynamically while the volume is in use." },
      { id: 'B', text: "Create a new EBS volume and migrate data manually." },
      { id: 'C', text: "EBS volume sizes cannot be increased once created." },
      { id: 'D', text: "Stop the EC2 instance, detach the volume, resize it, and reattach it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EBS Elastic Volumes allows you to increase volume size, adjust provisioned IOPS, or change the volume type dynamically without detaching the volume or restarting the instance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html",
    tags: ["EBS", "Elastic Volumes", "Storage", "High Availability"]
  },
  {
    id: "aws-clf-205",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Pricing: Amazon S3 Pricing Components",
    scenario: "A finance manager is auditing the monthly invoice for Amazon S3 storage usage.",
    question: "Which components are primary cost drivers for Amazon S3 billing?",
    options: [
      { id: 'A', text: "Inbound data transfer from the public internet." },
      { id: 'B', text: "The number of IAM users accessing the bucket." },
      { id: 'C', text: "The number of S3 buckets created in an account." },
      { id: 'D', text: "Storage volume (GB-months), request counts (PUT, GET), and outbound data transfer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon S3 pricing is determined primarily by: storage volume consumed per month (GB/month), number and type of requests (PUT, COPY, POST, LIST, GET), data retrieval fees (for cold tiers), and outbound data transfer.",
    referenceUrl: "https://aws.amazon.com/s3/pricing/",
    tags: ["S3", "Pricing", "Billing", "Cost Management"]
  },
  {
    id: "aws-clf-206",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automatic Rotation with Lambda",
    scenario: "An enterprise security standard mandates rotating Amazon RDS database master credentials every 30 days automatically without manual administrative intervention.",
    question: "How does AWS Secrets Manager perform automated rotation of database credentials?",
    options: [
      { id: 'A', text: "It invokes a built-in AWS Lambda rotation function that updates both the database secret and the database server credentials synchronously." },
      { id: 'B', text: "It requires AWS CloudHSM to manually rotate passwords." },
      { id: 'C', text: "It emails the database administrator a new random password every 30 days." },
      { id: 'D', text: "It restarts the database instance on a monthly schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Secrets Manager uses an AWS Lambda function to update credentials on both the target database server and in the Secrets Manager secret automatically according to your rotation schedule.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secrets Manager", "Rotation", "Lambda", "Security"]
  },
  {
    id: "aws-clf-207",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 AMI (Amazon Machine Image) Golden Images",
    scenario: "A DevOps team wants to standardize base EC2 deployments across the company with pre-installed monitoring agents, security configurations, and application runtimes.",
    question: "Which AWS resource serves as a packaged template containing a pre-configured operating system and software to launch identical EC2 instances?",
    options: [
      { id: 'A', text: "Amazon EBS Snapshot" },
      { id: 'B', text: "AWS CloudFormation Template" },
      { id: 'C', text: "EC2 Launch Template" },
      { id: 'D', text: "Amazon Machine Image (AMI)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Amazon Machine Image (AMI) provides the information required to launch an instance, including a pre-configured template (operating system, application server, and software packages) and block device mappings.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",
    tags: ["AMI", "EC2", "Compute", "Deployment"]
  },
  {
    id: "aws-clf-208",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Global Infrastructure: AWS Regions Geographic Placement",
    scenario: "A healthcare provider must store patient health records strictly within German national borders to comply with European and national data sovereignty regulations.",
    question: "Which factor dictates the selection of a specific AWS Region for deploying workloads with strict data residency requirements?",
    options: [
      { id: 'A', text: "The number of IAM users in the account" },
      { id: 'B', text: "Data residency and legal compliance requirements" },
      { id: 'C', text: "Availability of AWS Snowcone devices" },
      { id: 'D', text: "The tier of AWS Support plan purchased" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When choosing an AWS Region, primary factors include: legal compliance and data residency requirements (keeping data inside specific national boundaries), proximity to end users (latency), service availability, and cost.",
    referenceUrl: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
    tags: ["Global Infrastructure", "Regions", "Compliance", "Data Sovereignty"]
  },
  {
    id: "aws-clf-209",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Hibernate for Rapid Application Resumption",
    scenario: "A memory-intensive simulation application takes 20 minutes to load 64 GB of static data into RAM at startup. The team wants to pause the instance overnight and resume instantly without reloading RAM.",
    question: "Which Amazon EC2 feature saves the in-memory state of an instance to an EBS root volume and restores it quickly upon restart?",
    options: [
      { id: 'A', text: "EBS Snapshot" },
      { id: 'B', text: "EC2 Stop" },
      { id: 'C', text: "EC2 Reboot" },
      { id: 'D', text: "EC2 Hibernate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When you hibernate an EC2 instance, AWS signals the operating system to perform hibernation (suspend-to-disk), saving the contents from your instance memory (RAM) to your Amazon EBS root volume for fast resumption.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html",
    tags: ["EC2", "Hibernate", "Compute", "Performance"]
  },
  {
    id: "aws-clf-210",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Lambda Event Source Mappings and Triggers",
    scenario: "An architecture processes streaming IoT records by invoking a serverless Lambda function automatically whenever new batches of records arrive in an Amazon Kinesis Data Stream.",
    question: "Which AWS Lambda capability continuously polls streaming services and invokes Lambda functions with batches of records?",
    options: [
      { id: 'A', text: "CloudWatch Alarms" },
      { id: 'B', text: "Amazon SNS Subscription" },
      { id: 'C', text: "Event Source Mapping" },
      { id: 'D', text: "API Gateway HTTP API" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An Event Source Mapping is a Lambda resource that reads from an event source (such as Amazon Kinesis, DynamoDB Streams, or Amazon SQS) and invokes a Lambda function with batches of records.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html",
    tags: ["Lambda", "Event Source Mapping", "Serverless", "Streaming"]
  },
  {
    id: "aws-clf-211",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Allocation Tags: AWS-Generated vs User-Defined",
    scenario: "A cloud administrator notices tags starting with `aws:` (such as `aws:createdBy`) in the billing console alongside custom tags like `Environment`.",
    question: "What is the difference between AWS-generated cost allocation tags and user-defined cost allocation tags?",
    options: [
      { id: 'A', text: "AWS-generated tags can be deleted by customers at any time." },
      { id: 'B', text: "AWS-generated tags incur extra monthly billing fees." },
      { id: 'C', text: "AWS-generated tags are defined and created automatically by AWS (prefixed with `aws:`), while user-defined tags are created and assigned by customers." },
      { id: 'D', text: "User-defined tags are only visible to AWS Support." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS defines, creates, and applies AWS-generated tags (such as `aws:createdBy`), while customers create, manage, and assign user-defined tags. Both must be activated in the Billing console to appear in reports.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    tags: ["Cost Allocation Tags", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-212",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Storage Service (S3) Bucket Policies vs ACLs",
    scenario: "A security administrator needs to write a JSON-based access policy attached directly to an S3 bucket that enforces SSL (HTTPS) encryption in transit for all incoming requests.",
    question: "Which access control mechanism attaches JSON policies directly to S3 buckets to manage permissions and conditions?",
    options: [
      { id: 'A', text: "Security Groups" },
      { id: 'B', text: "Network ACLs" },
      { id: 'C', text: "S3 Bucket Policies" },
      { id: 'D', text: "S3 Access Control Lists (ACLs)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "S3 Bucket Policies are JSON-based resource policies attached directly to an S3 bucket that allow you to grant granular permissions and enforce security conditions (such as requiring HTTPS or specific IP ranges).",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html",
    tags: ["S3", "Bucket Policies", "Security", "Storage"]
  },
  {
    id: "aws-clf-213",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Shared Responsibility: Customer Responsibility for IAM Management",
    scenario: "An organization's security administrator configures IAM user accounts, password complexity rules, and MFA enforcement for all cloud engineers.",
    question: "Under the AWS Shared Responsibility Model, who is responsible for managing IAM user identities and access privileges?",
    options: [
      { id: 'A', text: "The customer is solely responsible for IAM user creation, password policies, and credential security." },
      { id: 'B', text: "AWS is responsible for resetting user passwords." },
      { id: 'C', text: "AWS Support manages IAM users on behalf of the customer." },
      { id: 'D', text: "IAM management is automatically outsourced to third-party identity providers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identity and Access Management (IAM) is entirely the customer's responsibility (Security IN the cloud). Customers manage user accounts, group memberships, policy assignments, and MFA enforcement.",
    referenceUrl: "https://aws.amazon.com/compliance/shared-responsibility-model/",
    tags: ["Shared Responsibility", "IAM", "Security"]
  },
  {
    id: "aws-clf-214",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon CloudFront Signed URLs and Signed Cookies for Private Content",
    scenario: "A video-on-demand platform wants to restrict access to premium subscription movies so that only authenticated paying subscribers with temporary authorization can stream content.",
    question: "Which Amazon CloudFront feature restricts access to private content using temporary cryptographic tokens?",
    options: [
      { id: 'A', text: "Security Groups" },
      { id: 'B', text: "S3 Block Public Access" },
      { id: 'C', text: "AWS WAF alone" },
      { id: 'D', text: "CloudFront Signed URLs and Signed Cookies" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CloudFront Signed URLs and Signed Cookies allow you to control who can access your content by requiring clients to provide a valid signature generated with a trusted key pair, ideal for private subscription content.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html",
    tags: ["CloudFront", "Signed URLs", "Security", "CDN"]
  },
  {
    id: "aws-clf-215",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Adoption Framework (CAF) Foundational Capability Perspectives",
    scenario: "An enterprise is structuring its cloud center of excellence (CCoE) leadership team across Business and Technical leadership domains.",
    question: "How many foundational perspectives are defined in the AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      { id: 'A', text: "Twelve perspectives: one for each AWS management service" },
      { id: 'B', text: "Four perspectives: Development, Testing, Staging, and Production" },
      { id: 'C', text: "Three perspectives: Compute, Storage, and Networking" },
      { id: 'D', text: "Six perspectives: Business, People, Governance (Business capabilities) and Platform, Security, Operations (Technical capabilities)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The AWS Cloud Adoption Framework (AWS CAF) defines six foundational perspectives: Business, People, Governance (focusing on business capabilities) and Platform, Security, Operations (focusing on technical capabilities).",
    referenceUrl: "https://aws.amazon.com/professional-services/CAF/",
    tags: ["CAF", "Cloud Concepts", "Frameworks"]
  },
  {
    id: "aws-clf-216",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Glacier Flexible Retrieval vs Glacier Instant Retrieval",
    scenario: "A medical imaging repository stores medical scans that are rarely accessed (once a quarter), but when a doctor requests a scan during an emergency, the file must be delivered in milliseconds.",
    question: "Which Amazon S3 storage class provides the lowest storage cost for infrequently accessed data that requires millisecond retrieval speeds?",
    options: [
      { id: 'A', text: "S3 Standard-IA" },
      { id: 'B', text: "S3 Glacier Instant Retrieval" },
      { id: 'C', text: "S3 Glacier Flexible Retrieval" },
      { id: 'D', text: "S3 Glacier Deep Archive" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "S3 Glacier Instant Retrieval is an archive storage class that delivers the lowest-cost storage for long-lived data that is rarely accessed and requires millisecond retrieval when needed.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier-instant",
    tags: ["S3", "Glacier Instant Retrieval", "Storage", "Performance"]
  },
  {
    id: "aws-clf-217",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Allocation Tags: Tag Key and Tag Value Concepts",
    scenario: "A system administrator tags an EC2 instance with `Environment = Production` to track production server costs in monthly billing reports.",
    question: "In AWS resource tagging, what do `Environment` and `Production` represent?",
    options: [
      { id: 'A', text: "Both are IAM policy variables." },
      { id: 'B', text: "Both are AWS Organization OU names." },
      { id: 'C', text: "`Environment` is the tag value, and `Production` is the tag key." },
      { id: 'D', text: "`Environment` is the tag key, and `Production` is the tag value." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A tag in AWS is a label consisting of a customer-defined tag key (e.g. `Environment`) and an optional tag value (e.g. `Production`) used to organize and track costs for AWS resources.",
    referenceUrl: "https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html",
    tags: ["Tagging", "Cost Allocation", "FinOps"]
  },
  {
    id: "aws-clf-218",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Read Replicas vs Multi-AZ Deployments",
    scenario: "An online store database experiences slow response times during sales because read reporting queries saturate the database CPU, while high availability failover is already configured.",
    question: "What is the primary architectural purpose of an Amazon RDS Read Replica compared to a Multi-AZ deployment?",
    options: [
      { id: 'A', text: "Read Replicas provide automated disaster failover, whereas Multi-AZ scales write throughput." },
      { id: 'B', text: "Read Replicas scale read throughput horizontally by offloading read traffic, whereas Multi-AZ provides synchronous high availability and automatic failover." },
      { id: 'C', text: "Read Replicas encrypt data at rest, whereas Multi-AZ encrypts data in transit." },
      { id: 'D', text: "Read Replicas convert relational data into NoSQL format." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "RDS Read Replicas use asynchronous replication to provide horizontal read scaling for read-heavy workloads. RDS Multi-AZ uses synchronous replication to provide high availability and automatic failover, but the standby cannot serve read traffic.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
    tags: ["RDS", "Read Replicas", "Multi-AZ", "Databases"]
  },
  {
    id: "aws-clf-219",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon GuardDuty Finding Types and Security Alerts",
    scenario: "Amazon GuardDuty detects an unusual outbound SSH communication from an Amazon EC2 instance to a known cryptocurrency mining pool IP address.",
    question: "What action does Amazon GuardDuty take upon detecting this malicious activity?",
    options: [
      { id: 'A', text: "It permanently deletes the compromised EC2 instance immediately." },
      { id: 'B', text: "It generates a security finding in the GuardDuty console and sends an event to Amazon EventBridge for automated notification or remediation." },
      { id: 'C', text: "It revokes all IAM user credentials in the AWS account." },
      { id: 'D', text: "It blocks all internet access across the entire VPC." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GuardDuty generates detailed security findings with severity ratings and sends events to Amazon EventBridge, allowing administrators to automate notifications (via SNS) or trigger automated remediation (via Lambda).",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings.html",
    tags: ["GuardDuty", "Findings", "Security", "EventBridge"]
  },
  {
    id: "aws-clf-220",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Global Accelerator Anycast IP Routing",
    scenario: "A real-time voice-over-IP (VoIP) application needs to ingest UDP traffic from mobile clients worldwide and route it across the congestion-free AWS private network backbone to Application Load Balancers in two AWS Regions.",
    question: "Which AWS networking service provides static anycast IP addresses to onboard TCP/UDP traffic onto the AWS global network close to users?",
    options: [
      { id: 'A', text: "Amazon Route 53" },
      { id: 'B', text: "AWS Global Accelerator" },
      { id: 'C', text: "Amazon CloudFront" },
      { id: 'D', text: "AWS Direct Connect" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Global Accelerator provides two static anycast IP addresses that route traffic over the AWS global private network backbone directly to optimal regional endpoints for TCP and UDP protocols.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["Global Accelerator", "Networking", "Anycast", "Performance"]
  },
  {
    id: "aws-clf-221",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Beanstalk Supported Deployment Platforms",
    scenario: "A software team wants to deploy a Docker containerized web application using an automated platform that manages provisioning, load balancing, and health monitoring.",
    question: "Which AWS deployment service supports deploying custom Docker containers as a managed platform?",
    options: [
      { id: 'A', text: "Amazon CloudFront" },
      { id: 'B', text: "Amazon Route 53" },
      { id: 'C', text: "AWS CodeCommit" },
      { id: 'D', text: "AWS Elastic Beanstalk" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Elastic Beanstalk supports single-container and multi-container Docker environments alongside runtime platforms like Node.js, Python, Java, and .NET, automating infrastructure management.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/docker.html",
    tags: ["Elastic Beanstalk", "Docker", "PaaS", "Deployment"]
  },
  {
    id: "aws-clf-222",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "High Availability vs Disaster Recovery",
    scenario: "An architect explains the difference between building high availability within a Region and designing a multi-region disaster recovery plan.",
    question: "What is the primary difference between High Availability (HA) and Disaster Recovery (DR)?",
    options: [
      { id: 'A', text: "HA is free, whereas DR requires Enterprise Support." },
      { id: 'B', text: "HA is manual, whereas DR is always fully automated." },
      { id: 'C', text: "HA applies only to databases, whereas DR applies only to compute." },
      { id: 'D', text: "HA focuses on continuous operational uptime and automatic fault handling within a Region (e.g. across AZs), whereas DR focuses on restoring operations after a major catastrophic Regional failure." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "High Availability ensures systems operate continuously without failing during routine localized component failures (typically across multiple AZs). Disaster Recovery focuses on business continuity and data restoration following a major catastrophic disaster (typically multi-Region).",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-fault-tolerance.html",
    tags: ["High Availability", "Disaster Recovery", "Cloud Concepts", "Resilience"]
  },
  {
    id: "aws-clf-223",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Organizations Consolidated Billing Payment Terms",
    scenario: "An enterprise has 10 subsidiary companies operating in different countries under a single AWS Organization.",
    question: "What financial consolidation occurs when all subsidiary accounts are added as member accounts in an AWS Organization?",
    options: [
      { id: 'A', text: "Each member account pays its bill separately to AWS local entities." },
      { id: 'B', text: "All member accounts receive one consolidated monthly invoice paid by the management account, and benefit from combined volume pricing tiers." },
      { id: 'C', text: "All AWS services are discounted by 50% automatically." },
      { id: 'D', text: "Member accounts cannot run production workloads." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Organizations Consolidated Billing aggregates the billing of all member accounts onto a single monthly invoice paid by the management account, while combining usage to reach volume pricing tiers.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    tags: ["Organizations", "Consolidated Billing", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-224",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Identity and Access Management (IAM) Temporary vs Permanent Credentials",
    scenario: "A security lead wants to eliminate long-term access keys on developer workstations by allowing developers to authenticate via corporate identity provider credentials and receive short-lived tokens.",
    question: "What is the primary security advantage of using temporary security credentials (IAM roles) over long-term IAM user access keys?",
    options: [
      { id: 'A', text: "Temporary credentials grant full administrator permissions." },
      { id: 'B', text: "Temporary credentials expire automatically after a short duration, eliminating the risk of long-term credential leakage." },
      { id: 'C', text: "Temporary credentials cannot be audited in AWS CloudTrail." },
      { id: 'D', text: "Temporary credentials require no IAM policies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Temporary credentials (provided by AWS STS via IAM roles) have a limited lifetime (from minutes to hours) and expire automatically, greatly reducing the risk of compromised or leaked credentials.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html",
    tags: ["IAM", "Temporary Credentials", "STS", "Security"]
  },
  {
    id: "aws-clf-225",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Storage Gateway: Volume Gateway Stored vs Cached Volumes",
    scenario: "A branch office has 10 TB of active data on-premises and needs to maintain the primary copy of all data locally on-premises for ultra-low latency while asynchronously backing up point-in-time snapshots to Amazon S3.",
    question: "Which AWS Storage Gateway Volume Gateway configuration stores the entire primary data volume locally on-premises while asynchronously creating EBS snapshots in AWS?",
    options: [
      { id: 'A', text: "Tape Gateway" },
      { id: 'B', text: "Amazon S3 File Gateway" },
      { id: 'C', text: "Stored Volumes" },
      { id: 'D', text: "Cached Volumes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Stored Volumes store your entire dataset locally on-premises while providing asynchronous backups to Amazon S3 as EBS snapshots. Cached Volumes store your primary data in Amazon S3 and retain only frequently accessed data locally in the cache.",
    referenceUrl: "https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html#volume-gateway",
    tags: ["Storage Gateway", "Volume Gateway", "Stored Volumes", "Storage"]
  }
];

export default AWS_CLF_QUESTIONS_9;
