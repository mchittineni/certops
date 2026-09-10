export const AWS_MLA_FLASHCARDS_8 = [
  {
    id: "aws-mla-fc-176",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in High-Frequency FinTech Trading",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-fc-177",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Healthcare Patient Records & HIPAA",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-fc-178",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Global E-Commerce Black Friday Scale",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-fc-179",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in Autonomous Vehicle Telemetry",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-fc-180",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-fc-181",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Media Streaming & Global CDN",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-fc-182",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Aerospace Satellite Ground Systems",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-fc-183",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in Telecommunications 5G Core Network",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-fc-184",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Renewable Energy Smart Grid IoT",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-fc-185",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Supply Chain Cold-Chain Logistics",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-fc-186",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Banking Core Ledger & Payments",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-fc-187",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-fc-188",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Defense-Grade Zero-Trust Network",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-fc-189",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Online Multiplayer Gaming Engine",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-fc-190",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Insurance Risk & Actuarial Modeling",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-fc-191",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-fc-192",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-fc-193",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Digital Identity & Biometric Verification",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-fc-194",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Legal Discovery & Semantic Document Search",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-fc-195",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in AdTech Real-Time Bidding Exchange",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-fc-196",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Precision Agriculture & Drone Scouting",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-fc-197",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Hyperparameter Optimization (HPO) in Industrial Robotics Predictive Maintenance",
    hint: "Focus on hpo and bayesian-search best practices.",
    back: "<strong>SageMaker Hyperparameter Optimization (HPO)</strong>: Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget. Core MLOps rationale: Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what...",
    tags: ["hpo", "bayesian-search", "tuning", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-fc-198",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Model Evaluation Metrics for Imbalanced Datasets in Educational Remote Proctoring Platform",
    hint: "Focus on evaluation-metrics and f1-score best practices.",
    back: "<strong>Model Evaluation Metrics for Imbalanced Datasets</strong>: Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy. Core MLOps rationale: Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle t...",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-fc-199",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: SageMaker Managed Spot Training in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on spot-training and cost-optimization best practices.",
    back: "<strong>SageMaker Managed Spot Training</strong>: Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs. Core MLOps rationale: Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job c...",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-fc-200",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    front: "AWS ML Engineer: Distributed Training with Data Parallelism (SMDDP) in Disaster Emergency Dispatch & Operations",
    hint: "Focus on distributed-training and smddp best practices.",
    back: "<strong>Distributed Training with Data Parallelism (SMDDP)</strong>: Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication. Core MLOps rationale: Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS networ...",
    tags: ["distributed-training", "smddp", "gpu", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_FLASHCARDS_8;
