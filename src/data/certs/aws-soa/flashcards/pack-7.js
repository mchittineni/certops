export const AWS_SOA_FLASHCARDS_7 = [
  {
    id: 'aws-soa-fc-151',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What do the ELB target health states initial, unused, draining and unavailable tell you?',
    hint: 'Most of them are not failures.',
    back: '<strong>initial</strong>: registration or the first health checks are in progress. <strong>unused</strong>: the target is not in any listener rule\'s target group, or it sits in an Availability Zone that is not enabled for the load balancer (reason Target.NotInUse). <strong>draining</strong>: the target is deregistering and the deregistration delay is running. <strong>unavailable</strong>: health checks are disabled for the target group. Only <strong>unhealthy</strong> means checks are failing; its reason code (Target.Timeout, Target.ResponseCodeMismatch) points to the cause.',
    tags: ['ELB', 'Target health']
  },
  {
    id: 'aws-soa-fc-152',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are the default health check settings for an Application Load Balancer target group?',
    hint: 'Five numbers: interval, timeout, two thresholds and a code.',
    back: 'Interval <strong>30 seconds</strong>, timeout <strong>5 seconds</strong>, healthy threshold <strong>5</strong> consecutive successes, unhealthy threshold <strong>2</strong> consecutive failures, success code <strong>200</strong>, path <code>/</code>, port <code>traffic-port</code>. With these defaults a new target needs about two and a half minutes to become healthy and a failing one is marked unhealthy after about a minute; tune the interval and thresholds when that is too slow.',
    tags: ['ALB', 'Health checks']
  },
  {
    id: 'aws-soa-fc-153',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does an Application Load Balancer do when every target in a target group is unhealthy?',
    hint: 'It prefers some service over none.',
    back: 'It <strong>fails open</strong>: with no healthy targets, the ALB routes requests to <strong>all</strong> registered targets regardless of health, on the assumption that the health check may be wrong. Route 53 behaves similarly when every record in a group is unhealthy. So an all-unhealthy target group does not by itself stop traffic; if you need a failover, drive it from Route 53 with <strong>Evaluate target health</strong> on the alias record, which treats an ALB with no healthy targets as unhealthy.',
    tags: ['ALB', 'Health checks', 'Fail open']
  },
  {
    id: 'aws-soa-fc-154',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are the three kinds of Route 53 health check?',
    hint: 'An endpoint, other health checks, or a metric.',
    back: '<strong>Endpoint</strong> health checks probe an IP address or domain name over HTTP, HTTPS or TCP from checkers around the world, optionally with string matching. <strong>Calculated</strong> health checks combine up to 256 child health checks with a threshold (for example, healthy if two of three children are). <strong>CloudWatch alarm</strong> health checks follow the state of an alarm, which is how you monitor private resources the checkers cannot reach.',
    tags: ['Route 53', 'Health checks']
  },
  {
    id: 'aws-soa-fc-155',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does Route 53 decide an endpoint health check is healthy, and how fast can it notice a failure?',
    hint: 'Many checkers vote; two intervals are available.',
    back: 'Checkers in several Regions probe the endpoint every <strong>30 seconds</strong> (standard) or <strong>10 seconds</strong> (fast, extra cost). Each checker needs the <strong>failure threshold</strong> (default 3) of consecutive results to change its view. Route 53 treats the endpoint as healthy when <strong>more than 18%</strong> of checkers report it healthy. HTTP and HTTPS checks pass on a 2xx or 3xx status. Because checkers are staggered, one checker\'s interval does not equal overall detection time.',
    tags: ['Route 53', 'Health checks']
  },
  {
    id: 'aws-soa-fc-156',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does Evaluate target health do on a Route 53 alias record?',
    hint: 'It borrows health from the thing the alias points to.',
    back: 'With <strong>Evaluate target health = Yes</strong>, Route 53 judges the alias record by the health of its target instead of assuming it is healthy. For an <strong>ELB</strong>, the alias is unhealthy when the load balancer has no healthy targets; for another record in the same zone, Route 53 uses that record\'s health. It needs no separate health check and costs nothing extra. Without it (and with no health check attached), an alias record in a failover or weighted set is always considered healthy.',
    tags: ['Route 53', 'Alias records']
  },
  {
    id: 'aws-soa-fc-157',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Route 53 active-passive vs active-active failover: how is each built?',
    hint: 'One routing policy is literally called failover.',
    back: '<strong>Active-passive</strong>: <strong>failover routing</strong> with a primary and a secondary record; Route 53 answers with the primary while it is healthy and switches to the secondary when it is not. <strong>Active-active</strong>: any policy that returns several records (weighted, latency, geolocation, multivalue) with health checks on each; Route 53 simply stops returning unhealthy records. Both require health checks or Evaluate target health, or nothing ever fails over.',
    tags: ['Route 53', 'Failover routing']
  },
  {
    id: 'aws-soa-fc-158',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Route 53 HTTPS health checks: do they validate the certificate, and what does string matching read?',
    hint: 'Two limits that surprise people.',
    back: 'An HTTPS health check <strong>does not validate the TLS certificate</strong>, so an expired or mismatched certificate does not fail it; monitor certificates separately (for example with ACM expiry events). With <strong>string matching</strong>, Route 53 looks for the search string in the <strong>first 5,120 bytes</strong> of the response body, and the endpoint must also return a 2xx or 3xx status. Put the marker text near the top of the page.',
    tags: ['Route 53', 'Health checks', 'HTTPS']
  },
  {
    id: 'aws-soa-fc-159',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'ELB deregistration delay vs slow start mode: which end of a target\'s life does each cover?',
    hint: 'Leaving versus joining.',
    back: '<strong>Deregistration delay</strong> (connection draining) applies when a target is <strong>removed</strong>: the load balancer stops sending new requests and waits up to the delay (default 300 seconds, maximum 3,600) for in-flight requests to finish. <strong>Slow start</strong> applies when a target <strong>joins</strong>: the ALB ramps its share of requests up linearly over 30 to 900 seconds so caches and JIT compilers can warm up.',
    tags: ['ELB', 'Deregistration delay', 'Slow start']
  },
  {
    id: 'aws-soa-fc-160',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which health check sources can an EC2 Auto Scaling group use to replace instances?',
    hint: 'EC2 is always on; the rest are opt-in.',
    back: '<strong>EC2 status checks</strong> are always used and catch instance or host failures and non-running states. Optionally add <strong>Elastic Load Balancing</strong> health checks (the target group\'s view of the application), <strong>VPC Lattice</strong> health checks, and <strong>EBS</strong> health checks for impaired volumes. <strong>Custom</strong> health checks let your own tooling call <code>set-instance-health</code> to mark an instance unhealthy. Any enabled source reporting unhealthy triggers replacement.',
    tags: ['EC2 Auto Scaling', 'Health checks']
  },
  {
    id: 'aws-soa-fc-161',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Is cross-zone load balancing on by default for ALB, NLB and Gateway Load Balancer?',
    hint: 'Only one of the three has it on.',
    back: '<strong>Application Load Balancer</strong>: on by default (it can be turned off per target group), with no charge for cross-zone traffic. <strong>Network Load Balancer</strong> and <strong>Gateway Load Balancer</strong>: off by default; turning it on means each node spreads traffic across targets in every enabled zone, and inter-AZ data transfer charges apply. Leave it off when you deliberately keep traffic inside a zone.',
    tags: ['ELB', 'Cross-zone load balancing']
  },
  {
    id: 'aws-soa-fc-162',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What are zonal shift and zonal autoshift in Amazon Application Recovery Controller?',
    hint: 'Moving traffic away from an impaired zone.',
    back: 'A <strong>zonal shift</strong> is an operator action that temporarily moves traffic for a supported resource (ALB, NLB, EC2 Auto Scaling groups, EKS) away from one Availability Zone, for a set expiry, while the rest of the zones serve it. <strong>Zonal autoshift</strong> lets AWS start that shift automatically when it detects an impairment in a zone. Both assume the remaining zones have enough capacity, which is why static stability matters.',
    tags: ['Application Recovery Controller', 'Zonal shift']
  },
  {
    id: 'aws-soa-fc-163',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'RDS Multi-AZ DB instance vs Multi-AZ DB cluster: how do they differ?',
    hint: 'Count the standbys and ask whether they can read.',
    back: '<strong>Multi-AZ DB instance</strong>: one standby in another zone, synchronous replication, the standby serves no traffic, failover typically 60 to 120 seconds; supported on all RDS engines. <strong>Multi-AZ DB cluster</strong>: a writer and <strong>two readable standbys</strong> in three zones, semisynchronous replication, a reader endpoint, failover typically under 35 seconds; RDS for MySQL and PostgreSQL only.',
    tags: ['RDS', 'Multi-AZ']
  },
  {
    id: 'aws-soa-fc-164',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What causes an RDS Multi-AZ DB instance to fail over automatically?',
    hint: 'Failures and some maintenance.',
    back: 'Loss of the primary\'s Availability Zone, loss of network connectivity to the primary, compute or storage failure on the primary, patching of the operating system, and changing the instance class, as well as a reboot with failover that you request. RDS flips the endpoint\'s DNS record to the standby, so clients must reconnect and resolve the name again. An <strong>RDS event</strong> is emitted, which you can route to SNS or EventBridge.',
    tags: ['RDS', 'Multi-AZ', 'Failover']
  },
  {
    id: 'aws-soa-fc-165',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does Aurora storage stay available when an Availability Zone fails?',
    hint: 'Six copies, three zones.',
    back: 'Aurora keeps <strong>six copies</strong> of data across <strong>three Availability Zones</strong> in a shared cluster volume. Writes need four of six copies and reads need three, so the volume tolerates losing two copies without affecting writes and three without affecting reads, which covers losing an entire zone. Storage is resilient automatically, but <strong>compute is not</strong>: you still need an Aurora Replica in another zone to fail over to.',
    tags: ['Aurora', 'Storage', 'High availability']
  },
  {
    id: 'aws-soa-fc-166',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What happens when an Aurora writer fails with and without an Aurora Replica?',
    hint: 'Promotion versus re-creation.',
    back: '<strong>With a replica</strong>: Aurora promotes the replica with the best priority (lowest promotion tier, then largest instance) and repoints the cluster endpoint, usually within about a minute. <strong>Without a replica</strong>: Aurora tries to recreate the writer in the same zone, falling back to another zone, which takes considerably longer, several minutes. Aurora Serverless v2 readers in tier 0 or 1 scale with the writer so they are ready to take over at full size.',
    tags: ['Aurora', 'Failover']
  },
  {
    id: 'aws-soa-fc-167',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What must be true for ElastiCache (Valkey or Redis OSS) automatic failover to work?',
    hint: 'A setting and something to promote.',
    back: '<strong>Multi-AZ with automatic failover</strong> must be enabled on the replication group, and there must be at least <strong>one replica</strong>, ideally in a different Availability Zone from its primary. On failure, ElastiCache promotes the replica with the least replication lag and updates the primary endpoint so applications reconnect without configuration changes. Memcached has no replication and therefore no failover.',
    tags: ['ElastiCache', 'Multi-AZ']
  },
  {
    id: 'aws-soa-fc-168',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'EC2 system status check vs instance status check: what does each failure mean, and who fixes it?',
    hint: 'AWS hardware or your operating system.',
    back: 'A failed <strong>system status check</strong> means a problem with the AWS infrastructure under the instance (host hardware, power, network). Fix it by stopping and starting an EBS-backed instance so it moves to a new host, or let a CloudWatch <strong>recover</strong> action or automatic recovery do it. A failed <strong>instance status check</strong> means a problem inside the guest, such as a bad network configuration, exhausted memory, a corrupted file system or a kernel panic; you fix it yourself, often starting with a reboot or the system log.',
    tags: ['EC2', 'Status checks']
  },
  {
    id: 'aws-soa-fc-169',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'An EBS volume is in us-east-1a. How do you get its data to an instance in us-east-1b?',
    hint: 'Volumes are zonal; snapshots are not.',
    back: 'EBS volumes exist in one Availability Zone and can only attach to instances in that zone (Multi-Attach is also same-zone only). Take an <strong>EBS snapshot</strong>, which is stored regionally, and <strong>create a new volume from it in us-east-1b</strong>. For resilience, schedule snapshots with Data Lifecycle Manager or AWS Backup, or use a multi-AZ storage service such as EFS for shared data.',
    tags: ['EBS', 'Snapshots', 'Availability Zones']
  },
  {
    id: 'aws-soa-fc-170',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What is static stability, and how do you size a three-zone fleet for it?',
    hint: 'No scaling action should be needed during the failure.',
    back: 'A statically stable system keeps working through a failure <strong>without making changes</strong> such as launching instances, because the control plane or capacity may be impaired at that moment. For zone failure, provision enough in the remaining zones to carry peak: with three zones, each zone runs <strong>half</strong> of peak, so total capacity is 150% of peak. The extra cost buys immunity from launch delays and capacity shortages.',
    tags: ['Static stability', 'High availability']
  },
  {
    id: 'aws-soa-fc-171',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'What does the EC2 Auto Scaling AZRebalance process do after an Availability Zone recovers?',
    hint: 'Launch first, terminate second.',
    back: 'Auto Scaling keeps instances spread <strong>evenly across the group\'s Availability Zones</strong>. When an AZ outage, an added zone or manual terminations leave the group unbalanced, <strong>AZRebalance</strong> launches instances in the under-represented zones <strong>before</strong> terminating instances in the over-represented ones, so capacity never dips. While it does this, the group can temporarily exceed its maximum capacity by 10% or one instance, whichever is greater. Suspend the AZRebalance process if you need to keep an uneven distribution.',
    tags: ['EC2 Auto Scaling', 'Availability Zones', 'AZRebalance']
  },
  {
    id: 'aws-soa-fc-172',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which Amazon FSx file systems offer a Multi-AZ deployment option?',
    hint: 'One of the four is built for speed within a single zone.',
    back: '<strong>FSx for Windows File Server</strong>, <strong>FSx for NetApp ONTAP</strong> and <strong>FSx for OpenZFS</strong> offer Multi-AZ deployments with a standby file server in another zone and automatic failover. <strong>FSx for Lustre</strong> runs in a single zone (scratch or persistent); protect it with backups or an S3 data repository. Single-AZ deployments of the others replace failed components within the zone but do not survive the zone.',
    tags: ['FSx', 'Multi-AZ']
  },
  {
    id: 'aws-soa-fc-173',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'DynamoDB is already Multi-AZ. When do you still need global tables?',
    hint: 'Zones versus Regions.',
    back: 'Every DynamoDB table replicates across three Availability Zones in its Region automatically, so zone failure needs no action. <strong>Global tables</strong> replicate a table to other <strong>Regions</strong>, each replica accepting reads and writes, for Regional disaster recovery and low-latency access for users elsewhere. Choose multi-Region eventual consistency (the default) or multi-Region strong consistency where supported.',
    tags: ['DynamoDB', 'Global tables']
  },
  {
    id: 'aws-soa-fc-174',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'Which health check protocols do ALB, NLB and Gateway Load Balancer target groups support?',
    hint: 'One load balancer cannot do TCP checks.',
    back: '<strong>ALB</strong>: HTTP or HTTPS (gRPC target groups check with a gRPC status code). <strong>NLB</strong>: TCP, HTTP or HTTPS, so an NLB can look past an open port to the application response. <strong>Gateway Load Balancer</strong>: TCP, HTTP or HTTPS for the appliances behind it. An ALB cannot do a plain TCP check, and a TCP check anywhere only proves that the port accepts connections.',
    tags: ['ELB', 'Health checks']
  },
  {
    id: 'aws-soa-fc-175',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd2',
    front: 'How does RDS Proxy help with Multi-AZ failover?',
    hint: 'Clients talk to something that does not move.',
    back: 'Applications connect to the <strong>proxy endpoint</strong>, which stays the same during failover. The proxy detects the new primary, keeps client connections open where it can, and routes to the new writer without waiting for DNS changes to propagate, which AWS says cuts failover time for RDS and Aurora by up to 66%. It also pools connections, so reconnection storms after failover do not overwhelm the new primary.',
    tags: ['RDS Proxy', 'Failover']
  }
];

export default AWS_SOA_FLASHCARDS_7;
