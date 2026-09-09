export const AWS_MLA_QUESTIONS_7 = [
  {
    id: "aws-mla-151",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): High-Frequency FinTech Trading",
    scenario: "In an enterprise high-frequency fintech trading ML environment, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.1.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these high-frequency fintech trading requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-152",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Healthcare Patient Records & HIPAA",
    scenario: "In an enterprise healthcare patient records & hipaa ML environment, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.2.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these healthcare patient records & hipaa requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-153",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Global E-Commerce Black Friday Scale",
    scenario: "In an enterprise global e-commerce black friday scale ML environment, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.3.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these global e-commerce black friday scale requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-154",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Autonomous Vehicle Telemetry",
    scenario: "In an enterprise autonomous vehicle telemetry ML environment, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.4.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these autonomous vehicle telemetry requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-155",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Multi-Tenant B2B SaaS Platform",
    scenario: "In an enterprise multi-tenant b2b saas platform ML environment, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.5.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-156",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Media Streaming & Global CDN",
    scenario: "In an enterprise media streaming & global cdn ML environment, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.6.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these media streaming & global cdn requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-157",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Aerospace Satellite Ground Systems",
    scenario: "In an enterprise aerospace satellite ground systems ML environment, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.7.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these aerospace satellite ground systems requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-158",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Telecommunications 5G Core Network",
    scenario: "In an enterprise telecommunications 5g core network ML environment, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.8.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these telecommunications 5g core network requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-159",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Renewable Energy Smart Grid IoT",
    scenario: "In an enterprise renewable energy smart grid iot ML environment, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.9.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these renewable energy smart grid iot requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-160",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Supply Chain Cold-Chain Logistics",
    scenario: "In an enterprise supply chain cold-chain logistics ML environment, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.10.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these supply chain cold-chain logistics requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-161",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Banking Core Ledger & Payments",
    scenario: "In an enterprise banking core ledger & payments ML environment, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.11.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these banking core ledger & payments requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-162",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Genomic Sequencing & Biotech Pipeline",
    scenario: "In an enterprise genomic sequencing & biotech pipeline ML environment, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.12.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-163",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Defense-Grade Zero-Trust Network",
    scenario: "In an enterprise defense-grade zero-trust network ML environment, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.13.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these defense-grade zero-trust network requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-164",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Online Multiplayer Gaming Engine",
    scenario: "In an enterprise online multiplayer gaming engine ML environment, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.14.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these online multiplayer gaming engine requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-165",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Insurance Risk & Actuarial Modeling",
    scenario: "In an enterprise insurance risk & actuarial modeling ML environment, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.15.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-166",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Pharmaceutical Clinical Trial Platform",
    scenario: "In an enterprise pharmaceutical clinical trial platform ML environment, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.16.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-167",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Smart City Traffic & Mobility Sensor Hub",
    scenario: "In an enterprise smart city traffic & mobility sensor hub ML environment, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.17.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-168",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Digital Identity & Biometric Verification",
    scenario: "In an enterprise digital identity & biometric verification ML environment, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.18.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these digital identity & biometric verification requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-169",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Legal Discovery & Semantic Document Search",
    scenario: "In an enterprise legal discovery & semantic document search ML environment, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.19.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these legal discovery & semantic document search requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-170",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): AdTech Real-Time Bidding Exchange",
    scenario: "In an enterprise adtech real-time bidding exchange ML environment, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.20.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these adtech real-time bidding exchange requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-171",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Precision Agriculture & Drone Scouting",
    scenario: "In an enterprise precision agriculture & drone scouting ML environment, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.21.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these precision agriculture & drone scouting requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-172",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Industrial Robotics Predictive Maintenance",
    scenario: "In an enterprise industrial robotics predictive maintenance ML environment, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 7.22.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'C', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'D', text: "Report only the raw count of correct classifications without calculating false positive rates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-173",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Educational Remote Proctoring Platform",
    scenario: "In an enterprise educational remote proctoring platform ML environment, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 7.23.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these educational remote proctoring platform requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'B', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'C', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-174",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In an enterprise real estate valuation & geo-spatial analytics ML environment, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 7.24.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'C', text: "Run independent training jobs with identical data without synchronizing gradient updates." },
      { id: 'D', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-175",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Disaster Emergency Dispatch & Operations",
    scenario: "In an enterprise disaster emergency dispatch & operations ML environment, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 7.25.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'B', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'C', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_7;
