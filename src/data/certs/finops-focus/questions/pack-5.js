export const FINOPS_FOCUS_QUESTIONS_5 = [
  {
    id: "finops-focus-101",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ListCost and ContractedCost: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading organization, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The FinOps cloud economics team is currently measuring negotiated discount savings and roi under reporting cycle 5.1.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these high-frequency fintech trading financial criteria for focus listcost and contractedcost?",
    options: [
      { id: 'A', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'B', text: "Assume public website retail prices reflect actual enterprise contracted spending." },
      { id: 'C', text: "Delete list cost data from billing tables because it is not invoiced." },
      { id: 'D', text: "Manually recalculate negotiated enterprise discounts on a handheld calculator." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS provides transparent price benchmarking by defining 'ListCost' (public retail rate), 'ContractedCost' (negotiated enterprise discount rate), and 'EffectiveCost' (rate after commitments). The difference between ListCost and EffectiveCost quantifies the total financial value delivered by FinOps procurement.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost", "contracted-cost", "savings", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-102",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Tags Dimension and JSON Normalization: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa organization, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The FinOps cloud economics team is currently unifying tag structures for cost allocation and ownership under reporting cycle 5.2.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these healthcare patient records & hipaa financial criteria for focus tags dimension and json normalization?",
    options: [
      { id: 'A', text: "Export 50 separate tag columns that vary wildly between AWS, Azure, and Google Cloud schemas." },
      { id: 'B', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'C', text: "Prohibit engineering squads from applying tags to cloud resources." },
      { id: 'D', text: "Store all tags in unindexed plaintext server log files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In FOCUS, resource tags are normalized into a unified, queryable key-value map or JSON object column named 'Tags'. This eliminates schema sprawl and allows FinOps analysts to write single SQL queries that allocate costs by application, environment, or business unit across multi-cloud estates.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags", "allocation", "metadata", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-103",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Specification Core Purpose: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale organization, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The FinOps cloud economics team is currently open standard for cloud cost and usage data normalization under reporting cycle 5.3.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these global e-commerce black friday scale financial criteria for focus specification core purpose?",
    options: [
      { id: 'A', text: "Write custom proprietary ETL scripts with disparate column names for every cloud vendor without standard taxonomy." },
      { id: 'B', text: "Force all cloud providers to change their underlying billing calculation engines." },
      { id: 'C', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'D', text: "Rely exclusively on monthly PDF invoices printed from vendor billing portals." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The FinOps Open Cost & Usage Specification (FOCUS) is a Linux Foundation open standard that defines a common schema and terminology for cloud billing data. It establishes consistent column definitions, metrics, and dimensions across multi-cloud and SaaS providers, eliminating bespoke vendor normalization pipelines.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus", "finops", "specification", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-104",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "BilledCost vs EffectiveCost in FOCUS: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry organization, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The FinOps cloud economics team is currently understanding invoice cash accounting vs amortized economic cost under reporting cycle 5.4.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these autonomous vehicle telemetry financial criteria for billedcost vs effectivecost in focus?",
    options: [
      { id: 'A', text: "Use BilledCost to charge engineering squads when a $50,000 upfront annual reservation payment is made on day one." },
      { id: 'B', text: "Assume BilledCost and EffectiveCost are identical values in all billing rows." },
      { id: 'C', text: "Delete the BilledCost column to simplify data warehousing pipelines." },
      { id: 'D', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In FOCUS, 'BilledCost' represents the actual charge appearing on the invoice for the billing period (cash accounting), while 'EffectiveCost' reflects the true amortized economic cost of usage, factoring in blended discounts, upfront commitments, and credit consumption for accurate chargeback.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost", "effective-cost", "chargeback", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-105",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ChargeCategory and ChargeSubcategory: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform organization, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The FinOps cloud economics team is currently classifying billing charges across usage, purchase, tax, and credits under reporting cycle 5.5.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these multi-tenant b2b saas platform financial criteria for focus chargecategory and chargesubcategory?",
    options: [
      { id: 'A', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." },
      { id: 'B', text: "Write regex string patterns against raw vendor service descriptions to guess whether a line is a credit or usage." },
      { id: 'C', text: "Filter out all tax and adjustment rows from financial reporting databases." },
      { id: 'D', text: "Assume all line items represent compute infrastructure usage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS standardizes transaction types via 'ChargeCategory' into well-defined enumerations: 'Usage' (on-demand resource consumption), 'Purchase' (commitment upfront/recurring payments), 'Tax', 'Adjustment', and 'Credit', allowing automated financial categorization without vendor-specific regex.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category", "taxonomy", "accounting", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-106",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Column Taxonomy for Resource Hierarchy: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn organization, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The FinOps cloud economics team is currently standardizing provider, account, and resource identity under reporting cycle 5.6.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these media streaming & global cdn financial criteria for focus column taxonomy for resource hierarchy?",
    options: [
      { id: 'A', text: "Maintain disparate column names like 'LinkedAccountId', 'SubscriptionId', and 'ProjectID' in separate unjoined tables." },
      { id: 'B', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." },
      { id: 'C', text: "Rely on user-generated freeform text tags to identify cloud providers and regions." },
      { id: 'D', text: "Omit the ResourceId column from detailed line-item cost exports." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS unifies resource hierarchy naming across cloud providers into predictable, typed columns: ProviderName (e.g., AWS, Azure, Google), BillingAccountId (root/enrollment/master), SubAccountId (account/subscription/project), ResourceId, and ResourceType, enabling seamless cross-cloud aggregation.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy", "hierarchy", "normalization", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-107",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS PricingQuantity and PricingUnit: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems organization, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The FinOps cloud economics team is currently standardizing usage measurement units across clouds under reporting cycle 5.7.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these aerospace satellite ground systems financial criteria for focus pricingquantity and pricingunit?",
    options: [
      { id: 'A', text: "Compare AWS seconds with Azure days without unit normalization." },
      { id: 'B', text: "Strip all usage quantity metrics from the billing dataset to save storage space." },
      { id: 'C', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'D', text: "Manually convert all usage units to kilowatt-hours before loading into SQL." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS normalizes disparate vendor metering units into standard 'PricingQuantity' and 'PricingUnit' representations (e.g., 'Hour', 'Gigabyte-Month', 'Core-Hour'). This allows FinOps analysts to calculate meaningful cross-cloud unit costs and evaluate discount tiers objectively.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit", "metrics", "usage-metering", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-108",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ListCost and ContractedCost: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network organization, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The FinOps cloud economics team is currently measuring negotiated discount savings and roi under reporting cycle 5.8.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these telecommunications 5g core network financial criteria for focus listcost and contractedcost?",
    options: [
      { id: 'A', text: "Assume public website retail prices reflect actual enterprise contracted spending." },
      { id: 'B', text: "Delete list cost data from billing tables because it is not invoiced." },
      { id: 'C', text: "Manually recalculate negotiated enterprise discounts on a handheld calculator." },
      { id: 'D', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FOCUS provides transparent price benchmarking by defining 'ListCost' (public retail rate), 'ContractedCost' (negotiated enterprise discount rate), and 'EffectiveCost' (rate after commitments). The difference between ListCost and EffectiveCost quantifies the total financial value delivered by FinOps procurement.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost", "contracted-cost", "savings", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-109",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Tags Dimension and JSON Normalization: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot organization, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The FinOps cloud economics team is currently unifying tag structures for cost allocation and ownership under reporting cycle 5.9.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these renewable energy smart grid iot financial criteria for focus tags dimension and json normalization?",
    options: [
      { id: 'A', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'B', text: "Export 50 separate tag columns that vary wildly between AWS, Azure, and Google Cloud schemas." },
      { id: 'C', text: "Prohibit engineering squads from applying tags to cloud resources." },
      { id: 'D', text: "Store all tags in unindexed plaintext server log files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In FOCUS, resource tags are normalized into a unified, queryable key-value map or JSON object column named 'Tags'. This eliminates schema sprawl and allows FinOps analysts to write single SQL queries that allocate costs by application, environment, or business unit across multi-cloud estates.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags", "allocation", "metadata", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-110",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Specification Core Purpose: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics organization, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The FinOps cloud economics team is currently open standard for cloud cost and usage data normalization under reporting cycle 5.10.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these supply chain cold-chain logistics financial criteria for focus specification core purpose?",
    options: [
      { id: 'A', text: "Write custom proprietary ETL scripts with disparate column names for every cloud vendor without standard taxonomy." },
      { id: 'B', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'C', text: "Force all cloud providers to change their underlying billing calculation engines." },
      { id: 'D', text: "Rely exclusively on monthly PDF invoices printed from vendor billing portals." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The FinOps Open Cost & Usage Specification (FOCUS) is a Linux Foundation open standard that defines a common schema and terminology for cloud billing data. It establishes consistent column definitions, metrics, and dimensions across multi-cloud and SaaS providers, eliminating bespoke vendor normalization pipelines.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus", "finops", "specification", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-111",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "BilledCost vs EffectiveCost in FOCUS: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments organization, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The FinOps cloud economics team is currently understanding invoice cash accounting vs amortized economic cost under reporting cycle 5.11.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these banking core ledger & payments financial criteria for billedcost vs effectivecost in focus?",
    options: [
      { id: 'A', text: "Use BilledCost to charge engineering squads when a $50,000 upfront annual reservation payment is made on day one." },
      { id: 'B', text: "Assume BilledCost and EffectiveCost are identical values in all billing rows." },
      { id: 'C', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." },
      { id: 'D', text: "Delete the BilledCost column to simplify data warehousing pipelines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In FOCUS, 'BilledCost' represents the actual charge appearing on the invoice for the billing period (cash accounting), while 'EffectiveCost' reflects the true amortized economic cost of usage, factoring in blended discounts, upfront commitments, and credit consumption for accurate chargeback.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost", "effective-cost", "chargeback", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-112",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ChargeCategory and ChargeSubcategory: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline organization, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The FinOps cloud economics team is currently classifying billing charges across usage, purchase, tax, and credits under reporting cycle 5.12.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these genomic sequencing & biotech pipeline financial criteria for focus chargecategory and chargesubcategory?",
    options: [
      { id: 'A', text: "Write regex string patterns against raw vendor service descriptions to guess whether a line is a credit or usage." },
      { id: 'B', text: "Filter out all tax and adjustment rows from financial reporting databases." },
      { id: 'C', text: "Assume all line items represent compute infrastructure usage." },
      { id: 'D', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FOCUS standardizes transaction types via 'ChargeCategory' into well-defined enumerations: 'Usage' (on-demand resource consumption), 'Purchase' (commitment upfront/recurring payments), 'Tax', 'Adjustment', and 'Credit', allowing automated financial categorization without vendor-specific regex.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category", "taxonomy", "accounting", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-113",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Column Taxonomy for Resource Hierarchy: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network organization, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The FinOps cloud economics team is currently standardizing provider, account, and resource identity under reporting cycle 5.13.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these defense-grade zero-trust network financial criteria for focus column taxonomy for resource hierarchy?",
    options: [
      { id: 'A', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." },
      { id: 'B', text: "Maintain disparate column names like 'LinkedAccountId', 'SubscriptionId', and 'ProjectID' in separate unjoined tables." },
      { id: 'C', text: "Rely on user-generated freeform text tags to identify cloud providers and regions." },
      { id: 'D', text: "Omit the ResourceId column from detailed line-item cost exports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS unifies resource hierarchy naming across cloud providers into predictable, typed columns: ProviderName (e.g., AWS, Azure, Google), BillingAccountId (root/enrollment/master), SubAccountId (account/subscription/project), ResourceId, and ResourceType, enabling seamless cross-cloud aggregation.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy", "hierarchy", "normalization", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-114",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS PricingQuantity and PricingUnit: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine organization, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The FinOps cloud economics team is currently standardizing usage measurement units across clouds under reporting cycle 5.14.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these online multiplayer gaming engine financial criteria for focus pricingquantity and pricingunit?",
    options: [
      { id: 'A', text: "Compare AWS seconds with Azure days without unit normalization." },
      { id: 'B', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'C', text: "Strip all usage quantity metrics from the billing dataset to save storage space." },
      { id: 'D', text: "Manually convert all usage units to kilowatt-hours before loading into SQL." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS normalizes disparate vendor metering units into standard 'PricingQuantity' and 'PricingUnit' representations (e.g., 'Hour', 'Gigabyte-Month', 'Core-Hour'). This allows FinOps analysts to calculate meaningful cross-cloud unit costs and evaluate discount tiers objectively.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit", "metrics", "usage-metering", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-115",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ListCost and ContractedCost: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling organization, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The FinOps cloud economics team is currently measuring negotiated discount savings and roi under reporting cycle 5.15.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these insurance risk & actuarial modeling financial criteria for focus listcost and contractedcost?",
    options: [
      { id: 'A', text: "Assume public website retail prices reflect actual enterprise contracted spending." },
      { id: 'B', text: "Delete list cost data from billing tables because it is not invoiced." },
      { id: 'C', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'D', text: "Manually recalculate negotiated enterprise discounts on a handheld calculator." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS provides transparent price benchmarking by defining 'ListCost' (public retail rate), 'ContractedCost' (negotiated enterprise discount rate), and 'EffectiveCost' (rate after commitments). The difference between ListCost and EffectiveCost quantifies the total financial value delivered by FinOps procurement.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost", "contracted-cost", "savings", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-116",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Tags Dimension and JSON Normalization: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform organization, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The FinOps cloud economics team is currently unifying tag structures for cost allocation and ownership under reporting cycle 5.16.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these pharmaceutical clinical trial platform financial criteria for focus tags dimension and json normalization?",
    options: [
      { id: 'A', text: "Export 50 separate tag columns that vary wildly between AWS, Azure, and Google Cloud schemas." },
      { id: 'B', text: "Prohibit engineering squads from applying tags to cloud resources." },
      { id: 'C', text: "Store all tags in unindexed plaintext server log files." },
      { id: 'D', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In FOCUS, resource tags are normalized into a unified, queryable key-value map or JSON object column named 'Tags'. This eliminates schema sprawl and allows FinOps analysts to write single SQL queries that allocate costs by application, environment, or business unit across multi-cloud estates.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags", "allocation", "metadata", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-117",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Specification Core Purpose: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub organization, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The FinOps cloud economics team is currently open standard for cloud cost and usage data normalization under reporting cycle 5.17.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these smart city traffic & mobility sensor hub financial criteria for focus specification core purpose?",
    options: [
      { id: 'A', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'B', text: "Write custom proprietary ETL scripts with disparate column names for every cloud vendor without standard taxonomy." },
      { id: 'C', text: "Force all cloud providers to change their underlying billing calculation engines." },
      { id: 'D', text: "Rely exclusively on monthly PDF invoices printed from vendor billing portals." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The FinOps Open Cost & Usage Specification (FOCUS) is a Linux Foundation open standard that defines a common schema and terminology for cloud billing data. It establishes consistent column definitions, metrics, and dimensions across multi-cloud and SaaS providers, eliminating bespoke vendor normalization pipelines.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus", "finops", "specification", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-118",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "BilledCost vs EffectiveCost in FOCUS: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification organization, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The FinOps cloud economics team is currently understanding invoice cash accounting vs amortized economic cost under reporting cycle 5.18.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these digital identity & biometric verification financial criteria for billedcost vs effectivecost in focus?",
    options: [
      { id: 'A', text: "Use BilledCost to charge engineering squads when a $50,000 upfront annual reservation payment is made on day one." },
      { id: 'B', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." },
      { id: 'C', text: "Assume BilledCost and EffectiveCost are identical values in all billing rows." },
      { id: 'D', text: "Delete the BilledCost column to simplify data warehousing pipelines." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In FOCUS, 'BilledCost' represents the actual charge appearing on the invoice for the billing period (cash accounting), while 'EffectiveCost' reflects the true amortized economic cost of usage, factoring in blended discounts, upfront commitments, and credit consumption for accurate chargeback.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost", "effective-cost", "chargeback", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-119",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ChargeCategory and ChargeSubcategory: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search organization, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The FinOps cloud economics team is currently classifying billing charges across usage, purchase, tax, and credits under reporting cycle 5.19.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these legal discovery & semantic document search financial criteria for focus chargecategory and chargesubcategory?",
    options: [
      { id: 'A', text: "Write regex string patterns against raw vendor service descriptions to guess whether a line is a credit or usage." },
      { id: 'B', text: "Filter out all tax and adjustment rows from financial reporting databases." },
      { id: 'C', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." },
      { id: 'D', text: "Assume all line items represent compute infrastructure usage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS standardizes transaction types via 'ChargeCategory' into well-defined enumerations: 'Usage' (on-demand resource consumption), 'Purchase' (commitment upfront/recurring payments), 'Tax', 'Adjustment', and 'Credit', allowing automated financial categorization without vendor-specific regex.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category", "taxonomy", "accounting", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-120",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Column Taxonomy for Resource Hierarchy: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange organization, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The FinOps cloud economics team is currently standardizing provider, account, and resource identity under reporting cycle 5.20.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these adtech real-time bidding exchange financial criteria for focus column taxonomy for resource hierarchy?",
    options: [
      { id: 'A', text: "Maintain disparate column names like 'LinkedAccountId', 'SubscriptionId', and 'ProjectID' in separate unjoined tables." },
      { id: 'B', text: "Rely on user-generated freeform text tags to identify cloud providers and regions." },
      { id: 'C', text: "Omit the ResourceId column from detailed line-item cost exports." },
      { id: 'D', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FOCUS unifies resource hierarchy naming across cloud providers into predictable, typed columns: ProviderName (e.g., AWS, Azure, Google), BillingAccountId (root/enrollment/master), SubAccountId (account/subscription/project), ResourceId, and ResourceType, enabling seamless cross-cloud aggregation.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy", "hierarchy", "normalization", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-121",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS PricingQuantity and PricingUnit: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting organization, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The FinOps cloud economics team is currently standardizing usage measurement units across clouds under reporting cycle 5.21.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these precision agriculture & drone scouting financial criteria for focus pricingquantity and pricingunit?",
    options: [
      { id: 'A', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'B', text: "Compare AWS seconds with Azure days without unit normalization." },
      { id: 'C', text: "Strip all usage quantity metrics from the billing dataset to save storage space." },
      { id: 'D', text: "Manually convert all usage units to kilowatt-hours before loading into SQL." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS normalizes disparate vendor metering units into standard 'PricingQuantity' and 'PricingUnit' representations (e.g., 'Hour', 'Gigabyte-Month', 'Core-Hour'). This allows FinOps analysts to calculate meaningful cross-cloud unit costs and evaluate discount tiers objectively.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit", "metrics", "usage-metering", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-122",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS ListCost and ContractedCost: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance organization, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The FinOps cloud economics team is currently measuring negotiated discount savings and roi under reporting cycle 5.22.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these industrial robotics predictive maintenance financial criteria for focus listcost and contractedcost?",
    options: [
      { id: 'A', text: "Assume public website retail prices reflect actual enterprise contracted spending." },
      { id: 'B', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'C', text: "Delete list cost data from billing tables because it is not invoiced." },
      { id: 'D', text: "Manually recalculate negotiated enterprise discounts on a handheld calculator." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS provides transparent price benchmarking by defining 'ListCost' (public retail rate), 'ContractedCost' (negotiated enterprise discount rate), and 'EffectiveCost' (rate after commitments). The difference between ListCost and EffectiveCost quantifies the total financial value delivered by FinOps procurement.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost", "contracted-cost", "savings", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-123",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Tags Dimension and JSON Normalization: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform organization, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The FinOps cloud economics team is currently unifying tag structures for cost allocation and ownership under reporting cycle 5.23.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these educational remote proctoring platform financial criteria for focus tags dimension and json normalization?",
    options: [
      { id: 'A', text: "Export 50 separate tag columns that vary wildly between AWS, Azure, and Google Cloud schemas." },
      { id: 'B', text: "Prohibit engineering squads from applying tags to cloud resources." },
      { id: 'C', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'D', text: "Store all tags in unindexed plaintext server log files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In FOCUS, resource tags are normalized into a unified, queryable key-value map or JSON object column named 'Tags'. This eliminates schema sprawl and allows FinOps analysts to write single SQL queries that allocate costs by application, environment, or business unit across multi-cloud estates.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags", "allocation", "metadata", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-124",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "FOCUS Specification Core Purpose: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics organization, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The FinOps cloud economics team is currently open standard for cloud cost and usage data normalization under reporting cycle 5.24.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these real estate valuation & geo-spatial analytics financial criteria for focus specification core purpose?",
    options: [
      { id: 'A', text: "Write custom proprietary ETL scripts with disparate column names for every cloud vendor without standard taxonomy." },
      { id: 'B', text: "Force all cloud providers to change their underlying billing calculation engines." },
      { id: 'C', text: "Rely exclusively on monthly PDF invoices printed from vendor billing portals." },
      { id: 'D', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The FinOps Open Cost & Usage Specification (FOCUS) is a Linux Foundation open standard that defines a common schema and terminology for cloud billing data. It establishes consistent column definitions, metrics, and dimensions across multi-cloud and SaaS providers, eliminating bespoke vendor normalization pipelines.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus", "finops", "specification", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-125",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "BilledCost vs EffectiveCost in FOCUS: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations organization, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The FinOps cloud economics team is currently understanding invoice cash accounting vs amortized economic cost under reporting cycle 5.25.",
    question: "Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these disaster emergency dispatch & operations financial criteria for billedcost vs effectivecost in focus?",
    options: [
      { id: 'A', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." },
      { id: 'B', text: "Use BilledCost to charge engineering squads when a $50,000 upfront annual reservation payment is made on day one." },
      { id: 'C', text: "Assume BilledCost and EffectiveCost are identical values in all billing rows." },
      { id: 'D', text: "Delete the BilledCost column to simplify data warehousing pipelines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In FOCUS, 'BilledCost' represents the actual charge appearing on the invoice for the billing period (cash accounting), while 'EffectiveCost' reflects the true amortized economic cost of usage, factoring in blended discounts, upfront commitments, and credit consumption for accurate chargeback.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost", "effective-cost", "chargeback", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_QUESTIONS_5;
