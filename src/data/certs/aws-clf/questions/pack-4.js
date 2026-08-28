export const AWS_CLF_QUESTIONS_4 = [
  {
    id: "aws-clf-76",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Agility and Innovation",
    scenario: "A startup product team can spin up hundreds of testing environments in minutes to experiment with new features and shut them down immediately after testing.",
    question: "Which cloud benefit refers to reducing the time required to make technology resources available to developers?",
    options: [
      { id: 'A', text: "Economies of scale" },
      { id: 'B', text: "Stop guessing capacity" },
      { id: 'C', text: "Speed and agility" },
      { id: 'D', text: "Trade capital expense for variable expense" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes, dramatically increasing agility.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
    tags: ["Cloud Concepts", "Agility", "Speed"]
  },
  {
    id: "aws-clf-77",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS CloudTrail Log File Integrity Validation",
    scenario: "A financial compliance officer must ensure that security audit log files delivered to Amazon S3 have not been modified, deleted, or forged after delivery.",
    question: "Which AWS CloudTrail feature cryptographically validates whether log files remained unchanged after delivery?",
    options: [
      { id: 'A', text: "Amazon S3 Object Lock in Governance Mode" },
      { id: 'B', text: "CloudTrail Log File Integrity Validation" },
      { id: 'C', text: "AWS CloudWatch Logs Insights" },
      { id: 'D', text: "AWS KMS envelope encryption" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CloudTrail log file integrity validation uses industry-standard algorithms (SHA-256 and RSA) to generate digest files, allowing you to mathematically verify that log files were not tampered with after delivery to S3.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html",
    tags: ["CloudTrail", "Compliance", "Security", "Integrity"]
  },
  {
    id: "aws-clf-78",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Versioning Protection Against Accidental Deletion",
    scenario: "An enterprise document management system requires protection against accidental object overwrites and accidental deletions by administrative users.",
    question: "Which Amazon S3 feature preserves, retrieves, and restores every version of every object stored in an S3 bucket?",
    options: [
      { id: 'A', text: "S3 Transfer Acceleration" },
      { id: 'B', text: "S3 Lifecycle Configuration" },
      { id: 'C', text: "S3 Versioning" },
      { id: 'D', text: "S3 Object Replication" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "S3 Versioning keeps multiple variants of an object in the same bucket, allowing you to preserve, retrieve, and restore every version of every object, protecting against accidental overwrites and deletes.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html",
    tags: ["S3", "Versioning", "Storage", "Data Protection"]
  },
  {
    id: "aws-clf-79",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EBS Multi-Attach for Clustered Applications",
    scenario: "A clustered Linux database application running on two Amazon EC2 instances in the same Availability Zone requires concurrent read and write access to a single high-performance Provisioned IOPS EBS volume.",
    question: "Which Amazon EBS feature enables attaching a single Provisioned IOPS volume to multiple EC2 instances simultaneously?",
    options: [
      { id: 'A', text: "Amazon FSx for Lustre" },
      { id: 'B', text: "Amazon Elastic File System (EFS)" },
      { id: 'C', text: "EBS Snapshot Sharing" },
      { id: 'D', text: "Amazon EBS Multi-Attach" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon EBS Multi-Attach enables you to attach a single Provisioned IOPS SSD (io1 or io2) volume to up to 16 Linux EC2 instances in the same Availability Zone to support clustered applications.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes-multi.html",
    tags: ["EBS", "Multi-Attach", "Storage", "Compute"]
  },
  {
    id: "aws-clf-80",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS KMS Customer Managed Keys (CMK) vs AWS Managed Keys",
    scenario: "A regulatory mandate requires an enterprise to have complete control over encryption keys, including defining key access policies, custom rotation schedules, and immediate key disabling in case of a breach.",
    question: "Which type of KMS key provides full customer administrative control over access policies, alias management, and key rotation?",
    options: [
      { id: 'A', text: "AWS Owned Keys" },
      { id: 'B', text: "Customer Managed Keys (CMK)" },
      { id: 'C', text: "AWS Managed Keys" },
      { id: 'D', text: "CloudHSM Root Keys" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Customer Managed Keys (CMKs) are KMS keys that you create, own, and manage in your AWS account. You have full control over their key policies, IAM permissions, rotation schedules, and lifecycle.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk",
    tags: ["KMS", "Encryption", "Security", "Compliance"]
  },
  {
    id: "aws-clf-81",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Pricing: Inbound vs Outbound Data Transfer",
    scenario: "A web application receives 500 GB of file uploads from users over the internet each month and serves 2 TB of file downloads back to users over the internet.",
    question: "How is internet data transfer billed by AWS in this scenario?",
    options: [
      { id: 'A', text: "Inbound data transfer is billed; outbound data transfer is free." },
      { id: 'B', text: "Both inbound and outbound data transfers are billed at identical per-gigabyte rates." },
      { id: 'C', text: "Both inbound and outbound data transfers are completely free." },
      { id: 'D', text: "Inbound data transfer from the internet is free; outbound data transfer to the internet is billed per gigabyte." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "As a general rule across AWS services, inbound data transfer from the public internet into AWS is free ($0.00/GB). Outbound data transfer from AWS to the public internet is billed per gigabyte above free tier allowances.",
    referenceUrl: "https://aws.amazon.com/pricing/",
    tags: ["Pricing", "Data Transfer", "Billing", "Cost"]
  },
  {
    id: "aws-clf-82",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon RDS Automated Snapshots vs Manual Snapshots",
    scenario: "A database administrator deletes an Amazon RDS instance that is no longer needed. They want to ensure a point-in-time backup remains available indefinitely even after the RDS instance is deleted.",
    question: "What happens to automated RDS snapshots when a DB instance is deleted, and how can a permanent backup be retained?",
    options: [
      { id: 'A', text: "Automated snapshots are deleted with the instance; creating a manual DB snapshot preserves the backup indefinitely." },
      { id: 'B', text: "Amazon RDS automatically converts all automated snapshots into S3 Glacier archives." },
      { id: 'C', text: "Automated snapshots are retained for 10 years automatically." },
      { id: 'D', text: "Manual snapshots are deleted automatically after 35 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automated snapshots are tied to the lifetime of the RDS instance and are deleted when the instance is deleted unless you retain them or create a manual snapshot. Manual DB snapshots are retained until you explicitly delete them.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html",
    tags: ["RDS", "Snapshots", "Backups", "Databases"]
  },
  {
    id: "aws-clf-83",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Transfer Acceleration",
    scenario: "Global clients located in Australia, Europe, and Asia need to upload large video files to a centralized Amazon S3 bucket located in the US East (N. Virginia) Region as quickly as possible.",
    question: "Which Amazon S3 feature uses AWS Edge Locations to accelerate long-distance uploads into S3 buckets?",
    options: [
      { id: 'A', text: "AWS Direct Connect" },
      { id: 'B', text: "Amazon S3 Transfer Acceleration" },
      { id: 'C', text: "Amazon CloudFront Signed URLs" },
      { id: 'D', text: "Amazon S3 Cross-Region Replication" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket by routing traffic through AWS Edge Locations over the optimized AWS private network backbone.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
    tags: ["S3", "Transfer Acceleration", "Networking", "Storage"]
  },
  {
    id: "aws-clf-84",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Network Firewall for Deep Packet Inspection",
    scenario: "An enterprise requires stateful Layer 3-7 network traffic inspection, intrusion prevention system (IPS) rule evaluation, and domain name filtering for all VPC traffic entering and leaving via an Internet Gateway.",
    question: "Which managed AWS security service provides stateful network firewall protection and IPS inspection across VPCs?",
    options: [
      { id: 'A', text: "Security Groups" },
      { id: 'B', text: "Network ACLs" },
      { id: 'C', text: "AWS Network Firewall" },
      { id: 'D', text: "AWS WAF" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Network Firewall is a stateful, fully managed network firewall and intrusion detection and prevention service for your virtual private clouds (VPCs), supporting 5-tuple filtering, IPS rules, and domain filtering.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html",
    tags: ["Network Firewall", "VPC", "Security", "IPS"]
  },
  {
    id: "aws-clf-85",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Route 53 Public vs Private Hosted Zones",
    scenario: "A cloud architect needs to configure DNS domain resolution for internal microservices within an Amazon VPC so that record names are never resolvable from the public internet.",
    question: "Which type of Amazon Route 53 hosted zone resolves DNS queries strictly within one or more specified VPCs?",
    options: [
      { id: 'A', text: "Global Hosted Zone" },
      { id: 'B', text: "Private Hosted Zone" },
      { id: 'C', text: "Dynamic Hosted Zone" },
      { id: 'D', text: "Public Hosted Zone" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Amazon Route 53 Private Hosted Zone is a container that holds information about how you want Route 53 to respond to DNS queries for a domain and its subdomains within one or more VPCs that you associate with the zone.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-private.html",
    tags: ["Route 53", "DNS", "VPC", "Networking"]
  },
  {
    id: "aws-clf-86",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Transit Gateway for Hub-and-Spoke VPC Interconnection",
    scenario: "A corporation has 80 Amazon VPCs and 5 on-premises data centres and wants to connect them together without creating complex, mesh VPC peering connections between every pair.",
    question: "Which AWS service acts as a centralized cloud router to interconnect thousands of VPCs and on-premises networks in a hub-and-spoke topology?",
    options: [
      { id: 'A', text: "VPC Peering" },
      { id: 'B', text: "Internet Gateway" },
      { id: 'C', text: "AWS Direct Connect Gateway" },
      { id: 'D', text: "AWS Transit Gateway" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Transit Gateway connects Amazon VPCs and on-premises networks to a single central hub, simplifying network topology and eliminating the need for complex full-mesh peering relationships.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html",
    tags: ["Transit Gateway", "VPC", "Networking", "Hub-and-Spoke"]
  },
  {
    id: "aws-clf-87",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Pricing Calculator for Total Cost Modeling",
    scenario: "A project manager is preparing a budget proposal for a new mobile backend and needs to estimate the monthly cost of 10 EC2 instances, 2 RDS databases, and 5 TB of S3 storage before provisioning resources.",
    question: "Which AWS tool enables modeling and estimating monthly architectural costs before creating resources?",
    options: [
      { id: 'A', text: "AWS Pricing Calculator" },
      { id: 'B', text: "AWS Cost and Usage Report" },
      { id: 'C', text: "AWS Budgets" },
      { id: 'D', text: "AWS Cost Explorer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Pricing Calculator is a web-based planning tool that allows you to explore AWS services and create detailed cost estimates for your architecture use cases before deploying resources.",
    referenceUrl: "https://calculator.aws/",
    tags: ["Pricing Calculator", "Cost Estimation", "Billing", "FinOps"]
  },
  {
    id: "aws-clf-88",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "Disaster Recovery: Pilot Light Strategy",
    scenario: "An enterprise wants a cost-effective disaster recovery strategy where a minimal version of the core environment (such as an idle RDS replica) runs continuously in a secondary Region, while compute instances are launched only if a disaster occurs.",
    question: "Which disaster recovery strategy maintains a minimal core environment running in the recovery Region that can be quickly scaled up during a failover?",
    options: [
      { id: 'A', text: "Backup and Restore" },
      { id: 'B', text: "Warm Standby" },
      { id: 'C', text: "Pilot Light" },
      { id: 'D', text: "Multi-Region Active-Active" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a Pilot Light disaster recovery strategy, core elements (such as databases and data replication) are kept active in the DR Region, while other compute resources (EC2 instances) are provisioned and scaled out only when needed during an outage.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "Pilot Light", "Cloud Concepts", "Resilience"]
  },
  {
    id: "aws-clf-89",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS CloudHSM for Dedicated Hardware Security Modules",
    scenario: "A government agency requires dedicated, single-tenant, FIPS 140-2 Level 3 validated physical cryptographic hardware devices where the customer retains exclusive administrative control over encryption keys.",
    question: "Which AWS service provides dedicated physical Hardware Security Modules (HSMs) in the AWS Cloud?",
    options: [
      { id: 'A', text: "AWS Certificate Manager" },
      { id: 'B', text: "AWS CloudHSM" },
      { id: 'C', text: "AWS Secrets Manager" },
      { id: 'D', text: "AWS KMS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on dedicated, single-tenant, FIPS 140-2 Level 3 validated hardware under your exclusive control.",
    referenceUrl: "https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html",
    tags: ["CloudHSM", "HSM", "FIPS", "Security", "Encryption"]
  },
  {
    id: "aws-clf-90",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Object Lock for WORM Compliance",
    scenario: "A healthcare provider must store patient records in Amazon S3 in a Write Once, Read Many (WORM) format to prevent objects from being deleted or overwritten for a mandatory 7-year retention period.",
    question: "Which Amazon S3 feature prevents object deletion and modification during a specified retention period?",
    options: [
      { id: 'A', text: "Amazon S3 Object Lock" },
      { id: 'B', text: "AWS Backup Vault Lock" },
      { id: 'C', text: "S3 Bucket Policies" },
      { id: 'D', text: "S3 Versioning alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Object Lock enables you to store objects using a WORM model to prevent an object from being deleted or overwritten for a fixed amount of time or indefinitely, complying with regulatory mandates such as SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3", "Object Lock", "WORM", "Compliance", "Storage"]
  },
  {
    id: "aws-clf-91",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Simple Storage Service (S3) Lifecycle Policies",
    scenario: "An image processing company wants to store raw photos in S3 Standard for 30 days, move them to S3 Standard-IA for 60 days, and finally transition them to S3 Glacier Flexible Retrieval before permanent deletion after 1 year.",
    question: "Which Amazon S3 feature automates object transitions between storage classes based on predefined age rules?",
    options: [
      { id: 'A', text: "S3 Intelligent-Tiering" },
      { id: 'B', text: "S3 Storage Lens" },
      { id: 'C', text: "S3 Lifecycle Management" },
      { id: 'D', text: "S3 Batch Operations" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "S3 Lifecycle Management enables you to define lifecycle configuration rules to automatically transition objects to more cost-effective storage classes or expire them after specific retention periods.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html",
    tags: ["S3", "Lifecycle Policies", "Cost Optimization", "Storage"]
  },
  {
    id: "aws-clf-92",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS IAM Identity Center (Successor to Single Sign-On)",
    scenario: "An organization with 40 AWS accounts wants to provide its employees with centralized single sign-on (SSO) access to all accounts and third-party SAML 2.0 applications using their corporate Okta or Microsoft Active Directory credentials.",
    question: "Which AWS service provides centralized identity and single sign-on access management across multiple AWS accounts?",
    options: [
      { id: 'A', text: "AWS Secrets Manager" },
      { id: 'B', text: "AWS IAM Identity Center" },
      { id: 'C', text: "Amazon Cognito" },
      { id: 'D', text: "AWS Directory Service" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create or connect your workforce identities and manage their access centrally across AWS accounts and cloud applications.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html",
    tags: ["IAM Identity Center", "SSO", "Identity", "Security"]
  },
  {
    id: "aws-clf-93",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Cognito User Pools vs Identity Pools",
    scenario: "A mobile development team needs a service that provides user sign-up, sign-in, social login (Google, Apple, Facebook), and user profile management for their consumer mobile app.",
    question: "Which AWS service provides user directories, authentication, and token issuance for web and mobile applications?",
    options: [
      { id: 'A', text: "AWS Directory Service" },
      { id: 'B', text: "Amazon Cognito User Pools" },
      { id: 'C', text: "AWS IAM" },
      { id: 'D', text: "Amazon Cognito Identity Pools" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Cognito User Pools are user directories that provide sign-up and sign-in options for web and mobile application users, including built-in support for Multi-Factor Authentication (MFA) and social identity federation.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
    tags: ["Cognito", "Authentication", "Mobile", "Security"]
  },
  {
    id: "aws-clf-94",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon S3 Storage Lens for Organization-Wide Visibility",
    scenario: "A storage administrator needs a centralized analytics dashboard across all S3 buckets in an AWS Organization to identify cost-optimization opportunities, uncover non-encrypted buckets, and monitor activity trends.",
    question: "Which Amazon S3 analytics feature provides organization-wide visibility into object storage usage and activity metrics with actionable recommendations?",
    options: [
      { id: 'A', text: "Amazon S3 Storage Lens" },
      { id: 'B', text: "Amazon S3 Inventory" },
      { id: 'C', text: "Amazon CloudWatch Metrics" },
      { id: 'D', text: "AWS Trusted Advisor" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon S3 Storage Lens provides organization-wide visibility into object storage usage and activity trends, generating contextual insights and actionable recommendations to optimize storage costs and apply security best practices.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html",
    tags: ["S3", "Storage Lens", "Analytics", "FinOps", "Storage"]
  },
  {
    id: "aws-clf-95",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Cost Anomaly Detection",
    scenario: "A finance manager wants machine learning algorithms to continuously analyze billing trends and automatically alert the team when unexpected spending anomalies occur in an account.",
    question: "Which AWS Cost Management service uses machine learning to identify unexpected cost spikes and root causes?",
    options: [
      { id: 'A', text: "AWS Budgets" },
      { id: 'B', text: "AWS Cost Explorer" },
      { id: 'C', text: "AWS Pricing Calculator" },
      { id: 'D', text: "AWS Cost Anomaly Detection" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Cost Anomaly Detection uses advanced machine learning models to identify unexpected spending spikes and their root causes, sending automated alerts to help prevent unexpected bills.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/CostAnomalyDetection.html",
    tags: ["Cost Anomaly Detection", "FinOps", "Billing", "Machine Learning"]
  },
  {
    id: "aws-clf-96",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Step Functions for Visual Workflow Orchestration",
    scenario: "An enterprise workflow involves calling multiple microservices, executing AWS Lambda functions in sequence, handling errors, and inserting conditional retry logic based on execution outputs.",
    question: "Which AWS service allows you to visually orchestrate and coordinate distributed microservices and serverless components using state machines?",
    options: [
      { id: 'A', text: "AWS Step Functions" },
      { id: 'B', text: "Amazon SQS" },
      { id: 'C', text: "AWS EventBridge" },
      { id: 'D', text: "Amazon SNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Step Functions is a low-code visual workflow service used to orchestrate AWS services, automate business processes, and build serverless applications with state machines.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
    tags: ["Step Functions", "Workflow", "Serverless", "Orchestration"]
  },
  {
    id: "aws-clf-97",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon API Gateway for Managed RESTful and WebSocket Endpoints",
    scenario: "A development team wants to create, publish, maintain, monitor, and secure REST and WebSocket APIs at any scale to act as a front door for applications running on AWS Lambda.",
    question: "Which fully managed AWS service acts as an entry point for applications to access backend services and Lambda functions?",
    options: [
      { id: 'A', text: "Amazon API Gateway" },
      { id: 'B', text: "Amazon CloudFront" },
      { id: 'C', text: "Amazon Route 53" },
      { id: 'D', text: "Application Load Balancer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale, handling traffic management, CORS, authorization, and throttling.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html",
    tags: ["API Gateway", "Serverless", "REST", "Networking"]
  },
  {
    id: "aws-clf-98",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Systems Manager Session Manager for Bastion-less EC2 Access",
    scenario: "A security engineer mandates that administrators must be able to securely connect to private Amazon EC2 instances via an interactive browser shell without opening inbound SSH port 22 or managing bastion hosts.",
    question: "Which AWS Systems Manager capability allows secure shell access to EC2 instances without requiring inbound firewall ports or public IP addresses?",
    options: [
      { id: 'A', text: "EC2 Instance Connect" },
      { id: 'B', text: "AWS Systems Manager Session Manager" },
      { id: 'C', text: "AWS Client VPN" },
      { id: 'D', text: "AWS Direct Connect" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Session Manager provides secure and auditable instance management without needing to open inbound ports, maintain bastion hosts, or manage SSH keys.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
    tags: ["Session Manager", "Systems Manager", "Security", "EC2"]
  },
  {
    id: "aws-clf-99",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Kendra Intelligent Search Service",
    scenario: "An enterprise wants to deploy an intelligent enterprise search service powered by machine learning to allow employees to find documentation across internal wikis, S3 buckets, and SharePoint using natural language questions.",
    question: "Which AWS service provides an intelligent document search service powered by machine learning?",
    options: [
      { id: 'A', text: "Amazon Kendra" },
      { id: 'B', text: "Amazon OpenSearch Service" },
      { id: 'C', text: "Amazon Textract" },
      { id: 'D', text: "Amazon Comprehend" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon Kendra is an intelligent search service powered by machine learning that enables organizations to provide natural language search capabilities across structured and unstructured content repositories.",
    referenceUrl: "https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html",
    tags: ["Amazon Kendra", "Search", "Machine Learning", "AI"]
  },
  {
    id: "aws-clf-100",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Adoption Framework: Governance Perspective",
    scenario: "A Chief Financial Officer (CFO) and Chief Risk Officer (CRO) are establishing cloud cost governance policies, risk management oversight, and service portfolio management standards.",
    question: "Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on program management, financial management, and license management governance?",
    options: [
      { id: 'A', text: "Governance Perspective" },
      { id: 'B', text: "Business Perspective" },
      { id: 'C', text: "Platform Perspective" },
      { id: 'D', text: "Security Perspective" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Governance Perspective of the AWS CAF provides capabilities to help orchestrate cloud initiatives while maximizing organizational benefits and minimizing transformation-related risks through cost management, license management, and portfolio management.",
    referenceUrl: "https://aws.amazon.com/professional-services/CAF/",
    tags: ["CAF", "Governance", "Cloud Concepts"]
  }
];

export default AWS_CLF_QUESTIONS_4;
