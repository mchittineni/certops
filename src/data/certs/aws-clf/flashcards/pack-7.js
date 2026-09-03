export const AWS_CLF_FLASHCARDS_7 = [
  {
    id: "aws-clf-fc-151",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Polly vs. Amazon Transcribe",
    hint: "Text-to-speech voice synthesizer vs. automated speech-to-text audio transcriber.",
    back: "<strong>Amazon Polly</strong> converts written text into lifelike speech using deep learning neural voices. <strong>Amazon Transcribe</strong> does the reverse: it converts spoken audio into accurate, punctuated text transcripts with speaker identification.",
    tags: ["AI", "Speech", "Polly", "Transcribe"]
  },
  {
    id: "aws-clf-fc-152",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Translate vs. Amazon Lex",
    hint: "Neural machine language translation vs. conversational chatbot speech/text engine.",
    back: "<strong>Amazon Translate</strong> translates text fluently between dozens of natural languages. <strong>Amazon Lex</strong> provides the conversational AI engine (the same technology behind Alexa) to build voice and text chatbots into web and mobile applications.",
    tags: ["AI", "Lex", "Translate", "Chatbots"]
  },
  {
    id: "aws-clf-fc-153",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Textract: Intelligent Document Extraction",
    hint: "OCR that automatically extracts text, handwriting, tables, and forms from scanned documents.",
    back: "<strong>Amazon Textract</strong> goes beyond simple Optical Character Recognition (OCR) by understanding the structure of documents. It automatically detects and extracts printed text, handwriting, tables, and key-value form pairs without manual configuration.",
    tags: ["Textract", "OCR", "Document AI", "Machine Learning"]
  },
  {
    id: "aws-clf-fc-154",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Kendra: Intelligent Enterprise Search",
    hint: "Machine learning-powered enterprise search engine connecting disparate documentation repositories.",
    back: "<strong>Amazon Kendra</strong> is an enterprise search service powered by machine learning. It indexes internal documents across SharePoint, Salesforce, S3, and ServiceNow, allowing employees to ask natural language questions and get direct answers.",
    tags: ["Kendra", "Search", "Enterprise AI", "Machine Learning"]
  },
  {
    id: "aws-clf-fc-155",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Control Tower: Multi-Account Landing Zone Automation",
    hint: "Set up and govern a secure, multi-account AWS environment based on best practice blueprints.",
    back: "<strong>AWS Control Tower</strong> automates the setup of a secure, compliant baseline landing zone across multiple accounts. It enforces governance using automated preventative and detective <strong>guardrails</strong> (via SCPs and AWS Config rules).",
    tags: ["Control Tower", "Multi-Account", "Landing Zone", "Governance"]
  },
  {
    id: "aws-clf-fc-156",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS License Manager: Software License Tracking",
    hint: "Manage software licenses from Microsoft, SAP, Oracle, and IBM across AWS and on-premises.",
    back: "<strong>AWS License Manager</strong> makes it easy to manage software licenses from third-party vendors across AWS and on-premises environments. It tracks license usage to prevent compliance violations and license count over-deployments.",
    tags: ["License Manager", "Compliance", "Licensing", "Governance"]
  },
  {
    id: "aws-clf-fc-157",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Service Catalog: Curated IT Service Portfolios",
    hint: "Create and manage approved portfolios of AWS services for internal enterprise users.",
    back: "<strong>AWS Service Catalog</strong> allows IT administrators to create and manage approved catalogs of infrastructure products (CloudFormation templates). Business users can deploy approved, compliant cloud resources self-service without needing broad IAM permissions.",
    tags: ["Service Catalog", "Governance", "Self-Service"]
  },
  {
    id: "aws-clf-fc-158",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Migration Hub: Centralized Tracking Across Migration Tools",
    hint: "Single-pane dashboard tracking application migration progress across AWS and partner tools.",
    back: "<strong>AWS Migration Hub</strong> provides a central place to discover on-premises servers and track the status of migrations across multiple AWS tools (such as AWS Application Migration Service and Database Migration Service) in one unified console.",
    tags: ["Migration Hub", "Migration", "Portfolio Tracking"]
  },
  {
    id: "aws-clf-fc-159",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Application Discovery Service",
    hint: "Plan migrations by gathering server utilization and dependency data from on-premises datacenters.",
    back: "<strong>AWS Application Discovery Service</strong> collects server inventory, configuration data, and network dependencies from on-premises servers (via an agent or agentless VMware appliance) to help organizations plan and estimate AWS migration projects.",
    tags: ["Discovery Service", "Migration", "Planning"]
  },
  {
    id: "aws-clf-fc-160",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Schema Conversion Tool (AWS SCT)",
    hint: "Converting commercial database schemas to open-source or cloud-native AWS databases.",
    back: "The <strong>AWS Schema Conversion Tool (SCT)</strong> automatically converts source database schemas, stored procedures, views, and functions from legacy commercial engines (Oracle, SQL Server) to AWS targets like Aurora, PostgreSQL, or Redshift.",
    tags: ["SCT", "Database Migration", "Databases"]
  },
  {
    id: "aws-clf-fc-161",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Categories: Organizing Costs by Business Structure",
    hint: "Grouping cost line items by business unit, project, environment, or application owner.",
    back: "<strong>AWS Cost Categories</strong> allows organizations to group cost and usage information into meaningful business units (e.g. 'Engineering Team A', 'Project Titan', or 'Production Environment') by combining accounts, tags, and chargeback rules.",
    tags: ["Cost Categories", "FinOps", "Cost Allocation"]
  },
  {
    id: "aws-clf-fc-162",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "Cost Allocation Tags: User-Defined vs. AWS-Generated Tags",
    hint: "Tracking costs using custom business labels (e.g. Environment=Prod, CostCenter=104).",
    back: "<strong>Cost Allocation Tags</strong> must be activated in the Billing Console to appear in Cost Explorer. <strong>AWS-generated tags</strong> start with <code>aws:</code> (like <code>aws:createdBy</code>). <strong>User-defined tags</strong> are custom key-value pairs (e.g. <code>Owner</code>, <code>Department</code>).",
    tags: ["Tags", "Cost Allocation", "FinOps", "Billing"]
  },
  {
    id: "aws-clf-fc-163",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Cost Anomaly Detection: Machine Learning Spending Alerts",
    hint: "Automated detection of unexpected spending spikes with root-cause analysis.",
    back: "<strong>AWS Cost Anomaly Detection</strong> continuously analyzes your cost and usage records using machine learning to identify anomalous spending spikes. When an anomaly occurs, it sends an email or Slack alert detailing the root cause service and account.",
    tags: ["Cost Anomaly Detection", "FinOps", "Machine Learning", "Alerts"]
  },
  {
    id: "aws-clf-fc-164",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "Savings Plans: Compute Savings Plans vs. EC2 Instance Savings Plans",
    hint: "Flexible discount across EC2, Fargate, and Lambda vs. deeper discount tied to one instance family.",
    back: "<strong>Compute Savings Plans</strong> offer up to 66% discount with complete flexibility across EC2 instance families, operating systems, regions, Fargate, and Lambda. <strong>EC2 Instance Savings Plans</strong> offer up to 72% discount but require commitment to a specific instance family in a specific region.",
    tags: ["Savings Plans", "Cost Optimization", "Compute", "Pricing"]
  },
  {
    id: "aws-clf-fc-165",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Billing Conductor: Custom Pricing and Chargeback for Resellers",
    hint: "Customize pro-forma billing and rate sheets for organizational chargeback and partner resale.",
    back: "<strong>AWS Billing Conductor</strong> allows enterprise administrators and AWS Solution Providers to customize pricing logic, define pro-forma billing rules, and generate branded internal showback/chargeback statements for individual business units or clients.",
    tags: ["Billing Conductor", "Chargeback", "Showback", "Billing"]
  },
  {
    id: "aws-clf-fc-166",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Marketplace: Buying Third-Party Software and SaaS",
    hint: "Digital catalog of thousands of third-party software products billed directly through your AWS invoice.",
    back: "<strong>AWS Marketplace</strong> is an online store where customers can find, test, buy, and instantly deploy third-party software, AMIs, containers, machine learning models, and SaaS solutions with charges consolidated into their single AWS monthly bill.",
    tags: ["Marketplace", "Procurement", "SaaS"]
  },
  {
    id: "aws-clf-fc-167",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    front: "AWS Knowledge Center and AWS Documentation",
    hint: "Official guides, FAQs, architecture whitepapers, and curated troubleshooting answers.",
    back: "The <strong>AWS Knowledge Center</strong> contains answers to the most frequent questions and troubleshooting scenarios written directly by AWS support engineers. The <strong>AWS Documentation</strong> provides authoritative developer guides and API references.",
    tags: ["Support", "Knowledge Center", "Documentation"]
  },
  {
    id: "aws-clf-fc-168",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Security Hub vs. AWS Config",
    hint: "Centralized security finding dashboard vs. detailed resource configuration state recorder.",
    back: "<strong>AWS Config</strong> tracks the granular configuration history of resources and checks compliance against rules. <strong>AWS Security Hub</strong> aggregates alerts and findings from Config, GuardDuty, Macie, and Inspector to grade compliance against security standards.",
    tags: ["Security Hub", "Config", "Compliance", "Security"]
  },
  {
    id: "aws-clf-fc-169",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    front: "AWS Network Firewall: Stateful Layer 3-7 VPC Protection",
    hint: "Managed network firewall with Suricata-compatible intrusion prevention (IPS) rules.",
    back: "<strong>AWS Network Firewall</strong> deploys scalable, stateful network traffic inspection at the VPC boundary. It inspects all traffic passing through an Internet Gateway or Transit Gateway with custom rules, IP reputation filtering, and protocol anomaly detection.",
    tags: ["Network Firewall", "Security", "IPS", "VPC"]
  },
  {
    id: "aws-clf-fc-170",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Glacier Flexible Retrieval vs. Glacier Deep Archive",
    hint: "Minutes-to-hours retrieval vs. 12-hour retrieval at the lowest cloud storage price.",
    back: "<strong>Glacier Flexible Retrieval</strong> offers Expedited (1-5 min), Standard (3-5 hr), and Bulk (5-12 hr) retrieval. <strong>Glacier Deep Archive</strong> is the lowest-cost storage in the cloud ($0.00099/GB/month) with standard retrieval times of 12 hours for long-term compliance retention.",
    tags: ["S3", "Glacier", "Archival", "Storage"]
  },
  {
    id: "aws-clf-fc-171",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon S3 Object Tagging vs. Metadata",
    hint: "Dynamic key-value pairs used for lifecycle rules and IAM vs. static HTTP headers.",
    back: "<strong>S3 Object Tags</strong> can be added, updated, or removed at any time during an object's lifecycle and are used to trigger S3 Lifecycle transitions or enforce IAM access control. <strong>Object Metadata</strong> consists of name-value pairs set at upload time and cannot be modified without rewriting the object.",
    tags: ["S3", "Tags", "Metadata", "Storage"]
  },
  {
    id: "aws-clf-fc-172",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Elastic Container Registry (Amazon ECR)",
    hint: "Fully managed, secure Docker and OCI container image registry integrated with IAM.",
    back: "<strong>Amazon ECR</strong> is a managed container registry that makes it easy to store, manage, share, and deploy container images. It integrates natively with ECS, EKS, and Lambda, features vulnerability scanning via Inspector, and supports cross-region image replication.",
    tags: ["ECR", "Containers", "Docker", "DevOps"]
  },
  {
    id: "aws-clf-fc-173",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon Lightsail: Simple Cloud Server for Small Projects",
    hint: "All-in-one bundle of compute, storage, DNS, and networking at predictable low monthly rates.",
    back: "<strong>Amazon Lightsail</strong> is the easiest way to launch a virtual private server on AWS. It bundles an EC2-based VM, SSD storage, data transfer allowance, and managed DNS into a simple fixed monthly price, ideal for WordPress sites or simple web applications.",
    tags: ["Lightsail", "Compute", "VPS", "Websites"]
  },
  {
    id: "aws-clf-fc-174",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    front: "Amazon SimpleDB vs. Amazon DynamoDB",
    hint: "Legacy simple attribute store vs. modern high-scale distributed NoSQL database.",
    back: "<strong>Amazon SimpleDB</strong> is AWS's legacy small-scale NoSQL database. For all modern applications, AWS recommends <strong>Amazon DynamoDB</strong>, which provides virtually unlimited storage scale, higher throughput, and predictable single-digit millisecond latency.",
    tags: ["DynamoDB", "SimpleDB", "Databases", "Legacy"]
  },
  {
    id: "aws-clf-fc-175",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    front: "AWS Fault Injection Simulator (AWS FIS)",
    hint: "Managed chaos engineering service to test application resilience under real failure conditions.",
    back: "<strong>AWS FIS</strong> is a managed chaos engineering service that lets teams run controlled fault injection experiments (e.g. terminating EC2 instances, draining AZs, introducing database latency) to uncover hidden architectural weaknesses before outages occur in production.",
    tags: ["FIS", "Chaos Engineering", "Resilience", "Reliability"]
  }
];

export default AWS_CLF_FLASHCARDS_7;
