export const AWS_SAP_FLASHCARDS = [
  {
    id: 'aws-sap-fc-276',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you apply different controls to sandbox accounts?',
    hint: 'A sandbox OU with an expiry habit.',
    back: 'A dedicated <strong>Sandbox OU</strong> with its own SCP: permissive on services, restrictive on <strong>spend-shaped and network-shaped actions</strong> — deny expensive instance families, deny VPC peering and Direct Connect, deny access to production data. Add a budget action that stops resources, and a recycling schedule so sandboxes are not permanent.',
    tags: ['Organizations', 'Sandbox', 'Governance']
  },
  {
    id: 'aws-sap-fc-277',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you connect hundreds of branch sites?',
    hint: 'Do not manage hundreds of tunnels.',
    back: '<strong>AWS Cloud WAN</strong> with a core network policy, or <strong>Transit Gateway Connect</strong> with SD-WAN appliances — both give centrally-managed segmentation and dynamic routing instead of per-site VPN configuration. Site-to-Site VPN with <strong>Accelerated VPN</strong> handles the tunnels; the win is the <em>policy-driven</em> topology and per-segment isolation.',
    tags: ['Cloud WAN', 'Transit Gateway', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-278',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you reduce route table sprawl on a Transit Gateway?',
    hint: 'Segments, not per-VPC routes.',
    back: 'Design <strong>a small number of TGW route tables as segments</strong> — production, non-production, shared services, inspection, egress — and associate attachments with the right one, rather than writing per-VPC routes. Use <strong>propagation</strong> to populate them automatically, and blackhole routes for explicit denials. Cloud WAN expresses the same idea as policy.',
    tags: ['Transit Gateway', 'Segmentation', 'Networking']
  },
  {
    id: 'aws-sap-fc-279',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you route between on-premises sites through AWS?',
    hint: 'It is not on by default.',
    back: 'Transit Gateway can route between a VPN and a Direct Connect attachment, but <strong>site-to-site traffic through the TGW must be explicitly enabled and routed</strong>, and AWS is not a general-purpose WAN backbone for transit you have not designed. <strong>Cloud WAN</strong> is the supported way to express branch-to-branch policy; check bandwidth and cost before relying on it.',
    tags: ['Transit Gateway', 'Direct Connect', 'Hybrid']
  },
  {
    id: 'aws-sap-fc-280',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you allocate address space without collisions?',
    hint: 'Central allocation, planned growth.',
    back: 'Run <strong>VPC IPAM</strong> with a hierarchy — organization pool, then Region, then environment — allocating non-overlapping CIDRs on request, and reserve room for growth and for future acquisitions. Standardise VPC and subnet sizes so automation can carve them, and record on-premises ranges in IPAM too so hybrid routing never overlaps.',
    tags: ['IPAM', 'CIDR', 'Networking']
  },
  {
    id: 'aws-sap-fc-281',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd1',
    front: 'How do you make cost ownership visible to engineers?',
    hint: 'In their workflow, not a monthly email.',
    back: 'Tag by team and service, <strong>activate the keys</strong>, then publish per-team cost where engineers already look — a dashboard, a channel digest, or a pull-request comment on infrastructure changes. Add <strong>Budgets with team-level alerts</strong> and unit-economics metrics (cost per order, per tenant) so the number is meaningful rather than just large.',
    tags: ['FinOps', 'Cost Allocation', 'Culture']
  },
  {
    id: 'aws-sap-fc-282',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you choose an API front door for a public service?',
    hint: 'Four options, different jobs.',
    back: '<strong>API Gateway</strong> — managed auth, throttling, usage plans, validation; best for partner or public APIs. <strong>ALB</strong> — cheaper at high steady volume, path routing to containers. <strong>CloudFront in front of either</strong> — caching, WAF, TLS at the edge. <strong>AppSync</strong> — GraphQL with subscriptions when clients need field-level shaping.',
    tags: ['API Gateway', 'ALB', 'CloudFront']
  },
  {
    id: 'aws-sap-fc-283',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you protect a public API from credential stuffing?',
    hint: 'Layers, because no single control works.',
    back: '<strong>WAF Bot Control and Account Takeover Prevention</strong> managed rules, a <strong>rate-based rule keyed on something better than IP</strong>, <strong>Cognito with MFA and adaptive authentication</strong>, and CAPTCHA or challenge actions on suspicious scores. Then monitor for credential-stuffing signatures — a spike in failed logins across many accounts from few sources.',
    tags: ['WAF', 'Bot Control', 'Security']
  },
  {
    id: 'aws-sap-fc-284',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'Where should TLS terminate?',
    hint: 'And where must it not.',
    back: 'At the <strong>edge (CloudFront) or the load balancer</strong> for most workloads, with <strong>ACM</strong> managing renewal. Re-encrypt to the backend where the network is untrusted or compliance demands <strong>end-to-end encryption</strong>. Terminate on the instance only when you need the raw TLS session — mTLS client certificates, or a protocol the load balancer cannot parse (use an NLB in TCP mode).',
    tags: ['TLS', 'ACM', 'Security']
  },
  {
    id: 'aws-sap-fc-285',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you serve a tenant-specific domain name?',
    hint: 'Certificates are the constraint.',
    back: 'A <strong>wildcard certificate</strong> covers <code>*.app.example.com</code> for subdomain-per-tenant. For a tenant\'s <em>own</em> domain, issue per-tenant certificates and attach them with <strong>SNI on the ALB or CloudFront</strong> (ALB supports many certificates per listener), automating validation. CloudFront also offers multi-tenant distributions for this pattern.',
    tags: ['Multi-Tenancy', 'ACM', 'CloudFront']
  },
  {
    id: 'aws-sap-fc-286',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design around a non-idempotent legacy API?',
    hint: 'Make the boundary safe.',
    back: 'Wrap it: a facade that <strong>deduplicates by idempotency key before calling downstream</strong>, records the outcome durably, and returns the stored result on a repeat. Serialise per entity through a <strong>FIFO queue keyed on the entity</strong> so concurrent calls cannot interleave, and never retry blindly — retry only after confirming the state via a read.',
    tags: ['Idempotency', 'Legacy', 'Integration']
  },
  {
    id: 'aws-sap-fc-287',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you design around a provider with no SLA?',
    hint: 'Assume it is down during your peak.',
    back: 'Decouple with a <strong>queue so their downtime becomes backlog</strong> rather than user-facing failure, add <strong>timeouts, circuit breakers and a cached or degraded fallback</strong>, and cap the concurrency you aim at them. Monitor <em>their</em> availability as your own metric, and make the business decision explicit: what does your service do for the hours they are gone?',
    tags: ['Resilience', 'Third Party', 'Decoupling']
  },
  {
    id: 'aws-sap-fc-288',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd2',
    front: 'How do you handle schema change in an event stream?',
    hint: 'Contracts, versions, tolerant readers.',
    back: 'Register schemas in the <strong>EventBridge Schema Registry or Glue Schema Registry</strong> with compatibility rules, make changes <strong>additive</strong> (new optional fields), version the event type when a breaking change is unavoidable, and write <strong>tolerant readers</strong> that ignore unknown fields. Publish both versions during the transition rather than coordinating a flag day.',
    tags: ['Schema Registry', 'Event-Driven', 'Compatibility']
  },
  {
    id: 'aws-sap-fc-289',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you handle a noisy neighbour in a shared cluster?',
    hint: 'Limits, then isolation.',
    back: 'Set <strong>requests and limits (or task-level CPU and memory)</strong> so one workload cannot starve others, add <strong>namespace quotas</strong> and pod priority, and separate the offender onto its own node group via taints or a dedicated capacity provider. If the contention is I/O, the fix is usually a <strong>separate volume or a dedicated instance family</strong>, not more replicas.',
    tags: ['EKS', 'Resource Limits', 'Multi-Tenancy']
  },
  {
    id: 'aws-sap-fc-290',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you find the cause of periodic latency spikes?',
    hint: 'Line up the period with a schedule.',
    back: 'Match the interval against candidates: <strong>backup or snapshot windows, cron and batch jobs, credit exhaustion (T-instance CPU credits, gp2 burst, EFS burst), garbage collection, certificate or token refresh, and cache expiry stampedes</strong>. Use one-minute or high-resolution metrics — five-minute averages hide a 30-second spike entirely.',
    tags: ['Performance', 'Troubleshooting', 'Burst Credits']
  },
  {
    id: 'aws-sap-fc-291',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you speed up a slow Redshift dashboard?',
    hint: 'Distribution and sort keys first.',
    back: 'Check <strong>distribution style and sort keys</strong> against the actual join and filter columns — data movement between slices is usually the cost. Then <strong>materialised views</strong> for repeated aggregates, <strong>concurrency scaling</strong> for queue waits, <strong>workload management queues</strong> to protect the dashboard from ad-hoc queries, and <code>ANALYZE</code>/<code>VACUUM</code> hygiene.',
    tags: ['Redshift', 'Performance', 'Analytics']
  },
  {
    id: 'aws-sap-fc-292',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you keep two environments configured identically?',
    hint: 'Same template, different parameters.',
    back: 'One <strong>infrastructure-as-code template parameterised per environment</strong>, deployed by the same pipeline, with configuration in AppConfig or Parameter Store per stage — never a hand-edited copy per environment. Detect divergence with <strong>drift detection and Config rules</strong>, and forbid console writes so the template stays the source of truth.',
    tags: ['CloudFormation', 'Environments', 'Drift']
  },
  {
    id: 'aws-sap-fc-293',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you cut storage cost for infrequently read backups?',
    hint: 'Match the class to the recall time.',
    back: 'Tier by how fast you must restore: <strong>Glacier Instant Retrieval</strong> for millisecond recall, <strong>Flexible Retrieval</strong> for minutes-to-hours, <strong>Deep Archive</strong> for a 12-hour RTO at the lowest price. Respect the <strong>minimum durations</strong> (90 and 180 days), and let <strong>AWS Backup lifecycle rules</strong> move recovery points to cold storage automatically.',
    tags: ['S3 Glacier', 'AWS Backup', 'Cost Optimization']
  },
  {
    id: 'aws-sap-fc-294',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd3',
    front: 'How do you decide whether a Savings Plan is being wasted?',
    hint: 'Two different numbers.',
    back: '<strong>Utilisation</strong> — what share of your commitment is being used (low means you over-committed and are paying for nothing). <strong>Coverage</strong> — what share of eligible on-demand spend the commitment covers (low means you under-committed and are leaving discount on the table). Aim for high utilisation first, then raise coverage in small increments.',
    tags: ['Savings Plans', 'Utilisation', 'FinOps']
  },
  {
    id: 'aws-sap-fc-295',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you convert virtual machine images into AMIs at scale?',
    hint: 'Import, then standardise.',
    back: '<strong>VM Import/Export</strong> (or Image Builder importing the base) turns OVA/VMDK/VHD into AMIs, which you then <strong>re-bake into a hardened golden image</strong> with the agents, patches and CIS configuration your estate expects. Importing dozens of bespoke images unchanged recreates the snowflake problem in a new account.',
    tags: ['VM Import/Export', 'Image Builder', 'Migration']
  },
  {
    id: 'aws-sap-fc-296',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you migrate a workload that writes to local disk?',
    hint: 'Three destinations, by access pattern.',
    back: 'Ephemeral scratch stays on <strong>instance store or an EBS volume</strong>. Anything shared between instances moves to <strong>EFS or FSx</strong>. Anything durable and read-mostly moves to <strong>S3</strong>, ideally through a code change, or via <strong>Mountpoint or File Gateway</strong> where a rewrite is off the table. Local disk plus autoscaling is silent data loss.',
    tags: ['Storage', 'EFS', 'Migration']
  },
  {
    id: 'aws-sap-fc-297',
    difficulty: 'easy',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'What is the relocate strategy, and when does it apply?',
    hint: 'VMware, wholesale, no conversion.',
    back: 'Moving <strong>VMware workloads to a VMware-based environment on AWS without conversion or downtime</strong> — vMotion-style, hypervisor to hypervisor. It preserves tooling and operating model, which makes it the fastest route out of a data centre, and it defers modernisation entirely. The trade-off is that you keep the VMware operating cost and model.',
    tags: ['Relocate', 'VMware', 'Migration Strategies']
  },
  {
    id: 'aws-sap-fc-298',
    difficulty: 'hard',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you handle an application with a hardware dongle or unsupported dependency?',
    hint: 'Not everything can move.',
    back: 'Honest options: <strong>retain</strong> it on premises (or on Outposts) and integrate over the hybrid link, <strong>repurchase</strong> a SaaS or licence-server equivalent, negotiate a <strong>software licensing model</strong> with the vendor, or <strong>retire</strong> the capability. Emulating a USB dongle in the cloud is not a supported architecture — name the constraint rather than engineering around it.',
    tags: ['Legacy', 'Retain', 'Migration']
  },
  {
    id: 'aws-sap-fc-299',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'How do you keep analytics running through a database move?',
    hint: 'Decouple the readers first.',
    back: 'Point reporting at a <strong>replica or a CDC-fed copy</strong> before the migration, so analytics is already decoupled from the transactional source when it moves. Better still, land the data in <strong>S3 via DMS or Firehose and query with Athena or Redshift Spectrum</strong>, which removes reporting from the cutover\'s critical path permanently.',
    tags: ['DMS', 'Analytics', 'Migration']
  },
  {
    id: 'aws-sap-fc-300',
    difficulty: 'medium',
    certId: 'aws-sap',
    domainId: 'd4',
    front: 'When should you deliberately not modernise?',
    hint: 'Modernisation has to earn its budget.',
    back: 'When the workload is <strong>near end of life</strong>, when it is stable and rarely changed so agility buys nothing, when the <strong>domain knowledge has left</strong> and the rewrite risk exceeds the benefit, or when a cheaper strategy meets the goal. Modernise where <em>change frequency, scaling pain or run cost</em> justifies it — not because the architecture is old.',
    tags: ['Modernization', 'Prioritisation', 'Portfolio']
  }
];

export default AWS_SAP_FLASHCARDS;
