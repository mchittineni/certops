export const AWS_MLA_QUESTIONS_2 = [
  {
    id: "aws-mla-26",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-27",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-28",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-29",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-30",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-31",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-32",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-33",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-34",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-35",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-36",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-37",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-38",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-39",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-40",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-41",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-42",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-43",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-44",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-45",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-46",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-47",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "One Feature Definition for Training and Serving: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The ML engineering team is serving identical feature values to batch training and to sub-second online inference. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature." },
      { id: 'B', text: "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training." },
      { id: 'C', text: "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs." },
      { id: 'D', text: "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["feature-store", "sagemaker", "data-prep", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-48",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Preparing Tabular Data Before Training: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The ML engineering team is exploring and transforming a tabular training dataset and carrying those steps into training. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read." },
      { id: 'B', text: "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step." },
      { id: 'C', text: "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job." },
      { id: 'D', text: "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["data-wrangler", "feature-engineering", "sagemaker", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-49",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "Imputation and Encoding Choices: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The ML engineering team is deciding how to fill missing numeric values and encode low-cardinality categories. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers." },
      { id: 'B', text: "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be." },
      { id: 'C', text: "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm." },
      { id: 'D', text: "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["imputation", "one-hot-encoding", "data-cleaning", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-50",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d1",
    domainName: "Data Preparation and Feature Engineering for ML",
    title: "No-Code Cleaning Across a Data Lake: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The ML engineering team is letting analysts profile and clean data-lake datasets without writing Spark code. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale." },
      { id: 'B', text: "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake." },
      { id: 'C', text: "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake." },
      { id: 'D', text: "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["glue", "databrew", "data-lake", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_2;
