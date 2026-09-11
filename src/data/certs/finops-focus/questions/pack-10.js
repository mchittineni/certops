export const FINOPS_FOCUS_QUESTIONS_10 = [
  {
    id: "finops-focus-226",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Trusting What the Billing Pipeline Produces: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The FinOps team is ensuring a billing load is complete and correct before anyone reports from it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices." },
      { id: 'B', text: "Reconcile the loaded totals against the invoice once a month during the close and investigate whatever variance happens to be found at that point in the monthly cycle." },
      { id: 'C', text: "Alert on any day where the total spend moves by more than a set percentage from the previous day's figure right across the whole of the estate." },
      { id: 'D', text: "Run an automated schema check on load that rejects any billing file whose columns do not match the expected FOCUS column list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is reported from. A monthly reconciliation finds the same discrepancy weeks after decisions were taken on the bad figures. A day-over-day threshold is anomaly detection wearing a data-quality label: a genuine drop in spend and a load that lost half its rows look identical. Schema validation alone passes a file that is perfectly well-formed and half empty.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["data-quality","reconciliation","validation","High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-227",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Spreading an Upfront Purchase Over the Term: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The FinOps team is presenting a large upfront commitment payment fairly to the teams that consume it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Record the upfront fee under ChargeCategory 'Purchase' in the month that it is paid and leave all of the usage lines sitting at their discounted rates." },
      { id: 'B', text: "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption." },
      { id: 'C', text: "Divide the upfront commitment fee evenly across the months of the term and allocate each month's share equally between all teams." },
      { id: 'D', text: "Allocate the upfront fee to the teams in proportion to their share of total spend right across the billing account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the purchase date. Booking the fee as a Purchase in the paid month is exactly what BilledCost already does and is correct for invoice reconciliation, but it makes January unusable for chargeback. An even split across months fixes the timing yet charges teams that never used the capacity. Allocating on total account spend is a proxy that overcharges teams whose usage was never eligible for the commitment.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["amortization","commitments","effective-cost","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-228",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an AWS Export Into the Standard Schema: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The FinOps team is mapping the AWS Cost and Usage Report onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map 'lineItem/BlendedCost' to BilledCost, since blending already spreads the commitment benefit across the accounts in the organisation." },
      { id: 'B', text: "Map 'lineItem/NetUnblendedCost' to BilledCost and treat every discount as having already been applied at the individual line level." },
      { id: 'C', text: "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId." },
      { id: 'D', text: "Map 'pricing/publicOnDemandCost' to BilledCost so that the dataset always carries a rate that is comparable between accounts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment spread EffectiveCost needs. Blended cost averages rates across the organisation, so no individual account's figure ties to anything on its invoice. Net unblended has already netted discounts, which double-counts once credits are loaded as their own Credit rows. Public on-demand cost is the definition of ListCost and was never the amount billed.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["aws-cur","mapping","ingestion","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-229",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an Azure Export Into the Standard Schema: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The FinOps team is mapping the Azure Cost Management exports onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map the Azure amortised cost export to BilledCost and the actual cost export to EffectiveCost, since amortisation is what appears on the invoice." },
      { id: 'B', text: "Map 'UnitPrice' to ListCost, since the unit price recorded against each line is the published rate before any agreement is applied." },
      { id: 'C', text: "Map the Cost Management subscription display name to SubAccountId so the reports carry a readable identifier for each subscription." },
      { id: 'D', text: "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and therefore EffectiveCost; PayGPrice is the pay-as-you-go rate and maps to ListCost. Swapping the two exports inverts the definitions, since it is actual cost rather than amortised cost that appears on the invoice. UnitPrice already reflects the negotiated agreement, so mapping it to ListCost understates the discount. Display names are mutable and not unique, which makes them unsafe as an identifier.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["azure-cost","arm","normalization","Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-230",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping a Google Cloud Export Into the Schema: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The FinOps team is mapping the Google Cloud BigQuery billing export onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId." },
      { id: 'B', text: "Map 'cost' to BilledCost and sum the nested credits into separate Credit rows instead of reflecting them within EffectiveCost." },
      { id: 'C', text: "Map 'cost_at_list' to BilledCost so that the figure is stated before any committed use or sustained use discount applies." },
      { id: 'D', text: "Map 'project.name' to SubAccountId, since the project display name is the identifier the finance team already recognises." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and applied. Emitting the credits as separate rows preserves the total but leaves every usage line overstated, so any per-resource or per-team figure is wrong. cost_at_list is the undiscounted amount and belongs in ListCost. Project names can be changed and repeated, whereas project.id is the stable identifier SubAccountId requires.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["gcp-billing","bigquery","ingestion","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-231",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Reporting Global Spend in a Single Currency: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The FinOps team is rolling up spend billed in several local currencies into one reporting currency. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Apply the corporate treasury's budget rate for the financial year so that the reported spend stays directly comparable against the plan for that financial reporting year." },
      { id: 'B', text: "Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS." },
      { id: 'C', text: "Apply the spot exchange rate on the day each report is produced so that every historical month is restated at the current rate." },
      { id: 'D', text: "Use the 'BillingCurrency' amounts as they stand and let each region report its spend in its own local currencies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is genuinely used for variance-against-plan reporting, but it deliberately diverges from what was spent and cannot be reconciled to the invoices. Restating history at today's spot rate changes last quarter's reported spend every time the report is refreshed. Leaving amounts in local currency makes any group-level total meaningless.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["currency","exchange-rates","global-billing","Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-232",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Bringing Non-Cloud Vendors Into the Same Reporting: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The FinOps team is including SaaS and internal platform spend in the same reporting as cloud spend. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Record each SaaS invoice as one monthly total per vendor in the finance system and report those totals alongside the cloud figures in the same summary." },
      { id: 'B', text: "Keep the SaaS spend in a separate dataset entirely and combine the two sets of totals only at the executive summary level each month." },
      { id: 'C', text: "Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns." },
      { id: 'D', text: "Record each SaaS vendor under whichever cloud provider's marketplace the subscription happened to have been purchased through originally." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud spend. A single monthly total per vendor arrives at the right group figure but cannot be attributed to a team or a service, which is where the questions actually get asked. A separate dataset joined only at the summary level has the same limitation one level up. Filing a vendor under the marketplace it was bought through misstates ProviderName and makes that cloud's spend look larger than it is.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["saas","tco","multi-provider","Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-233",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Trusting What the Billing Pipeline Produces: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The FinOps team is ensuring a billing load is complete and correct before anyone reports from it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Reconcile the loaded totals against the invoice once a month during the close and investigate whatever variance happens to be found at that point in the monthly cycle." },
      { id: 'B', text: "Alert on any day where the total spend moves by more than a set percentage from the previous day's figure right across the whole of the estate." },
      { id: 'C', text: "Run an automated schema check on load that rejects any billing file whose columns do not match the expected FOCUS column list." },
      { id: 'D', text: "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is reported from. A monthly reconciliation finds the same discrepancy weeks after decisions were taken on the bad figures. A day-over-day threshold is anomaly detection wearing a data-quality label: a genuine drop in spend and a load that lost half its rows look identical. Schema validation alone passes a file that is perfectly well-formed and half empty.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["data-quality","reconciliation","validation","Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-234",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Spreading an Upfront Purchase Over the Term: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The FinOps team is presenting a large upfront commitment payment fairly to the teams that consume it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption." },
      { id: 'B', text: "Record the upfront fee under ChargeCategory 'Purchase' in the month that it is paid and leave all of the usage lines sitting at their discounted rates." },
      { id: 'C', text: "Divide the upfront commitment fee evenly across the months of the term and allocate each month's share equally between all teams." },
      { id: 'D', text: "Allocate the upfront fee to the teams in proportion to their share of total spend right across the billing account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the purchase date. Booking the fee as a Purchase in the paid month is exactly what BilledCost already does and is correct for invoice reconciliation, but it makes January unusable for chargeback. An even split across months fixes the timing yet charges teams that never used the capacity. Allocating on total account spend is a proxy that overcharges teams whose usage was never eligible for the commitment.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["amortization","commitments","effective-cost","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-235",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an AWS Export Into the Standard Schema: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The FinOps team is mapping the AWS Cost and Usage Report onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map 'lineItem/BlendedCost' to BilledCost, since blending already spreads the commitment benefit across the accounts in the organisation." },
      { id: 'B', text: "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId." },
      { id: 'C', text: "Map 'lineItem/NetUnblendedCost' to BilledCost and treat every discount as having already been applied at the individual line level." },
      { id: 'D', text: "Map 'pricing/publicOnDemandCost' to BilledCost so that the dataset always carries a rate that is comparable between accounts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment spread EffectiveCost needs. Blended cost averages rates across the organisation, so no individual account's figure ties to anything on its invoice. Net unblended has already netted discounts, which double-counts once credits are loaded as their own Credit rows. Public on-demand cost is the definition of ListCost and was never the amount billed.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["aws-cur","mapping","ingestion","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-236",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an Azure Export Into the Standard Schema: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The FinOps team is mapping the Azure Cost Management exports onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map the Azure amortised cost export to BilledCost and the actual cost export to EffectiveCost, since amortisation is what appears on the invoice." },
      { id: 'B', text: "Map 'UnitPrice' to ListCost, since the unit price recorded against each line is the published rate before any agreement is applied." },
      { id: 'C', text: "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs." },
      { id: 'D', text: "Map the Cost Management subscription display name to SubAccountId so the reports carry a readable identifier for each subscription." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and therefore EffectiveCost; PayGPrice is the pay-as-you-go rate and maps to ListCost. Swapping the two exports inverts the definitions, since it is actual cost rather than amortised cost that appears on the invoice. UnitPrice already reflects the negotiated agreement, so mapping it to ListCost understates the discount. Display names are mutable and not unique, which makes them unsafe as an identifier.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["azure-cost","arm","normalization","Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-237",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping a Google Cloud Export Into the Schema: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The FinOps team is mapping the Google Cloud BigQuery billing export onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map 'cost' to BilledCost and sum the nested credits into separate Credit rows instead of reflecting them within EffectiveCost." },
      { id: 'B', text: "Map 'cost_at_list' to BilledCost so that the figure is stated before any committed use or sustained use discount applies." },
      { id: 'C', text: "Map 'project.name' to SubAccountId, since the project display name is the identifier the finance team already recognises." },
      { id: 'D', text: "Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and applied. Emitting the credits as separate rows preserves the total but leaves every usage line overstated, so any per-resource or per-team figure is wrong. cost_at_list is the undiscounted amount and belongs in ListCost. Project names can be changed and repeated, whereas project.id is the stable identifier SubAccountId requires.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["gcp-billing","bigquery","ingestion","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-238",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Reporting Global Spend in a Single Currency: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The FinOps team is rolling up spend billed in several local currencies into one reporting currency. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS." },
      { id: 'B', text: "Apply the corporate treasury's budget rate for the financial year so that the reported spend stays directly comparable against the plan for that financial reporting year." },
      { id: 'C', text: "Apply the spot exchange rate on the day each report is produced so that every historical month is restated at the current rate." },
      { id: 'D', text: "Use the 'BillingCurrency' amounts as they stand and let each region report its spend in its own local currencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is genuinely used for variance-against-plan reporting, but it deliberately diverges from what was spent and cannot be reconciled to the invoices. Restating history at today's spot rate changes last quarter's reported spend every time the report is refreshed. Leaving amounts in local currency makes any group-level total meaningless.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["currency","exchange-rates","global-billing","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-239",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Bringing Non-Cloud Vendors Into the Same Reporting: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The FinOps team is including SaaS and internal platform spend in the same reporting as cloud spend. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Record each SaaS invoice as one monthly total per vendor in the finance system and report those totals alongside the cloud figures in the same summary." },
      { id: 'B', text: "Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns." },
      { id: 'C', text: "Keep the SaaS spend in a separate dataset entirely and combine the two sets of totals only at the executive summary level each month." },
      { id: 'D', text: "Record each SaaS vendor under whichever cloud provider's marketplace the subscription happened to have been purchased through originally." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud spend. A single monthly total per vendor arrives at the right group figure but cannot be attributed to a team or a service, which is where the questions actually get asked. A separate dataset joined only at the summary level has the same limitation one level up. Filing a vendor under the marketplace it was bought through misstates ProviderName and makes that cloud's spend look larger than it is.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["saas","tco","multi-provider","Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-240",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Trusting What the Billing Pipeline Produces: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The FinOps team is ensuring a billing load is complete and correct before anyone reports from it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Reconcile the loaded totals against the invoice once a month during the close and investigate whatever variance happens to be found at that point in the monthly cycle." },
      { id: 'B', text: "Alert on any day where the total spend moves by more than a set percentage from the previous day's figure right across the whole of the estate." },
      { id: 'C', text: "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices." },
      { id: 'D', text: "Run an automated schema check on load that rejects any billing file whose columns do not match the expected FOCUS column list." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is reported from. A monthly reconciliation finds the same discrepancy weeks after decisions were taken on the bad figures. A day-over-day threshold is anomaly detection wearing a data-quality label: a genuine drop in spend and a load that lost half its rows look identical. Schema validation alone passes a file that is perfectly well-formed and half empty.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["data-quality","reconciliation","validation","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-241",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Spreading an Upfront Purchase Over the Term: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The FinOps team is presenting a large upfront commitment payment fairly to the teams that consume it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Record the upfront fee under ChargeCategory 'Purchase' in the month that it is paid and leave all of the usage lines sitting at their discounted rates." },
      { id: 'B', text: "Divide the upfront commitment fee evenly across the months of the term and allocate each month's share equally between all teams." },
      { id: 'C', text: "Allocate the upfront fee to the teams in proportion to their share of total spend right across the billing account." },
      { id: 'D', text: "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the purchase date. Booking the fee as a Purchase in the paid month is exactly what BilledCost already does and is correct for invoice reconciliation, but it makes January unusable for chargeback. An even split across months fixes the timing yet charges teams that never used the capacity. Allocating on total account spend is a proxy that overcharges teams whose usage was never eligible for the commitment.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["amortization","commitments","effective-cost","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-242",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an AWS Export Into the Standard Schema: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The FinOps team is mapping the AWS Cost and Usage Report onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId." },
      { id: 'B', text: "Map 'lineItem/BlendedCost' to BilledCost, since blending already spreads the commitment benefit across the accounts in the organisation." },
      { id: 'C', text: "Map 'lineItem/NetUnblendedCost' to BilledCost and treat every discount as having already been applied at the individual line level." },
      { id: 'D', text: "Map 'pricing/publicOnDemandCost' to BilledCost so that the dataset always carries a rate that is comparable between accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment spread EffectiveCost needs. Blended cost averages rates across the organisation, so no individual account's figure ties to anything on its invoice. Net unblended has already netted discounts, which double-counts once credits are loaded as their own Credit rows. Public on-demand cost is the definition of ListCost and was never the amount billed.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["aws-cur","mapping","ingestion","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-243",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an Azure Export Into the Standard Schema: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The FinOps team is mapping the Azure Cost Management exports onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map the Azure amortised cost export to BilledCost and the actual cost export to EffectiveCost, since amortisation is what appears on the invoice." },
      { id: 'B', text: "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs." },
      { id: 'C', text: "Map 'UnitPrice' to ListCost, since the unit price recorded against each line is the published rate before any agreement is applied." },
      { id: 'D', text: "Map the Cost Management subscription display name to SubAccountId so the reports carry a readable identifier for each subscription." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and therefore EffectiveCost; PayGPrice is the pay-as-you-go rate and maps to ListCost. Swapping the two exports inverts the definitions, since it is actual cost rather than amortised cost that appears on the invoice. UnitPrice already reflects the negotiated agreement, so mapping it to ListCost understates the discount. Display names are mutable and not unique, which makes them unsafe as an identifier.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["azure-cost","arm","normalization","Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-244",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping a Google Cloud Export Into the Schema: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The FinOps team is mapping the Google Cloud BigQuery billing export onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map 'cost' to BilledCost and sum the nested credits into separate Credit rows instead of reflecting them within EffectiveCost." },
      { id: 'B', text: "Map 'cost_at_list' to BilledCost so that the figure is stated before any committed use or sustained use discount applies." },
      { id: 'C', text: "Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId." },
      { id: 'D', text: "Map 'project.name' to SubAccountId, since the project display name is the identifier the finance team already recognises." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and applied. Emitting the credits as separate rows preserves the total but leaves every usage line overstated, so any per-resource or per-team figure is wrong. cost_at_list is the undiscounted amount and belongs in ListCost. Project names can be changed and repeated, whereas project.id is the stable identifier SubAccountId requires.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["gcp-billing","bigquery","ingestion","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-245",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Reporting Global Spend in a Single Currency: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The FinOps team is rolling up spend billed in several local currencies into one reporting currency. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Apply the corporate treasury's budget rate for the financial year so that the reported spend stays directly comparable against the plan for that financial reporting year." },
      { id: 'B', text: "Apply the spot exchange rate on the day each report is produced so that every historical month is restated at the current rate." },
      { id: 'C', text: "Use the 'BillingCurrency' amounts as they stand and let each region report its spend in its own local currencies." },
      { id: 'D', text: "Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is genuinely used for variance-against-plan reporting, but it deliberately diverges from what was spent and cannot be reconciled to the invoices. Restating history at today's spot rate changes last quarter's reported spend every time the report is refreshed. Leaving amounts in local currency makes any group-level total meaningless.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["currency","exchange-rates","global-billing","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-246",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Bringing Non-Cloud Vendors Into the Same Reporting: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The FinOps team is including SaaS and internal platform spend in the same reporting as cloud spend. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns." },
      { id: 'B', text: "Record each SaaS invoice as one monthly total per vendor in the finance system and report those totals alongside the cloud figures in the same summary." },
      { id: 'C', text: "Keep the SaaS spend in a separate dataset entirely and combine the two sets of totals only at the executive summary level each month." },
      { id: 'D', text: "Record each SaaS vendor under whichever cloud provider's marketplace the subscription happened to have been purchased through originally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud spend. A single monthly total per vendor arrives at the right group figure but cannot be attributed to a team or a service, which is where the questions actually get asked. A separate dataset joined only at the summary level has the same limitation one level up. Filing a vendor under the marketplace it was bought through misstates ProviderName and makes that cloud's spend look larger than it is.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["saas","tco","multi-provider","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-247",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Trusting What the Billing Pipeline Produces: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The FinOps team is ensuring a billing load is complete and correct before anyone reports from it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Reconcile the loaded totals against the invoice once a month during the close and investigate whatever variance happens to be found at that point in the monthly cycle." },
      { id: 'B', text: "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices." },
      { id: 'C', text: "Alert on any day where the total spend moves by more than a set percentage from the previous day's figure right across the whole of the estate." },
      { id: 'D', text: "Run an automated schema check on load that rejects any billing file whose columns do not match the expected FOCUS column list." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is reported from. A monthly reconciliation finds the same discrepancy weeks after decisions were taken on the bad figures. A day-over-day threshold is anomaly detection wearing a data-quality label: a genuine drop in spend and a load that lost half its rows look identical. Schema validation alone passes a file that is perfectly well-formed and half empty.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["data-quality","reconciliation","validation","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-248",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Spreading an Upfront Purchase Over the Term: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The FinOps team is presenting a large upfront commitment payment fairly to the teams that consume it. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Record the upfront fee under ChargeCategory 'Purchase' in the month that it is paid and leave all of the usage lines sitting at their discounted rates." },
      { id: 'B', text: "Divide the upfront commitment fee evenly across the months of the term and allocate each month's share equally between all teams." },
      { id: 'C', text: "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption." },
      { id: 'D', text: "Allocate the upfront fee to the teams in proportion to their share of total spend right across the billing account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the purchase date. Booking the fee as a Purchase in the paid month is exactly what BilledCost already does and is correct for invoice reconciliation, but it makes January unusable for chargeback. An even split across months fixes the timing yet charges teams that never used the capacity. Allocating on total account spend is a proxy that overcharges teams whose usage was never eligible for the commitment.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["amortization","commitments","effective-cost","Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-249",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an AWS Export Into the Standard Schema: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The FinOps team is mapping the AWS Cost and Usage Report onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map 'lineItem/BlendedCost' to BilledCost, since blending already spreads the commitment benefit across the accounts in the organisation." },
      { id: 'B', text: "Map 'lineItem/NetUnblendedCost' to BilledCost and treat every discount as having already been applied at the individual line level." },
      { id: 'C', text: "Map 'pricing/publicOnDemandCost' to BilledCost so that the dataset always carries a rate that is comparable between accounts." },
      { id: 'D', text: "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment spread EffectiveCost needs. Blended cost averages rates across the organisation, so no individual account's figure ties to anything on its invoice. Net unblended has already netted discounts, which double-counts once credits are loaded as their own Credit rows. Public on-demand cost is the definition of ListCost and was never the amount billed.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["aws-cur","mapping","ingestion","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-250",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d2",
    domainName: "Multi-Cloud Billing Data Normalization and Ingestion",
    title: "Mapping an Azure Export Into the Standard Schema: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The FinOps team is mapping the Azure Cost Management exports onto the standard cost columns. The work is scoped to a newly built secondary environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs." },
      { id: 'B', text: "Map the Azure amortised cost export to BilledCost and the actual cost export to EffectiveCost, since amortisation is what appears on the invoice." },
      { id: 'C', text: "Map 'UnitPrice' to ListCost, since the unit price recorded against each line is the published rate before any agreement is applied." },
      { id: 'D', text: "Map the Cost Management subscription display name to SubAccountId so the reports carry a readable identifier for each subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and therefore EffectiveCost; PayGPrice is the pay-as-you-go rate and maps to ListCost. Swapping the two exports inverts the definitions, since it is actual cost rather than amortised cost that appears on the invoice. UnitPrice already reflects the negotiated agreement, so mapping it to ListCost understates the discount. Display names are mutable and not unique, which makes them unsafe as an identifier.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["azure-cost","arm","normalization","Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_QUESTIONS_10;
