export const FINOPS_FOCUS_FLASHCARDS_6 = [
  {
    id: "finops-focus-fc-126",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in High-Frequency FinTech Trading",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-fc-127",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Healthcare Patient Records & HIPAA",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-fc-128",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Global E-Commerce Black Friday Scale",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-fc-129",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Autonomous Vehicle Telemetry",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-fc-130",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-fc-131",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Media Streaming & Global CDN",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-fc-132",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Aerospace Satellite Ground Systems",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-fc-133",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in Telecommunications 5G Core Network",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-fc-134",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Renewable Energy Smart Grid IoT",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-fc-135",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Supply Chain Cold-Chain Logistics",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-fc-136",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Banking Core Ledger & Payments",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-fc-137",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-fc-138",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in Defense-Grade Zero-Trust Network",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-fc-139",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Online Multiplayer Gaming Engine",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-fc-140",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in Insurance Risk & Actuarial Modeling",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-fc-141",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-fc-142",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-fc-143",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Digital Identity & Biometric Verification",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-fc-144",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ListCost and ContractedCost in Legal Discovery & Semantic Document Search",
    hint: "Focus on list-cost and contracted-cost fundamentals.",
    back: "<strong>FOCUS ListCost and ContractedCost</strong>: Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings. Core FinOps standard: The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment ma...",
    tags: ["list-cost", "contracted-cost", "savings", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-fc-145",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Tags Dimension and JSON Normalization in AdTech Real-Time Bidding Exchange",
    hint: "Focus on tags and allocation fundamentals.",
    back: "<strong>FOCUS Tags Dimension and JSON Normalization</strong>: Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers. Core FinOps standard: FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export....",
    tags: ["tags", "allocation", "metadata", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-fc-146",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Specification Core Purpose in Precision Agriculture & Drone Scouting",
    hint: "Focus on focus and finops fundamentals.",
    back: "<strong>FOCUS Specification Core Purpose</strong>: Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS. Core FinOps standard: FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service a...",
    tags: ["focus", "finops", "specification", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-fc-147",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: BilledCost vs EffectiveCost in FOCUS in Industrial Robotics Predictive Maintenance",
    hint: "Focus on billed-cost and effective-cost fundamentals.",
    back: "<strong>BilledCost vs EffectiveCost in FOCUS</strong>: Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts. Core FinOps standard: BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitmen...",
    tags: ["billed-cost", "effective-cost", "chargeback", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-fc-148",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS ChargeCategory and ChargeSubcategory in Educational Remote Proctoring Platform",
    hint: "Focus on charge-category and taxonomy fundamentals.",
    back: "<strong>FOCUS ChargeCategory and ChargeSubcategory</strong>: Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories. Core FinOps standard: ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ...",
    tags: ["charge-category", "taxonomy", "accounting", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-fc-149",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS Column Taxonomy for Resource Hierarchy in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on taxonomy and hierarchy fundamentals.",
    back: "<strong>FOCUS Column Taxonomy for Resource Hierarchy</strong>: Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'. Core FinOps standard: The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Map...",
    tags: ["taxonomy", "hierarchy", "normalization", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-fc-150",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    front: "FinOps FOCUS: FOCUS PricingQuantity and PricingUnit in Disaster Emergency Dispatch & Operations",
    hint: "Focus on pricing-unit and metrics fundamentals.",
    back: "<strong>FOCUS PricingQuantity and PricingUnit</strong>: Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly. Core FinOps standard: PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQ...",
    tags: ["pricing-unit", "metrics", "usage-metering", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_FLASHCARDS_6;
