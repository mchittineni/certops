export const AWS_MLA_QUESTIONS_4 = [
  {
    id: "aws-mla-76",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: High-Frequency FinTech Trading",
    scenario: "In an enterprise high-frequency fintech trading ML environment, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.1.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these high-frequency fintech trading requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-77",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Healthcare Patient Records & HIPAA",
    scenario: "In an enterprise healthcare patient records & hipaa ML environment, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.2.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these healthcare patient records & hipaa requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-78",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Global E-Commerce Black Friday Scale",
    scenario: "In an enterprise global e-commerce black friday scale ML environment, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.3.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these global e-commerce black friday scale requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-79",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: Autonomous Vehicle Telemetry",
    scenario: "In an enterprise autonomous vehicle telemetry ML environment, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.4.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these autonomous vehicle telemetry requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-80",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Multi-Tenant B2B SaaS Platform",
    scenario: "In an enterprise multi-tenant b2b saas platform ML environment, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.5.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-81",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Media Streaming & Global CDN",
    scenario: "In an enterprise media streaming & global cdn ML environment, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.6.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these media streaming & global cdn requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-82",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Aerospace Satellite Ground Systems",
    scenario: "In an enterprise aerospace satellite ground systems ML environment, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.7.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these aerospace satellite ground systems requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-83",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: Telecommunications 5G Core Network",
    scenario: "In an enterprise telecommunications 5g core network ML environment, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.8.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these telecommunications 5g core network requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-84",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Renewable Energy Smart Grid IoT",
    scenario: "In an enterprise renewable energy smart grid iot ML environment, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.9.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these renewable energy smart grid iot requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-85",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Supply Chain Cold-Chain Logistics",
    scenario: "In an enterprise supply chain cold-chain logistics ML environment, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.10.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these supply chain cold-chain logistics requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-86",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Banking Core Ledger & Payments",
    scenario: "In an enterprise banking core ledger & payments ML environment, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.11.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these banking core ledger & payments requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-87",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: Genomic Sequencing & Biotech Pipeline",
    scenario: "In an enterprise genomic sequencing & biotech pipeline ML environment, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.12.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-88",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Defense-Grade Zero-Trust Network",
    scenario: "In an enterprise defense-grade zero-trust network ML environment, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.13.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these defense-grade zero-trust network requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-89",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Online Multiplayer Gaming Engine",
    scenario: "In an enterprise online multiplayer gaming engine ML environment, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.14.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these online multiplayer gaming engine requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-90",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Insurance Risk & Actuarial Modeling",
    scenario: "In an enterprise insurance risk & actuarial modeling ML environment, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.15.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-91",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: Pharmaceutical Clinical Trial Platform",
    scenario: "In an enterprise pharmaceutical clinical trial platform ML environment, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.16.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-92",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In an enterprise smart city traffic & mobility sensor hub ML environment, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.17.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-93",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Digital Identity & Biometric Verification",
    scenario: "In an enterprise digital identity & biometric verification ML environment, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.18.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these digital identity & biometric verification requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-94",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Legal Discovery & Semantic Document Search",
    scenario: "In an enterprise legal discovery & semantic document search ML environment, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.19.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these legal discovery & semantic document search requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-95",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: AdTech Real-Time Bidding Exchange",
    scenario: "In an enterprise adtech real-time bidding exchange ML environment, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.20.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these adtech real-time bidding exchange requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-96",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Precision Agriculture & Drone Scouting",
    scenario: "In an enterprise precision agriculture & drone scouting ML environment, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.21.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these precision agriculture & drone scouting requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-97",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Handling Missing Data and Categorical Encoding: Industrial Robotics Predictive Maintenance",
    scenario: "In an enterprise industrial robotics predictive maintenance ML environment, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AWS MLOps engineering team is currently statistical imputation and one-hot encoding best practices under production pipeline release 4.22.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for handling missing data and categorical encoding?",
    options: [
      { id: 'A', text: "Replace all missing values with zero indiscriminately across all features." },
      { id: 'B', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." },
      { id: 'C', text: "Drop 90% of dataset records because of a single missing optional address field." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-98",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Glue DataBrew for Scalable Data Cleaning: Educational Remote Proctoring Platform",
    scenario: "In an enterprise educational remote proctoring platform ML environment, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AWS MLOps engineering team is currently visual data preparation integrated with aws data lakes under production pipeline release 4.23.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these educational remote proctoring platform requirements for glue databrew for scalable data cleaning?",
    options: [
      { id: 'A', text: "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory." },
      { id: 'B', text: "Execute unindexed SQL updates directly against live production transactional OLTP databases." },
      { id: 'C', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'D', text: "Bypass data validation and feed raw corrupted sensor telemetry straight into model training." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-99",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Amazon SageMaker Feature Store: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In an enterprise real estate valuation & geo-spatial analytics ML environment, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The AWS MLOps engineering team is currently low-latency online feature serving and historical offline training under production pipeline release 4.24.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for amazon sagemaker feature store?",
    options: [
      { id: 'A', text: "Store all feature vectors in a monolithic shared MySQL database with daily table dumps." },
      { id: 'B', text: "Compute all mathematical feature transformations dynamically inside client mobile apps on every click." },
      { id: 'C', text: "Hardcode feature vectors in application memory without centralized cataloging." },
      { id: 'D', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-100",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "SageMaker Data Wrangler: Disaster Emergency Dispatch & Operations",
    scenario: "In an enterprise disaster emergency dispatch & operations ML environment, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AWS MLOps engineering team is currently visual data preparation and transformation pipelines under production pipeline release 4.25.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for sagemaker data wrangler?",
    options: [
      { id: 'A', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'B', text: "Manually inspect 50 million CSV rows using desktop spreadsheet software." },
      { id: 'C', text: "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data." },
      { id: 'D', text: "Delete all rows containing null values without analyzing feature distributions or missingness patterns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_4;
