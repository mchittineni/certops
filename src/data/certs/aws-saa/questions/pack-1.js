export const AWS_SAA_QUESTIONS = [
  {
    id: 'aws-saa-1',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    domainName: 'Design Resilient Architectures',
    title: 'Multi-AZ Database Failover and Read Scalability',
    scenario: 'A company runs an e-commerce website on AWS using Amazon EC2 instances behind an Application Load Balancer (ALB) and an Amazon RDS for MySQL Multi-AZ DB instance. The marketing team plans a flash sale, and the application is expected to experience a 10x surge in read traffic, while write volume will remain moderate.',
    question: 'Which architecture change is the MOST cost-effective and operationally efficient way to scale the database tier to handle the surge?',
    options: [
      { id: 'A', text: 'Convert the RDS Multi-AZ DB instance to an Amazon DynamoDB table with on-demand capacity.' },
      { id: 'B', text: 'Create Amazon RDS Read Replicas in the same or multiple Availability Zones and update the application connection string to route read queries to the replica endpoints.' },
      { id: 'C', text: 'Scale up the RDS instance class to the largest db.m5 instance type and enable provisioned IOPS.' },
      { id: 'D', text: 'Place an Amazon ElastiCache Redis cluster between the EC2 instances and modify RDS Multi-AZ to a single-AZ deployment during the flash sale to reduce latency.' }
    ],
    correctAnswers: ['B'],
    type: 'single',
    explanation: 'Amazon RDS Read Replicas provide horizontal read scalability for read-heavy database workloads. By offloading read queries to one or more Read Replicas, the primary DB instance can handle write operations without degradation. Converting to DynamoDB requires complete application rewriting (incorrect A), vertical scaling is expensive and doesn\'t distribute reads (incorrect C), and disabling Multi-AZ removes high availability (incorrect D).',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html',
    tags: ['RDS', 'Read Replicas', 'Multi-AZ', 'Scalability', 'Databases']
  },
  {
    id: 'aws-saa-2',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    domainName: 'Design Secure Applications and Architectures',
    title: 'Secure S3 Bucket Access via Private VPC',
    scenario: 'A financial company has an application running on Amazon EC2 instances within a private subnet. The application needs to upload sensitive customer transaction logs directly to an Amazon S3 bucket. Security compliance mandates that the data must not traverse the public internet, and EC2 instances must not have public IP addresses or NAT Gateway access to S3.',
    question: 'Which solution meets these security and architectural requirements?',
    options: [
      { id: 'A', text: 'Create an Amazon S3 Gateway VPC Endpoint in the VPC and update the subnet route tables with a route targeting the gateway endpoint.' },
      { id: 'B', text: 'Deploy an AWS Direct Connect connection and route S3 traffic through an on-premises firewall.' },
      { id: 'C', text: 'Attach an Internet Gateway to the VPC and configure an egress-only internet gateway for IPv4 S3 traffic.' },
      { id: 'D', text: 'Assign Elastic IP addresses to all EC2 instances and restrict the S3 bucket policy using aws:SourceIp conditions.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'An Amazon S3 Gateway VPC Endpoint enables instances in a private subnet to securely communicate with Amazon S3 across the AWS private network backbone without requiring an Internet Gateway, NAT Gateway, or public IPs. It is configured as a target route in the VPC route table at no additional data transfer cost.',
    referenceUrl: 'https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html',
    tags: ['VPC', 'S3', 'Gateway Endpoint', 'Security', 'Networking']
  },
  {
    id: 'aws-saa-3',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    domainName: 'Design Resilient Architectures',
    title: 'Decoupling Asynchronous Image Processing',
    scenario: 'A photo-sharing web application receives thousands of high-resolution images daily. Currently, the web tier processes thumbnail generation synchronously, causing slow HTTP response times and timeouts when large batches are uploaded simultaneously.',
    question: 'How should a Solutions Architect redesign the architecture to decouple the web tier and ensure reliable processing? (Choose TWO)',
    options: [
      { id: 'A', text: 'Store the uploaded images in an Amazon S3 bucket and send a message containing image metadata to an Amazon SQS standard queue.' },
      { id: 'B', text: 'Configure an Auto Scaling Group of worker EC2 instances (or AWS Lambda functions) that poll the SQS queue and process thumbnails asynchronously.' },
      { id: 'C', text: 'Increase the HTTP timeout on the Application Load Balancer to 300 seconds.' },
      { id: 'D', text: 'Use an Amazon Kinesis Data Firehose delivery stream to write directly to Amazon EBS volumes attached to the web servers.' },
      { id: 'E', text: 'Replace the ALB with a Network Load Balancer (NLB) to handle TCP-level backpressure.' }
    ],
    correctAnswers: ['A', 'B'],
    type: 'multiple',
    explanation: 'Decoupling via Amazon SQS and Amazon S3 creates an event-driven, fault-tolerant architecture. The web tier stores the raw image in S3, places a job message in SQS, and immediately responds to the user. Worker nodes or AWS Lambda functions asynchronously process images from the queue at their own pace without dropping requests.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html',
    tags: ['SQS', 'S3', 'Decoupling', 'Event-Driven', 'Resilience']
  },
  {
    id: 'aws-saa-4',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    domainName: 'Design Cost-Optimized Architectures',
    title: 'Cost-Optimized Storage Lifecycle Management',
    scenario: 'A healthcare provider stores diagnostic imaging files in Amazon S3 Standard. Analysis shows the files are accessed frequently for the first 30 days, occasionally for the following 60 days, and then effectively never — but regulation requires they be retained for seven years and be retrievable within 12 hours.',
    question: 'Which S3 Lifecycle configuration meets the requirements at the lowest cost?',
    options: [
      { id: 'A', text: 'Transition objects to S3 Standard-Infrequent Access after 30 days, to S3 Glacier Deep Archive after 90 days, and expire them after 7 years.' },
      { id: 'B', text: 'Transition objects to S3 One Zone-Infrequent Access after 30 days and expire them after 7 years.' },
      { id: 'C', text: 'Transition objects to S3 Glacier Deep Archive after 1 day and expire them after 7 years.' },
      { id: 'D', text: 'Keep all objects in S3 Standard and enable S3 Versioning with a 7-year noncurrent version expiration.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'The access pattern maps directly onto a tiered lifecycle: S3 Standard-IA for the occasional-access window after 30 days, then S3 Glacier Deep Archive for the long regulatory tail, whose standard retrieval completes within 12 hours as required. One Zone-IA (B) stores a single-AZ copy and never reaches archive pricing for the seven-year tail. Archiving after one day (C) breaks the 30-day frequent-access requirement and would incur early-deletion and retrieval charges. Staying in S3 Standard (D) is the most expensive option and versioning does not reduce storage cost.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html',
    tags: ['S3', 'Lifecycle', 'Glacier', 'Cost Optimization']
  },
  {
    id: 'aws-saa-5',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    domainName: 'Design High-Performing Architectures',
    title: 'Low Latency Global Content Delivery and Dynamic Acceleration',
    scenario: 'A SaaS company serves a single-page application from Amazon S3 and a REST API from an Application Load Balancer in us-east-1. Users in Europe and Asia report slow initial page loads and high API latency. The API is dynamic and cannot be cached, and the team also needs a static anycast IP address to give enterprise customers for firewall allow-listing.',
    question: 'Which combination of services meets these requirements? (Choose TWO)',
    options: [
      { id: 'A', text: 'Serve the single-page application through an Amazon CloudFront distribution with the S3 bucket as the origin.' },
      { id: 'B', text: 'Put AWS Global Accelerator in front of the Application Load Balancer to route dynamic API traffic over the AWS backbone from static anycast IP addresses.' },
      { id: 'C', text: 'Create Route 53 latency-based routing records pointing at the single us-east-1 load balancer.' },
      { id: 'D', text: 'Enable S3 Transfer Acceleration on the bucket hosting the single-page application.' },
      { id: 'E', text: 'Increase the Application Load Balancer idle timeout and enable HTTP keep-alive on the API.' }
    ],
    correctAnswers: ['A', 'B'],
    type: 'multiple',
    explanation: 'CloudFront caches the static single-page application at edge locations, removing the round trip to us-east-1 for page loads. AWS Global Accelerator handles the dynamic, non-cacheable API: traffic enters the AWS backbone at the nearest edge and it provides two static anycast IP addresses for allow-listing — the specific requirement CloudFront does not satisfy. Latency-based routing (C) cannot help when only one regional endpoint exists. S3 Transfer Acceleration (D) optimises uploads to a bucket, not page delivery. Timeout tuning (E) does not reduce network distance.',
    referenceUrl: 'https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html',
    tags: ['CloudFront', 'Global Accelerator', 'Latency', 'Performance']
  },
  {
    id: 'aws-saa-6',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    domainName: 'Design Secure Applications and Architectures',
    title: 'Centralized Secret Rotation for RDS Database Credentials',
    scenario: 'An application on Amazon ECS connects to an Amazon RDS for PostgreSQL database using a password stored in a plaintext environment variable. Security has mandated that the credential be encrypted at rest, retrieved at runtime, and rotated automatically every 30 days without an application outage or code deployment.',
    question: 'Which solution meets these requirements with the least operational overhead?',
    options: [
      { id: 'A', text: 'Store the credential in AWS Secrets Manager with automatic rotation enabled for the RDS database, and grant the ECS task role permission to retrieve it at runtime.' },
      { id: 'B', text: 'Store the credential in an SSM Parameter Store String parameter and write a scheduled Lambda function to overwrite it every 30 days.' },
      { id: 'C', text: 'Encrypt the password with AWS KMS, commit the ciphertext to the container image, and rebuild the image monthly.' },
      { id: 'D', text: 'Store the credential in a DynamoDB table encrypted with a customer managed key and have the application read it on each connection.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'AWS Secrets Manager is purpose-built for this: secrets are encrypted with KMS, retrieved through the API using the ECS task role, and it ships managed rotation for supported RDS engines that updates both the secret and the database user on a schedule. Parameter Store (B) has no built-in rotation, so you own the Lambda and its failure modes. Baking ciphertext into the image (C) forces a rebuild and deployment for every rotation. A DynamoDB table (D) reimplements a secrets store without rotation or audit support.',
    referenceUrl: 'https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html',
    tags: ['Secrets Manager', 'KMS', 'Rotation', 'Security']
  },
  {
    id: 'aws-saa-7',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    domainName: 'Design Resilient Architectures',
    title: 'Durability Tier for Static Website Assets',
    scenario: 'A startup hosts the static assets (HTML, CSS, JavaScript, product images) for its marketing site and needs eleven nines of durability without managing any servers or file systems.',
    question: 'Which AWS service should host these static assets?',
    options: [
      { id: 'A', text: 'Amazon S3 with static website hosting enabled.' },
      { id: 'B', text: 'An Amazon EBS gp3 volume attached to a single EC2 instance running NGINX.' },
      { id: 'C', text: 'An Amazon EFS file system mounted by an Auto Scaling group of EC2 instances.' },
      { id: 'D', text: 'An Amazon RDS for PostgreSQL instance storing the files as BLOB columns.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Amazon S3 provides 99.999999999% (11 nines) durability, serverless static website hosting, and virtually unlimited scale at object-storage prices. EBS is single-AZ block storage tied to one instance, EFS adds needless cost and servers for read-only static content, and storing web assets as database BLOBs is an anti-pattern.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html',
    tags: ['S3', 'Static Website', 'Durability']
  },
  {
    id: 'aws-saa-8',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    domainName: 'Design Secure Applications and Architectures',
    title: 'Granting an EC2 Application Access to S3',
    scenario: 'An application on an Amazon EC2 instance must read objects from an S3 bucket. A developer proposes baking long-lived IAM access keys into the application configuration file.',
    question: 'What is the AWS-recommended way to grant this access?',
    options: [
      { id: 'A', text: 'Attach an IAM role with an S3 read policy to the EC2 instance profile and let the SDK retrieve temporary credentials.' },
      { id: 'B', text: 'Store the IAM user access keys in the application config file and rotate them quarterly.' },
      { id: 'C', text: 'Make the S3 bucket public and restrict access by the instance User-Agent header.' },
      { id: 'D', text: 'Embed the root account access keys in an environment variable on the instance.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'An IAM role attached through the instance profile lets the EC2 metadata service issue automatically rotated, short-lived credentials that the AWS SDKs pick up with no code changes and no secrets on disk. Long-lived keys, public buckets, and root credentials are all explicit violations of IAM best practice.',
    referenceUrl: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html',
    tags: ['IAM', 'Roles', 'EC2', 'Security']
  },
  {
    id: 'aws-saa-9',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    domainName: 'Design Cost-Optimized Architectures',
    title: 'Purchasing Option for Interruptible Batch Processing',
    scenario: 'A media company runs nightly video transcoding jobs that are stateless, checkpoint their progress to Amazon S3, and can be safely restarted at any time. The workload runs for roughly four hours per night and the team wants the lowest possible compute cost.',
    question: 'Which EC2 purchasing option is the most cost-effective fit?',
    options: [
      { id: 'A', text: 'Spot Instances in an Auto Scaling group with multiple instance types and capacity-optimized allocation.' },
      { id: 'B', text: 'Three-year all-upfront Reserved Instances sized for the nightly peak.' },
      { id: 'C', text: 'On-Demand Instances launched and terminated by a scheduled Lambda function.' },
      { id: 'D', text: 'Dedicated Hosts to guarantee the transcoder license affinity.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Spot Instances offer up to 90% off On-Demand and are ideal for fault-tolerant, checkpointed, restartable batch work. Reserved Instances waste money on an eight-hour-per-day workload, On-Demand is roughly 4-5x the Spot price, and Dedicated Hosts are only relevant to per-socket licensing or hard tenancy requirements.',
    referenceUrl: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html',
    tags: ['EC2', 'Spot', 'Cost Optimization', 'Batch']
  },
  {
    id: 'aws-saa-10',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    domainName: 'Design High-Performing Architectures',
    title: 'Relieving Read Pressure on a Session Store',
    scenario: 'A web application stores user session state in an Amazon RDS for MySQL database. Under load, the database CPU saturates from millions of small, repetitive session lookups, while the actual transactional write volume is tiny.',
    question: 'Which change most directly removes this read pressure with the least application redesign?',
    options: [
      { id: 'A', text: 'Move session state into an Amazon ElastiCache for Redis cluster and read sessions from the cache.' },
      { id: 'B', text: 'Enable RDS Multi-AZ so the standby can absorb the session reads.' },
      { id: 'C', text: 'Increase the RDS allocated storage to raise the provisioned IOPS ceiling.' },
      { id: 'D', text: 'Enable RDS automated backups with a longer retention window.' }
    ],
    correctAnswers: ['A'],
    type: 'single',
    explanation: 'Session state is small, hot, and ephemeral - the textbook use case for an in-memory store. ElastiCache for Redis serves sub-millisecond lookups and takes the read load off RDS entirely. A Multi-AZ standby serves no traffic, more IOPS does not fix a CPU bottleneck caused by query volume, and backups are unrelated to read performance.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-cases.html',
    tags: ['ElastiCache', 'Redis', 'Caching', 'Performance']
  },
  {
    id: 'aws-saa-11',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    domainName: 'Design Resilient Architectures',
    title: 'Cross-Region Active-Passive Disaster Recovery with a Low RTO',
    scenario: 'A regulated payments platform runs on Amazon Aurora MySQL in eu-west-1. The business requires a recovery point objective of under one minute and a recovery time objective of under five minutes in a second AWS Region, without paying for a full duplicate of the application fleet during normal operation.',
    question: 'Which combination of design choices meets the RPO and RTO at the lowest steady-state cost? (Choose TWO)',
    options: [
      { id: 'A', text: 'Deploy an Aurora global database with a secondary Region read replica cluster, promotable in about a minute.' },
      { id: 'B', text: 'Run a pilot-light stack in the secondary Region with the Auto Scaling group at zero desired capacity and Route 53 failover records backed by health checks.' },
      { id: 'C', text: 'Rely on nightly Aurora automated snapshots copied cross-Region and restore on failover.' },
      { id: 'D', text: 'Run a full active-active multi-Region deployment with both Regions serving live write traffic.' },
      { id: 'E', text: 'Use AWS Backup with a 24-hour backup plan and cross-Region copy as the sole replication mechanism.' }
    ],
    correctAnswers: ['A', 'B'],
    type: 'multiple',
    explanation: 'An Aurora global database replicates with typical sub-second lag and supports managed planned failover or promotion in about a minute, satisfying the sub-minute RPO. Pairing it with a pilot-light application tier - infrastructure defined and images baked but scaled to zero - plus Route 53 health-check failover keeps steady-state cost low while still meeting a five-minute RTO. Snapshot-and-restore approaches (C, E) give an RPO measured in hours and an RTO measured in tens of minutes, and full active-active (D) meets the objectives but at roughly double the cost the question rules out.',
    referenceUrl: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html',
    tags: ['Aurora Global Database', 'Disaster Recovery', 'Route 53', 'RTO/RPO']
  }
];

export default AWS_SAA_QUESTIONS;
