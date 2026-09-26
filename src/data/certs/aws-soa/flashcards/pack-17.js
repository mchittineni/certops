export const AWS_SOA_FLASHCARDS_17 = [
  {
    id: 'aws-soa-fc-401',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Security group vs network ACL: state, scope, and rule types.',
    hint: 'One remembers connections; one can say no.',
    back: '<strong>Security group</strong>: attached to network interfaces, <strong>stateful</strong> (return traffic is allowed automatically), <strong>allow rules only</strong>, all rules evaluated together. <strong>Network ACL</strong>: attached to subnets, <strong>stateless</strong> (return traffic needs its own rule, usually ephemeral ports), <strong>allow and deny</strong> rules evaluated in number order with first match winning. Use a NACL to deny a specific address.',
    tags: ['Security groups', 'Network ACL']
  },
  {
    id: 'aws-soa-fc-402',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What makes a subnet public rather than private?',
    hint: 'Look in its route table, not its name.',
    back: 'A subnet is <strong>public</strong> when its associated route table has a route (typically <code>0.0.0.0/0</code> or <code>::/0</code>) to an <strong>internet gateway</strong> attached to the VPC. Instances there also need a public IPv4 address or Elastic IP (or an IPv6 address) to be reachable. A <strong>private</strong> subnet has no internet gateway route; outbound access, if any, goes through a NAT gateway or egress-only internet gateway.',
    tags: ['VPC', 'Subnets', 'Internet gateway']
  },
  {
    id: 'aws-soa-fc-403',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'NAT gateway vs egress-only internet gateway: which traffic does each serve?',
    hint: 'IP version decides it.',
    back: '<strong>NAT gateway</strong>: outbound-only <strong>IPv4</strong> internet access for private subnets; lives in a public subnet in one AZ, charged per hour and per GB processed. <strong>Egress-only internet gateway</strong>: outbound-only <strong>IPv6</strong> access; VPC-level, no NAT (IPv6 addresses are globally unique), no hourly charge. A NAT gateway also offers NAT64 for IPv6-only clients reaching IPv4 destinations via <code>64:ff9b::/96</code>.',
    tags: ['NAT gateway', 'Egress-only internet gateway', 'IPv6']
  },
  {
    id: 'aws-soa-fc-404',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why do custom network ACLs need ephemeral port rules, and which range?',
    hint: 'Stateless means replies are strangers.',
    back: 'Because NACLs are <strong>stateless</strong>, the reply to an inbound request is evaluated as new outbound traffic to the client\'s <strong>ephemeral port</strong>. Linux clients use 32768-60999, Windows 49152-65535, and ELB and NAT gateways use 1024-65535, so the usual rule is outbound TCP <strong>1024-65535</strong> for servers (and the matching inbound rule for connections your instances start). The default NACL allows everything, so this bites only with custom ACLs.',
    tags: ['Network ACL', 'Ephemeral ports']
  },
  {
    id: 'aws-soa-fc-405',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What does referencing a security group as a rule source actually match?',
    hint: 'Membership, not addresses.',
    back: 'It matches traffic from any <strong>network interface that has the referenced group attached</strong>, using their private IP addresses, so the rule follows instances, load balancer nodes and Lambda ENIs as they come and go. It does <strong>not</strong> import the CIDRs listed in the referenced group\'s rules. Works within a VPC, across peered VPCs in the same Region, and across VPCs attached to a transit gateway with security group referencing enabled.',
    tags: ['Security groups']
  },
  {
    id: 'aws-soa-fc-406',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Customer-managed prefix list vs AWS-managed prefix list.',
    hint: 'Who maintains the entries?',
    back: '<strong>Customer-managed</strong>: you define a set of CIDRs (for example partner offices) and reference it from security group rules and route tables; editing it updates every reference, and it can be shared with AWS RAM. Each entry counts toward the referencing group\'s rule quota (the <em>max entries</em> value). <strong>AWS-managed</strong>: AWS maintains ranges for services such as <strong>CloudFront origin-facing</strong> servers, S3 and DynamoDB; you reference them but cannot edit them.',
    tags: ['Prefix lists', 'Security groups']
  },
  {
    id: 'aws-soa-fc-407',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Steps to add IPv6 to an existing IPv4 VPC.',
    hint: 'CIDRs, routes, rules, then instances.',
    back: '1) Associate an <strong>IPv6 CIDR</strong> with the VPC (Amazon-provided /56, IPAM or BYOIP). 2) Assign a <strong>/64</strong> to each subnet. 3) Update <strong>route tables</strong>: <code>::/0</code> to the internet gateway for public subnets, to an <strong>egress-only internet gateway</strong> for private ones. 4) Add IPv6 rules to <strong>security groups and NACLs</strong>. 5) Assign IPv6 addresses to instances (enable auto-assign on the subnet or add them to ENIs).',
    tags: ['VPC', 'IPv6', 'Dual-stack']
  },
  {
    id: 'aws-soa-fc-408',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Gateway endpoint vs interface endpoint: which services, how reached, and cost?',
    hint: 'Route table entry vs network interface.',
    back: '<strong>Gateway endpoint</strong>: only <strong>S3 and DynamoDB</strong>; adds a prefix-list route to chosen route tables; no hourly or data charge; usable only from inside the VPC. <strong>Interface endpoint</strong> (PrivateLink): most AWS services and partner services; ENIs with private IPs in your subnets, protected by security groups; charged per hour per AZ and per GB; reachable from peered VPCs and on-premises networks.',
    tags: ['VPC endpoints', 'PrivateLink']
  },
  {
    id: 'aws-soa-fc-409',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Endpoint policy vs bucket policy with aws:SourceVpce: which controls what?',
    hint: 'One controls the door; the other controls who may bypass it.',
    back: 'An <strong>endpoint policy</strong> limits which principals, actions and resources can be used <strong>through the endpoint</strong> (for example only company buckets, to stop data exfiltration to other buckets). A <strong>bucket policy</strong> with <code>aws:SourceVpce</code> (or <code>aws:SourceVpc</code>) makes the bucket reject requests that <strong>do not come through</strong> the endpoint. Use both for a private, tightly scoped path. <code>aws:SourceIp</code> does not see private VPC addresses.',
    tags: ['VPC endpoints', 'S3', 'Policies']
  },
  {
    id: 'aws-soa-fc-410',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What must be true for an interface endpoint\'s private DNS to work?',
    hint: 'Two VPC attributes.',
    back: 'The VPC must have <strong>enableDnsSupport</strong> and <strong>enableDnsHostnames</strong> both set to true, and clients must use the Amazon-provided resolver (or forward to it). Then the default service name such as <code>sqs.us-east-1.amazonaws.com</code> resolves to the endpoint\'s private IPs through an AWS-managed private hosted zone. Only one endpoint per service per VPC can have private DNS enabled; on-premises clients need Resolver inbound endpoints to use it.',
    tags: ['Interface endpoint', 'Private DNS']
  },
  {
    id: 'aws-soa-fc-411',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'VPC peering vs PrivateLink endpoint service: how do you choose?',
    hint: 'Overlapping CIDRs and blast radius.',
    back: '<strong>Peering</strong>: full bidirectional network routing between two VPCs; no overlapping CIDRs, non-transitive, routes and security groups on both sides. <strong>PrivateLink endpoint service</strong>: exposes <strong>one service</strong> behind an NLB (or GWLB) to consumers, who connect through interface endpoints in their own VPCs; unidirectional (consumer to provider), works with <strong>overlapping CIDRs</strong>, scales to thousands of consumers, supports acceptance and allowed principals.',
    tags: ['VPC peering', 'PrivateLink']
  },
  {
    id: 'aws-soa-fc-412',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Name the VPC peering limitations that most often appear in exam scenarios.',
    hint: 'Transitivity, overlap, and edges.',
    back: '<strong>No transitive peering</strong> (A-B and B-C do not give A-C). <strong>No overlapping CIDRs</strong>. <strong>No edge-to-edge routing</strong>: a peer cannot use your internet gateway, NAT gateway, VPN or Direct Connect connection, or gateway endpoint. Only one peering between a pair of VPCs. Inter-Region peering works but cannot reference security groups across Regions. Use a <strong>transit gateway</strong> when many VPCs need any-to-any routing.',
    tags: ['VPC peering']
  },
  {
    id: 'aws-soa-fc-413',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which interface endpoints does Session Manager need in a VPC with no internet access?',
    hint: 'Three core ones, plus optional logging.',
    back: '<code>com.amazonaws.<em>region</em>.ssm</code>, <code>ssmmessages</code> (session data channels) and <code>ec2messages</code>, each with private DNS and HTTPS allowed from the instances. Add <code>logs</code> if sessions stream to CloudWatch Logs, <code>kms</code> if sessions are KMS-encrypted, and an S3 gateway endpoint for S3 session logs or patch baselines. The instance also needs an instance profile such as AmazonSSMManagedInstanceCore.',
    tags: ['Systems Manager', 'Session Manager', 'Interface endpoint']
  },
  {
    id: 'aws-soa-fc-414',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'On-premises servers must reach S3 privately over Direct Connect. Gateway or interface endpoint?',
    hint: 'Only one of them has an IP address.',
    back: '<strong>Interface endpoint for S3</strong>. It has private IPs in the VPC, so on-premises clients reach it across a private VIF or VPN using endpoint-specific DNS names (for example <code>bucket.vpce-xxxx.s3.region.vpce.amazonaws.com</code>) or Resolver inbound endpoints. A <strong>gateway endpoint</strong> is just a route-table target inside the VPC and cannot be used from on-premises. The alternative without endpoints is a public VIF, which uses public S3 addresses.',
    tags: ['S3', 'Interface endpoint', 'Hybrid']
  },
  {
    id: 'aws-soa-fc-415',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Route 53 Resolver DNS Firewall: what are the rule actions and block responses?',
    hint: 'Three actions; three ways to say no.',
    back: 'Actions: <strong>ALLOW</strong> (stop evaluating, resolve), <strong>BLOCK</strong>, and <strong>ALERT</strong> (resolve normally but log the match; use it to trial a list). BLOCK responds with <strong>NODATA</strong>, <strong>NXDOMAIN</strong>, or <strong>OVERRIDE</strong> (a custom CNAME, for example a walled-garden page). Rules use AWS-managed domain lists (malware, botnets) or your own lists; rule groups are associated with VPCs and evaluated by priority.',
    tags: ['DNS Firewall', 'Route 53 Resolver']
  },
  {
    id: 'aws-soa-fc-416',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'DNS Firewall fail-open vs fail-closed: what happens and what is the default?',
    hint: 'Availability or security when the firewall is impaired.',
    back: 'Set per VPC in the DNS Firewall configuration. <strong>Fail closed</strong> (the <strong>default</strong>, fail open disabled): if DNS Firewall cannot evaluate a query, Resolver blocks it, favoring security. <strong>Fail open</strong> enabled: Resolver lets the query through unfiltered, favoring availability. It governs only impairment; normal rule evaluation is unchanged either way.',
    tags: ['DNS Firewall', 'Availability']
  },
  {
    id: 'aws-soa-fc-417',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Shield Standard vs Shield Advanced: what does the subscription add?',
    hint: 'Free baseline versus people, money, and visibility.',
    back: '<strong>Standard</strong>: automatic, free, network and transport layer (L3/L4) protection for all customers. <strong>Advanced</strong> (per-organization monthly fee, one-year commitment): enhanced detection for protected resources (EIP, ELB, CloudFront, Global Accelerator, Route 53), <strong>automatic application layer mitigation</strong> with WAF, <strong>Shield Response Team</strong> access, <strong>DDoS cost protection</strong> credits, health-based detection and attack visibility.',
    tags: ['AWS Shield', 'DDoS']
  },
  {
    id: 'aws-soa-fc-418',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you audit what an AWS WAF rule would block without affecting traffic?',
    hint: 'A non-terminating action.',
    back: 'Set the rule action to <strong>Count</strong> (or override a managed rule group\'s rule actions to Count). Count records the match, adds any <strong>labels</strong> and emits <strong>CloudWatch metrics</strong> per rule, then continues evaluation, so nothing is blocked. Review <strong>sampled requests</strong>, metrics and web ACL logs, then switch to Block. Scope-down statements and label matching let you exclude known-good traffic first.',
    tags: ['AWS WAF', 'Count mode']
  },
  {
    id: 'aws-soa-fc-419',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'AWS WAF logging: destinations, naming rule, and cost controls.',
    hint: 'A required name prefix.',
    back: 'Destinations: <strong>CloudWatch Logs</strong>, <strong>S3</strong> or <strong>Data Firehose</strong>, one per web ACL; the log group, bucket or stream name must start with <code>aws-waf-logs-</code>. Records include action, <code>terminatingRuleId</code>, rule group matches, labels and request headers. <strong>Redacted fields</strong> hide values such as the Authorization header; <strong>logging filters</strong> keep or drop records by action or label to cut storage cost.',
    tags: ['AWS WAF', 'Logging']
  },
  {
    id: 'aws-soa-fc-420',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How is traffic routed through AWS Network Firewall for an internet-facing subnet?',
    hint: 'Three route tables, one of them on the gateway.',
    back: '<strong>Protected subnet</strong> route table: <code>0.0.0.0/0</code> to the <strong>firewall endpoint</strong>. <strong>Firewall subnet</strong> route table: <code>0.0.0.0/0</code> to the <strong>internet gateway</strong>. <strong>Internet gateway</strong> route table (edge association): protected subnet CIDR to the firewall endpoint. Missing the edge route leaves inbound traffic uninspected; endpoints are per AZ, so keep routing AZ-symmetric.',
    tags: ['Network Firewall', 'Ingress routing']
  },
  {
    id: 'aws-soa-fc-421',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Network Firewall stateless vs stateful rule groups.',
    hint: 'Packets versus flows.',
    back: '<strong>Stateless</strong>: evaluated first, packet by packet on 5-tuple, with actions pass, drop or <strong>forward to stateful</strong>. <strong>Stateful</strong>: inspect flows in context, with Suricata-compatible rules, 5-tuple rules or <strong>domain lists</strong> (HTTP Host and TLS SNI); actions pass, drop, reject or alert, and they produce alert and flow logs. Domain allowlists for egress and IPS signatures are stateful features.',
    tags: ['Network Firewall', 'Rule groups']
  },
  {
    id: 'aws-soa-fc-422',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'AWS WAF, Network Firewall, Shield, DNS Firewall: which layer and traffic does each protect?',
    hint: 'HTTP, VPC packets, floods, and queries.',
    back: '<strong>AWS WAF</strong>: L7 HTTP(S) requests to CloudFront, ALB, API Gateway, AppSync, Cognito and others. <strong>Network Firewall</strong>: L3-L7 traffic entering, leaving or crossing VPCs, including egress domain filtering. <strong>Shield</strong>: DDoS protection (Standard L3/L4 for all; Advanced adds L7 and response). <strong>Route 53 Resolver DNS Firewall</strong>: DNS queries from VPCs to the Resolver, blocking malicious domains.',
    tags: ['AWS WAF', 'Network Firewall', 'AWS Shield', 'DNS Firewall']
  },
  {
    id: 'aws-soa-fc-423',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What is a WAF rate-based rule, and what does it not stop?',
    hint: 'It counts per key over a window.',
    back: 'A <strong>rate-based rule</strong> counts requests per aggregation key (source IP by default, or forwarded IP, headers, labels and more) over a <strong>1, 2, 5 or 10 minute</strong> window and blocks or counts keys that exceed the limit until they drop below it. It is effective against HTTP floods and brute force from few sources, but it cannot stop network layer floods such as SYN floods, which Shield handles.',
    tags: ['AWS WAF', 'Rate limiting']
  },
  {
    id: 'aws-soa-fc-424',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What does a PrivateLink endpoint service provider control about who connects?',
    hint: 'A list and a switch.',
    back: '<strong>Allowed principals</strong>: the accounts, IAM users or roles permitted to discover and connect. <strong>Acceptance required</strong>: each connection request waits for provider approval (accept or reject in the console, API or via notifications to SNS). The provider can also enable <strong>private DNS names</strong> for the service after verifying domain ownership with a TXT record, and support additional Regions for cross-Region access.',
    tags: ['PrivateLink', 'Endpoint service']
  },
  {
    id: 'aws-soa-fc-425',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why can VPC A not reach VPC C through VPC B when A-B and B-C are peered?',
    hint: 'Where does a packet for VPC C go once it lands in VPC B?',
    back: 'VPC peering <strong>only delivers packets whose destination is in the peer VPC</strong>, so pointing VPC C\'s range at the A-B connection does not help. Packets for VPC C arriving in VPC B are dropped, because peering does not forward between connections. Fix it with a direct A-C peering or a <strong>transit gateway</strong>, which supports transitive routing through its route tables.',
    tags: ['VPC peering', 'Transit gateway']
  }
];

export default AWS_SOA_FLASHCARDS_17;
