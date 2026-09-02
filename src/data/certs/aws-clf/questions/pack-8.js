export const AWS_CLF_QUESTIONS_8 = [
  {
    id: "aws-clf-176",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Elastic Beanstalk Managed Platform Updates",
    scenario: "A web development team wants AWS to automatically apply minor and patch updates to the underlying operating system, web server, and language runtime during scheduled weekly maintenance windows.",
    question: "Which AWS Elastic Beanstalk feature automatically applies operating system and runtime platform patches?",
    options: [
      { id: 'A', text: "AWS Systems Manager Patch Manager" },
      { id: 'B', text: "Auto Scaling Lifecycle Hooks" },
      { id: 'C', text: "AWS CodeDeploy" },
      { id: 'D', text: "Managed Platform Updates" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Elastic Beanstalk Managed Platform Updates automatically applies platform updates (operating system, web server, and application runtime patches) to your environment during a configurable weekly maintenance window with zero downtime.",
    referenceUrl: "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html",
    tags: ["Elastic Beanstalk", "PaaS", "Automation", "Compute"]
  },
  {
    id: "aws-clf-177",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS IAM Access Keys Rotation Best Practices",
    scenario: "A developer has long-term IAM access keys configured in a local command-line script. A security policy requires rotating access keys periodically.",
    question: "What is the recommended AWS best practice for rotating IAM access keys safely without disrupting running services?",
    options: [
      { id: 'A', text: "Change the IAM user password, which automatically rotates the access keys." },
      { id: 'B', text: "Create a second access key, update the application with the new key, verify functionality, deactivate the old key, and finally delete the old key." },
      { id: 'C', text: "Delete the existing access key immediately and wait for error alerts." },
      { id: 'D', text: "Share the root user access keys temporarily while updating the key." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rotating access keys safely involves creating a second active key, deploying the new key to client configurations, testing functionality, deactivating the old key to confirm nothing broke, and then deleting the old key.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey",
    tags: ["IAM", "Access Keys", "Security", "Best Practices"]
  },
  {
    id: "aws-clf-178",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS CodeArtifact Managed Artifact Repository",
    scenario: "A software organization needs a secure, highly scalable, and managed artifact repository to store, publish, and share private software packages (npm, Maven, Gradle, pip, NuGet, PyPI).",
    question: "Which AWS service provides a fully managed software artifact repository for development packages?",
    options: [
      { id: 'A', text: "Amazon S3" },
      { id: 'B', text: "Amazon Elastic Container Registry (ECR)" },
      { id: 'C', text: "AWS CodeCommit" },
      { id: 'D', text: "AWS CodeArtifact" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations of any size to securely store, publish, and share software packages used in their software development process.",
    referenceUrl: "https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html",
    tags: ["CodeArtifact", "DevOps", "Package Management"]
  },
  {
    id: "aws-clf-179",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Elastic Container Registry (Amazon ECR)",
    scenario: "A container engineering team builds Docker container images in a CI/CD pipeline and needs a secure, private, highly available container image registry that integrates natively with Amazon ECS and EKS.",
    question: "Which AWS managed container image registry service stores, manages, and deploys Docker container images?",
    options: [
      { id: 'A', text: "Amazon Elastic Container Registry (Amazon ECR)" },
      { id: 'B', text: "Amazon Elastic Container Service (ECS)" },
      { id: 'C', text: "AWS CodeArtifact" },
      { id: 'D', text: "Amazon S3" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon ECR is an AWS managed container image registry service that is secure, scalable, and reliable, supporting private container repositories with resource-based permissions using AWS IAM.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html",
    tags: ["ECR", "Docker", "Containers", "DevOps"]
  },
  {
    id: "aws-clf-180",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Cloud Service Models: IaaS vs PaaS vs SaaS",
    scenario: "An enterprise is comparing cloud service delivery models. In one model, the cloud provider manages the physical hardware, virtualization, operating system, and runtime, allowing the customer to focus purely on application code.",
    question: "Which cloud service model provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining infrastructure?",
    options: [
      { id: 'A', text: "Infrastructure as a Service (IaaS)" },
      { id: 'B', text: "Software as a Service (SaaS)" },
      { id: 'C', text: "Function as a Service (FaaS) alone" },
      { id: 'D', text: "Platform as a Service (PaaS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Platform as a Service (PaaS) removes the need for organizations to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html",
    tags: ["Cloud Concepts", "PaaS", "IaaS", "SaaS"]
  },
  {
    id: "aws-clf-181",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Security Incident Response and Shared Responsibility",
    scenario: "A customer discovers that an Amazon EC2 instance running in their account has been compromised due to an unpatched vulnerability in an open-source web application the customer installed.",
    question: "Under the AWS Shared Responsibility Model, who is responsible for remediating the vulnerable application code and restoring the EC2 instance?",
    options: [
      { id: 'A', text: "AWS Support will automatically re-write the vulnerable application code." },
      { id: 'B', text: "The customer is solely responsible for remediating the application and operating system inside the EC2 instance." },
      { id: 'C', text: "AWS is responsible because the instance runs in an AWS data centre." },
      { id: 'D', text: "Remediation is shared equally with the physical facility staff." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Under the Shared Responsibility Model, the customer is fully responsible for security IN the cloud, which includes installing application software patches, securing custom source code, configuring operating system firewalls, and managing application vulnerabilities.",
    referenceUrl: "https://aws.amazon.com/compliance/shared-responsibility-model/",
    tags: ["Shared Responsibility", "Security", "Incident Response"]
  },
  {
    id: "aws-clf-182",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Durability: 11 9s of Durability",
    scenario: "A data storage architect needs to choose an object storage service designed to provide 99.999999999% (11 9s) of data durability across multiple Availability Zones.",
    question: "What level of data durability is Amazon S3 Standard designed to deliver for objects over a given year?",
    options: [
      { id: 'A', text: "99.9% durability" },
      { id: 'B', text: "99.99% durability" },
      { id: 'C', text: "95.0% durability" },
      { id: 'D', text: "99.999999999% (11 9s) durability" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, and S3 Glacier storage classes are designed to provide 99.999999999% (11 nines) of durability of objects over a given year by automatically storing data redundantly across multiple Availability Zones.",
    referenceUrl: "https://aws.amazon.com/s3/features/",
    tags: ["S3", "Durability", "Storage", "High Availability"]
  },
  {
    id: "aws-clf-183",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)",
    scenario: "A company generates secondary backup copies of data that can be easily recreated if lost. They want a low-cost infrequent access storage class that stores data in a single Availability Zone at a 20% lower storage cost than S3 Standard-IA.",
    question: "Which Amazon S3 storage class stores data in a single Availability Zone for non-critical, reproducible data?",
    options: [
      { id: 'A', text: "S3 Glacier Instant Retrieval" },
      { id: 'B', text: "S3 Standard-IA" },
      { id: 'C', text: "S3 Intelligent-Tiering" },
      { id: 'D', text: "S3 One Zone-IA" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "S3 One Zone-IA is designed for data that is accessed less frequently but requires rapid access when needed. Unlike other S3 storage classes that store data in a minimum of three AZs, S3 One Zone-IA stores data in a single AZ at a lower cost.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-onezone-ia",
    tags: ["S3", "One Zone-IA", "Storage", "Cost Optimization"]
  },
  {
    id: "aws-clf-184",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Free Tier: Monitoring Free Tier Usage Alerts",
    scenario: "A student experimenting with AWS Free Tier wants to receive automated email notifications whenever their usage reaches 85% of the monthly free tier limits.",
    question: "Which AWS billing setting can be enabled to receive notifications when usage approaches or exceeds Free Tier limits?",
    options: [
      { id: 'A', text: "AWS Shield Advanced" },
      { id: 'B', text: "AWS Cost Anomaly Detection" },
      { id: 'C', text: "AWS Free Tier usage alerts in Billing Preferences" },
      { id: 'D', text: "Amazon CloudWatch Logs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Billing Preferences include an option to enable AWS Free Tier usage alerts, which automatically sends email alerts when your usage exceeds 85% of monthly Free Tier limits.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/tracking-free-tier-usage.html",
    tags: ["Free Tier", "Billing", "Alerts", "Cost"]
  },
  {
    id: "aws-clf-185",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Organizations Consolidated Billing: Single Payer Account",
    scenario: "An enterprise sets up an organization with 50 member accounts. Finance requires that all AWS charges from every account be invoiced to and paid by the single Management Account.",
    question: "How does payment processing work in AWS Organizations with Consolidated Billing?",
    options: [
      { id: 'A', text: "Member accounts must pay AWS directly before charges appear in the management account." },
      { id: 'B', text: "Charges are split equally among member accounts regardless of usage." },
      { id: 'C', text: "The Management (Payer) Account receives a single monthly consolidated invoice and is responsible for paying all charges incurred by all member accounts." },
      { id: 'D', text: "Each member account must have its own corporate credit card on file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With consolidated billing in AWS Organizations, the management account (also known as the payer account) is billed for all charges incurred by the member accounts, receiving one consolidated monthly bill.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    tags: ["Organizations", "Consolidated Billing", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-186",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS CloudTrail Insights for Unusual API Call Rates",
    scenario: "A security operations team wants automated anomaly detection that flags unusual surges in write API activity or rapid IAM permission modifications without writing custom CloudWatch metric filters.",
    question: "Which AWS CloudTrail feature uses machine learning to automatically detect unusual administrative API activity in your AWS account?",
    options: [
      { id: 'A', text: "AWS Config" },
      { id: 'B', text: "CloudTrail Insights" },
      { id: 'C', text: "Amazon GuardDuty" },
      { id: 'D', text: "CloudTrail Event History" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudTrail Insights continuously analyzes management events from your CloudTrail trails and automatically alerts you when it detects unusual operational patterns or spikes in API call volume.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html",
    tags: ["CloudTrail", "CloudTrail Insights", "Security", "Anomaly Detection"]
  },
  {
    id: "aws-clf-187",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Dedicated Hosts vs Dedicated Instances",
    scenario: "A company has existing server-bound software licenses (such as Microsoft Windows Server or SQL Server per-core licenses) that require visibility into physical socket and core counts on the underlying hardware.",
    question: "Which Amazon EC2 tenancy option provides a dedicated physical server with full socket and physical core visibility to support server-bound software licenses?",
    options: [
      { id: 'A', text: "Reserved Instances" },
      { id: 'B', text: "Dedicated Instances" },
      { id: 'C', text: "On-Demand Instances" },
      { id: 'D', text: "Dedicated Hosts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon EC2 Dedicated Hosts provide physical servers dedicated for your use with full visibility into sockets and physical cores, allowing you to bring your own server-bound software licenses (BYOL). Dedicated Instances provide dedicated hardware at the instance level without socket visibility.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
    tags: ["EC2", "Dedicated Hosts", "Licensing", "Compute"]
  },
  {
    id: "aws-clf-188",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EBS Snapshots Incremental Point-in-Time Backups",
    scenario: "A storage administrator takes daily snapshots of a 100 GB Amazon EBS volume. On day 2, only 5 GB of data has changed since the previous snapshot.",
    question: "How does Amazon EBS store subsequent snapshots of an EBS volume?",
    options: [
      { id: 'A', text: "EBS snapshots save a full 100 GB copy every time." },
      { id: 'B', text: "EBS snapshots are incremental, saving only the blocks that have changed since the most recent snapshot." },
      { id: 'C', text: "EBS snapshots are stored directly on EC2 instance store disks." },
      { id: 'D', text: "EBS snapshots overwrite previous snapshots automatically." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EBS snapshots are incremental backups, meaning that only the blocks on the device that have changed after your most recent snapshot are saved, optimizing storage cost and performance.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html",
    tags: ["EBS", "Snapshots", "Backups", "Storage"]
  },
  {
    id: "aws-clf-189",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Agility: Experimentation and Low Cost of Failure",
    scenario: "An engineering director encourages software teams to test innovative product ideas quickly. If an idea fails, the virtual resources are terminated in minutes with minimal financial loss.",
    question: "How does cloud computing lower the cost of failure during experimental product development?",
    options: [
      { id: 'A', text: "Resources can be provisioned and decommissioned on demand with zero long-term hardware commitments." },
      { id: 'B', text: "AWS refunds the cost of all failed business ideas." },
      { id: 'C', text: "All development environments are permanently free of charge." },
      { id: 'D', text: "Hardware depreciates faster in the cloud." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the cloud, teams can rapidly spin up resources to test hypotheses and immediately tear them down if unsuccessful, paying only for the minutes or hours consumed. This minimizes the financial penalty of failed experiments.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
    tags: ["Cloud Concepts", "Agility", "Innovation"]
  },
  {
    id: "aws-clf-190",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Network Access Control Lists (NACLs) Stateless Subnet Firewall",
    scenario: "A network security team needs a subnet-level firewall that explicitly blocks traffic from a list of known malicious IP addresses (denylist) while operating in a stateless manner.",
    question: "Which AWS networking security feature evaluates ordered allow and deny rules at the subnet boundary statelessly?",
    options: [
      { id: 'A', text: "Security Groups" },
      { id: 'B', text: "Network Access Control Lists (NACLs)" },
      { id: 'C', text: "AWS WAF" },
      { id: 'D', text: "Route Tables" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Network ACLs act as a virtual firewall for controlling traffic in and out of one or more subnets. They are stateless (inbound and outbound rules evaluated separately) and support explicit DENY rules as well as allow rules in numbered order.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
    tags: ["NACLs", "VPC", "Networking", "Security"]
  },
  {
    id: "aws-clf-191",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EC2 Instance Store Temporary Ephemeral Storage",
    scenario: "A high-performance analytics application needs temporary scratchpad storage with the lowest possible I/O latency. The team accepts that data will be lost when the EC2 instance is stopped or terminated.",
    question: "Which Amazon EC2 storage option provides temporary, block-level storage physically attached to the host server with ultra-low latency?",
    options: [
      { id: 'A', text: "Amazon S3 Standard" },
      { id: 'B', text: "Amazon Elastic File System (EFS)" },
      { id: 'C', text: "Amazon EC2 Instance Store" },
      { id: 'D', text: "Amazon Elastic Block Store (EBS)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An instance store provides temporary (ephemeral) block-level storage for your instance located on disks that are physically attached to the host computer, delivering ultra-high IOPS and low latency for temporary scratchpad data.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",
    tags: ["Instance Store", "EC2", "Ephemeral Storage", "Storage"]
  },
  {
    id: "aws-clf-192",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Replication: Same-Region Replication (SRR) vs Cross-Region Replication (CRR)",
    scenario: "A compliance policy requires critical financial documents uploaded to an S3 bucket in `us-east-1` to be automatically and asynchronously replicated to a secondary bucket in `eu-west-1` for geographic redundancy.",
    question: "Which Amazon S3 feature automatically replicates objects across buckets in different AWS Regions?",
    options: [
      { id: 'A', text: "Amazon S3 Transfer Acceleration" },
      { id: 'B', text: "Amazon S3 Same-Region Replication (SRR)" },
      { id: 'C', text: "Amazon S3 Cross-Region Replication (CRR)" },
      { id: 'D', text: "AWS DataSync" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon S3 Cross-Region Replication (CRR) is an S3 feature that automatically replicates objects across buckets in different AWS Regions for geographic compliance, lower latency access, and disaster recovery.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
    tags: ["S3", "Replication", "CRR", "Storage", "Disaster Recovery"]
  },
  {
    id: "aws-clf-193",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Partner Network (APN) Consulting and Technology Partners",
    scenario: "An enterprise is seeking an accredited professional consulting firm with verified AWS competencies to help design, migrate, and build their enterprise cloud architecture.",
    question: "Which global community of partners provides consulting, software, and migration services built on AWS?",
    options: [
      { id: 'A', text: "AWS re:Post" },
      { id: 'B', text: "AWS Marketplace" },
      { id: 'C', text: "AWS Partner Network (APN)" },
      { id: 'D', text: "AWS Developer Forum" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The AWS Partner Network (APN) is a global community of partners that leverage AWS to build solutions and services for customers, including Consulting Partners and Independent Software Vendors (ISVs).",
    referenceUrl: "https://aws.amazon.com/partners/",
    tags: ["APN", "Partners", "Consulting", "Governance"]
  },
  {
    id: "aws-clf-194",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Knowledge Center and AWS re:Post Community",
    scenario: "A developer is troubleshooting an unexpected IAM policy syntax error and wants to search authoritative articles written by AWS Support engineers answering frequent technical questions.",
    question: "Which AWS resource contains answers to frequently asked technical questions written and verified by AWS Support engineers?",
    options: [
      { id: 'A', text: "AWS Knowledge Center / AWS re:Post" },
      { id: 'B', text: "AWS Trust & Safety" },
      { id: 'C', text: "AWS Security Hub" },
      { id: 'D', text: "AWS Artifact" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS Knowledge Center (and AWS re:Post community) is a curated repository of articles and videos written by AWS Support engineers that answer the most frequent technical questions asked by AWS customers.",
    referenceUrl: "https://repost.aws/",
    tags: ["AWS re:Post", "Knowledge Center", "Support"]
  },
  {
    id: "aws-clf-195",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Queue Service (SQS) Standard vs FIFO Queues",
    scenario: "A financial ticketing application requires messages to be delivered exactly once and processed in the precise sequential order in which they were submitted.",
    question: "Which Amazon SQS queue type guarantees first-in-first-out delivery order and exactly-once processing?",
    options: [
      { id: 'A', text: "Amazon SQS Standard Queues" },
      { id: 'B', text: "Amazon SNS Topics" },
      { id: 'C', text: "Amazon SQS FIFO Queues" },
      { id: 'D', text: "Amazon Kinesis Data Firehose" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon SQS FIFO (First-In-First-Out) queues guarantee that the order in which messages are sent and received is strictly preserved and that each message is delivered exactly once without duplicates.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["SQS", "FIFO", "Messaging", "Application Integration"]
  },
  {
    id: "aws-clf-196",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon SQS Dead-Letter Queues (DLQ)",
    scenario: "A microservices application processes customer orders from an SQS queue. If a malformed message fails processing after 5 retry attempts, it should be isolated for manual debugging.",
    question: "Which Amazon SQS feature isolates messages that cannot be processed successfully after multiple retries?",
    options: [
      { id: 'A', text: "Visibility Timeout Extension" },
      { id: 'B', text: "FIFO Queue" },
      { id: 'C', text: "Dead-Letter Queue (DLQ)" },
      { id: 'D', text: "Delay Queue" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Dead-Letter Queue (DLQ) is an Amazon SQS queue that other queues can target for messages that cannot be processed successfully after a maximum receive count, isolating unprocessable messages for inspection.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
    tags: ["SQS", "DLQ", "Error Handling", "Application Integration"]
  },
  {
    id: "aws-clf-197",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Lambda Concurrency and Execution Time Limits",
    scenario: "A developer is designing a serverless data transformation job on AWS Lambda and needs to know the maximum execution time limit for a single Lambda function invocation.",
    question: "What is the maximum execution duration limit for an AWS Lambda function invocation?",
    options: [
      { id: 'A', text: "Unlimited execution duration" },
      { id: 'B', text: "5 minutes (300 seconds)" },
      { id: 'C', text: "15 minutes (900 seconds)" },
      { id: 'D', text: "1 hour (3600 seconds)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Lambda functions have a maximum execution timeout limit of 15 minutes (900 seconds) per invocation. For longer-running batch jobs, AWS recommends AWS Fargate, Amazon ECS, or AWS Batch.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html",
    tags: ["Lambda", "Serverless", "Limits", "Compute"]
  },
  {
    id: "aws-clf-198",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS WAF Managed Rule Groups",
    scenario: "A web security team wants to immediately protect their Application Load Balancer against the OWASP Top 10 web application vulnerabilities using pre-packaged, regularly updated security rules provided by AWS experts.",
    question: "Which feature of AWS WAF provides pre-configured rules maintained by AWS and AWS Marketplace security sellers?",
    options: [
      { id: 'A', text: "AWS Shield Standard" },
      { id: 'B', text: "Amazon GuardDuty" },
      { id: 'C', text: "AWS Managed Rules for AWS WAF" },
      { id: 'D', text: "Security Groups" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Managed Rules for AWS WAF are pre-configured rule groups curated and maintained by AWS Threat Research and AWS Marketplace sellers that protect against common threats (like OWASP Top 10) without writing custom rules.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-list.html",
    tags: ["WAF", "AWS Managed Rules", "OWASP", "Security"]
  },
  {
    id: "aws-clf-199",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Cloud Service Models: SaaS Definition",
    scenario: "A company subscribes to a cloud-based customer relationship management (CRM) software product where the vendor hosts and manages the entire stack, and end users simply log in via a web browser.",
    question: "Which cloud service model describes complete, centrally hosted software applications delivered over the internet to end users?",
    options: [
      { id: 'A', text: "Platform as a Service (PaaS)" },
      { id: 'B', text: "Infrastructure as a Service (IaaS)" },
      { id: 'C', text: "Function as a Service (FaaS)" },
      { id: 'D', text: "Software as a Service (SaaS)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Software as a Service (SaaS) provides complete, finished applications that are run and managed by the service provider (such as Microsoft 365 or Salesforce), requiring the customer only to manage their data and user access.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/types-of-cloud-computing.html",
    tags: ["Cloud Concepts", "SaaS", "Service Models"]
  },
  {
    id: "aws-clf-200",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Shared Responsibility: Managed Relational Database (RDS)",
    scenario: "A company runs an enterprise application on Amazon RDS for MySQL. The database administrator wants to understand who is responsible for operating system patching on the database host.",
    question: "Under the Shared Responsibility Model for Amazon RDS, which party is responsible for patching the database operating system?",
    options: [
      { id: 'A', text: "AWS is responsible for managing and patching the operating system hosting the RDS database." },
      { id: 'B', text: "The customer must SSH into the RDS host to install OS security patches." },
      { id: 'C', text: "The operating system does not require patching in the cloud." },
      { id: 'D', text: "OS patching is the shared responsibility of third-party consulting partners." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because Amazon RDS is a managed service, AWS manages the underlying operating system, virtualization hypervisor, hardware maintenance, and automated OS security patching. Customers manage database schema, table indexing, user access, and query tuning.",
    referenceUrl: "https://aws.amazon.com/compliance/shared-responsibility-model/",
    tags: ["Shared Responsibility", "RDS", "Security", "Databases"]
  }
];

export default AWS_CLF_QUESTIONS_8;
