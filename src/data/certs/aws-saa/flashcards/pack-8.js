export const AWS_SAA_FLASHCARDS_8 = [
  {
    id: 'aws-saa-fc-176',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon MQ Active/Standby Broker Architecture',
    hint: 'High availability across 2 AZs backed by shared EFS storage.',
    back: 'Provisions two Apache ActiveMQ brokers across two AZs with shared Amazon EFS storage. Automatically fails over to the standby broker if the active broker fails, preserving standard JMS/AMQP messaging protocols with zero code changes.',
    tags: ['Amazon MQ', 'ActiveMQ', 'High Availability', 'Resilience']
  },
  {
    id: 'aws-saa-fc-177',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Multi-Region Active-Active REST APIs with Route 53 and Regional API Gateway',
    hint: 'Latency routing records pointing to regional API Gateway endpoints.',
    back: 'Deploy identical Regional API Gateway endpoints in multiple AWS regions. Use <strong>Route 53 Latency-based routing</strong> with Route 53 health checks to route users to the nearest healthy region and fail over automatically if an outage occurs.',
    tags: ['API Gateway', 'Route 53', 'Latency Routing', 'Multi-Region', 'Resilience']
  },
  {
    id: 'aws-saa-fc-178',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Multi-Region Kinesis Data Streams Replication Pattern',
    hint: 'Asynchronous Lambda forwarder consumer replicating to secondary region stream.',
    back: 'Because Kinesis lacks native cross-region replication, deploy a dedicated <strong>AWS Lambda consumer</strong> in the primary region that reads from the primary stream and writes records asynchronously to a secondary Kinesis stream in the DR region.',
    tags: ['Kinesis', 'Lambda', 'Multi-Region', 'Disaster Recovery']
  },
  {
    id: 'aws-saa-fc-179',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Backup vs Native RDS Automated Backups — retention limits',
    hint: '35 days max for native RDS vs multi-year centralized compliance for AWS Backup.',
    back: 'Native RDS automated backups have a hard maximum retention limit of <strong>35 days</strong>. <strong>AWS Backup</strong> enables centralized, policy-based retention schedules for <strong>multiple years (e.g. 3–10 years)</strong> with cross-region and cross-account copies.',
    tags: ['AWS Backup', 'RDS', 'Disaster Recovery', 'Compliance']
  },
  {
    id: 'aws-saa-fc-180',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Weighted Routing — Canary Deployment Pattern',
    hint: 'Percentage traffic shifting (e.g. 90/10) to test new versions.',
    back: 'Assigns integer weights (0–255) to multiple resource records for the same DNS domain. Setting weight 90 on v1 and 10 on v2 directs ~10% of user traffic to the canary release to test performance before scaling up.',
    tags: ['Route 53', 'Weighted Routing', 'Canary', 'Resilience']
  },
  {
    id: 'aws-saa-fc-181',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon FSx for NetApp ONTAP — supported protocols and features',
    hint: 'NFS, SMB, and iSCSI unified storage with deduplication and tiering.',
    back: 'Fully managed NetApp ONTAP storage providing unified multi-protocol support (<strong>NFS, SMB, iSCSI</strong>), enterprise snapshots, compression, deduplication, and automatic capacity pool tiering to low-cost elastic storage.',
    tags: ['FSx for ONTAP', 'NFS', 'SMB', 'iSCSI', 'Storage', 'Performance']
  },
  {
    id: 'aws-saa-fc-182',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon S3 Transfer Acceleration vs S3 Multipart Upload',
    hint: 'Edge POP network routing vs parallelized multi-part chunk uploading.',
    back: '• <strong>Transfer Acceleration</strong>: routes uploads over the optimized private AWS global network via CloudFront edge locations.<br>• <strong>Multipart Upload</strong>: splits large files (>100 MB) into chunks uploaded concurrently in parallel.',
    tags: ['S3', 'Transfer Acceleration', 'Multipart Upload', 'Performance']
  },
  {
    id: 'aws-saa-fc-183',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'DynamoDB GSI Overloading — what is it and why use it?',
    hint: 'Single GSI indexing generic keys (GSI-PK, GSI-SK) for multiple entity access patterns.',
    back: 'A single-table design pattern where a single Global Secondary Index uses generic attribute names (<code>GSI1-PK</code>, <code>GSI1-SK</code>). Multiple entity types store different composite values in these attributes, serving dozens of query patterns under 1 GSI quota.',
    tags: ['DynamoDB', 'GSI Overloading', 'Single-Table Design', 'Performance']
  },
  {
    id: 'aws-saa-fc-184',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Redshift Concurrency Scaling — how does it handle query bursts?',
    hint: 'Automatically adds transient cluster capacity during reporting rushes.',
    back: 'Automatically spins up transient cluster capacity in seconds when read query queues build up during peak hours, providing virtually unlimited concurrency with zero downtime. Clusters earn 1 hour of free Concurrency Scaling daily.',
    tags: ['Redshift', 'Concurrency Scaling', 'Data Warehouse', 'Performance']
  },
  {
    id: 'aws-saa-fc-185',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Functions vs Lambda@Edge — execution latency comparison',
    hint: 'Sub-millisecond lightweight JS at edge vs full Node.js/Python at regional caches.',
    back: '<strong>CloudFront Functions</strong>: runs in < 1ms at 600+ edge locations for lightweight header/URL rewrites at 1/6th cost. <strong>Lambda@Edge</strong>: runs in regional edge caches (up to 30s) for complex compute, body inspection, and network calls.',
    tags: ['CloudFront Functions', 'Lambda@Edge', 'Performance', 'Edge Compute']
  },
  {
    id: 'aws-saa-fc-186',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Enforcing SSL/TLS on Amazon RDS PostgreSQL (`rds.force_ssl`)',
    hint: 'DB parameter group parameter enforcing encrypted connections.',
    back: 'Setting <code>rds.force_ssl = 1</code> in the custom RDS DB Parameter Group forces the PostgreSQL database engine to require SSL/TLS on all incoming client connections, immediately rejecting plaintext attempts.',
    tags: ['RDS', 'SSL/TLS', 'PostgreSQL', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-187',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Firewall Manager — central policy management scope',
    hint: 'Central configuration of WAF, Shield, Network Firewall, Security Groups across Org.',
    back: 'Centrally configures and deploys security policies across all accounts in AWS Organizations: <strong>AWS WAF rules, AWS Shield Advanced, AWS Network Firewall, Route 53 Resolver DNS Firewall, and VPC Security Group baselines</strong>.',
    tags: ['Firewall Manager', 'AWS WAF', 'AWS Organizations', 'Security']
  },
  {
    id: 'aws-saa-fc-188',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'IAM Session Policies with STS AssumeRole — dynamic least-privilege scoping',
    hint: 'Passing inline policy to restrict role session to dynamic user prefix.',
    back: 'Pass an inline <strong>Session Policy</strong> when calling <code>sts:AssumeRole</code>. The resulting temporary credentials have permissions equal to the intersection of the role\'s identity policy and the session policy (e.g. limiting S3 access strictly to <code>/tenants/${tenantId}/*</code>).',
    tags: ['STS', 'Session Policies', 'S3', 'Security']
  },
  {
    id: 'aws-saa-fc-189',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Systems Manager Session Manager — security advantages over SSH',
    hint: 'No open inbound ports (port 22 closed), no bastion hosts, full S3 audit logging.',
    back: 'Provides browser/CLI shell access via the SSM Agent over outbound HTTPS (port 443). <strong>Requires zero open inbound ports on security groups, eliminates SSH keys and bastions</strong>, and logs all executed session commands to S3 / CloudWatch.',
    tags: ['Systems Manager', 'Session Manager', 'SSH', 'Security']
  },
  {
    id: 'aws-saa-fc-190',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'SSM Parameter Store SecureString vs Secrets Manager — key difference',
    hint: 'Free standard KMS encrypted parameters vs managed rotation for databases.',
    back: '<strong>Parameter Store SecureString</strong>: free standard parameters encrypted with KMS, ideal for configuration values and static keys. <strong>Secrets Manager</strong>: $0.40/secret/month, designed for automated RDS/Aurora credential rotation and fine-grained cross-account sharing.',
    tags: ['Parameter Store', 'Secrets Manager', 'KMS', 'Security']
  },
  {
    id: 'aws-saa-fc-191',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Spot Instances for SQS Worker Queues — cost optimization pattern',
    hint: 'Stateless workers, SQS visibility timeout absorbs interruptions.',
    back: 'Spot Instances provide up to 90% savings. When paired with SQS queues, an instance interruption causes the processing message to simply re-appear in the queue after the visibility timeout expires, ensuring <strong>zero data loss at minimum compute cost</strong>.',
    tags: ['EC2', 'Spot Instances', 'SQS', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-192',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Kinesis Data Firehose Buffer Hints — Size vs Interval',
    hint: 'Buffer incoming data up to 128 MB or 15 minutes before delivering to S3.',
    back: 'Firehose buffers incoming streaming data based on <strong>Buffer Size (1–128 MB)</strong> and <strong>Buffer Interval (60–900 seconds)</strong>, delivering files to Amazon S3 whenever whichever threshold is met first.',
    tags: ['Kinesis Data Firehose', 'Buffer Hints', 'Streaming', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-193',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Budgets Actions — automated response mechanisms',
    hint: 'Attaching SCPs, applying IAM policies, or stopping EC2/RDS via SSM.',
    back: 'Automatically executes when budgets are breached: 1) <strong>Run SSM Automation documents</strong> (e.g. stop EC2/RDS instances), 2) <strong>Apply IAM policies</strong> (e.g. revoke permissions), 3) <strong>Attach Service Control Policies (SCPs)</strong> to member accounts.',
    tags: ['AWS Budgets', 'Budgets Actions', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-194',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'NAT Gateway Cost Optimization in Non-Production Environments',
    hint: 'Single NAT Gateway across all AZs vs 1 per AZ.',
    back: 'In non-production/development VPCs, deploy a <strong>single NAT Gateway in one public subnet</strong> and route outbound traffic from all private subnets to it, eliminating redundant hourly charges for idle per-AZ NAT Gateways.',
    tags: ['NAT Gateway', 'VPC', 'Cost Optimization', 'FinOps']
  },
  {
    id: 'aws-saa-fc-195',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'AWS Cost Categories — business dimension mapping',
    hint: 'Grouping costs by Business Unit, Department, Cost Center.',
    back: 'Allows creating custom business rules that group costs based on account IDs, tags, services, and charge types into meaningful business dimensions (e.g. <strong>Department: Engineering, Environment: Production</strong>) in Cost Explorer.',
    tags: ['Cost Categories', 'Cost Explorer', 'FinOps', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-196',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'AWS Storage Gateway: Volume Gateway Cached vs Stored mode',
    hint: 'All data in S3 with local cache vs all data local with S3 snapshots.',
    back: '• <strong>Cached Mode</strong>: primary data stored in S3; frequently accessed data cached locally on-premises (minimizes local storage hardware).<br>• <strong>Stored Mode</strong>: entire dataset stored locally on-premises; asynchronously backed up to S3 as EBS snapshots.',
    tags: ['Storage Gateway', 'Volume Gateway', 'Hybrid', 'Resilience']
  },
  {
    id: 'aws-saa-fc-197',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Redshift Data Sharing — live cross-cluster queries',
    hint: 'Live read-only sharing without copying or moving data.',
    back: 'Enables live, transactional, read-only data sharing across Amazon Redshift clusters within the same or different AWS accounts <strong>without copying or moving data</strong>, eliminating ETL bottlenecks across business units.',
    tags: ['Redshift', 'Data Sharing', 'Data Warehouse', 'Performance']
  },
  {
    id: 'aws-saa-fc-198',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'AWS Lake Formation Fine-Grained Access Control',
    hint: 'Column-level and row-level filtering on S3 data lakes.',
    back: 'Enforces centralized, granular security policies down to the <strong>table, column, and row level</strong> for data stored in Amazon S3, controlling access for Amazon Athena, Amazon EMR, and Amazon Redshift Spectrum without data duplication.',
    tags: ['Lake Formation', 'Data Lake', 'Security', 'Compliance']
  },
  {
    id: 'aws-saa-fc-199',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'DynamoDB Standard-IA Table Class — cost savings threshold',
    hint: 'Up to 60% lower storage costs for infrequently accessed tables.',
    back: 'Reduces storage costs by up to <strong>60%</strong> compared to DynamoDB Standard, designed for tables where storage represents >50% of the database cost and reads/writes are infrequent (e.g. historical orders, telemetry logs).',
    tags: ['DynamoDB', 'Standard-IA', 'Table Class', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-200',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Client-Side Encryption vs Server-Side Encryption in Amazon S3',
    hint: 'Data encrypted in application memory before network transmission vs encrypted by S3.',
    back: '• <strong>Client-Side Encryption</strong>: plaintext is encrypted locally in client memory using AWS Encryption SDK before sending over the network; AWS receives only ciphertext.<br>• <strong>Server-Side Encryption</strong>: S3 encrypts objects upon receipt.',
    tags: ['Client-Side Encryption', 'KMS', 'S3', 'Security']
  }
];

export default AWS_SAA_FLASHCARDS_8;
