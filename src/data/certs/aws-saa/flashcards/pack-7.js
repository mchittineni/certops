export const AWS_SAA_FLASHCARDS_7 = [
  {
    id: 'aws-saa-fc-151',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SQS Dead-Letter Queue (DLQ) Redrive — primary capability',
    hint: 'Bulk moving messages from DLQ back to source queue after bug fixes.',
    back: 'Allows operators to easily <strong>redrive failed messages from a DLQ back to the source queue</strong> (or a custom destination queue) for reprocessing in bulk, with automated progress inspection and zero message loss.',
    tags: ['SQS', 'DLQ', 'Redrive', 'Resilience']
  },
  {
    id: 'aws-saa-fc-152',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Geolocation Routing with Fallback Default Record',
    hint: 'Mapping continents/countries with failover fallback.',
    back: 'Routes client DNS queries based on their geographic location (continent, country, US state). A <strong>Default record</strong> is essential to handle queries from unmapped locations or act as a failover target if a specific region fails health checks.',
    tags: ['Route 53', 'Geolocation', 'Health Checks', 'DNS']
  },
  {
    id: 'aws-saa-fc-153',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Direct Connect with VPN Backup: BGP routing preference rules',
    hint: 'Direct Connect routes preferred over VPN routes automatically.',
    back: 'AWS Transit Gateway / VGW automatically prefers Direct Connect BGP routes over Site-to-Site VPN routes for the same CIDR prefix. On-premises routers enforce preference using <strong>higher BGP Local Preference or shorter AS-PATH</strong> on the Direct Connect session.',
    tags: ['Direct Connect', 'VPN', 'BGP', 'Hybrid', 'Resilience']
  },
  {
    id: 'aws-saa-fc-154',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Stateless Application Architecture — why offload session state?',
    hint: 'Enabling seamless horizontal Auto Scaling without user logout.',
    back: 'Offloading session state to an external in-memory store (e.g. <strong>Amazon ElastiCache for Redis</strong>) ensures web servers retain zero local state. Any instance can serve any user, allowing instances to scale in or terminate without dropping user sessions.',
    tags: ['Stateless', 'ElastiCache', 'Auto Scaling', 'Resilience']
  },
  {
    id: 'aws-saa-fc-155',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Saga Pattern with AWS Step Functions — handling distributed failures',
    hint: 'Coordinating microservices with compensating transactions.',
    back: 'Coordinates distributed microservice transactions across independent databases. If a step fails (e.g. payment decline), Step Functions invokes <strong>compensating transactions in reverse order</strong> (e.g. cancel flight reservation) to restore data consistency.',
    tags: ['Step Functions', 'Saga Pattern', 'Distributed Transactions', 'Resilience']
  },
  {
    id: 'aws-saa-fc-156',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS AppSync — core capabilities and data sources',
    hint: 'Managed GraphQL with real-time WebSockets and DynamoDB resolvers.',
    back: 'Fully managed <strong>GraphQL and Pub/Sub API</strong> service supporting real-time WebSocket subscriptions, offline client sync, and direct pipeline resolvers to <strong>DynamoDB, Lambda, OpenSearch, EventBridge, and HTTP endpoints</strong>.',
    tags: ['AppSync', 'GraphQL', 'DynamoDB', 'WebSockets', 'Performance']
  },
  {
    id: 'aws-saa-fc-157',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'ECS `awsvpc` Networking Mode — key security and performance advantages',
    hint: 'Dedicated ENI, private subnet IP, and Security Group per task.',
    back: 'Assigns a dedicated Elastic Network Interface (ENI) and private IPv4 address to each ECS/Fargate task. Gives tasks <strong>first-class VPC networking, dedicated Security Groups, VPC Flow Logs</strong>, and direct inter-task IP routing.',
    tags: ['ECS', 'awsvpc', 'Networking', 'Security', 'Containers']
  },
  {
    id: 'aws-saa-fc-158',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Direct Connect LAG vs MACsec Encryption',
    hint: 'Link aggregation for bandwidth vs Layer 2 hardware encryption.',
    back: '• <strong>Direct Connect LAG</strong>: bundles up to 32 physical connections at the same endpoint into a single logical high-bandwidth connection.<br>• <strong>MACsec (IEEE 802.1AE)</strong>: provides line-rate Layer 2 hardware encryption on 10G/100G Direct Connect circuits.',
    tags: ['Direct Connect', 'LAG', 'MACsec', 'Encryption', 'Networking']
  },
  {
    id: 'aws-saa-fc-159',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'AWS Batch Spot Allocation Strategy (SPOT_CAPACITY_OPTIMIZED)',
    hint: 'Minimizing interruption probability for batch container jobs.',
    back: '<code>SPOT_CAPACITY_OPTIMIZED</code> directs AWS Batch to launch Spot instances from the Spot pools with the highest available capacity, minimizing interruption rates while delivering up to 90% cost savings for batch rendering and simulations.',
    tags: ['AWS Batch', 'Spot', 'Cost Optimization', 'Performance']
  },
  {
    id: 'aws-saa-fc-160',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Athena Partition Projection — when and why to use it',
    hint: 'Avoid slow Glue Catalog GetPartitions metadata calls on millions of partitions.',
    back: 'For tables with hundreds of thousands or millions of partitions (e.g. date-partitioned IoT logs), Partition Projection calculates partition paths dynamically in memory from table properties, reducing query planning time from minutes to milliseconds.',
    tags: ['Athena', 'Partition Projection', 'Data Lake', 'Performance']
  },
  {
    id: 'aws-saa-fc-161',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Private CA (ACM Private CA) — use case and integration',
    hint: 'Private PKI for internal microservices with ACM auto-renewal.',
    back: 'Managed private certificate authority service that issues private X.509 certificates for internal microservices, private domain names, and IoT devices. Integrates with <strong>AWS Certificate Manager (ACM)</strong> for automated deployment and renewal.',
    tags: ['AWS Private CA', 'ACM', 'TLS', 'Security', 'PKI']
  },
  {
    id: 'aws-saa-fc-162',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Bucket Keys for SSE-KMS — cost reduction mechanism',
    hint: 'Reduces KMS API request costs by up to 99% using intermediate bucket keys.',
    back: 'Generates a short-lived intermediate bucket-level key used by S3 to encrypt objects, reducing KMS <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> requests from once per object to once per bucket key session, cutting KMS API costs by up to 99%.',
    tags: ['S3', 'Bucket Keys', 'KMS', 'Cost Optimization', 'Security']
  },
  {
    id: 'aws-saa-fc-163',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'S3 MFA Delete — requirements and capabilities',
    hint: 'Hardware MFA token required to permanently delete versions or disable versioning.',
    back: 'Configured on S3 versioned buckets. Requires a hardware or virtual MFA token to perform two specific actions: 1) <strong>Permanently delete an object version</strong>, and 2) <strong>Change the versioning state of the bucket</strong>.',
    tags: ['S3', 'MFA Delete', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-164',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Cross-Account Secrets Sharing with AWS Secrets Manager Resource Policies',
    hint: 'Resource-based policy on secret + KMS CMK key policy permissions.',
    back: 'Attach a <strong>Resource-based policy</strong> directly to the secret granting <code>secretsmanager:GetSecretValue</code> to external account IAM roles, and update the Customer Managed KMS Key policy granting <code>kms:Decrypt</code> to the target accounts.',
    tags: ['Secrets Manager', 'Cross-Account', 'KMS', 'Security']
  },
  {
    id: 'aws-saa-fc-165',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Amazon S3 Presigned URLs vs CloudFront Signed URLs',
    hint: 'Expiring temporary access to private objects.',
    back: '• <strong>S3 Presigned URLs</strong>: generated using IAM credentials for temporary direct S3 download/upload.<br>• <strong>CloudFront Signed URLs</strong>: generated using CloudFront key pairs / public keys for edge-cached private downloads.',
    tags: ['Presigned URLs', 'CloudFront', 'S3', 'Security']
  },
  {
    id: 'aws-saa-fc-166',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon EBS Snapshots Archive — cost and retention characteristics',
    hint: '75% discount for full point-in-time snapshots retained >90 days.',
    back: 'Low-cost storage tier for rarely accessed, full point-in-time EBS snapshots retained for 90 days or longer. Provides up to <strong>75% storage cost savings</strong> with retrieval times of 24 to 72 hours.',
    tags: ['EBS', 'Snapshots Archive', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-167',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Compute Savings Plans vs EC2 Instance Savings Plans — flexibility comparison',
    hint: 'Cross-region, cross-OS, Lambda & Fargate coverage vs single instance family in 1 region.',
    back: '<strong>Compute Savings Plans</strong> apply automatically across EC2 (all families, sizes, OS, regions), Fargate, and Lambda (up to 66% off). <strong>EC2 Instance Savings Plans</strong> apply only to a specific instance family within a single specified region (up to 72% off).',
    tags: ['Savings Plans', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-168',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Why fronting Amazon S3 with Amazon CloudFront reduces data egress costs',
    hint: 'S3 to CloudFront data transfer is $0.00, and CloudFront egress is discounted.',
    back: '1. Data transfer from S3 to CloudFront is <strong>free ($0.00/GB)</strong>.<br>2. CloudFront data transfer out to the internet is cheaper than direct S3 internet egress.<br>3. Edge caching avoids repetitive downloads from S3 entirely.',
    tags: ['CloudFront', 'S3', 'Data Egress', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-169',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon Aurora I/O-Optimized Storage — when to choose it',
    hint: 'Zero charges for read/write I/Os, up to 40% cost savings for I/O heavy workloads.',
    back: 'Ideal for I/O-intensive OLTP workloads where I/O charges exceed 25% of total database costs. Aurora I/O-Optimized includes <strong>zero charges for read and write I/O operations</strong> with fixed predictable pricing.',
    tags: ['Aurora', 'IO-Optimized', 'Cost Optimization', 'Databases']
  },
  {
    id: 'aws-saa-fc-170',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Trusted Advisor Cost Optimization checks',
    hint: 'Detecting unattached EBS, idle Elastic IPs, and idle RDS instances.',
    back: 'Scans AWS accounts to detect idle and wasteful resources: <strong>unattached EBS volumes, unassociated Elastic IP addresses, idle RDS instances, underutilized EC2 instances, and outdated snapshots</strong>.',
    tags: ['Trusted Advisor', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-171',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'FSx for Lustre Data Repository Auto-Export to S3',
    hint: 'Automatic asynchronous export of file modifications back to linked S3 bucket.',
    back: 'Automatically tracks new files, modified files, and deleted files on the FSx for Lustre file system and <strong>asynchronously exports changes back to the linked Amazon S3 bucket</strong>, keeping the S3 data lake synchronized continuously.',
    tags: ['FSx for Lustre', 'S3', 'Data Repository', 'Resilience', 'HPC']
  },
  {
    id: 'aws-saa-fc-172',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Managed Service for Apache Flink — streaming SQL windowing',
    hint: 'Tumbling, sliding, and session windows over Kinesis & Kafka streams.',
    back: 'Performs real-time stateful stream processing using Apache Flink and SQL against Kinesis Data Streams and MSK. Supports <strong>tumbling windows (fixed interval), sliding windows (overlapping interval), and session windows</strong> with sub-second latency.',
    tags: ['Kinesis Analytics', 'Apache Flink', 'Streaming', 'Performance']
  },
  {
    id: 'aws-saa-fc-173',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS WAF Web ACL attachment targets',
    hint: 'ALB, CloudFront, API Gateway, AppSync, Cognito User Pools, Verified Access.',
    back: 'AWS WAF Web ACLs can attach to: <strong>Amazon CloudFront distributions (global), Application Load Balancers, Amazon API Gateway REST APIs, AWS AppSync GraphQL APIs, Amazon Cognito User Pools, and AWS Verified Access instances</strong>.',
    tags: ['AWS WAF', 'Web ACL', 'Security', 'ALB']
  },
  {
    id: 'aws-saa-fc-174',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon EFS Lifecycle Management and EFS Infrequent Access (EFS IA)',
    hint: 'Automatic transition of cold files to save up to 92% on file storage.',
    back: 'Automatically moves files that have not been read or written for N days (e.g. 7, 14, 30 days) to the <strong>EFS Infrequent Access (IA) tier</strong>, reducing storage costs by up to <strong>92%</strong> while keeping files transparently accessible to applications.',
    tags: ['EFS', 'Lifecycle Management', 'Infrequent Access', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-175',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Injecting AWS Secrets Manager Secrets into Amazon ECS Container Tasks',
    hint: 'Using the secrets block in container definitions with Task Execution Role.',
    back: 'Reference the secret ARN in the <code>secrets</code> array of the ECS container definition. The <strong>Task Execution Role</strong> fetches the secret at container launch and injects it as an environment variable into the running container without exposing plaintext in task definitions.',
    tags: ['ECS', 'Secrets Manager', 'Task Execution Role', 'Security', 'Containers']
  }
];

export default AWS_SAA_FLASHCARDS_7;
