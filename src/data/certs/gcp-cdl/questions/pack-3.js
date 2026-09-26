export const GCP_CDL_QUESTIONS_3 = [
  {
    id: "gcp-cdl-51",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A startup with no data center at all",
    scenario: "A two-year-old meal-kit startup has no servers of its own and no plans to build any. Its traffic triples every Sunday evening when customers choose next week's meals, and the founders want to pay only for the capacity they use while sharing the provider's infrastructure with other customers.",
    question: "Which cloud architecture fits the startup best?",
    options: [
      { id: 'A', text: "A multicloud setup, spreading every workload evenly across three providers to avoid depending on one of them." },
      { id: 'B', text: "A public cloud, with on-demand resources from a provider's shared infrastructure billed by consumption." },
      { id: 'C', text: "A private cloud, with dedicated infrastructure operated for the startup alone in a facility it controls." },
      { id: 'D', text: "A hybrid cloud, combining servers in the startup's own data center with capacity rented from a provider." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In a public cloud, a provider such as Google Cloud delivers compute, storage and networking on demand from shared, multi-tenant infrastructure and bills for what is consumed; with no data center and a spiky weekly load, that is the natural fit. A private cloud requires dedicated infrastructure and the capital to build it. A hybrid cloud presupposes an on-premises environment, which the startup does not have. Spreading every workload across three providers adds cost and complexity without solving any stated requirement.",
    referenceUrl: "https://cloud.google.com/learn/what-is-public-cloud",
    tags: ["Public cloud", "Cloud architectures"]
  },
  {
    id: "gcp-cdl-52",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Infrastructure dedicated to one defense contractor",
    scenario: "A defense contractor must run a classified design system on infrastructure used by no other organization and fully under its own control, but it still wants developers to provision virtual machines through self-service portals rather than filing tickets.",
    question: "Which cloud architecture describes what the contractor needs?",
    options: [
      { id: 'A', text: "A software-as-a-service model, in which a vendor runs the whole design application on its own shared platform." },
      { id: 'B', text: "A public cloud, in which the contractor's workloads share a provider's self-service infrastructure with many other tenants." },
      { id: 'C', text: "A multicloud architecture, in which the design system is split across several public providers for the organization's resilience." },
      { id: 'D', text: "A private cloud, where cloud-style self-service runs on infrastructure that is dedicated to a single organization." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A private cloud delivers cloud capabilities such as self-service provisioning and automation on infrastructure dedicated to one organization, whether in its own data center or a dedicated hosted environment; that combines the control the contractor must keep with the self-service its developers want. A public cloud is multi-tenant by design. Splitting the system across public providers still places it on shared infrastructure. A SaaS vendor's shared platform gives the contractor even less control.",
    referenceUrl: "https://cloud.google.com/discover/what-is-a-private-cloud",
    tags: ["Private cloud", "Cloud architectures"]
  },
  {
    id: "gcp-cdl-53",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Mobile apps in the cloud, ledger on the mainframe",
    scenario: "A retail bank will keep its core ledger on an on-premises mainframe for at least five more years, but it wants to build new mobile and web front ends on Google Cloud that call the ledger through secure connections, so customers get modern features without a risky core replacement.",
    question: "Which architecture is the bank adopting?",
    options: [
      { id: 'A', text: "Private cloud, with all of the bank's workloads kept on dedicated on-premises infrastructure in its own data centers." },
      { id: 'B', text: "Public cloud only, with the ledger retired and every workload running on the provider's shared infrastructure." },
      { id: 'C', text: "Multicloud, with the bank's workloads distributed across services from two or more public cloud providers." },
      { id: 'D', text: "Hybrid cloud, with on-premises systems and public cloud services connected so they work together as one estate." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A hybrid cloud combines on-premises or private infrastructure with public cloud services, connected so workloads in each can interoperate; keeping the mainframe ledger while building front ends on Google Cloud is a common hybrid pattern that modernizes customer experience without replacing the core. Multicloud describes using several public providers, and only one is involved here. A private-only design would put the new front ends on-premises too. Public-only would require retiring the mainframe, which the bank has ruled out.",
    referenceUrl: "https://cloud.google.com/learn/what-is-hybrid-cloud",
    tags: ["Hybrid cloud", "Cloud architectures"]
  },
  {
    id: "gcp-cdl-54",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Analytics on one provider, ERP on another",
    scenario: "A consumer electronics company runs its ERP system on another public cloud provider under a long-term contract. It wants to use Google Cloud for analytics and AI because of its data platform, while keeping the ERP where it is. It has no data centers of its own.",
    question: "Which cloud architecture will the company be operating?",
    options: [
      { id: 'A', text: "A multicloud architecture, because it will use services from more than one public cloud provider." },
      { id: 'B', text: "A private cloud, because each provider will dedicate isolated hardware to the company's workloads." },
      { id: 'C', text: "A hybrid cloud, because the company will link on-premises servers with a single public cloud provider." },
      { id: 'D', text: "A community cloud, because several companies in its industry will share one set of infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Multicloud means using services from two or more public cloud providers, often choosing each for its strengths; running the ERP on one provider and analytics and AI on Google Cloud is exactly that. It is not hybrid, because the company has no on-premises environment to connect. Public providers do not become private clouds simply because a customer uses them, and nothing indicates dedicated hardware. A community cloud is shared by organizations with common requirements, which is not described.",
    referenceUrl: "https://cloud.google.com/learn/what-is-multicloud",
    tags: ["Multicloud", "Cloud architectures"]
  },
  {
    id: "gcp-cdl-55",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Borrowing cloud capacity for month-end risk runs",
    scenario: "An asset manager's on-premises compute grid handles daily risk calculations comfortably, but month-end runs need four times the capacity for about 36 hours. The firm does not want to buy hardware that would sit idle for the rest of the month and has already invested in its current grid.",
    question: "Which hybrid pattern best fits this requirement?",
    options: [
      { id: 'A', text: "Keeping all risk runs on-premises and running month-end calculations over several extra days." },
      { id: 'B', text: "Buying enough extra on-premises capacity to cover the month-end peak and leaving it idle otherwise." },
      { id: 'C', text: "Moving the whole risk grid's capacity to the cloud permanently and decommissioning the on-premises hardware." },
      { id: 'D', text: "Cloud bursting, where the grid keeps base load and extra month-end work spills over to cloud capacity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud bursting is a hybrid pattern in which an application runs primarily on-premises and draws extra capacity from the public cloud when demand exceeds local resources; the firm keeps using the grid it has paid for and rents capacity only for the month-end peak. A full migration may make sense later, but it discards the existing investment and is not what the requirement asks. Buying peak hardware creates the idle capacity the firm wants to avoid. Stretching calculations over extra days delays results the business needs.",
    referenceUrl: "https://cloud.google.com/architecture/hybrid-multicloud-patterns-and-practices/cloud-bursting-pattern",
    tags: ["Hybrid cloud", "Cloud bursting"]
  },
  {
    id: "gcp-cdl-56",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Classifying an estate that spans everything",
    scenario: "After two acquisitions, a media group runs payroll in its own data center, video transcoding on Google Cloud and a content-management system on another public provider. An auditor's questionnaire asks the CIO to state the group's cloud architecture accurately in one term.",
    question: "How should the CIO describe this estate?",
    options: [
      { id: 'A', text: "Private cloud, because the payroll system runs on dedicated hardware that the media group owns and operates." },
      { id: 'B', text: "Multicloud only, because the presence of two public cloud providers outweighs whatever still runs on-premises." },
      { id: 'C', text: "Hybrid only, because any estate with an on-premises data center is classed as hybrid whatever else it contains." },
      { id: 'D', text: "Hybrid multicloud, because on-premises systems are combined with services from more than one public provider." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid and multicloud are independent dimensions: hybrid means on-premises or private infrastructure combined with public cloud, and multicloud means more than one public provider. The group has both, so the accurate description is hybrid multicloud, a term Google uses in its architecture guidance. Calling it multicloud only ignores the on-premises payroll. Calling it hybrid only ignores the second provider. Private cloud describes just one part of the estate, and a traditional data center is not automatically a private cloud.",
    referenceUrl: "https://cloud.google.com/architecture/hybrid-multicloud-patterns",
    tags: ["Hybrid cloud", "Multicloud"]
  },
  {
    id: "gcp-cdl-57",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "The price of building a private cloud",
    scenario: "A national rail operator's board is attracted to building its own private cloud because it would keep full control over hardware and data location. The CFO asks what the operator gives up compared with using a public cloud for the same workloads.",
    question: "What is the main trade-off of the private cloud option?",
    options: [
      { id: 'A', text: "The operator can no longer run virtual machines on its hardware and has to deploy every application in containers." },
      { id: 'B', text: "The operator loses the ability to decide which employees may access the systems and the data." },
      { id: 'C', text: "The operator carries the capital cost and upkeep, and its capacity is capped by the hardware it buys." },
      { id: 'D', text: "The operator must share its physical servers with other organizations that rent the same facility." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A private cloud gives maximum control, but the organization pays upfront for hardware, facilities and the people to run them, and its elasticity is limited to the capacity it has bought; public cloud offers near-unlimited capacity billed by use. Access control stays with the organization in any model. Private clouds are, by definition, not shared with other organizations. Private clouds routinely run virtual machines, so no move to containers is forced.",
    referenceUrl: "https://cloud.google.com/discover/what-is-a-private-cloud",
    tags: ["Private cloud", "Trade-offs"]
  },
  {
    id: "gcp-cdl-58",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Robots that cannot wait for a distant region",
    scenario: "An automotive plant uses AI vision to stop a robotic welding line within milliseconds when a defect appears. Round trips to the nearest cloud region take too long for that decision, and the plant's network link occasionally drops, yet the company wants cloud-style management and Google's AI tools.",
    question: "Which approach fits this requirement?",
    options: [
      { id: 'A', text: "A multicloud design that sends each image to two public providers and uses whichever answers first." },
      { id: 'B', text: "Running the vision model on a laptop at the line and emailing daily defect reports to the cloud team." },
      { id: 'C', text: "A hybrid design with cloud-managed infrastructure on site, such as Google Distributed Cloud at the edge." },
      { id: 'D', text: "Running the vision model only in the nearest cloud region and buying a faster internet link for the plant." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When decisions must happen in milliseconds or keep working through network outages, processing has to run on site; Google Distributed Cloud extends Google Cloud infrastructure and services to customer locations and the edge, managed like the cloud, which is a hybrid architecture. A faster link adds bandwidth but cannot remove the physical round-trip delay or the risk of a dropped connection. A standalone laptop gives up central management and reliability. Sending images to two distant providers still depends on the link and doubles cost.",
    referenceUrl: "https://cloud.google.com/distributed-cloud",
    tags: ["Hybrid cloud", "Edge"]
  },
  {
    id: "gcp-cdl-59",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A regulator worried about concentration risk",
    scenario: "A European insurer's regulator has asked how the firm would cope if a single technology supplier suffered a prolonged failure or changed its terms. The board wants an architecture that reduces dependence on any one cloud provider for its most critical services.",
    question: "Which architecture most directly addresses the regulator's concern?",
    options: [
      { id: 'A', text: "A multicloud architecture in which critical services can run on more than one public cloud provider." },
      { id: 'B', text: "A single public cloud with critical workloads spread across three zones of one region for high availability." },
      { id: 'C', text: "A private cloud built on hardware from one manufacturer and operated by a single outsourcing partner." },
      { id: 'D', text: "A software-as-a-service suite from one vendor that covers policy, claims and billing in one product." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using more than one provider for critical services reduces concentration risk, meaning dependence on a single supplier's availability, pricing or terms, which financial regulators increasingly scrutinize; multicloud also gives negotiating leverage and access to each provider's strengths. Spreading across zones protects against a facility failure but not against a supplier-level problem. A private cloud from one manufacturer and one outsourcer simply moves the concentration elsewhere. A single SaaS vendor is the most concentrated option of all.",
    referenceUrl: "https://cloud.google.com/learn/what-is-multicloud",
    tags: ["Multicloud", "Concentration risk"]
  },
  {
    id: "gcp-cdl-60",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Three consoles, three security models",
    scenario: "A logistics company adopted two public clouds and kept its data center. Each environment now has its own deployment tools, access policies and monitoring, and the platform team spends most of its time translating between them. Security audits keep finding policies that differ from one environment to another.",
    question: "What approach would best address this multicloud challenge?",
    options: [
      { id: 'A', text: "Moving the most sensitive workloads back on-premises so that fewer of them are exposed to inconsistent policies." },
      { id: 'B', text: "A consistent management layer, such as Kubernetes-based fleet management, applying one set of policies everywhere." },
      { id: 'C', text: "Buying a third public cloud for new workloads so that no single provider becomes too dominant in the estate." },
      { id: 'D', text: "Assigning a separate specialist team to each environment so that every team masters its own provider's tools." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Operational complexity and inconsistent security are the main challenges of hybrid and multicloud estates. A consistent layer built on open technology, such as Kubernetes clusters managed as a fleet with centrally applied configuration and policy, as GKE Enterprise capabilities provide, lets one team deploy, secure and observe workloads the same way everywhere. Separate teams per environment entrench the divergence. Moving workloads on-premises shrinks the problem without solving it and gives up cloud benefits. Adding a third provider multiplies the complexity.",
    referenceUrl: "https://cloud.google.com/kubernetes-engine/fleet-management/docs",
    tags: ["Multicloud", "Management"]
  },
  {
    id: "gcp-cdl-61",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Half moved, half still in the data center",
    scenario: "A publisher plans to move 150 applications to Google Cloud over three years in waves. During that time some applications will run in the cloud while others remain in its data center, and many of them exchange data every hour.",
    question: "Which architecture describes the publisher's estate during the migration?",
    options: [
      { id: 'A', text: "A hybrid estate, since connected on-premises and cloud environments must work together for a period." },
      { id: 'B', text: "A private cloud estate, since every application stays on infrastructure dedicated to the publisher." },
      { id: 'C', text: "A multicloud estate, since applications will be split between two different public cloud providers." },
      { id: 'D', text: "A SaaS estate, since the migrated applications will be delivered to the publisher by software vendors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Most large migrations pass through a hybrid phase in which on-premises and cloud environments run side by side and are connected so applications can keep exchanging data; for some organizations this becomes a permanent state. Only one public provider is involved, so it is not multicloud. Migrated applications move to Google Cloud's shared infrastructure, so the estate is not all private. Moving applications to cloud infrastructure does not turn them into vendor-delivered SaaS.",
    referenceUrl: "https://cloud.google.com/learn/what-is-hybrid-cloud",
    tags: ["Hybrid cloud", "Migration"]
  },
  {
    id: "gcp-cdl-62",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Picking the best service from each provider",
    scenario: "A healthcare analytics company likes Google Cloud's data and AI services, depends on a productivity suite and identity service from another vendor's cloud, and uses a third provider's specialized imaging service. Its strategy document says each provider was chosen deliberately.",
    question: "Which business benefit of multicloud does this strategy reflect?",
    options: [
      { id: 'A', text: "Simpler operations, because each additional provider reduces the number of tools the team must learn." },
      { id: 'B', text: "Automatic data residency, because spreading workloads across providers keeps data in one country." },
      { id: 'C', text: "Lower total cost, because using three providers always costs the business less than consolidating on one." },
      { id: 'D', text: "Best-of-breed choice, because the company can use the service that best fits each business need." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A key reason organizations adopt multicloud is to choose the best service for each need, such as one provider's data and AI platform, another's productivity suite and a specialist service elsewhere. Multicloud does not automatically lower cost; it can lose volume discounts and add integration work. It usually makes operations more complex, not simpler. Data residency depends on region choices, not on the number of providers.",
    referenceUrl: "https://cloud.google.com/learn/what-is-multicloud",
    tags: ["Multicloud", "Best of breed"]
  },
  {
    id: "gcp-cdl-63",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Secret workloads that must never touch the internet",
    scenario: "A national defense agency wants cloud services such as managed databases and AI for top-secret intelligence data, but its rules require that the environment has no connection to the internet or to any public cloud, and that it runs in facilities the agency controls.",
    question: "Which option addresses this requirement?",
    options: [
      { id: 'A', text: "A public cloud region in the agency's country, protected by customer-managed encryption keys." },
      { id: 'B', text: "An air-gapped private cloud offering, for example Google Distributed Cloud air-gapped, run on site." },
      { id: 'C', text: "A multicloud setup that splits the intelligence data between two public cloud providers." },
      { id: 'D', text: "A software-as-a-service analytics tool hosted by a vendor in a certified public data center." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Distributed Cloud air-gapped delivers cloud services, including managed databases and AI, in the customer's own or designated facilities with no connection to the internet or to Google's public cloud, meeting the strictest sovereignty and classification needs in a private cloud form. A public cloud region, even with customer-managed keys, is connected to the internet and shared. Splitting data between public providers keeps it on connected infrastructure. A vendor-hosted SaaS tool sits in a public data center, which the rules forbid.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/hosted/docs/latest/gdch/overview",
    tags: ["Private cloud", "Sovereignty"]
  },
  {
    id: "gcp-cdl-64",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "What an IP address does",
    scenario: "A retailer's store managers keep hearing that each point-of-sale terminal, server and cloud virtual machine needs an IP address. The operations director asks for a simple explanation of what that address is for before approving a network redesign.",
    question: "What is an IP address?",
    options: [
      { id: 'A', text: "A password that authenticates a device before it is allowed to join the retailer's store network." },
      { id: 'B', text: "A numeric label that identifies a device on a network so that data can be routed to and from it." },
      { id: 'C', text: "A measure of how much data a network connection can carry each second between two locations." },
      { id: 'D', text: "A human-readable name such as shop.example.com that customers type to reach the retailer's site." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An Internet Protocol address is a numeric label, such as 203.0.113.10 in IPv4 or a longer IPv6 value, that identifies a device or interface on a network so packets can be routed to and from it. The human-readable name is a domain name, which DNS translates into an IP address. The amount of data a connection carries per second is bandwidth. Authentication uses credentials or certificates, not the address itself.",
    referenceUrl: "https://cloud.google.com/vpc/docs/ip-addresses",
    tags: ["Networking", "IP address"]
  },
  {
    id: "gcp-cdl-65",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "How customers find the new website",
    scenario: "A bakery chain is moving its ordering site to Google Cloud. Customers will keep typing orders.examplebakery.com in their browsers, but the site will now live on servers with completely different numeric addresses.",
    question: "Which networking service makes sure customers reach the new servers?",
    options: [
      { id: 'A', text: "A load balancer, which spreads incoming requests across several servers that host the same site." },
      { id: 'B', text: "The Domain Name System, which translates the site's name into the IP address where it is now hosted." },
      { id: 'C', text: "A content delivery network, which caches the site's images at edge locations near the chain's customers." },
      { id: 'D', text: "A virtual private network, which creates an encrypted tunnel between the bakery's offices and the cloud." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Domain Name System maps human-readable domain names to IP addresses; updating the DNS record for orders.examplebakery.com to the new address sends customers to the cloud-hosted site without any change on their side. Google Cloud offers this as Cloud DNS. A load balancer distributes traffic once it arrives but does not tell browsers where to go. A VPN secures private connectivity for the bakery's own staff. A CDN speeds up content delivery, but browsers still need DNS to find the site.",
    referenceUrl: "https://cloud.google.com/dns/docs/overview",
    tags: ["Networking", "DNS"]
  },
  {
    id: "gcp-cdl-66",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "The delay players feel in an online game",
    scenario: "Players in a competitive online shooter complain that there is a noticeable pause between pressing a button and seeing the result, even though downloads on their connections are fast. The studio's network engineer says the problem is not the size of their connections.",
    question: "Which networking concept describes the problem players are experiencing?",
    options: [
      { id: 'A', text: "Latency, the time it takes for data to travel from the player to the server and back." },
      { id: 'B', text: "Bandwidth, the maximum amount of data that a connection is able to carry per second." },
      { id: 'C', text: "Packet size, the number of bytes contained in each unit of data sent across the network." },
      { id: 'D', text: "Throughput, the amount of data actually delivered over a connection in a given period." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Latency is the delay for data to travel between two points, often measured as round-trip time in milliseconds; it is what players feel as lag between an action and its result, and it depends mainly on distance and the number of network hops. Bandwidth is capacity, and fast downloads show capacity is fine. Throughput is the data actually delivered and is closely tied to bandwidth, not to responsiveness. Packet size affects efficiency but is not the delay players describe.",
    referenceUrl: "https://cloud.google.com/solutions/best-practices-compute-engine-region-selection",
    tags: ["Networking", "Latency"]
  },
  {
    id: "gcp-cdl-67",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Moving a video archive over a thin connection",
    scenario: "A film studio needs to send 80 TB of raw footage to Google Cloud each week. Transfers over its office connection take far longer than a week, even though each individual file begins uploading almost instantly.",
    question: "Which networking concept is limiting the studio?",
    options: [
      { id: 'A', text: "DNS resolution, because the upload tool cannot translate the storage endpoint's name quickly." },
      { id: 'B', text: "Bandwidth, because the connection cannot carry enough data per second for this weekly volume." },
      { id: 'C', text: "IP address exhaustion, because the office has run out of addresses to assign to its workstations." },
      { id: 'D', text: "Latency, because each packet on the connection takes too long to reach the nearest region and return." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bandwidth is the maximum data a connection can carry per unit of time; moving 80 TB a week needs sustained capacity of roughly 1 Gbps or more, so a small office link simply cannot keep up, and options such as a higher-capacity dedicated connection or an offline transfer appliance are the fix. Latency affects responsiveness, and uploads start almost instantly, so delay is not the constraint. Slow DNS would delay the start of transfers, not their total duration. Running out of IP addresses would stop devices joining the network, not slow bulk transfers.",
    referenceUrl: "https://cloud.google.com/network-connectivity/docs/interconnect/concepts/overview",
    tags: ["Networking", "Bandwidth"]
  },
  {
    id: "gcp-cdl-68",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A faster pipe that did not fix slow trades",
    scenario: "A trading firm in Singapore sends orders to servers in a distant region. It upgraded its connection from 1 Gbps to 10 Gbps, yet each order still takes as long as before to be acknowledged, and traders are losing to competitors whose systems are physically closer to the exchange.",
    question: "What should the firm change to reduce order times?",
    options: [
      { id: 'A', text: "Assign the order servers new public IP addresses, since fresh addresses route more directly." },
      { id: 'B', text: "Upgrade the connection again to 100 Gbps, since more bandwidth cuts the time for each order to reach the exchange." },
      { id: 'C', text: "Run the order system in a region close to the exchange, since latency is driven mainly by distance." },
      { id: 'D', text: "Shorten the order system's domain name, since shorter names are resolved much more quickly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Latency is bounded by physical distance and the path data takes, so an order sent across an ocean takes the same time on a 1 Gbps or a 10 Gbps link; placing the system in a nearby region cuts the round trip. More bandwidth increases how much data can flow at once, which does not help small, latency-sensitive messages. New IP addresses do not change the physical route. Domain name length has no meaningful effect, and names are resolved once and cached.",
    referenceUrl: "https://cloud.google.com/solutions/best-practices-compute-engine-region-selection",
    tags: ["Networking", "Latency", "Region selection"]
  },
  {
    id: "gcp-cdl-69",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Databases that should not be reachable from outside",
    scenario: "An online travel agency is moving to Google Cloud. Its public website must be reachable by customers anywhere, but its customer database and payment services should communicate only with the website's servers and never be directly reachable from the internet.",
    question: "How should IP addressing be planned for this design?",
    options: [
      { id: 'A', text: "Give every server a public IP address and rely on complex passwords to keep attackers out." },
      { id: 'B', text: "Assign all servers the same shared public IP address so that attackers cannot tell them apart." },
      { id: 'C', text: "Give the databases public IP addresses and hide the website behind internal addresses instead." },
      { id: 'D', text: "Expose the website publicly and give the databases internal IPs that work solely inside the network." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Public IP addresses are reachable from the internet, while internal (private) IP addresses are routable only within the organization's network, such as a VPC. Giving customer-facing entry points public addresses, ideally behind a load balancer, and giving databases internal addresses only keeps sensitive systems off the internet. Giving everything a public address enlarges the attack surface, and passwords alone are weak protection. Reversing the roles would block customers and expose data. Sharing one address does not hide servers or restrict who can reach them.",
    referenceUrl: "https://cloud.google.com/compute/docs/ip-addresses",
    tags: ["Networking", "IP address"]
  },
  {
    id: "gcp-cdl-70",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "DNS that cannot be the weak link",
    scenario: "An online bank has had two outages in a year because its self-hosted DNS servers failed, leaving customers unable to find the banking site even though the application itself was running. The bank wants name resolution that scales automatically and is backed by the strongest possible availability commitment.",
    question: "Which option meets this requirement?",
    options: [
      { id: 'A', text: "Publishing the site's IP address in marketing emails so customers can bypass DNS during outages." },
      { id: 'B', text: "Adding a third self-hosted DNS server in the same data center to give the bank more redundancy and availability." },
      { id: 'C', text: "Moving the banking application to a larger machine so that DNS queries are answered more quickly." },
      { id: 'D', text: "Using Cloud DNS, a managed, globally distributed DNS service with a 100% availability SLA." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud DNS is Google's managed authoritative DNS service, served from Google's global network of name servers, scaling automatically and offering a 100% availability service level agreement, which removes self-hosted DNS as a single point of failure. A third server in the same data center still shares that site's failures. Asking customers to type IP addresses is unworkable and breaks whenever addresses change. The application's size has nothing to do with DNS servers failing.",
    referenceUrl: "https://cloud.google.com/dns/sla",
    tags: ["Networking", "DNS", "Cloud DNS"]
  },
  {
    id: "gcp-cdl-71",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "One address for customers on every continent",
    scenario: "An e-learning company serves students in North America, Europe and Asia from three Google Cloud regions. It wants a single IP address for its site worldwide, with each student automatically sent to the nearest healthy region and traffic moved elsewhere if a region fails, without managing separate DNS records for each continent.",
    question: "How does Google's global network make this possible?",
    options: [
      { id: 'A', text: "By a global external load balancer with one anycast IP that routes each user to the closest healthy backend." },
      { id: 'B', text: "By running a VPN tunnel from every student's device over the global internet to whichever region is chosen." },
      { id: 'C', text: "By replicating the site into a single multi-region storage bucket that students download before each lesson." },
      { id: 'D', text: "By giving each region its own public IP address and asking students to bookmark whichever one is healthy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google's global external Application Load Balancer is a software-defined service running at Google's network edge: a single anycast IP address is announced from many locations, user traffic enters Google's network nearby, and the load balancer sends it to the closest backend with capacity, failing over automatically if a region is unhealthy. Separate regional addresses push routing decisions onto users. A storage bucket cannot run an interactive application. Per-student VPN tunnels are impractical and do not provide automatic routing or failover.",
    referenceUrl: "https://cloud.google.com/load-balancing/docs/https",
    tags: ["Global network", "Load balancing"]
  },
  {
    id: "gcp-cdl-72",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Connecting applications in two continents privately",
    scenario: "A fashion retailer runs its order service in a US region and its warehouse system in a European region of Google Cloud. With its previous provider, it had to build and maintain encrypted tunnels between separate regional networks so the two could talk privately.",
    question: "Which characteristic of Google Cloud's network simplifies this design?",
    options: [
      { id: 'A', text: "VPC networks require public IP addresses for all traffic that crosses from one region to another." },
      { id: 'B', text: "VPC networks connect regions only through Cloud VPN tunnels that the customer configures and manages." },
      { id: 'C', text: "VPC networks are global, so subnets in different regions communicate privately over Google's backbone." },
      { id: 'D', text: "VPC networks are regional, so the retailer must deploy both services in one region to connect them privately." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Google Cloud a VPC network is a global resource: its subnets are regional, but resources in any region of the same network can communicate using internal IP addresses over Google's private backbone, with no tunnels or public internet in between. That lets a multinational design connect services across continents simply. VPC networks are not limited to one region. Cross-region traffic within a VPC uses internal addresses, not public ones. Cloud VPN connects external networks to Google Cloud and is not needed between regions of one VPC.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc",
    tags: ["Global network", "VPC"]
  },
  {
    id: "gcp-cdl-73",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Customers still reaching the old servers",
    scenario: "A ticketing company switched its site's DNS record to new Google Cloud servers at 9 a.m. Hours later, many customers were still reaching the old data center, which had been shut down, because their networks kept using the previous answer. The record's time-to-live was set to 24 hours.",
    question: "What should the company have done before the cutover?",
    options: [
      { id: 'A', text: "Moved the site to a new domain name so that no resolver could hold an old answer for the existing domain." },
      { id: 'B', text: "Given the new servers the same IP addresses as the old ones by copying the addresses into the new VPC." },
      { id: 'C', text: "Increased the record's time-to-live to seven days so that resolvers would stop querying the old servers." },
      { id: 'D', text: "Lowered the record's time-to-live well ahead of the change so that resolvers refresh their cached answers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "DNS resolvers cache answers for the record's time-to-live, so a 24-hour TTL means some users keep the old IP address for up to a day after a change; lowering the TTL to a few minutes well before cutover, then waiting for the old TTL to expire, makes the switch take effect quickly. A new domain would break bookmarks, links and search rankings. A longer TTL makes stale answers last longer. The data center's public addresses belong to the old provider and cannot simply be copied into Google Cloud.",
    referenceUrl: "https://cloud.google.com/dns/docs/records-overview",
    tags: ["Networking", "DNS", "Migration"]
  },
  {
    id: "gcp-cdl-74",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Two networks using the same address range",
    scenario: "A retailer's stores and head office use internal addresses in the 10.0.0.0/16 range. A project team built its first Google Cloud VPC with subnets in the same range, and now that the network team wants to connect the data center to the cloud, traffic cannot be routed correctly between the two sides.",
    question: "What planning principle did the project team miss?",
    options: [
      { id: 'A', text: "Every subnet should use the same range as the data center so that devices on both sides look like one network." },
      { id: 'B', text: "Every cloud virtual machine should receive a public IP address so that routing never depends on internal ranges." },
      { id: 'C', text: "Internal IP ranges in the cloud must be planned so that they never overlap with the ranges used on-premises." },
      { id: 'D', text: "Every connection to the cloud should rely on DNS names alone, since routers resolve names instead of addresses." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When networks are connected, routers need each destination address to be unambiguous; if the VPC and the data center use overlapping internal ranges, traffic to 10.0.x.x cannot be delivered reliably to the right side. Planning non-overlapping internal ranges before building a hybrid connection avoids costly renumbering later. Public addresses on every VM would expose them to the internet and do not fix internal routing. Reusing the same range is the cause of the problem. DNS resolves names to addresses, but packets are still routed by IP address, so overlapping ranges remain a problem.",
    referenceUrl: "https://cloud.google.com/vpc/docs/vpc",
    tags: ["Networking", "IP address", "Hybrid cloud"]
  },
  {
    id: "gcp-cdl-75",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Sharing hardware with other companies",
    scenario: "A law firm's partners hesitate to use a public cloud because they have heard that their workloads would run on the same physical servers as other companies. They ask how public cloud providers keep one customer's workloads and data separate from another's.",
    question: "Which statement answers the partners' concern?",
    options: [
      { id: 'A', text: "Public cloud customers can see each other's resources, so firms must encrypt data before placing it in the cloud." },
      { id: 'B', text: "Public cloud workloads are separated only by contract terms, which make sharing data between customers illegal." },
      { id: 'C', text: "Public cloud is multi-tenant, but each customer is kept isolated by virtualization, identity and network controls." },
      { id: 'D', text: "Public cloud providers give every customer its own physical data center building so that nothing is ever shared." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Public clouds are multi-tenant: customers share the provider's physical infrastructure, which is what makes the model efficient, but each tenant is isolated through hardened virtualization, separate identity and access boundaries, isolated virtual networks and default encryption, so one customer cannot see another's resources. Providers do not build a separate building per customer. Customers cannot see each other's resources, although encrypting sensitive data remains good practice. Isolation is technical, not merely contractual.",
    referenceUrl: "https://cloud.google.com/learn/what-is-public-cloud",
    tags: ["Public cloud", "Multi-tenancy"]
  }
];

export default GCP_CDL_QUESTIONS_3;
