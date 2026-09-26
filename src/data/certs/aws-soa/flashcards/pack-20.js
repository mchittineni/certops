export const AWS_SOA_FLASHCARDS_20 = [
  {
    id: 'aws-soa-fc-476',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront invalidation vs versioned file names: when do you use each?',
    hint: 'Emergency versus routine.',
    back: '<strong>Invalidation</strong>: removes paths (wildcards allowed) from all edge caches; use for urgent fixes. The first 1,000 paths per month are free, then each path is charged, and a wildcard counts as one path. <strong>Versioned names</strong> (for example <code>app.3f9a.js</code>): new content gets a new URL, so no purge is needed, old versions stay consistent, and browser caches are handled too. Prefer versioning for routine releases.',
    tags: ['CloudFront', 'Invalidation', 'Caching']
  },
  {
    id: 'aws-soa-fc-477',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What can a CloudFront response headers policy add or remove, and why use it instead of changing the origin?',
    hint: 'Headers CloudFront sets on the way back to the viewer.',
    back: 'A response headers policy makes CloudFront modify the headers in responses it sends to viewers, whether served from cache or from the origin: <strong>CORS</strong> headers, <strong>security headers</strong> (Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-XSS-Protection), <strong>custom headers</strong>, <strong>removal</strong> of headers such as <code>Server</code>, and a <strong>Server-Timing</strong> header. It is attached per cache behavior, and AWS managed policies exist, so every origin gets consistent headers without code changes.',
    tags: ['CloudFront', 'Response headers policy', 'Security headers']
  },
  {
    id: 'aws-soa-fc-478',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How does CloudFront continuous deployment test a configuration change on production traffic, and what are its limits?',
    hint: 'A second distribution plus a policy that decides which requests it gets.',
    back: 'You create a <strong>staging distribution</strong> from the primary and attach a <strong>continuous deployment policy</strong> to the primary. Viewers keep using the primary\'s domain; CloudFront routes either a <strong>weight</strong> of requests (at most <strong>15%</strong>, optionally with cookie-based session stickiness, idle 300 to 3,600 seconds) or requests carrying a header whose name starts with <code>aws-cf-cd-</code>. When satisfied, you <strong>promote</strong> the staging configuration into the primary. Limits: the two distributions do not share a cache, HTTP/3 distributions are not supported, and CloudFront may send all traffic to the primary during peak service load.',
    tags: ['CloudFront', 'Continuous deployment']
  },
  {
    id: 'aws-soa-fc-479',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why might CloudFront serve one user\'s personalized page to another, and how do you prevent it?',
    hint: 'What is missing from the cache key?',
    back: 'If the response depends on a cookie or Authorization header that is <strong>not in the cache key</strong>, the first response is cached under a URL-only key and served to everyone. Fix: route personalized paths to a behavior with the <strong>CachingDisabled</strong> managed policy (forward cookies via an origin request policy), or include the identifying value in the key, and have the origin send <code>Cache-Control: private</code> with a minimum TTL of 0.',
    tags: ['CloudFront', 'Cache key', 'Personalized content']
  },
  {
    id: 'aws-soa-fc-480',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What must be true for CloudFront to compress responses?',
    hint: 'A behavior switch, a policy setting, and the right object.',
    back: 'The cache behavior has <strong>Compress objects automatically</strong> on, the <strong>cache policy</strong> enables <strong>Gzip and/or Brotli</strong> (normalizing Accept-Encoding into the key), the viewer sends Accept-Encoding, the file type is compressible, the object is <strong>1,000 to 10,000,000 bytes</strong> with a Content-Length header, and the origin has not already compressed it. Otherwise CloudFront serves it as received.',
    tags: ['CloudFront', 'Compression']
  },
  {
    id: 'aws-soa-fc-481',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which response headers show CloudFront cache behavior for a single request?',
    hint: 'One says hit or miss; one says how long.',
    back: '<strong>X-Cache</strong>: <code>Hit from cloudfront</code>, <code>RefreshHit</code> (revalidated with the origin), <code>Miss from cloudfront</code> or <code>Error from cloudfront</code>. <strong>Age</strong>: seconds the object has been in the cache. <strong>X-Amz-Cf-Pop</strong>: the edge location that served it. <strong>X-Amz-Cf-Id</strong>: request ID for AWS Support. In logs, the equivalent field is <code>x-edge-result-type</code>.',
    tags: ['CloudFront', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-482',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How long does CloudFront cache origin error responses, and how do you change it?',
    hint: 'A per-status setting with a small default.',
    back: 'By default, 4xx and 5xx responses are cached for <strong>10 seconds</strong>. Each <strong>custom error response</strong> has an <strong>Error caching minimum TTL</strong> per status code; set it low (or 0) for transient errors such as 503 so recovery is visible quickly, higher for stable ones such as 404 to shield the origin. If the origin sends Cache-Control with the error, CloudFront honors it.',
    tags: ['CloudFront', 'Error caching']
  },
  {
    id: 'aws-soa-fc-483',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'CloudFront cache hit ratio is low. What do you check, in order?',
    hint: 'Key, TTLs, then topology.',
    back: '1) <strong>Cache key</strong>: remove unnecessary headers, cookies and query strings (forward them with an origin request policy instead); allowlist only the query strings that change content. 2) <strong>TTLs</strong> and origin Cache-Control values that are too short or set to no-cache. 3) Normalize values (case, parameter order) with CloudFront Functions. 4) Enable <strong>Origin Shield</strong> to collapse misses from many edges. Watch CacheHitRate in the distribution metrics.',
    tags: ['CloudFront', 'Cache hit ratio']
  },
  {
    id: 'aws-soa-fc-484',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Site-to-Site VPN static vs dynamic (BGP) routing.',
    hint: 'Who tells whom about new networks?',
    back: '<strong>Static</strong>: you list on-premises CIDRs on the VPN connection; failover between tunnels depends on the customer device. <strong>Dynamic</strong>: routes are exchanged with <strong>BGP</strong>, new prefixes are learned automatically, and failover between tunnels is faster and automatic. Either way, the VPC subnet route tables need routes to the virtual private gateway (static entries or <strong>route propagation</strong>).',
    tags: ['Site-to-Site VPN', 'BGP']
  },
  {
    id: 'aws-soa-fc-485',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'VPN tunnel options: what do DPD timeout action and startup action control?',
    hint: 'What AWS does when the peer goes quiet, and who starts IKE.',
    back: '<strong>DPD timeout action</strong> (after dead peer detection timeout, default 30 s): <strong>Clear</strong> (default; end the session and wait for the customer gateway), <strong>Restart</strong> (AWS restarts IKE) or <strong>None</strong>. <strong>Startup action</strong>: <strong>Add</strong> (default; customer gateway must initiate) or <strong>Start</strong> (AWS initiates, IKEv2). Restart plus Start lets tunnels recover without on-premises traffic.',
    tags: ['Site-to-Site VPN', 'Tunnel options']
  },
  {
    id: 'aws-soa-fc-486',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Why does every Site-to-Site VPN connection have two tunnels, and what should you do with them?',
    hint: 'Maintenance happens.',
    back: 'The two tunnels terminate on <strong>different AWS endpoints in different AZs</strong>. AWS can take one down for routine maintenance, and endpoints can fail, so configure <strong>both tunnels</strong> on the customer gateway device and use BGP (or device failover) to move traffic. For device-level redundancy, add a second customer gateway device with its own VPN connection.',
    tags: ['Site-to-Site VPN', 'Redundancy']
  },
  {
    id: 'aws-soa-fc-487',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How does a VPC route traffic when the same network is reachable over Direct Connect and VPN?',
    hint: 'Longest prefix first, then route source.',
    back: '1) <strong>Longest prefix match</strong> always wins, whatever the path. For identical prefixes: 2) static routes in the subnet route table, 3) propagated routes preferred in this order: <strong>Direct Connect BGP</strong>, then <strong>VPN static</strong>, then <strong>VPN BGP</strong> (then shortest AS path among BGP routes). So to keep VPN as backup, advertise the same or less specific prefixes over VPN than over Direct Connect.',
    tags: ['Direct Connect', 'Site-to-Site VPN', 'Route priority']
  },
  {
    id: 'aws-soa-fc-488',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What are the key Direct Connect route limits that break BGP sessions?',
    hint: 'Exceed them and the session goes idle.',
    back: 'Customer-advertised prefixes per BGP session: <strong>100</strong> on a private or transit virtual interface. Exceeding the limit puts the BGP session into <strong>idle</strong> and traffic stops. Summarize routes, or use a transit gateway via a transit VIF where the TGW advertises summarized prefixes.',
    tags: ['Direct Connect', 'BGP', 'Quotas']
  },
  {
    id: 'aws-soa-fc-489',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Direct Connect private VIF vs transit VIF vs public VIF.',
    hint: 'What each one lands on.',
    back: '<strong>Private VIF</strong>: to a <strong>virtual private gateway</strong> or a Direct Connect gateway (then VGWs) for private VPC access. <strong>Transit VIF</strong>: to a Direct Connect gateway associated with <strong>transit gateways</strong>, for many VPCs at scale. <strong>Public VIF</strong>: to <strong>public AWS endpoints</strong> (S3, DynamoDB public IPs, other services) over Direct Connect, and a common underlay for a Site-to-Site VPN for encryption.',
    tags: ['Direct Connect', 'Virtual interfaces']
  },
  {
    id: 'aws-soa-fc-490',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'An interface endpoint name resolves privately but connections time out. What do you check?',
    hint: 'The endpoint has its own firewall.',
    back: 'The <strong>endpoint\'s security group</strong> must allow inbound <strong>TCP 443</strong> (or the service port) from the clients\' subnets or security group. Then check NACLs on the endpoint subnets, that clients are in a VPC or network with a route to those subnets (peering, TGW, VPN or DX), and that the endpoint has an ENI in an AZ the clients can reach. An endpoint policy denial returns 403, not a timeout.',
    tags: ['Interface endpoint', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-491',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'A PrivateLink consumer endpoint shows Pending acceptance, or its connections fail. What are the common causes?',
    hint: 'Approval, permissions, AZs, and health.',
    back: '<strong>Pending acceptance</strong>: the provider requires acceptance and has not accepted yet. <strong>Cannot create endpoint</strong>: consumer principal not in the service\'s <strong>allowed principals</strong>. <strong>Connections fail</strong>: consumer endpoint in an AZ where the provider NLB has no enabled zone, NLB targets unhealthy, or endpoint and target security groups blocking the port. Private DNS needs the provider\'s domain verification.',
    tags: ['PrivateLink', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-492',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'A restrictive S3 endpoint policy broke OS updates or other AWS features. Why?',
    hint: 'AWS itself stores things in buckets you do not own.',
    back: 'Many AWS features read from <strong>AWS-owned buckets</strong> through your S3 endpoint: Amazon Linux package repositories, SSM Agent and patch baselines, CloudFormation helper scripts, ECR image layers (stored in an AWS-managed S3 bucket), and more. An endpoint policy allowing only your own bucket ARNs denies them. Add the documented AWS bucket ARNs for those features, or use <code>aws:ResourceOrgID</code> conditions with explicit exceptions.',
    tags: ['Gateway endpoint', 'Endpoint policy']
  },
  {
    id: 'aws-soa-fc-493',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Name the CloudWatch network monitoring services and what each watches.',
    hint: 'Internet users, hybrid links, workload flows.',
    back: '<strong>Internet Monitor</strong>: availability and performance between your applications (VPCs, CloudFront, NLBs, WorkSpaces) and <strong>end users</strong> by city and ASN. <strong>Network Synthetic Monitor</strong>: probes from VPC subnets to <strong>on-premises IPs</strong> over DX or VPN (loss, RTT). <strong>Network Flow Monitor</strong>: agent-based TCP metrics <strong>between workloads</strong> in AWS. All three provide an AWS network health indicator.',
    tags: ['CloudWatch', 'Network monitoring']
  },
  {
    id: 'aws-soa-fc-494',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'What does CloudWatch Internet Monitor give you beyond dashboards?',
    hint: 'Events you can act on and advice you can plan with.',
    back: '<strong>Health events</strong> when availability or performance impact crosses your thresholds, published to <strong>EventBridge</strong> for alerting and automation. <strong>Traffic insights</strong> with top client locations and ASNs by traffic and impact, and <strong>optimization suggestions</strong> estimating time to first byte if traffic were served from other Regions or via CloudFront. Measurements can be exported to S3 and queried with Logs Insights.',
    tags: ['Internet Monitor', 'EventBridge']
  },
  {
    id: 'aws-soa-fc-495',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How is CloudWatch Network Synthetic Monitor set up and what does it measure?',
    hint: 'Sources, destinations, and two numbers.',
    back: 'Create a <strong>monitor</strong> with <strong>probes</strong>: each probe has a source <strong>VPC subnet</strong>, a destination <strong>on-premises IP</strong>, and protocol <strong>ICMP or TCP</strong> (with port). It is fully managed, with no agents. It publishes <strong>round-trip time</strong> and <strong>packet loss</strong> to CloudWatch at 30- or 60-second aggregation, plus a <strong>network health indicator</strong> showing whether AWS-network degradation is involved.',
    tags: ['Network Synthetic Monitor', 'Hybrid']
  },
  {
    id: 'aws-soa-fc-496',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Network Flow Monitor: how does it collect data and what metrics does it report?',
    hint: 'Agents and TCP statistics.',
    back: 'Install the <strong>Network Flow Monitor agent</strong> on EC2 instances or EKS nodes (EKS add-on) to collect TCP statistics. Create <strong>monitors</strong> scoped to local and remote resources (subnets, VPCs, AZs, services). Metrics include <strong>retransmissions</strong>, <strong>retransmission timeouts</strong>, <strong>round-trip time</strong> and <strong>data transferred</strong>, and a <strong>network health indicator</strong> shows whether AWS infrastructure is contributing.',
    tags: ['Network Flow Monitor', 'EKS']
  },
  {
    id: 'aws-soa-fc-497',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which NAT gateway CloudWatch metrics matter most for troubleshooting?',
    hint: 'Drops, ports, timeouts.',
    back: '<strong>ErrorPortAllocation</strong>: failed source port allocations (55,000 connections per destination per IP limit). <strong>PacketsDropCount</strong>: packets dropped by the gateway (compare to total packets). <strong>IdleTimeoutCount</strong>: connections closed after the 350-second idle timeout. <strong>ActiveConnectionCount</strong>, <strong>ConnectionAttemptCount</strong> vs <strong>ConnectionEstablishedCount</strong>, and BytesOut/InToDestination for load and cost.',
    tags: ['NAT gateway', 'CloudWatch metrics']
  },
  {
    id: 'aws-soa-fc-498',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which CloudWatch metrics monitor Site-to-Site VPN tunnels?',
    hint: 'State and data, per tunnel.',
    back: '<strong>TunnelState</strong>: 1 when up, 0 when down (for BGP VPNs, up means BGP is established too); alarm below 1 per tunnel. <strong>TunnelDataIn</strong> and <strong>TunnelDataOut</strong>: bytes received and sent; zero can simply mean an idle tunnel. Metrics use the <code>VpnId</code> and <code>TunnelIpAddress</code> dimensions. Tunnel activity logs to CloudWatch Logs help diagnose IKE and DPD problems.',
    tags: ['Site-to-Site VPN', 'CloudWatch metrics']
  },
  {
    id: 'aws-soa-fc-499',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'Which CloudWatch metrics monitor a Direct Connect connection and its virtual interfaces?',
    hint: 'State, bits, packets, light.',
    back: '<strong>Connection</strong>: <code>ConnectionState</code> (1 up, 0 down), <code>ConnectionBpsEgress</code>/<code>Ingress</code>, <code>ConnectionPpsEgress</code>/<code>Ingress</code>, <code>ConnectionErrorCount</code>, <code>ConnectionLightLevelTx</code>/<code>Rx</code> (optical health), and <code>ConnectionEncryptionState</code> for MACsec. <strong>Virtual interface</strong>: <code>VirtualInterfaceBpsEgress</code>/<code>Ingress</code> and PPS. BGP status is visible in the console and API.',
    tags: ['Direct Connect', 'CloudWatch metrics']
  },
  {
    id: 'aws-soa-fc-500',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd5',
    front: 'How do you interpret a network health indicator that stays healthy while your probes show loss?',
    hint: 'Whose segment is the indicator about?',
    back: 'The <strong>network health indicator</strong> reports degradation on the <strong>AWS-operated</strong> part of the path. Healthy indicator plus measured loss or latency means the problem is most likely <strong>outside AWS</strong>: customer or partner routers, the provider circuit, the internet path, or on-premises devices and firewalls. Degraded indicator means AWS is contributing, so check the AWS Health Dashboard and consider failing over.',
    tags: ['Network Synthetic Monitor', 'Troubleshooting']
  }
];

export default AWS_SOA_FLASHCARDS_20;
