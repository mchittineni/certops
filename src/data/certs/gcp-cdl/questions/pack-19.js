export const GCP_CDL_QUESTIONS_19 = [
  {
    id: "gcp-cdl-451",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Building an honest five-year cost comparison",
    scenario: "A regional grocery chain is comparing the five-year cost of keeping its own data center with moving to Google Cloud. The first draft of the on-premises side lists only the purchase price of replacement servers and storage arrays, and the CFO says the comparison is not yet a true total cost of ownership.",
    question: "Which additional costs belong on the on-premises side of the comparison?",
    options: [
      { id: 'A', text: "The marketing budget for the new stores, because it rises whenever the data center is modernized" },
      { id: 'B', text: "The monthly Google Cloud invoice, since that cost will appear no matter which option is finally chosen" },
      { id: 'C', text: "Power, cooling, facility space, hardware maintenance, software licences and the staff who run it all" },
      { id: 'D', text: "Only the network cabling inside the server room, since every other expense is already in the draft" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Total cost of ownership counts every cost of owning and operating infrastructure over its life, not just the hardware price: power and cooling, data center space, maintenance contracts, software licences, refresh cycles and the people who operate and secure it. Adding the Google Cloud invoice to the on-premises column would double count; it belongs on the cloud side. Cabling is a real but minor cost, and it is far from the only item missing. Store marketing spending is unrelated to where IT runs and would distort the comparison.",
    referenceUrl: "https://cloud.google.com/learn/what-is-tco",
    tags: ["TCO", "CapEx", "OpEx"]
  },
  {
    id: "gcp-cdl-452",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "What finance should expect after the move",
    scenario: "A furniture manufacturer is closing its server room and moving to Google Cloud. Until now, IT spending arrived as a large hardware purchase every four years that finance depreciated over time. The controller asks how the pattern of IT costs will look after the migration.",
    question: "What should the controller expect?",
    options: [
      { id: 'A', text: "Costs will shift to ongoing operating expenses that rise and fall with the resources consumed" },
      { id: 'B', text: "Costs will remain a capital purchase, because cloud resources are bought and then depreciated" },
      { id: 'C', text: "Costs will become a single fixed annual fee that is paid in advance and never varies with usage" },
      { id: 'D', text: "Costs will disappear from the budget, since the provider absorbs infrastructure spending itself" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Moving to the cloud shifts IT spending from capital expenditure, large upfront purchases depreciated over years, to operational expenditure paid as resources are used, so costs track consumption and can go up or down month to month. That flexibility is also why forecasting, budgets and cost governance become important. Cloud pricing is not a single fixed prepaid fee, although commitments can lower rates. Customers do not buy and depreciate cloud resources as capital assets. Infrastructure costs do not vanish; they are billed as services.",
    referenceUrl: "https://cloud.google.com/learn/what-is-capex-vs-opex",
    tags: ["CapEx", "OpEx", "Cloud economics"]
  },
  {
    id: "gcp-cdl-453",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "The depreciation schedule the auditors asked about",
    scenario: "An engineering firm bought a storage array for $600,000 three years ago and is depreciating it over five years. It now plans to migrate that data to Cloud Storage and retire the array early. The finance director asks how this move changes the firm's accounting picture.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "The firm must capitalize its future Cloud Storage bills and depreciate them over five years like the old array" },
      { id: 'B', text: "The remaining book value of the array keeps being depreciated as before, and cloud storage becomes a capital asset" },
      { id: 'C', text: "Cloud Storage charges are expensed as incurred, and the retired array's remaining book value must be handled" },
      { id: 'D', text: "The migration cancels the original purchase, so the $600,000 is refunded to the firm as an operating credit this year" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Storage charges are operating expenses recognized as the service is consumed. The array was a capital asset; retiring it two years early means its remaining book value, roughly $240,000, does not simply disappear and must be dealt with, typically written off, which is a real factor in the timing and TCO of a migration. Cloud storage does not become a capital asset. Nothing refunds a past hardware purchase. Future pay-as-you-go bills are not capitalized and depreciated like owned hardware.",
    referenceUrl: "https://cloud.google.com/learn/what-is-capex-vs-opex",
    tags: ["CapEx", "OpEx", "TCO"]
  },
  {
    id: "gcp-cdl-454",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "A database cluster that never sleeps",
    scenario: "An online bank runs a set of Compute Engine VMs for its core ledger around the clock, every day of the year, and expects that usage to stay at least as high for the next three years. Finance wants a lower price for this predictable baseline without changing the architecture.",
    question: "Which option best fits?",
    options: [
      { id: 'A', text: "Spot VMs, which are deeply discounted but can be stopped by Google whenever it needs capacity" },
      { id: 'B', text: "The free tier, which provides limited monthly usage of selected products at no charge at all" },
      { id: 'C', text: "Committed use discounts, which cut prices for a one- or three-year usage commitment" },
      { id: 'D', text: "Preemptible VMs, which run for at most 24 hours before being stopped by Compute Engine" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Committed use discounts reduce prices substantially in exchange for committing to a level of usage or spend for one or three years, which suits steady, predictable workloads like a ledger that runs 24/7. Spot VMs are cheaper still but can be reclaimed at any time, which is unacceptable for a core ledger. The free tier covers only small amounts of usage and cannot carry a production banking workload. Preemptible VMs share the interruption risk of Spot VMs and additionally stop after 24 hours.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
    tags: ["Committed use discounts", "Cost optimization"]
  },
  {
    id: "gcp-cdl-455",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Costs the migration business case left out",
    scenario: "A logistics company's migration business case compares five years of data center costs with five years of projected Google Cloud usage and shows large savings. A board member points out that the plan requires running both environments in parallel for nine months and retraining the operations team.",
    question: "How should the TCO analysis treat those items?",
    options: [
      { id: 'A', text: "Move them to the cloud provider's side, because Google pays for all parallel running and retraining" },
      { id: 'B', text: "Include them as one-time transition costs, since they are part of what the move truly costs" },
      { id: 'C', text: "Count them only if the migration overruns, since a plan that runs on schedule avoids them" },
      { id: 'D', text: "Ignore them, because TCO only compares steady-state running costs once migration is complete" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A realistic total cost of ownership includes one-time transition costs such as migration effort, running both environments in parallel, and training staff, alongside ongoing costs; leaving them out overstates savings and can mislead the board. TCO is not limited to steady state. These costs arise even when the migration stays on schedule, because parallel running and training are planned activities. Programs and credits can offset some migration costs, but it is inaccurate to assume the provider covers all of them.",
    referenceUrl: "https://cloud.google.com/learn/what-is-tco",
    tags: ["TCO", "Migration costs"]
  },
  {
    id: "gcp-cdl-456",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Nobody owns the cloud bill",
    scenario: "At a fast-growing software company, engineers launch resources freely, finance receives one consolidated Google Cloud invoice each month, and nobody can explain why it doubled in six months. The CFO wants a sustainable way to manage cloud costs as the company grows.",
    question: "Which organizational approach does Google recommend?",
    options: [
      { id: 'A', text: "Form a cross-functional cost team that joins finance, technology and business leaders" },
      { id: 'B', text: "Leave cost decisions to each engineer, since the people creating resources know them best" },
      { id: 'C', text: "Ask the cloud provider's account team to decide which resources the company is allowed to run" },
      { id: 'D', text: "Let finance approve every individual resource an engineer creates before it can be launched" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google's recommended practice, aligned with FinOps, is a centralized, cross-functional team or cloud center of excellence that brings finance, technology and business stakeholders together to set cost policies, provide visibility and create shared accountability for cloud spending. Having finance approve every resource slows teams down and removes the agility that justified the cloud. Leaving decisions to individual engineers without visibility or accountability is what produced the doubling. The provider's account team can advise but does not govern a customer's spending decisions.",
    referenceUrl: "https://cloud.google.com/learn/what-is-finops",
    tags: ["Financial governance", "FinOps"]
  },
  {
    id: "gcp-cdl-457",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Finance needs to see costs, not change them",
    scenario: "A media company's finance analysts need to view Google Cloud costs and transactions for the company's billing account and download invoices. They must not be able to link projects to the billing account, change payment settings, or touch any project resources.",
    question: "Which role should the analysts receive?",
    options: [
      { id: 'A', text: "Billing Account User, which allows them to link new projects to the company billing account" },
      { id: 'B', text: "Project Owner on each project, which lets them see the resources that drive the billing costs" },
      { id: 'C', text: "Billing Account Administrator, which lets them manage every setting on the billing account" },
      { id: 'D', text: "Billing Account Viewer on the billing account, which allows read-only access to cost information" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Billing Account Viewer role grants read access to cost information and transactions on a billing account without the ability to change settings, link projects or modify resources, which matches least privilege for finance analysts. Billing Account Administrator can change payment settings and permissions, far more than required. Project Owner gives full control over project resources, which the analysts must not have. Billing Account User exists specifically to let people link projects to the billing account, which is prohibited here.",
    referenceUrl: "https://docs.cloud.google.com/billing/docs/how-to/billing-access",
    tags: ["Cloud Billing", "IAM", "Financial governance"]
  },
  {
    id: "gcp-cdl-458",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Charging each product team for its share",
    scenario: "A travel company runs several product teams' workloads in shared Google Cloud projects. Finance wants to show each team its monthly cloud costs and eventually charge those costs back to team budgets, broken down by team and environment.",
    question: "What should the company do first?",
    options: [
      { id: 'A', text: "Create a separate billing account for every VM and environment so each produces its own invoice" },
      { id: 'B', text: "Raise the project quotas for each team so that resource usage is easier to spot on the invoice" },
      { id: 'C', text: "Switch every workload to Spot VMs so the costs are small enough not to need allocating at all" },
      { id: 'D', text: "Apply consistent labels such as team and environment to resources and report costs by label" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Labels are key-value pairs attached to resources, and they flow into Cloud Billing reports and the billing export, so applying a consistent scheme such as team and environment lets finance break costs down and support showback or chargeback even in shared projects. A billing account per VM is unmanageable and not how billing accounts are meant to be used. Raising quotas changes limits, not cost attribution. Spot VMs change the price of some workloads but do not allocate costs to teams, and they are unsuitable for many workloads.",
    referenceUrl: "https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels",
    tags: ["Labels", "Cost allocation", "Cloud Billing"]
  },
  {
    id: "gcp-cdl-459",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Custom cost analysis joined with sales data",
    scenario: "A retailer's finance team wants to analyze detailed Google Cloud cost data alongside its own sales figures, run custom SQL queries across months of history, and build dashboards in Looker Studio that the built-in billing reports cannot provide.",
    question: "Which capability supports this?",
    options: [
      { id: 'A', text: "Exporting Cloud Billing data to BigQuery, where it can be queried and joined with other data" },
      { id: 'B', text: "Setting a budget with threshold alerts so finance is emailed when spending passes a limit" },
      { id: 'C', text: "Viewing the pricing calculator to estimate what next month's workloads are likely to cost" },
      { id: 'D', text: "Downloading PDF invoices each month and retyping the totals into the finance planning tool" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Billing export to BigQuery continuously writes detailed usage and cost data to a BigQuery dataset, where finance can run SQL, join it with sales or other business data, keep long history and build Looker Studio dashboards. Retyping totals from PDF invoices loses detail and cannot support custom analysis. Budgets send alerts at thresholds but do not provide analytical data. The pricing calculator estimates future costs rather than analyzing actual spending.",
    referenceUrl: "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery",
    tags: ["Cloud Billing", "BigQuery export", "Cost reporting"]
  },
  {
    id: "gcp-cdl-460",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Estimating before a single VM exists",
    scenario: "A nonprofit is planning to move its donor platform to Google Cloud next year and must submit an estimated monthly cloud cost in its grant application now. It knows the approximate VM sizes, storage volume and network traffic it will need but has not created any resources yet.",
    question: "Which tool should it use?",
    options: [
      { id: 'A', text: "Recommender, which suggests rightsizing changes based on the usage of running resources" },
      { id: 'B', text: "The Google Cloud pricing calculator, which estimates costs for a planned configuration" },
      { id: 'C', text: "Cloud Billing reports, which chart actual costs by project, service and SKU over time" },
      { id: 'D', text: "Budget alerts, which notify the billing team as actual or forecast costs reach thresholds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Google Cloud pricing calculator lets organizations model a planned configuration, such as VM types, storage and network egress, and estimate its cost before deploying anything, which is exactly what a grant application needs. Billing reports and budget alerts work on actual usage, so they have nothing to show until resources exist. Recommender analyzes running resources to suggest savings and likewise needs existing usage data.",
    referenceUrl: "https://cloud.google.com/products/calculator",
    tags: ["Pricing calculator", "Cost estimation"]
  },
  {
    id: "gcp-cdl-461",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Engineers who never see what they spend",
    scenario: "At an e-learning company, the cloud bill is visible only to the finance department. Engineers choose machine sizes and leave test environments running without knowing what they cost, and they are surprised when told their project costs more than a senior salary.",
    question: "Which change addresses the people side of cost control?",
    options: [
      { id: 'A', text: "Moving every workload to a single region so the invoice has fewer lines for finance to review" },
      { id: 'B', text: "Giving teams visibility into their own costs and making cost awareness part of their job" },
      { id: 'C', text: "Buying a three-year commitment immediately so that per-hour prices fall for all of the engineers" },
      { id: 'D', text: "Deleting every test environment automatically at midnight whether or not anyone is still using it" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Controlling cloud costs depends on people, process and technology, and the people element is about culture and accountability: engineers who can see what their resources cost and are expected to consider cost make better decisions, which is why Google recommends sharing cost data with the teams that create spending. Consolidating regions changes the shape of the invoice but not engineers' behavior. A large commitment made without understanding usage can lock in waste. Deleting environments on a schedule is a blunt technical control that may disrupt legitimate work and does not build awareness.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/cost-optimization/foster-culture-cost-awareness",
    tags: ["People process technology", "Cost awareness"]
  },
  {
    id: "gcp-cdl-462",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Turning good intentions into a routine",
    scenario: "A hotel chain's cloud team knows its costs could be lower, but savings happen only when someone happens to notice waste. The head of cloud wants a repeatable way to make sure cost issues are found and acted on every month, regardless of who is on shift.",
    question: "Which measure strengthens the process element of cost control?",
    options: [
      { id: 'A', text: "Buying a third-party dashboard product and leaving it for teams to consult whenever they choose" },
      { id: 'B', text: "Hiring one more engineer whose informal task is to keep an eye on costs whenever time allows" },
      { id: 'C', text: "Sending a single company-wide email reminding staff that saving money on the cloud matters" },
      { id: 'D', text: "A regular cost review cadence with owners, tagging standards and agreed actions on recommendations" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The process element of cost control means defined, repeatable practices: a regular review cadence, named owners, tagging and labeling standards, and an agreed way of acting on optimization recommendations, so savings do not depend on individuals noticing waste. An extra engineer with an informal remit is a people change and remains ad hoc. A dashboard is technology, and without a process around it nobody is obliged to act. A single reminder email raises awareness briefly but creates no routine.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/cost-optimization",
    tags: ["People process technology", "Cost governance"]
  },
  {
    id: "gcp-cdl-463",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Forgotten VMs and oversized machines",
    scenario: "An insurance company suspects that many of its 900 Compute Engine VMs are larger than their workloads need, and that some have been idle for weeks after projects ended. It wants Google Cloud to point out these opportunities automatically based on actual usage.",
    question: "Which capability provides this?",
    options: [
      { id: 'A', text: "Cloud Audit Logs, which record who created each VM and when its configuration was last changed" },
      { id: 'B', text: "Organization Policy, which can block the creation of machine types that exceed an agreed size" },
      { id: 'C', text: "Recommender in Active Assist, which suggests resizing and flags unused machines from real metrics" },
      { id: 'D', text: "Cloud Trace, which follows individual requests through services to show where latency builds up" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Recommender, part of Active Assist, analyzes resource usage and produces recommendations such as resizing overprovisioned VMs and deleting or stopping idle VMs and disks, with estimated savings, which is a technology lever for cost control. Audit logs show who changed what but do not assess utilization. Organization policies can prevent certain configurations in future but do not find existing oversized or idle machines. Cloud Trace analyzes request latency, not cost efficiency.",
    referenceUrl: "https://docs.cloud.google.com/recommender/docs/whatis-activeassist",
    tags: ["Recommender", "Rightsizing", "Active Assist"]
  },
  {
    id: "gcp-cdl-464",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "All the tools switched on, costs still climbing",
    scenario: "A gaming studio enabled budgets, billing export and Recommender a year ago. Recommender currently lists over $40,000 a month in potential savings, most of it more than six months old, and the monthly bill keeps climbing. Nobody is assigned to review the recommendations, and teams have never agreed how they should be handled.",
    question: "What is the most likely reason costs are not coming down?",
    options: [
      { id: 'A', text: "Budgets are set too high, so lowering every alert threshold would reduce the monthly spending" },
      { id: 'B', text: "The technology is missing, because Recommender cannot estimate savings for game server workloads" },
      { id: 'C', text: "The billing export is misconfigured, so the recommendations and their savings are unreliable" },
      { id: 'D', text: "The people and process elements are missing, since no owner or routine exists to act on advice" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Effective cost control needs people, process and technology together. The studio has the technology, and Recommender is clearly producing savings estimates, but without assigned owners and an agreed process for reviewing and applying recommendations, nothing happens and waste accumulates. The claim that Recommender cannot handle these workloads contradicts the $40,000 in recommendations it is already showing. Lower budget thresholds only send alerts sooner; alerts do not reduce spending by themselves. The billing export does not feed Recommender's calculations, so its configuration would not invalidate the recommendations.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/cost-optimization/foster-culture-cost-awareness",
    tags: ["People process technology", "Recommender", "Cost governance"]
  },
  {
    id: "gcp-cdl-465",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "An alert arrived, but spending kept going",
    scenario: "A startup set a $5,000 monthly budget on its development billing account. The alert at 100% arrived by email on a Saturday, but nobody read it until Monday, by which time a runaway test job had pushed spending to $11,000. The founders want spending on the development projects to stop automatically when the budget is exhausted.",
    question: "What should the startup do?",
    options: [
      { id: 'A', text: "Lower the budget alert thresholds, since alerts at 50% and 90% prevent any further spending" },
      { id: 'B', text: "Use budget notifications sent to Pub/Sub to trigger automation that disables billing or stops work" },
      { id: 'C', text: "Ask Google to cap the invoice at $5,000, since overage above a budget is waived on request" },
      { id: 'D', text: "Nothing more, since a budget automatically disables billing once the amount has been reached" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Billing budgets send alerts but do not cap spending on their own. To enforce a hard stop, budgets can publish programmatic notifications to Pub/Sub, which can trigger a Cloud Run function that disables billing on the development projects or shuts down resources, accepting that this stops services. Lower thresholds only warn earlier; they still require someone to act. Budgets never disable billing automatically. Google does not waive usage above a budget on request.",
    referenceUrl: "https://docs.cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications",
    tags: ["Budgets", "Pub/Sub", "Cost control"]
  },
  {
    id: "gcp-cdl-466",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Drawing the structure for a new cloud estate",
    scenario: "A university is setting up its Google Cloud environment and wants a structure that mirrors its faculties and departments, so policies and access can be applied once at a high level and flow down to the teams' workloads.",
    question: "Which ordering of the Google Cloud resource hierarchy is correct, from top to bottom?",
    options: [
      { id: 'A', text: "Projects, then folders, then the organization, and finally the individual resources in each folder" },
      { id: 'B', text: "Folders, then resources, then projects, and finally the organization that sits beneath them all" },
      { id: 'C', text: "Billing account, then organization, then resources, and finally the projects that hold resources" },
      { id: 'D', text: "Organization, then folders, then projects, and finally the individual resources in each project" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Google Cloud resource hierarchy has the organization node at the top, representing the company or institution, then optional folders that can be nested to mirror departments or environments, then projects, and finally resources such as VMs and buckets, which always belong to exactly one project. Policies set higher up are inherited below. The other orderings invert or scramble the hierarchy, and a billing account is linked to projects to pay for them rather than sitting at the top of the resource hierarchy.",
    referenceUrl: "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    tags: ["Resource hierarchy", "Organization", "Folders"]
  },
  {
    id: "gcp-cdl-467",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "One grant for every research project",
    scenario: "A pharmaceutical company keeps all 40 of its research projects in a folder named Research. The data governance team needs read access to BigQuery data in every one of those projects, including research projects created next year.",
    question: "What is the simplest way to grant this access?",
    options: [
      { id: 'A', text: "Grant the role once on the Research folder so that every project beneath it inherits the access" },
      { id: 'B', text: "Create a new organization for the governance team and move the research projects into it" },
      { id: 'C', text: "Grant access on each of the 40 projects in the folder separately and repeat it for new ones" },
      { id: 'D', text: "Copy all research data into one project owned by the governance team every night instead" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM allow policies are inherited down the resource hierarchy, so a role granted on the Research folder applies to every project in it, including projects added later, which is simpler and less error-prone than per-project grants. Granting on each project works but multiplies effort and risks missing new projects. Creating a separate organization fragments governance and billing. Nightly copies add cost, delay and new data management risks without solving the access design.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control",
    tags: ["Resource hierarchy", "IAM", "Inheritance"]
  },
  {
    id: "gcp-cdl-468",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "No public IP addresses anywhere in the company",
    scenario: "A health insurer's security policy says that no VM in any project may have an external IP address, including projects created by teams in the future. The cloud team wants to enforce this centrally rather than rely on each project owner.",
    question: "How should the cloud team use the resource hierarchy to enforce the rule?",
    options: [
      { id: 'A', text: "Grant every engineer the Compute Viewer role so nobody has permission to create any VM at all" },
      { id: 'B', text: "Set an organization policy at the org node that restricts external IPs for all projects" },
      { id: 'C', text: "Email each project owner a written copy of the policy and ask them to confirm compliance each year" },
      { id: 'D', text: "Create a budget on each project that alerts whenever a VM with an external address is launched" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Organization policies set at the organization node are inherited by every folder and project beneath it, including future projects, so a constraint that restricts external IP addresses on VMs enforces the rule centrally; this is one of the security and compliance benefits of the hierarchy. Written reminders rely on voluntary compliance. Making everyone a viewer would stop all VM creation, not just VMs with public addresses. Budgets track spending and cannot detect or prevent a configuration such as an external IP.",
    referenceUrl: "https://docs.cloud.google.com/organization-policy/overview",
    tags: ["Resource hierarchy", "Organization policy", "Compliance"]
  },
  {
    id: "gcp-cdl-469",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Removing a role that was granted higher up",
    scenario: "A contractor group was granted the Editor role on a Marketing folder. Security now wants to keep that access for all Marketing projects except one that holds unreleased financial results. An engineer proposes simply removing the Editor grant from that one project's allow policy.",
    question: "Why will the engineer's proposal not work, and what would?",
    options: [
      { id: 'A', text: "Project policies override folder policies, so editing the project allow policy works after a day" },
      { id: 'B', text: "Editor cannot be granted on folders, so the contractors never had access to that project anyway" },
      { id: 'C', text: "Inherited allow grants cannot be removed at a lower level; move the project or add a deny policy" },
      { id: 'D', text: "The grant must be removed from the billing account, since access is inherited from billing" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Allow policies are inherited, and a resource's effective access is the union of its own policy and those of its ancestors, so there is no Editor grant on the project to remove and the contractors keep access through the folder. The practical fixes are to move the sensitive project outside the Marketing folder, grant the role more narrowly, or use an IAM deny policy to block the contractors' permissions on that project. Lower-level policies do not override inherited grants. Roles can be granted on folders. Billing accounts are not part of the access inheritance path for project resources.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/resource-hierarchy-access-control",
    tags: ["Resource hierarchy", "IAM", "Deny policies"]
  },
  {
    id: "gcp-cdl-470",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Where each team's resources and costs belong",
    scenario: "A marketing agency is creating its first Google Cloud workloads for three clients. It wants each client's resources kept separate, with their own permissions and API settings, and the costs for each client easy to identify when they are billed.",
    question: "Which level of the resource hierarchy fits this need?",
    options: [
      { id: 'A', text: "A single project for all clients, with every resource named after the client it serves" },
      { id: 'B', text: "A separate organization node for each client, with its own domain and administrators" },
      { id: 'C', text: "A separate zone for each client, since zones isolate permissions and billing records" },
      { id: 'D', text: "A separate project per client, since projects isolate resources and link to billing" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Projects are the basic container for resources in Google Cloud: each has its own IAM policies, enabled APIs and quotas, and is linked to a billing account, so costs are reported per project, which makes one project per client a natural fit. A separate organization per client is heavyweight, needing its own domain and administration. A single shared project mixes permissions and relies on naming for cost separation. Zones are physical deployment locations and do not isolate permissions or billing.",
    referenceUrl: "https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects",
    tags: ["Projects", "Resource hierarchy", "Cloud Billing"]
  },
  {
    id: "gcp-cdl-471",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Warning before the quarter's money runs out",
    scenario: "A museum's digital team has a fixed allocation of $3,000 a month for Google Cloud. The director wants to be warned when spending reaches half of the allocation, again near the limit, and also if the month's forecast suggests they will exceed it.",
    question: "Which feature should the team configure?",
    options: [
      { id: 'A', text: "A Cloud Billing budget with threshold rules on actual and forecasted costs" },
      { id: 'B', text: "A resource quota that limits the number of VMs the project can run at once" },
      { id: 'C', text: "A committed use discount that lowers prices for a fixed amount of usage" },
      { id: 'D', text: "An uptime check that alerts when the museum website stops responding" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Billing budgets let you set an amount and threshold rules, for example at 50%, 90% and 100%, that send alerts based on actual spending or on forecasted spending for the period, which matches the director's request. Quotas cap resource usage but do not track money against an allocation or send spending warnings. Committed use discounts lower prices in exchange for a commitment and provide no alerts. Uptime checks monitor availability rather than cost.",
    referenceUrl: "https://docs.cloud.google.com/billing/docs/how-to/budgets",
    tags: ["Budgets", "Cost control"]
  },
  {
    id: "gcp-cdl-472",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Capping GPUs in the experimentation project",
    scenario: "A machine learning team gives its interns a sandbox project for experiments. Last quarter an intern launched dozens of high-end GPUs by mistake. The team lead wants a hard technical limit on how many GPUs the sandbox can ever use, while leaving production projects unaffected.",
    question: "Which control should the team lead use?",
    options: [
      { id: 'A', text: "A budget alert on the sandbox that emails the team lead when GPU costs pass a threshold" },
      { id: 'B', text: "A committed use discount for GPUs so that the extra accelerators cost less per hour" },
      { id: 'C', text: "A quota override on the sandbox project that caps the GPUs it is allowed to allocate" },
      { id: 'D', text: "Billing export to BigQuery so the team can find the intern's GPU usage after the fact" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Quotas limit how much of a resource a project can use, and customers can set their own lower quota values for a project, which creates a hard cap on GPU allocation in the sandbox while leaving production projects' quotas untouched. A budget alert warns but does not stop an intern launching GPUs. A committed use discount lowers the price of GPUs you commit to rather than limiting usage. Billing export helps analyze usage afterward but prevents nothing.",
    referenceUrl: "https://docs.cloud.google.com/docs/quotas/overview",
    tags: ["Quotas", "Cost control", "GPUs"]
  },
  {
    id: "gcp-cdl-473",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Weather simulations that can restart anytime",
    scenario: "A climate research institute runs thousands of independent weather simulation jobs each week. Each job checkpoints its progress and can resume on another machine if interrupted, and deadlines are measured in days rather than minutes. The grant funding the work is tight, so compute cost matters more than uninterrupted runtime.",
    question: "Which Compute Engine option best reduces cost for these jobs?",
    options: [
      { id: 'A', text: "Three-year committed use discounts on a fixed fleet sized for the busiest week of the year" },
      { id: 'B', text: "Sole-tenant nodes, which dedicate physical servers to the institute for isolation" },
      { id: 'C', text: "Spot VMs, which cost far less but can be reclaimed by Google when capacity is needed" },
      { id: 'D', text: "Larger machine types, so each simulation finishes sooner and fewer hours are billed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Spot VMs offer steep discounts, often 60 to 91 percent off standard prices, in exchange for the possibility that Compute Engine reclaims them at short notice; fault-tolerant, checkpointed batch work with flexible deadlines is exactly where that trade-off pays off. Sole-tenant nodes cost more and address isolation or licensing needs rather than cost. A three-year commitment sized for the peak week would pay for idle capacity most of the time. Larger machines may finish faster but cost more per hour and do not deliver the savings Spot VMs do.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/spot",
    tags: ["Spot VMs", "Batch", "Cost control"]
  },
  {
    id: "gcp-cdl-474",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "GPUs for a four-day fine-tuning run",
    scenario: "A legal-tech startup needs 16 GPUs for about four days to fine-tune a model. It has no reservation, on-demand requests for that many GPUs keep failing for lack of capacity, and the job can start whenever capacity becomes available as long as all 16 GPUs arrive together. Cost matters, but the run must not be interrupted once it starts.",
    question: "Which option fits this requirement best?",
    options: [
      { id: 'A', text: "Sole-tenant nodes with GPUs, which dedicate physical hosts to the startup for isolation" },
      { id: 'B', text: "Flex-start with Dynamic Workload Scheduler, which queues the request and provisions all GPUs in one batch" },
      { id: 'C', text: "Spot VMs, which are cheapest but can be reclaimed mid-run whenever Google needs the capacity" },
      { id: 'D', text: "A three-year committed use discount on 16 GPUs, reserving them permanently for future use" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dynamic Workload Scheduler's flex-start mode is designed for time-flexible AI and ML jobs such as fine-tuning: it queues the request and provisions all the requested GPUs together when capacity is available, for up to seven days, at discounted pricing, and without long-term reservations. Spot VMs are cheaper but can be preempted, which the run cannot tolerate. A three-year commitment is far beyond a four-day need. Sole-tenant nodes address isolation and licensing, not accelerator obtainability, and cost more.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/dws",
    tags: ["Dynamic Workload Scheduler", "GPUs", "Cost control"]
  },
  {
    id: "gcp-cdl-475",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    domainName: "Scaling with Google Cloud Operations",
    title: "Which service made last month's bill jump?",
    scenario: "A logistics startup's Google Cloud bill rose 40 percent last month. The operations manager wants to see, in the console and without any setup, which projects and services drove the increase and how costs trended day by day.",
    question: "Where should the manager look first?",
    options: [
      { id: 'A', text: "Cloud Audit Logs, which list every administrative action taken in each of the projects" },
      { id: 'B', text: "The pricing calculator, which estimates costs for configurations that are being planned" },
      { id: 'C', text: "Cloud Monitoring dashboards, which chart latency and error rates for each running service" },
      { id: 'D', text: "Cloud Billing reports, which chart costs over time filtered by project, service and SKU" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cloud Billing reports are available in the console by default and chart actual costs over time with filters and grouping by project, service, SKU, location and labels, making it quick to see which areas drove an increase. Cloud Monitoring dashboards show operational metrics, not costs. The pricing calculator estimates planned configurations rather than analyzing past spending. Audit logs show who changed what but not what it cost.",
    referenceUrl: "https://docs.cloud.google.com/billing/docs/reports",
    tags: ["Cloud Billing reports", "Cost visibility"]
  }
];

export default GCP_CDL_QUESTIONS_19;
