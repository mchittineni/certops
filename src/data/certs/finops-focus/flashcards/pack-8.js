export const FINOPS_FOCUS_FLASHCARDS_8 = [
  {
    id: "finops-focus-fc-176",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in High-Frequency FinTech Trading",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-fc-177",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Healthcare Patient Records & HIPAA",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-fc-178",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Global E-Commerce Black Friday Scale",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-fc-179",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Autonomous Vehicle Telemetry",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-fc-180",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-fc-181",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Media Streaming & Global CDN",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-fc-182",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Aerospace Satellite Ground Systems",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-fc-183",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Telecommunications 5G Core Network",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-fc-184",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Renewable Energy Smart Grid IoT",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-fc-185",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Supply Chain Cold-Chain Logistics",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-fc-186",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Banking Core Ledger & Payments",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-fc-187",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-fc-188",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Defense-Grade Zero-Trust Network",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-fc-189",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Online Multiplayer Gaming Engine",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-fc-190",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Insurance Risk & Actuarial Modeling",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-fc-191",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-fc-192",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-fc-193",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Digital Identity & Biometric Verification",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-fc-194",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Legal Discovery & Semantic Document Search",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-fc-195",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in AdTech Real-Time Bidding Exchange",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-fc-196",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Precision Agriculture & Drone Scouting",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-fc-197",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Industrial Robotics Predictive Maintenance",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-fc-198",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Educational Remote Proctoring Platform",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-fc-199",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-fc-200",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Disaster Emergency Dispatch & Operations",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_FLASHCARDS_8;
