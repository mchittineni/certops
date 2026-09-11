export const FINOPS_FOCUS_QUESTIONS_7 = [
  {
    id: "finops-focus-151",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Making Cost Comparisons Valid Between Providers: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The FinOps team is comparing the unit rate paid for equivalent resources on different providers. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'B', text: "Measure usage with 'ConsumedQuantity' and 'ConsumedUnit', which together record the metered amount of the resource that was actually used." },
      { id: 'C', text: "Compare the providers on 'ListUnitPrice' alone, since the public rate is the one unit figure each of them quotes the same way." },
      { id: 'D', text: "Divide 'EffectiveCost' by 'ContractedUnitPrice' on each line so that a comparable quantity is derived from the cost columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQuantity and ConsumedUnit record metered consumption, and the two differ whenever pricing is blocked, so a thousand requests priced as one unit would distort the comparison. ListUnitPrice compares published rates rather than what the organisation paid. Deriving the quantity by dividing cost by unit price reconstructs PricingQuantity with rounding error and fails on any line where the price is zero.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit","metrics","usage-metering","High-Frequency FinTech Trading"]
  },
  {
    id: "finops-focus-152",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Two Sources of Discount Value: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The FinOps team is separating the value delivered by rate negotiation from the value of commitments. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compare 'ListCost' against 'BilledCost' so that the difference captures every single discount which reached the invoice during that particular month." },
      { id: 'B', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'C', text: "Compare the contracted rate against 'ListUnitPrice' on each line and multiply that gap by the pricing quantity for every row." },
      { id: 'D', text: "Compare 'BilledCost' against 'EffectiveCost' so that the difference shows what the commitments contributed across the period." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment management delivered. Comparing list against billed conflates the two and is distorted in any month containing an upfront purchase. The per-unit price comparison recovers the negotiated rate discount accurately but misses commitments entirely. Billed against effective shows only the timing effect of amortisation, which is a presentation difference rather than a saving.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost","contracted-cost","savings","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "finops-focus-153",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Allocating Cost to the Owning Team: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The FinOps team is attributing every line of spend to the business owner that should carry it. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query each provider's own tag columns and union the results, renaming the differing tag key spellings for each provider as part of the warehouse load step." },
      { id: 'B', text: "Query 'SubAccountId' and maintain a lookup table mapping accounts and subscriptions across to the team known to own each one." },
      { id: 'C', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'D', text: "Query 'ResourceName' and derive the cost owner from the naming convention that the platform team asks everyone to follow." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export. Unioning the native tag columns achieves the same result but the union has to be revisited whenever a format changes. An account-to-team lookup is a legitimate and widely used strategy, though it is only as granular as the account boundary and cannot split a shared account. A naming convention is unenforceable in billing data, so it fails silently on every resource that ignores it.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags","allocation","metadata","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "finops-focus-154",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Comparing Cost Data From Several Providers: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The FinOps team is making cost data from several providers directly comparable in one warehouse. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build an internal canonical billing schema and write one mapping per provider, maintaining each of those mappings by hand as that provider changes its export format over time." },
      { id: 'B', text: "Adopt a commercial cloud cost management platform and use that product's own normalised data model as the reporting layer for every cloud and SaaS provider." },
      { id: 'C', text: "Load each provider's native export into its own table and have the FinOps team join them in the warehouse with views lining up comparable columns." },
      { id: 'D', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service arrives already mapped. An internal canonical schema is the same idea without that leverage: every provider format change becomes local maintenance. A commercial platform does normalise, but the model belongs to the product and reporting has to move with it. Per-provider tables joined by views leave every new column and service to be reconciled by hand.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus","finops","specification","Autonomous Vehicle Telemetry"]
  },
  {
    id: "finops-focus-155",
    difficulty: "easy",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Which Cost Column Ties Out to the Invoice: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The FinOps team is reconciling to the vendor invoice while charging teams a stable monthly figure. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." },
      { id: 'B', text: "Use 'EffectiveCost' for the invoice reconciliation as well as the team chargeback so that one column is applied consistently everywhere." },
      { id: 'C', text: "Use 'ContractedCost' for reconciling to the vendor invoice as well as for chargeback, since it reflects the negotiated rate." },
      { id: 'D', text: "Use 'ListCost' for the chargeback so that teams see the undiscounted rate and the savings remain with the central FinOps function." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitment purchase across the usage that consumed it, which is what makes a monthly team figure stable. Using EffectiveCost for reconciliation will not match the invoice in any month containing an upfront payment. ContractedCost carries the negotiated rate but no amortisation, so an upfront purchase still lands in a single month. Charging teams at ListCost bills them for a discount the organisation did receive.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost","effective-cost","chargeback","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "finops-focus-156",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Usage From Purchases, Tax, and Credits: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The FinOps team is splitting billing lines into consumption, commitment purchases, tax, and credits. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'ServiceCategory' column, which groups every usage line by the kind of service that it belongs to consistently across all of the supported providers." },
      { id: 'B', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." },
      { id: 'C', text: "Query the 'ChargeClass' column, which marks whether billing lines are corrections applied to a previously invoiced period." },
      { id: 'D', text: "Query the 'CommitmentDiscountStatus' column, which reports whether a line represents used or unused commitment capacity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ServiceCategory answers a different question, grouping by what the service does rather than what kind of charge the line is. ChargeClass distinguishes a regular line from a correction to an earlier period, which is orthogonal to whether the charge is usage or tax. CommitmentDiscountStatus applies only to lines covered by a commitment and says nothing about tax, credits, or adjustments.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category","taxonomy","accounting","Media Streaming & Global CDN"]
  },
  {
    id: "finops-focus-157",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Aggregating Accounts and Resources Across Clouds: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The FinOps team is grouping spend by account and resource consistently across every provider. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Join each provider's native identifier columns, mapping LinkedAccountId, SubscriptionId, and project.id onto a shared key at query time." },
      { id: 'B', text: "Use 'InvoiceIssuerName' and 'BillingAccountName' as the grouping keys, since together they identify who is being billed for each line." },
      { id: 'C', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." },
      { id: 'D', text: "Use the 'Tags' column and require every team to tag its resources with the owning account and region so the hierarchy is readable." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Mapping the native identifiers at query time reproduces those columns in every query that needs them and breaks when a provider renames a field. InvoiceIssuerName and BillingAccountName identify the billing relationship, which is not the same as the account a resource lives in, and names are not stable identifiers. Tags depend on teams applying them and are missing on exactly the untagged resources that most need attributing.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy","hierarchy","normalization","Aerospace Satellite Ground Systems"]
  },
  {
    id: "finops-focus-158",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Making Cost Comparisons Valid Between Providers: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The FinOps team is comparing the unit rate paid for equivalent resources on different providers. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Measure usage with 'ConsumedQuantity' and 'ConsumedUnit', which together record the metered amount of the resource that was actually used." },
      { id: 'B', text: "Compare the providers on 'ListUnitPrice' alone, since the public rate is the one unit figure each of them quotes the same way." },
      { id: 'C', text: "Divide 'EffectiveCost' by 'ContractedUnitPrice' on each line so that a comparable quantity is derived from the cost columns." },
      { id: 'D', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQuantity and ConsumedUnit record metered consumption, and the two differ whenever pricing is blocked, so a thousand requests priced as one unit would distort the comparison. ListUnitPrice compares published rates rather than what the organisation paid. Deriving the quantity by dividing cost by unit price reconstructs PricingQuantity with rounding error and fails on any line where the price is zero.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit","metrics","usage-metering","Telecommunications 5G Core Network"]
  },
  {
    id: "finops-focus-159",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Two Sources of Discount Value: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The FinOps team is separating the value delivered by rate negotiation from the value of commitments. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'B', text: "Compare 'ListCost' against 'BilledCost' so that the difference captures every single discount which reached the invoice during that particular month." },
      { id: 'C', text: "Compare the contracted rate against 'ListUnitPrice' on each line and multiply that gap by the pricing quantity for every row." },
      { id: 'D', text: "Compare 'BilledCost' against 'EffectiveCost' so that the difference shows what the commitments contributed across the period." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment management delivered. Comparing list against billed conflates the two and is distorted in any month containing an upfront purchase. The per-unit price comparison recovers the negotiated rate discount accurately but misses commitments entirely. Billed against effective shows only the timing effect of amortisation, which is a presentation difference rather than a saving.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost","contracted-cost","savings","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "finops-focus-160",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Allocating Cost to the Owning Team: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The FinOps team is attributing every line of spend to the business owner that should carry it. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query each provider's own tag columns and union the results, renaming the differing tag key spellings for each provider as part of the warehouse load step." },
      { id: 'B', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'C', text: "Query 'SubAccountId' and maintain a lookup table mapping accounts and subscriptions across to the team known to own each one." },
      { id: 'D', text: "Query 'ResourceName' and derive the cost owner from the naming convention that the platform team asks everyone to follow." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export. Unioning the native tag columns achieves the same result but the union has to be revisited whenever a format changes. An account-to-team lookup is a legitimate and widely used strategy, though it is only as granular as the account boundary and cannot split a shared account. A naming convention is unenforceable in billing data, so it fails silently on every resource that ignores it.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags","allocation","metadata","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "finops-focus-161",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Comparing Cost Data From Several Providers: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The FinOps team is making cost data from several providers directly comparable in one warehouse. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build an internal canonical billing schema and write one mapping per provider, maintaining each of those mappings by hand as that provider changes its export format over time." },
      { id: 'B', text: "Adopt a commercial cloud cost management platform and use that product's own normalised data model as the reporting layer for every cloud and SaaS provider." },
      { id: 'C', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'D', text: "Load each provider's native export into its own table and have the FinOps team join them in the warehouse with views lining up comparable columns." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service arrives already mapped. An internal canonical schema is the same idea without that leverage: every provider format change becomes local maintenance. A commercial platform does normalise, but the model belongs to the product and reporting has to move with it. Per-provider tables joined by views leave every new column and service to be reconciled by hand.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus","finops","specification","Banking Core Ledger & Payments"]
  },
  {
    id: "finops-focus-162",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Which Cost Column Ties Out to the Invoice: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The FinOps team is reconciling to the vendor invoice while charging teams a stable monthly figure. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'EffectiveCost' for the invoice reconciliation as well as the team chargeback so that one column is applied consistently everywhere." },
      { id: 'B', text: "Use 'ContractedCost' for reconciling to the vendor invoice as well as for chargeback, since it reflects the negotiated rate." },
      { id: 'C', text: "Use 'ListCost' for the chargeback so that teams see the undiscounted rate and the savings remain with the central FinOps function." },
      { id: 'D', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitment purchase across the usage that consumed it, which is what makes a monthly team figure stable. Using EffectiveCost for reconciliation will not match the invoice in any month containing an upfront payment. ContractedCost carries the negotiated rate but no amortisation, so an upfront purchase still lands in a single month. Charging teams at ListCost bills them for a discount the organisation did receive.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost","effective-cost","chargeback","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "finops-focus-163",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Usage From Purchases, Tax, and Credits: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The FinOps team is splitting billing lines into consumption, commitment purchases, tax, and credits. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." },
      { id: 'B', text: "Query the 'ServiceCategory' column, which groups every usage line by the kind of service that it belongs to consistently across all of the supported providers." },
      { id: 'C', text: "Query the 'ChargeClass' column, which marks whether billing lines are corrections applied to a previously invoiced period." },
      { id: 'D', text: "Query the 'CommitmentDiscountStatus' column, which reports whether a line represents used or unused commitment capacity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ServiceCategory answers a different question, grouping by what the service does rather than what kind of charge the line is. ChargeClass distinguishes a regular line from a correction to an earlier period, which is orthogonal to whether the charge is usage or tax. CommitmentDiscountStatus applies only to lines covered by a commitment and says nothing about tax, credits, or adjustments.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category","taxonomy","accounting","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "finops-focus-164",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Aggregating Accounts and Resources Across Clouds: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The FinOps team is grouping spend by account and resource consistently across every provider. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Join each provider's native identifier columns, mapping LinkedAccountId, SubscriptionId, and project.id onto a shared key at query time." },
      { id: 'B', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." },
      { id: 'C', text: "Use 'InvoiceIssuerName' and 'BillingAccountName' as the grouping keys, since together they identify who is being billed for each line." },
      { id: 'D', text: "Use the 'Tags' column and require every team to tag its resources with the owning account and region so the hierarchy is readable." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Mapping the native identifiers at query time reproduces those columns in every query that needs them and breaks when a provider renames a field. InvoiceIssuerName and BillingAccountName identify the billing relationship, which is not the same as the account a resource lives in, and names are not stable identifiers. Tags depend on teams applying them and are missing on exactly the untagged resources that most need attributing.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy","hierarchy","normalization","Online Multiplayer Gaming Engine"]
  },
  {
    id: "finops-focus-165",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Making Cost Comparisons Valid Between Providers: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The FinOps team is comparing the unit rate paid for equivalent resources on different providers. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Measure usage with 'ConsumedQuantity' and 'ConsumedUnit', which together record the metered amount of the resource that was actually used." },
      { id: 'B', text: "Compare the providers on 'ListUnitPrice' alone, since the public rate is the one unit figure each of them quotes the same way." },
      { id: 'C', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'D', text: "Divide 'EffectiveCost' by 'ContractedUnitPrice' on each line so that a comparable quantity is derived from the cost columns." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQuantity and ConsumedUnit record metered consumption, and the two differ whenever pricing is blocked, so a thousand requests priced as one unit would distort the comparison. ListUnitPrice compares published rates rather than what the organisation paid. Deriving the quantity by dividing cost by unit price reconstructs PricingQuantity with rounding error and fails on any line where the price is zero.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit","metrics","usage-metering","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "finops-focus-166",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Two Sources of Discount Value: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The FinOps team is separating the value delivered by rate negotiation from the value of commitments. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compare 'ListCost' against 'BilledCost' so that the difference captures every single discount which reached the invoice during that particular month." },
      { id: 'B', text: "Compare the contracted rate against 'ListUnitPrice' on each line and multiply that gap by the pricing quantity for every row." },
      { id: 'C', text: "Compare 'BilledCost' against 'EffectiveCost' so that the difference shows what the commitments contributed across the period." },
      { id: 'D', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment management delivered. Comparing list against billed conflates the two and is distorted in any month containing an upfront purchase. The per-unit price comparison recovers the negotiated rate discount accurately but misses commitments entirely. Billed against effective shows only the timing effect of amortisation, which is a presentation difference rather than a saving.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost","contracted-cost","savings","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "finops-focus-167",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Allocating Cost to the Owning Team: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The FinOps team is attributing every line of spend to the business owner that should carry it. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." },
      { id: 'B', text: "Query each provider's own tag columns and union the results, renaming the differing tag key spellings for each provider as part of the warehouse load step." },
      { id: 'C', text: "Query 'SubAccountId' and maintain a lookup table mapping accounts and subscriptions across to the team known to own each one." },
      { id: 'D', text: "Query 'ResourceName' and derive the cost owner from the naming convention that the platform team asks everyone to follow." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export. Unioning the native tag columns achieves the same result but the union has to be revisited whenever a format changes. An account-to-team lookup is a legitimate and widely used strategy, though it is only as granular as the account boundary and cannot split a shared account. A naming convention is unenforceable in billing data, so it fails silently on every resource that ignores it.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags","allocation","metadata","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "finops-focus-168",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Comparing Cost Data From Several Providers: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The FinOps team is making cost data from several providers directly comparable in one warehouse. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Build an internal canonical billing schema and write one mapping per provider, maintaining each of those mappings by hand as that provider changes its export format over time." },
      { id: 'B', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'C', text: "Adopt a commercial cloud cost management platform and use that product's own normalised data model as the reporting layer for every cloud and SaaS provider." },
      { id: 'D', text: "Load each provider's native export into its own table and have the FinOps team join them in the warehouse with views lining up comparable columns." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service arrives already mapped. An internal canonical schema is the same idea without that leverage: every provider format change becomes local maintenance. A commercial platform does normalise, but the model belongs to the product and reporting has to move with it. Per-provider tables joined by views leave every new column and service to be reconciled by hand.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus","finops","specification","Digital Identity & Biometric Verification"]
  },
  {
    id: "finops-focus-169",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Which Cost Column Ties Out to the Invoice: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The FinOps team is reconciling to the vendor invoice while charging teams a stable monthly figure. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'EffectiveCost' for the invoice reconciliation as well as the team chargeback so that one column is applied consistently everywhere." },
      { id: 'B', text: "Use 'ContractedCost' for reconciling to the vendor invoice as well as for chargeback, since it reflects the negotiated rate." },
      { id: 'C', text: "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts." },
      { id: 'D', text: "Use 'ListCost' for the chargeback so that teams see the undiscounted rate and the savings remain with the central FinOps function." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitment purchase across the usage that consumed it, which is what makes a monthly team figure stable. Using EffectiveCost for reconciliation will not match the invoice in any month containing an upfront payment. ContractedCost carries the negotiated rate but no amortisation, so an upfront purchase still lands in a single month. Charging teams at ListCost bills them for a discount the organisation did receive.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["billed-cost","effective-cost","chargeback","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "finops-focus-170",
    difficulty: "medium",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Usage From Purchases, Tax, and Credits: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The FinOps team is splitting billing lines into consumption, commitment purchases, tax, and credits. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query the 'ServiceCategory' column, which groups every usage line by the kind of service that it belongs to consistently across all of the supported providers." },
      { id: 'B', text: "Query the 'ChargeClass' column, which marks whether billing lines are corrections applied to a previously invoiced period." },
      { id: 'C', text: "Query the 'CommitmentDiscountStatus' column, which reports whether a line represents used or unused commitment capacity." },
      { id: 'D', text: "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ServiceCategory answers a different question, grouping by what the service does rather than what kind of charge the line is. ChargeClass distinguishes a regular line from a correction to an earlier period, which is orthogonal to whether the charge is usage or tax. CommitmentDiscountStatus applies only to lines covered by a commitment and says nothing about tax, credits, or adjustments.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["charge-category","taxonomy","accounting","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "finops-focus-171",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Aggregating Accounts and Resources Across Clouds: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The FinOps team is grouping spend by account and resource consistently across every provider. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'." },
      { id: 'B', text: "Join each provider's native identifier columns, mapping LinkedAccountId, SubscriptionId, and project.id onto a shared key at query time." },
      { id: 'C', text: "Use 'InvoiceIssuerName' and 'BillingAccountName' as the grouping keys, since together they identify who is being billed for each line." },
      { id: 'D', text: "Use the 'Tags' column and require every team to tag its resources with the owning account and region so the hierarchy is readable." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Mapping the native identifiers at query time reproduces those columns in every query that needs them and breaks when a provider renames a field. InvoiceIssuerName and BillingAccountName identify the billing relationship, which is not the same as the account a resource lives in, and names are not stable identifiers. Tags depend on teams applying them and are missing on exactly the untagged resources that most need attributing.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["taxonomy","hierarchy","normalization","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "finops-focus-172",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Making Cost Comparisons Valid Between Providers: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The FinOps team is comparing the unit rate paid for equivalent resources on different providers. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Measure usage with 'ConsumedQuantity' and 'ConsumedUnit', which together record the metered amount of the resource that was actually used." },
      { id: 'B', text: "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly." },
      { id: 'C', text: "Compare the providers on 'ListUnitPrice' alone, since the public rate is the one unit figure each of them quotes the same way." },
      { id: 'D', text: "Divide 'EffectiveCost' by 'ContractedUnitPrice' on each line so that a comparable quantity is derived from the cost columns." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQuantity and ConsumedUnit record metered consumption, and the two differ whenever pricing is blocked, so a thousand requests priced as one unit would distort the comparison. ListUnitPrice compares published rates rather than what the organisation paid. Deriving the quantity by dividing cost by unit price reconstructs PricingQuantity with rounding error and fails on any line where the price is zero.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["pricing-unit","metrics","usage-metering","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "finops-focus-173",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Separating Two Sources of Discount Value: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The FinOps team is separating the value delivered by rate negotiation from the value of commitments. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compare 'ListCost' against 'BilledCost' so that the difference captures every single discount which reached the invoice during that particular month." },
      { id: 'B', text: "Compare the contracted rate against 'ListUnitPrice' on each line and multiply that gap by the pricing quantity for every row." },
      { id: 'C', text: "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings." },
      { id: 'D', text: "Compare 'BilledCost' against 'EffectiveCost' so that the difference shows what the commitments contributed across the period." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment management delivered. Comparing list against billed conflates the two and is distorted in any month containing an upfront purchase. The per-unit price comparison recovers the negotiated rate discount accurately but misses commitments entirely. Billed against effective shows only the timing effect of amortisation, which is a presentation difference rather than a saving.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["list-cost","contracted-cost","savings","Educational Remote Proctoring Platform"]
  },
  {
    id: "finops-focus-174",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Allocating Cost to the Owning Team: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The FinOps team is attributing every line of spend to the business owner that should carry it. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Query each provider's own tag columns and union the results, renaming the differing tag key spellings for each provider as part of the warehouse load step." },
      { id: 'B', text: "Query 'SubAccountId' and maintain a lookup table mapping accounts and subscriptions across to the team known to own each one." },
      { id: 'C', text: "Query 'ResourceName' and derive the cost owner from the naming convention that the platform team asks everyone to follow." },
      { id: 'D', text: "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export. Unioning the native tag columns achieves the same result but the union has to be revisited whenever a format changes. An account-to-team lookup is a legitimate and widely used strategy, though it is only as granular as the account boundary and cannot split a shared account. A naming convention is unenforceable in billing data, so it fails silently on every resource that ignores it.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["tags","allocation","metadata","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "finops-focus-175",
    difficulty: "hard",
    certId: "finops-focus",
    domainId: "d1",
    domainName: "FOCUS Specification Fundamentals and Column Taxonomy",
    title: "Comparing Cost Data From Several Providers: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The FinOps team is making cost data from several providers directly comparable in one warehouse. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS." },
      { id: 'B', text: "Build an internal canonical billing schema and write one mapping per provider, maintaining each of those mappings by hand as that provider changes its export format over time." },
      { id: 'C', text: "Adopt a commercial cloud cost management platform and use that product's own normalised data model as the reporting layer for every cloud and SaaS provider." },
      { id: 'D', text: "Load each provider's native export into its own table and have the FinOps team join them in the warehouse with views lining up comparable columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service arrives already mapped. An internal canonical schema is the same idea without that leverage: every provider format change becomes local maintenance. A commercial platform does normalise, but the model belongs to the product and reporting has to move with it. Per-provider tables joined by views leave every new column and service to be reconciled by hand.",
    referenceUrl: "https://www.finops.org/certification/focus-analyst/",
    tags: ["focus","finops","specification","Disaster Emergency Dispatch & Operations"]
  }
];

export default FINOPS_FOCUS_QUESTIONS_7;
