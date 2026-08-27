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
  }
];

export default AWS_SAA_FLASHCARDS;
