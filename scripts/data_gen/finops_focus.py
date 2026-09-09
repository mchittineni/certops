#!/usr/bin/env python3
"""
Generator for FinOps Certified FOCUS Analyst (FOCUS) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS

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
        ("FOCUS Specification Core Purpose", "Open standard for cloud cost and usage data normalization",
         "Adopt the FinOps Open Cost & Usage Specification (FOCUS) to standardize multi-cloud billing columns into a vendor-neutral schema across AWS, Azure, GCP, and SaaS.",
         "Write custom proprietary ETL scripts with disparate column names for every cloud vendor without standard taxonomy.",
         "Force all cloud providers to change their underlying billing calculation engines.",
         "Rely exclusively on monthly PDF invoices printed from vendor billing portals.",
         "The FinOps Open Cost & Usage Specification (FOCUS) is a Linux Foundation open standard that defines a common schema and terminology for cloud billing data. It establishes consistent column definitions, metrics, and dimensions across multi-cloud and SaaS providers, eliminating bespoke vendor normalization pipelines.",
         ["focus", "finops", "specification"]),

        ("BilledCost vs EffectiveCost in FOCUS", "Understanding invoice cash accounting vs amortized economic cost",
         "Use 'BilledCost' for reconciling actual vendor invoices, and 'EffectiveCost' for economic team chargeback reflecting amortized commitment discounts.",
         "Use BilledCost to charge engineering squads when a $50,000 upfront annual reservation payment is made on day one.",
         "Assume BilledCost and EffectiveCost are identical values in all billing rows.",
         "Delete the BilledCost column to simplify data warehousing pipelines.",
         "In FOCUS, 'BilledCost' represents the actual charge appearing on the invoice for the billing period (cash accounting), while 'EffectiveCost' reflects the true amortized economic cost of usage, factoring in blended discounts, upfront commitments, and credit consumption for accurate chargeback.",
         ["billed-cost", "effective-cost", "chargeback"]),

        ("FOCUS ChargeCategory and ChargeSubcategory", "Classifying billing charges across usage, purchase, tax, and credits",
         "Query the 'ChargeCategory' column to segment billing lines into 'Usage', 'Purchase', 'Tax', 'Adjustment', and 'Credit' with standard subcategories.",
         "Write regex string patterns against raw vendor service descriptions to guess whether a line is a credit or usage.",
         "Filter out all tax and adjustment rows from financial reporting databases.",
         "Assume all line items represent compute infrastructure usage.",
         "FOCUS standardizes transaction types via 'ChargeCategory' into well-defined enumerations: 'Usage' (on-demand resource consumption), 'Purchase' (commitment upfront/recurring payments), 'Tax', 'Adjustment', and 'Credit', allowing automated financial categorization without vendor-specific regex.",
         ["charge-category", "taxonomy", "accounting"]),

        ("FOCUS Column Taxonomy for Resource Hierarchy", "Standardizing provider, account, and resource identity",
         "Utilize standardized dimensions: 'ProviderName', 'BillingAccountId', 'SubAccountId', 'ResourceId', 'ResourceType', and 'RegionId'.",
         "Maintain disparate column names like 'LinkedAccountId', 'SubscriptionId', and 'ProjectID' in separate unjoined tables.",
         "Rely on user-generated freeform text tags to identify cloud providers and regions.",
         "Omit the ResourceId column from detailed line-item cost exports.",
         "FOCUS unifies resource hierarchy naming across cloud providers into predictable, typed columns: ProviderName (e.g., AWS, Azure, Google), BillingAccountId (root/enrollment/master), SubAccountId (account/subscription/project), ResourceId, and ResourceType, enabling seamless cross-cloud aggregation.",
         ["taxonomy", "hierarchy", "normalization"]),

        ("FOCUS PricingQuantity and PricingUnit", "Standardizing usage measurement units across clouds",
         "Measure usage using 'PricingQuantity' and standardized 'PricingUnit' (e.g., 'Hour', 'Gigabyte-Month', 'Request') to compare unit rates directly.",
         "Compare AWS seconds with Azure days without unit normalization.",
         "Strip all usage quantity metrics from the billing dataset to save storage space.",
         "Manually convert all usage units to kilowatt-hours before loading into SQL.",
         "FOCUS normalizes disparate vendor metering units into standard 'PricingQuantity' and 'PricingUnit' representations (e.g., 'Hour', 'Gigabyte-Month', 'Core-Hour'). This allows FinOps analysts to calculate meaningful cross-cloud unit costs and evaluate discount tiers objectively.",
         ["pricing-unit", "metrics", "usage-metering"]),

        ("FOCUS ListCost and ContractedCost", "Measuring negotiated discount savings and ROI",
         "Compare 'ListCost' (public pricing), 'ContractedCost' (negotiated enterprise rate), and 'EffectiveCost' to quantify enterprise discount savings.",
         "Assume public website retail prices reflect actual enterprise contracted spending.",
         "Delete list cost data from billing tables because it is not invoiced.",
         "Manually recalculate negotiated enterprise discounts on a handheld calculator.",
         "FOCUS provides transparent price benchmarking by defining 'ListCost' (public retail rate), 'ContractedCost' (negotiated enterprise discount rate), and 'EffectiveCost' (rate after commitments). The difference between ListCost and EffectiveCost quantifies the total financial value delivered by FinOps procurement.",
         ["list-cost", "contracted-cost", "savings"]),

        ("FOCUS Tags Dimension and JSON Normalization", "Unifying tag structures for cost allocation and ownership",
         "Query the standardized FOCUS 'Tags' dictionary column to extract cost allocation keys (e.g., 'Tags[\"cost_center\"]') uniformly across all providers.",
         "Export 50 separate tag columns that vary wildly between AWS, Azure, and Google Cloud schemas.",
         "Prohibit engineering squads from applying tags to cloud resources.",
         "Store all tags in unindexed plaintext server log files.",
         "In FOCUS, resource tags are normalized into a unified, queryable key-value map or JSON object column named 'Tags'. This eliminates schema sprawl and allows FinOps analysts to write single SQL queries that allocate costs by application, environment, or business unit across multi-cloud estates.",
         ["tags", "allocation", "metadata"])
    ]

    d2_topics = [
        ("Amortizing Commitment Discounts in FOCUS", "Distributing upfront reservation fees across hourly consumption",
         "Amortize upfront commitment fees across the utilization period, populating 'EffectiveCost' proportional to each workload's resource consumption.",
         "Assign 100% of an annual reservation payment to the first team that runs a test container on January 1st.",
         "Ignore upfront payments in cost allocation reports and report only $0 on-demand rates.",
         "Treat commitment purchases as non-reconcilable miscellaneous corporate overhead.",
         "Amortization distributes fixed, upfront, or recurring commitment fees (AWS Savings Plans/RIs, Azure Reservations, GCP CUDs) evenly across the resources and teams that actually consumed the compute capacity. In FOCUS datasets, this is reflected directly in 'EffectiveCost'.",
         ["amortization", "commitments", "effective-cost"]),

        ("Normalizing AWS CUR into FOCUS Schema", "Mapping AWS billing dimensions to FOCUS standard columns",
         "Map AWS 'lineItem/UnblendedCost' to BilledCost, 'reservation/AmortizedUpfrontCost' to EffectiveCost, and 'lineItem/ResourceId' to ResourceId.",
         "Leave AWS column headers intact and build separate custom dashboards for every AWS payer account.",
         "Discard all CUR usage rows where cost is zero due to full reservation coverage.",
         "Convert all CUR files into proprietary binary database formats that cannot be queried with standard SQL.",
         "Transforming AWS Cost and Usage Reports (CUR 2.0) into FOCUS involves mapping AWS-specific columns (lineItem/UnblendedCost, lineItem/UsageAccountId, product/region) to standardized FOCUS dimensions (BilledCost, SubAccountId, RegionId, EffectiveCost), creating a vendor-neutral dataset.",
         ["aws-cur", "mapping", "ingestion"]),

        ("Normalizing Azure Cost Management Exports", "Mapping Azure amortization and resource IDs to FOCUS",
         "Map Azure Cost Management 'CostInBillingCurrency' to BilledCost, 'PayGPrice' to ListCost, and extract standardized ResourceType from resource URIs.",
         "Assume Azure subscription names are universally unique across all external enterprises.",
         "Ignore Azure hybrid benefit discounts and report full retail licensing costs.",
         "Delete resource GUIDs and rely on ambiguous short virtual machine names.",
         "Azure Cost Management exports provide both actual cost and amortized cost datasets. Mapping Azure exports to FOCUS aligns 'CostInBillingCurrency' with BilledCost, amortizes Reservation charges into EffectiveCost, and parses Azure Resource Manager (ARM) IDs into ResourceId and ResourceType.",
         ["azure-cost", "arm", "normalization"]),

        ("Normalizing Google Cloud Billing BigQuery Export", "Mapping GCP SKU descriptions and credits into FOCUS",
         "Map GCP 'cost' to BilledCost, compute EffectiveCost by factoring in CUD credits and promotions, and normalize project.id to SubAccountId.",
         "Import raw nested GCP billing records without unnesting credit and label arrays.",
         "Exclude Google Cloud BigQuery billing data from centralized enterprise FinOps reporting.",
         "Convert all GCP project IDs into arbitrary integers that cannot be cross-referenced.",
         "Google Cloud exports detailed billing directly into BigQuery. Normalizing GCP data to FOCUS requires unnesting the 'credits' repeated record to calculate EffectiveCost accurately and mapping 'project.id', 'service.description', and 'sku.description' to standard FOCUS columns.",
         ["gcp-billing", "bigquery", "ingestion"]),

        ("Multi-Currency Conversion and Exchange Rates", "Standardizing global cloud spend into a single base reporting currency",
         "Apply daily or monthly vendor exchange rates to convert disparate local billed currencies into a uniform corporate base reporting currency in FOCUS.",
         "Add Euro, Yen, and US Dollar numbers together directly without currency conversion.",
         "Assume currency exchange rates remain completely static across multi-year enterprise contracts.",
         "Convert all financial records to cryptocurrency tokens before financial reporting.",
         "Global enterprises operate accounts billed in multiple currencies (USD, EUR, GBP, JPY). When ingesting multi-cloud data into FOCUS, analysts apply standardized exchange rates to normalize values into a common corporate currency (e.g., 'BillingCurrency' and 'BaseCurrency') for executive rollups.",
         ["currency", "exchange-rates", "global-billing"]),

        ("Handling SaaS and Shared Platform Charges", "Incorporating Datadog, Snowflake, and Kubernetes into FOCUS",
         "Ingest SaaS provider billing exports (Snowflake, Datadog) using FOCUS dimensions, setting 'ProviderName' to the vendor and mapping cluster telemetry.",
         "Exclude all SaaS expenditures from company cloud financial reporting.",
         "Classify all Snowflake warehouse usage as AWS EC2 compute infrastructure.",
         "Refuse to track SaaS costs because they are billed on commercial credit cards.",
         "FOCUS is provider-agnostic and explicitly designed to accommodate third-party SaaS, PaaS, and internal shared platforms (Kubernetes clusters, Datadog, Snowflake). Ingesting these datasets into the FOCUS schema gives leadership an accurate total cost of ownership (TCO) across all digital services.",
         ["saas", "tco", "multi-provider"]),

        ("Data Validation and Quality Controls in Ingestion", "Detecting schema drift and missing billing line items",
         "Implement automated data quality gates in billing ETL pipelines to verify row count checksums, schema compliance, and total cost reconciliation against invoices.",
         "Load raw, unverified billing CSV files directly into production business intelligence dashboards with no checks.",
         "Ignore multi-million dollar billing discrepancies between data lake aggregates and official invoice totals.",
         "Disable ETL error alerting to prevent on-call engineer notifications.",
         "Robust FinOps data pipelines require automated quality validation: checking that sum(BilledCost) exactly matches the monthly PDF invoice, ensuring required FOCUS columns have non-null values, and validating that newly added cloud services adhere to the standard schema.",
         ["data-quality", "reconciliation", "validation"])
    ]

    d3_topics = [
        ("Unit Economics and Business Metric Alignment", "Calculating cost per business outcome with FOCUS datasets",
         "Join FOCUS EffectiveCost datasets with business telemetry (e.g., active users, transactions processed) to calculate granular Unit Economics (Cost per Transaction).",
         "Track only raw gross cloud expenditure without measuring corresponding revenue growth.",
         "Assume that an increase in cloud spending always indicates an operational engineering failure.",
         "Calculate unit costs by dividing total cloud spend by the number of employed engineers.",
         "Unit Economics is a core FinOps maturity metric. By combining normalized FOCUS cost data with business telemetry (orders processed, streaming hours, monthly active users), organizations track whether cloud spend is scaling efficiently relative to revenue growth.",
         ["unit-economics", "kpi", "business-value"]),

        ("Showback vs Chargeback Implementation", "Driving financial accountability across engineering organizations",
         "Implement Showback reports using FOCUS data to create visibility and awareness, transitioning to automated financial Chargeback as FinOps culture matures.",
         "Send engineers unexpected six-figure physical bills with no explanation or drill-down data.",
         "Hide cloud costs from software engineering teams to keep them focused solely on feature velocity.",
         "Charge back 100% of cloud costs to central IT without attributing any usage to product business units.",
         "Showback provides engineering teams with visibility into their cloud consumption without transferring internal accounting ledger funds. Chargeback directly debits the cost center budget of the team that generated the expense, incentivizing proactive optimization and architectural efficiency.",
         ["showback", "chargeback", "accountability"]),

        ("Detecting Waste and Idle Resources", "Identifying zombie infrastructure using usage and pricing columns",
         "Query FOCUS data where 'EffectiveCost' is recurring but 'PricingQuantity' or compute utilization is near zero to flag idle virtual machines and unattached storage.",
         "Terminate all running production database instances without notifying engineering owners.",
         "Assume that all running cloud infrastructure is actively generating customer business value.",
         "Ignore unattached disk volumes and idle load balancers because individual unit costs appear small.",
         "By combining FOCUS cost dimensions with cloud performance metrics (CPU utilization, network I/O, disk activity), FinOps teams isolate 'zombie' infrastructure: unattached persistent disks, idle load balancers, and overprovisioned virtual machines that accumulate cost without delivering value.",
         ["waste-reduction", "idle-resources", "optimization"]),

        ("Cost Anomaly Detection and Root-Cause Analysis", "Catching sudden cost spikes before invoice closing",
         "Build automated anomaly detection models on daily FOCUS billing streams to alert on sudden deviations in EffectiveCost by service or resource.",
         "Wait 45 days after month-end to discover that an infinite recursive Lambda loop caused a $100,000 cost surge.",
         "Ignore cost anomalies under $500,000 as acceptable statistical noise.",
         "Disable all billing alerts to reduce email inbox clutter.",
         "Automated cost anomaly detection monitors daily or hourly FOCUS ingestion streams. When spending deviates from seasonal baselines, alerts immediately notify resource owners with exact ResourceId, SubAccount, and ServiceName details for instant remediation before invoice shock.",
         ["anomaly-detection", "alerting", "remediation"]),

        ("Shared Cost Allocation and Platform Amortization", "Distributing common infrastructure costs equitably",
         "Allocate shared platform costs (e.g., central Kubernetes clusters, security tools, networking transit gateways) across tenant teams based on proportional usage.",
         "Dump all shared Kubernetes cluster costs into a single unallocated IT overhead bucket.",
         "Arbitrarily divide shared networking costs in half regardless of data transfer volumes.",
         "Refuse to deploy shared platform infrastructure because allocation is complex.",
         "Shared costs—such as multi-tenant Kubernetes clusters, direct connect links, and centralized security monitoring—cannot be cleanly attributed to a single team. FinOps analysts use proportional allocation algorithms (splitting shared costs according to each tenant's percentage of total direct compute usage).",
         ["shared-costs", "allocation", "platform-engineering"]),

        ("Executive KPI Dashboards and Multi-Cloud Benchmarking", "Providing actionable reporting for leadership",
         "Create executive FOCUS dashboards displaying multi-cloud spend trends, commitment coverage percentages, waste reduction metrics, and forecasted budget variance.",
         "Present executives with unformatted 500,000-row CSV raw billing files during board meetings.",
         "Report only a single static total dollar number without breakdown by business unit or cloud provider.",
         "Hide unfavorable cost overruns from senior leadership.",
         "Executive FinOps dashboards synthesize massive billing datasets into high-signal strategic KPIs: total multi-cloud spend trends, commitment coverage (percentage of eligible spend covered by reservations), allocation percentage (tagged vs untagged), and budget variance forecast.",
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
            title_prefix, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
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
            
            scenario = f"In a {context_title.lower()} organization, {context_desc.lower()} The FinOps cloud economics team is currently {scenario_core.lower()} under reporting cycle {pack_idx}.{i+1}."
            question_text = f"Which FOCUS standard column definition, ingestion transformation, or analytical approach satisfies these {context_title.lower()} financial criteria for {title_prefix.lower()}?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{title_prefix}: {context_title}",
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
