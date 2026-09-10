export const FINOPS_FOCUS_FLASHCARDS_12 = [
  {
    id: "finops-focus-fc-276",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in High-Frequency FinTech Trading",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-fc-277",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Healthcare Patient Records & HIPAA",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-fc-278",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Global E-Commerce Black Friday Scale",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-fc-279",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Autonomous Vehicle Telemetry",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-fc-280",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-fc-281",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Media Streaming & Global CDN",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-fc-282",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Aerospace Satellite Ground Systems",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-fc-283",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Telecommunications 5G Core Network",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-fc-284",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Renewable Energy Smart Grid IoT",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-fc-285",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Supply Chain Cold-Chain Logistics",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-fc-286",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Banking Core Ledger & Payments",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-fc-287",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-fc-288",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Defense-Grade Zero-Trust Network",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-fc-289",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Online Multiplayer Gaming Engine",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-fc-290",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Insurance Risk & Actuarial Modeling",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-fc-291",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-fc-292",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-fc-293",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Digital Identity & Biometric Verification",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-fc-294",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Legal Discovery & Semantic Document Search",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and...",
    tags: ["azure-cost", "arm", "normalization", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-fc-295",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in AdTech Real-Time Bidding Exchange",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and appl...",
    tags: ["gcp-billing", "bigquery", "ingestion", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-fc-296",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Precision Agriculture & Drone Scouting",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is ge...",
    tags: ["currency", "exchange-rates", "global-billing", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-fc-297",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Industrial Robotics Predictive Maintenance",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns. Core FinOps standard: FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud...",
    tags: ["saas", "tco", "multi-provider", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-fc-298",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Educational Remote Proctoring Platform",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is repo...",
    tags: ["data-quality", "reconciliation", "validation", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-fc-299",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the pu...",
    tags: ["amortization", "commitments", "effective-cost", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-fc-300",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Disaster Emergency Dispatch & Operations",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment ...",
    tags: ["aws-cur", "mapping", "ingestion", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_FLASHCARDS_12;
