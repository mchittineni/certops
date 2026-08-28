export const AWS_CLF_QUESTIONS_5 = [
  {
    id: "aws-clf-101",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon VPC Subnet Types: Public vs Private Subnets",
    scenario: "A web application architecture separates public-facing web servers from backend database servers. Database instances should not have direct internet access.",
    question: "What differentiates a public subnet from a private subnet in an Amazon VPC?",
    options: [
      { id: 'A', text: "A public subnet has a route to an Internet Gateway (IGW) in its route table; a private subnet does not." },
      { id: 'B', text: "A public subnet allows root access; a private subnet restricts IAM access." },
      { id: 'C', text: "A public subnet is deployed in multiple Regions simultaneously." },
      { id: 'D', text: "A public subnet uses Security Groups; a private subnet uses Network ACLs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In an Amazon VPC, a subnet is considered a public subnet if its associated route table contains a default route (0.0.0.0/0) pointing to an attached Internet Gateway (IGW). A private subnet's route table does not point directly to an IGW.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",
    tags: ["VPC", "Subnets", "Networking", "Internet Gateway"]
  },
  {
    id: "aws-clf-102",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "NAT Gateway for Outbound Internet Access from Private Subnets",
    scenario: "Backend database servers in a private subnet need to download operating system software patches from external vendor repositories on the internet without allowing inbound internet connections.",
    question: "Which AWS networking component enables instances in a private subnet to connect to the internet while preventing inbound internet connections?",
    options: [
      { id: 'A', text: "Internet Gateway" },
      { id: 'B', text: "VPC Peering Connection" },
      { id: 'C', text: "Egress-Only Internet Gateway for IPv4" },
      { id: 'D', text: "NAT Gateway" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A NAT Gateway (Network Address Translation Gateway) allows instances in a private subnet to connect to services outside your VPC (such as internet software repositories) but prevents the external internet from initiating inbound connections to those instances.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
    tags: ["NAT Gateway", "VPC", "Networking", "Security"]
  },
  {
    id: "aws-clf-103",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon VPC Peering Non-Transitive Routing",
    scenario: "An engineer connects VPC A to VPC B via VPC Peering, and VPC B to VPC C via VPC Peering. By default, traffic from VPC A cannot reach VPC C through VPC B.",
    question: "Which characteristic of VPC Peering describes the rule that peering connections cannot bridge traffic across intermediate VPCs?",
    options: [
      { id: 'A', text: "VPC Peering requires matching CIDR address blocks." },
      { id: 'B', text: "VPC Peering restricts bandwidth to 1 Gbps." },
      { id: 'C', text: "VPC Peering requires dedicated Direct Connect hardware." },
      { id: 'D', text: "VPC Peering does not support transitive routing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "VPC Peering is non-transitive: if VPC A is peered with VPC B, and VPC B is peered with VPC C, VPC A cannot route traffic to VPC C through VPC B. To connect multiple VPCs transitively, you use AWS Transit Gateway.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html#transitive-peering",
    tags: ["VPC Peering", "Transitive Routing", "Networking"]
  },
  {
    id: "aws-clf-104",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Site-to-Site VPN with IPsec Encryption",
    scenario: "A branch office needs an encrypted network connection over the public internet to an Amazon VPC within 24 hours while AWS Direct Connect is being ordered.",
    question: "Which AWS networking service establishes an encrypted IPsec VPN tunnel between an on-premises network and an Amazon VPC over the internet?",
    options: [
      { id: 'A', text: "AWS Site-to-Site VPN" },
      { id: 'B', text: "AWS Direct Connect" },
      { id: 'C', text: "AWS PrivateLink" },
      { id: 'D', text: "VPC Peering" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Site-to-Site VPN creates an encrypted IPsec VPN connection between your on-premises network (via a Customer Gateway) and your Amazon VPC (via a Virtual Private Gateway or Transit Gateway) across the public internet.",
    referenceUrl: "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
    tags: ["VPN", "Site-to-Site", "Networking", "Security"]
  },
  {
    id: "aws-clf-105",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS PrivateLink for Private SaaS Access",
    scenario: "A banking application in a private subnet needs to consume a payment processing service hosted by a third-party vendor in another VPC without exposing traffic to the public internet or peering full VPC address spaces.",
    question: "Which AWS technology provides private connectivity between VPCs and services without requiring VPC peering or internet routing?",
    options: [
      { id: 'A', text: "Internet Gateway" },
      { id: 'B', text: "AWS Direct Connect" },
      { id: 'C', text: "AWS PrivateLink" },
      { id: 'D', text: "NAT Gateway" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS PrivateLink provides private connectivity between VPCs, supported AWS services, and on-premises networks without exposing traffic to the public internet, eliminating the need for VPC peering or routing table management.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html",
    tags: ["PrivateLink", "VPC Endpoint", "Networking", "Security"]
  },
  {
    id: "aws-clf-106",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "Amazon VPC Flow Logs for Network Traffic Monitoring",
    scenario: "A security analyst needs to capture detailed IP traffic metadata (source/destination IP, port, protocol, packets, bytes, action ACCEPT/REJECT) flowing through network interfaces in a VPC.",
    question: "Which Amazon VPC feature records network IP traffic telemetry to Amazon CloudWatch Logs or Amazon S3?",
    options: [
      { id: 'A', text: "VPC Flow Logs" },
      { id: 'B', text: "Amazon GuardDuty" },
      { id: 'C', text: "Amazon Inspector" },
      { id: 'D', text: "AWS CloudTrail" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC, delivering logs to Amazon CloudWatch Logs, Amazon S3, or Amazon Kinesis Data Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "Network Monitoring", "Security"]
  },
  {
    id: "aws-clf-107",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Systems Manager Patch Manager for Automated OS Patching",
    scenario: "A systems administrator needs to automate the rollout of security patches across a fleet of 200 Linux and Windows Amazon EC2 instances during a scheduled maintenance window.",
    question: "Which AWS Systems Manager capability automates the process of patching managed instances with security updates?",
    options: [
      { id: 'A', text: "AWS Systems Manager Patch Manager" },
      { id: 'B', text: "AWS Config" },
      { id: 'C', text: "Amazon Inspector" },
      { id: 'D', text: "AWS Systems Manager Run Command" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Systems Manager Patch Manager automates the process of patching managed instances with both security-related and other types of updates across large fleets of Linux and Windows operating systems.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["Patch Manager", "Systems Manager", "Automation", "Security"]
  },
  {
    id: "aws-clf-108",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d2",
    domainName: "Security and Compliance",
    title: "AWS Systems Manager Parameter Store for Configuration Management",
    scenario: "A developer needs a secure, hierarchical storage service for application configuration parameters and plain-text strings (such as database URLs and feature flags) at no cost for standard tier parameters.",
    question: "Which AWS service provides centralized, secure storage for configuration data and secrets management?",
    options: [
      { id: 'A', text: "AWS Secrets Manager" },
      { id: 'B', text: "AWS Systems Manager Parameter Store" },
      { id: 'C', text: "AWS KMS" },
      { id: 'D', text: "Amazon DynamoDB" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data management and secrets management, integrating with KMS for encrypted SecureStrings and offering free standard parameters.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html",
    tags: ["Parameter Store", "Systems Manager", "Configuration", "Security"]
  },
  {
    id: "aws-clf-109",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon QuickSight Serverless Business Intelligence",
    scenario: "An analytics team needs to build interactive visual dashboards and reports connected directly to Amazon Athena, Amazon Redshift, and S3 data lakes with pay-per-session pricing for readers.",
    question: "Which AWS cloud-powered business intelligence (BI) service delivers interactive dashboards and ML-powered insights?",
    options: [
      { id: 'A', text: "AWS Glue" },
      { id: 'B', text: "Amazon QuickSight" },
      { id: 'C', text: "Amazon Kinesis" },
      { id: 'D', text: "Amazon Athena" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon QuickSight is a cloud-scale, serverless business intelligence (BI) service that enables you to deliver easy-to-understand visual dashboards to everyone in your organization, with native ML insights.",
    referenceUrl: "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html",
    tags: ["QuickSight", "BI", "Analytics", "Dashboards"]
  },
  {
    id: "aws-clf-110",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "AWS Glue Serverless Data Integration (ETL)",
    scenario: "A data engineer needs to discover, catalog, clean, transform, and load data from Amazon S3 into an Amazon Redshift data warehouse on a recurring automated schedule without provisioning ETL servers.",
    question: "Which serverless data integration service makes it easy to prepare and transform data for analytics using an ETL engine and Data Catalog?",
    options: [
      { id: 'A', text: "AWS Data Pipeline" },
      { id: 'B', text: "Amazon Kinesis" },
      { id: 'C', text: "AWS Glue" },
      { id: 'D', text: "Amazon EMR" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development with automated ETL and metadata cataloging.",
    referenceUrl: "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html",
    tags: ["AWS Glue", "ETL", "Analytics", "Serverless"]
  },
  {
    id: "aws-clf-111",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon EMR Big Data Framework (Hadoop and Spark)",
    scenario: "A research institution runs large-scale big data processing clusters using open-source frameworks like Apache Spark, Apache Hadoop, and Presto across hundreds of EC2 instances.",
    question: "Which AWS managed big data platform enables running petabyte-scale data processing with open-source distributed frameworks?",
    options: [
      { id: 'A', text: "Amazon EMR" },
      { id: 'B', text: "Amazon Redshift" },
      { id: 'C', text: "Amazon Athena" },
      { id: 'D', text: "AWS Glue" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EMR (formerly Elastic MapReduce) is the industry-leading cloud big data platform for processing vast amounts of data using open-source tools such as Apache Spark, Apache Hive, Apache HBase, and Presto.",
    referenceUrl: "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html",
    tags: ["EMR", "Big Data", "Spark", "Hadoop", "Analytics"]
  },
  {
    id: "aws-clf-112",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Kinesis for Real-Time Streaming Data",
    scenario: "An IoT application collects telemetry metrics from 100,000 smart energy meters every second and needs to ingest, buffer, and analyze the real-time data stream with sub-second latency.",
    question: "Which AWS service family is purpose-built to ingest, process, and analyze real-time streaming data at any scale?",
    options: [
      { id: 'A', text: "Amazon SQS" },
      { id: 'B', text: "Amazon MQ" },
      { id: 'C', text: "Amazon SNS" },
      { id: 'D', text: "Amazon Kinesis" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data (such as video, audio, application logs, website clickstreams, and IoT telemetry) so you can get timely insights.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/introduction.html",
    tags: ["Kinesis", "Streaming", "Real-Time", "Analytics"]
  },
  {
    id: "aws-clf-113",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon OpenSearch Service (Successor to Elasticsearch)",
    scenario: "An e-commerce website requires real-time search autocomplete, faceted product filtering, and centralized log analytics across server clusters.",
    question: "Which managed AWS service delivers interactive log analytics, application monitoring, and full-text search capabilities using OpenSearch and Kibana?",
    options: [
      { id: 'A', text: "Amazon Kendra" },
      { id: 'B', text: "Amazon Athena" },
      { id: 'C', text: "Amazon OpenSearch Service" },
      { id: 'D', text: "Amazon CloudWatch" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon OpenSearch Service (successor to Amazon Elasticsearch Service) makes it easy to perform interactive log analytics, real-time application monitoring, website search, and more.",
    referenceUrl: "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    tags: ["OpenSearch", "Log Analytics", "Search"]
  },
  {
    id: "aws-clf-114",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon SageMaker Machine Learning Platform",
    scenario: "A data science team needs a fully managed environment to prepare training data, build ML models with Jupyter notebooks, train algorithms at scale on GPU instances, and deploy endpoints for inference.",
    question: "Which AWS service provides a comprehensive managed environment to build, train, and deploy machine learning models?",
    options: [
      { id: 'A', text: "Amazon SageMaker" },
      { id: 'B', text: "AWS DeepRacer" },
      { id: 'C', text: "Amazon Rekognition" },
      { id: 'D', text: "Amazon Comprehend" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly.",
    referenceUrl: "https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html",
    tags: ["SageMaker", "Machine Learning", "AI"]
  },
  {
    id: "aws-clf-115",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Rekognition Computer Vision Service",
    scenario: "A social networking app needs to automatically detect inappropriate visual content, identify celebrity faces, and extract text from uploaded images without requiring custom ML model training.",
    question: "Which pre-trained AWS AI service provides computer vision capabilities to analyze images and video?",
    options: [
      { id: 'A', text: "Amazon SageMaker" },
      { id: 'B', text: "Amazon Rekognition" },
      { id: 'C', text: "Amazon Textract" },
      { id: 'D', text: "Amazon Polly" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no machine learning expertise.",
    referenceUrl: "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html",
    tags: ["Rekognition", "AI", "Computer Vision"]
  },
  {
    id: "aws-clf-116",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Textract OCR Document Extraction",
    scenario: "A mortgage lender needs to automatically extract printed text, handwritten notes, tables, and structured form fields from scanned PDF loan applications.",
    question: "Which AWS AI service automatically extracts text, handwriting, and tabular data from scanned documents beyond simple OCR?",
    options: [
      { id: 'A', text: "Amazon Rekognition" },
      { id: 'B', text: "Amazon Textract" },
      { id: 'C', text: "Amazon Kendra" },
      { id: 'D', text: "Amazon Comprehend" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Textract is a machine learning service that automatically extracts text, handwriting, layout structure, and data from scanned documents without manual configuration.",
    referenceUrl: "https://docs.aws.amazon.com/textract/latest/dg/what-is.html",
    tags: ["Textract", "AI", "OCR", "Document Processing"]
  },
  {
    id: "aws-clf-117",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Polly Text-to-Speech Service",
    scenario: "An educational reading app needs to convert written articles into lifelike, natural-sounding spoken audio speech across dozens of languages.",
    question: "Which AWS AI service turns text into lifelike speech using deep learning?",
    options: [
      { id: 'A', text: "Amazon Translate" },
      { id: 'B', text: "Amazon Polly" },
      { id: 'C', text: "Amazon Lex" },
      { id: 'D', text: "Amazon Transcribe" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk and build entirely new categories of speech-enabled products.",
    referenceUrl: "https://docs.aws.amazon.com/polly/latest/dg/what-is.html",
    tags: ["Polly", "AI", "Text-to-Speech"]
  },
  {
    id: "aws-clf-118",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Transcribe Automatic Speech Recognition (ASR)",
    scenario: "A contact centre needs to convert recorded customer phone call audio files into accurate, timestamped text transcripts for sentiment analysis.",
    question: "Which AWS service uses automatic speech recognition (ASR) to convert speech audio into text?",
    options: [
      { id: 'A', text: "Amazon Comprehend" },
      { id: 'B', text: "Amazon Polly" },
      { id: 'C', text: "Amazon Transcribe" },
      { id: 'D', text: "Amazon Lex" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon Transcribe is an automatic speech recognition service that makes it easy for developers to add speech-to-text capabilities to their applications.",
    referenceUrl: "https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html",
    tags: ["Transcribe", "AI", "Speech-to-Text"]
  },
  {
    id: "aws-clf-119",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Lex Conversational Chatbot Interfaces",
    scenario: "A customer service team wants to build an interactive conversational AI voice and text chatbot (the same technology behind Amazon Alexa) to handle flight booking queries.",
    question: "Which AWS service provides conversational AI interfaces for building voice and text chatbots?",
    options: [
      { id: 'A', text: "Amazon Transcribe" },
      { id: 'B', text: "Amazon Lex" },
      { id: 'C', text: "Amazon Connect" },
      { id: 'D', text: "Amazon Polly" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Lex is a fully managed artificial intelligence service with advanced natural language models for building conversational interfaces into applications with voice and text.",
    referenceUrl: "https://docs.aws.amazon.com/lex/latest/dg/what-is.html",
    tags: ["Amazon Lex", "Chatbots", "AI", "NLP"]
  },
  {
    id: "aws-clf-120",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon Connect Cloud Contact Centre",
    scenario: "A bank wants to replace an expensive legacy on-premises call centre PBX with an easy-to-use, omnichannel cloud contact centre that scales dynamically with pay-as-you-go pricing.",
    question: "Which AWS service delivers an omnichannel cloud contact centre with automated routing and CRM integrations?",
    options: [
      { id: 'A', text: "Amazon Chime" },
      { id: 'B', text: "Amazon Connect" },
      { id: 'C', text: "Amazon WorkSpaces" },
      { id: 'D', text: "Amazon Lex" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon Connect is an easy-to-use, omnichannel cloud contact centre that helps companies provide superior customer service at a lower cost, scaling to support any number of customer service agents.",
    referenceUrl: "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html",
    tags: ["Amazon Connect", "Contact Centre", "Customer Service"]
  },
  {
    id: "aws-clf-121",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon WorkSpaces Virtual Desktop Infrastructure (VDI)",
    scenario: "An enterprise needs to provision secure, managed virtual Windows and Linux cloud desktops for 500 remote employees accessible from laptops, tablets, and zero clients.",
    question: "Which AWS service provides managed Desktop-as-a-Service (DaaS) virtual cloud desktops?",
    options: [
      { id: 'A', text: "Amazon EC2" },
      { id: 'B', text: "Amazon WorkSpaces" },
      { id: 'C', text: "AWS Systems Manager" },
      { id: 'D', text: "Amazon AppStream 2.0" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon WorkSpaces is a fully managed Desktop-as-a-Service (DaaS) solution that enables workers to access the applications, documents, and resources they need anywhere, anytime, from any supported device.",
    referenceUrl: "https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html",
    tags: ["WorkSpaces", "VDI", "Desktop-as-a-Service", "End User Computing"]
  },
  {
    id: "aws-clf-122",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon AppStream 2.0 Application Streaming",
    scenario: "A university wants students to access heavy 3D CAD modeling software from low-cost web browsers without provisioning full virtual desktops or installing software locally.",
    question: "Which AWS service streams non-persistent desktop applications securely to HTML5 web browsers?",
    options: [
      { id: 'A', text: "Amazon EC2" },
      { id: 'B', text: "Amazon AppStream 2.0" },
      { id: 'C', text: "Amazon WorkSpaces" },
      { id: 'D', text: "AWS Elastic Beanstalk" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon AppStream 2.0 is a fully managed non-persistent application streaming service that provides users with instant access to their desktop applications from any device with a web browser.",
    referenceUrl: "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html",
    tags: ["AppStream 2.0", "Application Streaming", "End User Computing"]
  },
  {
    id: "aws-clf-123",
    difficulty: "hard",
    certId: "aws-clf",
    domainId: "d3",
    domainName: "Cloud Technology and Services",
    title: "Amazon FSx File Storage: FSx for Windows vs FSx for Lustre",
    scenario: "A high-performance computing (HPC) research workload requires sub-millisecond file storage throughput connected directly to Amazon S3 data lakes for compute-intensive financial modeling.",
    question: "Which Amazon FSx file system type is optimized for high-performance computing (HPC) and machine learning workloads?",
    options: [
      { id: 'A', text: "Amazon FSx for Windows File Server" },
      { id: 'B', text: "Amazon FSx for Lustre" },
      { id: 'C', text: "Amazon Elastic File System (EFS)" },
      { id: 'D', text: "Amazon S3 Standard" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon FSx for Lustre is a high-performance file system optimized for compute-intensive workloads such as high-performance computing (HPC), machine learning, and video processing, integrating natively with Amazon S3.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html",
    tags: ["FSx", "Lustre", "HPC", "Storage"]
  },
  {
    id: "aws-clf-124",
    difficulty: "easy",
    certId: "aws-clf",
    domainId: "d4",
    domainName: "Billing, Pricing, and Support",
    title: "AWS Free Tier: 12-Months Free Offerings",
    scenario: "A student creates a new AWS account to learn cloud computing and wants to know which popular compute resources are available for free for the first 12 months.",
    question: "What monthly allowance of Amazon EC2 compute is included in the 12-Months Free tier?",
    options: [
      { id: 'A', text: "750 hours per month of Linux and Windows t2.micro (or t3.micro in select Regions) instance usage." },
      { id: 'B', text: "750 hours per month of c5.xlarge compute instances." },
      { id: 'C', text: "100 hours per month of any EC2 instance type." },
      { id: 'D', text: "Unlimited EC2 usage for the first 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The AWS 12-Months Free tier includes 750 hours per month of Linux, RHEL, or SLES t2.micro/t3.micro instance usage, plus 750 hours of Windows t2.micro/t3.micro, enough to run a micro instance continuously for a full month.",
    referenceUrl: "https://aws.amazon.com/free/",
    tags: ["Free Tier", "EC2", "Billing", "Cost"]
  },
  {
    id: "aws-clf-125",
    difficulty: "medium",
    certId: "aws-clf",
    domainId: "d1",
    domainName: "Cloud Concepts",
    title: "AWS Cloud Adoption Framework: Operations Perspective",
    scenario: "An IT operations director is implementing observability practices, incident management escalation runbooks, and performance health dashboards for cloud workloads.",
    question: "Which perspective of the AWS Cloud Adoption Framework (AWS CAF) focuses on running, managing, and maintaining cloud workloads to meet service level agreements (SLAs)?",
    options: [
      { id: 'A', text: "Security Perspective" },
      { id: 'B', text: "Platform Perspective" },
      { id: 'C', text: "Business Perspective" },
      { id: 'D', text: "Operations Perspective" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Operations Perspective of the AWS CAF provides guidance on monitoring, observability, incident management, disaster recovery, and operational health to ensure cloud workloads meet business SLAs.",
    referenceUrl: "https://aws.amazon.com/professional-services/CAF/",
    tags: ["CAF", "Operations Perspective", "Governance", "Cloud Concepts"]
  }
];

export default AWS_CLF_QUESTIONS_5;
