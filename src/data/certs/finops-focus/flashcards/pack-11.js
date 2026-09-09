export const FINOPS_FOCUS_FLASHCARDS_11 = [
  {
    id: "finops-focus-fc-251",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in High-Frequency FinTech Trading",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure Cost Management exports provide both actual cost and amortized cost datasets. Mapping Azure exports to FOCUS aligns 'CostInBillingCurrency' with BilledCos...",
    tags: ["azure-cost", "arm", "normalization", "High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-fc-252",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Healthcare Patient Records & HIPAA",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: Google Cloud exports detailed billing directly into BigQuery. Normalizing GCP data to FOCUS requires unnesting the 'credits' repeated record to calculate Effect...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-fc-253",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Global E-Commerce Black Friday Scale",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Global enterprises operate accounts billed in multiple currencies (USD, EUR, GBP, JPY). When ingesting multi-cloud data into FOCUS, analysts apply standardized ...",
    tags: ["currency", "exchange-rates", "global-billing", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-fc-254",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Autonomous Vehicle Telemetry",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping cluster telemetry. Core FinOps standard: FOCUS is provider-agnostic and explicitly designed to accommodate third-party SaaS, PaaS, and internal shared platforms (Kubernetes clusters, Datadog, Snowflake...",
    tags: ["saas", "tco", "multi-provider", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-fc-255",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Robust FinOps data pipelines require automated quality validation: checking that sum(BilledCost) exactly matches the monthly PDF invoice, ensuring required FOCU...",
    tags: ["data-quality", "reconciliation", "validation", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-fc-256",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Media Streaming & Global CDN",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortization distributes fixed, upfront, or recurring commitment fees (AWS Savings Plans/RIs, Azure Reservations, GCP CUDs) evenly across the resources and team...",
    tags: ["amortization", "commitments", "effective-cost", "Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-fc-257",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Aerospace Satellite Ground Systems",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Transforming AWS Cost and Usage Reports (CUR 2.0) into FOCUS involves mapping AWS-specific columns (lineItem/UnblendedCost, lineItem/UsageAccountId, product/reg...",
    tags: ["aws-cur", "mapping", "ingestion", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-fc-258",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Telecommunications 5G Core Network",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure Cost Management exports provide both actual cost and amortized cost datasets. Mapping Azure exports to FOCUS aligns 'CostInBillingCurrency' with BilledCos...",
    tags: ["azure-cost", "arm", "normalization", "Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-fc-259",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Renewable Energy Smart Grid IoT",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: Google Cloud exports detailed billing directly into BigQuery. Normalizing GCP data to FOCUS requires unnesting the 'credits' repeated record to calculate Effect...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-fc-260",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Supply Chain Cold-Chain Logistics",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Global enterprises operate accounts billed in multiple currencies (USD, EUR, GBP, JPY). When ingesting multi-cloud data into FOCUS, analysts apply standardized ...",
    tags: ["currency", "exchange-rates", "global-billing", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-fc-261",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Banking Core Ledger & Payments",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping cluster telemetry. Core FinOps standard: FOCUS is provider-agnostic and explicitly designed to accommodate third-party SaaS, PaaS, and internal shared platforms (Kubernetes clusters, Datadog, Snowflake...",
    tags: ["saas", "tco", "multi-provider", "Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-fc-262",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Robust FinOps data pipelines require automated quality validation: checking that sum(BilledCost) exactly matches the monthly PDF invoice, ensuring required FOCU...",
    tags: ["data-quality", "reconciliation", "validation", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-fc-263",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in Defense-Grade Zero-Trust Network",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortization distributes fixed, upfront, or recurring commitment fees (AWS Savings Plans/RIs, Azure Reservations, GCP CUDs) evenly across the resources and team...",
    tags: ["amortization", "commitments", "effective-cost", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-fc-264",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Online Multiplayer Gaming Engine",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Transforming AWS Cost and Usage Reports (CUR 2.0) into FOCUS involves mapping AWS-specific columns (lineItem/UnblendedCost, lineItem/UsageAccountId, product/reg...",
    tags: ["aws-cur", "mapping", "ingestion", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-fc-265",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Insurance Risk & Actuarial Modeling",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure Cost Management exports provide both actual cost and amortized cost datasets. Mapping Azure exports to FOCUS aligns 'CostInBillingCurrency' with BilledCos...",
    tags: ["azure-cost", "arm", "normalization", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-fc-266",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: Google Cloud exports detailed billing directly into BigQuery. Normalizing GCP data to FOCUS requires unnesting the 'credits' repeated record to calculate Effect...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-fc-267",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Global enterprises operate accounts billed in multiple currencies (USD, EUR, GBP, JPY). When ingesting multi-cloud data into FOCUS, analysts apply standardized ...",
    tags: ["currency", "exchange-rates", "global-billing", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-fc-268",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Digital Identity & Biometric Verification",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping cluster telemetry. Core FinOps standard: FOCUS is provider-agnostic and explicitly designed to accommodate third-party SaaS, PaaS, and internal shared platforms (Kubernetes clusters, Datadog, Snowflake...",
    tags: ["saas", "tco", "multi-provider", "Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-fc-269",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Data Validation and Quality Controls in Ingestion in Legal Discovery & Semantic Document Search",
    hint: "Focus on data-quality and reconciliation fundamentals.",
    back: "<strong>Data Validation and Quality Controls in Ingestion</strong>: Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices. Core FinOps standard: Robust FinOps data pipelines require automated quality validation: checking that sum(BilledCost) exactly matches the monthly PDF invoice, ensuring required FOCU...",
    tags: ["data-quality", "reconciliation", "validation", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-fc-270",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Amortizing Commitment Discounts in FOCUS in AdTech Real-Time Bidding Exchange",
    hint: "Focus on amortization and commitments fundamentals.",
    back: "<strong>Amortizing Commitment Discounts in FOCUS</strong>: Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption. Core FinOps standard: Amortization distributes fixed, upfront, or recurring commitment fees (AWS Savings Plans/RIs, Azure Reservations, GCP CUDs) evenly across the resources and team...",
    tags: ["amortization", "commitments", "effective-cost", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-fc-271",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing AWS CUR into FOCUS Schema in Precision Agriculture & Drone Scouting",
    hint: "Focus on aws-cur and mapping fundamentals.",
    back: "<strong>Normalizing AWS CUR into FOCUS Schema</strong>: Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId. Core FinOps standard: Transforming AWS Cost and Usage Reports (CUR 2.0) into FOCUS involves mapping AWS-specific columns (lineItem/UnblendedCost, lineItem/UsageAccountId, product/reg...",
    tags: ["aws-cur", "mapping", "ingestion", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-fc-272",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Azure Cost Management Exports in Industrial Robotics Predictive Maintenance",
    hint: "Focus on azure-cost and arm fundamentals.",
    back: "<strong>Normalizing Azure Cost Management Exports</strong>: Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs. Core FinOps standard: Azure Cost Management exports provide both actual cost and amortized cost datasets. Mapping Azure exports to FOCUS aligns 'CostInBillingCurrency' with BilledCos...",
    tags: ["azure-cost", "arm", "normalization", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-fc-273",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Normalizing Google Cloud Billing BigQuery Export in Educational Remote Proctoring Platform",
    hint: "Focus on gcp-billing and bigquery fundamentals.",
    back: "<strong>Normalizing Google Cloud Billing BigQuery Export</strong>: Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId. Core FinOps standard: Google Cloud exports detailed billing directly into BigQuery. Normalizing GCP data to FOCUS requires unnesting the 'credits' repeated record to calculate Effect...",
    tags: ["gcp-billing", "bigquery", "ingestion", "Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-fc-274",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Multi-Currency Conversion and Exchange Rates in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on currency and exchange-rates fundamentals.",
    back: "<strong>Multi-Currency Conversion and Exchange Rates</strong>: Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS. Core FinOps standard: Global enterprises operate accounts billed in multiple currencies (USD, EUR, GBP, JPY). When ingesting multi-cloud data into FOCUS, analysts apply standardized ...",
    tags: ["currency", "exchange-rates", "global-billing", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-fc-275",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    front: "FinOps FOCUS: Handling SaaS and Shared Platform Charges in Disaster Emergency Dispatch & Operations",
    hint: "Focus on saas and tco fundamentals.",
    back: "<strong>Handling SaaS and Shared Platform Charges</strong>: Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping cluster telemetry. Core FinOps standard: FOCUS is provider-agnostic and explicitly designed to accommodate third-party SaaS, PaaS, and internal shared platforms (Kubernetes clusters, Datadog, Snowflake...",
    tags: ["saas", "tco", "multi-provider", "Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_FLASHCARDS_11;
