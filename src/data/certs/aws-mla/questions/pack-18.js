export const AWS_MLA_QUESTIONS_18 = [
  {
    id: "aws-mla-426",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-427",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-428",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-429",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-430",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-431",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-432",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-433",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-434",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-435",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-436",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-437",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-438",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-439",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-440",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-441",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-442",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-443",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-444",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-445",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-446",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-447",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Noticing That a Production Model Has Degraded: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The ML engineering team is detecting that a deployed model's inputs or accuracy have shifted away from training. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert." },
      { id: 'B', text: "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation." },
      { id: 'C', text: "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review." },
      { id: 'D', text: "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-monitor", "drift-detection", "governance", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-448",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Explaining One Individual Prediction: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The ML engineering team is explaining to a declined applicant which inputs drove their particular decision. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset." },
      { id: 'B', text: "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production." },
      { id: 'C', text: "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions." },
      { id: 'D', text: "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["clarify", "explainability", "shap", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-449",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "An Approval Gate Before Production Deployment: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The ML engineering team is requiring a reviewer's approval before any model version can reach production. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run." },
      { id: 'B', text: "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first." },
      { id: 'C', text: "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag." },
      { id: 'D', text: "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["model-registry", "governance", "versioning", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-450",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d4",
    domainName: "MLOps, Monitoring, and Governance",
    title: "Keeping Training Data and Traffic Private: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The ML engineering team is keeping training data encrypted and job traffic off the public internet under audit. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles." },
      { id: 'B', text: "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys." },
      { id: 'C', text: "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key." },
      { id: 'D', text: "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["security", "iam", "kms", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_18;
