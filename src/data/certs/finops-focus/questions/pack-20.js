export const FINOPS_FOCUS_QUESTIONS_20 = [
  {
    id: "finops-focus-476",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Catching a Cost Spike Before the Invoice: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The FinOps team is catching an unexpected spend increase within a day rather than at month end. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource." },
      { id: 'B', text: "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted." },
      { id: 'C', text: "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period." },
      { id: 'D', text: "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["anomaly-detection", "alerting", "remediation", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-477",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Dividing the Cost of a Shared Platform: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The FinOps team is attributing the cost of a shared cluster and network to the teams using it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Allocate the shared platform costs to each tenant in proportion to that team's total direct cloud spend, as measured over the same billing period in each and every month of the year." },
      { id: 'B', text: "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage." },
      { id: 'C', text: "Leave the shared platform costs in a central platform cost centre and report them entirely separately from the individual tenant teams." },
      { id: 'D', text: "Allocate the shared platform costs evenly between the tenant teams so that each one of them carries an identical share of the total." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Allocating on measured consumption of the shared service, such as pod CPU and memory hours or data processed by the gateway, ties each team's charge to the driver it controls, so reducing usage visibly reduces the bill. Splitting by total direct spend is a common proxy but correlates weakly with cluster usage, so a team with heavy managed-database spend subsidises a heavy cluster user. Leaving the cost central is accurate and shows no team what it consumes. An even split charges the smallest tenant the same as the largest.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["shared-costs", "allocation", "platform-engineering", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-478",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Reporting That Leadership Can Act On: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The FinOps team is reporting cloud spend to leadership in a form that supports a decision. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Distribute the detailed allocation report to every business unit and let the leadership team read through whichever of the sections happen to concern them the most that month." },
      { id: 'B', text: "Create a dashboard driven by unit economics alone, since cost per transaction is the only figure that the business leadership really needs." },
      { id: 'C', text: "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance." },
      { id: 'D', text: "Create a dashboard showing total spend by provider and by month so that leadership is able to see exactly where the money is going." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each of those measures maps to a decision an executive can take: coverage to whether more commitment should be bought, waste to whether optimisation is funded, forecast variance to whether the budget needs revising. Handing out the detailed allocation report delegates the summarising to the reader. Unit economics is the strongest single metric but on its own gives no view of coverage or forecast. Spend by provider and month describes what happened accurately while implying nothing about what to do next.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["kpi", "dashboards", "executive-reporting", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-479",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Cost Per Business Outcome: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The FinOps team is showing whether cloud spend is growing faster than the business it supports. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Track the month-on-month growth rate of total cloud spend and compare that rate against the business's overall revenue growth over the same reporting period each quarter." },
      { id: 'B', text: "Track spend per service and divide it by the number of resources deployed so that the average cost of each deployed resource becomes known." },
      { id: 'C', text: "Track total spend per team each month and compare the trend against that team's own headcount and its recent delivery velocity." },
      { id: 'D', text: "Join FOCUS EffectiveCost datasets with business metrics (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dividing cost by the business outcome it produces turns spend into a rate that can rise or fall independently of growth, so a doubling of cost against a tripling of transactions reads correctly as an improvement. Comparing spend growth against revenue growth gives one company-wide number that hides which services are getting worse. Cost per resource measures infrastructure density rather than business value, and a team's headcount is not the outcome the business buys.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["unit-economics", "kpi", "business-value", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-480",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Making Teams Accountable for Their Spend: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The FinOps team is introducing financial accountability to engineering teams that have never had it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures." },
      { id: 'B', text: "Implement Chargeback from the outset so that every team's budget carries its own cloud costs from the very first reporting period onwards." },
      { id: 'C', text: "Implement a central budget with per-team quotas enforced automatically by policy so that spend is capped well before it ever needs to be allocated to anyone." },
      { id: 'D', text: "Implement Showback only, on the basis that visibility changes behaviour and that moving budgets between teams creates unproductive friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Showback first gives teams numbers they can check and argue with while nothing is at stake, so by the time budgets move the allocation is trusted and the conversation is about the spend rather than the data. Chargeback from day one attaches real financial consequences to allocation that is usually still incomplete, which reliably produces disputes about tagging. Quotas cap spend without attributing it and tend to block delivery at the worst moment. Stopping at showback works until visibility has done its work and nothing further changes.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["showback", "chargeback", "accountability", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-481",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Finding Resources That Cost Without Being Used: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The FinOps team is identifying resources that keep costing money without doing any useful work. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'CommitmentDiscountStatus' column for unused commitment capacity and treat whatever portion of it is unused as the waste that ought to be recovered first across the estate." },
      { id: 'B', text: "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage." },
      { id: 'C', text: "Query for the resources whose EffectiveCost has grown fastest month on month and investigate whichever of the largest increases appear first." },
      { id: 'D', text: "Query for the resources with the highest EffectiveCost in each month and review the largest of them together with their owning teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pairing a recurring charge with near-zero usage is what defines an idle resource, and it surfaces the unattached disk and the forgotten load balancer that no cost ranking would ever reach. Unused commitment capacity is real waste but a different kind, and recovering it means changing the commitment rather than the resource. Fastest-growing and largest-cost resources are both worth reviewing, yet the biggest line is usually the production database that is entirely justified, while the waste hides among small recurring charges.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["waste-reduction", "idle-resources", "optimization", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-482",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Catching a Cost Spike Before the Invoice: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The FinOps team is catching an unexpected spend increase within a day rather than at month end. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted." },
      { id: 'B', text: "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period." },
      { id: 'C', text: "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource." },
      { id: 'D', text: "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["anomaly-detection", "alerting", "remediation", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-483",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Dividing the Cost of a Shared Platform: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The FinOps team is attributing the cost of a shared cluster and network to the teams using it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Allocate the shared platform costs to each tenant in proportion to that team's total direct cloud spend, as measured over the same billing period in each and every month of the year." },
      { id: 'B', text: "Leave the shared platform costs in a central platform cost centre and report them entirely separately from the individual tenant teams." },
      { id: 'C', text: "Allocate the shared platform costs evenly between the tenant teams so that each one of them carries an identical share of the total." },
      { id: 'D', text: "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Allocating on measured consumption of the shared service, such as pod CPU and memory hours or data processed by the gateway, ties each team's charge to the driver it controls, so reducing usage visibly reduces the bill. Splitting by total direct spend is a common proxy but correlates weakly with cluster usage, so a team with heavy managed-database spend subsidises a heavy cluster user. Leaving the cost central is accurate and shows no team what it consumes. An even split charges the smallest tenant the same as the largest.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["shared-costs", "allocation", "platform-engineering", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-484",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Reporting That Leadership Can Act On: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The FinOps team is reporting cloud spend to leadership in a form that supports a decision. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance." },
      { id: 'B', text: "Distribute the detailed allocation report to every business unit and let the leadership team read through whichever of the sections happen to concern them the most that month." },
      { id: 'C', text: "Create a dashboard driven by unit economics alone, since cost per transaction is the only figure that the business leadership really needs." },
      { id: 'D', text: "Create a dashboard showing total spend by provider and by month so that leadership is able to see exactly where the money is going." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each of those measures maps to a decision an executive can take: coverage to whether more commitment should be bought, waste to whether optimisation is funded, forecast variance to whether the budget needs revising. Handing out the detailed allocation report delegates the summarising to the reader. Unit economics is the strongest single metric but on its own gives no view of coverage or forecast. Spend by provider and month describes what happened accurately while implying nothing about what to do next.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["kpi", "dashboards", "executive-reporting", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-485",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Cost Per Business Outcome: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The FinOps team is showing whether cloud spend is growing faster than the business it supports. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Track the month-on-month growth rate of total cloud spend and compare that rate against the business's overall revenue growth over the same reporting period each quarter." },
      { id: 'B', text: "Join FOCUS EffectiveCost datasets with business metrics (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction)." },
      { id: 'C', text: "Track spend per service and divide it by the number of resources deployed so that the average cost of each deployed resource becomes known." },
      { id: 'D', text: "Track total spend per team each month and compare the trend against that team's own headcount and its recent delivery velocity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dividing cost by the business outcome it produces turns spend into a rate that can rise or fall independently of growth, so a doubling of cost against a tripling of transactions reads correctly as an improvement. Comparing spend growth against revenue growth gives one company-wide number that hides which services are getting worse. Cost per resource measures infrastructure density rather than business value, and a team's headcount is not the outcome the business buys.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["unit-economics", "kpi", "business-value", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-486",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Making Teams Accountable for Their Spend: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The FinOps team is introducing financial accountability to engineering teams that have never had it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Implement Chargeback from the outset so that every team's budget carries its own cloud costs from the very first reporting period onwards." },
      { id: 'B', text: "Implement a central budget with per-team quotas enforced automatically by policy so that spend is capped well before it ever needs to be allocated to anyone." },
      { id: 'C', text: "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures." },
      { id: 'D', text: "Implement Showback only, on the basis that visibility changes behaviour and that moving budgets between teams creates unproductive friction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Showback first gives teams numbers they can check and argue with while nothing is at stake, so by the time budgets move the allocation is trusted and the conversation is about the spend rather than the data. Chargeback from day one attaches real financial consequences to allocation that is usually still incomplete, which reliably produces disputes about tagging. Quotas cap spend without attributing it and tend to block delivery at the worst moment. Stopping at showback works until visibility has done its work and nothing further changes.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["showback", "chargeback", "accountability", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-487",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Finding Resources That Cost Without Being Used: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The FinOps team is identifying resources that keep costing money without doing any useful work. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'CommitmentDiscountStatus' column for unused commitment capacity and treat whatever portion of it is unused as the waste that ought to be recovered first across the estate." },
      { id: 'B', text: "Query for the resources whose EffectiveCost has grown fastest month on month and investigate whichever of the largest increases appear first." },
      { id: 'C', text: "Query for the resources with the highest EffectiveCost in each month and review the largest of them together with their owning teams." },
      { id: 'D', text: "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pairing a recurring charge with near-zero usage is what defines an idle resource, and it surfaces the unattached disk and the forgotten load balancer that no cost ranking would ever reach. Unused commitment capacity is real waste but a different kind, and recovering it means changing the commitment rather than the resource. Fastest-growing and largest-cost resources are both worth reviewing, yet the biggest line is usually the production database that is entirely justified, while the waste hides among small recurring charges.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["waste-reduction", "idle-resources", "optimization", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-488",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Catching a Cost Spike Before the Invoice: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The FinOps team is catching an unexpected spend increase within a day rather than at month end. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource." },
      { id: 'B', text: "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted." },
      { id: 'C', text: "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period." },
      { id: 'D', text: "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["anomaly-detection", "alerting", "remediation", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-489",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Dividing the Cost of a Shared Platform: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The FinOps team is attributing the cost of a shared cluster and network to the teams using it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Allocate the shared platform costs to each tenant in proportion to that team's total direct cloud spend, as measured over the same billing period in each and every month of the year." },
      { id: 'B', text: "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage." },
      { id: 'C', text: "Leave the shared platform costs in a central platform cost centre and report them entirely separately from the individual tenant teams." },
      { id: 'D', text: "Allocate the shared platform costs evenly between the tenant teams so that each one of them carries an identical share of the total." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Allocating on measured consumption of the shared service, such as pod CPU and memory hours or data processed by the gateway, ties each team's charge to the driver it controls, so reducing usage visibly reduces the bill. Splitting by total direct spend is a common proxy but correlates weakly with cluster usage, so a team with heavy managed-database spend subsidises a heavy cluster user. Leaving the cost central is accurate and shows no team what it consumes. An even split charges the smallest tenant the same as the largest.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["shared-costs", "allocation", "platform-engineering", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-490",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Reporting That Leadership Can Act On: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The FinOps team is reporting cloud spend to leadership in a form that supports a decision. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Distribute the detailed allocation report to every business unit and let the leadership team read through whichever of the sections happen to concern them the most that month." },
      { id: 'B', text: "Create a dashboard driven by unit economics alone, since cost per transaction is the only figure that the business leadership really needs." },
      { id: 'C', text: "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance." },
      { id: 'D', text: "Create a dashboard showing total spend by provider and by month so that leadership is able to see exactly where the money is going." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each of those measures maps to a decision an executive can take: coverage to whether more commitment should be bought, waste to whether optimisation is funded, forecast variance to whether the budget needs revising. Handing out the detailed allocation report delegates the summarising to the reader. Unit economics is the strongest single metric but on its own gives no view of coverage or forecast. Spend by provider and month describes what happened accurately while implying nothing about what to do next.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["kpi", "dashboards", "executive-reporting", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-491",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Cost Per Business Outcome: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The FinOps team is showing whether cloud spend is growing faster than the business it supports. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Track the month-on-month growth rate of total cloud spend and compare that rate against the business's overall revenue growth over the same reporting period each quarter." },
      { id: 'B', text: "Track spend per service and divide it by the number of resources deployed so that the average cost of each deployed resource becomes known." },
      { id: 'C', text: "Track total spend per team each month and compare the trend against that team's own headcount and its recent delivery velocity." },
      { id: 'D', text: "Join FOCUS EffectiveCost datasets with business metrics (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dividing cost by the business outcome it produces turns spend into a rate that can rise or fall independently of growth, so a doubling of cost against a tripling of transactions reads correctly as an improvement. Comparing spend growth against revenue growth gives one company-wide number that hides which services are getting worse. Cost per resource measures infrastructure density rather than business value, and a team's headcount is not the outcome the business buys.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["unit-economics", "kpi", "business-value", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-492",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Making Teams Accountable for Their Spend: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The FinOps team is introducing financial accountability to engineering teams that have never had it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures." },
      { id: 'B', text: "Implement Chargeback from the outset so that every team's budget carries its own cloud costs from the very first reporting period onwards." },
      { id: 'C', text: "Implement a central budget with per-team quotas enforced automatically by policy so that spend is capped well before it ever needs to be allocated to anyone." },
      { id: 'D', text: "Implement Showback only, on the basis that visibility changes behaviour and that moving budgets between teams creates unproductive friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Showback first gives teams numbers they can check and argue with while nothing is at stake, so by the time budgets move the allocation is trusted and the conversation is about the spend rather than the data. Chargeback from day one attaches real financial consequences to allocation that is usually still incomplete, which reliably produces disputes about tagging. Quotas cap spend without attributing it and tend to block delivery at the worst moment. Stopping at showback works until visibility has done its work and nothing further changes.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["showback", "chargeback", "accountability", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-493",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Finding Resources That Cost Without Being Used: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The FinOps team is identifying resources that keep costing money without doing any useful work. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'CommitmentDiscountStatus' column for unused commitment capacity and treat whatever portion of it is unused as the waste that ought to be recovered first across the estate." },
      { id: 'B', text: "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage." },
      { id: 'C', text: "Query for the resources whose EffectiveCost has grown fastest month on month and investigate whichever of the largest increases appear first." },
      { id: 'D', text: "Query for the resources with the highest EffectiveCost in each month and review the largest of them together with their owning teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Pairing a recurring charge with near-zero usage is what defines an idle resource, and it surfaces the unattached disk and the forgotten load balancer that no cost ranking would ever reach. Unused commitment capacity is real waste but a different kind, and recovering it means changing the commitment rather than the resource. Fastest-growing and largest-cost resources are both worth reviewing, yet the biggest line is usually the production database that is entirely justified, while the waste hides among small recurring charges.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["waste-reduction", "idle-resources", "optimization", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-494",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Catching a Cost Spike Before the Invoice: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The FinOps team is catching an unexpected spend increase within a day rather than at month end. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted." },
      { id: 'B', text: "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period." },
      { id: 'C', text: "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource." },
      { id: 'D', text: "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["anomaly-detection", "alerting", "remediation", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-495",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Dividing the Cost of a Shared Platform: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The FinOps team is attributing the cost of a shared cluster and network to the teams using it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Allocate the shared platform costs to each tenant in proportion to that team's total direct cloud spend, as measured over the same billing period in each and every month of the year." },
      { id: 'B', text: "Leave the shared platform costs in a central platform cost centre and report them entirely separately from the individual tenant teams." },
      { id: 'C', text: "Allocate the shared platform costs evenly between the tenant teams so that each one of them carries an identical share of the total." },
      { id: 'D', text: "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Allocating on measured consumption of the shared service, such as pod CPU and memory hours or data processed by the gateway, ties each team's charge to the driver it controls, so reducing usage visibly reduces the bill. Splitting by total direct spend is a common proxy but correlates weakly with cluster usage, so a team with heavy managed-database spend subsidises a heavy cluster user. Leaving the cost central is accurate and shows no team what it consumes. An even split charges the smallest tenant the same as the largest.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["shared-costs", "allocation", "platform-engineering", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-496",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Reporting That Leadership Can Act On: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The FinOps team is reporting cloud spend to leadership in a form that supports a decision. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance." },
      { id: 'B', text: "Distribute the detailed allocation report to every business unit and let the leadership team read through whichever of the sections happen to concern them the most that month." },
      { id: 'C', text: "Create a dashboard driven by unit economics alone, since cost per transaction is the only figure that the business leadership really needs." },
      { id: 'D', text: "Create a dashboard showing total spend by provider and by month so that leadership is able to see exactly where the money is going." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each of those measures maps to a decision an executive can take: coverage to whether more commitment should be bought, waste to whether optimisation is funded, forecast variance to whether the budget needs revising. Handing out the detailed allocation report delegates the summarising to the reader. Unit economics is the strongest single metric but on its own gives no view of coverage or forecast. Spend by provider and month describes what happened accurately while implying nothing about what to do next.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["kpi", "dashboards", "executive-reporting", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-497",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Cost Per Business Outcome: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The FinOps team is showing whether cloud spend is growing faster than the business it supports. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Track the month-on-month growth rate of total cloud spend and compare that rate against the business's overall revenue growth over the same reporting period each quarter." },
      { id: 'B', text: "Join FOCUS EffectiveCost datasets with business metrics (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction)." },
      { id: 'C', text: "Track spend per service and divide it by the number of resources deployed so that the average cost of each deployed resource becomes known." },
      { id: 'D', text: "Track total spend per team each month and compare the trend against that team's own headcount and its recent delivery velocity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dividing cost by the business outcome it produces turns spend into a rate that can rise or fall independently of growth, so a doubling of cost against a tripling of transactions reads correctly as an improvement. Comparing spend growth against revenue growth gives one company-wide number that hides which services are getting worse. Cost per resource measures infrastructure density rather than business value, and a team's headcount is not the outcome the business buys.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["unit-economics", "kpi", "business-value", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-498",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Making Teams Accountable for Their Spend: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The FinOps team is introducing financial accountability to engineering teams that have never had it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Implement Chargeback from the outset so that every team's budget carries its own cloud costs from the very first reporting period onwards." },
      { id: 'B', text: "Implement a central budget with per-team quotas enforced automatically by policy so that spend is capped well before it ever needs to be allocated to anyone." },
      { id: 'C', text: "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures." },
      { id: 'D', text: "Implement Showback only, on the basis that visibility changes behaviour and that moving budgets between teams creates unproductive friction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Showback first gives teams numbers they can check and argue with while nothing is at stake, so by the time budgets move the allocation is trusted and the conversation is about the spend rather than the data. Chargeback from day one attaches real financial consequences to allocation that is usually still incomplete, which reliably produces disputes about tagging. Quotas cap spend without attributing it and tend to block delivery at the worst moment. Stopping at showback works until visibility has done its work and nothing further changes.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["showback", "chargeback", "accountability", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-499",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Finding Resources That Cost Without Being Used: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The FinOps team is identifying resources that keep costing money without doing any useful work. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'CommitmentDiscountStatus' column for unused commitment capacity and treat whatever portion of it is unused as the waste that ought to be recovered first across the estate." },
      { id: 'B', text: "Query for the resources whose EffectiveCost has grown fastest month on month and investigate whichever of the largest increases appear first." },
      { id: 'C', text: "Query for the resources with the highest EffectiveCost in each month and review the largest of them together with their owning teams." },
      { id: 'D', text: "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pairing a recurring charge with near-zero usage is what defines an idle resource, and it surfaces the unattached disk and the forgotten load balancer that no cost ranking would ever reach. Unused commitment capacity is real waste but a different kind, and recovering it means changing the commitment rather than the resource. Fastest-growing and largest-cost resources are both worth reviewing, yet the biggest line is usually the production database that is entirely justified, while the waste hides among small recurring charges.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["waste-reduction", "idle-resources", "optimization", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-500",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d3",
    domainName: "Cost Analysis, Allocation, and KPI Reporting with FOCUS",
    title: "Catching a Cost Spike Before the Invoice: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The FinOps team is catching an unexpected spend increase within a day rather than at month end. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource." },
      { id: 'B', text: "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted." },
      { id: 'C', text: "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period." },
      { id: 'D', text: "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["anomaly-detection", "alerting", "remediation", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_QUESTIONS_20;
