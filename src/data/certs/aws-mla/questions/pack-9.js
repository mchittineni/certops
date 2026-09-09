export const AWS_MLA_QUESTIONS_9 = [
  {
    id: "aws-mla-201",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: High-Frequency FinTech Trading",
    scenario: "In an enterprise high-frequency fintech trading ML environment, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.1.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these high-frequency fintech trading requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-202",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Healthcare Patient Records & HIPAA",
    scenario: "In an enterprise healthcare patient records & hipaa ML environment, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.2.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these healthcare patient records & hipaa requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-203",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Global E-Commerce Black Friday Scale",
    scenario: "In an enterprise global e-commerce black friday scale ML environment, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.3.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these global e-commerce black friday scale requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-204",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Autonomous Vehicle Telemetry",
    scenario: "In an enterprise autonomous vehicle telemetry ML environment, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.4.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these autonomous vehicle telemetry requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-205",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Multi-Tenant B2B SaaS Platform",
    scenario: "In an enterprise multi-tenant b2b saas platform ML environment, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.5.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-206",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Media Streaming & Global CDN",
    scenario: "In an enterprise media streaming & global cdn ML environment, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.6.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these media streaming & global cdn requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-207",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Aerospace Satellite Ground Systems",
    scenario: "In an enterprise aerospace satellite ground systems ML environment, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.7.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these aerospace satellite ground systems requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-208",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Telecommunications 5G Core Network",
    scenario: "In an enterprise telecommunications 5g core network ML environment, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.8.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these telecommunications 5g core network requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-209",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Renewable Energy Smart Grid IoT",
    scenario: "In an enterprise renewable energy smart grid iot ML environment, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.9.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these renewable energy smart grid iot requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-210",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Supply Chain Cold-Chain Logistics",
    scenario: "In an enterprise supply chain cold-chain logistics ML environment, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.10.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these supply chain cold-chain logistics requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-211",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Banking Core Ledger & Payments",
    scenario: "In an enterprise banking core ledger & payments ML environment, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.11.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these banking core ledger & payments requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-212",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Genomic Sequencing & Biotech Pipeline",
    scenario: "In an enterprise genomic sequencing & biotech pipeline ML environment, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.12.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-213",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Defense-Grade Zero-Trust Network",
    scenario: "In an enterprise defense-grade zero-trust network ML environment, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.13.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these defense-grade zero-trust network requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-214",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Online Multiplayer Gaming Engine",
    scenario: "In an enterprise online multiplayer gaming engine ML environment, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.14.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these online multiplayer gaming engine requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-215",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Insurance Risk & Actuarial Modeling",
    scenario: "In an enterprise insurance risk & actuarial modeling ML environment, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.15.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-216",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Pharmaceutical Clinical Trial Platform",
    scenario: "In an enterprise pharmaceutical clinical trial platform ML environment, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.16.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-217",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In an enterprise smart city traffic & mobility sensor hub ML environment, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.17.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-218",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Digital Identity & Biometric Verification",
    scenario: "In an enterprise digital identity & biometric verification ML environment, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.18.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these digital identity & biometric verification requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-219",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Legal Discovery & Semantic Document Search",
    scenario: "In an enterprise legal discovery & semantic document search ML environment, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.19.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these legal discovery & semantic document search requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-220",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: AdTech Real-Time Bidding Exchange",
    scenario: "In an enterprise adtech real-time bidding exchange ML environment, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.20.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these adtech real-time bidding exchange requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-221",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Precision Agriculture & Drone Scouting",
    scenario: "In an enterprise precision agriculture & drone scouting ML environment, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.21.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these precision agriculture & drone scouting requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-222",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Distributed Training with Data Parallelism (SMDDP): Industrial Robotics Predictive Maintenance",
    scenario: "In an enterprise industrial robotics predictive maintenance ML environment, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AWS MLOps engineering team is currently scaling deep learning training across multi-gpu clusters under production pipeline release 9.22.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for distributed training with data parallelism (smddp)?",
    options: [
      { id: 'A', text: "Train massive billion-parameter transformer models on a single CPU core instance." },
      { id: 'B', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'C', text: "Manually copy model weights between instances using uncoordinated scp commands." },
      { id: 'D', text: "Run independent training jobs with identical data without synchronizing gradient updates." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-223",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Hyperparameter Optimization (HPO): Educational Remote Proctoring Platform",
    scenario: "In an enterprise educational remote proctoring platform ML environment, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AWS MLOps engineering team is currently automated hyperparameter tuning with bayesian search under production pipeline release 9.23.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these educational remote proctoring platform requirements for sagemaker hyperparameter optimization (hpo)?",
    options: [
      { id: 'A', text: "Manually guess hyperparameter combinations one by one over several months." },
      { id: 'B', text: "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions." },
      { id: 'C', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'D', text: "Disable hyperparameter tuning and accept default initial parameter estimates for production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-224",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Model Evaluation Metrics for Imbalanced Datasets: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In an enterprise real estate valuation & geo-spatial analytics ML environment, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The AWS MLOps engineering team is currently choosing appropriate metrics beyond accuracy under production pipeline release 9.24.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for model evaluation metrics for imbalanced datasets?",
    options: [
      { id: 'A', text: "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class." },
      { id: 'B', text: "Optimize models solely to maximize training set accuracy, ignoring validation overfitting." },
      { id: 'C', text: "Report only the raw count of correct classifications without calculating false positive rates." },
      { id: 'D', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-225",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "SageMaker Managed Spot Training: Disaster Emergency Dispatch & Operations",
    scenario: "In an enterprise disaster emergency dispatch & operations ML environment, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AWS MLOps engineering team is currently cost optimization with s3 checkpointing for model training under production pipeline release 9.25.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for sagemaker managed spot training?",
    options: [
      { id: 'A', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." },
      { id: 'B', text: "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies." },
      { id: 'C', text: "Train models on local developer laptops connected to unencrypted office Wi-Fi networks." },
      { id: 'D', text: "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_9;
