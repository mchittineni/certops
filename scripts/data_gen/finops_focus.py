#!/usr/bin/env python3
"""
Generator for FinOps Certified FOCUS Analyst (FOCUS) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS, STAGES

DOMAINS = [
    {"id": "d1", "name": "FOCUS Specification Fundamentals and Column Taxonomy", "weight": 35},
    {"id": "d2", "name": "Multi-Cloud Billing Data Normalization and Ingestion", "weight": 35},
    {"id": "d3", "name": "Cost Analysis, Allocation, and KPI Reporting with FOCUS", "weight": 30}
]

CERT_ID = "finops-focus"
EXPORT_PREFIX = "FINOPS_FOCUS"
REF_URL = "https://www.finops.org/certification/focus-analyst/"

def build_finops_focus_bank():
    # 20 packs:
    # Packs 1-7: Domain 1 (175 items) 35%
    # Packs 8-14: Domain 2 (175 items) 35%
    # Packs 15-20: Domain 3 (150 items) 30%
    pack_domains = (
        [DOMAINS[0]] * 7 +
        [DOMAINS[1]] * 7 +
        [DOMAINS[2]] * 6
    )

    d1_topics = [
        ("FOCUS Specification Core Purpose", "Comparing Cost Data From Several Providers",
         "making cost data from several providers directly comparable in one warehouse",
         "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS.",
         "Build an internal canonical billing schema and write one mapping per provider, maintaining each of those mappings by hand as that provider changes its export format over time.",
         "Adopt a commercial cloud cost management platform and use that product's own normalised data model as the reporting layer for every cloud and SaaS provider.",
         "Load each provider's native export into its own table and join them in the warehouse with views that line up the comparable columns.",
         "FOCUS is an open specification that the providers themselves publish conforming exports against, so the normalisation is maintained upstream and a new service arrives already mapped. An internal canonical schema is the same idea without that leverage: every provider format change becomes local maintenance. A commercial platform does normalise, but the model belongs to the product and reporting has to move with it. Per-provider tables joined by views leave every new column and service to be reconciled by hand.",
         ["focus", "finops", "specification"]),

        ("BilledCost vs EffectiveCost in FOCUS", "Which Cost Column Ties Out to the Invoice",
         "reconciling to the vendor invoice while charging teams a stable monthly figure",
         "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts.",
         "Use 'EffectiveCost' for the invoice reconciliation as well as the team chargeback so that one column is applied consistently everywhere.",
         "Use 'ContractedCost' for both purposes, since it reflects the rate that the organisation actually negotiated with its provider.",
         "Use 'ListCost' for the chargeback so that teams see the undiscounted rate and the savings remain with the central FinOps function.",
         "BilledCost is the charge that appears on the invoice for the period, so it is the only column that ties out to the cash, while EffectiveCost spreads a commitment purchase across the usage that consumed it, which is what makes a monthly team figure stable. Using EffectiveCost for reconciliation will not match the invoice in any month containing an upfront payment. ContractedCost carries the negotiated rate but no amortisation, so an upfront purchase still lands in a single month. Charging teams at ListCost bills them for a discount the organisation did receive.",
         ["billed-cost", "effective-cost", "chargeback"]),

        ("FOCUS ChargeCategory and ChargeSubcategory", "Separating Usage From Purchases, Tax, and Credits",
         "splitting billing lines into consumption, commitment purchases, tax, and credits",
         "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories.",
         "Query the 'ServiceCategory' column, which groups every usage line by the kind of service that it belongs to consistently across all of the supported providers.",
         "Query the 'ChargeClass' column, which marks whether a given line is a correction applied to a previously invoiced period.",
         "Query the 'CommitmentDiscountStatus' column, which reports whether a line represents used or unused commitment capacity.",
         "ChargeCategory is the column FOCUS defines for exactly this split, with a closed set of values so a query written once keeps working as providers add services. ServiceCategory answers a different question, grouping by what the service does rather than what kind of charge the line is. ChargeClass distinguishes a regular line from a correction to an earlier period, which is orthogonal to whether the charge is usage or tax. CommitmentDiscountStatus applies only to lines covered by a commitment and says nothing about tax, credits, or adjustments.",
         ["charge-category", "taxonomy", "accounting"]),

        ("FOCUS Column Taxonomy for Resource Hierarchy", "Aggregating Accounts and Resources Across Clouds",
         "grouping spend by account and resource consistently across every provider",
         "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'.",
         "Join each provider's native identifier columns, mapping LinkedAccountId, SubscriptionId, and project.id onto a shared key at query time.",
         "Use 'InvoiceIssuerName' and 'BillingAccountName' as the grouping keys, since together they identify who is being billed for each line.",
         "Use the 'Tags' column and require every team to tag its resources with the owning account and region so the hierarchy is readable.",
         "The FOCUS hierarchy columns are typed and populated by the provider, so one grouping expression works across clouds and keeps working as accounts are added. Mapping the native identifiers at query time reproduces those columns in every query that needs them and breaks when a provider renames a field. InvoiceIssuerName and BillingAccountName identify the billing relationship, which is not the same as the account a resource lives in, and names are not stable identifiers. Tags depend on teams applying them and are missing on exactly the untagged resources that most need attributing.",
         ["taxonomy", "hierarchy", "normalization"]),

        ("FOCUS PricingQuantity and PricingUnit", "Making Cost Comparisons Valid Between Providers",
         "comparing the unit rate paid for equivalent resources on different providers",
         "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly.",
         "Measure usage with 'ConsumedQuantity' and 'ConsumedUnit', which together record the metered amount of the resource that was actually used.",
         "Compare the providers on 'ListUnitPrice' alone, since the public rate is the one figure each of them quotes in the same units.",
         "Divide 'EffectiveCost' by 'ContractedUnitPrice' on each line so that a comparable quantity is derived from the cost columns.",
         "PricingQuantity and PricingUnit describe the basis on which the line was actually priced, which is what makes a rate divided by a quantity meaningful. ConsumedQuantity and ConsumedUnit record metered consumption, and the two differ whenever pricing is blocked, so a thousand requests priced as one unit would distort the comparison. ListUnitPrice compares published rates rather than what the organisation paid. Deriving the quantity by dividing cost by unit price reconstructs PricingQuantity with rounding error and fails on any line where the price is zero.",
         ["pricing-unit", "metrics", "usage-metering"]),

        ("FOCUS ListCost and ContractedCost", "Separating Two Sources of Discount Value",
         "separating the value delivered by rate negotiation from the value of commitments",
         "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings.",
         "Compare 'ListCost' against 'BilledCost' so that the difference captures every single discount which reached the invoice during that particular month.",
         "Compare 'ContractedUnitPrice' against 'ListUnitPrice' on each line and multiply the gap by the pricing quantity for every row.",
         "Compare 'BilledCost' against 'EffectiveCost' so that the difference shows what the commitments contributed across the period.",
         "The three-way comparison isolates each source of value: list to contracted is what rate negotiation delivered, and contracted to effective is what commitment management delivered. Comparing list against billed conflates the two and is distorted in any month containing an upfront purchase. The per-unit price comparison recovers the negotiated rate discount accurately but misses commitments entirely. Billed against effective shows only the timing effect of amortisation, which is a presentation difference rather than a saving.",
         ["list-cost", "contracted-cost", "savings"]),

        ("FOCUS Tags Dimension and JSON Normalization", "Allocating Cost to the Owning Team",
         "attributing every line of spend to the business owner that should carry it",
         "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers.",
         "Query each provider's own tag columns and union the results, renaming the differing tag key spellings for each provider as part of the warehouse load step.",
         "Query 'SubAccountId' and maintain a lookup table mapping each account or subscription onto the team that is known to own it.",
         "Query 'ResourceName' and derive the cost owner from the naming convention that the platform team asks everyone to follow.",
         "FOCUS normalises provider tags into one key-value column, so a single expression allocates spend across every cloud and survives a provider changing its export. Unioning the native tag columns achieves the same result but the union has to be revisited whenever a format changes. An account-to-team lookup is a legitimate and widely used strategy, though it is only as granular as the account boundary and cannot split a shared account. A naming convention is unenforceable in billing data, so it fails silently on every resource that ignores it.",
         ["tags", "allocation", "metadata"])
    ]

    d2_topics = [
        ("Amortizing Commitment Discounts in FOCUS", "Spreading an Upfront Purchase Over the Term",
         "presenting a large upfront commitment payment fairly to the teams that consume it",
         "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption.",
         "Record the upfront fee under ChargeCategory 'Purchase' in the month that it is paid and leave all of the usage lines sitting at their discounted rates.",
         "Divide the upfront fee evenly across the months of the term and allocate each month's share equally between all of the teams.",
         "Allocate the upfront fee to the teams in proportion to their share of total spend right across the billing account.",
         "Amortisation attaches the fee to the usage that drew on the commitment, so a team's monthly figure reflects what it consumed and no month is distorted by the purchase date. Booking the fee as a Purchase in the paid month is exactly what BilledCost already does and is correct for invoice reconciliation, but it makes January unusable for chargeback. An even split across months fixes the timing yet charges teams that never used the capacity. Allocating on total account spend is a proxy that overcharges teams whose usage was never eligible for the commitment.",
         ["amortization", "commitments", "effective-cost"]),

        ("Normalizing AWS CUR into FOCUS Schema", "Mapping an AWS Export Into the Standard Schema",
         "mapping the AWS Cost and Usage Report onto the standard cost columns",
         "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId.",
         "Map 'lineItem/BlendedCost' to BilledCost, since blending already spreads the commitment benefit across the accounts in the organisation.",
         "Map 'lineItem/NetUnblendedCost' to BilledCost and treat every discount as having already been applied at the individual line level.",
         "Map 'pricing/publicOnDemandCost' to BilledCost so that the dataset always carries a rate that is comparable between accounts.",
         "Unblended cost is the charge attributed to the account as invoiced, which is what BilledCost means, and the amortized reservation columns supply the commitment spread EffectiveCost needs. Blended cost averages rates across the organisation, so no individual account's figure ties to anything on its invoice. Net unblended has already netted discounts, which double-counts once credits are loaded as their own Credit rows. Public on-demand cost is the definition of ListCost and was never the amount billed.",
         ["aws-cur", "mapping", "ingestion"]),

        ("Normalizing Azure Cost Management Exports", "Mapping an Azure Export Into the Standard Schema",
         "mapping the Azure Cost Management exports onto the standard cost columns",
         "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs.",
         "Map the Azure amortised cost export to BilledCost and the actual cost export to EffectiveCost, since amortisation is what appears on the invoice.",
         "Map 'UnitPrice' to ListCost, since the unit price recorded against each line is the published rate before any agreement is applied.",
         "Map the subscription display name to SubAccountId so that the reports carry a readable identifier for each of the subscriptions.",
         "Azure publishes an actual cost export, which matches the invoice and therefore BilledCost, and an amortised export, which carries the spread commitment cost and therefore EffectiveCost; PayGPrice is the pay-as-you-go rate and maps to ListCost. Swapping the two exports inverts the definitions, since it is actual cost rather than amortised cost that appears on the invoice. UnitPrice already reflects the negotiated agreement, so mapping it to ListCost understates the discount. Display names are mutable and not unique, which makes them unsafe as an identifier.",
         ["azure-cost", "arm", "normalization"]),

        ("Normalizing Google Cloud Billing BigQuery Export", "Mapping a Google Cloud Export Into the Schema",
         "mapping the Google Cloud BigQuery billing export onto the standard cost columns",
         "Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId.",
         "Map 'cost' to BilledCost and sum the nested credits into separate Credit rows instead of reflecting them within EffectiveCost.",
         "Map 'cost_at_list' to BilledCost so that the figure is stated before any committed use or sustained use discount applies.",
         "Map 'project.name' to SubAccountId, since the project display name is the identifier the finance team already recognises.",
         "The GCP export records cost before credits and holds the credits in a repeated field, so EffectiveCost only becomes correct once that field is unnested and applied. Emitting the credits as separate rows preserves the total but leaves every usage line overstated, so any per-resource or per-team figure is wrong. cost_at_list is the undiscounted amount and belongs in ListCost. Project names can be changed and repeated, whereas project.id is the stable identifier SubAccountId requires.",
         ["gcp-billing", "bigquery", "ingestion"]),

        ("Multi-Currency Conversion and Exchange Rates", "Reporting Global Spend in a Single Currency",
         "rolling up spend billed in several local currencies into one reporting currency",
         "Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS.",
         "Apply the corporate treasury's budget rate for the financial year so that the reported spend stays directly comparable against the plan for that financial reporting year.",
         "Apply the spot exchange rate on the day each report is produced so that every historical month is restated at the current rate.",
         "Use the 'BillingCurrency' amounts as they stand and let each region report its own spend in the currency it was billed in.",
         "Converting at the rate for the period a charge belongs to keeps a closed month closed and stays close to the cash actually settled. A treasury budget rate is genuinely used for variance-against-plan reporting, but it deliberately diverges from what was spent and cannot be reconciled to the invoices. Restating history at today's spot rate changes last quarter's reported spend every time the report is refreshed. Leaving amounts in local currency makes any group-level total meaningless.",
         ["currency", "exchange-rates", "global-billing"]),

        ("Handling SaaS and Shared Platform Charges", "Bringing Non-Cloud Vendors Into the Same Reporting",
         "including SaaS and internal platform spend in the same reporting as cloud spend",
         "Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping usage onto the standard columns.",
         "Record each SaaS invoice as one monthly total per vendor in the finance system and report those totals alongside the cloud figures in the same summary.",
         "Keep the SaaS spend in a separate dataset entirely and combine the two sets of totals only at the executive summary level each month.",
         "Record each SaaS vendor under whichever cloud provider's marketplace the subscription happened to have been purchased through originally.",
         "FOCUS is provider-agnostic, so a SaaS export loaded against the same columns is allocated, filtered, and trended by exactly the queries that already serve cloud spend. A single monthly total per vendor arrives at the right group figure but cannot be attributed to a team or a service, which is where the questions actually get asked. A separate dataset joined only at the summary level has the same limitation one level up. Filing a vendor under the marketplace it was bought through misstates ProviderName and makes that cloud's spend look larger than it is.",
         ["saas", "tco", "multi-provider"]),

        ("Data Validation and Quality Controls in Ingestion", "Trusting What the Billing Pipeline Produces",
         "ensuring a billing load is complete and correct before anyone reports from it",
         "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices.",
         "Reconcile the loaded totals against the invoice once a month during the close and investigate whatever variance happens to be found at that point in the monthly cycle.",
         "Alert on any day where the total spend moves by more than a set percentage from the previous day's figure right across the whole of the estate.",
         "Validate the schema on load and reject any billing file whose columns do not exactly match the expected FOCUS column list for that provider.",
         "Gating every load on row counts, schema, and reconciliation to the invoice catches all three ways a load goes wrong, and it catches them before the data is reported from. A monthly reconciliation finds the same discrepancy weeks after decisions were taken on the bad figures. A day-over-day threshold is anomaly detection wearing a data-quality label: a genuine drop in spend and a load that lost half its rows look identical. Schema validation alone passes a file that is perfectly well-formed and half empty.",
         ["data-quality", "reconciliation", "validation"])
    ]

    d3_topics = [
        ("Unit Economics and Business Metric Alignment", "Cost Per Business Outcome",
         "showing whether cloud spend is growing faster than the business it supports",
         "Join FOCUS EffectiveCost datasets with business metrics (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction).",
         "Track the month-on-month growth rate of total cloud spend and compare that rate against the business's overall revenue growth over the same reporting period each quarter.",
         "Track spend per service and divide it by the number of resources deployed so that the average cost of each deployed resource becomes known.",
         "Track total spend per team each month and compare the trend against that team's own headcount and its recent delivery velocity.",
         "Dividing cost by the business outcome it produces turns spend into a rate that can rise or fall independently of growth, so a doubling of cost against a tripling of transactions reads correctly as an improvement. Comparing spend growth against revenue growth gives one company-wide number that hides which services are getting worse. Cost per resource measures infrastructure density rather than business value, and a team's headcount is not the outcome the business buys.",
         ["unit-economics", "kpi", "business-value"]),

        ("Showback vs Chargeback Implementation", "Making Teams Accountable for Their Spend",
         "introducing financial accountability to engineering teams that have never had it",
         "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures.",
         "Implement Chargeback from the outset so that every team's budget carries its own cloud costs from the very first reporting period onwards.",
         "Implement a central budget with per-team quotas enforced automatically by policy so that spend is capped well before it ever needs to be allocated to anyone.",
         "Implement Showback only, on the basis that visibility changes behaviour and that moving budgets between teams creates unproductive friction.",
         "Showback first gives teams numbers they can check and argue with while nothing is at stake, so by the time budgets move the allocation is trusted and the conversation is about the spend rather than the data. Chargeback from day one attaches real financial consequences to allocation that is usually still incomplete, which reliably produces disputes about tagging. Quotas cap spend without attributing it and tend to block delivery at the worst moment. Stopping at showback works until visibility has done its work and nothing further changes.",
         ["showback", "chargeback", "accountability"]),

        ("Detecting Waste and Idle Resources", "Finding Resources That Cost Without Being Used",
         "identifying resources that keep costing money without doing any useful work",
         "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage.",
         "Query the 'CommitmentDiscountStatus' column for unused commitment capacity and treat whatever portion of it is unused as the waste that ought to be recovered first across the estate.",
         "Query for the resources whose EffectiveCost has grown fastest month on month and investigate whichever of the largest increases appear first.",
         "Query for the resources with the highest EffectiveCost in each month and review the largest of them together with their owning teams.",
         "Pairing a recurring charge with near-zero usage is what defines an idle resource, and it surfaces the unattached disk and the forgotten load balancer that no cost ranking would ever reach. Unused commitment capacity is real waste but a different kind, and recovering it means changing the commitment rather than the resource. Fastest-growing and largest-cost resources are both worth reviewing, yet the biggest line is usually the production database that is entirely justified, while the waste hides among small recurring charges.",
         ["waste-reduction", "idle-resources", "optimization"]),

        ("Cost Anomaly Detection and Root-Cause Analysis", "Catching a Cost Spike Before the Invoice",
         "catching an unexpected spend increase within a day rather than at month end",
         "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource.",
         "Set a monthly budget for each account with alerts raised at fixed percentage thresholds of the total amount that was budgeted.",
         "Forecast each month's spend from the preceding months and raise an alert whenever that forecast exceeds the budget that was set for the period.",
         "Review the daily spend dashboard each morning so that any unusual movement is noticed by the FinOps team reasonably promptly.",
         "A baseline held per service or resource fires when something is abnormal for that resource, even where the account total looks ordinary, and it fires the day it happens. A budget threshold only trips once the whole account has burned through its allowance, by which time a runaway process has been running for days. A forecast against budget answers whether the month will overrun rather than what changed and where. A person reading a dashboard each morning catches the dramatic spikes and misses the steady ones.",
         ["anomaly-detection", "alerting", "remediation"]),

        ("Shared Cost Allocation and Platform Amortization", "Dividing the Cost of a Shared Platform",
         "attributing the cost of a shared cluster and network to the teams using it",
         "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage.",
         "Allocate the shared platform costs to each tenant in proportion to that team's total direct cloud spend, as measured over the same billing period in each and every month of the year.",
         "Leave the shared platform costs in a central platform cost centre and report them entirely separately from the individual tenant teams.",
         "Allocate the shared platform costs evenly between the tenant teams so that each one of them carries an identical share of the total.",
         "Allocating on measured consumption of the shared service, such as pod CPU and memory hours or data processed by the gateway, ties each team's charge to the driver it controls, so reducing usage visibly reduces the bill. Splitting by total direct spend is a common proxy but correlates weakly with cluster usage, so a team with heavy managed-database spend subsidises a heavy cluster user. Leaving the cost central is accurate and shows no team what it consumes. An even split charges the smallest tenant the same as the largest.",
         ["shared-costs", "allocation", "platform-engineering"]),

        ("Executive KPI Dashboards and Multi-Cloud Benchmarking", "Reporting That Leadership Can Act On",
         "reporting cloud spend to leadership in a form that supports a decision",
         "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance.",
         "Distribute the detailed allocation report to every business unit and let the leadership team read through whichever of the sections happen to concern them the most that month.",
         "Create a dashboard driven by unit economics alone, since cost per transaction is the only figure that the business leadership really needs.",
         "Create a dashboard showing total spend by provider and by month so that leadership is able to see exactly where the money is going.",
         "Each of those measures maps to a decision an executive can take: coverage to whether more commitment should be bought, waste to whether optimisation is funded, forecast variance to whether the budget needs revising. Handing out the detailed allocation report delegates the summarising to the reader. Unit economics is the strongest single metric but on its own gives no view of coverage or forecast. Spend by provider and month describes what happened accurately while implying nothing about what to do next.",
         ["kpi", "dashboards", "executive-reporting"])
    ]

    q_id_counter = 1
    fc_id_counter = 1

    for pack_idx in range(1, 21):
        domain = pack_domains[pack_idx - 1]
        
        if domain["id"] == "d1":
            topics_pool = d1_topics
        elif domain["id"] == "d2":
            topics_pool = d2_topics
        else:
            topics_pool = d3_topics
            
        pack_questions = []
        pack_cards = []

        for i in range(25):
            topic_idx = (i + (pack_idx - 1) * 3) % len(topics_pool)
            title_prefix, challenge, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
            context_title, context_desc = CONTEXTS[i]
            
            if i < 5:
                diff = "easy"
            elif i < 20:
                diff = "medium"
            else:
                diff = "hard"
                
            q_id = f"finops-focus-{q_id_counter}"
            fc_id = f"finops-focus-fc-{fc_id_counter}"
            
            target_slot = i % 4
            distractors = [dist1, dist2, dist3]
            
            options = []
            d_idx = 0
            for slot_idx in range(4):
                slot_id = chr(65 + slot_idx)
                if slot_idx == target_slot:
                    options.append({"id": slot_id, "text": correct_text})
                else:
                    options.append({"id": slot_id, "text": distractors[d_idx]})
                    d_idx += 1

            correct_letter = chr(65 + target_slot)
            
            scenario = f"{context_desc} The FinOps team is {scenario_core}. The work is scoped to {STAGES[(pack_idx - 1) % len(STAGES)]}."
            question_text = "Which approach best meets these requirements?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{challenge}: {context_title}",
                "scenario": scenario,
                "question": question_text,
                "options": options,
                "correctAnswers": [correct_letter],
                "type": "single",
                "explanation": explanation,
                "referenceUrl": REF_URL,
                "tags": tags + [context_title]
            })
            
            fc_front = f"FinOps FOCUS: {title_prefix} in {context_title}"
            fc_hint = f"Focus on {tags[0]} and {tags[1]} fundamentals."
            fc_back = f"<strong>{title_prefix}</strong>: {correct_text} Core FinOps standard: {explanation[:160]}..."
            
            pack_cards.append({
                "id": fc_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "front": fc_front,
                "hint": fc_hint,
                "back": fc_back,
                "tags": tags + [context_title]
            })
            
            q_id_counter += 1
            fc_id_counter += 1

        write_question_pack(CERT_ID, f"{EXPORT_PREFIX}_QUESTIONS", pack_idx, pack_questions)
        write_flashcard_pack(CERT_ID, f"{EXPORT_PREFIX}_FLASHCARDS", pack_idx, pack_cards)

    print(f"Generated 500 questions and 500 flashcards for {CERT_ID} across 20 packs.")

if __name__ == "__main__":
    build_finops_focus_bank()
