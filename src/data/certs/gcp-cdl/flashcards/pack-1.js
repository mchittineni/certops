export const GCP_CDL_FLASHCARDS_1 = [
  {
    id: "gcp-cdl-fc-1",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How does Google Cloud define cloud computing in one sentence?",
    hint: "Three ideas: on demand, as a service, pay for use.",
    back: "Cloud computing is the <strong>on-demand availability of computing resources</strong> (compute, storage, networking, software) <strong>delivered as services over the internet</strong>. The customer stops self-managing physical resources and <strong>pays only for what it uses</strong>.",
    tags: ["Cloud computing", "Definitions"]
  },
  {
    id: "gcp-cdl-fc-2",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What are the five essential characteristics that make a service cloud computing?",
    hint: "The NIST list most providers use.",
    back: "<strong>On-demand self-service</strong> (users provision without a ticket), <strong>broad network access</strong>, <strong>resource pooling</strong> (shared, multi-tenant capacity), <strong>rapid elasticity</strong> (scale out and back quickly) and <strong>measured service</strong> (usage is metered and billed). A hosting deal missing self-service, elasticity or metering is not really cloud.",
    tags: ["Cloud computing", "Characteristics"]
  },
  {
    id: "gcp-cdl-fc-3",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Digitization vs digital transformation: what is the difference?",
    hint: "One changes the medium, the other changes the business.",
    back: "<strong>Digitization</strong> converts analog information into digital form, such as scanning paper invoices. <strong>Digital transformation</strong> uses digital technologies, including cloud, to create or modify <strong>business processes, culture and customer experiences</strong> so the organization can meet changing market needs. Digitization can be a step on the way; on its own it changes nothing about how the business operates.",
    tags: ["Digital transformation", "Definitions"]
  },
  {
    id: "gcp-cdl-fc-4",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Open source vs open standard: what does each one guarantee?",
    hint: "Code versus specification.",
    back: "<strong>Open source</strong> guarantees access to a product's <strong>source code</strong> under a license that lets anyone inspect, modify and redistribute it (Kubernetes, TensorFlow). An <strong>open standard</strong> guarantees a <strong>publicly available specification</strong> that anyone may implement (HTTP, SQL, the OCI image format), so products can interoperate even when the products themselves are closed-source.",
    tags: ["Open source", "Open standards"]
  },
  {
    id: "gcp-cdl-fc-5",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why does open source reduce vendor lock-in for a cloud customer?",
    hint: "Think about where the same code can run.",
    back: "Software built on open source projects runs the same way on any provider or on-premises, so moving means redeploying rather than rewriting. Examples Google originated include <strong>Kubernetes</strong> (from its internal Borg system), <strong>TensorFlow</strong> and the <strong>Go</strong> language. Customers also benefit from community innovation and can inspect the code for security.",
    tags: ["Open source", "Vendor lock-in"]
  },
  {
    id: "gcp-cdl-fc-6",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "In cloud discussions, what does infrastructure cover?",
    hint: "The layer underneath the application.",
    back: "The <strong>physical and virtual resources</strong> an application runs on: data center facilities, power and cooling, servers, storage, networking and the virtualization layer. In the cloud the provider owns and operates this layer; the customer always keeps responsibility for its own data and, depending on the service model, some of the software above it.",
    tags: ["Infrastructure", "Definitions"]
  },
  {
    id: "gcp-cdl-fc-7",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Agentic AI vs generative AI: what separates them?",
    hint: "Creating content versus completing work.",
    back: "<strong>Generative AI</strong> creates new content (text, images, code) in response to a prompt. <strong>Agentic AI</strong> is focused on <strong>autonomous decision-making and action</strong>: given a goal, it plans steps, uses tools and systems to act, and checks the results with minimal human intervention. Agents usually use a generative model for reasoning, so the two work together.",
    tags: ["Agentic AI", "Generative AI"]
  },
  {
    id: "gcp-cdl-fc-8",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is the working cycle of an agentic AI system, as Google describes it?",
    hint: "Five stages, starting with gathering information.",
    back: "<strong>Perception</strong> (gather information from data sources, sensors and interfaces), <strong>reasoning</strong> (a large language model interprets the context), <strong>planning</strong> (break the goal into steps), <strong>action</strong> (perform tasks or call other systems) and <strong>reflection</strong> (evaluate results and adjust). Repeating this loop lets the agent improve over time.",
    tags: ["Agentic AI", "Definitions"]
  },
  {
    id: "gcp-cdl-fc-9",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Agentic AI vs robotic process automation (RPA): when is each the right fit?",
    hint: "Fixed script or changing situation?",
    back: "<strong>RPA</strong> replays a fixed, recorded sequence of steps across applications; it is cheap and predictable for stable, rule-bound tasks but breaks when screens or cases change. <strong>Agentic AI</strong> reasons about a goal and chooses its own steps, so it suits tasks with variation and judgment, such as resolving a customer issue. Agents need guardrails, such as human approval for high-impact actions.",
    tags: ["Agentic AI", "Automation"]
  },
  {
    id: "gcp-cdl-fc-10",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Scalability vs elasticity: how do the two terms differ?",
    hint: "Can it grow, and does it shrink by itself?",
    back: "<strong>Scalability</strong> is a system's ability to handle more load by adding resources. <strong>Elasticity</strong> is the ability to add <strong>and remove</strong> resources automatically as demand changes, so capacity tracks load in both directions. Elasticity is what makes pay-for-use pricing save money on spiky workloads.",
    tags: ["Scalability", "Elasticity"]
  },
  {
    id: "gcp-cdl-fc-11",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Vertical vs horizontal scaling: which is which, and which does the cloud favor?",
    hint: "Bigger machine or more machines?",
    back: "<strong>Vertical scaling</strong> (scaling up) gives one machine more CPU or memory; it is simple but has a ceiling and usually a restart. <strong>Horizontal scaling</strong> (scaling out) adds more instances behind a load balancer; it has no practical ceiling and also improves resilience. Cloud-native designs favor horizontal scaling with autoscaling.",
    tags: ["Scalability", "Architecture"]
  },
  {
    id: "gcp-cdl-fc-12",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Which cloud benefits appear on Google's list of reasons businesses adopt the cloud?",
    hint: "Around nine; money is only one of them.",
    back: "<strong>Scalability, cost-effectiveness, agility, speed, flexibility, enhanced security, global reach and high availability, data-driven insights</strong>, and <strong>strategic value and focus</strong> (staff time moves from maintenance to differentiating work). Together they explain why cloud underpins digital transformation.",
    tags: ["Cloud benefits"]
  },
  {
    id: "gcp-cdl-fc-13",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Agility vs speed as cloud benefits: what is the distinction?",
    hint: "One is about time, the other about the cost of changing course.",
    back: "<strong>Speed</strong> is how fast resources and services become available: minutes instead of weeks of procurement, so ideas reach market sooner. <strong>Agility</strong> is the ability to change direction cheaply: create resources for an experiment, delete them when it fails and try again. Speed shortens the path; agility makes many short paths affordable.",
    tags: ["Agility", "Speed"]
  },
  {
    id: "gcp-cdl-fc-14",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why can a lift-and-shift migration cost more than the data center it replaced?",
    hint: "Pay-for-use only pays off if usage changes.",
    back: "On-premises servers are typically <strong>sized for peak</strong> and left running. Copying them unchanged means paying cloud rates for idle capacity around the clock. Savings come from <strong>rightsizing</strong>, <strong>autoscaling</strong>, shutting down idle resources and buying <strong>committed use discounts</strong> for steady load. Cost-effectiveness is a benefit you manage for, not one you get automatically.",
    tags: ["Cost-effectiveness", "Rightsizing"]
  },
  {
    id: "gcp-cdl-fc-15",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does high availability mean, and how does the cloud make it easier?",
    hint: "Failure domains you do not have to build.",
    back: "<strong>High availability</strong> means a system keeps serving users through component failures, usually by running redundant copies. The cloud makes it easier because providers already operate <strong>multiple isolated zones per region</strong> and many regions, so customers can spread workloads across failure domains without building second data centers.",
    tags: ["High availability"]
  },
  {
    id: "gcp-cdl-fc-16",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "High availability vs disaster recovery: how do their goals differ?",
    hint: "Keep running, or recover after stopping?",
    back: "<strong>High availability</strong> aims to <strong>avoid downtime</strong> by keeping redundant capacity running, for example across zones. <strong>Disaster recovery</strong> aims to <strong>restore service after</strong> a major outage within agreed targets (RTO for time to recover, RPO for acceptable data loss), often in another region from backups or replicas. Most businesses need both.",
    tags: ["High availability", "Disaster recovery"]
  },
  {
    id: "gcp-cdl-fc-17",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does global reach give a business that moves to a large cloud provider?",
    hint: "Think expansion without construction.",
    back: "The ability to <strong>deploy close to customers worldwide</strong> in regions the provider already runs, cutting latency and meeting data residency needs, without building or leasing overseas facilities. A company can enter a new market in days, and Google's private global network carries traffic between regions and users.",
    tags: ["Global reach"]
  },
  {
    id: "gcp-cdl-fc-18",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "How does the cloud enhance security for an organization, and what does it not take over?",
    hint: "Inherited controls, shared responsibility.",
    back: "Customers inherit security built at a scale few could match: hardened data centers, <strong>purpose-built hardware</strong>, <strong>encryption at rest by default</strong> and large specialist teams. The customer still owns <strong>identity and access, data classification and service configuration</strong>. Moving to the cloud shares responsibility; it never removes it.",
    tags: ["Enhanced security", "Shared responsibility"]
  },
  {
    id: "gcp-cdl-fc-19",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Why is the cloud said to enable data-driven insights?",
    hint: "Storage, compute and AI on tap.",
    back: "Cloud platforms can <strong>bring data from many sources together</strong> and query very large volumes in seconds with serverless analytics, then apply machine learning to predict and personalize. Organizations that could never afford that capacity on-premises can base decisions on evidence rather than instinct, and can share data across teams instead of keeping silos.",
    tags: ["Data-driven insights"]
  },
  {
    id: "gcp-cdl-fc-20",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does strategic value and focus mean as a cloud benefit?",
    hint: "Where do the IT team's hours go?",
    back: "Managed services hand routine work such as patching, hardware replacement and version upgrades to the provider, so <strong>people move from keeping the lights on to building things that differentiate the business</strong>. The benefit is redirected talent and attention, not simply lower headcount.",
    tags: ["Strategic value", "Managed services"]
  },
  {
    id: "gcp-cdl-fc-21",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What does flexibility mean as a benefit of the cloud?",
    hint: "Choice without commitment.",
    back: "Access to a <strong>broad menu of services</strong>, machine types and deployment models (public, hybrid, multicloud) that can be adopted, resized or retired at will. Teams can try several technologies, measure real usage and switch without being stuck with hardware bought for yesterday's guess.",
    tags: ["Flexibility"]
  },
  {
    id: "gcp-cdl-fc-22",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Digital transformation spans people, process and technology. What goes wrong when only technology changes?",
    hint: "New platform, old approval gates.",
    back: "The new platform runs at the old pace: quarterly change boards, annual funding for every idea and siloed teams mean releases, experiments and customer outcomes do not improve. Real transformation also changes <strong>ways of working</strong> (small teams, frequent releases, data-informed decisions) and <strong>culture</strong> (tolerating failed experiments), with leadership sponsoring the change.",
    tags: ["Digital transformation", "Culture"]
  },
  {
    id: "gcp-cdl-fc-23",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "Give three examples of open standards and what each lets products do.",
    hint: "Protocols, query language, containers.",
    back: "<strong>HTTP/TCP/IP</strong> let any browser talk to any web server. <strong>SQL</strong> lets analysts query many different databases with the same language. The <strong>OCI image specification</strong> lets containers built by one tool run on another vendor's runtime. Open standards deliver interoperability regardless of who wrote the software.",
    tags: ["Open standards", "Interoperability"]
  },
  {
    id: "gcp-cdl-fc-24",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "What is resource pooling, and why does it lower costs in the cloud?",
    hint: "Many tenants, one very large pool.",
    back: "<strong>Resource pooling</strong> means the provider serves many customers from shared physical capacity, assigning resources dynamically as each one needs them. Because different customers peak at different times, the provider runs hardware at much higher utilization than a single company could, and passes part of that efficiency on as lower prices.",
    tags: ["Cloud computing", "Resource pooling"]
  },
  {
    id: "gcp-cdl-fc-25",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    front: "When an AI agent can take real actions, what guardrails should a business put around it?",
    hint: "Autonomy is granted, not assumed.",
    back: "Give the agent <strong>least-privilege access</strong> to only the tools and data its task needs, require <strong>human-in-the-loop approval</strong> for high-impact or irreversible actions (large refunds, contract changes), set clear policy limits, <strong>log every action</strong> for audit, and monitor outcomes so errors are caught and the agent can be corrected.",
    tags: ["Agentic AI", "Governance"]
  }
];

export default GCP_CDL_FLASHCARDS_1;
