export const AZURE_AZ305_FLASHCARDS_19 = [
  {
    id: 'azure-az305-fc-451',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Online or offline transfer to Azure: how do you decide for a large data set?',
    hint: 'Divide the data by the usable bandwidth and compare with the deadline.',
    back: 'Estimate transfer time as <strong>data size divided by usable bandwidth</strong>: 10 TB over 1 Gbps is about a day, but 300 TB over 100 Mbps is roughly nine months. If the network can move the data within the deadline without starving other traffic, transfer <strong>online</strong> (AzCopy, Storage Mover, Data Factory). If not, ship it <strong>offline</strong> with Data Box, then catch up changes online. Also count ongoing change rate: continuous updates favour an online tool for the final sync.',
    tags: ['Data transfer', 'Data Box']
  },
  {
    id: 'azure-az305-fc-452',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Data Box Disk vs Azure Data Box: how do you choose the offline device?',
    hint: 'Size of the data set, and how many devices you want to handle.',
    back: '<strong>Data Box Disk</strong>: a small set of encrypted SSDs shipped to you and connected over USB or SATA; suited to tens of terabytes, such as a branch office or a single project. <strong>Data Box</strong>: a rugged network-attached appliance holding far more, loaded over SMB or NFS at 10 Gbps or faster; suited to hundreds of terabytes, with several devices ordered in parallel for petabyte-scale moves. Both upload into your storage account at the Azure datacentre and are then securely erased.',
    tags: ['Data Box', 'Offline transfer']
  },
  {
    id: 'azure-az305-fc-453',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'AzCopy copy vs AzCopy sync: what does each transfer?',
    hint: 'One compares both sides first.',
    back: '<strong>azcopy copy</strong> transfers everything matched by the source path (optionally skipping existing files with an overwrite setting); use it for an initial bulk load or one-off copies. <strong>azcopy sync</strong> compares source and destination by name and last-modified time and copies only new or changed files, optionally deleting files missing from the source; use it for repeated delta passes before a cutover. Between two storage accounts both run as server-side copies.',
    tags: ['AzCopy']
  },
  {
    id: 'azure-az305-fc-454',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Storage Mover: what are its building blocks?',
    hint: 'A resource in Azure, an agent on-premises, and definitions linking them.',
    back: 'A <strong>storage mover</strong> resource in Azure is the control plane. <strong>Agents</strong> are VMs you run beside the source storage; they register with the storage mover and do the actual copying. <strong>Endpoints</strong> describe a source (an SMB or NFS share) and a target (an Azure file share or Blob container). <strong>Projects</strong> group the migration of related shares, and <strong>job definitions</strong> pair a source and target endpoint with an agent and copy mode, and can be rerun for incremental passes.',
    tags: ['Storage Mover', 'Migration']
  },
  {
    id: 'azure-az305-fc-455',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'File share migration: when do you pick Azure File Sync, Azure Storage Mover or AzCopy?',
    hint: 'Keep a local cache, run a managed migration, or script it yourself.',
    back: '<strong>Azure File Sync</strong>: Windows file servers that should stay in place as caches of an Azure file share (cloud tiering, multi-site sync), or a gradual SMB migration with minimal user disruption. <strong>Azure Storage Mover</strong>: a centrally managed, repeatable migration of many SMB or NFS shares into Azure Files or Blob Storage with job tracking. <strong>AzCopy</strong> (or Robocopy for SMB): scriptable, ad hoc copies where a managed service is not needed.',
    tags: ['Azure File Sync', 'Storage Mover', 'AzCopy']
  },
  {
    id: 'azure-az305-fc-456',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How does an Azure Data Box import order protect the data from shipping to erasure?',
    hint: 'Encryption keys, locked devices and a documented wipe.',
    back: 'Data on the device is encrypted with <strong>AES-256</strong>; the unlock key (optionally a customer-managed key in Key Vault) is available only through the Azure portal. The rugged device is tamper-resistant and tracked through a chain of custody. After Microsoft uploads the data to your storage account and you verify it, the device disks are securely erased in line with <strong>NIST SP 800-88</strong> guidelines, and an erasure certificate is available in the order history.',
    tags: ['Data Box', 'Security']
  },
  {
    id: 'azure-az305-fc-457',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What changes as Azure retires default outbound access for VMs?',
    hint: 'Implicit internet access is no longer something to depend on.',
    back: 'Historically, a VM with no public IP, NAT gateway or load balancer outbound rule got <strong>default outbound access</strong> through a Microsoft-owned address that could change. Microsoft is retiring this: virtual networks created after <strong>31 March 2026</strong> get <strong>private subnets</strong> by default, with no implicit internet egress. Designs must use an <strong>explicit method</strong>: NAT gateway (preferred), load balancer outbound rules, a public IP on the NIC, or a firewall or NVA with a default route.',
    tags: ['Outbound connectivity', 'Default outbound access']
  },
  {
    id: 'azure-az305-fc-458',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'A subnet has a NAT gateway and a VM in it also has a public IP. Which one does outbound traffic use?',
    hint: 'One outbound method takes precedence over the others.',
    back: 'The <strong>NAT gateway</strong> takes precedence for outbound connections from the subnet over both <strong>instance-level public IPs</strong> and <strong>load balancer outbound rules</strong>, so the VM\'s outbound traffic leaves through the NAT gateway\'s addresses. The VM\'s own public IP (or a load balancer frontend) still serves <strong>inbound</strong> connections and their replies. This makes it safe to add a NAT gateway to fix SNAT exhaustion without removing existing public IPs used for inbound access.',
    tags: ['NAT gateway', 'Outbound connectivity']
  },
  {
    id: 'azure-az305-fc-459',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'SNAT ports: how do a NAT gateway and a Standard load balancer differ in providing them?',
    hint: 'Dynamic pool versus pre-allocated per instance.',
    back: 'A <strong>NAT gateway</strong> gives each attached public IP <strong>64,512 SNAT ports</strong>, supports up to 16 public IPs, and allocates ports dynamically on demand to any VM in the subnet, so bursty workloads rarely exhaust them. A <strong>Standard load balancer</strong> pre-allocates ports per backend instance: small default allocations, or explicit counts set in <strong>outbound rules</strong>, which must be sized manually and change when the pool grows. NAT gateway is the recommended outbound method.',
    tags: ['NAT gateway', 'SNAT', 'Load Balancer']
  },
  {
    id: 'azure-az305-fc-460',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Bastion SKUs: what do Developer, Basic, Standard and Premium add?',
    hint: 'Each tier builds on the last.',
    back: '<strong>Developer</strong>: free, shared infrastructure, one connection at a time from the portal, for dev/test. <strong>Basic</strong>: dedicated hosts, portal-based RDP and SSH. <strong>Standard</strong>: adds native client support (RDP/SSH from your own client), host scaling, shareable links, IP-based connections to peered or on-premises machines, and custom ports. <strong>Premium</strong>: adds graphical <strong>session recording</strong> and <strong>private-only</strong> deployment without a public IP.',
    tags: ['Azure Bastion', 'SKUs']
  },
  {
    id: 'azure-az305-fc-461',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Standard SKU public IP addresses: what behaviour do they have by default?',
    hint: 'Static, closed and zone-aware.',
    back: 'Standard public IPs are always <strong>statically allocated</strong>, are <strong>secure by default</strong> (closed to inbound traffic unless an NSG allows it), and can be <strong>zone-redundant</strong>, zonal or non-zonal; the zone setting is fixed at creation. They work with Standard load balancers, NAT gateways, firewalls and gateways, and support routing preference (Microsoft network or internet). The Basic SKU has been retired, so Standard is the only choice for new deployments.',
    tags: ['Public IP', 'Standard SKU']
  },
  {
    id: 'azure-az305-fc-462',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Public IP prefix vs custom IP prefix (BYOIP): what does each provide?',
    hint: 'Reserved Microsoft addresses versus your own.',
    back: 'A <strong>public IP prefix</strong> reserves a contiguous block of Microsoft-owned public addresses (for example a /28) in a region, from which you create static public IPs, so partners can allow-list one range that stays yours as services are added. A <strong>custom IP prefix</strong> lets you <strong>bring your own</strong> publicly routable range that you own to Azure, validated by a regional internet registry authorization, so existing customer allow lists keep working after migration.',
    tags: ['Public IP prefix', 'BYOIP']
  },
  {
    id: 'azure-az305-fc-463',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Site-to-site VPN vs ExpressRoute: what is the core trade-off?',
    hint: 'Internet transport versus a private circuit.',
    back: '<strong>Site-to-site VPN</strong>: IPsec over the public internet; quick to set up, low cost, encrypted by default, but latency varies and throughput is bounded by the gateway SKU. <strong>ExpressRoute</strong>: private connectivity through a provider or ExpressRoute Direct; predictable latency, high bandwidth and an SLA on the connection, but weeks to provision, higher cost, and traffic is not encrypted by default. Many designs use VPN as a backup for ExpressRoute.',
    tags: ['VPN Gateway', 'ExpressRoute']
  },
  {
    id: 'azure-az305-fc-464',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ExpressRoute private peering vs Microsoft peering: what does each reach?',
    hint: 'Your address space versus Microsoft\'s public endpoints.',
    back: '<strong>Private peering</strong> connects on-premises networks to your <strong>virtual networks</strong> using private IP addresses, through an ExpressRoute gateway; this is what most hybrid designs need. <strong>Microsoft peering</strong> reaches Microsoft <strong>public services</strong> such as Microsoft 365 and Azure PaaS public endpoints over the circuit, using public IP addresses you own and route filters to choose which service communities are advertised. Azure public peering is deprecated.',
    tags: ['ExpressRoute', 'Peering']
  },
  {
    id: 'azure-az305-fc-465',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ExpressRoute Local, Standard and Premium: what does each circuit SKU reach?',
    hint: 'Metro, geopolitical region, or the world.',
    back: '<strong>Local</strong>: reaches only the Azure regions in or near the same metro as the peering location, with <strong>egress data included</strong> in the port price; the cheapest option for heavy traffic to a nearby region. <strong>Standard</strong>: reaches all regions in the same <strong>geopolitical region</strong>. <strong>Premium</strong>: reaches regions <strong>globally</strong>, raises the private peering route limit from 4,000 to 10,000 prefixes, and allows more virtual network links per circuit.',
    tags: ['ExpressRoute', 'SKUs']
  },
  {
    id: 'azure-az305-fc-466',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What does ExpressRoute Direct provide over a provider circuit?',
    hint: 'Your routers connect straight to Microsoft\'s.',
    back: '<strong>ExpressRoute Direct</strong> gives you a pair of dedicated <strong>10 Gbps or 100 Gbps</strong> ports directly on Microsoft\'s edge routers at a peering location, without a connectivity provider in between. You can carve multiple circuits from the port pair (for example separate production and test circuits), reach very high bandwidths, and enable <strong>MACsec</strong> for layer 2 encryption between your routers and Microsoft\'s. It suits massive data ingestion, regulated industries needing physical isolation, and large enterprises.',
    tags: ['ExpressRoute Direct', 'MACsec']
  },
  {
    id: 'azure-az305-fc-467',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ExpressRoute Global Reach vs FastPath vs Premium add-on: what problem does each solve?',
    hint: 'Site-to-site, gateway bypass, and geographic reach.',
    back: '<strong>Global Reach</strong>: links two ExpressRoute circuits so the <strong>on-premises sites</strong> behind them talk to each other over Microsoft\'s backbone. <strong>FastPath</strong>: sends data from the edge routers <strong>directly to VMs</strong>, bypassing the virtual network gateway for higher throughput and lower latency (needs a supported gateway SKU). <strong>Premium</strong>: lets one circuit reach virtual networks in <strong>any geography</strong> and raises route and VNet-link limits.',
    tags: ['ExpressRoute', 'Global Reach', 'FastPath']
  },
  {
    id: 'azure-az305-fc-468',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ExpressRoute resiliency levels: what distinguishes standard, high and maximum resiliency?',
    hint: 'Count the circuits and the peering locations.',
    back: '<strong>Standard resiliency</strong>: one circuit at one peering location (with its two links); a peering location outage takes it down. <strong>High resiliency</strong>: <strong>ExpressRoute Metro</strong>, a single circuit whose two links terminate in two different peering locations in the same metro. <strong>Maximum resiliency</strong>: <strong>two circuits in two different peering locations</strong>, each with redundant links, recommended for mission-critical workloads. Pair any of them with a zone-redundant gateway.',
    tags: ['ExpressRoute', 'Resiliency']
  },
  {
    id: 'azure-az305-fc-469',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Point-to-site VPN: which tunnel protocols and authentication methods are available?',
    hint: 'Three protocols, three ways to prove identity.',
    back: '<strong>Protocols</strong>: <strong>OpenVPN</strong> (TLS on 443, works on Windows, macOS, Linux, iOS and Android), <strong>IKEv2</strong> (Windows and macOS), and <strong>SSTP</strong> (Windows only, legacy). <strong>Authentication</strong>: Azure <strong>certificate</strong> (client certificates chained to an uploaded root), <strong>Microsoft Entra ID</strong> (OpenVPN only, with MFA and Conditional Access through the Azure VPN Client), and <strong>RADIUS</strong>, which can integrate with Active Directory or other identity systems.',
    tags: ['VPN Gateway', 'Point-to-site']
  },
  {
    id: 'azure-az305-fc-470',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Policy-based vs route-based VPN gateways: why is route-based almost always the answer?',
    hint: 'Tunnels, BGP and coexistence.',
    back: '<strong>Policy-based</strong> gateways use static traffic selectors, IKEv1, and support only <strong>one site-to-site tunnel</strong>, no point-to-site, no VNet-to-VNet and no coexistence with ExpressRoute; they exist only on the legacy Basic SKU. <strong>Route-based</strong> gateways use routing tables, IKEv2, support many tunnels, <strong>BGP</strong>, active-active, point-to-site and coexistence. If an on-premises device needs policy-based selectors, configure <strong>policy-based traffic selectors</strong> on a route-based gateway.',
    tags: ['VPN Gateway', 'Route-based VPN']
  },
  {
    id: 'azure-az305-fc-471',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Azure Virtual WAN Basic vs Standard: what does Standard add?',
    hint: 'Basic only does one kind of connection.',
    back: '<strong>Basic</strong> supports only <strong>site-to-site VPN</strong> connections to a hub. <strong>Standard</strong> adds <strong>ExpressRoute</strong>, point-to-site (user) VPN, full <strong>transit</strong> between VNets, branches and ExpressRoute through the hub, <strong>hub-to-hub</strong> connectivity across regions, secured hubs with Azure Firewall, NVAs and SD-WAN partners in the hub, and routing intent. You can upgrade from Basic to Standard, but not downgrade.',
    tags: ['Virtual WAN']
  },
  {
    id: 'azure-az305-fc-472',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'What does Azure Route Server do, and what does it not do?',
    hint: 'Control plane only.',
    back: '<strong>Azure Route Server</strong> is a managed BGP route reflector deployed in its own subnet (<code>RouteServerSubnet</code>). NVAs peer with it over BGP; it programs the routes they advertise into the VNet and peered spokes, and with <strong>branch-to-branch</strong> enabled it exchanges routes with ExpressRoute and VPN gateways. It does <strong>not</strong> forward data traffic, so packets still flow directly to the NVA or gateway, and it removes the need to maintain UDRs by hand when routes change.',
    tags: ['Route Server', 'BGP']
  },
  {
    id: 'azure-az305-fc-473',
    difficulty: 'easy',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'Hub-and-spoke peering: what do Allow gateway transit and Use remote gateways do?',
    hint: 'One setting on each side of the peering.',
    back: 'On the <strong>hub</strong> side of the peering, <strong>Allow gateway transit</strong> lets peered spokes use the hub\'s VPN or ExpressRoute gateway. On the <strong>spoke</strong> side, <strong>Use remote gateways</strong> makes the spoke use that hub gateway, so on-premises routes reach the spoke and spoke prefixes are advertised on-premises. The spoke then must not have its own gateway. Peering itself is not transitive, so spoke-to-spoke traffic still needs a hub firewall, NVA or Virtual Network Manager connectivity.',
    tags: ['Virtual network peering', 'Hub and spoke']
  },
  {
    id: 'azure-az305-fc-474',
    difficulty: 'hard',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'How do you force all internet-bound traffic from Azure VNets back through on-premises security over ExpressRoute?',
    hint: 'Advertise the broadest possible route from the datacentre.',
    back: 'Have the on-premises routers <strong>advertise a default route (0.0.0.0/0)</strong> over ExpressRoute private peering via BGP. The ExpressRoute gateway propagates it to the VNet and to spokes using gateway transit, so internet-bound traffic follows the circuit to the on-premises proxy or firewall (forced tunnelling). Plan exceptions: Azure Bastion does not support forced tunnelling, and some services need direct internet paths, so use specific UDRs or disable gateway route propagation on the subnets that need them.',
    tags: ['ExpressRoute', 'Forced tunnelling', 'BGP']
  },
  {
    id: 'azure-az305-fc-475',
    difficulty: 'medium',
    certId: 'azure-az305',
    domainId: 'd4',
    front: 'ExpressRoute and site-to-site VPN in the same VNet: what are the requirements, and which path wins?',
    hint: 'Subnet size, VPN type, and route preference.',
    back: 'Both gateways live in the same <strong>GatewaySubnet</strong>, which must be <strong>/27 or larger</strong>; the VPN gateway must be <strong>route-based</strong> and not the Basic SKU. Azure picks routes by <strong>longest prefix match</strong> first; when ExpressRoute and VPN advertise the same prefix, <strong>ExpressRoute is preferred</strong>, so the VPN carries traffic only when ExpressRoute routes are withdrawn. Use BGP on the VPN so failover happens automatically.',
    tags: ['ExpressRoute', 'VPN Gateway', 'Coexistence']
  }
];

export default AZURE_AZ305_FLASHCARDS_19;
