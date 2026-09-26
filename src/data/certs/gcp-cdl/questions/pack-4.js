export const GCP_CDL_QUESTIONS_4 = [
  {
    id: "gcp-cdl-76",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "What a zone is in Google Cloud",
    scenario: "A logistics company's architect is presenting a design that places virtual machines in two zones of the same Google Cloud region. A finance manager on the review panel asks what a zone actually is and why the design needs more than one.",
    question: "Which description of a zone is correct?",
    options: [
      { id: 'A', text: "A Google-operated cache near end users that stores copies of static content to cut download times." },
      { id: 'B', text: "A deployment area within a region that is treated as a single failure domain, isolated from other zones." },
      { id: 'C', text: "A group of Google Cloud regions and zones on one continent that share a pricing plan and billing account." },
      { id: 'D', text: "A private network that a customer creates to connect its virtual machines across every Google location." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A zone is a deployment area for Google Cloud resources within a region and should be treated as a single failure domain; zones in a region are isolated from one another, so placing machines in two zones keeps the application running if one zone fails. A group of regions sharing billing is not a Google Cloud construct, and billing accounts are separate from geography. A cache near users is an edge location. A customer's private network is a VPC network, which spans regions rather than being a zone.",
    referenceUrl: "https://cloud.google.com/compute/docs/regions-zones",
    tags: ["Zones", "Global infrastructure"]
  },
  {
    id: "gcp-cdl-77",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "What a region is in Google Cloud",
    scenario: "A school district is choosing where to host its student information system on Google Cloud. The console asks the IT lead to pick a region, and the superintendent wants to understand what that choice represents before approving the project.",
    question: "What is a Google Cloud region?",
    options: [
      { id: 'A', text: "An independent geographic area, such as a metropolitan location, that usually contains three or more zones." },
      { id: 'B', text: "A folder in the resource hierarchy that groups projects belonging to the same department or business unit." },
      { id: 'C', text: "A pricing tier that decides whether a customer's traffic uses Google's backbone or the public internet." },
      { id: 'D', text: "A single data center building that hosts all of the resources a customer creates in one country or state." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A region is an independent geographic area where Google Cloud resources are hosted; each region is made up of zones, usually three or more, which lets customers build highly available applications within one geography and choose locations near users or required by regulation. A region is not a single building; its zones are separate failure domains. The choice between Google's backbone and the public internet is the network service tier. Folders organize projects in the resource hierarchy and have nothing to do with geography.",
    referenceUrl: "https://cloud.google.com/docs/geography-and-regions",
    tags: ["Regions", "Global infrastructure"]
  },
  {
    id: "gcp-cdl-78",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Health records that must stay in Germany",
    scenario: "A German hospital network must, under its interpretation of national rules, store and process patient records only on infrastructure located in Germany. It still wants protection against the failure of a single facility.",
    question: "How should it choose where to deploy?",
    options: [
      { id: 'A', text: "Deploy in a global multi-region so that records are copied to several continents for maximum durability." },
      { id: 'B', text: "Deploy across multiple zones of a Google Cloud region located in Germany, keeping data within that region." },
      { id: 'C', text: "Deploy in any European region with the lowest price, since EU law treats all member states as one location." },
      { id: 'D', text: "Deploy in a single zone of a region located in Germany, since more zones would move data outside the country." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Choosing a region located in Germany keeps data in the country, and spreading the workload across that region's zones protects against a single facility failing, because all of a region's zones are in the same geographic area. The hospital's requirement is specifically Germany, so another EU country's region would not satisfy it. A global multi-region would copy data outside Germany. Using more zones in the same region does not move data abroad, so limiting to one zone gives up resilience for no benefit.",
    referenceUrl: "https://cloud.google.com/about/locations",
    tags: ["Regions", "Data residency"]
  },
  {
    id: "gcp-cdl-79",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "The GPU type is not offered in the chosen region",
    scenario: "A media company picked the Google Cloud region nearest its headquarters for a new video-rendering pipeline. During testing, engineers found that the specific GPU machine type they had benchmarked is not offered there, although it is available in another region on the same continent.",
    question: "What does this illustrate about choosing a region?",
    options: [
      { id: 'A', text: "Regions near a company's headquarters always offer the full product catalog to that company's projects." },
      { id: 'B', text: "Region choice affects only latency, so the company should run the pipeline in any region that answers fastest." },
      { id: 'C', text: "Service and machine-type availability differs between regions, so it must be checked alongside other factors." },
      { id: 'D', text: "Every region offers identical products and machine types, so the problem must be a quota setting instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Not every Google Cloud product, feature or machine type, particularly specialized accelerators, is available in every region, so region selection weighs availability together with latency to users, data residency, price and carbon footprint. Headquarters location earns no special catalog. Regions do not all offer identical products; quotas are a separate limit that applies even where a machine type exists. Latency is only one of several factors, and a rendering batch job may care more about availability and price than about responsiveness.",
    referenceUrl: "https://cloud.google.com/solutions/best-practices-compute-engine-region-selection",
    tags: ["Regions", "Region selection"]
  },
  {
    id: "gcp-cdl-80",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Product images loading slowly overseas",
    scenario: "An online furniture store hosts its site in a single US region. Shoppers in Australia and Europe complain that product photos and style sheets take seconds to load, although the images rarely change and the rest of the site is acceptable.",
    question: "Which part of Google's network is designed to help most here?",
    options: [
      { id: 'A', text: "A larger machine type in the US region, so that each server can deliver images to shoppers faster." },
      { id: 'B', text: "Additional zones in the US region, so that the store's servers have more capacity for image requests." },
      { id: 'C', text: "Edge locations used by Cloud CDN, which cache static content such as images close to users worldwide." },
      { id: 'D', text: "A dedicated interconnect to the US region, so that the store's office can upload new photos faster." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Edge locations are Google points of presence close to users; Cloud CDN uses them to cache static content such as images and style sheets, so shoppers far from the origin region download those files from a nearby cache instead of across an ocean. More zones or bigger machines in the US add capacity but do not shorten the physical distance that causes the delay. A dedicated interconnect speeds the store's own uploads, not shoppers' downloads.",
    referenceUrl: "https://cloud.google.com/cdn/docs/overview",
    tags: ["Edge locations", "Cloud CDN"]
  },
  {
    id: "gcp-cdl-81",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Where a single zone is good enough",
    scenario: "An insurer's platform team is trimming costs. It runs four environments: customer-facing quoting, a claims portal for brokers, a nightly reporting job that can simply be rerun, and a developer sandbox rebuilt from code every morning. Leadership asks which of them could safely run in just one zone.",
    question: "Which environment is the best candidate for a single-zone deployment?",
    options: [
      { id: 'A', text: "The developer sandbox, because it is disposable by design and a zone outage would only delay some work." },
      { id: 'B', text: "All four environments, developer sandbox included, because a region's zones share one facility and fail together." },
      { id: 'C', text: "The customer-facing quoting service, because customers can retry later if a zone happens to fail." },
      { id: 'D', text: "The broker claims portal, because brokers work office hours and outages rarely happen in the daytime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because a zone is a single failure domain, spreading across zones costs extra capacity that is worth paying only where downtime hurts. A sandbox recreated from code every morning loses nothing important in a zone outage, so a single zone is a sensible saving; the rerunnable reporting job would be a similar case. Customer-facing quoting and the broker portal serve users whose experience and revenue depend on availability, so they belong in multiple zones. A region's zones are isolated from one another rather than sharing one facility, which is why multi-zone designs work.",
    referenceUrl: "https://cloud.google.com/compute/docs/regions-zones",
    tags: ["Zones", "Cost"]
  },
  {
    id: "gcp-cdl-82",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "When one region going dark is not acceptable",
    scenario: "An online brokerage already runs across three zones in one region. Its regulator now requires that trading continue even if an entire geographic area is lost, such as through a major natural disaster, and the board accepts the extra cost this involves.",
    question: "What should the architecture add?",
    options: [
      { id: 'A', text: "A deployment in a second region far enough away, with data replicated and traffic able to fail over to it." },
      { id: 'B', text: "Nightly backups to a storage bucket in the same region, so that the platform can be rebuilt after a disaster." },
      { id: 'C', text: "Edge caching of the trading pages, so that customers can keep viewing prices if the region becomes unavailable." },
      { id: 'D', text: "A fourth zone in the existing region, so that the loss of any two zones still leaves enough capacity running." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Zones protect against failures within a region, but all of a region's zones share one geographic area, so surviving the loss of that area requires a second region, far enough away, with replicated data and a way to shift traffic to it; multi-region designs cost more in duplicated capacity and replication, which the board has accepted. Another zone in the same region does not help if the whole area is lost. Cached pages cannot execute trades. Backups in the same region would be lost along with it and would require a slow rebuild.",
    referenceUrl: "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    tags: ["Regions", "Disaster recovery"]
  },
  {
    id: "gcp-cdl-83",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Serving a viral video without overloading the origin",
    scenario: "A news publisher's servers in one Google Cloud region struggle whenever a video goes viral, because millions of viewers request the same file at once. Its bandwidth bill from the origin also spikes. The content itself does not change once published.",
    question: "What is the main benefit of serving this content through Google's edge locations?",
    options: [
      { id: 'A', text: "Most requests are answered from caches near viewers, cutting load and egress from the origin." },
      { id: 'B', text: "Edge locations add extra zones to the region, so the origin can run more servers during peaks." },
      { id: 'C', text: "Edge locations replace the origin region, so viewers no longer reach servers the publisher runs." },
      { id: 'D', text: "Edge locations run the publisher's databases, so article comments are written closer to readers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With Cloud CDN, popular unchanging content is cached at Google's edge locations, so most viewer requests are served close to them; the origin handles far fewer requests and sends much less data, which protects it during spikes and reduces egress from the origin. Edge caches do not host databases or accept writes. They still depend on an origin to fetch content the first time and when caches expire. Edge locations are separate from a region's zones and do not add origin capacity.",
    referenceUrl: "https://cloud.google.com/cdn/docs/overview",
    tags: ["Edge locations", "Cloud CDN"]
  },
  {
    id: "gcp-cdl-84",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Tracing a customer request through Google's network",
    scenario: "A bank's new mobile app talks to services in a Google Cloud region in Belgium. A non-technical executive asks what happens between a customer tapping a button in Portugal and the request reaching the bank's application.",
    question: "Which description of the components involved is accurate?",
    options: [
      { id: 'A', text: "The request is routed to a random zone anywhere in the world, which forwards it to Belgium when it becomes idle." },
      { id: 'B', text: "The request travels over the public internet the whole way and enters Google's network only inside the Belgian zone." },
      { id: 'C', text: "The request is processed by an edge location in Portugal, which runs a full copy of the bank's app and database." },
      { id: 'D', text: "The request enters Google's network at a nearby edge location, crosses Google's backbone and reaches zones in the region." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With Google's default Premium network tier, user traffic enters Google's network at an edge point of presence near the user, travels over Google's private backbone and arrives at the region, where the application runs in one or more zones; regions, zones and edge locations work together to give low latency and reliability. Traffic does not stay on the public internet until the zone under Premium Tier. Edge locations provide network entry and caching, not full copies of applications and databases. Requests are not bounced through arbitrary zones.",
    referenceUrl: "https://cloud.google.com/vpc/docs/edge-locations",
    tags: ["Edge locations", "Regions", "Zones"]
  },
  {
    id: "gcp-cdl-85",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Ordering Google Cloud's geographic building blocks",
    scenario: "A new cloud governance analyst at a retail chain is writing an internal glossary. She wants to list Google Cloud's geographic hosting constructs in order from the broadest area to the smallest failure domain, so colleagues can see how they nest.",
    question: "Which order is correct?",
    options: [
      { id: 'A', text: "Zone, then multi-region, then region, since each region is the smallest single building Google runs." },
      { id: 'B', text: "Zone, then region, then multi-region, since a zone spans several regions within a continent." },
      { id: 'C', text: "Region, then multi-region, then zone, since a multi-region is a group of zones inside one region." },
      { id: 'D', text: "Multi-region, then region, then zone, since a multi-region spans regions and a region contains zones." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A multi-region is a large geographic area, such as the United States or the European Union, containing two or more regions; each region contains zones, usually three or more; and each zone is a single failure domain. So the order from broadest to smallest is multi-region, region, zone. Zones are inside regions, not the other way round. A multi-region spans regions rather than zones in one region. A region is a geographic area with several zones, not a single building.",
    referenceUrl: "https://cloud.google.com/docs/geography-and-regions",
    tags: ["Regions", "Zones", "Multi-region"]
  },
  {
    id: "gcp-cdl-86",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Choosing a region with the environment in mind",
    scenario: "A Scandinavian retailer has committed to reducing the emissions of its cloud workloads. Its nightly analytics jobs have no latency requirements and may run in any EU country, and the sustainability team wants region choice to support its target.",
    question: "What should the team consider when choosing the region?",
    options: [
      { id: 'A', text: "Choosing the region with the most zones, because additional zones always lower a workload's emissions." },
      { id: 'B', text: "Google's published carbon-free energy figures per region, preferring a low-carbon EU region for the jobs." },
      { id: 'C', text: "Choosing a global multi-region, because spreading jobs across continents averages out their emissions." },
      { id: 'D', text: "Choosing the region nearest to head office, since shorter distances always mean lower carbon emissions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google publishes the carbon-free energy percentage of the electricity supplying each region and flags lower-carbon regions in its tools, so workloads that are flexible about location, like nightly batch jobs, can be placed where the grid is cleaner. The number of zones does not determine emissions. Proximity to head office matters for latency, which these jobs do not need, and says little about the carbon intensity of the local grid. A multi-region would move data outside the EU and duplicate resources rather than reduce emissions.",
    referenceUrl: "https://cloud.google.com/sustainability/region-carbon",
    tags: ["Regions", "Sustainability"]
  },
  {
    id: "gcp-cdl-87",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A batch job that could run anywhere",
    scenario: "A market-research firm runs a large weekly batch job that processes anonymized survey data. The data has no residency restrictions, results are needed only by Monday morning, and nobody interacts with the job while it runs. The finance team wants to cut its cost.",
    question: "How can region choice help reduce the cost of this job?",
    options: [
      { id: 'A', text: "Running the job in the region nearest the analysts, since proximity to users reduces the compute price." },
      { id: 'B', text: "Running the job in the region with the most edge locations nearby, since edge caches process batch data." },
      { id: 'C', text: "Running the job in every region at once, since dividing the work across regions removes compute charges." },
      { id: 'D', text: "Running the job in a region where the required resources are priced lower, since prices vary by region." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud prices for compute and other resources differ from region to region, so a workload with no latency or residency constraints can run where the resources it needs cost less, as long as data transfer costs do not outweigh the saving. Edge locations cache and route traffic; they do not run batch compute. Running in every region multiplies resources and adds inter-region transfer costs. Proximity to users affects latency, not the price of compute.",
    referenceUrl: "https://cloud.google.com/compute/all-pricing",
    tags: ["Regions", "Cost"]
  },
  {
    id: "gcp-cdl-88",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Renting virtual machines and managing the rest",
    scenario: "An engineering firm wants to rent virtual machines, storage and networking from Google Cloud, then install and patch its own operating systems, middleware and design applications exactly as it does today, keeping full control over everything above the virtualization layer.",
    question: "Which cloud service model describes this arrangement?",
    options: [
      { id: 'A', text: "Colocation, where the firm places its own physical servers in a data center run by a third party." },
      { id: 'B', text: "Infrastructure as a Service, where the provider supplies compute, storage and networking resources." },
      { id: 'C', text: "Platform as a Service, where the provider also runs the storage, networking, operating system and runtime." },
      { id: 'D', text: "Software as a Service, where the provider delivers a complete application that users access online." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Infrastructure as a Service provides on-demand compute, storage and networking, such as Compute Engine virtual machines, while the customer manages the operating system, middleware, applications and data; that gives the most control of the cloud service models. With PaaS the provider manages the operating system and runtime, which the firm wants to control. SaaS delivers a finished application and leaves no room to install the firm's own software stack. Colocation involves owning physical servers, which the firm does not want.",
    referenceUrl: "https://cloud.google.com/learn/what-is-iaas",
    tags: ["IaaS", "Service models"]
  },
  {
    id: "gcp-cdl-89",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Developers who only want to push code",
    scenario: "A four-person development team at a nonprofit wants to deploy a donation web app by uploading its code. The team does not want to choose operating systems, apply patches or configure servers, and it wants the platform to scale the app automatically.",
    question: "Which cloud service model fits this team?",
    options: [
      { id: 'A', text: "Infrastructure as a Service, where the team rents virtual machines and installs its own runtime stack." },
      { id: 'B', text: "Platform as a Service, where the provider runs infrastructure and runtime for the team's app." },
      { id: 'C', text: "Software as a Service, where the team subscribes to a finished donation application built by a vendor." },
      { id: 'D', text: "Private cloud, where the team builds a self-service platform on hardware it buys for its own office." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Platform as a Service, such as App Engine, provides a managed environment for building and running applications: the provider handles servers, operating systems, runtimes and scaling, and developers deploy their code. IaaS would put operating system choice and patching back on the team. SaaS delivers someone else's finished application, whereas the team wants to run its own app. A private cloud requires buying and operating hardware, the opposite of what the team wants.",
    referenceUrl: "https://cloud.google.com/learn/what-is-paas",
    tags: ["PaaS", "Service models"]
  },
  {
    id: "gcp-cdl-90",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Email and documents for a new office",
    scenario: "A 60-person architecture practice needs email, shared calendars, video meetings and collaborative documents for all staff by next month. It has no developers and no wish to run servers, and it is happy to pay a subscription per user.",
    question: "Which cloud service model meets this need?",
    options: [
      { id: 'A', text: "Software as a Service, subscribing to a complete, provider-run suite such as Google Workspace." },
      { id: 'B', text: "Platform as a Service, using a managed runtime to build the practice's own collaboration tools." },
      { id: 'C', text: "Hybrid cloud, keeping an on-premises mail server and syncing documents to cloud storage nightly." },
      { id: 'D', text: "Infrastructure as a Service, renting virtual machines and installing an email server on them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Software as a Service delivers a complete application that the provider runs end to end, accessed through a browser or app and usually billed per user; Google Workspace provides email, calendars, meetings and documents this way, so the practice needs no developers or servers. IaaS would require installing and running a mail server. PaaS is for building applications, which the practice cannot and does not want to do. A hybrid mail setup keeps server administration on-premises.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["SaaS", "Service models"]
  },
  {
    id: "gcp-cdl-91",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Three workloads, three service models",
    scenario: "A garden-supplies retailer is planning its cloud estate. Staff need email and documents, the online store is a custom app the retailer's developers change weekly, and a licensed warehouse system must run on a specific operating system version the vendor certifies. The CIO asks whether one service model should be used for everything.",
    question: "What approach should the CIO take?",
    options: [
      { id: 'A', text: "Match each workload to a model: SaaS for email, PaaS for the store and IaaS for the warehouse system." },
      { id: 'B', text: "Standardize on SaaS for all three, since the provider would then manage every layer of the store and the rest." },
      { id: 'C', text: "Standardize on PaaS for all three, since developers could then rebuild email and the warehouse system." },
      { id: 'D', text: "Standardize on IaaS for all three, since one model gives the retailer the most control over every workload." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service models are chosen per workload by balancing control against management effort. A commodity need like email is best met by SaaS; a custom app the retailer changes often suits PaaS, where developers deploy code without running servers; and a vendor-certified system tied to an operating system version needs IaaS control of the OS. Putting everything on IaaS means operating email servers for no benefit. SaaS cannot host the retailer's own store code or the licensed warehouse system. Rebuilding email and a licensed vendor product on PaaS would be wasted effort and may breach the license.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["IaaS", "PaaS", "SaaS"]
  },
  {
    id: "gcp-cdl-92",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Weighing PaaS against virtual machines for a new app",
    scenario: "A travel startup is building a new booking API from scratch. Its CTO likes the idea of a managed platform but worries about what the company gives up compared with running the API on virtual machines it configures itself.",
    question: "Which statement describes the trade-off accurately?",
    options: [
      { id: 'A', text: "A managed platform means less operational work and faster delivery, but less control of the environment." },
      { id: 'B', text: "Virtual machines remove all operational work, while a managed platform requires patching every server." },
      { id: 'C', text: "Virtual machines and a managed platform offer identical control, so the choice affects only the price." },
      { id: 'D', text: "A managed platform gives more control over the operating system in exchange for more maintenance work." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Moving from IaaS to PaaS trades control for convenience: the provider takes over servers, operating systems, runtimes and scaling, so the team ships faster with less operational effort, but it has less control over the environment and must work within the platform's supported languages, configurations and limits. PaaS gives less control of the operating system, not more. Virtual machines leave patching and operations with the customer. The models differ substantially in control and responsibility, not just price.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["PaaS", "IaaS", "Trade-offs"]
  },
  {
    id: "gcp-cdl-93",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A SaaS system that cannot bend to the process",
    scenario: "A specialty insurer moved to a SaaS policy-administration product to avoid running servers. A year later, underwriters complain that a pricing rule unique to the insurer cannot be implemented, the vendor's release schedule decides when features arrive, and integrations are limited to the vendor's published APIs.",
    question: "Which trade-off of the SaaS model is the insurer experiencing?",
    options: [
      { id: 'A', text: "The least operational burden comes with the least control over customization, features and release timing." },
      { id: 'B', text: "SaaS moves responsibility for the operating system to the insurer, which slows the release of features it wants." },
      { id: 'C', text: "SaaS vendors must publish their source code, so any customization would be copied by the insurer's rivals." },
      { id: 'D', text: "SaaS products run only in one region, which prevents vendors from offering insurers custom pricing logic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Across the service models, management effort and control move together: SaaS removes nearly all operational work because the provider runs the entire application, but the customer can only configure what the product allows, receives features on the vendor's schedule and integrates through the vendor's interfaces. Choosing SaaS means accepting that trade-off, or pairing it with custom components built on PaaS or IaaS for truly differentiating logic. The provider, not the customer, manages the operating system in SaaS. Region footprint does not govern pricing logic. SaaS vendors are not required to publish source code.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["SaaS", "Trade-offs"]
  },
  {
    id: "gcp-cdl-94",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Ranking four services by how much the customer manages",
    scenario: "A university's cloud board is comparing four options for different projects: Compute Engine virtual machines, App Engine, Google Workspace, and a hybrid setup running on its own physical servers. It wants them ranked from the most customer-managed responsibility to the least.",
    question: "Which ranking is correct?",
    options: [
      { id: 'A', text: "App Engine, then Compute Engine, then own physical servers, then Google Workspace." },
      { id: 'B', text: "Compute Engine, then own physical servers, then Google Workspace, then App Engine." },
      { id: 'C', text: "Google Workspace, then App Engine, then Compute Engine, then own physical servers." },
      { id: 'D', text: "Own physical servers, then Compute Engine, then App Engine, then Google Workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "On its own physical servers the university manages everything, from hardware and facilities up. With Compute Engine, an IaaS offering, Google runs the hardware and virtualization while the university manages operating systems, runtimes, applications and data. With App Engine, a PaaS offering, Google also manages the operating system, runtime and scaling, so the university manages mainly code and data. With Google Workspace, a SaaS suite, Google runs the whole application and the university manages users, settings and its content. The other orderings misplace IaaS, PaaS or SaaS relative to one another.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["IaaS", "PaaS", "SaaS"]
  },
  {
    id: "gcp-cdl-95",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Checking the exit before signing a SaaS contract",
    scenario: "A recruitment agency is about to sign a five-year contract for a SaaS applicant-tracking system that will hold all candidate records. The COO remembers a previous vendor that made it slow and expensive to get data back when the agency left, and asks what to confirm before signing.",
    question: "What is the most important thing to confirm?",
    options: [
      { id: 'A', text: "That the vendor allows the agency to install the application on its own servers if the vendor's platform fails." },
      { id: 'B', text: "That the vendor publishes the application's full source code so the agency can maintain its own copy later." },
      { id: 'C', text: "That the agency can export its data in a usable, documented format at any time, including when it leaves." },
      { id: 'D', text: "That the vendor runs the application on the same operating system version the agency uses in its offices." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With SaaS the vendor runs the application and holds the data in its own systems, so data portability, meaning the ability to export complete data in a documented format during the contract and at exit, is the key protection against lock-in and a painful departure. SaaS vendors rarely let customers self-host their product, and doing so would defeat the purpose of SaaS. Source code publication is not a normal SaaS term and would not return the agency's data. The vendor's operating system is invisible to SaaS customers and irrelevant to getting data back.",
    referenceUrl: "https://cloud.google.com/saas",
    tags: ["SaaS", "Vendor lock-in"]
  },
  {
    id: "gcp-cdl-96",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Paying for a CRM by the seat",
    scenario: "A 200-person sales organization is replacing an old on-premises CRM. The chief revenue officer wants predictable costs, no hardware or software upgrades to plan, and new features to appear automatically without IT projects.",
    question: "Which characteristic of SaaS matches these goals?",
    options: [
      { id: 'A', text: "A managed runtime, with the company's developers writing and deploying the CRM's features itself." },
      { id: 'B', text: "A perpetual license bought upfront, with the company installing each new version on its servers." },
      { id: 'C', text: "Hourly billing for virtual machines, with the company upgrading the CRM software on its schedule." },
      { id: 'D', text: "A subscription, often priced per user, with the provider running and updating the whole application." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SaaS applications are typically sold as subscriptions, often per user per month, and the provider hosts, maintains and updates the application, so costs are predictable, there are no upgrade projects and new features arrive automatically. A perpetual license with self-installed upgrades is the traditional on-premises model. Hourly virtual machine billing is IaaS and leaves upgrades with the company. A managed runtime for the company's own code is PaaS.",
    referenceUrl: "https://cloud.google.com/saas",
    tags: ["SaaS", "Pricing"]
  },
  {
    id: "gcp-cdl-97",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A managed database for a two-person team",
    scenario: "A startup's two developers need a PostgreSQL database for their app. They want Google to handle provisioning, patching, backups and replication, while they keep designing the schema, writing queries and controlling who can access the data.",
    question: "Which option reflects the service model they want?",
    options: [
      { id: 'A', text: "Running PostgreSQL on an office laptop and copying the schema and data to cloud storage nightly." },
      { id: 'B', text: "Using Cloud SQL, a managed database where Google runs the engine and they own schema and data." },
      { id: 'C', text: "Installing PostgreSQL on a Compute Engine VM, where they script their own database patching and backups." },
      { id: 'D', text: "Subscribing to a SaaS form-builder that keeps the app's records in the vendor's proprietary format." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud SQL is a fully managed relational database service, a platform-level offering: Google provisions the database, patches the engine, runs backups and replication, while the customer designs schemas, writes queries and manages access to the data. A self-installed database on a virtual machine is IaaS, leaving patching and backups with the developers. A laptop database is neither managed nor reliable. A SaaS tool with a proprietary format does not give them a PostgreSQL database to build their own app on.",
    referenceUrl: "https://cloud.google.com/sql/docs/introduction",
    tags: ["PaaS", "Managed services"]
  },
  {
    id: "gcp-cdl-98",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Which layers the provider manages in PaaS",
    scenario: "A retailer's platform team is moving its internal apps from virtual machines to a PaaS offering. The security lead wants to update the responsibility chart and asks which layers the provider now takes over that the team used to manage on virtual machines.",
    question: "Which layers move to the provider when switching from IaaS to PaaS?",
    options: [
      { id: 'A', text: "The application code and the business data, which the provider now writes, owns and classifies." },
      { id: 'B', text: "The operating system, runtime and middleware, which the team had to patch on its virtual machines." },
      { id: 'C', text: "The physical servers and data center facilities, which were customer-managed under IaaS." },
      { id: 'D', text: "The user accounts and access policies, which the provider now defines for each internal app." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Under IaaS the provider already manages physical hardware, facilities, networking and virtualization, while the customer manages the operating system, runtime, middleware, applications and data. Moving to PaaS shifts the operating system, runtime and middleware to the provider as well, leaving the team with its code, data and access configuration. Code and data always remain the customer's. Deciding who may access internal apps stays with the customer in every model. Physical servers and facilities were never the customer's responsibility under IaaS.",
    referenceUrl: "https://cloud.google.com/learn/paas-vs-iaas-vs-saas",
    tags: ["PaaS", "IaaS", "Service models"]
  },
  {
    id: "gcp-cdl-99",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Spotting the infrastructure service in a product list",
    scenario: "A new finance analyst is tagging a Google Cloud invoice by service model. She understands that IaaS means renting raw computing resources and managing the operating system yourself, but she is unsure which line on the invoice fits that description.",
    question: "Which product is an example of IaaS?",
    options: [
      { id: 'A', text: "Looker Studio, which provides ready-made dashboards and reports that business users build in a browser." },
      { id: 'B', text: "App Engine, which runs the customer's application code on a runtime that Google manages and scales." },
      { id: 'C', text: "Compute Engine, which provides virtual machines whose operating system the customer runs and patches." },
      { id: 'D', text: "Google Workspace, which provides email, calendars and documents that staff simply sign in to use." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Compute Engine offers virtual machines on Google's infrastructure, with the customer responsible for the operating system and everything above it, which is the definition of Infrastructure as a Service. Google Workspace is a complete application suite, so it is SaaS. App Engine runs customer code on a Google-managed runtime, making it PaaS. Looker Studio is a browser-based reporting tool delivered as a finished application, which places it in the SaaS category.",
    referenceUrl: "https://cloud.google.com/compute/docs/overview",
    tags: ["IaaS", "Google Cloud products"]
  },
  {
    id: "gcp-cdl-100",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Personalized pages that a cache cannot help",
    scenario: "A streaming service hosts everything in a US region. Viewers in Asia wait several seconds for their personalized home page, which is generated per user from viewing history and changes on every visit; static artwork already loads quickly through edge caching.",
    question: "What would most improve load times for these Asian viewers?",
    options: [
      { id: 'A', text: "Moving the home page to a larger machine type in the US region, since more CPU removes network delays." },
      { id: 'B', text: "Deploying the personalization service in a region in Asia, with the profile data it relies on stored close by." },
      { id: 'C', text: "Adding more edge cache capacity for Asian viewers' home pages, since caching removes the delay for any content." },
      { id: 'D', text: "Adding a third zone to the US region, since spreading servers across zones reduces the distance to Asia." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Edge caching works for content that many users share and that changes rarely; a home page generated uniquely for each viewer on every visit cannot be served from a cache, so the request must still travel to wherever the application runs. Deploying the personalization service and the data it needs in a region close to Asian viewers shortens that round trip. Extra cache capacity does not help uncacheable content. Zones in the US region are all in the same geographic area, so they do not reduce distance to Asia. A larger machine speeds processing but not the network latency causing the delay.",
    referenceUrl: "https://cloud.google.com/solutions/best-practices-compute-engine-region-selection",
    tags: ["Regions", "Edge locations", "Latency"]
  }
];

export default GCP_CDL_QUESTIONS_4;
