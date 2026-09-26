export const GCP_CDL_FLASHCARDS_19 = [
  {
    id: "gcp-cdl-fc-451",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "CapEx vs OpEx: what is the difference, and which way does cloud shift spending?",
    hint: "Buy up front and depreciate, or pay as you go.",
    back: "<strong>Capital expenditure (CapEx)</strong> is money spent up front on long-lived assets, such as servers and data centers, and depreciated over years. <strong>Operational expenditure (OpEx)</strong> is ongoing spending on services consumed, expensed as it occurs. Moving to the cloud shifts IT from CapEx to <strong>OpEx</strong>: no big hardware purchases, costs that track usage, and less capital tied up in equipment.",
    tags: ["CapEx", "OpEx"]
  },
  {
    id: "gcp-cdl-fc-452",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What belongs in an on-premises total cost of ownership calculation?",
    hint: "Far more than the price tag on the servers.",
    back: "<strong>Direct costs</strong>: hardware and its refresh cycles, software licences and support, data center space, power and cooling, network connectivity. <strong>Indirect costs</strong>: staff to operate, patch and secure systems, capacity bought for peaks that sits idle, downtime, and the opportunity cost of slow provisioning. A fair comparison also adds one-time <strong>migration costs</strong> to the cloud side.",
    tags: ["TCO"]
  },
  {
    id: "gcp-cdl-fc-453",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "How can cloud lower TCO even when a VM costs more per hour than an owned server?",
    hint: "Think about utilization and the people involved.",
    back: "On-premises capacity is sized for the <strong>peak</strong> and sits idle much of the time, while cloud resources scale with demand and can be switched off. Managed services remove much of the <strong>operational labor</strong> of patching, backups and hardware care, and faster provisioning adds business value. Comparing unit prices alone ignores idle capacity, staff time, facilities and refresh cycles.",
    tags: ["TCO", "Cloud economics"]
  },
  {
    id: "gcp-cdl-fc-454",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Sustained use discounts vs committed use discounts?",
    hint: "One happens automatically; one needs a promise.",
    back: "<strong>Sustained use discounts</strong> apply <strong>automatically</strong> to eligible Compute Engine machine series, such as N1 and N2, the longer a VM runs in a month, with no commitment. <strong>Committed use discounts</strong> require committing to usage or spend for <strong>one or three years</strong> in return for deeper discounts. Use SUDs as a free bonus for steady VMs, and CUDs for a predictable baseline you are confident will persist.",
    tags: ["Sustained use discounts", "Committed use discounts"]
  },
  {
    id: "gcp-cdl-fc-455",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Resource-based vs spend-based committed use discounts: which is more flexible?",
    hint: "Commit to machines, or commit to dollars.",
    back: "<strong>Resource-based CUDs</strong> commit to specific amounts of vCPU, memory, GPUs or local SSD in one region and machine series, for the deepest discounts but little flexibility. <strong>Spend-based (flexible) CUDs</strong> commit to a minimum <strong>hourly spend</strong>, and the discount applies across eligible machine families and regions, or to services such as Cloud SQL and Cloud Run, trading a smaller discount for freedom to change architecture.",
    tags: ["Committed use discounts"]
  },
  {
    id: "gcp-cdl-fc-456",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What is FinOps?",
    hint: "Finance plus DevOps, as a cultural practice.",
    back: "<strong>FinOps</strong> (cloud financial operations) is an operating model and culture in which <strong>finance, technology and business teams</strong> work together to manage cloud costs, making spending visible, assigning accountability, and making data-driven trade-offs between speed, cost and quality so the organization gets the most business value from the cloud.",
    tags: ["FinOps", "Financial governance"]
  },
  {
    id: "gcp-cdl-fc-457",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Who should manage cloud costs, according to Google's recommended practice?",
    hint: "Not finance alone and not engineering alone.",
    back: "A <strong>centralized, cross-functional team</strong>, often part of a cloud center of excellence, owns cost governance: it sets policies, budgets and tagging standards, provides reports and tools, and works with <strong>finance</strong> (forecasting and accounting), <strong>technology</strong> (architecture and optimization), and <strong>business owners</strong> (value and priorities). Individual teams stay accountable for the costs they create.",
    tags: ["Financial governance", "Cloud center of excellence"]
  },
  {
    id: "gcp-cdl-fc-458",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Billing Account Administrator, User and Viewer: what can each do?",
    hint: "Manage everything, attach projects, or just look.",
    back: "<strong>Billing Account Administrator</strong> manages the billing account: payment settings, permissions, budgets and linking. <strong>Billing Account User</strong> can link projects to the billing account, combined with project permissions, so their usage is charged there. <strong>Billing Account Viewer</strong> can see cost information and transactions but change nothing, which suits finance and auditors. <strong>Billing Account Costs Manager</strong> can manage budgets and view and export costs.",
    tags: ["Cloud Billing", "IAM roles"]
  },
  {
    id: "gcp-cdl-fc-459",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Labels vs tags in Google Cloud: which do you use for cost reporting and which for policy?",
    hint: "Both are key-value pairs; only one controls access.",
    back: "<strong>Labels</strong> are key-value metadata on resources, used to <strong>organize, filter and allocate costs</strong>; they appear in billing reports and the billing export but have no effect on access. <strong>Tags</strong> are key-value resources managed centrally in Resource Manager, inherited through the hierarchy, and used to <strong>drive policy</strong>, such as conditional IAM grants, organization policies and firewall policies.",
    tags: ["Labels", "Tags", "Cost allocation"]
  },
  {
    id: "gcp-cdl-fc-460",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Billing reports, cost table, BigQuery export: when do you use each?",
    hint: "Charts, invoice detail, and custom analysis.",
    back: "<strong>Billing reports</strong> chart cost trends in the console with filters for project, service, SKU, location and labels, good for spotting what changed. The <strong>cost table</strong> shows invoice- or statement-level detail for reconciling bills. <strong>Billing export to BigQuery</strong> provides detailed data for custom SQL analysis, long history, joins with business data and Looker Studio dashboards.",
    tags: ["Cloud Billing reports", "BigQuery export"]
  },
  {
    id: "gcp-cdl-fc-461",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Cost control needs people, process and technology: give one example of each.",
    hint: "Culture, routine, tools.",
    back: "<strong>People</strong>: a culture of cost awareness where teams see and own their spending. <strong>Process</strong>: a regular cost review with owners, tagging standards and agreed handling of recommendations. <strong>Technology</strong>: tools such as budgets and alerts, quotas, billing reports and exports, and Recommender. Tools without owners and routines rarely reduce costs.",
    tags: ["People process technology", "Cost governance"]
  },
  {
    id: "gcp-cdl-fc-462",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What kinds of cost savings does Recommender (Active Assist) surface?",
    hint: "Too big, unused, or better as a commitment.",
    back: "<strong>Rightsizing</strong> overprovisioned VMs to smaller machine types, stopping or deleting <strong>idle resources</strong> such as unused VMs, persistent disks and IP addresses, and <strong>commitment recommendations</strong> for committed use discounts based on steady usage. Each comes with estimated savings, and recommendations can be applied from the console or automated.",
    tags: ["Recommender", "Active Assist", "Cost optimization"]
  },
  {
    id: "gcp-cdl-fc-463",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "List the Google Cloud resource hierarchy from top to bottom.",
    hint: "Four levels; one of them is optional and can nest.",
    back: "<strong>Organization</strong> (the root, tied to a company domain), <strong>folders</strong> (optional, nestable groupings such as departments or environments), <strong>projects</strong> (containers that hold resources, enable APIs and link to billing), and <strong>resources</strong> (VMs, buckets, datasets and so on). Policies set higher in the hierarchy are inherited by everything below.",
    tags: ["Resource hierarchy"]
  },
  {
    id: "gcp-cdl-fc-464",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Where does the organization node come from, and why does it matter?",
    hint: "It is linked to your company's identity domain.",
    back: "The <strong>organization resource</strong> is created for a company that has a <strong>Google Workspace or Cloud Identity</strong> account, and it represents that domain. It gives the company central ownership of all projects, so they survive employees leaving, plus a single place to apply organization-wide IAM, organization policies and security tooling. Without it, projects belong to individual users.",
    tags: ["Organization", "Resource hierarchy", "Cloud Identity"]
  },
  {
    id: "gcp-cdl-fc-465",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What are folders used for in the resource hierarchy?",
    hint: "Grouping projects the way the business is organized.",
    back: "<strong>Folders</strong> group projects, and other folders, under the organization to mirror departments, business units, teams or environments such as production and development. Access grants and organization policies set on a folder are <strong>inherited</strong> by everything inside it, so administration happens once per group instead of once per project.",
    tags: ["Folders", "Resource hierarchy"]
  },
  {
    id: "gcp-cdl-fc-466",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "IAM allow policies vs organization policies: how does inheritance differ?",
    hint: "One only adds; the other can be customized lower down.",
    back: "<strong>IAM allow policies</strong> are additive: effective access is the union of grants on a resource and all its ancestors, so a lower level cannot take away an inherited grant (only a deny policy can block it). <strong>Organization policies</strong> are inherited by default, but a folder or project can set its own policy that <strong>overrides or merges with</strong> the parent's, unless administrators restrict who may change it.",
    tags: ["IAM", "Organization policy", "Inheritance"]
  },
  {
    id: "gcp-cdl-fc-467",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Project name, project ID, project number: which can you change?",
    hint: "One label for people, one permanent ID you choose, one ID Google assigns.",
    back: "The <strong>project name</strong> is a human-friendly label that you can change and need not be unique. The <strong>project ID</strong> is chosen at creation, must be <strong>globally unique</strong> and <strong>cannot be changed</strong>; it appears in APIs and resource names. The <strong>project number</strong> is generated by Google and is also permanent.",
    tags: ["Projects", "Resource hierarchy"]
  },
  {
    id: "gcp-cdl-fc-468",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Does a Cloud Billing budget stop spending when it is reached?",
    hint: "Budgets talk; they do not act.",
    back: "<strong>No.</strong> A budget sends <strong>alerts</strong> when actual or forecasted costs cross threshold rules, but resources keep running and charges keep accruing. To enforce a hard stop, send budget notifications to <strong>Pub/Sub</strong> and trigger automation, such as a Cloud Run function, that disables billing or shuts resources down. To prevent overuse in advance, use quotas.",
    tags: ["Budgets", "Cost control"]
  },
  {
    id: "gcp-cdl-fc-469",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "What can a Cloud Billing budget be scoped to, and what can it alert on?",
    hint: "Not just the whole bill.",
    back: "A budget can cover an entire billing account or be filtered to specific <strong>projects, services, labels</strong> or other scopes, with a fixed amount or one based on last period's spend. Threshold rules, such as 50%, 90% and 100%, can trigger on <strong>actual</strong> spending or on <strong>forecasted</strong> spending for the period, and alerts go by email or programmatically through Pub/Sub.",
    tags: ["Budgets"]
  },
  {
    id: "gcp-cdl-fc-470",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Rate quotas vs allocation quotas: what does each limit?",
    hint: "How fast vs how many.",
    back: "<strong>Rate quotas</strong> limit how many requests can be made to an API or service in a period, such as calls per minute. <strong>Allocation quotas</strong> limit how many of a resource a project can have at once, such as VMs, GPUs or IP addresses. Quotas protect Google's shared capacity and customers alike, and customers can lower their own quota values to <strong>cap consumption</strong> in a project.",
    tags: ["Quotas"]
  },
  {
    id: "gcp-cdl-fc-471",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Spot VMs vs preemptible VMs: what is the difference?",
    hint: "Same discount idea; one has a time limit.",
    back: "Both are heavily discounted Compute Engine VMs that Google can reclaim with short notice when it needs the capacity. <strong>Preemptible VMs</strong> also stop after at most <strong>24 hours</strong>. <strong>Spot VMs</strong> are the newer option with <strong>no maximum runtime</strong>. Both suit fault-tolerant, interruptible work such as batch processing, rendering and CI jobs, not production databases.",
    tags: ["Spot VMs", "Preemptible VMs"]
  },
  {
    id: "gcp-cdl-fc-472",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Google Cloud Customer Care: how do Standard, Enhanced and Premium Support differ?",
    hint: "Response speed for critical cases, and who gets a named contact.",
    back: "<strong>Standard Support</strong> suits workloads in development or light production, with technical support but no fastest-tier response for critical outages. <strong>Enhanced Support</strong> adds <strong>24/7 response for critical (P1) issues within an hour</strong> for business-critical production. <strong>Premium Support</strong> targets mission-critical estates with a <strong>15-minute P1 response</strong> and a named <strong>Technical Account Manager</strong> for proactive guidance. Free Basic Support covers billing questions only.",
    tags: ["Customer Care", "Support"]
  },
  {
    id: "gcp-cdl-fc-473",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Quota or budget: which one prevents overuse, and which one warns about cost?",
    hint: "A limit vs an alarm.",
    back: "A <strong>quota</strong> is a hard limit on how much of a resource a project can use, so it <strong>prevents</strong> overuse, for example capping GPUs in a sandbox. A <strong>budget</strong> tracks money against a planned amount and <strong>warns</strong> with alerts when thresholds are crossed. Use quotas for guardrails, budgets for financial visibility, and both together for strong control.",
    tags: ["Quotas", "Budgets"]
  },
  {
    id: "gcp-cdl-fc-474",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Pricing calculator vs Cloud Billing reports: which do you use when?",
    hint: "Before you build vs after you run.",
    back: "The <strong>pricing calculator</strong> estimates the cost of a <strong>planned</strong> configuration before anything is deployed, useful for business cases and budgets. <strong>Cloud Billing reports</strong> show <strong>actual</strong> costs of resources that are already running, useful for tracking trends and investigating increases.",
    tags: ["Pricing calculator", "Cloud Billing reports"]
  },
  {
    id: "gcp-cdl-fc-475",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d6",
    front: "Showback vs chargeback?",
    hint: "Show the number, or move the money.",
    back: "<strong>Showback</strong> reports each team's cloud costs to them for awareness without moving money between budgets. <strong>Chargeback</strong> actually bills those costs to each team's budget. Both depend on reliable cost allocation, usually consistent <strong>labels</strong> or project structure, and showback is often the first step before chargeback.",
    tags: ["Cost allocation", "Financial governance"]
  }
];

export default GCP_CDL_FLASHCARDS_19;
