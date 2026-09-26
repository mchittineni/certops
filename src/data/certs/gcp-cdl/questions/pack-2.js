export const GCP_CDL_QUESTIONS_2 = [
  {
    id: "gcp-cdl-26",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Young customers leaving for app-only banks",
    scenario: "A 90-year-old savings bank is losing customers under 35 to app-only competitors that open accounts in five minutes, approve small loans instantly and add features every few weeks. Its own account opening still requires a branch visit and three days of paperwork.",
    question: "Which driver of digital transformation does this situation illustrate most clearly?",
    options: [
      { id: 'A', text: "Changing customer expectations, because digital-native rivals have reset what customers consider a normal experience." },
      { id: 'B', text: "A hardware refresh deadline, because the bank's core servers are reaching the end of vendor support and must be replaced." },
      { id: 'C', text: "A regulatory mandate, because supervisors have ordered banks to move customer records out of their own data centers." },
      { id: 'D', text: "A merger integration, because the bank must combine two sets of branch systems after acquiring a smaller competitor and its customers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rising customer expectations, often set by digital-native competitors, are among the strongest forces pushing organizations to transform: customers compare every provider with the best digital experience they have had. Here the loss of younger customers to faster, app-based rivals is the trigger. A hardware refresh can prompt a migration, but nothing in the scenario mentions aging servers. Regulators have not ordered banks off their own infrastructure; residency and resilience rules shape how banks use cloud, not whether they must. No merger is described.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Transformation drivers", "Customer expectations"]
  },
  {
    id: "gcp-cdl-27",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A data center lease that ends next year",
    scenario: "A regional hospital network's colocation lease ends in 14 months, and renewing would require a five-year commitment plus a multimillion-dollar hardware refresh. The CIO sees this as the moment to rethink how the organization runs its applications rather than simply signing again.",
    question: "What role does the lease expiry play in the hospital network's transformation?",
    options: [
      { id: 'A', text: "It is a skills challenge that shows the IT team lacks the experience to operate a modern data center." },
      { id: 'B', text: "It is a compliance obligation that requires the hospital network to move patient data into a public cloud." },
      { id: 'C', text: "It is a technical blocker that must be resolved by renewing the lease before cloud planning can begin." },
      { id: 'D', text: "It is a triggering event that makes the cost of standing still visible and opens a window to change direction." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Events such as a lease expiry or a looming hardware refresh often trigger transformation because they force a large reinvestment decision; comparing that spend with a move to the cloud makes the cost of continuing as before explicit. It does not have to be resolved by renewing first; the whole point is to plan the alternative before the deadline. No regulation requires patient data to move to a public cloud; healthcare rules govern how data is protected wherever it runs. The scenario says nothing about staff capability.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Transformation drivers", "Data center exit"]
  },
  {
    id: "gcp-cdl-28",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "An operations team that has never used the cloud",
    scenario: "A logistics company has approved a move to Google Cloud, but its 25-person operations team has spent their careers managing physical servers and storage arrays. Several engineers worry about their roles, and managers fear the migration will stall for lack of know-how.",
    question: "Which action best addresses this transformation hurdle?",
    options: [
      { id: 'A', text: "Delay the migration until the company can recruit a new team of experienced cloud engineers from outside the firm." },
      { id: 'B', text: "Replace the operations team with a managed service provider so the company does not need any in-house cloud skills." },
      { id: 'C', text: "Invest in training and certification for existing staff, pairing them with experienced partners during early projects." },
      { id: 'D', text: "Move only software-as-a-service applications so that the operations team never has to learn a new infrastructure model." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A skills gap is one of the most common hurdles in cloud adoption. Upskilling existing staff through training and certification, and pairing them with partners who have done it before, keeps the institutional knowledge the team already holds and reduces fear about roles. Outsourcing everything leaves the company unable to direct its own platform. Waiting to recruit a whole new team delays the benefits and loses experienced people who know the business. Restricting the move to SaaS avoids the problem only by giving up most of the transformation.",
    referenceUrl: "https://cloud.google.com/learn/certification",
    tags: ["Transformation challenges", "Skills gap"]
  },
  {
    id: "gcp-cdl-29",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A 30-year-old claims system nobody wants to touch",
    scenario: "An insurer's claims system is a single large application written over 30 years, with business rules buried in code that few current employees understand. Every change risks breaking something else, so releases happen twice a year and new products take months to launch.",
    question: "Which transformation hurdle does this describe?",
    options: [
      { id: 'A', text: "Data residency limits, because claims records must stay in the country, so no change can move processing elsewhere." },
      { id: 'B', text: "Unpredictable cloud spending, because every team provisions resources freely without budgets or cost accountability." },
      { id: 'C', text: "A lack of executive sponsorship, because leaders have not tied the claims system's modernization to clear business goals." },
      { id: 'D', text: "Legacy technical debt, because a tightly coupled old codebase makes every change slow, risky and costly to deliver." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Technical debt accumulates when systems are built and patched over decades until they are tightly coupled and poorly understood; the result is exactly what the insurer sees, with slow, risky releases and long lead times for new products. It is a major hurdle because modernizing such a system takes planning, often incremental refactoring. Nothing suggests leaders lack commitment. Residency rules restrict where data may be stored, not how quickly code can change. Uncontrolled spending is a cloud cost issue, whereas this system still runs on-premises.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-native",
    tags: ["Transformation challenges", "Technical debt"]
  },
  {
    id: "gcp-cdl-30",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Teams that guard their own systems",
    scenario: "At a consumer goods company, the infrastructure, security and application teams report to different directors and each must approve changes the others make. The cloud platform is ready, yet projects stall for weeks in handoffs, and team leads describe the migration as someone else's initiative.",
    question: "Which obstacle is most limiting this transformation?",
    options: [
      { id: 'A', text: "The absence of an open source strategy, which leaves the teams unsure which tools they are allowed to use." },
      { id: 'B', text: "A shortage of cloud regions in the company's home country, which forces workloads into more distant locations." },
      { id: 'C', text: "Organizational silos and resistance to change, which slow decisions and weaken ownership of the new way of working." },
      { id: 'D', text: "Insufficient network bandwidth between the company's offices and the nearest cloud region for moving data during the migration." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Culture and structure are frequently harder to change than technology: siloed teams with competing approvals and no shared ownership turn a ready platform into weeks of handoffs. Addressing it means leadership sponsorship, cross-functional teams and shared goals. Bandwidth affects data transfer speed, not approval handoffs. An open source policy would not remove the multi-team approval chain. Region availability affects latency and residency, which the scenario does not mention.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Transformation challenges", "Culture"]
  },
  {
    id: "gcp-cdl-31",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Falling behind competitors on AI",
    scenario: "A mid-sized retailer keeps five years of sales, inventory and web-behavior data on on-premises servers with no spare compute. Competitors are launching AI-driven personalization and demand forecasting, but the retailer's own AI pilots cannot even load a full year of data. The board asks what continuing on-premises really risks.",
    question: "What is the most significant business risk of not adopting cloud in this situation?",
    options: [
      { id: 'A', text: "Paying more for software licenses, because on-premises database vendors charge higher fees than cloud databases." },
      { id: 'B', text: "Losing competitiveness, because data it cannot process at scale will not fuel AI while rivals improve every quarter." },
      { id: 'C', text: "Losing its data, because on-premises servers cannot be backed up to tape or disk at the volumes the retailer needs." },
      { id: 'D', text: "Failing a compliance audit, because regulators require retail sales data to be stored on public cloud servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The retailer's data is an asset only if it can be analyzed and used to train and ground AI; without elastic compute and a modern data platform it cannot, while competitors turn the same kind of data into personalization and better forecasts. The cumulative loss of competitiveness is the real cost of standing still. License pricing varies and is not the strategic issue here. No regulation requires retail data to live in a public cloud. On-premises systems can certainly be backed up; the problem is putting the data to work, not preserving it.",
    referenceUrl: "https://cloud.google.com/data-cloud",
    tags: ["Risk of not adopting", "AI"]
  },
  {
    id: "gcp-cdl-32",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A regulator that insists data stays in the EU",
    scenario: "A German health insurer's leadership is stalling its cloud program because the legal team fears that customer data could be moved or accessed outside the European Union. The CIO needs to show how that concern can be handled rather than treated as a reason not to move.",
    question: "Which approach addresses this hurdle?",
    options: [
      { id: 'A', text: "Encrypt the data with the provider's default keys and store it in any region, since encryption removes residency rules." },
      { id: 'B', text: "Keep every workload on-premises permanently, since public cloud providers cannot restrict where customer data is stored." },
      { id: 'C', text: "Move all data to the provider's largest global multi-region so that it is replicated across every continent for safety." },
      { id: 'D', text: "Use EU regions with residency and sovereignty controls, backed by the provider's audited certifications and contract commitments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security and compliance concerns are a common brake on transformation, and they are addressed with controls rather than avoidance: Google Cloud lets customers keep data in chosen EU regions, offers sovereign cloud options and publishes independent audit reports and compliance commitments. Public clouds can restrict location, so staying on-premises forever is unnecessary. A global multi-region would spread data outside the EU, the opposite of the requirement. Encryption protects confidentiality but does not satisfy rules about where data resides or who may access it.",
    referenceUrl: "https://cloud.google.com/sovereign-cloud",
    tags: ["Transformation challenges", "Data residency"]
  },
  {
    id: "gcp-cdl-33",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Aging hardware and weekend outages",
    scenario: "A mail-order pharmacy has deferred server replacement for six years. Disk failures now cause outages most months, spare parts come from resellers, and the IT budget is increasingly spent keeping old equipment running instead of improving the ordering experience.",
    question: "Which consequence of not modernizing does this situation show?",
    options: [
      { id: 'A', text: "Loss of data sovereignty, because older on-premises hardware cannot keep customer records inside a single country." },
      { id: 'B', text: "Lower security, because every older server is automatically exposed to the public internet once vendor support ends." },
      { id: 'C', text: "Higher latency and outages for customers abroad, because the pharmacy's servers sit in one domestic data center." },
      { id: 'D', text: "Rising cost and risk, because maintaining aging infrastructure consumes money and causes breakdowns that hurt customers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Staying on aging infrastructure brings growing maintenance cost, more frequent failures and an IT budget consumed by keeping the lights on, all of which reduce reliability and leave less money for improving customer experience. Old servers are not automatically exposed to the internet, although unpatched systems do raise risk. Data location is a matter of where servers sit, not their age. The pharmacy's issue is outages and cost, not distance to foreign customers.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Risk of not adopting", "Legacy infrastructure"]
  },
  {
    id: "gcp-cdl-34",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A first cloud bill that shocked finance",
    scenario: "Three months into its migration, a software company's cloud bill is 40% above forecast. Engineers can create resources freely, nobody owns the costs for each project, and finance learns about spending only when the invoice arrives. Leaders are now questioning the whole program.",
    question: "Which transformation challenge has the company run into?",
    options: [
      { id: 'A', text: "Cost governance, because consumption pricing needs visibility, budgets and clear ownership of spend by each team." },
      { id: 'B', text: "Technical debt, because the company's legacy code was moved without being rewritten to run efficiently." },
      { id: 'C', text: "A skills gap, because the company's engineers have not yet learned how to deploy applications in the cloud." },
      { id: 'D', text: "Vendor lock-in, because the company's applications now depend on services that only one provider offers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consumption-based pricing shifts spending decisions to the people who create resources, so without cost visibility, budgets, alerts and accountable owners, bills surprise finance and erode trust in the program; cloud financial governance, often called FinOps, is the remedy. Lock-in concerns the difficulty of leaving, not overspending. Unoptimized code can raise costs, but the scenario points to missing ownership and visibility. The engineers are clearly able to deploy resources; the gap is in governing the spend.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Transformation challenges", "Cost governance"]
  },
  {
    id: "gcp-cdl-35",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A transformation with no owner at the top",
    scenario: "A transport operator's IT department launched a cloud program two years ago. Business units were never asked what outcomes they needed, the executive team treats it as an IT cost project, and each budget cycle the program is trimmed. Individual migrations succeed technically, yet nobody can say what the business has gained.",
    question: "What would most improve the program's chances of delivering value?",
    options: [
      { id: 'A', text: "Securing an executive sponsor and tying the program to agreed, measured business results." },
      { id: 'B', text: "Accelerating the program schedule so that every remaining workload is moved within the current budget year." },
      { id: 'C', text: "Switching to a second cloud provider for new workloads so that the two providers compete for the business on price." },
      { id: 'D', text: "Hiring more cloud architects, as the executive team suggests, so each migration meets a higher standard." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Transformation stalls when it is seen as an IT project: without an executive sponsor and clear business outcomes, such as faster product launches or lower cost per trip, there is nothing to prioritize against and no case to defend in budget cycles. Anchoring the program in measured business goals turns technical success into visible value. Moving faster without goals just migrates workloads sooner. A second provider adds complexity and does not create a business case. Better architecture improves individual migrations, which are already succeeding; the missing piece is direction from the top.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Transformation challenges", "Leadership"]
  },
  {
    id: "gcp-cdl-36",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Entering new markets without new buildings",
    scenario: "An online language-learning company wants to launch in Brazil, India and Japan within six months. Its board's growth plan depends on being present in all three before a rival arrives, and building data centers in each country would take years.",
    question: "Which factor is motivating this company to adopt the cloud?",
    options: [
      { id: 'A', text: "The need to meet new accessibility regulations that require learning apps to support screen readers." },
      { id: 'B', text: "The need to cut software license costs, by replacing commercial databases with open source alternatives." },
      { id: 'C', text: "The need to expand into new markets fast, using infrastructure already close to those customers." },
      { id: 'D', text: "The need to reduce the IT team's patching workload, so engineers can focus on building new course content." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The desire to grow into new geographies fast is a classic driver of cloud adoption: providers already operate regions around the world, so a company can serve customers in new countries within weeks rather than building facilities. License savings from open source can be a benefit, but they do not explain an urgent three-country launch. Accessibility rules are met in the application design, not by moving infrastructure. Reducing patching frees staff time but is unrelated to the growth deadline in the scenario.",
    referenceUrl: "https://cloud.google.com/about/locations",
    tags: ["Transformation drivers", "Global expansion"]
  },
  {
    id: "gcp-cdl-37",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Marketing teams buying their own tools",
    scenario: "Because central IT takes months to provide new systems, a university's departments have signed up for more than 40 unapproved online services on department credit cards. Student data now sits in tools nobody has security-reviewed, and the IT director has no inventory of where it lives.",
    question: "Which risk of delaying a governed cloud adoption does this illustrate?",
    options: [
      { id: 'A', text: "Data residency breaches, because every one of the online services stores its data outside the university's country." },
      { id: 'B', text: "Vendor lock-in, because each department's contract with its chosen service provider runs for several years." },
      { id: 'C', text: "Shadow IT, because slow official delivery pushes teams to unsanctioned services that escape security oversight." },
      { id: 'D', text: "Capacity shortfalls, because the university's own servers cannot handle the data the departments now produce." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When the official route is too slow, people route around it; this unsanctioned use of technology is called shadow IT, and it spreads sensitive data into services that have never been reviewed, creating security and compliance risk. A governed cloud platform that provides resources quickly, with guardrails, removes the incentive. Multi-year contracts could cause lock-in, but the scenario's concern is oversight. The departments are not running out of on-premises capacity; they are avoiding IT altogether. Some services might store data abroad, but nothing says all of them do, and the core problem is that nobody knows.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["Risk of not adopting", "Shadow IT"]
  },
  {
    id: "gcp-cdl-38",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Building on the models behind Google's own products",
    scenario: "A publishing house wants to summarize manuscripts, generate cover-art concepts and answer questions about images and audio in one AI initiative. It would prefer to build on first-party models from a provider that also runs frontier AI research, rather than assembling research from scratch.",
    question: "Which Google Cloud differentiator is most relevant to this goal?",
    options: [
      { id: 'A', text: "Its global private network, which carries customer traffic across Google-owned fiber and subsea cables." },
      { id: 'B', text: "Its secure-by-design infrastructure, which uses custom hardware and encrypts customer data and models at rest by default." },
      { id: 'C', text: "Its world-leading AI, including multimodal Gemini models built with Google DeepMind." },
      { id: 'D', text: "Its commitment to open source, which includes originating Kubernetes and contributing it to the community." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud's AI leadership rests on Google DeepMind research and first-party Gemini models that are natively multimodal, able to work with text, images, audio and video, which fits a project spanning summaries, image concepts and questions about media. The global network is a genuine differentiator for performance, not for model capability. Secure-by-design infrastructure protects the workload but does not provide the AI. Kubernetes shows openness, but it is a container platform rather than an AI model family.",
    referenceUrl: "https://cloud.google.com/why-google-cloud",
    tags: ["Differentiators", "AI"]
  },
  {
    id: "gcp-cdl-39",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Keeping options open across AI models",
    scenario: "A legal-tech company expects the best AI model for its contract-review product to change several times a year. Its CTO wants to use Google's models where they are strongest but also run partner and open models, such as Anthropic's Claude or Google's open Gemma, without adopting a second AI platform.",
    question: "Which Google Cloud characteristic addresses the CTO's requirement?",
    options: [
      { id: 'A', text: "Its preference for first-party models, since limiting the catalog to Gemini, not partner or open models, keeps support simple." },
      { id: 'B', text: "Its sole-tenant nodes, since dedicated hardware ensures the company's models never share servers with others." },
      { id: 'C', text: "Its Premium network tier, since routing traffic on Google's backbone makes every model respond faster." },
      { id: 'D', text: "Its openness: one AI platform offering a catalog of Google, partner and open models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Openness and interoperability are core Google Cloud differentiators: its AI platform provides a catalog of more than 200 models, including Gemini, partner models such as Claude and open models such as Gemma and Llama, all used through the same tooling, security and governance. That lets the company switch models as the best option changes. Google does not restrict customers to first-party models. Sole-tenant nodes address isolation and licensing, not model choice. Network tier affects latency but offers no access to different models.",
    referenceUrl: "https://cloud.google.com/why-google-cloud",
    tags: ["Differentiators", "Openness"]
  },
  {
    id: "gcp-cdl-40",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Engineers who will not join a legacy shop",
    scenario: "A regional utility has had open engineering roles for nine months. Candidates say in interviews that they do not want to spend their careers maintaining on-premises systems and tools they will never use elsewhere, and two senior engineers recently left for employers with modern cloud platforms.",
    question: "Which consequence of delaying cloud adoption does this situation show?",
    options: [
      { id: 'A', text: "Higher network latency, because on-premises systems are further from the utility's customers than cloud regions." },
      { id: 'B', text: "Stricter licensing terms, because vendors stop selling on-premises platforms and tools to regulated utilities." },
      { id: 'C', text: "Rising data residency risk, because on-premises systems cannot guarantee where the utility's records are stored." },
      { id: 'D', text: "Difficulty attracting and keeping talent, because skilled people seek experience with current cloud technology." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Staying on legacy infrastructure makes it harder to recruit and retain skilled people, who want experience with the cloud platforms, automation and AI tools the rest of the industry uses; the open roles and departures are that cost in practice. On-premises systems have a known location, so residency is not the issue. Latency depends on where systems sit relative to users, and nothing suggests customers are affected. Vendors have not stopped selling on-premises licenses to utilities.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Risk of not adopting", "Talent"]
  },
  {
    id: "gcp-cdl-41",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A regulator asking for daily detailed reports",
    scenario: "A national regulator announces that within 18 months insurers must submit detailed exposure reports every day instead of every quarter. One insurer's current systems take three weeks to assemble a quarterly report from overnight batch extracts, and leadership realizes that tuning them will not close the gap.",
    question: "Which driver of transformation is at work here?",
    options: [
      { id: 'A', text: "Regulatory change, because new reporting rules demand data capabilities that existing systems cannot deliver." },
      { id: 'B', text: "Customer expectations, because policyholders now want to file claims through chat instead of by phone." },
      { id: 'C', text: "A data center lease expiry, because the hosting contract for the insurer's systems ends before the new rules apply." },
      { id: 'D', text: "Competitive disruption, because a new digital insurer is offering policies at lower prices through an app." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "New or changing regulation is a frequent driver of transformation: a rule that moves reporting from quarterly to daily requires timely, integrated data and scalable processing that batch-bound legacy systems cannot provide, forcing a rethink of the data platform. Competitive disruption, a lease expiry and changing customer expectations are all genuine drivers, but the scenario describes none of them; the deadline comes from the regulator.",
    referenceUrl: "https://cloud.google.com/learn/what-is-digital-transformation",
    tags: ["Transformation drivers", "Regulation"]
  },
  {
    id: "gcp-cdl-42",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Servers running an operating system nobody patches",
    scenario: "A property-management firm still runs its tenant portal on servers whose operating system reached end of support three years ago. No security fixes are released for it, the small IT team cannot rebuild the portal on a supported platform, and a competitor was recently hit by ransomware through a similar system.",
    question: "What is the main risk of leaving this situation unchanged?",
    options: [
      { id: 'A', text: "Higher bandwidth costs, because unsupported operating systems send more traffic across the firm's connection." },
      { id: 'B', text: "Losing data sovereignty, because unsupported operating systems automatically replicate data to other countries." },
      { id: 'C', text: "Growing breach exposure, because known vulnerabilities stay unpatched and attackers actively exploit them." },
      { id: 'D', text: "Lower application performance, because unsupported operating systems run more slowly each year they are used." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Systems past end of support receive no security fixes, so every newly discovered vulnerability stays open and attackers, including ransomware groups, target exactly these systems; delaying modernization steadily increases the chance and cost of a breach. Moving to managed cloud services, where the provider keeps the underlying platform patched, removes much of that burden. Unsupported operating systems do not replicate data abroad on their own. They do not get slower with age, and they do not generate extra network traffic.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["Risk of not adopting", "Security"]
  },
  {
    id: "gcp-cdl-43",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Separating real differentiators from table stakes",
    scenario: "A consultant's slide for an airline's board lists four reasons to choose Google Cloud. The CIO points out that three of them are offered by every major cloud provider and asks which item is genuinely distinctive to Google Cloud.",
    question: "Which item is a Google Cloud differentiator rather than a common cloud benefit?",
    options: [
      { id: 'A', text: "Security informed by Mandiant incident responders and Google Threat Intelligence, built into its platform." },
      { id: 'B', text: "Managed relational databases, so the provider handles patching, backups and replication for the airline." },
      { id: 'C', text: "Pay-as-you-go billing, so the airline is charged only for the compute and storage it actually consumes." },
      { id: 'D', text: "Self-service virtual machines, so engineers can create servers in minutes without raising hardware orders." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Cloud's security differentiator combines secure-by-design infrastructure with frontline intelligence from Mandiant's incident responders, VirusTotal and Google's visibility across billions of users, delivered through products such as Google Threat Intelligence and Google Security Operations; no other provider has that particular combination. Pay-as-you-go billing, on-demand virtual machines and managed relational databases are genuine benefits, but every major cloud provider offers them, so they do not distinguish one provider from another.",
    referenceUrl: "https://cloud.google.com/why-google-cloud",
    tags: ["Differentiators", "Security"]
  },
  {
    id: "gcp-cdl-44",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Security backed by frontline incident responders",
    scenario: "A payments processor is comparing cloud providers, and its CISO cares less about feature lists than about a provider that sees attacks as they happen, knows how attackers operate and builds that knowledge into its platform. She asks what sets Google Cloud apart on security.",
    question: "Which description best matches Google Cloud's security differentiator?",
    options: [
      { id: 'A', text: "An exclusive right to run workloads in private data centers that are fully disconnected from Google's global network." },
      { id: 'B', text: "A guarantee that customers carry no responsibility for security at all once their workloads run on Google's infrastructure." },
      { id: 'C', text: "A policy of allowing customers to install their own hardware security appliances inside Google's data center cages." },
      { id: 'D', text: "Secure-by-design infrastructure plus threat intelligence from Mandiant's responders and Google's global visibility." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud differentiates on security through infrastructure that is secure by design and by default, from custom hardware to encryption, combined with threat intelligence drawn from Mandiant's frontline incident response, VirusTotal and Google's visibility across billions of users and devices, which it builds into products such as Google Security Operations. Security remains a shared responsibility, so no customer is relieved of all duties. Air-gapped options exist for special sovereign cases but are not the general differentiator. Google does not offer customer-installed hardware in its facilities.",
    referenceUrl: "https://cloud.google.com/security",
    tags: ["Differentiators", "Security"]
  },
  {
    id: "gcp-cdl-45",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Video calls that stutter across the public internet",
    scenario: "A telehealth company's video consultations degrade when traffic between clinicians and patients in different countries crosses many internet providers. It wants its traffic to enter a provider's network close to users and travel on infrastructure the provider controls for as much of the journey as possible.",
    question: "Which Google Cloud differentiator addresses this requirement?",
    options: [
      { id: 'A', text: "Its AI-ready data platform, which stores consultation recordings and network traffic logs for later analysis." },
      { id: 'B', text: "Its global private network, which carries traffic over Google-owned fiber and subsea cables from the edge." },
      { id: 'C', text: "Its sustained use discounts, which lower costs automatically for compute that runs most of the month." },
      { id: 'D', text: "Its open source heritage, which lets the company run the same video software on any provider's network." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google operates one of the largest private networks in the world, with its own fiber, subsea cables and many edge points of presence; with the Premium network tier, user traffic enters Google's network near the user and stays on it, avoiding congested public internet hops and improving latency and reliability. A data platform helps analyze recordings, not deliver live video. Discounts reduce cost but do not change routing. Portability through open source does not improve the network path the video takes.",
    referenceUrl: "https://cloud.google.com/network-tiers/docs/overview",
    tags: ["Differentiators", "Global network"]
  },
  {
    id: "gcp-cdl-46",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Infrastructure proven by billions of users",
    scenario: "A sports streaming startup's board is nervous about trusting a cloud provider with a live event that could draw ten million viewers. A board member asks what evidence exists that Google Cloud's infrastructure can operate at that scale.",
    question: "Which fact best answers the board member's question?",
    options: [
      { id: 'A', text: "Google Cloud runs on custom hardware and infrastructure that Google designs and replaces on a fixed schedule." },
      { id: 'B', text: "Google Cloud requires large customers to reserve capacity a year ahead so that events never run out of servers." },
      { id: 'C', text: "Google Cloud runs on the same global infrastructure that serves Search, YouTube and Gmail to billions of users." },
      { id: 'D', text: "Google Cloud publishes its source code for every managed service so customers can review how it scales." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Cloud is built on the same infrastructure, data centers and global network that Google uses to run products such as Search, YouTube and Gmail, each serving billions of users, which is strong evidence of its ability to handle very large live audiences. Custom hardware is part of that story but does not by itself demonstrate operation at scale. Google does not publish the source of its managed services, although it contributes widely to open source. Capacity reservations are available but not required, and they are not proof of scale.",
    referenceUrl: "https://cloud.google.com/infrastructure",
    tags: ["Differentiators", "Global infrastructure"]
  },
  {
    id: "gcp-cdl-47",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Any provider can rent GPUs, so what is different",
    scenario: "A bank's CFO challenges the AI team: every major cloud rents GPUs by the hour, so why should Google Cloud's AI Hypercomputer be treated as a differentiator? The team must explain what matters beyond having accelerators available.",
    question: "Which answer best explains the differentiator?",
    options: [
      { id: 'A', text: "Google Cloud offers GPUs only through long-term contracts, which guarantees capacity for a bank's peak periods." },
      { id: 'B', text: "Google Cloud prices GPUs lower than any other provider in every region, which makes the choice purely financial." },
      { id: 'C', text: "Hardware, software and consumption are designed as one system, which raises the useful work per accelerator dollar." },
      { id: 'D', text: "Google Cloud requires AI workloads to use TPUs, which keeps the bank off hardware that other providers also use." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AI Hypercomputer's value is system-level co-design: accelerators (TPUs and GPUs), high-speed networking and storage, open software optimized for them, and flexible consumption options such as on-demand, committed use, Spot and scheduled capacity work together, so more of each accelerator hour turns into useful training or serving at lower overall cost. GPUs are available on demand and through several models, not only long-term contracts. No provider is cheapest in every region, and price per hour alone ignores efficiency. TPUs are an option, not a requirement; Google Cloud also offers the latest NVIDIA GPUs.",
    referenceUrl: "https://cloud.google.com/solutions/ai-hypercomputer",
    tags: ["Differentiators", "AI Hypercomputer"]
  },
  {
    id: "gcp-cdl-48",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Carbon targets that the data centers must meet",
    scenario: "A European retailer has committed publicly to cutting emissions from its IT operations. Its own two data centers run on grid power with inefficient cooling, and the sustainability officer wants the cloud migration to count toward the target.",
    question: "Which motivation for moving to the cloud does this reflect?",
    options: [
      { id: 'A', text: "Data residency, since keeping workloads in an EU region ensures that all records stay under EU jurisdiction." },
      { id: 'B', text: "Environmental goals, since efficient, carbon-aware cloud facilities can shrink the footprint of IT." },
      { id: 'C', text: "Global reach, since new stores in other countries can be served from regions located close to those markets." },
      { id: 'D', text: "Speed, since developers can provision resources in minutes instead of waiting weeks for procurement to finish." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sustainability goals increasingly drive cloud adoption: large providers run data centers far more efficiently than typical corporate facilities and invest heavily in carbon-free energy, and Google Cloud gives customers tools to measure and reduce the footprint of their workloads, with a goal of running on carbon-free energy around the clock by 2030. Data residency, speed and global reach are real motivations, but none of them addresses the emissions target the sustainability officer wants the migration to support.",
    referenceUrl: "https://cloud.google.com/sustainability",
    tags: ["Transformation drivers", "Sustainability"]
  },
  {
    id: "gcp-cdl-49",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "Waiting while competitors ship weekly",
    scenario: "A furniture retailer's rivals release website and app improvements weekly after moving to the cloud, while the retailer's own on-premises platform supports two releases a year. Its online market share has fallen three years running.",
    question: "What risk of not adopting cloud does this illustrate?",
    options: [
      { id: 'A', text: "Slower time to market, because the business cannot respond to customers as fast as more agile competitors." },
      { id: 'B', text: "Stricter audits, because regulators inspect companies that run their own data centers more often than others." },
      { id: 'C', text: "Higher latency, because on-premises servers are always further from shoppers in every market than a cloud region." },
      { id: 'D', text: "Data loss, because on-premises storage has no way to replicate records to a second location for recovery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A key risk of standing still is that competitors who use the cloud to release and experiment frequently respond to customers faster, and the gap shows up as lost market share, as it has here. Regulators do not audit companies more often because they run their own data centers. On-premises servers are not always further from users, and latency is not the issue described. On-premises storage can replicate to a second site; the problem here is release pace, not data protection.",
    referenceUrl: "https://cloud.google.com/learn/advantages-of-cloud-computing",
    tags: ["Risk of not adopting", "Time to market"]
  },
  {
    id: "gcp-cdl-50",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d1",
    domainName: "Digital Transformation with Google Cloud",
    title: "A plan to move everything in one weekend",
    scenario: "A manufacturer's new IT director proposes migrating all 400 applications to the cloud in a single cutover weekend so that the transformation is done quickly. Several application owners warn that dependencies are poorly documented and that staff have little cloud experience.",
    question: "Which approach better reduces the risk of this transformation?",
    options: [
      { id: 'A', text: "Postpone the migration until every application has been rewritten as cloud-native microservices on-premises first." },
      { id: 'B', text: "Start with a phased plan: assess workloads, then move lower-risk, high-value ones first to build skills." },
      { id: 'C', text: "Keep the single cutover but double the size of the weekend team so that more applications can be moved in parallel." },
      { id: 'D', text: "Move the applications gradually but in alphabetical order, so that the schedule is simple for every team to follow." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Trying to change everything at once is a common transformation hurdle. A phased approach, starting with discovery and assessment, then moving lower-risk, high-value workloads first, builds skills, uncovers dependencies and delivers early wins that sustain support for the program. A bigger team does not remove undocumented dependencies or the risk of a single failed cutover. Rewriting everything on-premises first delays all value by years. Moving applications gradually is right, but ordering them alphabetically ignores risk, value and dependencies.",
    referenceUrl: "https://cloud.google.com/architecture/migration-to-gcp-getting-started",
    tags: ["Transformation challenges", "Phased migration"]
  }
];

export default GCP_CDL_QUESTIONS_2;
