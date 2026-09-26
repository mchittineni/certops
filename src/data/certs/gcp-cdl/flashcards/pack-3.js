export const GCP_CDL_FLASHCARDS_3 = [
  {
    id: "gcp-cdl-fc-51",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Public vs private cloud: what is the core difference?",
    hint: "Who else uses the hardware?",
    back: "A <strong>public cloud</strong> delivers on-demand services from a provider's <strong>shared, multi-tenant</strong> infrastructure, billed by use, with near-unlimited capacity. A <strong>private cloud</strong> delivers cloud capabilities such as self-service and automation on infrastructure <strong>dedicated to one organization</strong>, giving more control at the cost of capital spend and capped capacity.",
    tags: ["Public cloud", "Private cloud"]
  },
  {
    id: "gcp-cdl-fc-52",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Hybrid cloud vs multicloud: what does each term describe?",
    hint: "They measure different things, so an estate can be both.",
    back: "<strong>Hybrid cloud</strong> combines on-premises or private infrastructure with public cloud, connected so workloads interoperate. <strong>Multicloud</strong> means using <strong>two or more public cloud providers</strong>. An estate with a data center plus two public providers is <strong>hybrid multicloud</strong>.",
    tags: ["Hybrid cloud", "Multicloud"]
  },
  {
    id: "gcp-cdl-fc-53",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What business situations typically lead to a hybrid cloud?",
    hint: "Something has to stay where it is, at least for now.",
    back: "Systems that <strong>cannot move yet</strong> (a mainframe core, specialized hardware), <strong>regulatory or residency</strong> needs to keep certain data on site, <strong>low-latency processing</strong> at factories or stores, existing hardware investments worth using (cloud bursting), and the <strong>transition period</strong> of any phased migration.",
    tags: ["Hybrid cloud", "Use cases"]
  },
  {
    id: "gcp-cdl-fc-54",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are the business benefits of a multicloud strategy?",
    hint: "Choice, leverage and resilience.",
    back: "<strong>Best-of-breed services</strong> (each provider for its strengths), reduced <strong>vendor lock-in</strong> and more negotiating leverage, lower <strong>concentration risk</strong> for critical services (a growing regulatory concern in finance), and flexibility after mergers that bring in other providers.",
    tags: ["Multicloud", "Benefits"]
  },
  {
    id: "gcp-cdl-fc-55",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are the main challenges of multicloud, and how are they usually addressed?",
    hint: "Every provider brings its own tools.",
    back: "Challenges: <strong>operational complexity</strong> (different consoles, APIs and tools), <strong>inconsistent security and policy</strong>, <strong>skills</strong> spread thin, data transfer cost and lost volume discounts. Mitigations: a <strong>consistent management layer</strong> on open technology (Kubernetes fleets with centrally applied policy, as in GKE Enterprise), unified observability and identity, and multicloud-capable data tools such as BigQuery Omni.",
    tags: ["Multicloud", "Challenges"]
  },
  {
    id: "gcp-cdl-fc-56",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is cloud bursting?",
    hint: "Overflow for peaks.",
    back: "A hybrid pattern where an application runs <strong>primarily on-premises</strong> and draws <strong>extra capacity from the public cloud</strong> when demand exceeds local resources, such as month-end batch runs or seasonal traffic. The organization keeps using hardware it owns and pays for cloud only during peaks.",
    tags: ["Hybrid cloud", "Cloud bursting"]
  },
  {
    id: "gcp-cdl-fc-57",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is Google Distributed Cloud, and when would a business use it?",
    hint: "Google Cloud outside Google's data centers.",
    back: "<strong>Google Distributed Cloud</strong> extends Google Cloud infrastructure and services to <strong>customer data centers and edge locations</strong> such as factories, stores and telecom sites. Use it for millisecond-latency processing on site, operation through network outages, or data that must stay local. The <strong>air-gapped</strong> variant runs with no connection to the internet or Google's public cloud for classified or sovereign workloads.",
    tags: ["Hybrid cloud", "Google Distributed Cloud"]
  },
  {
    id: "gcp-cdl-fc-58",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Is running virtual machines in your own data center the same as having a private cloud?",
    hint: "Virtualization is necessary, not sufficient.",
    back: "No. A <strong>private cloud</strong> adds cloud characteristics on top of virtualization: <strong>self-service provisioning</strong>, automation, pooled resources that scale within the owned capacity, and metering. A virtualized data center where servers still arrive by ticket is traditional IT, not a private cloud.",
    tags: ["Private cloud", "Definitions"]
  },
  {
    id: "gcp-cdl-fc-59",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How does a public cloud keep multiple tenants separated on shared hardware?",
    hint: "Isolation is technical, not just contractual.",
    back: "Through <strong>hardened virtualization</strong> that isolates workloads on the same host, separate <strong>identity and access boundaries</strong> per customer, isolated <strong>virtual networks</strong>, and <strong>encryption at rest by default</strong>. One tenant cannot see another's resources even though the physical servers are shared.",
    tags: ["Public cloud", "Multi-tenancy"]
  },
  {
    id: "gcp-cdl-fc-60",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is an IP address, and what are its two main versions?",
    hint: "A number that lets packets find a device.",
    back: "An <strong>IP address</strong> is a numeric label that identifies a device or interface on a network so data can be routed to and from it. <strong>IPv4</strong> uses 32-bit addresses written like 203.0.113.10 (about 4.3 billion possible); <strong>IPv6</strong> uses 128-bit addresses, providing a vastly larger space as IPv4 addresses run short.",
    tags: ["Networking", "IP address"]
  },
  {
    id: "gcp-cdl-fc-61",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Internal vs external IP addresses in Google Cloud: when do you use each?",
    hint: "Who needs to reach it?",
    back: "<strong>External (public) IP addresses</strong> are reachable from the internet; use them only for entry points such as load balancers or public endpoints. <strong>Internal (private) IP addresses</strong> are reachable only within the VPC network and connected networks; use them for databases and back-end services that should never be directly exposed.",
    tags: ["Networking", "IP address"]
  },
  {
    id: "gcp-cdl-fc-62",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does DNS do, and why does it matter during a migration?",
    hint: "The internet's phone book.",
    back: "The <strong>Domain Name System</strong> translates human-readable names such as shop.example.com into IP addresses. During a migration, updating the DNS record points users to the new servers <strong>without changing the address they type</strong>, so a hosting move can be invisible to customers.",
    tags: ["Networking", "DNS"]
  },
  {
    id: "gcp-cdl-fc-63",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is a DNS time-to-live (TTL), and how should it be handled before a cutover?",
    hint: "How long resolvers may reuse an answer.",
    back: "The <strong>TTL</strong> tells resolvers how long they may cache a DNS answer. A long TTL (for example 24 hours) means some users keep the old IP address for up to a day after a change. Before a cutover, <strong>lower the TTL to a few minutes well in advance</strong>, wait for the old TTL to expire, then switch, and raise it again once stable.",
    tags: ["Networking", "DNS", "Migration"]
  },
  {
    id: "gcp-cdl-fc-64",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is Cloud DNS, and what availability does it commit to?",
    hint: "An unusually strong SLA.",
    back: "<strong>Cloud DNS</strong> is Google Cloud's managed, scalable DNS service, serving public and private zones from Google's globally distributed name servers. It carries a <strong>100% availability SLA</strong>, removing self-hosted DNS servers as a single point of failure that can take a healthy application offline.",
    tags: ["Networking", "Cloud DNS"]
  },
  {
    id: "gcp-cdl-fc-65",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Latency vs bandwidth: what is the difference?",
    hint: "How long versus how much.",
    back: "<strong>Latency</strong> is the <strong>delay</strong> for data to travel between two points, usually round-trip time in milliseconds; users feel it as lag. <strong>Bandwidth</strong> is the <strong>capacity</strong> of a connection, the maximum data it can carry per second; it limits bulk transfers. A wide pipe can still have high latency.",
    tags: ["Networking", "Latency", "Bandwidth"]
  },
  {
    id: "gcp-cdl-fc-66",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why doesn't adding bandwidth fix a latency problem?",
    hint: "The speed of light does not get an upgrade.",
    back: "Latency is driven mainly by <strong>physical distance</strong> and the number of network hops; signals in fiber travel at a fixed speed, so a small message crossing an ocean takes the same time on a 1 Gbps or 100 Gbps link. Reduce latency by <strong>moving compute closer to users</strong> (a nearer region, edge caching) or by using a better path such as Google's private backbone.",
    tags: ["Networking", "Latency"]
  },
  {
    id: "gcp-cdl-fc-67",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Throughput vs bandwidth: are they the same thing?",
    hint: "Theoretical maximum versus what you actually get.",
    back: "No. <strong>Bandwidth</strong> is the theoretical maximum capacity of a link. <strong>Throughput</strong> is the data actually delivered in a period, reduced by congestion, packet loss, protocol overhead and latency. A 10 Gbps link might deliver far less throughput over a long, lossy path.",
    tags: ["Networking", "Bandwidth"]
  },
  {
    id: "gcp-cdl-fc-68",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How does Google's global external load balancer serve users worldwide from one IP address?",
    hint: "Anycast at the edge.",
    back: "It advertises a single <strong>anycast IP address</strong> from many Google edge locations. Each user's traffic enters Google's network at the nearest point, and the load balancer, a software-defined service rather than an appliance, sends it to the <strong>closest backend with healthy capacity</strong>, failing over to another region automatically if one becomes unhealthy.",
    tags: ["Global network", "Load balancing"]
  },
  {
    id: "gcp-cdl-fc-69",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Which IP ranges are reserved for private networks, and why must they be planned before going hybrid?",
    hint: "Three well-known blocks, and two sides that must not collide.",
    back: "RFC 1918 reserves <strong>10.0.0.0/8</strong>, <strong>172.16.0.0/12</strong> and <strong>192.168.0.0/16</strong> for internal use; they are not routed on the public internet. Every organization reuses them, so before connecting a data center to a cloud VPC the ranges on each side must be chosen to <strong>not overlap</strong>, otherwise traffic cannot be routed unambiguously and networks must be renumbered.",
    tags: ["Networking", "IP address"]
  },
  {
    id: "gcp-cdl-fc-70",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Public vs private DNS zones in Cloud DNS: who can resolve each?",
    hint: "The whole internet versus your own networks.",
    back: "A <strong>public zone</strong> publishes records that anyone on the internet can resolve, such as the address of a company's website. A <strong>private zone</strong> holds internal names, such as database hosts, that resolve <strong>only from the VPC networks you authorize</strong>, so internal systems get friendly names without being advertised publicly.",
    tags: ["Networking", "DNS", "Cloud DNS"]
  },
  {
    id: "gcp-cdl-fc-71",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How does Google's global network infrastructure support digital transformation?",
    hint: "Reach, speed and resilience without building your own.",
    back: "It lets organizations <strong>serve global users with low latency</strong> from one design, connect regions privately over Google's backbone, load-balance worldwide behind one IP, and absorb traffic spikes and attacks at the edge. Companies get a network built for billions of users without owning cables or points of presence.",
    tags: ["Global network", "Digital transformation"]
  },
  {
    id: "gcp-cdl-fc-72",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is a domain name, and how does it relate to an IP address?",
    hint: "For people, not routers.",
    back: "A <strong>domain name</strong> (such as example.com) is a human-readable address that people type or click. Routers do not use it; <strong>DNS maps it to one or more IP addresses</strong>, which are what the network uses to deliver traffic. The name can stay the same while the underlying IP addresses change.",
    tags: ["Networking", "DNS"]
  },
  {
    id: "gcp-cdl-fc-73",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why might a financial regulator care whether a bank uses one cloud provider or several?",
    hint: "Think about what happens if one supplier fails.",
    back: "Regulators increasingly assess <strong>concentration risk</strong> and operational resilience: heavy dependence on a single provider could make a bank vulnerable to that provider's prolonged outage, commercial changes or exit. Banks respond with documented <strong>exit plans</strong>, resilient designs across regions and, for some critical services, <strong>multicloud</strong> or hybrid capability.",
    tags: ["Multicloud", "Concentration risk"]
  },
  {
    id: "gcp-cdl-fc-74",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Private cloud: what does an organization gain and what does it give up?",
    hint: "Control has a price.",
    back: "Gains: <strong>maximum control</strong> over hardware, location and configuration, and dedicated resources for strict compliance or classification needs. Gives up: <strong>capital cost and upkeep</strong>, capacity capped by the hardware it bought (limited elasticity), and slower access to new managed services than a public cloud offers.",
    tags: ["Private cloud", "Trade-offs"]
  },
  {
    id: "gcp-cdl-fc-75",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why do most large migrations pass through a hybrid phase?",
    hint: "Hundreds of apps rarely move in one weekend.",
    back: "Applications move in <strong>waves over months or years</strong>, so for a period some run in the cloud and others on-premises, and they still need to exchange data. Connecting the two environments securely (for example with Cloud VPN or Interconnect) keeps the business running during the transition, which for some systems becomes a permanent hybrid state.",
    tags: ["Hybrid cloud", "Migration"]
  }
];

export default GCP_CDL_FLASHCARDS_3;
