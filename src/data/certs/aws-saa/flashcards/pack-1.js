export const AWS_SAA_FLASHCARDS = [
  {
    id: 'aws-saa-fc-1',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Multi-AZ vs. Read Replica in Amazon RDS — when do you use each?',
    hint: 'Availability versus scalability.',
    back: 'Multi-AZ is for <strong>high availability / DR</strong>: a synchronous standby in another AZ that automatically fails over via a DNS change. The standby serves no traffic. Read Replicas are for <strong>read scalability</strong>: asynchronous copies with their own endpoints that you point read queries at. They are not a failover target unless manually promoted.',
    tags: ['RDS', 'High Availability', 'Scalability']
  },
  {
    id: 'aws-saa-fc-2',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Gateway VPC Endpoint vs. Interface VPC Endpoint (PrivateLink)',
    hint: 'Only two services use the gateway flavour.',
    back: '<strong>Gateway endpoints</strong> support only S3 and DynamoDB, are added as a route-table target, and cost nothing. <strong>Interface endpoints</strong> (PrivateLink) create an ENI with a private IP in your subnet, work for almost every AWS service plus partner/your own services, support security groups, and are billed hourly plus per GB.',
    tags: ['VPC', 'PrivateLink', 'Networking']
  },
  {
    id: 'aws-saa-fc-3',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Security Group vs. Network ACL',
    hint: 'One remembers your connections, the other does not.',
    back: '<strong>Security groups</strong> are stateful, attach to ENIs, allow rules only, and evaluate all rules together. <strong>NACLs</strong> are stateless, attach to subnets, support allow <em>and</em> deny rules, and are evaluated in rule-number order (lowest first, first match wins). Stateless means you must open the ephemeral return port range explicitly.',
    tags: ['Security Groups', 'NACL', 'Security']
  },
  {
    id: 'aws-saa-fc-4',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Name the S3 storage classes and the retrieval trade-off each makes.',
    hint: 'Six tiers plus one that decides for you.',
    back: 'Standard (frequent, ms) → Intelligent-Tiering (auto-moves, ms, small monitoring fee) → Standard-IA (infrequent, ms, 30-day min) → One Zone-IA (same but single AZ, 20% cheaper) → Glacier Instant Retrieval (ms, 90-day min) → Glacier Flexible Retrieval (minutes to 12 h) → Glacier Deep Archive (12 h, cheapest, 180-day min).',
    tags: ['S3', 'Cost Optimization', 'Storage']
  },
  {
    id: 'aws-saa-fc-5',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'ALB vs. NLB vs. Gateway Load Balancer',
    hint: 'Layer 7, layer 4, layer 3.',
    back: '<strong>ALB</strong> — layer 7, HTTP/HTTPS, host/path/header routing, WAF integration, target groups of instances/IPs/Lambda. <strong>NLB</strong> — layer 4, TCP/UDP/TLS, millions of requests per second, ultra-low latency, static and Elastic IP per AZ, preserves source IP. <strong>GWLB</strong> — layer 3, transparently inserts third-party firewall/IDS appliances into the traffic path via GENEVE.',
    tags: ['ELB', 'ALB', 'NLB', 'Performance']
  },
  {
    id: 'aws-saa-fc-6',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Which decoupling service do you reach for: SQS, SNS, EventBridge, or Kinesis?',
    hint: 'Queue, fan-out, router, stream.',
    back: '<strong>SQS</strong> — one consumer group pulls work off a durable queue, retries and DLQs included. <strong>SNS</strong> — push fan-out to many subscribers at once. <strong>EventBridge</strong> — content-based routing with rules, schemas, schedules, and SaaS/AWS-service event sources. <strong>Kinesis Data Streams</strong> — ordered, replayable shards for real-time analytics with multiple independent readers.',
    tags: ['SQS', 'SNS', 'EventBridge', 'Kinesis', 'Decoupling']
  },
  {
    id: 'aws-saa-fc-7',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'EC2 purchasing options and when each is the cost-optimal answer.',
    hint: 'Steady, flexible, interruptible, licensed.',
    back: '<strong>On-Demand</strong> — spiky or unpredictable, no commitment. <strong>Savings Plans / Reserved Instances</strong> — steady-state baseline, 1 or 3 years, up to ~72% off. <strong>Spot</strong> — fault-tolerant, stateless, batch work; up to 90% off but interrupted with a 2-minute notice. <strong>Dedicated Hosts</strong> — per-socket/per-core licensing or hard tenancy compliance requirements.',
    tags: ['EC2', 'Savings Plans', 'Spot', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-8',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'EFS vs. EBS vs. S3 vs. FSx — pick the storage service.',
    hint: 'Shared file, single block, object, Windows/HPC.',
    back: '<strong>EBS</strong> — block volume attached to one instance in one AZ (Multi-Attach exists for io1/io2). <strong>EFS</strong> — NFS shared across thousands of instances in many AZs, elastic, Linux only. <strong>S3</strong> — object storage over HTTPS, 11 nines durability, unlimited scale. <strong>FSx</strong> — managed Windows File Server (SMB/AD) or Lustre (HPC scratch over S3).',
    tags: ['EBS', 'EFS', 'S3', 'FSx', 'Storage']
  },
  {
    id: 'aws-saa-fc-9',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'IAM role vs. IAM user vs. resource-based policy',
    hint: 'Nobody should be handing out long-lived keys.',
    back: '<strong>Users</strong> hold long-lived credentials — avoid them for workloads. <strong>Roles</strong> are assumed to get temporary STS credentials; this is how EC2, Lambda, ECS, and cross-account access should authenticate. <strong>Resource-based policies</strong> (S3 bucket policy, SQS policy, KMS key policy) attach to the resource and name a principal, enabling cross-account access without role chaining.',
    tags: ['IAM', 'STS', 'Security']
  },
  {
    id: 'aws-saa-fc-10',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'What does CloudFront actually improve, and what are OAC and Origin Groups for?',
    hint: 'Edge caching plus origin lockdown.',
    back: 'CloudFront caches at 600+ edge locations, terminates TLS close to the user, and reduces origin load and latency. <strong>Origin Access Control (OAC)</strong> — successor to OAI; lets only CloudFront read a private S3 bucket. <strong>Origin Groups</strong> — a primary and a failover origin so 5xx/timeouts automatically retry against the secondary.',
    tags: ['CloudFront', 'Caching', 'Performance']
  },
  {
    id: 'aws-saa-fc-11',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'DynamoDB: when do you need a GSI versus an LSI?',
    hint: 'One can be created later, the other cannot.',
    back: '<strong>LSI</strong> — same partition key, different sort key; must be created with the table; shares the 10 GB per-partition limit; supports strongly consistent reads. <strong>GSI</strong> — completely different partition and sort key; can be added or removed any time; has its own capacity; eventually consistent only.',
    tags: ['DynamoDB', 'Indexes', 'Databases']
  },
  {
    id: 'aws-saa-fc-12',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 routing policies — name them and their use case.',
    hint: 'Seven of them.',
    back: 'Simple (one record) · Weighted (A/B, canary) · Latency-based (lowest network latency region) · Failover (active-passive with health checks) · Geolocation (compliance, localized content) · Geoproximity (bias traffic toward a region) · Multivalue Answer (up to 8 healthy records, client-side LB).',
    tags: ['Route 53', 'DNS', 'Resilience']
  },
  {
    id: 'aws-saa-fc-13',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Application Load Balancer: Target Group routing and Health Checks',
    hint: 'How ALB monitors backend instances.',
    back: 'ALB periodically sends HTTP/HTTPS health checks (e.g. <code>GET /health</code>) to registered targets in a <strong>Target Group</strong>. If a target fails consecutive health checks, ALB stops routing traffic to it automatically until it becomes healthy again.',
    tags: ['ALB', 'Target Group', 'Health Checks', 'Resilience']
  },
  {
    id: 'aws-saa-fc-14',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'CloudFront Dynamic Content Acceleration — why use CloudFront for uncacheable dynamic APIs?',
    hint: 'TLS termination at edge POPs and persistent AWS backbone TCP connections.',
    back: 'Even with TTL=0, CloudFront accelerates dynamic REST/GraphQL APIs by terminating TCP and TLS handshakes at <strong>nearby Edge POPs</strong> and routing requests across the optimized private AWS global network over pre-warmed persistent TCP connections.',
    tags: ['CloudFront', 'Dynamic Acceleration', 'Performance', 'Networking']
  },
  {
    id: 'aws-saa-fc-15',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Cross-Account S3 Bucket Access with KMS CMK Encryption — required permissions',
    hint: 'Two policies in the resource account plus IAM role permissions.',
    back: 'Requires granting permissions in: 1) <strong>S3 Bucket Policy</strong> in Account A (<code>s3:GetObject</code>, <code>s3:PutObject</code>), 2) <strong>KMS Key Policy</strong> in Account A (<code>kms:Decrypt</code>, <code>kms:GenerateDataKey</code>), and 3) <strong>IAM Identity Policy</strong> in Account B.',
    tags: ['KMS', 'S3', 'Cross-Account', 'Security', 'Encryption']
  },
  {
    id: 'aws-saa-fc-16',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Amazon SQS Backlog Metric for Target Tracking Auto Scaling',
    hint: 'How worker fleets scale based on queue depth.',
    back: 'Worker fleets scale using a custom metric: <strong>BacklogPerInstance</strong> = <code>ApproximateNumberOfMessagesVisible</code> divided by the number of running EC2 instances. This ensures predictable scaling proportional to queue message volume.',
    tags: ['SQS', 'Auto Scaling', 'CloudWatch', 'Resilience']
  },
  {
    id: 'aws-saa-fc-17',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon CloudFront Geographic Restrictions (Geo-blocking)',
    hint: 'Allowlist or blocklist by country code at edge locations.',
    back: 'Allows or blocks viewers in specific countries based on a GeoIP database at <strong>CloudFront edge POPs</strong>. Blocked users receive an HTTP 403 Forbidden response before requests ever traverse to the origin.',
    tags: ['CloudFront', 'Geo-Restriction', 'Security', 'Performance']
  },
  {
    id: 'aws-saa-fc-18',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Enforcing HTTPS on Amazon S3 Buckets using aws:SecureTransport',
    hint: 'Explicit Deny statement in bucket policy.',
    back: 'Enforced by an S3 Bucket Policy statement with <strong>Effect: Deny</strong> and Condition <code>"Bool": {"aws:SecureTransport": "false"}</code>. Any plaintext HTTP request is immediately rejected.',
    tags: ['S3', 'TLS', 'SecureTransport', 'Security']
  },
  {
    id: 'aws-saa-fc-19',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon S3 Glacier Flexible Retrieval — three retrieval options',
    hint: 'Expedited vs Standard vs Bulk.',
    back: '• <strong>Expedited</strong>: 1–5 minutes (highest cost)<br>• <strong>Standard</strong>: 3–5 hours<br>• <strong>Bulk</strong>: 5–12 hours (lowest cost per GB, ideal for large batch archives).',
    tags: ['S3 Glacier', 'Retrieval Tiers', 'Archiving', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-20',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'EC2 Auto Scaling across 3 AZs — surviving an AZ outage',
    hint: 'N+1 AZ capacity planning.',
    back: 'To maintain minimum capacity N during an AZ outage, deploy across 3 AZs sized such that remaining 2 AZs sustain the full workload (e.g. 6 instances total, 2 per AZ; losing 1 AZ leaves 4 active).',
    tags: ['Auto Scaling', 'Multi-AZ', 'High Availability', 'Resilience']
  },
  {
    id: 'aws-saa-fc-21',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Amazon Aurora Auto Scaling with Reader Endpoints',
    hint: 'Dynamic read replica scaling up to 15 replicas.',
    back: 'Aurora Auto Scaling automatically provisions up to <strong>15 Aurora Read Replicas</strong> based on CPU or connection metrics. Applications connect to the <strong>Reader Endpoint</strong>, which load-balances read queries automatically.',
    tags: ['Aurora', 'Auto Scaling', 'Read Replicas', 'Databases']
  },
  {
    id: 'aws-saa-fc-22',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd3',
    front: 'Restricting S3 Bucket Access by IP Address in Bucket Policies',
    hint: 'Deny + NotIpAddress condition key.',
    back: 'Configured using an explicit <strong>Deny</strong> statement combined with the <code>"NotIpAddress": {"aws:SourceIp": "CIDR_BLOCK"}</code> condition, ensuring any client outside the corporate CIDR is rejected.',
    tags: ['S3', 'Bucket Policy', 'IP Restriction', 'Security']
  },
  {
    id: 'aws-saa-fc-23',
    difficulty: 'easy',
    certId: 'aws-saa',
    domainId: 'd4',
    front: 'Amazon S3 Object Expiration Lifecycle Rules',
    hint: 'Automated deletion of ephemeral data without code.',
    back: 'S3 Lifecycle rules can define an <strong>Expiration action</strong> (e.g. expire objects after 14 days). S3 automatically deletes matching objects at zero runtime cost, eliminating manual cleanup scripts.',
    tags: ['S3', 'Lifecycle', 'Expiration', 'Cost Optimization']
  },
  {
    id: 'aws-saa-fc-24',
    difficulty: 'medium',
    certId: 'aws-saa',
    domainId: 'd1',
    front: 'Route 53 Multivalue Answer Routing — characteristics and limitations',
    hint: 'Up to 8 healthy records returned per query.',
    back: 'Returns up to <strong>8 healthy IP records</strong> selected randomly in response to DNS queries, each backed by a Route 53 health check. Provides client-side DNS load balancing (not a substitute for an ALB).',
    tags: ['Route 53', 'Multivalue', 'Health Checks', 'Resilience']
  },
  {
    id: 'aws-saa-fc-25',
    difficulty: 'hard',
    certId: 'aws-saa',
    domainId: 'd2',
    front: 'Kinesis Data Streams Shard Ingestion Capacity and Throttling',
    hint: '1 MB/sec or 1,000 records/sec per shard.',
    back: 'Each shard provides <strong>1 MB/sec or 1,000 records/sec</strong> write throughput. Write throttling occurs when keys hash unevenly to shards; resolve by using high-cardinality partition keys and resharding (splitting shards).',
    tags: ['Kinesis', 'Shards', 'Partition Key', 'Performance']
  }
];

export default AWS_SAA_FLASHCARDS;
