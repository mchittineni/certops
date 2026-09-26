export const AZURE_AZ305_FLASHCARDS_20 = [
  {
    id: 'azure-az305-fc-476',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Front Door, Traffic Manager, Application Gateway or Load Balancer: what is the two-question decision rule?',
    hint: 'Is the traffic HTTP(S)? Is the scope global or regional?',
    back: '<strong>Global + HTTP(S)</strong>: <strong>Azure Front Door</strong> (edge proxy with TLS offload, caching, WAF). <strong>Global + any protocol</strong>: <strong>Traffic Manager</strong> (DNS-based, no proxy) or the global tier of Load Balancer for layer 4 with static anycast IPs. <strong>Regional + HTTP(S)</strong>: <strong>Application Gateway</strong> (layer 7, path routing, WAF). <strong>Regional + TCP/UDP</strong>: <strong>Azure Load Balancer</strong> (layer 4, public or internal). Designs often combine a global and a regional choice.',
    tags: ['Load balancing', 'Decision rule']
  },
  {
    id: 'azure-az305-fc-477',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What are the Traffic Manager routing methods, and what does each choose?',
    hint: 'Six methods, all answered in DNS.',
    back: '<strong>Priority</strong>: primary endpoint, failover to the next. <strong>Weighted</strong>: spread by weight, for gradual migrations or canaries. <strong>Performance</strong>: lowest network latency from the resolver\'s location. <strong>Geographic</strong>: by the user\'s geographic origin, for data sovereignty or localized content. <strong>Multivalue</strong>: returns several healthy IPv4/IPv6 endpoints for clients to try. <strong>Subnet</strong>: maps client IP ranges to specific endpoints. Nested profiles combine methods.',
    tags: ['Traffic Manager', 'Routing methods']
  },
  {
    id: 'azure-az305-fc-478',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Front Door Standard vs Premium: what does Premium add?',
    hint: 'Security depth and private origins.',
    back: 'Both tiers provide global anycast entry, TLS offload, caching, compression, rules engine and custom WAF rules. <strong>Premium</strong> adds WAF <strong>managed rule sets</strong> (the Microsoft default rule set) and <strong>bot protection</strong>, <strong>Private Link origins</strong> so origins such as App Service, Storage or an internal load balancer can keep public access disabled, and enhanced security analytics. Choose Standard for content delivery; choose Premium when WAF managed rules or private origins are required.',
    tags: ['Azure Front Door', 'SKUs']
  },
  {
    id: 'azure-az305-fc-479',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which capabilities does Application Gateway v2 add over the retired v1 SKU?',
    hint: 'Scale, zones and modern TLS handling.',
    back: 'Application Gateway <strong>v2</strong> (Standard_v2 and WAF_v2) adds <strong>autoscaling</strong>, <strong>zone redundancy</strong>, a <strong>static</strong> public VIP, HTTP header and URL <strong>rewrite</strong>, <strong>Key Vault</strong> integration for TLS certificates, mutual TLS to clients, <strong>Private Link</strong> for private client access, and faster deployment and updates. It keeps path- and host-based routing, cookie affinity, redirects and end-to-end TLS. The v1 SKUs are retired, so v2 is the only design choice.',
    tags: ['Application Gateway', 'v2 SKU']
  },
  {
    id: 'azure-az305-fc-480',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Load Balancer: what distinguishes the Standard regional, Standard global and Gateway options?',
    hint: 'One region, many regions, or appliance insertion.',
    back: '<strong>Standard (regional)</strong>: layer 4 TCP/UDP load balancing within a region, public or internal, zone-redundant, secure by default (NSG required), with HA ports for internal NVAs. <strong>Standard global tier</strong> (cross-region): a static anycast public IP in front of regional public load balancers, routing clients to the closest healthy region with instant failover. <strong>Gateway</strong>: transparently chains third-party NVAs in front of a public load balancer or VM public IP using VXLAN. The Basic SKU is retired.',
    tags: ['Load Balancer', 'SKUs']
  },
  {
    id: 'azure-az305-fc-481',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'When does a design need App Service Environment v3 instead of a multitenant App Service plan?',
    hint: 'Single tenant and very large scale.',
    back: 'Most private networking needs are met in multitenant App Service with <strong>VNet integration</strong> for outbound traffic and a <strong>private endpoint</strong> for inbound. Choose <strong>ASE v3</strong> (Isolated v2 plans) when you need <strong>single-tenant</strong> compute for compliance, more scale than a Premium v3 plan\'s 30 instances (up to 200 instances per ASE), or an internal-only environment where every app is private by default. It costs more, so it needs one of those drivers.',
    tags: ['App Service Environment', 'App Service']
  },
  {
    id: 'azure-az305-fc-482',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure DNS Private Resolver: what do the inbound and outbound endpoints do?',
    hint: 'One lets on-premises ask Azure, the other lets Azure ask on-premises.',
    back: 'The <strong>inbound endpoint</strong> gives the VNet a private IP that on-premises DNS servers can forward to (via conditional forwarders), so they resolve Azure private DNS zones such as <code>privatelink.blob.core.windows.net</code>. The <strong>outbound endpoint</strong>, with a <strong>forwarding ruleset</strong> linked to VNets, sends queries for chosen domains (for example <code>corp.contoso.com</code>) from Azure to on-premises DNS servers. It replaces custom DNS forwarder VMs.',
    tags: ['DNS Private Resolver', 'Hybrid DNS']
  },
  {
    id: 'azure-az305-fc-483',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How are NSG rules evaluated when NSGs are applied to both a subnet and a NIC?',
    hint: 'Direction decides the order; priority decides within an NSG.',
    back: '<strong>Inbound</strong>: the subnet NSG is evaluated first, then the NIC NSG; <strong>outbound</strong>: the NIC NSG first, then the subnet NSG. Traffic must be allowed by <strong>both</strong>. Within an NSG, rules run in <strong>priority order</strong> (100 to 4096, lowest number first) and stop at the first match. Default rules (priority 65000+) allow VNet traffic and Azure Load Balancer probes and deny other inbound; they can be overridden but not deleted. Traffic within a subnet is also subject to the subnet NSG.',
    tags: ['NSG', 'Rule evaluation']
  },
  {
    id: 'azure-az305-fc-484',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Application security groups vs service tags: what does each stand for in an NSG rule?',
    hint: 'Your VMs versus Microsoft\'s services.',
    back: 'An <strong>application security group</strong> is a group of <strong>your VM NICs</strong> defined by role (for example web or database); rules reference the group, so scaled-out VMs inherit the rule without IP addresses. A <strong>service tag</strong> represents the <strong>IP prefixes of an Azure service</strong> or category (for example <code>Storage.WestEurope</code>, <code>AzureLoadBalancer</code>, <code>Internet</code>) and is updated by Microsoft. Use ASGs for workload tiers and service tags for Azure services.',
    tags: ['Application security groups', 'Service tags']
  },
  {
    id: 'azure-az305-fc-485',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Firewall Basic, Standard and Premium: what does each SKU add?',
    hint: 'Small offices, most enterprises, and deep inspection.',
    back: '<strong>Basic</strong>: for small environments, with limited throughput (around 250 Mbps) and threat intelligence in alert mode only. <strong>Standard</strong>: autoscaling to high throughput, FQDN filtering in application rules, FQDN tags, threat intelligence alert-and-deny, DNS proxy and web categories. <strong>Premium</strong>: adds <strong>TLS inspection</strong>, signature-based <strong>IDPS</strong>, full-path <strong>URL filtering</strong> and richer web categories, for regulated or high-security environments.',
    tags: ['Azure Firewall', 'SKUs']
  },
  {
    id: 'azure-az305-fc-486',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'In what order does Azure Firewall process rules in a firewall policy?',
    hint: 'Groups by priority, then rule types in a fixed sequence.',
    back: 'Threat intelligence filtering (when set to deny) is applied first. Rules are organized in <strong>rule collection groups</strong>, processed by priority (lowest number first); within each group, <strong>DNAT</strong> collections are processed before <strong>network</strong> collections, which are processed before <strong>application</strong> collections, each by collection priority. A network rule match stops processing, so application rules never see that flow. Rules from a parent policy are processed before the child policy\'s rules.',
    tags: ['Azure Firewall', 'Rule processing']
  },
  {
    id: 'azure-az305-fc-487',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'DDoS Network Protection vs DDoS IP Protection: what does each include?',
    hint: 'Same mitigation engine; the extras differ.',
    back: 'Both provide adaptive, traffic-profiled mitigation, attack telemetry, alerts and mitigation reports on top of the free infrastructure protection. <strong>Network Protection</strong> is a plan linked to VNets that covers every public IP in them and adds <strong>DDoS Rapid Response</strong> support, <strong>cost protection</strong> credits for attack-driven scale-out, and a WAF discount. <strong>IP Protection</strong> is billed per public IP and omits those three extras; it suits a small number of protected addresses.',
    tags: ['DDoS Protection', 'SKUs']
  },
  {
    id: 'azure-az305-fc-488',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'WAF policies: detection vs prevention mode, and how do custom and managed rules interact?',
    hint: 'Log first, block later; custom rules go first.',
    back: '<strong>Detection</strong> mode logs matches without blocking, useful while tuning a new policy; <strong>prevention</strong> mode blocks requests that match. <strong>Custom rules</strong> (IP, geo, rate limit, match conditions) are evaluated <strong>before</strong> managed rules, and an allow or block action there ends evaluation. <strong>Managed rule sets</strong> (the Microsoft default rule set based on OWASP) use anomaly scoring, and <strong>exclusions</strong> or per-rule overrides handle false positives.',
    tags: ['WAF', 'Policy modes']
  },
  {
    id: 'azure-az305-fc-489',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Virtual Network Manager security admin rules: what do the Allow, Always Allow and Deny actions do relative to NSGs?',
    hint: 'Admin rules are evaluated first; the action decides whether NSGs get a say.',
    back: 'Security admin rules are evaluated <strong>before NSG rules</strong> across every VNet in the targeted network groups. <strong>Deny</strong> drops the traffic and NSGs are never consulted, so teams cannot override it. <strong>Always Allow</strong> permits the traffic and skips NSG evaluation, guaranteeing flows such as monitoring or management. <strong>Allow</strong> permits the traffic at the admin layer but still passes it to NSGs, which may deny it. Use them for organization-wide guardrails that application-owned NSGs cannot weaken.',
    tags: ['Virtual Network Manager', 'Security admin rules']
  },
  {
    id: 'azure-az305-fc-490',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Accelerated Networking: what does it do and what does it need?',
    hint: 'Skip the software switch.',
    back: '<strong>Accelerated Networking</strong> uses SR-IOV to let a VM\'s NIC talk directly to the physical network adapter, bypassing the host\'s virtual switch for data traffic. Result: <strong>lower latency and jitter</strong>, higher packets per second and lower CPU use in the guest. It requires a supported VM size (most general-purpose and compute-optimized sizes with two or more vCPUs) and a supported OS image with the right drivers, and is enabled per NIC at no extra cost.',
    tags: ['Accelerated Networking', 'Network performance']
  },
  {
    id: 'azure-az305-fc-491',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Proximity placement groups vs availability zones: what is the trade-off?',
    hint: 'Closer together or further apart.',
    back: 'A <strong>proximity placement group</strong> places VMs physically close, usually in one datacentre, for the <strong>lowest latency</strong> between tiers, but concentrates them in one failure domain area and can limit which sizes are available. <strong>Availability zones</strong> spread VMs across separate datacentres for <strong>resilience</strong>, adding some inter-zone latency. You can combine them per zone (a PPG pinned to one zone), for example for SAP application and database servers.',
    tags: ['Proximity placement groups', 'Availability zones']
  },
  {
    id: 'azure-az305-fc-492',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which Azure service should deliver cached web content to users worldwide today?',
    hint: 'The older CDN profiles are retired or retiring.',
    back: 'Use <strong>Azure Front Door</strong> (Standard or Premium), which combines a global CDN with caching, compression, TLS at the edge and dynamic site acceleration. <strong>Azure CDN from Edgio</strong> was retired in January 2025, and <strong>Azure CDN Standard from Microsoft (classic)</strong> is on a retirement path with migration to Front Door recommended. Front Door also adds WAF and origin health-based routing in the same service.',
    tags: ['Azure Front Door', 'CDN']
  },
  {
    id: 'azure-az305-fc-493',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Routing preference: Microsoft network vs Internet. What does each do to egress traffic?',
    hint: 'Cold-potato versus hot-potato routing.',
    back: '<strong>Microsoft network</strong> (default): traffic stays on Microsoft\'s global backbone until the edge point of presence closest to the user (cold-potato), giving the best performance at the standard egress price. <strong>Internet</strong>: traffic is handed to transit ISP networks close to the Azure region (hot-potato), with <strong>lower egress cost</strong> and best-effort performance. It is set on public IP addresses and storage accounts, and suits bulk, latency-tolerant egress.',
    tags: ['Routing preference', 'Egress cost']
  },
  {
    id: 'azure-az305-fc-494',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'HA ports on an internal load balancer: what exactly is it, and what design details matter for NVAs?',
    hint: 'One rule, every port and protocol.',
    back: 'An <strong>HA ports</strong> rule is a load-balancing rule on an <strong>internal Standard load balancer</strong> with protocol <strong>All</strong> and port <strong>0</strong>, balancing every TCP and UDP flow to the backend pool. UDRs point at the frontend IP as next hop, and health probes remove failed NVAs within seconds. Watch <strong>flow symmetry</strong>: return traffic must reach the same NVA, so use the same load balancer for both directions or SNAT on the NVA. It is not available on public load balancers.',
    tags: ['Load Balancer', 'HA ports', 'Network virtual appliance']
  },
  {
    id: 'azure-az305-fc-495',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How does a Gateway Load Balancer insert appliances into a traffic path?',
    hint: 'Chaining and encapsulation instead of routes.',
    back: 'You <strong>chain</strong> a Gateway Load Balancer frontend to a <strong>Standard public load balancer frontend</strong> or to a <strong>VM\'s public IP configuration</strong>. Traffic to that frontend is sent to the appliance pool through <strong>VXLAN</strong> tunnels (an internal and an external tunnel interface), inspected, and returned to the original path, keeping the client source IP and flow symmetry. No UDRs or changes to the application are needed, and providers can offer appliances as a service across tenants.',
    tags: ['Gateway Load Balancer', 'Network virtual appliance']
  },
  {
    id: 'azure-az305-fc-496',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Private Link service: how does the provider see consumer traffic, and how are connections approved?',
    hint: 'NAT hides the consumer\'s address unless you ask for it.',
    back: 'Consumer traffic arrives from a <strong>NAT IP</strong> in the provider\'s Private Link service subnet, so overlapping address spaces do not matter. To see the original source and the private endpoint\'s <strong>LinkID</strong>, enable <strong>TCP Proxy Protocol v2</strong> and have the application parse it. <strong>Visibility</strong> controls which subscriptions can find the service, <strong>auto-approval</strong> lists subscriptions whose connections are accepted automatically, and others wait for manual approval.',
    tags: ['Private Link service', 'Network security']
  },
  {
    id: 'azure-az305-fc-497',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Application Gateway: what do cookie-based affinity and connection draining each do?',
    hint: 'Keeping a user on one server versus letting a server leave gracefully.',
    back: '<strong>Cookie-based affinity</strong>: the gateway sets an affinity cookie and routes each user\'s later requests to the <strong>same backend server</strong>, needed when session state lives in server memory. <strong>Connection draining</strong>: when a server is removed or becomes unhealthy, existing connections are allowed to <strong>finish</strong> within a timeout while new requests go elsewhere, for smooth deployments and scale-in. Both are set in the backend settings.',
    tags: ['Application Gateway', 'Session affinity']
  },
  {
    id: 'azure-az305-fc-498',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Application Gateway for Containers vs the Application Gateway Ingress Controller (AGIC): how do they differ?',
    hint: 'New managed data plane versus a controller that programs a classic gateway.',
    back: '<strong>AGIC</strong> runs in the cluster and translates Ingress resources into configuration on a standard Application Gateway v2; updates can be slow and the gateway is shared infrastructure you size. <strong>Application Gateway for Containers</strong> is a newer managed layer 7 service outside the cluster, driven by the <strong>ALB Controller</strong> from <strong>Gateway API</strong> or Ingress resources, with near real-time updates, weighted traffic splitting, mutual TLS and higher scale. New AKS designs should prefer it.',
    tags: ['Application Gateway for Containers', 'AKS']
  },
  {
    id: 'azure-az305-fc-499',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Which Network Watcher tools diagnose connectivity and security problems, and what replaces NSG flow logs?',
    hint: 'Verify a flow, find the next hop, test a path, log traffic.',
    back: '<strong>IP flow verify</strong>: tells whether an NSG rule allows or denies a given flow and which rule. <strong>Next hop</strong>: shows the route a packet will take from a VM. <strong>Connection troubleshoot</strong>: tests a path end to end and reports where it fails. <strong>Connection monitor</strong>: continuous latency and loss tests. <strong>VNet flow logs</strong> record traffic at the virtual network level and replace NSG flow logs, which no longer accept new configurations and are being retired.',
    tags: ['Network Watcher', 'Flow logs']
  },
  {
    id: 'azure-az305-fc-500',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What limits a VM\'s network throughput in Azure?',
    hint: 'It is set by the VM, not by how many NICs it has.',
    back: 'Each VM size has an <strong>expected network bandwidth</strong> that caps <strong>outbound</strong> traffic across all its NICs combined; inbound traffic is not metered against the same limit, though other resources may constrain it. Adding NICs does <strong>not</strong> raise the cap. To get more throughput, choose a larger or network-optimized size, and enable Accelerated Networking to reach the size\'s limit with less CPU. Connection and flow limits also apply per VM.',
    tags: ['Virtual machines', 'Network bandwidth']
  }
];

export default AZURE_AZ305_FLASHCARDS_20;
