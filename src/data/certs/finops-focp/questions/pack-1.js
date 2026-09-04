export const FINOPS_FOCP_QUESTIONS_1 = [
  {
    id: "focp-1",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Definition of FinOps",
    scenario: "An enterprise technology executive wants to explain the fundamental objective of FinOps to company leadership during a cloud migration kick-off.",
    question: "Which statement best defines FinOps according to the FinOps Foundation?",
    options: [
      { id: 'A', text: "FinOps is an automated software agent that revokes cloud access from engineers who exceed monthly budgets" },
      { id: 'B', text: "FinOps is an accounting method that converts all operational expenses back into multi-year capital hardware depreciation" },
      { id: 'C', text: "FinOps is a procurement mandate focused exclusively on cutting cloud spending by eliminating all non-essential development environments" },
      { id: 'D', text: "FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to maximize business value by helping engineering, finance, technology, and business teams to collaborate on data-driven spending decisions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FinOps is not merely about saving money or cutting costs; it is an operational framework and cultural practice that enables cross-functional teams to make data-driven spending decisions, balancing velocity, quality, and financial accountability to maximize business value from cloud investments.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-2",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 1 - Teams Need to Collaborate",
    scenario: "Historically, an organization's finance team operated in isolation, reviewing cloud invoices 30 days after the billing cycle closed, while engineers provisioned resources without visibility into financial impact.",
    question: "Which FinOps principle addresses this organizational silo?",
    options: [
      { id: 'A', text: "Take advantage of the variable cost model of the cloud" },
      { id: 'B', text: "Decisions are driven by business value of cloud" },
      { id: 'C', text: "Everyone takes ownership for their cloud usage" },
      { id: 'D', text: "Teams need to collaborate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The FinOps principle 'Teams need to collaborate' emphasizes that finance, engineering, procurement, and leadership must work together continuously in near-real-time to align technical delivery with financial accountability, replacing historical retrospective blame with shared responsibility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Collaboration"]
  },
  {
    id: "focp-3",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 2 - Everyone Takes Ownership",
    scenario: "A software engineering director establishes that engineering squads will see their cloud infrastructure costs directly on sprint dashboards and treat cost efficiency as a first-class engineering metric alongside uptime and performance.",
    question: "Which core FinOps principle is being operationalized?",
    options: [
      { id: 'A', text: "Reports should be accessible and timely" },
      { id: 'B', text: "Everyone takes ownership for their cloud usage" },
      { id: 'C', text: "Decisions are driven by business value of cloud" },
      { id: 'D', text: "A centralized team drives FinOps" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The principle 'Everyone takes ownership for their cloud usage' establishes that decentralized engineering and operations teams must own their usage and costs from design through production, managing cost as an architectural constraint alongside latency and reliability.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Ownership"]
  },
  {
    id: "focp-4",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 3 - Centralized Team Drives FinOps",
    scenario: "An enterprise forms a dedicated Cloud Cost Center of Excellence (CCoE) / FinOps team to govern rate optimization, negotiate enterprise discount programs, and manage commitment discount portfolios (RIs and Savings Plans).",
    question: "Which FinOps principle does this organizational structure fulfill?",
    options: [
      { id: 'A', text: "Everyone takes ownership for their cloud usage" },
      { id: 'B', text: "A centralized team drives FinOps" },
      { id: 'C', text: "Reports should be accessible and timely" },
      { id: 'D', text: "Teams need to collaborate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The principle 'A centralized team drives FinOps' advocates for a centralized team (such as a FinOps team or CCoE) to handle rate negotiations, commitment discounts (RIs, Savings Plans, CUDs), governance, and practice enablement, while individual teams focus on usage optimization.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Centralized Team"]
  },
  {
    id: "focp-5",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 4 - Accessible and Timely Reports",
    scenario: "A development squad accidentally deploys an improperly configured load testing cluster that burns 500 dollars per hour. Under their new FinOps practice, they receive an automated anomaly alert within 2 hours instead of discovering the charge on next month's bill.",
    question: "Which FinOps principle directly enables this rapid feedback loop?",
    options: [
      { id: 'A', text: "Decisions are driven by business value of cloud" },
      { id: 'B', text: "Reports should be accessible and timely" },
      { id: 'C', text: "Take advantage of the variable cost model of the cloud" },
      { id: 'D', text: "Teams need to collaborate" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The principle 'Reports should be accessible and timely' dictates that cost and usage visibility must be provided to teams as close to real-time as possible. Fast feedback loops allow engineers to detect and remediate cost spikes or anomalies immediately before expenses accumulate.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Visibility"]
  },
  {
    id: "focp-6",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 5 - Decisions Driven by Business Value",
    scenario: "A SaaS company's cloud spend increased by 40% over the last quarter. However, customer subscriptions grew by 80%, resulting in higher net profit and improved gross margin per user.",
    question: "Under the FinOps framework, why is this cloud spend increase considered a positive outcome?",
    options: [
      { id: 'A', text: "FinOps prioritizes maintaining static quarterly cloud budgets above customer acquisition" },
      { id: 'B', text: "Any increase in cloud spend represents an operational failure regardless of revenue growth" },
      { id: 'C', text: "Decisions are driven by the business value of the cloud, meaning spend increases are justified when they drive proportional or greater business revenue and growth" },
      { id: 'D', text: "Cloud spend should remain fixed regardless of user volume fluctuations" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The principle 'Decisions are driven by business value of cloud' recognizes that cloud spend is an investment in revenue generation and business agility. The goal is not simply minimizing spend, but optimizing unit economics and gross margin so that cloud investment drives maximum business return.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Business Value"]
  },
  {
    id: "focp-7",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Principle 6 - Variable Cost Model Advantage",
    scenario: "A development team configures an automated pipeline that spins up ephemeral testing environments in the cloud for two hours during pull request validation and immediately destroys them upon completion.",
    question: "Which FinOps principle is being leveraged?",
    options: [
      { id: 'A', text: "Take advantage of the variable cost model of the cloud" },
      { id: 'B', text: "Teams need to collaborate" },
      { id: 'C', text: "A centralized team drives FinOps" },
      { id: 'D', text: "Reports should be accessible and timely" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The principle 'Take advantage of the variable cost model of the cloud' encourages organizations to leverage the pay-per-use, elastic nature of cloud computing by scaling up when needed and turning off resources when idle, rather than over-provisioning static hardware.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/get-started/cloud-concepts",
    tags: ["FinOps", "Principles", "Variable Cost"]
  },
  {
    id: "focp-8",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "The Iron Triangle of Cloud Decision Making",
    scenario: "When architecting a new cloud application, product managers, engineers, and financial analysts evaluate trade-offs between delivery speed, feature scope, and infrastructure cost.",
    question: "What model represents this continuous architectural balancing act in FinOps?",
    options: [
      { id: 'A', text: "The Capital Asset Pricing Model" },
      { id: 'B', text: "The Waterfall Governance Triangle" },
      { id: 'C', text: "The Double-Entry General Ledger" },
      { id: 'D', text: "The Iron Triangle (Cost, Quality/Speed, and Scope)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Iron Triangle in cloud engineering represents the trade-offs between Cost, Quality (Speed/Performance), and Scope. FinOps provides the data and visibility necessary for cross-functional teams to make conscious, value-based trade-offs between these dimensions.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["FinOps", "Principles", "Trade-offs"]
  },
  {
    id: "focp-9",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "Shift from CapEx to OpEx in FinOps",
    scenario: "In a traditional on-premises datacenter model, procurement was controlled through centralized annual capital approvals. In the cloud, any engineer with IAM permissions can spin up infrastructure instantly.",
    question: "Why does this shift necessitate the cultural adoption of FinOps?",
    options: [
      { id: 'A', text: "Because procurement has been decentralized to engineering, requiring continuous financial accountability at the point of provisioning" },
      { id: 'B', text: "Because virtual machine configurations are permanent and cannot be modified" },
      { id: 'C', text: "Because cloud vendors disallow the use of enterprise corporate credit cards" },
      { id: 'D', text: "Because public clouds legally mandate annual on-site hardware inspections" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In the cloud, purchasing power is effectively decentralized into the hands of engineers who write code and provision resources via APIs. FinOps introduces the cultural and technical guardrails required to manage this decentralized, real-time spending model responsibly.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["FinOps", "Culture", "Procurement"]
  },
  {
    id: "focp-10",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps vs Traditional Cost Cutting",
    scenario: "A company's leadership asks whether the FinOps practice should be evaluated based on the total dollar reduction in the monthly cloud bill.",
    question: "How should a FinOps Practitioner explain the true objective of FinOps?",
    options: [
      { id: 'A', text: "FinOps mandates migrating all cloud workloads back to on-premises colocation" },
      { id: 'B', text: "FinOps is exclusively measured by total percentage reduction in gross monthly cloud invoices" },
      { id: 'C', text: "FinOps focuses on maximizing unit efficiency, business value, and revenue enablement rather than solely cutting absolute dollar spend" },
      { id: 'D', text: "FinOps requires shutting down production virtual machines during non-working hours" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A common misconception is that FinOps exists solely to cut costs. In reality, FinOps focuses on maximizing the business value delivered per dollar spent. If a company spends more on cloud while accelerating revenue and expanding profit margins, FinOps is succeeding.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["FinOps", "Principles", "Value"]
  },
  {
    id: "focp-11",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Cultural Shift in Engineering",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for cultural shift in engineering.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for cultural shift in engineering?",
    options: [
      { id: 'A', text: "Restricting all cloud access to finance personnel" },
      { id: 'B', text: "Treating cost as a first-class engineering metric during design and deployment" },
      { id: 'C', text: "Requiring paper purchase orders for cloud provisioning" },
      { id: 'D', text: "Eliminating automated CI/CD pipelines" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps requires an organizational culture shift where engineers view cost as an engineering dimension, similar to latency, security, and scalability. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Cultural"]
  },
  {
    id: "focp-12",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Variable Spend vs Static Budgets",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for variable spend vs static budgets.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for variable spend vs static budgets?",
    options: [
      { id: 'A', text: "Eliminating all budgeting processes entirely" },
      { id: 'B', text: "Locking in 10-year immutable hardware leases" },
      { id: 'C', text: "Transitioning from rigid static annual budgets to dynamic rolling forecasts" },
      { id: 'D', text: "Depreciating server racks over five fiscal years" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Traditional IT used static 3-to-5 year hardware budgets, while cloud financial management requires dynamic, rolling forecasts that adapt to variable demand. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Variable"]
  },
  {
    id: "focp-13",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: FinOps Foundation Community Role",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for finops foundation community role.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for finops foundation community role?",
    options: [
      { id: 'A', text: "A government regulatory body that enforces cloud tax compliance" },
      { id: 'B', text: "A non-profit open source community hosted by the Linux Foundation establishing vendor-neutral cloud financial standards" },
      { id: 'C', text: "A proprietary commercial software vendor that sells cloud billing APIs" },
      { id: 'D', text: "A consortium of hardware manufacturers setting physical server prices" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The FinOps Foundation is a non-profit trade association hosted by the Linux Foundation that establishes vendor-neutral standards, open source specifications, and community certifications. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "FinOps"]
  },
  {
    id: "focp-14",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Decentralized Decision Making",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for decentralized decision making.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for decentralized decision making?",
    options: [
      { id: 'A', text: "Mandatory outsourcing of all cloud engineering" },
      { id: 'B', text: "Completely unmonitored spending without governance or visibility" },
      { id: 'C', text: "100% centralized manual approval for every virtual machine launch" },
      { id: 'D', text: "Decentralized usage optimization paired with centralized rate optimization" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FinOps empowers decentralized development teams to make smart operational spending choices while maintaining centralized governance and rate optimization. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Decentralized"]
  },
  {
    id: "focp-15",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Cost as a Measure of Efficiency",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for cost as a measure of efficiency.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for cost as a measure of efficiency?",
    options: [
      { id: 'A', text: "Ignoring cloud usage until year-end audits" },
      { id: 'B', text: "Viewing cost as an unavoidable fixed administrative overhead" },
      { id: 'C', text: "Treating cloud bills as non-negotiable legal liabilities" },
      { id: 'D', text: "Viewing cost as a proxy for architectural and operational efficiency" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In FinOps, cost is considered a proxy for architectural efficiency; a poorly architected, unoptimized workload wastes money, whereas a well-architected workload minimizes unit cost. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Cost"]
  },
  {
    id: "focp-16",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Real-Time Visibility Impact",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for real-time visibility impact.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for real-time visibility impact?",
    options: [
      { id: 'A', text: "Providing immediate cost feedback to engineers to foster proactive optimization habits" },
      { id: 'B', text: "Sending quarterly retrospective billing summaries to managers only" },
      { id: 'C', text: "Blocking developers from viewing resource cost dashboards" },
      { id: 'D', text: "Billing individual engineers personal expenses for cloud spikes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Providing engineers with immediate cost feedback on their newly deployed infrastructure encourages proactive rightsizing and cleanup habits. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Real-Time"]
  },
  {
    id: "focp-17",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Executive Sponsorship in FinOps",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for executive sponsorship in finops.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for executive sponsorship in finops?",
    options: [
      { id: 'A', text: "A finance-only mandate with zero engineering engagement" },
      { id: 'B', text: "Executive sponsorship that aligns technology, finance, and business priorities" },
      { id: 'C', text: "Outsourcing cloud financial management entirely to third-party auditors" },
      { id: 'D', text: "A grassroots engineering initiative without executive visibility" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Successful FinOps adoption requires executive sponsorship from the CTO, CFO, and CIO to establish cross-functional alignment and shared organizational priorities. Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Executive"]
  },
  {
    id: "focp-18",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principle: Unit Economics Alignment",
    scenario: "A FinOps cross-functional working group is evaluating organizational culture, economic models, and foundational principles for unit economics alignment.",
    question: "Which statement best reflects the FinOps Foundation's standard guidance for unit economics alignment?",
    options: [
      { id: 'A', text: "Measuring cloud cost per unit of business output (e.g., cost per subscriber or transaction)" },
      { id: 'B', text: "Measuring employee commute times to cloud conferences" },
      { id: 'C', text: "Tracking the total number of lines of code in a repository" },
      { id: 'D', text: "Calculating the total weight of physical servers in a datacenter" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unit economics links cloud spend directly to business value by measuring the cost to deliver a specific unit of business output (such as cost per transaction or cost per customer). Aligning with these principles ensures that cloud investments deliver measurable business return and operational agility.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Unit"]
  },
  {
    id: "focp-19",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #1",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #1?",
    options: [
      { id: 'A', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" },
      { id: 'B', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'C', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'D', text: "Managing cloud spend strictly through retrospective annual audits" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-20",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #2",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #2?",
    options: [
      { id: 'A', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'B', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" },
      { id: 'C', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'D', text: "Managing cloud spend strictly through retrospective annual audits" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-21",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #3",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #3?",
    options: [
      { id: 'A', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'B', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'C', text: "Managing cloud spend strictly through retrospective annual audits" },
      { id: 'D', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-22",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #4",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #4?",
    options: [
      { id: 'A', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'B', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" },
      { id: 'C', text: "Managing cloud spend strictly through retrospective annual audits" },
      { id: 'D', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-23",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #5",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #5?",
    options: [
      { id: 'A', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'B', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'C', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" },
      { id: 'D', text: "Managing cloud spend strictly through retrospective annual audits" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-24",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #6",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #6?",
    options: [
      { id: 'A', text: "Managing cloud spend strictly through retrospective annual audits" },
      { id: 'B', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'C', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" },
      { id: 'D', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  },
  {
    id: "focp-25",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d1",
    domainName: "Understand Cloud & FinOps Principles",
    title: "FinOps Principles Practice #7",
    scenario: "An organization is modernizing its cloud financial operations, aligning cross-functional teams to eliminate waste and maximize business value.",
    question: "Which FinOps principle or foundational concept is demonstrated in scenario #7?",
    options: [
      { id: 'A', text: "Cross-functional collaboration between engineering, finance, and procurement to maximize cloud business value" },
      { id: 'B', text: "Managing cloud spend strictly through retrospective annual audits" },
      { id: 'C', text: "Eliminating all real-time monitoring and alerting to reduce metric overhead" },
      { id: 'D', text: "Siloed procurement teams setting arbitrary cloud quotas without engineering input" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FinOps principles mandate continuous cross-functional collaboration and real-time visibility. Aligning engineering, finance, and procurement ensures that cloud spending decisions are data-driven, agile, and aligned with core business value.",
    referenceUrl: "https://www.finops.org/framework/principles/",
    tags: ["FinOps", "Principles", "Culture"]
  }
];

export default FINOPS_FOCP_QUESTIONS_1;
