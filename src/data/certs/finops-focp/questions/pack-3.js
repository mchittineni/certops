export const FINOPS_FOCP_QUESTIONS_3 = [
  {
    id: "focp-51",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "The Three FinOps Lifecycle Phases",
    scenario: "A FinOps Practitioner is outlining the continuous, iterative lifecycle of FinOps activities to a newly formed team.",
    question: "What are the three iterative phases of the FinOps lifecycle?",
    options: [
      { id: 'A', text: "Discover, Migrate, and Modernize" },
      { id: 'B', text: "Analyze, Procure, and Depreciate" },
      { id: 'C', text: "Plan, Build, and Run" },
      { id: 'D', text: "Inform, Optimize, and Operate" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The FinOps lifecycle consists of three iterative phases: Inform (providing visibility, allocation, and forecasting), Optimize (discovering rate and usage optimization opportunities), and Operate (implementing continuous automation and governance).",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Lifecycle"]
  },
  {
    id: "focp-52",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "Inform Phase - Cost Allocation",
    scenario: "A company implements tagging policies and hierarchical subscription boundaries so that every cloud dollar can be attributed back to a specific application, cost center, and product squad.",
    question: "Which phase of the FinOps lifecycle does this visibility and allocation work belong to?",
    options: [
      { id: 'A', text: "Operate phase" },
      { id: 'B', text: "Optimize phase" },
      { id: 'C', text: "Decommission phase" },
      { id: 'D', text: "Inform phase" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Inform phase focuses on visibility and transparency. It includes cost allocation, tagging, benchmarking, budgeting, and forecasting to ensure organizations know what they are spending and who is responsible for each cost component.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Inform"]
  },
  {
    id: "focp-53",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "Optimize Phase - Rightsizing and Commitments",
    scenario: "An engineering team reviews memory utilization graphs to identify oversized virtual machines that can be scaled down, while the central FinOps team evaluates purchasing 3-year commitment discounts.",
    question: "Which phase of the FinOps lifecycle encompasses these actions?",
    options: [
      { id: 'A', text: "Optimize phase" },
      { id: 'B', text: "Inform phase" },
      { id: 'C', text: "Audit phase" },
      { id: 'D', text: "Operate phase" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Optimize phase focuses on identifying and executing optimization opportunities. It includes rate optimization (purchasing commitment discounts like RIs and Savings Plans) and usage optimization (rightsizing resources, turning off idle infrastructure, modernizing instance generations).",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Optimize"]
  },
  {
    id: "focp-54",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "Operate Phase - Continuous Automation",
    scenario: "An enterprise implements automated CI/CD policy gates that prevent deployments of unapproved instance types and schedules automated shutdown scripts for non-production environments outside business hours.",
    question: "Which phase of the FinOps lifecycle represents this ongoing operational execution?",
    options: [
      { id: 'A', text: "Inform phase" },
      { id: 'B', text: "Optimize phase" },
      { id: 'C', text: "Design phase" },
      { id: 'D', text: "Operate phase" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Operate phase involves continuous execution, policy enforcement, automation, and governance. It translates optimization goals into ongoing daily operations, integrating FinOps practices into standard engineering and operational workflows.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Operate"]
  },
  {
    id: "focp-55",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Maturity Model - Crawl Stage",
    scenario: "An organization is beginning its FinOps journey. Cost allocation is basic, tagging coverage is inconsistent (around 30%), reports are generated manually in spreadsheets, and cost optimization is reactive.",
    question: "Which stage of the FinOps maturity model (Crawl, Walk, Run) does this describe?",
    options: [
      { id: 'A', text: "Sprint stage" },
      { id: 'B', text: "Crawl stage" },
      { id: 'C', text: "Walk stage" },
      { id: 'D', text: "Run stage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the Crawl stage of maturity, organizations have basic visibility, rudimentary manual processes, low tagging compliance, and reactive responses to billing surprises. Processes are ad-hoc rather than standardized.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Crawl"]
  },
  {
    id: "focp-56",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Maturity Model - Walk Stage",
    scenario: "A company has standardized its tagging hygiene to 80% coverage, established regular monthly cost reviews with engineering leads, configured automated budget alerts, and centrally manages a modest portfolio of Reserved Instances.",
    question: "Which FinOps maturity level has the company achieved?",
    options: [
      { id: 'A', text: "Run stage" },
      { id: 'B', text: "Crawl stage" },
      { id: 'C', text: "Walk stage" },
      { id: 'D', text: "Elite stage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In the Walk stage, organizations have defined policies, moderate-to-high tagging coverage, structured cadence between finance and engineering, proactive alerting, and coordinated central commitment management.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Walk"]
  },
  {
    id: "focp-57",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Maturity Model - Run Stage",
    scenario: "An enterprise achieves 95%+ cost allocation (including shared platform costs and Kubernetes clusters), runs automated real-time anomaly detection, incorporates cost estimations into pull requests, and tracks granular unit economics.",
    question: "Which FinOps maturity level is demonstrated?",
    options: [
      { id: 'A', text: "Run stage" },
      { id: 'B', text: "Crawl stage" },
      { id: 'C', text: "Walk stage" },
      { id: 'D', text: "Ad-hoc stage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Run stage represents advanced maturity where FinOps processes are deeply automated, integrated into CI/CD pipelines, cover shared cost and container allocation, and link cloud spend directly to business unit metrics.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Run"]
  },
  {
    id: "focp-58",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "Iterative Nature of FinOps Phases",
    scenario: "A newly appointed team member asks whether an organization finishes the Inform phase completely before ever touching the Optimize phase.",
    question: "How should the FinOps Practitioner explain the relationship between the FinOps lifecycle phases?",
    options: [
      { id: 'A', text: "The phases are continuous and iterative; teams can operate in multiple phases simultaneously across different workloads and maturity levels" },
      { id: 'B', text: "Each phase must be executed sequentially once per fiscal year" },
      { id: 'C', text: "Once the Operate phase is reached, the Inform phase is permanently deprecated" },
      { id: 'D', text: "The Inform phase must be 100% complete across all enterprise systems before any optimization is permitted" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The FinOps lifecycle is not a one-time waterfall process. Organizations iterate through Inform, Optimize, and Operate continuously. An enterprise might be at a 'Run' maturity in Inform for core compute while simultaneously at a 'Crawl' maturity in Optimize for newly introduced AI workloads.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Maturity"]
  },
  {
    id: "focp-59",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Showback vs Chargeback in Inform",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for showback vs chargeback in inform.",
    question: "Which statement best describes the operational implementation of showback vs chargeback in inform?",
    options: [
      { id: 'A', text: "There is no functional difference between the two terms" },
      { id: 'B', text: "Showback is illegal under GAAP, while chargeback is mandatory" },
      { id: 'C', text: "Showback applies only to SaaS licenses, while chargeback applies to IaaS" },
      { id: 'D', text: "Showback provides cost awareness without actual ledger transfer, while chargeback moves money between internal budgets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Showback displays allocated costs to teams for awareness without transferring actual budget funds, whereas chargeback performs real financial ledger billing transfers. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Showback"]
  },
  {
    id: "focp-60",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Tagging Hygiene in Inform",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for tagging hygiene in inform.",
    question: "Which statement best describes the operational implementation of tagging hygiene in inform?",
    options: [
      { id: 'A', text: "Deleting all tags before month-end billing" },
      { id: 'B', text: "Relying on verbal confirmations of resource ownership" },
      { id: 'C', text: "Restricting developers from tagging resources" },
      { id: 'D', text: "Consistent tagging policies that attribute resources to owners, environments, and business units" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Consistent resource tagging (owner, env, cost-center) is the foundation of the Inform phase, enabling automated cost reporting and ownership attribution. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Tagging"]
  },
  {
    id: "focp-61",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Rate Optimization vs Usage Optimization",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for rate optimization vs usage optimization.",
    question: "Which statement best describes the operational implementation of rate optimization vs usage optimization?",
    options: [
      { id: 'A', text: "Both terms refer strictly to network bandwidth tuning" },
      { id: 'B', text: "Rate optimization requires moving workloads to on-premises servers" },
      { id: 'C', text: "Rate optimization is done by developers, while usage optimization is done by finance" },
      { id: 'D', text: "Rate optimization reduces the price paid per resource, while usage optimization reduces the quantity of resources consumed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rate optimization focuses on paying less per unit of compute (via commitments and discounts), while usage optimization focuses on consuming fewer units (via rightsizing and turning off idle resources). Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Rate"]
  },
  {
    id: "focp-62",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Anomaly Detection in Operate",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for anomaly detection in operate.",
    question: "Which statement best describes the operational implementation of anomaly detection in operate?",
    options: [
      { id: 'A', text: "Annual vendor negotiation meetings" },
      { id: 'B', text: "Monthly manual invoice auditing by external accountants" },
      { id: 'C', text: "Deleting resources automatically when CPU reaches 50%" },
      { id: 'D', text: "Statistical monitoring that detects unexpected spending spikes and triggers rapid alerts" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Automated anomaly detection monitors spending patterns using statistical baselines and triggers immediate alerts when spending deviates unexpectedly from normal patterns. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Anomaly"]
  },
  {
    id: "focp-63",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: FinOps Maturity by Capability",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for finops maturity by capability.",
    question: "Which statement best describes the operational implementation of finops maturity by capability?",
    options: [
      { id: 'A', text: "An organization must be at the exact same maturity level across all capabilities" },
      { id: 'B', text: "An organization can operate at different maturity levels for different FinOps capabilities" },
      { id: 'C', text: "Maturity is determined exclusively by the cloud provider's certification team" },
      { id: 'D', text: "Maturity levels are fixed for the lifetime of the enterprise" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An organization can be at different maturity levels (Crawl, Walk, Run) simultaneously across different FinOps capabilities. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "FinOps"]
  },
  {
    id: "focp-64",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Forecasting in the Inform Phase",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for forecasting in the inform phase.",
    question: "Which statement best describes the operational implementation of forecasting in the inform phase?",
    options: [
      { id: 'A', text: "Guessing monthly spend based on previous on-premises datacenter costs" },
      { id: 'B', text: "Assuming cloud spend will remain identical every month" },
      { id: 'C', text: "Ignoring planned marketing campaigns and product launches" },
      { id: 'D', text: "Combining historical billing trends with future business growth plans to project spend" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Forecasting uses historical spend trends, seasonal variations, and planned business growth drivers to project future cloud costs accurately. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Forecasting"]
  },
  {
    id: "focp-65",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase: Continuous Governance in Operate",
    scenario: "A cloud financial management team is analyzing lifecycle progression and capability benchmarks for continuous governance in operate.",
    question: "Which statement best describes the operational implementation of continuous governance in operate?",
    options: [
      { id: 'A', text: "Removing all spending limits across production subscriptions" },
      { id: 'B', text: "Automated policy enforcement and governance built into everyday deployment pipelines" },
      { id: 'C', text: "Annual governance audits that interrupt developer workflows" },
      { id: 'D', text: "Disabling automated deployments in favor of manual server installs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Operate phase ensures that financial governance policies (like automated resource tagging validation) are continuously enforced in CI/CD pipelines. Mastering the phases and maturity progression is critical to establishing sustainable FinOps practices.",
    referenceUrl: "https://www.finops.org/framework/phases/",
    tags: ["FinOps", "Phases", "Continuous"]
  },
  {
    id: "focp-66",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #1",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #1?",
    options: [
      { id: 'A', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'B', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'C', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'D', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-67",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #2",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #2?",
    options: [
      { id: 'A', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'B', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'C', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'D', text: "Manually approving every virtual machine restart through a central procurement board" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-68",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #3",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #3?",
    options: [
      { id: 'A', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'B', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'C', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'D', text: "Manually approving every virtual machine restart through a central procurement board" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-69",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #4",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #4?",
    options: [
      { id: 'A', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'B', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'C', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'D', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-70",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #5",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #5?",
    options: [
      { id: 'A', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'B', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'C', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'D', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-71",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #6",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #6?",
    options: [
      { id: 'A', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'B', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'C', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'D', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-72",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #7",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #7?",
    options: [
      { id: 'A', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'B', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'C', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'D', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-73",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #8",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #8?",
    options: [
      { id: 'A', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'B', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'C', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'D', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-74",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #9",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #9?",
    options: [
      { id: 'A', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'B', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'C', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" },
      { id: 'D', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  },
  {
    id: "focp-75",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d2",
    domainName: "FinOps Phases & Maturity Model",
    title: "FinOps Phase & Maturity Scenario #10",
    scenario: "An enterprise is advancing its cloud financial lifecycle practices across Inform, Optimize, and Operate phases.",
    question: "Which action or milestone indicates progression in FinOps capability maturity for scenario #10?",
    options: [
      { id: 'A', text: "Relying exclusively on retroactive monthly cloud billing PDF invoices" },
      { id: 'B', text: "Manually approving every virtual machine restart through a central procurement board" },
      { id: 'C', text: "Eliminating all cost visibility dashboards to avoid confusing software developers" },
      { id: 'D', text: "Transitioning from ad-hoc manual cost spreadsheets to automated real-time dashboards with anomaly alerting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Progressing through the FinOps maturity model requires moving away from reactive, manual spreadsheets toward automated, near-real-time visibility, proactive anomaly detection, and decentralized engineering accountability.",
    referenceUrl: "https://www.finops.org/framework/maturity-model/",
    tags: ["FinOps", "Maturity Model", "Phases"]
  }
];

export default FINOPS_FOCP_QUESTIONS_3;
