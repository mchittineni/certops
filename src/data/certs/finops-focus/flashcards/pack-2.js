export const FINOPS_FOCUS_FLASHCARDS_2 = [
  {
    id: "finops-focus-fc-26",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in High-Frequency FinTech Trading",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-fc-27",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Healthcare Patient Records & HIPAA",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-fc-28",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Global E-Commerce Black Friday Scale",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-fc-29",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Autonomous Vehicle Telemetry",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-fc-30",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-fc-31",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in Media Streaming & Global CDN",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-fc-32",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Aerospace Satellite Ground Systems",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-fc-33",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Telecommunications 5G Core Network",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-fc-34",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Renewable Energy Smart Grid IoT",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-fc-35",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Supply Chain Cold-Chain Logistics",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-fc-36",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Banking Core Ledger & Payments",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-fc-37",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-fc-38",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in Defense-Grade Zero-Trust Network",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-fc-39",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Online Multiplayer Gaming Engine",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-fc-40",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Insurance Risk & Actuarial Modeling",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-fc-41",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-fc-42",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-fc-43",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Digital Identity & Biometric Verification",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-fc-44",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Legal Discovery & Semantic Document Search",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-fc-45",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in AdTech Real-Time Bidding Exchange",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-fc-46",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Precision Agriculture & Drone Scouting",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-fc-47",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Industrial Robotics Predictive Maintenance",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-fc-48",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Educational Remote Proctoring Platform",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-fc-49",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-fc-50",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Disaster Emergency Dispatch & Operations",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_FLASHCARDS_2;
