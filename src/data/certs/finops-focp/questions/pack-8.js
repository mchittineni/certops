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
      { id: 'A', text: "Automated compute downscaling" },
      { id: 'B', text: "Decommissioning all test environments immediately" },
      { id: 'C', text: "Purchasing 3-year upfront reserved instances" },
      { id: 'D', text: "Cost allocation and tagging metadata governance" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "By canceling the shared Kubernetes cluster and forcing teams onto isolated hardware" },
      { id: 'B', text: "By completely hiding shared costs from all engineering dashboards" },
      { id: 'C', text: "By establishing a defined allocation model (such as proportional split based on direct usage or fixed percentage) to distribute shared costs transparently" },
      { id: 'D', text: "By billing the entire shared cost randomly to the smallest development squad" }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "FOCUS (FinOps Open Cost and Usage Specification)" },
      { id: 'C', text: "The OpenAPI specification" },
      { id: 'D', text: "The ISO 9001 quality framework" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Static budget alerting" },
      { id: 'B', text: "Software license amortization" },
      { id: 'C', text: "Unit economics" },
      { id: 'D', text: "Invoice reconciliation" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Purchasing a portfolio of Reserved Instances or flexible Savings Plans / Committed Use Discounts" },
      { id: 'B', text: "Paying standard on-demand hourly rates permanently" },
      { id: 'C', text: "Migrating all production workloads to spot instances exclusively" },
      { id: 'D', text: "Terminating 50% of the virtual machines every night" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Adding more storage disks to the virtual machines" },
      { id: 'B', text: "Rightsizing the virtual machines to smaller, appropriately sized instance families" },
      { id: 'C', text: "Upgrading the virtual machines to memory-optimized instances" },
      { id: 'D', text: "Purchasing additional reserved instances for the idle machines" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Attaching all unattached disks to a single random virtual machine" },
      { id: 'B', text: "Deleting or archiving orphaned and zombie resources to stop unnecessary ongoing storage and leasing fees" },
      { id: 'C', text: "Upgrading the unattached disks to Ultra SSD performance tiers" },
      { id: 'D', text: "Ignoring the resources because unattached disks are free of charge" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Quarterly manual cost depreciation reporting" },
      { id: 'B', text: "Real-time anomaly management and automated alerting" },
      { id: 'C', text: "End-of-month invoice review" },
      { id: 'D', text: "Annual vendor procurement renegotiation" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "On-demand instances" },
      { id: 'B', text: "Dedicated hosts" },
      { id: 'C', text: "Standard 1-year reserved instances" },
      { id: 'D', text: "Spot instances (or Preemptible VMs)" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Gross list price view" },
      { id: 'B', text: "Amortized cost view" },
      { id: 'C', text: "Unblended cash cost view" },
      { id: 'D', text: "Retail on-demand view" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Assuming all container pods consume identical resources" },
      { id: 'B', text: "Measuring resource requests and consumption by namespace and pod labels within shared clusters" },
      { id: 'C', text: "Splitting the total cluster bill evenly among all company employees" },
      { id: 'D', text: "Disabling Kubernetes metrics server to save cluster memory" }
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
      { id: 'C', text: "Automated lifecycle management rules that transition aging objects to cooler, cheaper tiers" },
      { id: 'D', text: "Keeping all data permanently on the highest-performance tier" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Blending historical trend analysis with planned business growth drivers" },
      { id: 'B', text: "Relying exclusively on last year's on-premises budget numbers" },
      { id: 'C', text: "Setting arbitrary budget caps without consulting engineering" },
      { id: 'D', text: "Assuming zero cloud cost growth regardless of product expansion" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Prohibiting development teams from creating test accounts" },
      { id: 'B', text: "Deleting database backups to reduce cloud footprint" },
      { id: 'C', text: "Identifying over-provisioned, idle, orphaned, or unutilized cloud resources" },
      { id: 'D', text: "Viewing all production cloud computing as unavoidable waste" }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "Unblended rates apply only to network data egress" },
      { id: 'C', text: "Unblended rates reflect actual account-specific costs, while blended rates average costs across an organization" },
      { id: 'D', text: "Both terms describe physical server rack electricity usage" }
    ],
    correctAnswers: ['C'],
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
      { id: 'B', text: "Asking engineers to memorize all tag names without validation" },
      { id: 'C', text: "Allowing any arbitrary spelling and format for cost center tags" },
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
      { id: 'B', text: "Disputing all cloud invoices automatically every month" },
      { id: 'C', text: "Paying invoices immediately without verifying usage details" },
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
      { id: 'A', text: "Establishing transparent, mutually agreed allocation rules for shared infrastructure before charging budgets" },
      { id: 'B', text: "Charging the entire company cloud bill to the human resources department" },
      { id: 'C', text: "Eliminating all cost accounting to keep teams happy" },
      { id: 'D', text: "Hiding cloud invoices to avoid organizational conflict" }
    ],
    correctAnswers: ['A'],
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
    title: "FinOps Optimization Scenario #1",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #1?",
    options: [
      { id: 'A', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'B', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'C', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'D', text: "Disabling all telemetry and cost reporting tools to save storage space" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-195",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #2",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #2?",
    options: [
      { id: 'A', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'B', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'C', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'D', text: "Disabling all telemetry and cost reporting tools to save storage space" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-196",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #3",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #3?",
    options: [
      { id: 'A', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'B', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'C', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'D', text: "Disabling all telemetry and cost reporting tools to save storage space" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-197",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #4",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #4?",
    options: [
      { id: 'A', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'B', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'C', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'D', text: "Disabling all telemetry and cost reporting tools to save storage space" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-198",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #5",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #5?",
    options: [
      { id: 'A', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'B', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'C', text: "Disabling all telemetry and cost reporting tools to save storage space" },
      { id: 'D', text: "Manually deleting production databases whenever monthly budgets are approached" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-199",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #6",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #6?",
    options: [
      { id: 'A', text: "Disabling all telemetry and cost reporting tools to save storage space" },
      { id: 'B', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'C', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'D', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  },
  {
    id: "focp-200",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Optimization Scenario #7",
    scenario: "A cloud operations team is analyzing workload optimization, rate negotiation, and cost allocation practices.",
    question: "Which FinOps capability or technique best addresses optimization requirement #7?",
    options: [
      { id: 'A', text: "Manually deleting production databases whenever monthly budgets are approached" },
      { id: 'B', text: "Running all computing instances on uncommitted on-demand pricing without monitoring" },
      { id: 'C', text: "Combining automated rightsizing with strategic commitment purchases and tagging governance" },
      { id: 'D', text: "Disabling all telemetry and cost reporting tools to save storage space" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps optimization requires a dual approach: optimizing usage (rightsizing and eliminating idle waste) while simultaneously optimizing rates (purchasing commitments like RIs and Savings Plans) backed by robust metadata governance.",
    referenceUrl: "https://www.finops.org/framework/capabilities/",
    tags: ["FinOps", "Optimization", "Best Practices"]
  }
];

export default FINOPS_FOCP_QUESTIONS_8;
