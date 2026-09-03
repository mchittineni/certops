export const AWS_CLF_FLASHCARDS_5 = [
  {
    id: "aws-clf-fc-101",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS DataSync: Automated High-Speed Data Transfer",
    hint: "Accelerated online data movement between on-premises storage and S3 / EFS / FSx.",
    back: "<strong>AWS DataSync</strong> automates, accelerates, and validates data transfers between on-premises NFS/SMB shares or object storage and Amazon S3, EFS, or FSx over the internet or AWS Direct Connect at speeds up to 10x faster than open-source tools.",
    tags: ["DataSync", "Migration", "Storage"]
  },
  {
    id: "aws-clf-fc-102",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Athena: Serverless Interactive SQL on S3",
    hint: "Querying data files directly in S3 using standard SQL without provisioning databases.",
    back: "<strong>Amazon Athena</strong> is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. Athena is serverless, requires no database setup, and charges only for the data scanned by queries.",
    tags: ["Athena", "Serverless", "Analytics", "SQL"]
  },
  {
    id: "aws-clf-fc-103",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Glue: Serverless Data Integration and ETL",
    hint: "Data cataloging, automated crawling, and ETL data pipeline transformation.",
    back: "<strong>AWS Glue</strong> is a serverless data integration service. The <strong>Glue Data Catalog</strong> stores metadata schemas discovered by <strong>Glue Crawlers</strong>, while Glue ETL jobs extract, clean, enrich, and transform data for analytics in Athena or Redshift.",
    tags: ["Glue", "ETL", "Analytics", "Data Lake"]
  },
  {
    id: "aws-clf-fc-104",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon EMR (Elastic MapReduce)",
    hint: "Big data processing running Apache Spark, Hadoop, Presto, and Hive at scale.",
    back: "<strong>Amazon EMR</strong> is a cloud big data platform for processing vast amounts of data using open-source frameworks like Apache Spark, Hadoop, and Hive. It decouples compute and storage by running clusters on EC2 while storing petabytes in S3.",
    tags: ["EMR", "Big Data", "Spark", "Hadoop"]
  },
  {
    id: "aws-clf-fc-105",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Kinesis: Real-Time Streaming Data Platform",
    hint: "Kinesis Data Streams (custom streaming) vs. Kinesis Data Firehose (delivery to S3/Redshift).",
    back: "<strong>Kinesis Data Streams</strong> ingests and stores continuous real-time data records for custom stream-processing applications. <strong>Kinesis Data Firehose</strong> is fully managed and automatically transforms and loads streaming data directly into S3, Redshift, OpenSearch, or Splunk with zero code.",
    tags: ["Kinesis", "Streaming", "Real-Time", "Analytics"]
  },
  {
    id: "aws-clf-fc-106",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon OpenSearch Service (successor to Elasticsearch)",
    hint: "Search, log analytics, interactive dashboards, and full-text indexing.",
    back: "<strong>Amazon OpenSearch Service</strong> makes it easy to deploy, secure, and run OpenSearch clusters at scale for application search, log monitoring, security information and event management (SIEM), and Kibana/OpenSearch Dashboards visualization.",
    tags: ["OpenSearch", "Elasticsearch", "Logging", "Analytics"]
  },
  {
    id: "aws-clf-fc-107",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Rekognition vs. Amazon Comprehend vs. Amazon Polly",
    hint: "Computer vision vs. natural language processing (NLP) vs. text-to-speech.",
    back: "<strong>Amazon Rekognition</strong> analyzes images and videos for facial analysis, object detection, and moderation. <strong>Amazon Comprehend</strong> uses NLP to extract entities, sentiment, and key phrases from text. <strong>Amazon Polly</strong> turns written text into lifelike speech in multiple languages.",
    tags: ["AI", "Machine Learning", "Rekognition", "Comprehend", "Polly"]
  },
  {
    id: "aws-clf-fc-108",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SageMaker: End-to-End Machine Learning Platform",
    hint: "Build, train, tune, and deploy machine learning models at enterprise scale.",
    back: "<strong>Amazon SageMaker</strong> is a comprehensive managed service providing tools for every step of ML development: hosted Jupyter notebooks, automated data labeling, distributed model training algorithms, hyperparameter tuning, and one-click production API endpoint deployment.",
    tags: ["SageMaker", "Machine Learning", "AI"]
  },
  {
    id: "aws-clf-fc-109",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Bedrock: Enterprise Generative AI Foundation Models",
    hint: "Serverless API access to leading Foundation Models (Anthropic Claude, Titan, Llama).",
    back: "<strong>Amazon Bedrock</strong> offers a serverless API to customize and deploy leading Foundation Models (FMs) from AI startups and Amazon (Claude, Jurassic, Command, Titan) securely with private data, built-in RAG capabilities, and automated agents.",
    tags: ["Bedrock", "Generative AI", "AI", "Foundation Models"]
  },
  {
    id: "aws-clf-fc-110",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Elastic Beanstalk: Platform as a Service (PaaS)",
    hint: "Deploy and scale web apps in Java, .NET, Node.js, Python, or Go with zero infrastructure code.",
    back: "<strong>AWS Elastic Beanstalk</strong> is an easy-to-use PaaS service for deploying web applications. Developers upload their code, and Beanstalk automatically handles provisioning, load balancing, auto-scaling, and health monitoring while preserving full access to underlying EC2 instances.",
    tags: ["Beanstalk", "PaaS", "Compute", "Deployment"]
  },
  {
    id: "aws-clf-fc-111",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS CodeCommit, CodeBuild, CodeDeploy, CodePipeline: CI/CD Suite",
    hint: "Git repository, containerized compiler, automated deployer, and workflow pipeline.",
    back: "<strong>CodeCommit</strong> hosts private Git repos; <strong>CodeBuild</strong> compiles code and runs unit tests in ephemeral containers; <strong>CodeDeploy</strong> automates deployments to EC2/Fargate/Lambda; <strong>CodePipeline</strong> orchestrates these stages into automated CI/CD release pipelines.",
    tags: ["CI/CD", "DevOps", "CodePipeline", "CodeDeploy"]
  },
  {
    id: "aws-clf-fc-112",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Systems Manager (SSM): Operational Management Hub",
    hint: "Session Manager, Run Command, Patch Manager, and Parameter Store in one console.",
    back: "<strong>AWS Systems Manager</strong> provides centralized operational control over EC2 and on-premises hybrid nodes. <strong>Session Manager</strong> provides secure browser-based shell access without open SSH/RDP ports; <strong>Patch Manager</strong> automates operating system security patching.",
    tags: ["Systems Manager", "SSM", "Session Manager", "Operations"]
  },
  {
    id: "aws-clf-fc-113",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Config: Resource Compliance and Configuration History",
    hint: "Auditing resource configurations against compliance rules over time.",
    back: "<strong>AWS Config</strong> continuously records and evaluates AWS resource configurations against desired compliance baselines (e.g. 'are all S3 buckets encrypted?'). When a resource drifts into non-compliance, Config logs a timeline history and triggers automated remediation.",
    tags: ["Config", "Governance", "Compliance", "Auditing"]
  },
  {
    id: "aws-clf-fc-114",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Trusted Advisor: The Five Core Optimization Categories",
    hint: "Cost Optimization, Performance, Security, Fault Tolerance, and Service Quotas.",
    back: "<strong>AWS Trusted Advisor</strong> analyzes your AWS environment and provides actionable recommendations across five pillars: reducing cost (idle resources), boosting performance, tightening security (unrestricted S3/SSH), ensuring fault tolerance (Multi-AZ), and monitoring service limits.",
    tags: ["Trusted Advisor", "Best Practices", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-115",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Health Dashboard: Service Health vs. Personal Account Health",
    hint: "Public status of all AWS regional services vs. personalized impact to your account.",
    back: "The public <strong>AWS Service Health</strong> view displays general status across all AWS services globally. The personalized <strong>AWS Health Dashboard</strong> alerts you to active outages, scheduled maintenance, and hardware degradations directly impacting resources in your specific account.",
    tags: ["Health Dashboard", "Monitoring", "Reliability"]
  },
  {
    id: "aws-clf-fc-116",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Pricing Principles: The Three Fundamental Cost Drivers",
    hint: "Compute (per second/hour), Storage (per GB/month), Data Transfer Out (egress).",
    back: "Across almost all AWS services, costs break down into three fundamental dimensions: <strong>Compute</strong> (time instances or code runs), <strong>Storage</strong> (volume of data retained per month), and <strong>Data Transfer Out</strong> (data leaving AWS to the internet). Inbound data transfer is virtually always free.",
    tags: ["Pricing", "Cost Fundamentals", "Billing"]
  },
  {
    id: "aws-clf-fc-117",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Free Tier: Three Distinct Tiers",
    hint: "Always Free, 12 Months Free, and Short-Term Free Trials.",
    back: "<strong>Always Free</strong> never expires (e.g. 1 million Lambda requests, 25 GB DynamoDB). <strong>12 Months Free</strong> begins on signup (e.g. 750 hours/month of <code>t2/t3.micro</code> EC2, 5 GB S3). <strong>Free Trials</strong> activate upon activating a specific service (e.g. Inspector for 15 days).",
    tags: ["Free Tier", "Billing", "Pricing"]
  },
  {
    id: "aws-clf-fc-118",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Pricing Calculator: Upfront Cost Estimation",
    hint: "Model architecture costs and generate quotes before deploying resources.",
    back: "The <strong>AWS Pricing Calculator</strong> is a web-based planning tool that allows architects and finance teams to estimate monthly operational costs, explore instance types and purchasing models, and share architectural cost projections prior to launching resources in AWS.",
    tags: ["Pricing Calculator", "Cost Estimation", "Billing"]
  },
  {
    id: "aws-clf-fc-119",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Explorer: Historic Analysis and 12-Month Forecasting",
    hint: "Visualize, filter, and project AWS spending patterns over time.",
    back: "<strong>AWS Cost Explorer</strong> provides visual charts to analyze historical cost and usage data (up to 14 months prior) and projects spending for the next 12 months using machine learning. It provides recommendations for purchasing Savings Plans and Reserved Instances.",
    tags: ["Cost Explorer", "Forecasting", "Billing", "FinOps"]
  },
  {
    id: "aws-clf-fc-120",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Budgets: Proactive Cost and Usage Alerts",
    hint: "Custom threshold alerts sent via email or SNS when actual or forecasted costs exceed limits.",
    back: "<strong>AWS Budgets</strong> allows you to set custom spending limits for costs, usage, Reserved Instances, or Savings Plans. Budgets sends notifications via email or SNS when spending reaches configured percentages (e.g. 80% or 100%) of actual or forecasted targets.",
    tags: ["Budgets", "Alerts", "Cost Management"]
  },
  {
    id: "aws-clf-fc-121",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost and Usage Report (CUR): The Deepest Billing Dataset",
    hint: "Raw, granular hourly or daily line-item billing records delivered to S3.",
    back: "The <strong>AWS Cost and Usage Report (CUR)</strong> is the most comprehensive, granular billing dataset available. It delivers raw CSV or Parquet files to an S3 bucket containing metadata for every resource, tag, rate, and discount, perfect for querying with Amazon Athena.",
    tags: ["CUR", "Cost and Usage Report", "Billing", "Analytics"]
  },
  {
    id: "aws-clf-fc-122",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Organizations: Consolidated Billing Benefits",
    hint: "One monthly bill, combined volume discount tiering, and shared savings.",
    back: "<strong>Consolidated Billing</strong> in AWS Organizations aggregates billing across all linked member accounts into one monthly invoice for the management account. It shares volume discount tiers (e.g. S3 multi-terabyte price breaks) and allows accounts to share Reserved Instances and Savings Plans.",
    tags: ["Organizations", "Consolidated Billing", "Discounts"]
  },
  {
    id: "aws-clf-fc-123",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Compute Optimizer: Machine Learning Rightsizing",
    hint: "Recommending optimal EC2, EBS, Lambda, and ECS configurations to eliminate waste.",
    back: "<strong>AWS Compute Optimizer</strong> analyzes historical CloudWatch utilization metrics using machine learning to identify over-provisioned (wasting money) or under-provisioned (degraded performance) resources, recommending exact instance type adjustments.",
    tags: ["Compute Optimizer", "Rightsizing", "Cost Optimization"]
  },
  {
    id: "aws-clf-fc-124",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Support Plans: Developer vs. Business vs. Enterprise",
    hint: "Email business hours vs. 24/7 phone/chat with 1hr SLA vs. dedicated TAM with 15min SLA.",
    back: "<strong>Developer</strong>: General guidance, business hours email (12h/24h response). <strong>Business</strong>: 24/7 phone/chat access, 1-hour response for production system down, full Trusted Advisor. <strong>Enterprise</strong>: Dedicated Technical Account Manager (TAM), 15-minute response for business-critical down, concierge billing.",
    tags: ["Support Plans", "TAM", "Business Support", "Enterprise Support"]
  },
  {
    id: "aws-clf-fc-125",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "Technical Account Manager (TAM) and Concierge Support",
    hint: "Dedicated enterprise architectural advisor and specialized billing guide.",
    back: "A <strong>Technical Account Manager (TAM)</strong> is a dedicated senior engineer included exclusively with Enterprise Support to provide proactive architectural reviews, planning, and escalation assistance. The <strong>AWS Concierge</strong> team assists enterprise customers with billing and account inquiries.",
    tags: ["Enterprise Support", "TAM", "Concierge", "Governance"]
  }
];

export default AWS_CLF_FLASHCARDS_5;
