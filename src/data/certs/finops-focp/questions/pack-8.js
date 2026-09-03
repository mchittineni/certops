export const FINOPS_FOCP_QUESTIONS_8 = [
  {
    id: "focp-176",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Cost Allocation & Tagging Strategy",
    scenario: "A multi-tenant cloud environment has thousands of untagged resources, making it impossible to determine which team is spending money on which application.",
    question: "Which foundational FinOps capability must be established first to attribute cloud spend accurately?",
    options: [
      { id: 'A', text: "Purchasing 3-year upfront reserved instances" },
      { id: 'B', text: "Decommissioning all test environments immediately" },
      { id: 'C', text: "Cost allocation and tagging metadata governance" },
      { id: 'D', text: "Automated compute downscaling" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cost allocation is the capability of dividing cloud costs among different business units, applications, and teams. Tagging hygiene and metadata standards are foundational, providing the attribution data required for showback, chargeback, and accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Cost Allocation"]
  },
  {
    id: "focp-177",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Shared Cost Allocation Models",
    scenario: "An enterprise operates a centralized internal developer platform running shared Kubernetes clusters and common network gateways that cost 50,000 dollars per month.",
    question: "How should the FinOps team handle allocating these shared common infrastructure costs?",
    options: [
      { id: 'A', text: "By establishing a defined allocation model (such as proportional split based on direct usage or fixed percentage) to distribute shared costs transparently" },
      { id: 'B', text: "By canceling the shared Kubernetes cluster and forcing teams onto isolated hardware" },
      { id: 'C', text: "By billing the entire shared cost randomly to the smallest development squad" },
      { id: 'D', text: "By completely hiding shared costs from all engineering dashboards" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Shared costs (e.g., common platform clusters, enterprise support fees, shared network pipes) must be allocated back to business units using explicit policies, such as proportional distribution based on each team's direct spend, usage-based consumption metrics, or deliberate central absorption.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Shared Costs"]
  },
  {
    id: "focp-178",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FOCUS (FinOps Open Cost & Usage Specification)",
    scenario: "A multi-cloud enterprise struggles to normalize billing datasets because AWS, Microsoft Azure, and Google Cloud each use completely different column names and billing schemas.",
    question: "Which open-source specification established by the FinOps Foundation standardizes cloud billing data schemas across all major providers?",
    options: [
      { id: 'A', text: "The W3C Web Services Schema" },
      { id: 'B', text: "The ISO 9001 quality framework" },
      { id: 'C', text: "FOCUS (FinOps Open Cost and Usage Specification)" },
      { id: 'D', text: "The OpenAPI specification" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS (FinOps Open Cost and Usage Specification) is an open-source technical specification created by the FinOps Foundation that defines a standard billing schema and column vocabulary across cloud providers, simplifying multi-cloud cost analysis, reporting, and normalization.",
    referenceUrl: "https://focus.finops.org/",
    tags: ["FinOps", "FOCUS", "Multi-Cloud"]
  },
  {
    id: "focp-179",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Unit Economics in FinOps",
    scenario: "A streaming entertainment provider tracks cloud spend not in raw monthly totals, but as 'Cloud Cost per Active Subscriber Hour'.",
    question: "Which advanced FinOps capability is being demonstrated?",
    options: [
      { id: 'A', text: "Invoice reconciliation" },
      { id: 'B', text: "Unit economics" },
      { id: 'C', text: "Software license amortization" },
      { id: 'D', text: "Static budget alerting" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Unit economics measures cloud expenditure relative to a specific unit of business value (e.g., cost per subscriber, cost per transaction, cost per ride). This allows organizations to evaluate whether infrastructure efficiency is improving as the business scales.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Unit Economics"]
  },
  {
    id: "focp-180",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Rate Optimization - Commitment Management",
    scenario: "A central FinOps team evaluates historical compute usage across 50 production accounts and determines that baseline compute utilization never drops below 1,000 vCPUs.",
    question: "Which rate optimization strategy should the team execute to capture significant discounts?",
    options: [
      { id: 'A', text: "Terminating 50% of the virtual machines every night" },
      { id: 'B', text: "Migrating all production workloads to spot instances exclusively" },
      { id: 'C', text: "Purchasing a portfolio of Reserved Instances or flexible Savings Plans / Committed Use Discounts" },
      { id: 'D', text: "Paying standard on-demand hourly rates permanently" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rate optimization involves reducing the price paid per resource unit. By committing to consistent compute usage over a 1-year or 3-year term through Reserved Instances or Savings Plans, organizations achieve discounts up to 72% over standard on-demand rates.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Rate Optimization", "Commitments"]
  },
  {
    id: "focp-181",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Workload Optimization - Rightsizing",
    scenario: "Monitoring data reveals that a fleet of 20 virtual machines has not exceeded 10% CPU or 15% memory utilization over the past 90 days.",
    question: "Which workload optimization technique should the engineering team perform?",
    options: [
      { id: 'A', text: "Rightsizing the virtual machines to smaller, appropriately sized instance families" },
      { id: 'B', text: "Adding more storage disks to the virtual machines" },
      { id: 'C', text: "Purchasing additional reserved instances for the idle machines" },
      { id: 'D', text: "Upgrading the virtual machines to memory-optimized instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rightsizing is the practice of analyzing actual workload performance (CPU, memory, disk I/O, network) and adjusting provisioned resource sizes to match demand, eliminating wasted over-provisioned capacity.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Workload Optimization", "Rightsizing"]
  },
  {
    id: "focp-182",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Zombie / Idle Resource Cleanup",
    scenario: "A cloud audit discovers 45 unattached virtual hard disks (EBS/Managed Disks), 12 idle public IP addresses, and 300 stale database snapshots that are no longer associated with any active workloads.",
    question: "Which optimization action should be taken immediately?",
    options: [
      { id: 'A', text: "Ignoring the resources because unattached disks are free of charge" },
      { id: 'B', text: "Attaching all unattached disks to a single random virtual machine" },
      { id: 'C', text: "Upgrading the unattached disks to Ultra SSD performance tiers" },
      { id: 'D', text: "Deleting or archiving orphaned and zombie resources to stop unnecessary ongoing storage and leasing fees" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unattached storage volumes, idle public IPs, and obsolete snapshots are known as 'zombie' or orphaned resources. They continue to accrue storage and reservation costs despite providing zero business value and should be purged or archived.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Workload Optimization", "Idle Resources"]
  },
  {
    id: "focp-183",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Anomaly Detection and Alerting",
    scenario: "A developer introduces a recursive loop in a cloud-native processing script that begins writing millions of database records per minute, causing costs to spike unexpectedly by 10,000 dollars in two hours.",
    question: "Which FinOps capability is critical for detecting and alerting on this rapid spending deviation?",
    options: [
      { id: 'A', text: "End-of-month invoice review" },
      { id: 'B', text: "Quarterly manual cost depreciation reporting" },
      { id: 'C', text: "Annual vendor procurement renegotiation" },
      { id: 'D', text: "Real-time anomaly management and automated alerting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Anomaly management uses statistical modeling and machine learning to detect unexpected spikes in cloud spend in near-real-time, automatically notifying engineering teams so that root causes can be remediated before costs accumulate.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Anomaly Detection"]
  },
  {
    id: "focp-184",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Spot / Preemptible Instance Utilization",
    scenario: "A genomics research lab runs large batch computational workloads that can be interrupted at any time and resumed later without losing overall progress.",
    question: "Which purchasing model offers the deepest discounts (up to 90%) for fault-tolerant, interruptible workloads?",
    options: [
      { id: 'A', text: "Spot instances (or Preemptible VMs)" },
      { id: 'B', text: "Standard 1-year reserved instances" },
      { id: 'C', text: "Dedicated hosts" },
      { id: 'D', text: "On-demand instances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Spot instances allow customers to utilize spare, unused cloud capacity at massive discounts (up to 90% off on-demand rates). In exchange, the cloud provider can reclaim the capacity with short notice, making Spot ideal for fault-tolerant batch processing.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Rate Optimization", "Spot"]
  },
  {
    id: "focp-185",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Amortized vs Cash Cost Accounting",
    scenario: "An enterprise purchases an upfront 3-year Reserved Instance for 36,000 dollars in month one. The finance team wants monthly reports to reflect an ongoing cost of 1,000 dollars per month rather than a 36,000 dollar spike in month one followed by 35 months of zero cost.",
    question: "Which cost data view should the FinOps team use for monthly reporting?",
    options: [
      { id: 'A', text: "Amortized cost view" },
      { id: 'B', text: "Unblended cash cost view" },
      { id: 'C', text: "Gross list price view" },
      { id: 'D', text: "Retail on-demand view" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amortized cost evenly distributes the upfront cost of commitments across the entire term of the reservation, reflecting the true ongoing economic cost of running workloads each month rather than reflecting the timing of cash payments.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Accounting", "Amortization"]
  },
  {
    id: "focp-186",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Kubernetes Cost Allocation",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for kubernetes cost allocation.",
    question: "Which mechanism or practice accurately reflects kubernetes cost allocation?",
    options: [
      { id: 'A', text: "Disabling Kubernetes metrics server to save cluster memory" },
      { id: 'B', text: "Measuring resource requests and consumption by namespace and pod labels within shared clusters" },
      { id: 'C', text: "Assuming all container pods consume identical resources" },
      { id: 'D', text: "Splitting the total cluster bill evenly among all company employees" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Allocating container costs requires specialized tooling to monitor CPU and memory requests by namespace, pod, and label within shared Kubernetes clusters. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Kubernetes"]
  },
  {
    id: "focp-187",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Storage Lifecycle Policies",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for storage lifecycle policies.",
    question: "Which mechanism or practice accurately reflects storage lifecycle policies?",
    options: [
      { id: 'A', text: "Disabling all backups and snapshots to save disk space" },
      { id: 'B', text: "Manually downloading and deleting files from storage every week" },
      { id: 'C', text: "Keeping all data permanently on the highest-performance tier" },
      { id: 'D', text: "Automated lifecycle management rules that transition aging objects to cooler, cheaper tiers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring automated storage lifecycle rules automatically moves unstructured data from hot tiers to cool or archive tiers based on file age, significantly reducing storage spend. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Storage"]
  },
  {
    id: "focp-188",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Forecasting Methodologies",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for forecasting methodologies.",
    question: "Which mechanism or practice accurately reflects forecasting methodologies?",
    options: [
      { id: 'A', text: "Assuming zero cloud cost growth regardless of product expansion" },
      { id: 'B', text: "Setting arbitrary budget caps without consulting engineering" },
      { id: 'C', text: "Relying exclusively on last year's on-premises budget numbers" },
      { id: 'D', text: "Blending historical trend analysis with planned business growth drivers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FinOps forecasting combines historical baseline trends with future business drivers (such as marketing campaigns or customer onboarding targets) to predict spend. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Forecasting"]
  },
  {
    id: "focp-189",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Cloud Waste Identification",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for cloud waste identification.",
    question: "Which mechanism or practice accurately reflects cloud waste identification?",
    options: [
      { id: 'A', text: "Viewing all production cloud computing as unavoidable waste" },
      { id: 'B', text: "Identifying over-provisioned, idle, orphaned, or unutilized cloud resources" },
      { id: 'C', text: "Prohibiting development teams from creating test accounts" },
      { id: 'D', text: "Deleting database backups to reduce cloud footprint" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud waste includes over-provisioned VMs, unattached disks, idle load balancers, and non-production environments running 24/7 without active workloads. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Cloud"]
  },
  {
    id: "focp-190",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Blended vs Unblended Rates",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for blended vs unblended rates.",
    question: "Which mechanism or practice accurately reflects blended vs unblended rates?",
    options: [
      { id: 'A', text: "Blended rates are illegal under international tax treaties" },
      { id: 'B', text: "Unblended rates reflect actual account-specific costs, while blended rates average costs across an organization" },
      { id: 'C', text: "Both terms describe physical server rack electricity usage" },
      { id: 'D', text: "Unblended rates apply only to network data egress" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Unblended rates show the actual rate charged to a specific account, whereas blended rates average the rate across all accounts in an enterprise organization. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Blended"]
  },
  {
    id: "focp-191",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Tagging Enforcement via Policy",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for tagging enforcement via policy.",
    question: "Which mechanism or practice accurately reflects tagging enforcement via policy?",
    options: [
      { id: 'A', text: "Enforcing automated policies that reject or audit resources deployed without required tags" },
      { id: 'B', text: "Allowing any arbitrary spelling and format for cost center tags" },
      { id: 'C', text: "Asking engineers to memorize all tag names without validation" },
      { id: 'D', text: "Removing tagging requirements to speed up deployment times" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using automated governance policies (such as Azure Policy) ensures that newly deployed resources without mandatory cost allocation tags are immediately blocked or audited. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Tagging"]
  },
  {
    id: "focp-192",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Cloud Invoice Reconciliation",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for cloud invoice reconciliation.",
    question: "Which mechanism or practice accurately reflects cloud invoice reconciliation?",
    options: [
      { id: 'A', text: "Refusing to itemize cloud expenses in corporate accounting" },
      { id: 'B', text: "Paying invoices immediately without verifying usage details" },
      { id: 'C', text: "Disputing all cloud invoices automatically every month" },
      { id: 'D', text: "Verifying that billed usage and applied discounts match enterprise contract terms and internal records" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Reconciling monthly cloud billing data against enterprise financial ledgers ensures that billed items match contracted enterprise discounts and usage. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Cloud"]
  },
  {
    id: "focp-193",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Chargeback Implementation Challenges",
    scenario: "An enterprise cloud financial operations team is implementing optimization practices and metrics for chargeback implementation challenges.",
    question: "Which mechanism or practice accurately reflects chargeback implementation challenges?",
    options: [
      { id: 'A', text: "Eliminating all cost accounting to keep teams happy" },
      { id: 'B', text: "Hiding cloud invoices to avoid organizational conflict" },
      { id: 'C', text: "Charging the entire company cloud bill to the human resources department" },
      { id: 'D', text: "Establishing transparent, mutually agreed allocation rules for shared infrastructure before charging budgets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing chargeback often encounters political resistance regarding shared platform costs, requiring clear allocation agreements before enforcement. Establishing mature FinOps capabilities drives measurable optimization and financial accountability.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Capabilities", "Chargeback"]
  },
  {
    id: "focp-194",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Managing Commitment Risk and Utilization vs. Coverage",
    scenario: "A cloud financial manager reviews the organization's compute spending and notices that while commitment coverage is at 92%, commitment utilization has dropped to 74% over the last two months, leading to unutilized commitment waste.",
    question: "Which metric and action should the FinOps practitioner prioritize to resolve this discrepancy?",
    options: [
      { id: 'A', text: "Switch all production workloads immediately to uncommitted on-demand pricing" },
      { id: 'B', text: "Analyze hourly commitment utilization curves to right-size future commitments and exchange or sell underutilized flexible commitments" },
      { id: 'C', text: "Delete underutilized application instances without consulting engineering stakeholders" },
      { id: 'D', text: "Purchase additional 3-year all-upfront commitments to force coverage up to 100%" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "High coverage paired with low utilization indicates over-commitment: the organization has purchased commitments exceeding its steady-state baseline. The FinOps team must analyze hourly utilization curves to identify non-working hours dips, exchange convertible reservations or reallocate commitments across organizational units.",
    referenceUrl: "https://www.finops.org/framework/capabilities/rate-optimization/",
    tags: ["Rate Optimization", "Commitments", "Utilization", "Coverage"]
  },
  {
    id: "focp-195",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Handling Shared Unallocated Cloud Costs",
    scenario: "An enterprise has $150,000 per month in shared cloud infrastructure costs—including AWS Support charges, shared Transit Gateways, and centralized Kubernetes cluster management—that cannot be directly attributed via resource tags.",
    question: "Which cost allocation strategy aligns with FinOps best practices for equitable cost distribution?",
    options: [
      { id: 'A', text: "Ignore shared costs in departmental chargeback statements and absorb them into general company overhead" },
      { id: 'B', text: "Establish a proportional cost allocation model that distributes shared costs based on each business unit's percentage of total attributed direct spend" },
      { id: 'C', text: "Allocate 100% of the unallocated shared costs directly to the central IT department's budget" },
      { id: 'D', text: "Evenly divide the total dollar cost by the number of active IAM users regardless of resource usage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps best practices recommend establishing agreed-upon cost allocation rules for shared services: distributing costs proportionally based on relative direct spend, fixed percentage splits, or consumption telemetry (e.g. CPU/memory requests in shared Kubernetes clusters).",
    referenceUrl: "https://www.finops.org/framework/capabilities/cost-allocation/",
    tags: ["Cost Allocation", "Shared Costs", "Chargeback", "Governance"]
  },
  {
    id: "focp-196",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Rightsizing Compute vs. Modernizing Architecture",
    scenario: "An engineering team operates 200 legacy x86 virtual machines running Java web services with average CPU utilization below 15%. Finance wants to reduce monthly compute spend by 40%.",
    question: "Which sequenced workload optimization strategy should the FinOps team recommend?",
    options: [
      { id: 'A', text: "Convert all workloads to multi-tenant serverless functions without profiling execution duration" },
      { id: 'B', text: "Terminate 50% of the instances at random to meet the financial target immediately" },
      { id: 'C', text: "First downsize over-provisioned instances based on p95 memory and CPU metrics, and then evaluate migrating eligible workloads to modern ARM-based instances (like Graviton)" },
      { id: 'D', text: "Immediately purchase 3-year all-upfront Reserved Instances for the existing instance sizes to lock in maximum discount" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Workload optimization must precede rate optimization. Committing to over-provisioned instance sizes locks in waste. The correct sequence is rightsizing existing machines based on historical peak utilization metrics, modernizing to cost-efficient architectures (such as ARM Graviton), and only then purchasing commitments for the remaining baseline.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Workload Optimization", "Rightsizing", "Graviton", "Compute"]
  },
  {
    id: "focp-197",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Cloud Cost Anomaly Detection Thresholds",
    scenario: "A media streaming service experiences regular weekend traffic spikes of 300% that are normal business behavior. However, their legacy static billing alert triggered false alarms every Sunday, causing alert fatigue.",
    question: "How should the FinOps team configure automated anomaly detection to separate expected spikes from genuine waste leaks?",
    options: [
      { id: 'A', text: "Raise the static dollar alert threshold to a level that will never trigger during weekends" },
      { id: 'B', text: "Implement machine-learning-based dynamic anomaly detection that evaluates contextual baselines and historical day-of-week seasonality" },
      { id: 'C', text: "Disable all alerting systems and rely exclusively on monthly invoice reconciliation" },
      { id: 'D', text: "Mandate that engineers manually disable alerting scripts every Friday afternoon" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Modern cloud cost anomaly detection leverages machine learning algorithms that understand cyclical patterns, daily variance, and day-of-week seasonality. This dynamically adapts the expected spending baseline to prevent false alarms during normal weekend spikes while rapidly flagging unexpected mid-week anomalies.",
    referenceUrl: "https://www.finops.org/framework/capabilities/manage-anomalies/",
    tags: ["Anomaly Management", "Seasonality", "Machine Learning", "Alerts"]
  },
  {
    id: "focp-198",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Unit Economics: Measuring Cloud Spend Against Business Value",
    scenario: "An executive asks the FinOps team why total cloud spending grew from $200,000 to $350,000 in Q3. The engineering team claims infrastructure is more efficient than ever.",
    question: "Which FinOps metric best demonstrates whether the cloud spend increase represents healthy business growth or operational waste?",
    options: [
      { id: 'A', text: "The total number of running virtual machines in the production subscription" },
      { id: 'B', text: "The raw variance in total invoice amount between Q2 and Q3" },
      { id: 'C', text: "Unit cost metrics, such as 'Cloud cost per active subscriber' or 'Cloud cost per customer transaction processed'" },
      { id: 'D', text: "The percentage of team members who have completed FinOps certification" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Unit economics connects cloud expenditure directly to business outcomes. If total cloud spend grew by 75% while customer transactions grew by 150%, the cost per transaction actually decreased by 30%, demonstrating improved operational efficiency and profitable business scaling.",
    referenceUrl: "https://www.finops.org/framework/capabilities/unit-economics/",
    tags: ["Unit Economics", "KPIs", "Business Value", "FinOps"]
  },
  {
    id: "focp-199",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Evaluating Cloud Storage Tiering and Lifecycle Costs",
    scenario: "An analytics platform stores 5 petabytes of historical clickstream logs in standard object storage. Data is accessed heavily during the first 14 days, rarely during the next 60 days, and only for regulatory compliance thereafter.",
    question: "Which storage optimization policy produces the lowest total cost of ownership without impacting compliance?",
    options: [
      { id: 'A', text: "Delete all log files older than 14 days to eliminate ongoing storage costs entirely" },
      { id: 'B', text: "Retain all data in Standard object storage indefinitely to avoid retrieval and transition fees" },
      { id: 'C', text: "Immediately move all data to Deep Archive on day 1 to achieve the lowest raw storage rate" },
      { id: 'D', text: "Implement an automated lifecycle policy: transition to Infrequent Access after 30 days, to Archive/Glacier after 90 days, with automated deletion after 7 years" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Storage optimization requires aligning storage classes with data access lifecycles. Moving data to Infrequent Access after 30 days and cold archive after 90 days balances transition fees against long-term storage savings, while meeting regulatory retention requirements.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Storage Optimization", "Lifecycle", "Archival", "S3"]
  },
  {
    id: "focp-200",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Showback vs. Chargeback in FinOps Maturity",
    scenario: "A company currently in the 'Crawl' stage of FinOps maturity wants to implement financial accountability across 15 newly onboarded development teams.",
    question: "What is the recommended evolutionary path between Showback and Chargeback?",
    options: [
      { id: 'A', text: "Immediately dock engineering departments' corporate bank accounts using aggressive Chargeback on day one" },
      { id: 'B', text: "Start with Showback to build cost awareness and establish trust in reporting data before transitioning to automated Chargeback cross-charging" },
      { id: 'C', text: "Permanently avoid Showback because non-financial teams cannot understand raw billing figures" },
      { id: 'D', text: "Rely solely on manual paper invoices mailed to department heads once a year" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In the early Crawl/Walk phases, Showback fosters cost visibility and psychological accountability without immediate financial friction. Once tagging coverage is high, allocation methodologies are verified, and teams understand their drivers, organizations can transition smoothly to formal accounting Chargeback.",
    referenceUrl: "https://www.finops.org/framework/capabilities/chargeback-showback/",
    tags: ["Showback", "Chargeback", "FinOps Maturity", "Culture"]
  }
];

export default FINOPS_FOCP_QUESTIONS_8;
