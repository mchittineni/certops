export const AWS_SOA_FLASHCARDS_18 = [
  {
    id: 'aws-soa-fc-426',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What are the two charges on a NAT gateway, and the quickest way to shrink the second one?',
    hint: 'Time and bytes; some bytes can skip it.',
    back: 'A NAT gateway bills <strong>per hour</strong> it exists and <strong>per GB processed</strong>. The quickest cut is to stop sending AWS-service traffic through it: <strong>gateway endpoints for S3 and DynamoDB</strong> are free, and interface endpoints can be cheaper than NAT processing for heavy traffic to other services. Keep a NAT gateway per AZ so traffic does not also pay inter-AZ transfer.',
    tags: ['NAT gateway', 'Cost optimization']
  },
  {
    id: 'aws-soa-fc-427',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which data transfer paths inside AWS are free, and which are charged?',
    hint: 'Same AZ, cross-AZ, cross-Region.',
    back: '<strong>Free</strong>: traffic within the same AZ using private IPs (including over VPC peering in the same AZ), inbound data from the internet, S3 or other origins to CloudFront. <strong>Charged</strong>: cross-AZ traffic (per GB in each direction), traffic over public or Elastic IPs even within a Region, inter-Region transfer, internet data transfer out, and processing fees on NAT gateways, transit gateways and interface endpoints.',
    tags: ['Data transfer', 'Cost optimization']
  },
  {
    id: 'aws-soa-fc-428',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Transit gateway vs VPC peering: how do their costs differ?',
    hint: 'One charges for every gigabyte it touches.',
    back: '<strong>Transit gateway</strong>: per-attachment hourly fee plus a <strong>per-GB data processing</strong> charge on traffic sent through it, in exchange for hub-and-spoke simplicity and transitive routing. <strong>VPC peering</strong>: no hourly or processing fee; you pay only normal data transfer (free within the same AZ, cross-AZ and inter-Region rates otherwise). High-volume VPC pairs often get a direct peering alongside the transit gateway.',
    tags: ['Transit gateway', 'VPC peering', 'Cost optimization']
  },
  {
    id: 'aws-soa-fc-429',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you find and cut public IPv4 address charges?',
    hint: 'Every public IPv4 address bills hourly, attached or not.',
    back: 'All public IPv4 addresses (Elastic IPs, auto-assigned, service-managed) are billed per hour. Use <strong>VPC IPAM Public IP insights</strong> (free tier) or Cost and Usage Report usage types to inventory them. Then <strong>release unassociated Elastic IPs</strong>, turn off auto-assign public IP on subnets that do not need it, put instances behind load balancers or NAT, and adopt <strong>IPv6</strong> or EC2 Instance Connect Endpoint for admin access.',
    tags: ['Public IPv4', 'VPC IPAM', 'Cost optimization']
  },
  {
    id: 'aws-soa-fc-430',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you centralize interface endpoints for many VPCs and keep default service DNS names?',
    hint: 'Private DNS does not travel, so build it yourself.',
    back: 'Create the endpoints once in a <strong>shared services VPC</strong> reachable over a transit gateway, with <strong>private DNS disabled</strong>. For each service create a <strong>private hosted zone</strong> named for the service endpoint (for example <code>ssm.eu-west-1.amazonaws.com</code>) with an <strong>alias</strong> to the endpoint\'s regional DNS name, and associate the zone with every spoke VPC. Cost falls because endpoint-AZ hours are paid once.',
    tags: ['Interface endpoint', 'Private hosted zones', 'Cost optimization']
  },
  {
    id: 'aws-soa-fc-431',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'NLB client IP preservation vs Proxy Protocol v2: when does the target see the real client address?',
    hint: 'Target type, protocol, and whether traffic arrives through PrivateLink.',
    back: '<strong>Client IP preservation</strong> is on by default for <strong>instance</strong> targets and for IP targets using UDP or TCP_UDP; for <strong>IP targets with TCP or TLS</strong> it is off by default, and the target sees the NLB\'s private IP. It needs a direct path (same or peered VPC, no transit gateway), breaks <strong>hairpinning</strong> when a target connects back through its own internal NLB, and never applies to PrivateLink traffic. Where it cannot work, enable <strong>Proxy Protocol v2</strong> and read the client IP (and VPC endpoint ID) from the header, but only if the app and its health checks can parse it.',
    tags: ['Network Load Balancer', 'Client IP']
  },
  {
    id: 'aws-soa-fc-432',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why does putting CloudFront in front of S3 usually lower the bill?',
    hint: 'Count the transfers that go away.',
    back: 'Transfer from S3 (or any AWS origin) <strong>to CloudFront is free</strong>, CloudFront\'s <strong>data transfer out rates</strong> are lower than S3 or EC2 direct-to-internet rates, and cached responses mean fewer <strong>origin requests</strong>. The CloudFront free tier and savings bundle cut costs further. Security and speed improve too, since the bucket can stay private behind origin access control.',
    tags: ['CloudFront', 'Cost optimization', 'S3']
  },
  {
    id: 'aws-soa-fc-433',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Public hosted zone vs private hosted zone.',
    hint: 'Who is allowed to ask the question?',
    back: '<strong>Public</strong>: answers queries from anywhere on the internet for a domain you own; delegated from the registrar via its four name servers. <strong>Private</strong>: answers only queries from <strong>associated VPCs</strong> (through the VPC resolver), which need <code>enableDnsSupport</code> and <code>enableDnsHostnames</code>. A private zone can be associated with VPCs in other Regions and accounts, and can share a name with a public zone for split-horizon DNS.',
    tags: ['Route 53', 'Hosted zones']
  },
  {
    id: 'aws-soa-fc-434',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you associate a private hosted zone with a VPC in another account?',
    hint: 'Two accounts, two calls, no console.',
    back: 'In the zone owner\'s account run <code>create-vpc-association-authorization</code> for the other account\'s VPC ID. In the VPC owner\'s account run <code>associate-vpc-with-hosted-zone</code>. Both steps use the CLI, SDK or API. Afterward, delete the authorization to tidy up (the association stays). Route 53 profiles, shared through AWS RAM, are an alternative for pushing zones and Resolver rules to many VPCs.',
    tags: ['Route 53', 'Private hosted zones', 'Cross-account']
  },
  {
    id: 'aws-soa-fc-435',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Resolver inbound endpoint vs outbound endpoint: which direction does each serve?',
    hint: 'Name the side that asks.',
    back: '<strong>Inbound endpoint</strong>: on-premises (or other networks) query <strong>into</strong> the VPC resolver; on-prem DNS servers conditionally forward AWS domains to the endpoint\'s IPs so private hosted zones and endpoint names resolve. <strong>Outbound endpoint</strong> plus <strong>forwarding rules</strong>: the VPC\'s queries for on-premises domains go <strong>out</strong> to on-prem DNS servers. Each endpoint needs at least two IPs, ideally in different AZs.',
    tags: ['Route 53 Resolver', 'Hybrid DNS']
  },
  {
    id: 'aws-soa-fc-436',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Resolver forward rules vs system rules, and how Resolver picks between them.',
    hint: 'Specificity wins.',
    back: '<strong>Forward rule</strong>: send queries for a domain to specified target IPs via an outbound endpoint. <strong>System rule</strong>: resolve the domain locally (private hosted zones, VPC names, public recursion), used to carve a subdomain out of a broader forward rule. Resolver applies the <strong>most specific matching domain</strong>, so a system rule for <code>cloud.corp.example</code> beats a forward rule for <code>corp.example</code>. Rules act only on VPCs they are associated with.',
    tags: ['Route 53 Resolver', 'Resolver rules']
  },
  {
    id: 'aws-soa-fc-437',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Split-horizon DNS in Route 53: what happens to names missing from the private zone?',
    hint: 'There is no fallback.',
    back: 'When a private and a public zone share a name, queries from associated VPCs are answered <strong>only from the private zone</strong>. If the record is absent there, the VPC resolver returns <strong>NXDOMAIN</strong>; it does not fall back to the public zone. Duplicate every name internal clients need (often as the same alias) into the private zone, or use a more specific private zone such as <code>internal.example.com</code> instead.',
    tags: ['Route 53', 'Split-horizon DNS']
  },
  {
    id: 'aws-soa-fc-438',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Alias record vs CNAME record.',
    hint: 'Apex, targets, and price.',
    back: '<strong>Alias</strong> (Route 53 extension): allowed at the <strong>zone apex</strong>, targets AWS resources (ELB, CloudFront, S3 website, API Gateway, Global Accelerator, VPC endpoints, another record in the zone), tracks their IP changes, and alias queries to AWS resources are <strong>free</strong>. <strong>CNAME</strong>: standard DNS, <strong>not allowed at the apex</strong>, can point to any hostname, and queries are billed. Alias TTL comes from the target.',
    tags: ['Route 53', 'Alias records']
  },
  {
    id: 'aws-soa-fc-439',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you delegate a subdomain to a hosted zone in another account?',
    hint: 'One record type in the parent.',
    back: 'Create a public hosted zone for the subdomain (for example <code>dev.example.com</code>) in the child account, note its <strong>four name servers</strong>, then add an <strong>NS record</strong> for <code>dev.example.com</code> with those values in the parent zone. The child team then manages every record under the subdomain without access to the parent. Remove any conflicting records for that name in the parent.',
    tags: ['Route 53', 'Subdomain delegation']
  },
  {
    id: 'aws-soa-fc-440',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What does enabling DNSSEC signing on a Route 53 public zone require?',
    hint: 'A key, a Region, and a record at the parent.',
    back: 'A <strong>customer managed KMS key</strong> in <strong>us-east-1</strong> that is <strong>asymmetric ECC_NIST_P256</strong> with sign/verify usage, from which Route 53 creates a key-signing key (KSK). After signing is enabled, publish the <strong>DS record</strong> in the parent zone (through the registrar or parent hosted zone) to complete the chain of trust. Lower TTLs before enabling, and monitor the DNSSECInternalFailure and DNSSECKeySigningKeysNeedingAction metrics.',
    tags: ['Route 53', 'DNSSEC']
  },
  {
    id: 'aws-soa-fc-441',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Latency vs geolocation vs geoproximity routing.',
    hint: 'Speed, borders, distance.',
    back: '<strong>Latency</strong>: answer with the Region that has the lowest measured network latency for the user. <strong>Geolocation</strong>: answer by the user\'s continent, country or US state, useful for licensing, language and compliance; add a Default record. <strong>Geoproximity</strong>: answer by physical distance to resources, adjustable with a <strong>bias</strong> from -99 to 99 that grows or shrinks each resource\'s area.',
    tags: ['Route 53', 'Routing policies']
  },
  {
    id: 'aws-soa-fc-442',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why add a Default location record to geolocation routing?',
    hint: 'Some queries match no place.',
    back: 'Without it, Route 53 returns <strong>no answer</strong> for queries from locations that have no matching record and from resolvers whose location <strong>cannot be determined</strong>. The Default record catches both. Route 53 picks the most specific match first (state, then country, then continent, then Default). If a matched record fails its health check, Route 53 falls back to broader matches only when those records exist.',
    tags: ['Route 53', 'Geolocation routing']
  },
  {
    id: 'aws-soa-fc-443',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Multivalue answer routing vs simple routing with multiple values.',
    hint: 'Only one of them can drop a dead server.',
    back: '<strong>Simple</strong>: one record with several values; all are returned in random order, and it <strong>cannot use health checks</strong>, so dead endpoints keep being handed out. <strong>Multivalue answer</strong>: separate records each with an optional <strong>health check</strong>; Route 53 returns up to <strong>eight healthy</strong> values per query. It is client-side spreading, not a replacement for a load balancer.',
    tags: ['Route 53', 'Multivalue answer routing']
  },
  {
    id: 'aws-soa-fc-444',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What is Route 53 IP-based routing and when is it the right choice?',
    hint: 'You already know where your users\' addresses live.',
    back: 'You upload <strong>CIDR collections</strong> that map client or resolver IP ranges to named <strong>CIDR locations</strong>, then create IP-based records per location plus a <strong>default</strong> record (<code>*</code>). Use it when you know better than geography or latency data where certain users should go, for example an ISP peering deal, a partner network, or cost-driven steering. It uses ECS client subnet data when resolvers send it.',
    tags: ['Route 53', 'IP-based routing']
  },
  {
    id: 'aws-soa-fc-445',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Route 53 public query logging vs Resolver query logging.',
    hint: 'Queries to your zone versus queries from your VPC.',
    back: '<strong>Public DNS query logging</strong>: queries that internet resolvers send to Route 53 for <strong>your public hosted zone</strong>; logs go only to CloudWatch Logs in <strong>us-east-1</strong>, and show the resolver edge, not the end client. <strong>Resolver query logging</strong>: every query made <strong>from associated VPCs</strong> (any domain), including source instance IP; destinations CloudWatch Logs, S3 or Firehose; configs can be shared with AWS RAM.',
    tags: ['Route 53', 'Query logging']
  },
  {
    id: 'aws-soa-fc-446',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How should you handle record TTLs around a planned DNS change?',
    hint: 'Lower it early, raise it later.',
    back: 'Lower the TTL (for example to 60-300 seconds) <strong>at least one old TTL period before</strong> the change so caches holding the long TTL expire first. Make the change, verify, then raise the TTL again to reduce query volume and cost. Alias records to AWS resources use the target\'s TTL (60 seconds for ELB), so this mainly matters for non-alias records.',
    tags: ['Route 53', 'TTL']
  },
  {
    id: 'aws-soa-fc-447',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'A Resolver forwarding rule exists but queries never reach the outbound endpoint. What do you check?',
    hint: 'Rules are not global.',
    back: 'First, that the rule is <strong>associated with the VPC</strong> the instances run in (and, if shared through RAM, accepted and associated in that account). Then check that instances use the VPC resolver rather than a custom DHCP-options DNS server, that the domain name in the rule matches, and that no more specific system rule or private hosted zone overrides it. Endpoint query metrics show whether anything is forwarded.',
    tags: ['Route 53 Resolver', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-448',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What is the VPC resolver address, and who can reach it?',
    hint: 'Base of the CIDR, plus a small number.',
    back: 'The Amazon-provided resolver (Route 53 Resolver) listens at the <strong>VPC base CIDR address plus two</strong> (for example 10.0.0.2) and at <strong>169.254.169.253</strong> (and fd00:ec2::253 for IPv6 on Nitro). It serves resources <strong>inside that VPC</strong>. On-premises networks cannot query it directly and use a Resolver <strong>inbound endpoint</strong> instead.',
    tags: ['Route 53 Resolver', 'VPC DNS']
  },
  {
    id: 'aws-soa-fc-449',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Can you combine routing policies for one name, for example latency with weighted?',
    hint: 'Not side by side, but in layers.',
    back: 'Records with the same name and type must all use the <strong>same routing policy</strong>. To combine policies, build a <strong>tree</strong>: the top-level records (for example latency, one per Region) are <strong>aliases</strong> to lower-level records under other names (for example weighted records per Region), each with health checks and <em>Evaluate target health</em>. Route 53 Traffic Flow policies build the same tree visually and version it.',
    tags: ['Route 53', 'Routing policies', 'Traffic Flow']
  },
  {
    id: 'aws-soa-fc-450',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which gateway endpoints exist, and what do they cost?',
    hint: 'Two services only.',
    back: 'Gateway VPC endpoints exist only for <strong>Amazon S3</strong> and <strong>Amazon DynamoDB</strong>. They have <strong>no hourly or data processing charge</strong>, are added as route targets in chosen route tables, and support endpoint policies. Everything else, including S3 access from on-premises or peered networks, uses <strong>interface endpoints</strong>, which are billed per hour per AZ and per GB.',
    tags: ['Gateway endpoint', 'Cost optimization']
  }
];

export default AWS_SOA_FLASHCARDS_18;
