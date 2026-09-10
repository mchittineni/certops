export const AWS_MLA_QUESTIONS_8 = [
  {
    id: "aws-mla-176",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-177",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-178",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-179",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-180",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-181",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-182",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-183",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-184",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-185",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-186",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-187",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-188",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-189",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-190",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-191",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-192",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-193",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-194",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-195",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-196",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-197",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Finding Good Hyperparameters on a Fixed Budget: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The ML engineering team is searching a hyperparameter space efficiently when only a limited number of trials can be afforded. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget." },
      { id: 'B', text: "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget." },
      { id: 'C', text: "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once." },
      { id: 'D', text: "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["hpo", "bayesian-search", "tuning", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-198",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Measuring a Model on a Rare Positive Class: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The ML engineering team is choosing evaluation metrics where positives make up a small fraction of one percent. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare." },
      { id: 'B', text: "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision." },
      { id: 'C', text: "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy." },
      { id: 'D', text: "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["evaluation-metrics", "f1-score", "imbalanced-data", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-199",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Cutting the Cost of Long Training Runs: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The ML engineering team is reducing the cost of long training runs that can tolerate being interrupted. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to." },
      { id: 'B', text: "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work." },
      { id: 'C', text: "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total." },
      { id: 'D', text: "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["spot-training", "cost-optimization", "checkpointing", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-200",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d2",
    domainName: "Model Training and Evaluation on SageMaker",
    title: "Spreading One Training Job Across Many GPUs: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The ML engineering team is scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time. The work is scoped to the pre-production environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication." },
      { id: 'B', text: "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model." },
      { id: 'C', text: "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step." },
      { id: 'D', text: "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["distributed-training", "smddp", "gpu", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_8;
