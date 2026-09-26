export const GCP_CDL_QUESTIONS_1 = [
  {
    id: "gcp-cdl-1",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Explaining cloud computing to an insurance board",
    scenario: "A regional insurer's board is reviewing a proposal to stop buying servers for its two data centers. Several directors ask for a plain definition of what the company would actually be buying if it adopted cloud computing, because the vendor pitch used the term loosely.",
    question: "Which description best defines cloud computing?",
    options: [
      { id: 'A', text: "Renting rack space, power and cooling in a third-party facility and shipping the insurer's own servers there to be operated by its staff." },
      { id: 'B', text: "Running virtualization software on the insurer's existing servers so that each physical host can carry many virtual computing environments at once." },
      { id: 'C', text: "Signing a three-year lease for dedicated hardware that a hosting company installs, with a fixed monthly fee regardless of how much is used." },
      { id: 'D', text: "On-demand access to computing resources such as compute, storage and networking, delivered as services over a network and paid for by use." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google defines cloud computing as the on-demand availability of computing resources, such as storage and infrastructure, as services over the internet, so the customer no longer self-manages physical resources and pays only for what it uses. Colocation still leaves the insurer buying, owning and operating its own servers; only the building changes. Virtualizing existing hosts improves utilization but keeps every capital purchase and every operational task in-house. A fixed-fee lease of dedicated hardware lacks both on-demand provisioning and consumption-based billing, which are what make a service cloud computing.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-computing",
    tags: ["Cloud computing", "Definitions"]
  },
  {
    id: "gcp-cdl-2",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Scanning invoices is not transformation",
    scenario: "A furniture retailer has scanned twenty years of paper invoices into PDF files and moved staff email to a hosted service. The CEO now tells investors the company has completed its digital transformation, but the order process, store operations and customer experience work exactly as they did before.",
    question: "Which statement correctly describes what digital transformation involves?",
    options: [
      { id: 'A', text: "Converting analog records such as paper invoices and forms into digital files so that they can be searched and stored electronically." },
      { id: 'B', text: "Standardizing all employees on one hosted productivity suite so that email, documents and calendars come from a single vendor." },
      { id: 'C', text: "Using digital technologies to create or change business processes, culture and customer experiences to meet shifting market needs." },
      { id: 'D', text: "Moving every existing server into a cloud provider unchanged so that the data center lease can be ended as early as possible." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google describes digital transformation as using modern digital technologies, including public, private and hybrid cloud, to create or modify business processes, culture and customer experiences so the organization can meet changing business and market dynamics. Converting paper into files is digitization: useful, but it changes the medium rather than how the business operates, which is exactly the retailer's situation. Rehosting servers unchanged is a migration tactic that can support transformation but does not by itself change processes or experiences. Consolidating on one productivity suite is a tooling decision, not a redesign of how the company serves customers.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Digital transformation", "Definitions"]
  },
  {
    id: "gcp-cdl-3",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Software the bank can read and change",
    scenario: "A bank's architecture board wants its core container platform to use software whose code its engineers can read, audit for security flaws, modify to fit internal needs and redistribute to subsidiaries. It also wants the freedom to run its modified version with any provider it chooses.",
    question: "Which type of software meets the board's requirements?",
    options: [
      { id: 'A', text: "Proprietary software whose vendor places the source code in escrow, released to the bank only if the vendor stops trading." },
      { id: 'B', text: "Software built to an open standard, meaning a published specification that any vendor may implement in a closed product." },
      { id: 'C', text: "Freeware that the vendor distributes at no cost as compiled binaries, with use allowed but any right to modify or redistribute withheld." },
      { id: 'D', text: "Open source software, released under a license that lets anyone inspect, modify and redistribute the source code for any purpose." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Open source software is distributed with its source code under a license that permits anyone to view, modify and redistribute it, which is precisely what lets the bank audit the code, adapt it and run its own version wherever it likes; Kubernetes is a well-known example that Google originated and released as open source. Freeware costs nothing but ships only as binaries, so the code cannot be audited or changed. Source-code escrow gives access only in a vendor failure and grants no right to modify or redistribute in normal operation. An open standard guarantees a public specification, not access to any particular product's code, so a standards-compliant product can still be closed.",
    referenceUrl: "https://opensource.google/",
    tags: ["Open source", "Definitions"]
  },
  {
    id: "gcp-cdl-4",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Interoperability between rival vendors' products",
    scenario: "A logistics group buys container tooling from three different vendors, two of which sell closed-source products. The CIO wants a guarantee that container images built with any one vendor's tool will run correctly on the runtimes sold by the other two, now and after future upgrades.",
    question: "What provides the interoperability guarantee the CIO is looking for?",
    options: [
      { id: 'A', text: "Requiring each of the three vendors to release its product's source code on a public repository under an open source license." },
      { id: 'B', text: "Negotiating an enterprise support contract with each vendor so that incompatibilities are escalated and fixed by their engineers." },
      { id: 'C', text: "A shared open standard, such as a vendor-neutral published image specification, that every one of the three products implements." },
      { id: 'D', text: "Consolidating all container tooling onto a single vendor so that images and runtimes always come from the same vendor's products." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An open standard is a publicly available specification, often maintained by a vendor-neutral body, that anyone may implement; when every product implements the same image specification, images built by one tool run on another's runtime even if the products themselves are closed-source. Publishing source code makes each product open source but does not make the three products agree on a common format. Support contracts fix incompatibilities after they appear rather than preventing them. Consolidating on one vendor avoids the interoperability question by creating the lock-in the CIO is trying to avoid.",
    referenceUrl: "https://cloud.google.com/open-cloud",
    tags: ["Open standards", "Interoperability"]
  },
  {
    id: "gcp-cdl-5",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "What infrastructure means in a hosting proposal",
    scenario: "A clinic group's finance director is reading a proposal that says the provider will own and operate all of the infrastructure while the clinic group keeps responsibility for its patient-scheduling application and the data in it. She wants to know what the word infrastructure covers.",
    question: "In this context, what does infrastructure refer to?",
    options: [
      { id: 'A', text: "The patient records, appointment history and access policies that the clinic group creates and is accountable for protecting." },
      { id: 'B', text: "The physical and virtual resources, such as data centers, servers, storage and networks, on which the application runs." },
      { id: 'C', text: "The operating procedures, staff training and change approvals that govern how the clinic group's IT team makes updates." },
      { id: 'D', text: "The scheduling application's features, screens and business rules that clinic staff use each day to book and move appointments." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Infrastructure is the foundational layer of physical and virtual resources, including facilities, servers, storage, networking and the virtualization that carves them up, on which applications and data sit; in the proposal the provider takes that layer so the clinic group no longer buys or maintains it. The application's features and rules are the software the clinic group explicitly keeps. Patient data and its access policies are the customer's responsibility in every cloud model. IT procedures and training are part of the operating model, a people-and-process concern rather than a technical layer the provider can own.",
    referenceUrl: "https://cloud.google.com/infrastructure",
    tags: ["Infrastructure", "Definitions"]
  },
  {
    id: "gcp-cdl-6",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Naming the system that resolves outages end to end",
    scenario: "A broadband provider pilots a system that, given the goal of restoring a customer's service, checks line diagnostics, decides whether a remote reset or a technician visit is needed, books the visit in the scheduling system and messages the customer, asking a human only when a credit exceeds policy.",
    question: "Which term best describes this kind of system?",
    options: [
      { id: 'A', text: "Business intelligence, which presents dashboards of outage trends so that managers can set a goal and decide where to send engineers." },
      { id: 'B', text: "Agentic AI, which reasons about a goal, plans the steps, acts through connected tools and adapts with limited supervision." },
      { id: 'C', text: "Robotic process automation, which replays a fixed, recorded sequence of clicks and keystrokes across existing applications." },
      { id: 'D', text: "Predictive machine learning, which scores each customer's likelihood of an outage from historical line and ticket data." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Agentic AI is AI focused on autonomous decision-making and action: it perceives information, reasons with a model, plans steps toward a goal, acts by calling other systems and reflects on the results, all with minimal human intervention. The pilot sets out from a goal, chooses between paths, uses scheduling and messaging tools and escalates only by exception, which is that pattern. Robotic process automation follows a scripted sequence and cannot decide between a reset and a visit. A predictive model produces a score but takes no action. Business intelligence informs human decisions rather than carrying them out.",
    referenceUrl: "https://cloud.google.com/discover/what-is-agentic-ai",
    tags: ["Agentic AI", "Definitions"]
  },
  {
    id: "gcp-cdl-7",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A hosting offer marketed as cloud",
    scenario: "A media company is offered a 'cloud platform' by a local hosting firm. To get a new server, a developer files a ticket and waits about ten business days for an engineer to build it; each server is billed at a flat monthly rate whether it runs at 2% or 95% utilization, and capacity can be reduced only at contract renewal.",
    question: "Which defining characteristics of cloud computing does this offer lack?",
    options: [
      { id: 'A', text: "On-demand self-service and rapid elasticity with metered billing, because capacity arrives by ticket and is charged as a fixed fee." },
      { id: 'B', text: "Multi-region redundancy and a global edge network, because the firm operates a single data center whose capacity serves the whole country." },
      { id: 'C', text: "Broad network access and resource pooling, because the servers sit on a flat network in one facility reached across a leased line." },
      { id: 'D', text: "Encryption at rest and multi-factor sign-in, because each server is built by hand after a ticket and handed over without extra security." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud computing is defined by resources that users provision themselves on demand, that scale out and back quickly, and that are metered so customers pay for what they use. A ten-day ticketed build removes self-service, reducing capacity only at renewal removes elasticity, and flat per-server billing removes measured, pay-per-use pricing. Hosting in one facility reached over a network does not by itself break broad network access or resource pooling; many genuine cloud regions are single sites. Encryption and multi-factor sign-in are security controls, not defining characteristics. Multi-region redundancy and edge networks are strengths of large providers, but a single-region service can still be cloud computing.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-computing",
    tags: ["Cloud computing", "Elasticity", "Self-service"]
  },
  {
    id: "gcp-cdl-8",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "New tools, same quarterly release board",
    scenario: "An airline moved its booking engine to Google Cloud a year ago and gave developers modern build tools. Releases still happen once a quarter after a two-day change board meeting, product ideas still need a full annual budget cycle, and customer satisfaction has not moved.",
    question: "What is the most likely reason the airline has not seen the benefits of digital transformation?",
    options: [
      { id: 'A', text: "The airline changed its technology but not the processes and culture that decide how quickly ideas reach customers." },
      { id: 'B', text: "Developers got new build tools to ship ideas before the operations team had finished moving every other system to the cloud." },
      { id: 'C', text: "The booking engine was moved without being rewritten into microservices, which is required before any cloud benefit can appear." },
      { id: 'D', text: "The airline picked a single public cloud provider rather than spreading its workloads across two to avoid depending on one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Digital transformation changes business processes, culture and customer experience as well as technology. Quarterly change boards and annual budgeting for every idea keep the old pace, so the new platform cannot translate into faster experiments or better service. Refactoring into microservices can help, but it is not a precondition for any benefit, and rewriting would not fix a quarterly approval gate. Using a single provider is a legitimate strategy and does not explain slow releases. Finishing every other migration first would not change how decisions are made about the booking engine either.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Digital transformation", "Culture", "Process"]
  },
  {
    id: "gcp-cdl-9",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A sneaker drop that crashes the store",
    scenario: "A sneaker brand's online store crashes whenever a limited-edition shoe is released, because traffic jumps from about 2,000 to 400,000 visitors within minutes. For the rest of the month traffic is low, and the company refuses to buy enough servers to cover a peak that lasts an hour.",
    question: "Which cloud benefit most directly addresses this problem?",
    options: [
      { id: 'A', text: "Global reach, because pages can be served from regions on several continents close to where buyers live." },
      { id: 'B', text: "Data-driven insight, because sales records can be analyzed to predict which styles will sell out soonest." },
      { id: 'C', text: "Scalability, because capacity can be added quickly for the launch spike and given back once demand falls." },
      { id: 'D', text: "Enhanced security, because the provider's network absorbs floods of malicious traffic before it arrives." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scalability in the cloud means adding resources quickly to meet demand and scaling back when they are no longer needed, so the company pays for peak capacity only while the launch peak lasts instead of owning servers that sit idle all month. Global reach reduces latency for distant users but does not add capacity for a sudden surge. Network-level protection helps against malicious floods, whereas these visitors are genuine buyers. Predicting sell-outs is useful for planning but does not keep the site running when the crowd arrives.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Scalability", "Cloud benefits"]
  },
  {
    id: "gcp-cdl-10",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Paying all year for a tax-season peak",
    scenario: "A tax-preparation firm sizes its data center for the ten weeks before the filing deadline, when load is eight times normal. For the other forty-two weeks most of that hardware sits idle, yet the firm still pays for its purchase, maintenance, power and a refresh every four years.",
    question: "Which characteristic of cloud computing would change the economics of this situation most?",
    options: [
      { id: 'A', text: "Committed use discounts, under which the firm pays upfront for peak capacity for three years at a lower hourly rate." },
      { id: 'B', text: "Live migration of virtual machines, under which the provider moves workloads to healthy hosts during maintenance." },
      { id: 'C', text: "Consumption-based pricing, under which the firm pays for peak capacity only during the weeks it actually runs." },
      { id: 'D', text: "Dedicated sole-tenant nodes, under which the firm's workloads run all 52 weeks on physical servers used by no other customer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud resources are billed by consumption, so the firm can run eight times its normal capacity for ten weeks and pay for that capacity only while it runs, avoiding the cost of owning, powering and refreshing hardware that is idle most of the year. Committed use discounts reward steady, predictable usage; committing to peak capacity for three years recreates the idle-capacity problem at a lower rate. Live migration protects workloads during host maintenance and has nothing to do with seasonal sizing. Sole-tenant nodes address isolation or licensing needs and cost more, not less, for a spiky workload.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Cost-effectiveness", "Pay-as-you-go"]
  },
  {
    id: "gcp-cdl-11",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Six weeks to get a test server",
    scenario: "At a consumer electronics maker, developers who want to try a new recommendation feature must request hardware, wait for procurement approval and then wait for installation, which together take about six weeks. By the time servers arrive, the marketing window for the idea has often passed.",
    question: "Which cloud benefit most directly removes this delay?",
    options: [
      { id: 'A', text: "High availability, because workloads run across several zones and keep working when one of them has an outage." },
      { id: 'B', text: "Speed, because developers can provision the resources they need in minutes rather than waiting for procurement." },
      { id: 'C', text: "Enhanced security, because the provider handles hardware procurement, patching and hypervisor updates for the company." },
      { id: 'D', text: "Global reach, because developers can deploy the new feature to regions near customers in every market at the same time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Because cloud resources can be spun up or retired in seconds to minutes, developers can start building and testing an idea immediately instead of waiting through procurement and installation, shortening time to market. High availability keeps a running service up during failures but does not shorten the time to get resources. Global reach improves access for distant customers once a feature exists. Provider-managed patching is a security benefit, not a way to remove a six-week wait for test capacity.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Speed", "Time to market"]
  },
  {
    id: "gcp-cdl-12",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A startup unsure which database it needs",
    scenario: "A fintech startup does not yet know whether its product will need a relational database, a document store or a wide-column store, and it expects its traffic pattern to change as it finds product-market fit. The founders do not want an early technology choice to lock them in for years.",
    question: "Which benefit of the cloud is most relevant to the founders' concern?",
    options: [
      { id: 'A', text: "Enhanced security, because every managed database service encrypts stored data by default without extra configuration." },
      { id: 'B', text: "Flexibility, because the startup can try several managed database services, change sizes and switch as its needs become clear." },
      { id: 'C', text: "High availability, because each managed database service can replicate data across zones to survive a hardware failure." },
      { id: 'D', text: "Global reach, because the startup can later place managed database replicas in regions close to customers abroad." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The cloud offers a wide menu of services that can be adopted, resized or retired without buying hardware, so the startup can prototype on more than one managed database, observe real usage and change direction cheaply; that is the flexibility benefit. Default encryption is valuable but does not address uncertainty about which technology to choose. Zonal replication improves resilience after a choice has been made. Placing replicas abroad is a growth concern, not a way to keep an early decision reversible.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Flexibility", "Cloud benefits"]
  },
  {
    id: "gcp-cdl-13",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A 40-person lab with no security team",
    scenario: "A 40-person diagnostics lab runs its systems in a server closet. It has no dedicated security staff, patches irregularly and could not afford round-the-clock monitoring or custom hardware protections. Its board asks whether moving to Google Cloud would improve its security posture.",
    question: "Which benefit supports a move to Google Cloud from a security perspective?",
    options: [
      { id: 'A', text: "Moving to the cloud transfers all security obligations to Google, so the lab no longer needs to manage who can access its data." },
      { id: 'B', text: "Placing the systems in a cloud region makes them unreachable from the internet unless the lab installs a VPN of its own." },
      { id: 'C', text: "The lab inherits controls built at a scale it cannot match, such as encryption at rest by default and hardened data centers." },
      { id: 'D', text: "Cloud workloads are exempt from healthcare regulations, so the lab's compliance audits would no longer need to cover them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google secures its infrastructure with purpose-built hardware, physical data center protections, encryption of data at rest by default and large specialist security teams, so a small organization inherits protections it could never build itself. Responsibility is still shared: the lab continues to decide who may access which data and to configure its services. Moving to the cloud does not remove regulatory obligations; the lab stays responsible for compliance, supported by Google's certifications. Cloud resources are not automatically isolated from the internet, and exposure depends on how the lab configures networking and access.",
    referenceUrl: "https://cloud.google.com/docs/security/infrastructure/design",
    tags: ["Enhanced security", "Cloud benefits"]
  },
  {
    id: "gcp-cdl-14",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Launching a game on three continents",
    scenario: "A mobile game studio based in Canada plans to launch a multiplayer title in Southeast Asia and Europe next quarter. Players far from the studio's single data center would suffer lag, and the studio has neither the money nor the time to build facilities abroad.",
    question: "Which cloud benefit addresses this situation?",
    options: [
      { id: 'A', text: "Global reach, because game servers can run in regions near players without building facilities." },
      { id: 'B', text: "Flexibility, because the studio can switch between several managed database products later." },
      { id: 'C', text: "Cost-effectiveness, because the studio pays only for game servers while players are online, not for facilities." },
      { id: 'D', text: "Data-driven insight, because match telemetry can be analyzed to tune the game's difficulty." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A global provider already operates regions across many continents, so the studio can deploy game servers close to players in Asia and Europe within days, reducing latency without building or leasing its own facilities. Paying only for servers while players are online lowers cost but does not solve lag caused by distance. Telemetry analysis helps game design, not network performance. Being able to switch databases is flexibility, which does not put compute closer to players.",
    referenceUrl: "https://cloud.google.com/about/locations",
    tags: ["Global reach", "Cloud benefits"]
  },
  {
    id: "gcp-cdl-15",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Keeping a pharmacy portal up during a failure",
    scenario: "A pharmacy chain's prescription-refill portal went offline for six hours when a power fault hit its only data center. Leadership wants the portal to keep serving customers if a single facility fails, but it does not need protection against the loss of an entire geographic area.",
    question: "Which approach delivers the availability benefit leadership is asking for?",
    options: [
      { id: 'A', text: "Caching the portal's pages at edge locations so customers can keep browsing while the servers are offline." },
      { id: 'B', text: "Taking nightly backups of the portal's database to Cloud Storage so that it can be rebuilt and serving again after the loss of the data center." },
      { id: 'C', text: "Running the portal on one larger virtual machine in a single zone with more CPU and memory headroom for spikes." },
      { id: 'D', text: "Running the portal across multiple zones in one region so the loss of one zone leaves the others serving." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Zones are isolated failure domains within a region, so running redundant copies of the portal across several zones lets it keep serving if one zone suffers a power or hardware fault, which matches the requirement without the added cost of a multi-region design. A bigger single-zone machine adds capacity but is still one failure domain. Backups support recovery but mean hours of downtime while the portal is rebuilt. Edge caching can serve static pages, but refills need the application and database, which would still be down.",
    referenceUrl: "https://cloud.google.com/compute/docs/regions-zones",
    tags: ["High availability", "Zones"]
  },
  {
    id: "gcp-cdl-16",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Answering questions across siloed sales data",
    scenario: "A home-improvement retailer keeps store sales, e-commerce orders and loyalty data in three separate systems. Answering a question like 'which promotions bring online shoppers into stores' takes analysts weeks of manual extracts, so decisions are made on instinct instead.",
    question: "Which cloud benefit most directly helps the retailer?",
    options: [
      { id: 'A', text: "Data-driven insight, because data can be combined on a scalable analytics platform and queried quickly." },
      { id: 'B', text: "Speed, because developers can provision a new virtual machine for each analyst in a matter of minutes." },
      { id: 'C', text: "High availability, because each of the three systems can be spread across zones to survive a failure." },
      { id: 'D', text: "Scalability, because each of the three systems can add servers automatically when seasonal traffic grows." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud analytics platforms let organizations bring data from separate sources together and query very large volumes quickly, so questions that span stores, e-commerce and loyalty can be answered in minutes and decisions can rest on evidence. Scaling each system independently keeps the silos in place. Zonal redundancy improves uptime but not insight. Giving each analyst a virtual machine faster does not join the data, so the weeks of manual extraction would remain.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Data-driven insights", "Cloud benefits"]
  },
  {
    id: "gcp-cdl-17",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "IT staff stuck patching instead of building",
    scenario: "A mid-sized manufacturer's IT team spends roughly 70% of its time patching operating systems, replacing failed disks and upgrading database versions. The COO wants the same people to build a supplier portal and predictive-maintenance tools that would set the company apart from competitors.",
    question: "Which benefit of adopting managed cloud services matches the COO's goal?",
    options: [
      { id: 'A', text: "Global reach, because the supplier portal can be hosted in regions close to overseas suppliers to cut page load times." },
      { id: 'B', text: "Scalability, because the predictive-maintenance tools can add capacity automatically as more sensor data is collected." },
      { id: 'C', text: "Strategic focus, because routine maintenance shifts to the provider and staff time moves to work that differentiates the business." },
      { id: 'D', text: "Cost-effectiveness, because the company can stop paying salaries for the IT roles once the provider runs its systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Managed services hand patching, hardware replacement and version upgrades to the provider, freeing the organization's people to concentrate on strategic, differentiating work such as the supplier portal; Google frames this as strategic value and focus. Hosting near suppliers improves latency but does not release staff time. Managed services change what IT staff do rather than eliminating them, and the COO wants to redeploy the team, not cut it. Automatic scaling helps the future tools grow but does nothing about today's maintenance burden.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Strategic value", "Managed services"]
  },
  {
    id: "gcp-cdl-18",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A cloud bill higher than the data center",
    scenario: "A publisher moved 300 virtual machines to Google Cloud exactly as they were configured on-premises, each sized for the busiest day of the year and left running around the clock. Six months later the monthly cloud bill exceeds the old data center's running costs, and the CFO questions whether the cloud is cost-effective at all.",
    question: "What best explains the result?",
    options: [
      { id: 'A', text: "Cost savings depend on using elasticity, so resources sized for peak and never scaled down or turned off erase the benefit." },
      { id: 'B', text: "Committed use discounts apply automatically only after twelve months, so the bill will fall once the first year has passed." },
      { id: 'C', text: "Public cloud compute, however it is sized, costs more per hour than owned hardware, so savings can only come from lower staffing." },
      { id: 'D', text: "The virtual machines were placed in a single region, and spreading them across regions would have lowered the unit price." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The cloud is cost-effective because customers pay for what they use, but that benefit only appears when workloads are rightsized and allowed to scale down or shut off when idle; copying peak-sized machines and running them all year pays cloud rates for idle capacity. Owned hardware is not cheaper per unit of useful work once facilities, refresh and idle capacity are counted, and staffing is not the only lever. Spreading machines across regions adds network cost and does not reduce the price of oversized machines. Committed use discounts must be purchased; they are not applied automatically after a year, although sustained use discounts do apply automatically to some machine types.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Cost-effectiveness", "Rightsizing"]
  },
  {
    id: "gcp-cdl-19",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Beating a competitor to market",
    scenario: "A grocery delivery company learns that a rival will launch same-hour delivery in about two months. Its own plan would take nine months, mostly because it has to buy and install the hardware and middleware the new routing service needs before any development starts.",
    question: "How does the cloud most help the company respond in time?",
    options: [
      { id: 'A', text: "It lets the company build on ready-made managed services immediately, shortening the time to launch." },
      { id: 'B', text: "It lets the company spread the routing service across several zones so that a zone outage is survivable." },
      { id: 'C', text: "It lets the company protect the routing service with the provider's security teams and default encryption." },
      { id: 'D', text: "It lets the company analyze past delivery data to predict which neighborhoods to launch in first." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because compute, databases and other building blocks are available as managed services on demand, the team can start developing the routing service right away rather than spending months buying and installing hardware and middleware, which is the speed and agility benefit that shortens time to market. Default encryption and specialist security teams are real benefits but do not shorten the timeline. Zonal redundancy matters once the service is live. Predicting demand by neighborhood is a useful insight, yet it does not remove the procurement delay.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Speed", "Agility"]
  },
  {
    id: "gcp-cdl-20",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Which pilot is actually agentic",
    scenario: "A travel company's innovation team is presenting four AI pilots, and the CIO wants to fund only the one that is genuinely agentic AI, because the budget line is for systems that complete work on their own with minimal human intervention.",
    question: "Which pilot is an example of agentic AI?",
    options: [
      { id: 'A', text: "A generative model that drafts destination descriptions for the website whenever a copywriter enters a short prompt." },
      { id: 'B', text: "A model trained on past bookings that labels each incoming support email as refund, change or complaint for human agents." },
      { id: 'C', text: "A bot that follows a recorded script to copy flight details from one booking screen into another booking system." },
      { id: 'D', text: "A system given a disrupted traveler's goal that finds new flights, rebooks within fare rules and confirms with the traveler." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agentic AI takes a goal, plans the steps, acts by using tools and systems and checks the outcome, with minimal human intervention; the rebooking system does all of that, deciding among flights and completing the change within policy. The email classifier is predictive machine learning that produces a label for humans to act on. The copy generator is generative AI: it creates content in response to a prompt but does not pursue a goal or take actions. The scripted bot is robotic process automation, which repeats fixed steps without reasoning or planning.",
    referenceUrl: "https://cloud.google.com/discover/what-are-ai-agents",
    tags: ["Agentic AI", "Generative AI"]
  },
  {
    id: "gcp-cdl-21",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A CTO worried about being locked in",
    scenario: "The CTO of an online education company is ready to adopt a cloud platform for its applications but worries that, if prices or service quality change, moving away later would require rewriting everything. She asks what kind of technology choice keeps a future move practical.",
    question: "What should she prioritize?",
    options: [
      { id: 'A', text: "Technologies built on open source and open standards, such as Kubernetes, that run the same way across many environments." },
      { id: 'B', text: "Proprietary services unique to one provider, since deep integration with a single vendor gives the fastest initial delivery." },
      { id: 'C', text: "A long-term enterprise agreement with price protection, since fixed pricing removes the risk of costs rising later on." },
      { id: 'D', text: "Owning physical servers in a colocation facility, since hardware the company owns can always be moved to a new site." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Open source projects and open standards such as Kubernetes run consistently on Google Cloud, other clouds and on-premises, so applications built on them can move with far less rework, which reduces vendor lock-in; Google's commitment to openness and interoperability is one of its stated differentiators. Deeply proprietary services may speed initial delivery but make a later move harder, the opposite of the CTO's goal. Owning hardware brings back capital cost and operations and does not make the software portable. Price protection addresses cost risk for a contract term but does nothing if service quality drops or the company wants to leave.",
    referenceUrl: "https://cloud.google.com/learn/what-is-kubernetes",
    tags: ["Open source", "Vendor lock-in"]
  },
  {
    id: "gcp-cdl-22",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Adding translation without an AI team",
    scenario: "A small e-commerce marketplace wants product listings available in eight languages before the holiday season. It has no machine learning engineers and cannot spend a year building and training its own translation models.",
    question: "Which cloud benefit lets the marketplace deliver this quickly?",
    options: [
      { id: 'A', text: "Global reach through regions abroad, so translated pages load quickly for shoppers in every target country." },
      { id: 'B', text: "High availability across zones, so the listing pages stay online if one of the provider's facilities fails." },
      { id: 'C', text: "Access to advanced capabilities as ready-to-use services, so the team can call a translation API right away." },
      { id: 'D', text: "Pay-as-you-go storage, so product photos and translation files cost less to keep than on the marketplace's disks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud providers expose sophisticated capabilities such as machine translation as managed APIs, so a team with no machine learning expertise can add them in days by calling a service rather than building models, which is a key way the cloud speeds innovation. High availability protects uptime, not feature delivery. Cheaper storage does not produce translations. Serving pages from nearby regions improves speed for foreign shoppers only once the translated content exists.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Agility", "Managed services"]
  },
  {
    id: "gcp-cdl-23",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "An executive who thinks security is now Google's job",
    scenario: "During a migration kickoff at an accounting firm, a partner says that because Google Cloud offers enhanced security, the firm can disband its access-review process and stop classifying client data. The CISO has to correct the misconception before the plan is approved.",
    question: "Which statement should the CISO make?",
    options: [
      { id: 'A', text: "Google secures the underlying infrastructure, while the firm still owns who can reach its data and how services are set up." },
      { id: 'B', text: "Enhanced security applies only to software-as-a-service products, so on IaaS the firm keeps full responsibility for every layer." },
      { id: 'C', text: "The firm keeps all security duties it had on-premises, including physical data center protection and hardware disposal." },
      { id: 'D', text: "Google takes responsibility for access reviews once data is stored in its data centers, so only data classification remains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security in the cloud is a shared responsibility: Google secures the infrastructure it operates, including facilities, hardware, the network and default encryption, while customers remain responsible for identities and access, data classification and the configuration of the services they use. Google does not decide who in the firm should access which data, so access reviews remain the firm's job. Physical security and hardware disposal move to Google, so the firm does not keep every on-premises duty. Infrastructure services also benefit from Google's protections; on IaaS the customer carries more of the stack but never the physical layers.",
    referenceUrl: "https://cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate",
    tags: ["Enhanced security", "Shared responsibility"]
  },
  {
    id: "gcp-cdl-24",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Making failed experiments cheap",
    scenario: "A bank's digital team wants to test five ideas for its mobile app this quarter, knowing most will fail. On-premises, every test needs hardware that is then written off, so managers approve only one safe idea a year. The team wants to run small, short-lived trials and keep only what works.",
    question: "Which cloud benefit enables this way of working?",
    options: [
      { id: 'A', text: "High availability, because each trial environment can be deployed across zones so that experiments testing an idea are not interrupted." },
      { id: 'B', text: "Global reach, because each trial can be released to customers in many countries simultaneously to gather more feedback." },
      { id: 'C', text: "Enhanced security, because each trial environment inherits the provider's default encryption and hardened infrastructure." },
      { id: 'D', text: "Agility, because resources for each trial can be created in minutes and deleted when it ends, so a failed idea costs little." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agility in the cloud means resources can be created and torn down on demand, so experiments no longer require hardware purchases, a failed trial costs only the hours it ran, and teams can test many ideas and keep the winners. Default encryption protects trial data but does not change the economics of experimenting. Zonal redundancy is unnecessary for short-lived tests and does not make them cheaper. A global release widens feedback but does not address the cost of failure that blocks approval.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Agility", "Experimentation"]
  },
  {
    id: "gcp-cdl-25",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Instrumenting apps without tying them to one tool",
    scenario: "A retail bank is adding tracing and metrics to 60 applications. Today it uses one monitoring vendor, but procurement expects to re-tender the contract in two years, and engineering does not want to re-instrument every application if a different backend wins.",
    question: "Which approach best protects the bank's investment in instrumentation?",
    options: [
      { id: 'A', text: "Install the current monitoring vendor's proprietary agent and libraries, since they give the deepest integration with its dashboards." },
      { id: 'B', text: "Negotiate a ten-year contract extension with the current vendor so that the bank never has to change its monitoring backend." },
      { id: 'C', text: "Instrument with OpenTelemetry, a vendor-neutral open standard whose data can be sent to many monitoring backends." },
      { id: 'D', text: "Write all telemetry to local log files on each server and let the future vendor build its own parser for the bank's formats." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OpenTelemetry is an open standard, with open source implementations, for generating and exporting traces, metrics and logs; because many backends, including Google Cloud Observability, accept its data, the bank can change vendors by reconfiguring an exporter instead of re-instrumenting 60 applications. That is the practical value of open standards: interoperability that survives a change of supplier. A proprietary agent ties the instrumentation to one vendor, the situation the bank wants to avoid. Unstructured local logs push the integration cost onto whoever wins and lose tracing context. A decade-long extension removes choice rather than preserving it and weakens the bank's negotiating position.",
    referenceUrl: "https://cloud.google.com/stackdriver/docs/instrumentation/overview",
    tags: ["Open standards", "Interoperability"]
  }
];

export default GCP_CDL_QUESTIONS_1;
