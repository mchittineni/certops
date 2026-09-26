export const AWS_SOA_FLASHCARDS_19 = [
  {
    id: 'aws-soa-fc-451',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Origin access control (OAC) vs origin access identity (OAI) for S3 origins.',
    hint: 'One is the current recommendation.',
    back: '<strong>OAC</strong> is the recommended method: CloudFront signs origin requests with SigV4, and the bucket policy allows the <code>cloudfront.amazonaws.com</code> service principal with an <code>AWS:SourceArn</code> condition for the distribution. It supports <strong>SSE-KMS</strong> objects, all Regions, and PUT/POST. <strong>OAI</strong> is legacy: a special CloudFront user named in the bucket policy, without SSE-KMS support. Neither works with S3 website endpoints.',
    tags: ['CloudFront', 'Origin access control', 'S3']
  },
  {
    id: 'aws-soa-fc-452',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you stop clients bypassing CloudFront to hit an ALB origin directly?',
    hint: 'Network layer plus a shared secret.',
    back: 'Allow the ALB security group inbound only from the AWS-managed prefix list <code>com.amazonaws.global.cloudfront.origin-facing</code>, and have CloudFront add a <strong>secret custom origin header</strong> that an ALB listener rule requires (default action returns 403); rotate the secret periodically. Alternatively use <strong>CloudFront VPC origins</strong> to reach an internal ALB in private subnets with no public exposure at all.',
    tags: ['CloudFront', 'ALB', 'Origin protection']
  },
  {
    id: 'aws-soa-fc-453',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront vs Global Accelerator: how do you choose?',
    hint: 'Caching and HTTP versus any TCP/UDP with static IPs.',
    back: '<strong>CloudFront</strong>: HTTP(S) content delivery with <strong>caching</strong> at edge locations, edge functions, WAF, signed URLs; addresses change. <strong>Global Accelerator</strong>: <strong>two static anycast IPs</strong>, any <strong>TCP or UDP</strong> traffic proxied over the AWS backbone to Regional endpoints (ALB, NLB, EC2, EIP), no caching, health-based failover in seconds. Use it for gaming, VoIP, IoT or IP allowlisting.',
    tags: ['CloudFront', 'Global Accelerator']
  },
  {
    id: 'aws-soa-fc-454',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Global Accelerator traffic dial vs endpoint weight.',
    hint: 'Between Regions versus within one.',
    back: '<strong>Traffic dial</strong> (per endpoint group, 0-100%): the share of traffic an endpoint group accepts out of what it would otherwise receive; lower it to drain a Region for maintenance or blue/green shifts. <strong>Endpoint weight</strong> (per endpoint, 0-255): proportion of the group\'s traffic each endpoint gets. <strong>Client affinity</strong> (source IP) keeps a client on the same endpoint for stateful apps.',
    tags: ['Global Accelerator', 'Traffic management']
  },
  {
    id: 'aws-soa-fc-455',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How does CloudFront origin failover work, and what are its limits?',
    hint: 'A pair of origins and a list of status codes.',
    back: 'An <strong>origin group</strong> holds a primary and a secondary origin. If the primary returns a configured status (500, 502, 503, 504, 403, 404) or times out or refuses the connection, CloudFront retries <strong>that request</strong> on the secondary. It applies only to <strong>GET, HEAD and OPTIONS</strong> requests; it does not fail over writes or switch permanently. Tune origin connection timeout and attempts to fail over faster.',
    tags: ['CloudFront', 'Origin failover']
  },
  {
    id: 'aws-soa-fc-456',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront Functions vs Lambda@Edge: capability and event differences.',
    hint: 'Lightweight at viewer events versus full runtime anywhere.',
    back: '<strong>CloudFront Functions</strong>: JavaScript, <strong>viewer request/response only</strong>, sub-millisecond, no network or body access, very high scale, lowest cost; ideal for URL rewrites, redirects, header changes, simple token checks (KeyValueStore for data). <strong>Lambda@Edge</strong>: Node.js or Python, all four events including <strong>origin request/response</strong>, network calls, request body access, seconds of runtime, higher price.',
    tags: ['CloudFront Functions', 'Lambda@Edge']
  },
  {
    id: 'aws-soa-fc-457',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront signed URLs vs signed cookies.',
    hint: 'One file or many; can the URL change?',
    back: '<strong>Signed URLs</strong>: grant access to <strong>one file</strong> per URL, or when clients cannot use cookies; the URL carries the policy and signature. <strong>Signed cookies</strong>: grant access to <strong>many files</strong> (for example all HLS segments of a course) without changing URLs. Both use keys in a <strong>trusted key group</strong> (recommended; managed with IAM) rather than legacy root-user CloudFront key pairs, and support canned or custom policies with expiry and IP limits.',
    tags: ['CloudFront', 'Private content']
  },
  {
    id: 'aws-soa-fc-458',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you block viewers from specific countries on CloudFront?',
    hint: 'A built-in allow or block list.',
    back: 'Use CloudFront <strong>geographic restrictions</strong> with an <strong>allow list</strong> or <strong>block list</strong> of countries; blocked viewers get HTTP <strong>403</strong>, which you can style with a custom error page. It applies to the whole distribution. For finer rules (per path, combined with other conditions) use an AWS WAF geo match statement instead.',
    tags: ['CloudFront', 'Geo restriction']
  },
  {
    id: 'aws-soa-fc-459',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Private instances cannot reach the internet through a NAT gateway. What is the checklist?',
    hint: 'Walk the path hop by hop.',
    back: '1) Private route table sends <code>0.0.0.0/0</code> to the NAT gateway. 2) NAT gateway sits in a <strong>public subnet</strong> whose route table sends <code>0.0.0.0/0</code> to an attached <strong>internet gateway</strong>. 3) NAT gateway is public with an Elastic IP and Available. 4) Security groups allow outbound; NACLs on both subnets allow the traffic and ephemeral return ports. 5) Check ErrorPortAllocation and PacketsDropCount metrics.',
    tags: ['NAT gateway', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-460',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Transit gateway association vs propagation.',
    hint: 'Which table do I look up in, and who writes into it?',
    back: '<strong>Association</strong>: each attachment is associated with exactly <strong>one</strong> transit gateway route table, the table used to route traffic <strong>coming from</strong> that attachment. <strong>Propagation</strong>: an attachment can propagate its routes (VPC CIDR, VPN or DX BGP routes) <strong>into</strong> one or more tables so others can reach it. Separate tables with selective propagation create isolated segments such as prod and dev. VPC subnet routes to the TGW are still needed.',
    tags: ['Transit gateway', 'Route tables']
  },
  {
    id: 'aws-soa-fc-461',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What does transit gateway appliance mode fix?',
    hint: 'Stateful firewalls hate asymmetry.',
    back: 'Without it, the transit gateway keeps traffic in the AZ where it entered, so request and response between spokes in different AZs can traverse <strong>different appliances</strong> in an inspection VPC, and stateful firewalls drop the unknown return flow. <strong>Appliance mode</strong> on the inspection VPC attachment selects one appliance ENI per flow (flow hash) for <strong>both directions</strong> for the life of the flow.',
    tags: ['Transit gateway', 'Appliance mode']
  },
  {
    id: 'aws-soa-fc-462',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Reachability Analyzer vs Network Access Analyzer.',
    hint: 'One path versus a policy for all paths.',
    back: '<strong>Reachability Analyzer</strong>: static analysis of <strong>one path</strong> from a source to a destination (port, protocol); says reachable or not and names the <strong>blocking component</strong> (SG rule, NACL rule, route, missing IGW). No packets sent. <strong>Network Access Analyzer</strong>: evaluates <strong>scopes</strong> you define (for example no internet path to databases) across the network to find unintended access that violates them.',
    tags: ['Reachability Analyzer', 'Network Access Analyzer']
  },
  {
    id: 'aws-soa-fc-463',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'NAT gateway ErrorPortAllocation is rising. What limit is being hit and how do you fix it?',
    hint: 'Per destination, per address.',
    back: 'A NAT gateway can hold about <strong>55,000 simultaneous connections to each unique destination</strong> (IP, port, protocol) <strong>per IP address</strong>. Fixes: associate <strong>secondary IP addresses</strong> (up to 8 per NAT gateway), spread workloads across more NAT gateways and subnets, reuse connections (keep-alive, pooling), or spread load across more destination addresses. The 350-second idle timeout is fixed.',
    tags: ['NAT gateway', 'Port allocation']
  },
  {
    id: 'aws-soa-fc-464',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why does a VPC-attached Lambda function lack internet access even in a public subnet?',
    hint: 'What does its network interface not get?',
    back: 'Lambda\'s Hyperplane ENIs <strong>never get public IP addresses</strong>, so an internet gateway route is useless to them. Put the function in <strong>private subnets</strong> with a default route to a <strong>NAT gateway</strong> for internet access, and use <strong>VPC endpoints</strong> for AWS services such as S3, DynamoDB or Secrets Manager to avoid NAT charges.',
    tags: ['Lambda', 'VPC', 'NAT gateway']
  },
  {
    id: 'aws-soa-fc-465',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What happens to DNS when a DHCP options set points at a custom DNS server?',
    hint: 'The VPC resolver is no longer asked first.',
    back: 'Instances send all queries to the custom server, so private hosted zones, interface endpoint private DNS and EC2 internal names resolve only if that server <strong>forwards</strong> to the VPC resolver (base + 2) for the relevant domains. Resolver rules and DNS Firewall act only on queries that reach the VPC resolver. DHCP option changes apply as instances renew leases; you swap sets, you cannot edit one.',
    tags: ['DHCP options', 'VPC DNS']
  },
  {
    id: 'aws-soa-fc-466',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you read VPC flow log ACCEPT/REJECT pairs to tell a security group from a NACL problem?',
    hint: 'Stateful decisions do not contradict themselves.',
    back: 'Inbound <strong>ACCEPT</strong> then outbound <strong>REJECT</strong> for the reply means the <strong>network ACL</strong> is blocking the return traffic (usually ephemeral ports), because a security group always allows replies to accepted flows. Inbound <strong>REJECT</strong> alone could be either the SG or the NACL. Outbound REJECT for a new connection the instance starts can be the SG outbound rules or the NACL.',
    tags: ['VPC flow logs', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-467',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What traffic do VPC flow logs NOT capture?',
    hint: 'Think of the link-local and Amazon-provided services.',
    back: 'Traffic to and from the <strong>Amazon DNS server</strong> (Route 53 Resolver, unless you use your own DNS), <strong>instance metadata</strong> (169.254.169.254), Amazon Time Sync, Windows license activation, <strong>DHCP</strong>, traffic to the default VPC router\'s reserved address, and mirrored traffic. Flow logs also never contain <strong>packet payloads</strong>; use Resolver query logs for DNS and Traffic Mirroring for contents.',
    tags: ['VPC flow logs']
  },
  {
    id: 'aws-soa-fc-468',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Flow log fields srcaddr vs pkt-srcaddr: when do they differ?',
    hint: 'Anything that translates or forwards.',
    back: '<strong>srcaddr/dstaddr</strong>: addresses on the <strong>interface being logged</strong>. <strong>pkt-srcaddr/pkt-dstaddr</strong>: the packet\'s <strong>original</strong> source and destination. They differ on intermediate interfaces such as a <strong>NAT gateway</strong>, transit gateway, load balancer or an ENI with secondary IPs. Add them, plus fields like <code>flow-direction</code>, <code>traffic-path</code> and <code>vpc-id</code>, with a custom log format.',
    tags: ['VPC flow logs', 'Custom format']
  },
  {
    id: 'aws-soa-fc-469',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What must be true for ALB access logs to be delivered?',
    hint: 'Where the bucket is, and who may write to it.',
    back: 'The S3 bucket must be in the <strong>same Region</strong> as the load balancer, and its <strong>bucket policy</strong> must allow Elastic Load Balancing to write (the Region\'s ELB account ID, or the <code>logdelivery.elasticloadbalancing.amazonaws.com</code> principal in newer Regions). Logs arrive every <strong>5 minutes</strong>, are best effort, and support <strong>SSE-S3</strong> bucket encryption. Connection logs and health check logs are configured separately.',
    tags: ['ELB access logs', 'S3']
  },
  {
    id: 'aws-soa-fc-470',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'ALB access logs: how do you tell a load-balancer-generated error from a target error?',
    hint: 'Compare two status code fields.',
    back: 'Compare <strong>elb_status_code</strong> with <strong>target_status_code</strong>. Equal codes: the target produced it. elb 502/504 with target <strong>-</strong> and processing time <strong>-1</strong>: the ALB got no valid response (target reset, closed keep-alive early, or timed out). elb 503: no healthy targets or no registered targets. <strong>460</strong>: client closed first. <strong>463</strong>: too many X-Forwarded-For addresses. WAF blocks show 403 with <code>waf</code> in actions_executed.',
    tags: ['ELB access logs', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-471',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront standard logs vs real-time logs.',
    hint: 'Minutes to S3 or seconds to a stream.',
    back: '<strong>Standard logs</strong> (access logs): every request, delivered periodically to S3 (or, with the newer logging v2, to CloudWatch Logs or Firehose); low cost; minutes of delay. <strong>Real-time logs</strong>: selected fields for a configurable <strong>sampling rate</strong>, delivered to <strong>Kinesis Data Streams</strong> within seconds; charged per log line. Use real-time logs for live operational dashboards and alerting.',
    tags: ['CloudFront', 'Logging']
  },
  {
    id: 'aws-soa-fc-472',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do ECS containers on Fargate send their output to CloudWatch Logs?',
    hint: 'A log driver in the task definition.',
    back: 'Set <code>logConfiguration</code> with the <strong>awslogs</strong> driver (options <code>awslogs-group</code>, <code>awslogs-region</code>, <code>awslogs-stream-prefix</code>) in each container definition; stdout and stderr go to the log group. The <strong>task execution role</strong> needs <code>logs:CreateLogStream</code> and <code>logs:PutLogEvents</code>. For routing to other destinations use <strong>FireLens</strong> (Fluent Bit) instead.',
    tags: ['ECS', 'Container logs']
  },
  {
    id: 'aws-soa-fc-473',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'VPC flow logs: where can they be attached and where can they be sent?',
    hint: 'Three scopes, three destinations.',
    back: 'Scope: a <strong>VPC</strong>, a <strong>subnet</strong> or a single <strong>network interface</strong> (including those of NAT gateways, load balancers and transit gateway attachments; transit gateways also have their own flow logs). Destinations: <strong>CloudWatch Logs</strong>, <strong>S3</strong> (optionally Parquet, hourly partitions) or <strong>Data Firehose</strong>. Traffic type ALL, ACCEPT or REJECT; aggregation interval 1 or 10 minutes; settings are fixed after creation.',
    tags: ['VPC flow logs']
  },
  {
    id: 'aws-soa-fc-474',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'VPC Traffic Mirroring: what it copies, targets, and requirements.',
    hint: 'Payloads, out of band.',
    back: 'Copies <strong>full packets</strong> (with optional truncation) from a source ENI to a <strong>target</strong>: another ENI, a <strong>Network Load Balancer</strong> or a <strong>Gateway Load Balancer endpoint</strong>, encapsulated in VXLAN (UDP 4789). <strong>Filters</strong> select traffic by direction, protocol, ports and CIDRs; sessions have priorities. Sources must be <strong>Nitro-based</strong> instances. Mirrored traffic counts toward instance bandwidth but does not sit in the production path.',
    tags: ['Traffic Mirroring']
  },
  {
    id: 'aws-soa-fc-475',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which log answers which network question: flow logs, ELB access logs, WAF logs, CloudFront logs?',
    hint: 'Layer and location.',
    back: '<strong>VPC flow logs</strong>: L3/L4 metadata, was a flow accepted or rejected by SG/NACL, and bytes per flow. <strong>ELB access logs</strong>: per HTTP request at the load balancer, status codes, latency per stage, target used. <strong>AWS WAF logs</strong>: which rule matched or terminated a request, and labels. <strong>CloudFront logs</strong>: per viewer request at the edge, cache result (Hit/Miss/RefreshHit), edge location, time taken.',
    tags: ['VPC flow logs', 'ELB access logs', 'AWS WAF', 'CloudFront']
  }
];

export default AWS_SOA_FLASHCARDS_19;
