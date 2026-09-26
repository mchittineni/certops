export const GCP_CDL_FLASHCARDS_4 = [
  {
    id: "gcp-cdl-fc-76",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Region vs zone in Google Cloud: how do they relate?",
    hint: "One contains the other.",
    back: "A <strong>region</strong> is an independent geographic area (for example a metropolitan location) where resources are hosted. Each region contains <strong>zones</strong>, usually three or more. A zone is a deployment area within the region and should be treated as a <strong>single failure domain</strong>, isolated from the region's other zones.",
    tags: ["Regions", "Zones"]
  },
  {
    id: "gcp-cdl-fc-77",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is a multi-region, and when is it used?",
    hint: "Bigger than a region.",
    back: "A <strong>multi-region</strong> is a large geographic area, such as the United States, the European Union or Asia, containing two or more regions. Some services (Cloud Storage, BigQuery, Spanner configurations) can store data across a multi-region for <strong>geo-redundancy and broad availability</strong>, at the cost of less precise data location than a single region.",
    tags: ["Multi-region", "Global infrastructure"]
  },
  {
    id: "gcp-cdl-fc-78",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are edge locations (points of presence), and what are they used for?",
    hint: "Where users meet Google's network.",
    back: "<strong>Edge locations</strong> are Google network points of presence in many cities, close to users and connected to internet providers. They are where user traffic <strong>enters Google's backbone</strong>, where <strong>Cloud CDN caches</strong> content near users, where global load balancing starts and where edge defenses absorb attacks. They do not run customers' applications or databases.",
    tags: ["Edge locations", "Global network"]
  },
  {
    id: "gcp-cdl-fc-79",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Zonal, regional and global resources: give an example of each in Google Cloud.",
    hint: "Scope decides what a failure takes down.",
    back: "<strong>Zonal</strong>: a Compute Engine VM or zonal persistent disk; it lives in one zone and fails with it. <strong>Regional</strong>: a regional managed instance group, regional persistent disk or Cloud Run service; spread across zones in one region. <strong>Global</strong>: a VPC network, a global external load balancer or a machine image, usable from any region.",
    tags: ["Zones", "Regions", "Resource scope"]
  },
  {
    id: "gcp-cdl-fc-80",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Which factors should guide the choice of a Google Cloud region?",
    hint: "Five checks, not just the nearest one.",
    back: "<strong>Latency</strong> to users, <strong>data residency and regulation</strong>, <strong>availability of the services and machine types</strong> the workload needs, <strong>price</strong> (which varies by region) and <strong>carbon footprint</strong> (Google publishes carbon-free energy figures per region). Batch jobs with no residency limits can favor price or carbon over latency.",
    tags: ["Regions", "Region selection"]
  },
  {
    id: "gcp-cdl-fc-81",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Multi-zone vs multi-region deployment: what does each protect against, and what does it cost?",
    hint: "Facility failure versus losing a whole area.",
    back: "<strong>Multi-zone</strong> (within one region) survives the failure of a single zone with low latency between copies and modest extra cost; it cannot survive losing the whole region. <strong>Multi-region</strong> survives a regional disaster but needs data replication across distance, traffic failover and duplicated capacity, so it costs more and adds complexity. Match the choice to the business's tolerance for downtime.",
    tags: ["Zones", "Regions", "Resilience"]
  },
  {
    id: "gcp-cdl-fc-82",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "When is running a workload in a single zone an acceptable choice?",
    hint: "What does an hour of downtime cost this workload?",
    back: "When a zone outage would cause <strong>little business harm</strong>: developer sandboxes rebuilt from code, test environments, and batch jobs that can simply be <strong>rerun</strong>. It saves the extra capacity multi-zone designs need. Customer-facing and revenue-critical services should span multiple zones because a zone is a single failure domain.",
    tags: ["Zones", "Cost"]
  },
  {
    id: "gcp-cdl-fc-83",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What kind of content can edge caching speed up, and what kind can it not?",
    hint: "Shared and unchanging versus unique per user.",
    back: "Edge caching (Cloud CDN) helps with content that <strong>many users share and that changes rarely</strong>: images, video, style sheets, scripts, software downloads. It cannot help with <strong>personalized or constantly changing responses</strong> generated per request; for those, run the application in a region closer to users.",
    tags: ["Edge locations", "Cloud CDN"]
  },
  {
    id: "gcp-cdl-fc-84",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are the three main cloud service models?",
    hint: "Infrastructure, platform, software.",
    back: "<strong>IaaS</strong> (Infrastructure as a Service): on-demand compute, storage and networking, such as Compute Engine. <strong>PaaS</strong> (Platform as a Service): a managed environment to build and run applications, such as App Engine. <strong>SaaS</strong> (Software as a Service): a complete application delivered over the internet, such as Google Workspace.",
    tags: ["Service models", "IaaS", "PaaS", "SaaS"]
  },
  {
    id: "gcp-cdl-fc-85",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "In IaaS, PaaS and SaaS, which layers does the customer manage?",
    hint: "The stack shrinks as you move toward SaaS.",
    back: "<strong>IaaS</strong>: operating system, middleware, runtime, applications and data (the provider runs hardware, networking and virtualization). <strong>PaaS</strong>: applications and data (the provider adds OS, runtime and scaling). <strong>SaaS</strong>: users, settings and the data they put in (the provider runs the whole application). In every model the customer controls <strong>access to its data</strong>.",
    tags: ["Service models", "Responsibilities"]
  },
  {
    id: "gcp-cdl-fc-86",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What trade-off runs across IaaS, PaaS and SaaS?",
    hint: "Two dials that move together.",
    back: "<strong>Control and flexibility fall</strong> as you move from IaaS to PaaS to SaaS, while <strong>management effort falls and speed rises</strong>. IaaS lets you run almost anything but you operate it; PaaS removes OS and scaling work but constrains the environment; SaaS removes nearly all operations but limits customization to what the product allows and ties feature timing to the vendor.",
    tags: ["Service models", "Trade-offs"]
  },
  {
    id: "gcp-cdl-fc-87",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "When is IaaS the right service model?",
    hint: "You need the operating system in your hands.",
    back: "When you need <strong>control of the operating system</strong> and host software: legacy or vendor applications with specific OS versions or agents, workloads being <strong>rehosted (lift and shift)</strong> quickly with minimal change, or custom configurations a managed platform does not support.",
    tags: ["IaaS", "Decision rules"]
  },
  {
    id: "gcp-cdl-fc-88",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "When is PaaS the right service model?",
    hint: "Developers want to write code, not run servers.",
    back: "When a team is building or modernizing its <strong>own application</strong> and wants the provider to handle servers, operating systems, runtimes, patching and scaling. It shortens time to market and cuts operational work, provided the app fits the platform's supported languages and limits.",
    tags: ["PaaS", "Decision rules"]
  },
  {
    id: "gcp-cdl-fc-89",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "When is SaaS the right service model?",
    hint: "The need is common and not a differentiator.",
    back: "When the capability is <strong>standard across businesses</strong>, such as email, collaboration, CRM or HR, and there is no advantage in building it. SaaS is fastest to adopt, usually billed <strong>per user by subscription</strong>, and updated by the vendor. Build on PaaS or IaaS only for what truly differentiates you.",
    tags: ["SaaS", "Decision rules"]
  },
  {
    id: "gcp-cdl-fc-90",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Classify these Google Cloud offerings by service model: Compute Engine, App Engine, Cloud SQL, Google Workspace.",
    hint: "Ask who runs the operating system and the application.",
    back: "<strong>Compute Engine</strong>: IaaS (you run the OS on virtual machines). <strong>App Engine</strong>: PaaS (you deploy code; Google runs the runtime). <strong>Cloud SQL</strong>: a managed database service at the platform level (Google runs the engine, patches and backups; you own schemas and data). <strong>Google Workspace</strong>: SaaS (a finished application suite).",
    tags: ["Service models", "Google Cloud products"]
  },
  {
    id: "gcp-cdl-fc-91",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is serverless computing, and how does it relate to PaaS?",
    hint: "No servers to see, and often nothing to pay when idle.",
    back: "<strong>Serverless</strong> offerings such as <strong>Cloud Run</strong> and Cloud Run functions let developers deploy code or containers while the provider manages all infrastructure, scales automatically, often <strong>down to zero</strong>, and bills for actual usage. It is an evolution of the PaaS idea with finer-grained, pay-per-use billing.",
    tags: ["Serverless", "PaaS"]
  },
  {
    id: "gcp-cdl-fc-92",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are the main benefits of IaaS compared with owning servers?",
    hint: "Same model you know, without the hardware.",
    back: "No hardware purchases, facilities or refresh cycles; capacity on demand billed by use; fast provisioning in minutes; global locations; and a familiar operating model, so existing workloads move with little change. The customer still manages operating systems and above, so operational work does not disappear.",
    tags: ["IaaS", "Benefits"]
  },
  {
    id: "gcp-cdl-fc-93",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why is SaaS not always the best choice even though it needs the least management?",
    hint: "What if the process is your competitive edge?",
    back: "SaaS limits you to the product's configuration options, the vendor's <strong>release schedule</strong> and its <strong>published integrations</strong>, and your data lives in the vendor's model. For processes that differentiate the business, such as unique pricing rules, those limits can block value; a common answer is SaaS for commodity functions plus custom components on PaaS or IaaS.",
    tags: ["SaaS", "Trade-offs"]
  },
  {
    id: "gcp-cdl-fc-94",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How do pricing models typically differ across IaaS, PaaS and SaaS?",
    hint: "Per resource, per usage, per seat.",
    back: "<strong>IaaS</strong>: pay for provisioned resources by time (vCPU and memory per second or hour, disk per GB-month). <strong>PaaS and serverless</strong>: pay for platform usage such as requests, instance time or compute consumed, sometimes scaling to zero. <strong>SaaS</strong>: usually a <strong>subscription per user</strong> per month or year.",
    tags: ["Service models", "Pricing"]
  },
  {
    id: "gcp-cdl-fc-95",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why does Google Cloud price the same resource differently in different regions?",
    hint: "Local costs differ.",
    back: "Regional prices reflect local costs such as land, power, taxes and connectivity. For workloads with no latency or residency constraints, such as batch jobs, choosing a lower-priced region can cut cost, as long as <strong>data transfer (egress) charges</strong> between regions do not cancel the saving.",
    tags: ["Regions", "Pricing"]
  },
  {
    id: "gcp-cdl-fc-96",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Trace how regions, zones and edge locations work together when a user opens a Google Cloud-hosted app.",
    hint: "Name, entry point, backbone, destination.",
    back: "DNS resolves the app's name to an IP address; the user's traffic enters Google's network at the <strong>nearest edge location</strong> (where cached content may be served directly); it crosses Google's <strong>private backbone</strong> to the <strong>region</strong> hosting the app; a load balancer sends it to healthy instances running in one or more <strong>zones</strong> of that region.",
    tags: ["Regions", "Zones", "Edge locations"]
  },
  {
    id: "gcp-cdl-fc-97",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does it mean that a Google Cloud product is not available in every region?",
    hint: "Check before you commit.",
    back: "New products, features and specialized machine types, especially <strong>GPUs and TPUs</strong>, roll out to regions over time, so a region near your users may not offer everything. Always <strong>confirm availability</strong> of the services and machine types a workload needs when choosing its region.",
    tags: ["Regions", "Region selection"]
  },
  {
    id: "gcp-cdl-fc-98",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How can region choice help reduce the carbon footprint of cloud workloads?",
    hint: "Grids differ.",
    back: "Google publishes each region's <strong>carbon-free energy percentage</strong> and marks lower-carbon regions in its tools. Placing location-flexible workloads, such as batch processing or training jobs, in cleaner-grid regions lowers their emissions, and <strong>Carbon Footprint</strong> reporting shows the effect per project.",
    tags: ["Regions", "Sustainability"]
  },
  {
    id: "gcp-cdl-fc-99",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why do most organizations end up using IaaS, PaaS and SaaS at the same time?",
    hint: "One size does not fit every workload.",
    back: "Each workload has a different balance of control and effort: <strong>SaaS</strong> for commodity needs such as email and CRM, <strong>PaaS or serverless</strong> for custom apps the business changes often, and <strong>IaaS</strong> for systems that need operating-system control, such as vendor-certified or legacy software. Choosing per workload beats forcing everything into one model.",
    tags: ["Service models", "Decision rules"]
  },
  {
    id: "gcp-cdl-fc-100",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Colocation vs IaaS: what is the difference for the customer?",
    hint: "Who owns the servers?",
    back: "In <strong>colocation</strong> the customer rents space, power and cooling in a third-party facility but still <strong>buys, owns and operates its own servers</strong>. With <strong>IaaS</strong> the provider owns and runs the hardware and virtualization, and the customer rents virtual machines on demand, paying by use with no hardware to buy or refresh.",
    tags: ["IaaS", "Definitions"]
  }
];

export default GCP_CDL_FLASHCARDS_4;
