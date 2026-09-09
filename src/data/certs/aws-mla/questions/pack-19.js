export const AWS_MLA_QUESTIONS_19 = [
  {
    id: "aws-mla-451",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: High-Frequency FinTech Trading",
    scenario: "In an enterprise high-frequency fintech trading ML environment, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.1.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these high-frequency fintech trading requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-452",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Healthcare Patient Records & HIPAA",
    scenario: "In an enterprise healthcare patient records & hipaa ML environment, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.2.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these healthcare patient records & hipaa requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-453",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Global E-Commerce Black Friday Scale",
    scenario: "In an enterprise global e-commerce black friday scale ML environment, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.3.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these global e-commerce black friday scale requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-454",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: Autonomous Vehicle Telemetry",
    scenario: "In an enterprise autonomous vehicle telemetry ML environment, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.4.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these autonomous vehicle telemetry requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-455",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Multi-Tenant B2B SaaS Platform",
    scenario: "In an enterprise multi-tenant b2b saas platform ML environment, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.5.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-456",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Media Streaming & Global CDN",
    scenario: "In an enterprise media streaming & global cdn ML environment, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.6.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these media streaming & global cdn requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-457",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Aerospace Satellite Ground Systems",
    scenario: "In an enterprise aerospace satellite ground systems ML environment, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.7.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these aerospace satellite ground systems requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-458",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: Telecommunications 5G Core Network",
    scenario: "In an enterprise telecommunications 5g core network ML environment, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.8.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these telecommunications 5g core network requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-459",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Renewable Energy Smart Grid IoT",
    scenario: "In an enterprise renewable energy smart grid iot ML environment, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.9.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these renewable energy smart grid iot requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-460",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Supply Chain Cold-Chain Logistics",
    scenario: "In an enterprise supply chain cold-chain logistics ML environment, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.10.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these supply chain cold-chain logistics requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-461",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Banking Core Ledger & Payments",
    scenario: "In an enterprise banking core ledger & payments ML environment, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.11.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these banking core ledger & payments requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-462",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: Genomic Sequencing & Biotech Pipeline",
    scenario: "In an enterprise genomic sequencing & biotech pipeline ML environment, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.12.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-463",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Defense-Grade Zero-Trust Network",
    scenario: "In an enterprise defense-grade zero-trust network ML environment, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.13.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these defense-grade zero-trust network requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-464",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Online Multiplayer Gaming Engine",
    scenario: "In an enterprise online multiplayer gaming engine ML environment, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.14.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these online multiplayer gaming engine requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-465",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Insurance Risk & Actuarial Modeling",
    scenario: "In an enterprise insurance risk & actuarial modeling ML environment, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.15.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-466",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: Pharmaceutical Clinical Trial Platform",
    scenario: "In an enterprise pharmaceutical clinical trial platform ML environment, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.16.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-467",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In an enterprise smart city traffic & mobility sensor hub ML environment, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.17.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-468",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Digital Identity & Biometric Verification",
    scenario: "In an enterprise digital identity & biometric verification ML environment, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.18.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these digital identity & biometric verification requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-469",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Legal Discovery & Semantic Document Search",
    scenario: "In an enterprise legal discovery & semantic document search ML environment, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.19.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these legal discovery & semantic document search requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-470",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: AdTech Real-Time Bidding Exchange",
    scenario: "In an enterprise adtech real-time bidding exchange ML environment, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.20.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these adtech real-time bidding exchange requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-471",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Precision Agriculture & Drone Scouting",
    scenario: "In an enterprise precision agriculture & drone scouting ML environment, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.21.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these precision agriculture & drone scouting requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-472",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Security and IAM Least Privilege: Industrial Robotics Predictive Maintenance",
    scenario: "In an enterprise industrial robotics predictive maintenance ML environment, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AWS MLOps engineering team is currently securing ml infrastructure with kms, vpc endpoints, and iam under production pipeline release 19.22.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for sagemaker security and iam least privilege?",
    options: [
      { id: 'A', text: "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic." },
      { id: 'B', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'C', text: "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions." },
      { id: 'D', text: "Disable encryption in transit and at rest to improve training speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-473",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Monitor: Educational Remote Proctoring Platform",
    scenario: "In an enterprise educational remote proctoring platform ML environment, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AWS MLOps engineering team is currently continuous detection of data drift and concept drift in production under production pipeline release 19.23.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these educational remote proctoring platform requirements for sagemaker model monitor?",
    options: [
      { id: 'A', text: "Deploy models into production and assume data distributions will remain static forever." },
      { id: 'B', text: "Wait for customer complaints and revenue drops before investigating model accuracy drops." },
      { id: 'C', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'D', text: "Disable endpoint logging to save Amazon S3 storage costs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-474",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Clarify for Explainability and Bias: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In an enterprise real estate valuation & geo-spatial analytics ML environment, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The AWS MLOps engineering team is currently feature attribution with shap values and fairness auditing under production pipeline release 19.24.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for sagemaker clarify for explainability and bias?",
    options: [
      { id: 'A', text: "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions." },
      { id: 'B', text: "Rely on random guessing to determine which feature influenced a high-risk prediction." },
      { id: 'C', text: "Delete all audit logs and training data to prevent external compliance reviews." },
      { id: 'D', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-475",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "SageMaker Model Registry and Governance: Disaster Emergency Dispatch & Operations",
    scenario: "In an enterprise disaster emergency dispatch & operations ML environment, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AWS MLOps engineering team is currently centralized model versioning and production approval gates under production pipeline release 19.25.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for sagemaker model registry and governance?",
    options: [
      { id: 'A', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." },
      { id: 'B', text: "Distribute model artifact .tar.gz files via email attachments across engineering teams." },
      { id: 'C', text: "Deploy unvetted experimental models straight from personal notebooks to production clusters." },
      { id: 'D', text: "Overwrite production model artifacts in S3 without incrementing version numbers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_19;
