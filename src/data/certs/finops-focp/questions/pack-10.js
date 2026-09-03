export const FINOPS_FOCP_QUESTIONS_10 = [
  {
    id: "focp-226",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Chargeback Disputes Resolution Process",
    scenario: "A product manager disputes a $15,000 chargeback line item on their monthly department P&L, claiming the underlying cloud resources were actually used by a different team's data science project.",
    question: "What governance capability must the FinOps team have in place to resolve such disputes objectively?",
    options: [
      { id: 'A', text: "Automatically splitting the disputed cost 50/50 without investigating" },
      { id: 'B', text: "Enforced tagging taxonomy audits, resource ownership metadata, and immutable audit logs that record who launched and modified the resources" },
      { id: 'C', text: "A coin flip protocol administered by the finance department" },
      { id: 'D', text: "Deleting the disputed resources to prevent future arguments" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Resolving chargeback disputes objectively requires robust governance: enforced tag policies (Owner, Project, CostCenter), integration with CMDB/identity systems, and CloudTrail/Activity Logs that prove authoritatively which service or team launched and configured the disputed resources.",
    referenceUrl: "https://www.finops.org/framework/capabilities/chargeback-showback/",
    tags: ["Disputes", "Chargeback", "Audit Logs", "Governance"]
  },
  {
    id: "focp-227",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Cost Optimization for Managed Database Snapshots",
    scenario: "A DevOps team configures automated daily snapshots for 50 production Amazon RDS and Azure SQL databases with no automated expiration policy, accumulating over 20,000 snapshots over three years.",
    question: "What optimization policy should the FinOps team establish to manage snapshot storage costs?",
    options: [
      { id: 'A', text: "Implement automated lifecycle retention rules that retain daily snapshots for 30 days, monthly snapshots for 1 year, and delete aged obsolete manual snapshots" },
      { id: 'B', text: "Disable all database backups to eliminate snapshot storage entirely" },
      { id: 'C', text: "Convert all relational databases into flat text files stored in web servers" },
      { id: 'D', text: "Export every snapshot to floppy disks stored in physical filing cabinets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Database snapshots are billed based on total gigabytes stored beyond free backup allowances. Implementing automated backup retention policies (e.g. AWS Backup or native RDS retention) purges obsolete manual snapshots while maintaining required compliance and disaster recovery RPOs.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Snapshots", "Databases", "Backups", "Lifecycle"]
  },
  {
    id: "focp-228",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Culture: Collaborative Blameless Retrospectives",
    scenario: "A junior developer accidentally writes an automated script that launches 500 high-memory instances overnight, incurring a $12,000 cloud bill before detection.",
    question: "In a mature FinOps culture, how should leadership and the FinOps team handle this incident?",
    options: [
      { id: 'A', text: "Conduct a blameless post-mortem to identify systemic gaps in automated budget alerts and implement preventative guardrails (like IAM launch limits and SCPs)" },
      { id: 'B', text: "Hide the expense from finance and falsify accounting records" },
      { id: 'C', text: "Immediately ban all junior developers from accessing cloud environments permanently" },
      { id: 'D', text: "Publicly reprimand the developer and deduct the $12,000 from their personal salary" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FinOps champions a blameless culture. Failures and mistakes are treated as learning opportunities to improve systems. The team conducts a blameless retrospective to identify why guardrails failed, installs automated anomaly alerts, and enforces spending limits to prevent recurrence.",
    referenceUrl: "https://www.finops.org/framework/culture/",
    tags: ["Culture", "Blameless", "Incident Management", "Leadership"]
  },
  {
    id: "focp-229",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps and SaaS Cost Management",
    scenario: "An enterprise notices that while cloud IaaS/PaaS spend is well-managed, third-party SaaS expenditures (Datadog, Snowflake, GitHub, OpenAI) are growing at 80% year-over-year with zero central oversight.",
    question: "How does the FinOps framework extend beyond cloud infrastructure providers into SaaS cost management?",
    options: [
      { id: 'A', text: "By applying the same FinOps capabilities—visibility, allocation, license rightsizing, usage tracking, and rate negotiation—to third-party consumption-based SaaS platforms" },
      { id: 'B', text: "By cancelling all corporate SaaS subscriptions and forcing engineers to build all tools in-house" },
      { id: 'C', text: "FinOps strictly forbids managing any SaaS products or external vendors" },
      { id: 'D', text: "SaaS tools do not incur ongoing costs once purchased" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modern FinOps encompasses all cloud consumption, including consumption-based SaaS and specialized AI services. The FinOps principles apply equally: understanding contract commitments, allocating usage to business units, monitoring active seat utilization, and eliminating inactive licenses.",
    referenceUrl: "https://www.finops.org/framework/capabilities/saas-operations/",
    tags: ["SaaS", "FinOps Scope", "Procurement", "Governance"]
  },
  {
    id: "focp-230",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Spot Instance Orchestration for Batch Analytics",
    scenario: "A data engineering team runs nightly 4-hour batch ETL processing jobs on Amazon EMR and Apache Spark that can tolerate node interruptions without losing data.",
    question: "Which compute purchasing model maximizes cost savings for this fault-tolerant workload?",
    options: [
      { id: 'A', text: "Standard On-Demand instances exclusively to avoid any potential node restarts" },
      { id: 'B', text: "Running the batch jobs on local developer laptops" },
      { id: 'C', text: "A mixed-instance cluster using Spot Instances for worker nodes combined with On-Demand or Savings Plans for the primary master node" },
      { id: 'D', text: "Dedicated Hosts with 3-year upfront commitments" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For fault-tolerant, checkpointed big data workloads, Spot Instances provide up to 90% savings compared to on-demand pricing. Best practices pair a reliable On-Demand or committed master node with diversified Spot instance fleets for data processing worker nodes.",
    referenceUrl: "https://www.finops.org/framework/capabilities/rate-optimization/",
    tags: ["Spot Instances", "Batch Processing", "Big Data", "Cost Optimization"]
  },
  {
    id: "focp-231",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capability: Rate Optimization vs. Usage Optimization",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "What is the primary difference in operational ownership between Rate Optimization and Usage Optimization?",
    options: [
      { id: 'A', text: "Rate Optimization is performed by developers; Usage Optimization is performed by corporate accountants" },
      { id: 'B', text: "Rate Optimization changes the application code; Usage Optimization changes the billing invoice" },
      { id: 'C', text: "There is no operational difference between rate and usage optimization" },
      { id: 'D', text: "Rate Optimization (pricing, commitments) is typically centralized; Usage Optimization (turning off, rightsizing) is decentralized to engineering teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rate optimization changes what you pay for resources (purchasing commitments, negotiating EDP discounts, optimizing licensing), which is most efficiently managed by a centralized FinOps team. Usage optimization changes how much you consume (rightsizing, modernizing code, eliminating idle waste), which must be executed by engineering teams.",
    referenceUrl: "https://www.finops.org/framework/capabilities/rate-optimization/",
    tags: ["Rate Optimization", "Usage Optimization", "Ownership", "Governance"]
  },
  {
    id: "focp-232",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Integration with Enterprise IT Asset Management (ITAM)",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "How does FinOps intersect with traditional IT Asset Management (ITAM) in a hybrid cloud enterprise?",
    options: [
      { id: 'A', text: "There is zero overlap between FinOps and ITAM disciplines" },
      { id: 'B', text: "ITAM manages cloud bills while FinOps manages physical data center server racking" },
      { id: 'C', text: "FinOps collaborates with ITAM to manage hybrid software licenses, tracking compliance for Bring-Your-Own-License (BYOL) across on-premises datacenters and cloud providers" },
      { id: 'D', text: "FinOps replaces all ITAM functions and renders asset tracking obsolete" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "FinOps and ITAM intersect heavily around commercial software licensing. ITAM tracks license entitlement, mobility terms, and compliance audit risks, while FinOps tracks real-time cloud resource consumption, ensuring that BYOL instances do not trigger expensive licensing penalties.",
    referenceUrl: "https://www.finops.org/framework/capabilities/licensing-operations/",
    tags: ["ITAM", "Licensing", "BYOL", "Compliance"]
  },
  {
    id: "focp-233",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Community and Open Source Resources",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "Which non-profit Linux Foundation organization defines official industry standards, certifications, and capabilities for cloud financial management?",
    options: [
      { id: 'A', text: "The World Wide Web Consortium (W3C)" },
      { id: 'B', text: "The Internet Engineering Task Force (IETF)" },
      { id: 'C', text: "The FinOps Foundation" },
      { id: 'D', text: "The Open Source Initiative (OSI)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The FinOps Foundation, a part of the Linux Foundation, is the premier open industry organization advancing the discipline of cloud financial management through standards, the FinOps Framework, research, and certifications like FOCP.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Foundation", "Standards", "Community"]
  },
  {
    id: "focp-234",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Capstone: Building a Continuous Cloud Financial Accountability Cycle",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "What is the ultimate objective of establishing a mature FinOps practice within an enterprise?",
    options: [
      { id: 'A', text: "To create a culture of continuous financial accountability where cross-functional teams collaborate to maximize business value from every cloud dollar spent" },
      { id: 'B', text: "To ensure that all infrastructure is purchased through multi-year hardware leases" },
      { id: 'C', text: "To cut cloud spending to zero and halt all technological innovation" },
      { id: 'D', text: "To replace software engineers with procurement clerks" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ultimate goal of FinOps is not cost cutting; it is value realization. A mature FinOps practice fosters a culturally shared financial accountability where engineering, finance, product, and leadership make informed real-time decisions to drive profitable, rapid business growth in the cloud.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["Capstone", "Business Value", "Culture", "FinOps"]
  },
  {
    id: "focp-235",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Managing Cloud Waste from Orphaned Snapshots",
    scenario: "An organization discovers thousands of EBS snapshots whose original volumes and instances were deleted two years ago.",
    question: "What policy should the FinOps practitioner establish to manage orphaned snapshot costs?",
    options: [
      { id: 'A', text: "Convert all snapshots into active EBS gp3 volumes" },
      { id: 'B', text: "Snapshots have zero storage cost when orphaned" },
      { id: 'C', text: "Tag all snapshots at creation with expiration dates and automate deletion of unassociated snapshots exceeding data retention limits" },
      { id: 'D', text: "Re-create all deleted instances so the snapshots are no longer orphaned" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Orphaned snapshots continue to accrue storage charges long after their source instances are terminated. Automating snapshot lifecycle management with expiration tags and backup compliance policies eliminates persistent storage drag.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Snapshots", "Orphaned Resources", "Storage", "Optimization"]
  },
  {
    id: "focp-236",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Evaluating Multi-Cloud FinOps Tooling",
    scenario: "An enterprise operating on AWS, Azure, and Google Cloud evaluates whether to use native cloud billing tools or a unified third-party FinOps platform.",
    question: "What is the primary architectural advantage of dedicated third-party multi-cloud FinOps platforms?",
    options: [
      { id: 'A', text: "They provide a single normalized data model, centralized multi-cloud reporting, and consolidated commitment management across providers" },
      { id: 'B', text: "They run without requiring read permissions to billing APIs" },
      { id: 'C', text: "They replace all cloud IAM authentication with passwords" },
      { id: 'D', text: "They eliminate all cloud provider bandwidth and compute bills" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "While native tools (AWS Cost Explorer, Azure Cost Management) excel in their own ecosystem, third-party platforms (Apptio Cloudability, CloudHealth, Kubecost) normalize multi-cloud cost schemas, aggregate commitment portfolios, and deliver unified executive dashboards.",
    referenceUrl: "https://www.finops.org/framework/capabilities/cloud-cost-management-tools/",
    tags: ["Tooling", "Multi-Cloud", "Cloudability", "Normalization"]
  },
  {
    id: "focp-237",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps for Machine Learning and Generative AI",
    scenario: "An AI startup spends $80,000 per month on GPU compute instances for fine-tuning large language models. Utilization drops to 0% during non-training intervals.",
    question: "Which architectural and FinOps strategy optimizes GPU infrastructure spending?",
    options: [
      { id: 'A', text: "Purchase 3-year unconvertible Reserved Instances for cutting-edge GPU models before hardware matures" },
      { id: 'B', text: "Train large language models on single-core general-purpose micro instances" },
      { id: 'C', text: "Utilize serverless GPU inference endpoints, auto-terminate training clusters upon job completion, and leverage Spot GPU capacity for checkpointed training jobs" },
      { id: 'D', text: "Run GPU instances 24/7 on on-demand pricing to ensure instant developer access" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GPU hardware is exceptionally costly. For AI/ML workloads, FinOps teams mandate: auto-stopping training clusters immediately when epoch loss stabilizes or training completes, checkpointing models to S3 to safely leverage Spot GPU instances, and using serverless inference endpoints for production workloads.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["AI/ML", "GPUs", "Generative AI", "Workload Optimization"]
  },
  {
    id: "focp-238",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Tag Governance: Automated Quarantine of Untagged Resources",
    scenario: "A cloud security and FinOps team wants to enforce mandatory cost allocation tagging without breaking production deployments.",
    question: "What phased approach should the team take to enforce tag compliance?",
    options: [
      { id: 'A', text: "Abandon tag policies and rely solely on resource naming conventions" },
      { id: 'B', text: "Immediately terminate all untagged resources in production with a cron job" },
      { id: 'C', text: "Phase 1: Notify owners of non-compliant resources; Phase 2: Quarantine or stop non-compliant development resources; Phase 3: Enforce preventative SCPs blocking untagged resource creation" },
      { id: 'D', text: "Manually inspect every resource every morning in the cloud console" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforcing tag compliance requires a progressive maturity rollout: starting with visibility and non-compliance notifications, moving to scheduled remediation in development sandboxes, and finally establishing preventative infrastructure-as-code and cloud policy guardrails.",
    referenceUrl: "https://www.finops.org/framework/capabilities/policy-governance/",
    tags: ["Tagging", "Governance", "Enforcement", "Compliance"]
  },
  {
    id: "focp-239",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps and Product Management: Feature Cost Transparency",
    scenario: "A SaaS product manager wants to understand the gross margin of a newly launched enterprise analytics feature.",
    question: "How does the FinOps team enable product teams to track feature-level profitability?",
    options: [
      { id: 'A', text: "Product managers should never be concerned with infrastructure costs" },
      { id: 'B', text: "By charging all feature development to general administrative overhead" },
      { id: 'C', text: "By tagging infrastructure resources with specific Feature IDs and mapping cloud costs directly to feature revenue in product P&Ls" },
      { id: 'D', text: "By estimating costs using consumer retail prices" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mature FinOps bridges technology and product economics. Tagging and allocating costs by Feature ID empowers product managers to evaluate feature unit margins, determine pricing tiers, and identify loss-leading features that require optimization.",
    referenceUrl: "https://www.finops.org/framework/capabilities/unit-economics/",
    tags: ["Product Management", "Feature Cost", "Gross Margin", "Unit Economics"]
  },
  {
    id: "focp-240",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps for Serverless Architectures: SQS and Lambda Pricing",
    scenario: "An application processes 500 million webhook requests per month using API Gateway, SQS, and Lambda. The bill is higher than expected.",
    question: "Which architectural tuning minimizes transaction costs in serverless pipelines?",
    options: [
      { id: 'A', text: "Increase Lambda execution timeout from 1 minute to 15 minutes" },
      { id: 'B', text: "Disable SQS queues and invoke Lambda functions synchronously from client browsers" },
      { id: 'C', text: "Implement batching in SQS triggers (processing 10-100 messages per Lambda invocation) and switch API Gateway from REST APIs to HTTP APIs" },
      { id: 'D', text: "Replace the entire architecture with an unmonitored physical mainframe" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Serverless optimization focuses on invocation count and payload batching. Configuring SQS batch sizes (e.g. 10–50 messages per invocation) reduces Lambda invocations by up to 90%, while migrating from REST APIs to lightweight HTTP APIs cuts API Gateway costs by over 70%.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Serverless", "Lambda", "SQS", "Batching", "Cost Optimization"]
  },
  {
    id: "focp-241",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps and DevOps: Blending DORA and Cost Metrics",
    scenario: "An engineering organization tracks DORA metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore).",
    question: "How does adding 'Cost per Deployment' or 'Infrastructure Cost per Release' enhance DORA maturity?",
    options: [
      { id: 'A', text: "It proves that DevOps practices increase cloud waste" },
      { id: 'B', text: "It provides a holistic view of delivery velocity, engineering quality, and economic sustainability in software delivery" },
      { id: 'C', text: "It penalizes developers who deploy code frequently" },
      { id: 'D', text: "DORA metrics are incompatible with financial analysis" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Combining DORA velocity metrics with FinOps economic telemetry ensures that engineering agility is accompanied by economic discipline, proving that continuous delivery practices produce cost-effective, high-quality software.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["DORA", "DevOps", "Metrics", "Velocity"]
  },
  {
    id: "focp-242",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Optimizing Cloud Log Ingestion and Retention Costs",
    scenario: "An enterprise observes that CloudWatch Logs and Datadog log ingestion costs exceed the cost of their underlying compute instances.",
    question: "Which operational strategies optimize logging expenditure without degrading security posture?",
    options: [
      { id: 'A', text: "Store log files exclusively on high-performance Provisioned IOPS SSD disks" },
      { id: 'B', text: "Reduce debug logging in production, set log group retention limits (e.g. 30 days instead of never expire), and archive compliance logs to cold S3 storage" },
      { id: 'C', text: "Print entire database tables into console logs on every user click" },
      { id: 'D', text: "Disable all logging and monitoring across all production environments" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Log ingestion and retention costs escalate rapidly. FinOps best practices enforce: setting log level to INFO or WARN in production, configuring explicit log retention periods (e.g. 14–30 days) on CloudWatch log groups, and exporting raw logs to low-cost S3 Glacier for multi-year compliance retention.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Logging", "CloudWatch", "Datadog", "Storage", "Cost Optimization"]
  },
  {
    id: "focp-243",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Commitment Modeling: Risk vs. Coverage Matrix",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "When modeling long-term commitment purchases (Savings Plans or CUDs), why should organizations avoid targeting 100% commitment coverage?",
    options: [
      { id: 'A', text: "Because targeting 100% coverage assumes zero future architectural changes, seasonal dips, or workload modernizations, leading to costly over-commitment waste" },
      { id: 'B', text: "Because commitments only apply to development environments" },
      { id: 'C', text: "Because on-demand pricing is cheaper than committed pricing at high volumes" },
      { id: 'D', text: "Because cloud providers cancel customer accounts that reach 100% commitment coverage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Aiming for 100% commitment coverage is dangerous: any architectural efficiency improvement, migration to serverless, or seasonal downturn drops utilization below 100%, causing financial waste. Industry best practice targets 70%–85% coverage of baseline compute, absorbing peaks with on-demand or Spot capacity.",
    referenceUrl: "https://www.finops.org/framework/capabilities/rate-optimization/",
    tags: ["Commitments", "Risk Management", "Coverage", "Rate Optimization"]
  },
  {
    id: "focp-244",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Governance: Automated Notification of Unattached Disks",
    scenario: "An automated FinOps scanner detects 150 unattached EBS volumes in an AWS account, costing $3,200 monthly.",
    question: "What is the recommended automated remediation workflow?",
    options: [
      { id: 'A', text: "Attach all 150 unattached volumes to the primary production web server" },
      { id: 'B', text: "Ignore the volumes because unattached disks do not incur charges" },
      { id: 'C', text: "Immediately delete the volumes without backing them up" },
      { id: 'D', text: "Take a final snapshot of the unattached volume, notify the previous owner via email/Slack, and delete the unattached volume after a 7-day grace period" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unattached storage volumes continue to accrue standard block storage charges. Best practice remediation takes a protective safety snapshot, notifies the historical owner with automated reminders, and deletes the volume after a defined retention grace period.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["EBS", "Unattached Volumes", "Storage", "Waste Remediation"]
  },
  {
    id: "focp-245",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Terminology: Blended vs. Unblended Rates",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "In consolidated billing across multiple accounts, what is the difference between an unblended rate and a blended rate?",
    options: [
      { id: 'A', text: "Unblended is for storage; blended is for compute" },
      { id: 'B', text: "Unblended includes taxes; blended excludes taxes" },
      { id: 'C', text: "Blended rates are fixed by international law" },
      { id: 'D', text: "Unblended is the exact rate incurred by the specific resource account; blended is an average rate calculated across all linked accounts sharing volume tiers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unblended rates show the actual price incurred by a specific account (e.g. paying on-demand in account A while account B receives a reservation). Blended rates average total costs across all linked accounts in an organization sharing volume discounts.",
    referenceUrl: "https://www.finops.org/framework/capabilities/cost-allocation/",
    tags: ["Rates", "Blended", "Unblended", "Billing"]
  },
  {
    id: "focp-246",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Education: Empowering Engineering Teams",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "What is the most effective way to foster organic cost-conscious engineering culture?",
    options: [
      { id: 'A', text: "Require every developer to pay for their own development environments" },
      { id: 'B', text: "Provide self-service cost dashboards, include cloud pricing in architecture design templates, and celebrate teams that optimize unit economics" },
      { id: 'C', text: "Block all cloud deployments until engineers pass annual written accounting tests" },
      { id: 'D', text: "Keep all billing data secret from software developers to avoid distractions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Culture changes through enablement, not mandate. By surfacing transparent cost telemetry in familiar engineering dashboards, celebrating optimization wins, and discussing architectural cost trade-offs during sprint planning, organizations build sustainable cost-aware engineering habits.",
    referenceUrl: "https://www.finops.org/framework/culture/",
    tags: ["Culture", "Education", "Enablement", "Best Practices"]
  },
  {
    id: "focp-247",
    difficulty: "hard",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps and Edge Computing Economics",
    scenario: "An IoT company deploys compute logic across centralized cloud regions, AWS Local Zones, and edge gateway devices.",
    question: "How does the FinOps framework account for edge infrastructure economics?",
    options: [
      { id: 'A', text: "By analyzing latency requirements against edge pricing premiums, balancing central cloud scale against edge data transfer and compute costs" },
      { id: 'B', text: "All edge devices must be replaced with centralized regional servers" },
      { id: 'C', text: "Edge computing costs cannot be tracked or audited" },
      { id: 'D', text: "Edge computing is free of charge in all cloud architectures" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Edge compute infrastructure (AWS Outposts, Local Zones, Wavelength) carries price premiums compared to centralized regional data centers. FinOps teams model the total cost of ownership by weighing edge infrastructure fees against bandwidth savings from local data filtering.",
    referenceUrl: "https://www.finops.org/framework/capabilities/workload-optimization/",
    tags: ["Edge Computing", "Local Zones", "IoT", "Architecture"]
  },
  {
    id: "focp-248",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Alignment with ESG and Green IT",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "Why are enterprise sustainability leaders increasingly partnering directly with FinOps practitioners?",
    options: [
      { id: 'A', text: "Because cloud providers offer carbon credits in exchange for paying bills late" },
      { id: 'B', text: "Because green IT requires operating without computers" },
      { id: 'C', text: "Because optimizing cloud compute efficiency and reducing idle infrastructure directly cuts electricity consumption and datacenter carbon footprint" },
      { id: 'D', text: "Because FinOps teams manage physical power plant contracts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Green IT and FinOps are deeply aligned: every eliminated idle server, rightsized CPU, and optimized database query directly reduces physical kilowatt-hour energy consumption in vendor datacenters, driving verified Scope 3 carbon emission reductions.",
    referenceUrl: "https://www.finops.org/framework/capabilities/sustainability/",
    tags: ["Sustainability", "Green IT", "Carbon Reduction", "ESG"]
  },
  {
    id: "focp-249",
    difficulty: "easy",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "FinOps Summary: Maximizing Value from Every Cloud Dollar",
    scenario: "An enterprise cloud team is evaluating operational processes, financial accountability, and FinOps framework best practices.",
    question: "What core message summarizes the mission of the FinOps discipline for executive stakeholders?",
    options: [
      { id: 'A', text: "FinOps is an accounting rule that forbids using credit cards" },
      { id: 'B', text: "FinOps is the operating model for the cloud that brings financial accountability to the variable spend model, enabling teams to trade speed, cost, and quality to maximize business value" },
      { id: 'C', text: "FinOps is a mandate to repatriate all cloud systems to private datacenters" },
      { id: 'D', text: "FinOps is a software tool designed to block engineering releases" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "FinOps is cultural, operational, and financial. It empowers organizations to master cloud variable consumption economics, fostering cross-functional alignment between engineering, finance, and product to maximize business value from every cloud dollar spent.",
    referenceUrl: "https://www.finops.org/framework/",
    tags: ["FinOps", "Summary", "Business Value", "Strategy"]
  },
  {
    id: "focp-250",
    difficulty: "medium",
    certId: "finops-focp",
    domainId: "d4",
    domainName: "FinOps Capabilities & Optimization",
    title: "Continuous Improvement Cycle in Cloud FinOps",
    scenario: "An organization establishes quarterly goals to continuously evaluate architectural efficiency and vendor contract terms.",
    question: "Which recurring operating cadence ensures continuous FinOps improvement across teams?",
    options: [
      { id: 'A', text: "Changing cloud providers every quarter to reset promotional credits" },
      { id: 'B', text: "Holding monthly cross-functional FinOps reviews, updating KPI benchmarks, tracking action items in engineering sprints, and reassessing commitment portfolios" },
      { id: 'C', text: "Waiting for annual budget renewals to review cloud spending" },
      { id: 'D', text: "Freezing all cloud infrastructure updates permanently" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Continuous improvement in FinOps relies on iterative cadences: holding monthly cross-functional retrospectives between engineering and finance, tracking remediation action items within standard sprint backlogs, and adjusting commitment portfolios as workloads evolve.",
    referenceUrl: "https://www.finops.org/framework/phases/operate/",
    tags: ["Continuous Improvement", "Operate", "Cadence", "Governance"]
  }
];

export default FINOPS_FOCP_QUESTIONS_10;
