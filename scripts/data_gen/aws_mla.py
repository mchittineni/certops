#!/usr/bin/env python3
"""
Generator for AWS Certified Machine Learning Engineer – Associate (MLA-C01) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS

DOMAINS = [
    {"id": "d1", "name": "Data Preparation and Feature Engineering for ML", "weight": 28},
    {"id": "d2", "name": "Model Training and Evaluation on SageMaker", "weight": 26},
    {"id": "d3", "name": "Model Deployment, Serving, and Orchestration", "weight": 26},
    {"id": "d4", "name": "MLOps, Monitoring, and Governance", "weight": 20}
]

CERT_ID = "aws-mla"
EXPORT_PREFIX = "AWS_MLA"
REF_URL = "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/"

def build_aws_mla_bank():
    # 20 packs:
    # Packs 1-6: Domain 1 (150 items) ~30%
    # Packs 7-11: Domain 2 (125 items) ~25%
    # Packs 12-16: Domain 3 (125 items) ~25%
    # Packs 17-20: Domain 4 (100 items) ~20%
    pack_domains = (
        [DOMAINS[0]] * 6 +
        [DOMAINS[1]] * 5 +
        [DOMAINS[2]] * 5 +
        [DOMAINS[3]] * 4
    )

    d1_topics = [
        ("Amazon SageMaker Feature Store", "Low-latency online feature serving and historical offline training",
         "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training.",
         "Store all feature vectors in a monolithic shared MySQL database with daily table dumps.",
         "Compute all mathematical feature transformations dynamically inside client mobile apps on every click.",
         "Hardcode feature vectors in application memory without centralized cataloging.",
         "Amazon SageMaker Feature Store provides a purpose-built repository to store, update, retrieve, and share machine learning features. The Online Store (backed by low-latency storage) serves millisecond lookups for real-time inference, while the Offline Store (backed by S3 and Athena) archives historical feature values for training.",
         ["feature-store", "sagemaker", "data-prep"]),

        ("SageMaker Data Wrangler", "Visual data preparation and transformation pipelines",
         "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job.",
         "Manually inspect 50 million CSV rows using desktop spreadsheet software.",
         "Write unversioned, undocumented bash scripts on an ephemeral EC2 instance to clean data.",
         "Delete all rows containing null values without analyzing feature distributions or missingness patterns.",
         "SageMaker Data Wrangler simplifies data preparation and feature engineering with 300+ built-in data transformations, automated data quality insights, and anomaly detection. It seamlessly exports transformation workflows into SageMaker Processing jobs or Feature Store pipelines.",
         ["data-wrangler", "feature-engineering", "sagemaker"]),

        ("Handling Missing Data and Categorical Encoding", "Statistical imputation and one-hot encoding best practices",
         "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features.",
         "Replace all missing values with zero indiscriminately across all features.",
         "Drop 90% of dataset records because of a single missing optional address field.",
         "Assign arbitrary sequential integer IDs to non-ordinal categories, introducing false numeric relationships.",
         "Proper data preparation requires thoughtful imputation: numerical features are typically imputed using median (for skewed data) or mean, while low-cardinality categories benefit from One-Hot Encoding. Arbitrary integer encoding can mislead algorithms like linear models or neural nets into inferring spurious orderings.",
         ["imputation", "one-hot-encoding", "data-cleaning"]),

        ("Glue DataBrew for Scalable Data Cleaning", "Visual data preparation integrated with AWS data lakes",
         "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale.",
         "Require data scientists to manually clean raw petabyte-scale data using Python pandas in local memory.",
         "Execute unindexed SQL updates directly against live production transactional OLTP databases.",
         "Bypass data validation and feed raw corrupted sensor telemetry straight into model training.",
         "AWS Glue DataBrew is a visual data preparation tool that allows data analysts and ML engineers to clean, normalize, and enrich data using over 250 prebuilt transformations without writing code, outputting clean datasets directly to Amazon S3 for ML consumption.",
         ["glue", "databrew", "data-lake"])
    ]

    d2_topics = [
        ("SageMaker Managed Spot Training", "Cost optimization with S3 checkpointing for model training",
         "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs.",
         "Provision expensive On-Demand GPU clusters 24/7 with no automated shutdown policies.",
         "Train models on local developer laptops connected to unencrypted office Wi-Fi networks.",
         "Disable checkpointing and restart 48-hour deep learning training jobs from scratch upon every interruption.",
         "SageMaker Managed Spot Training uses Amazon EC2 Spot Instances to train models at up to a 90% discount compared to On-Demand instances. Configuring S3 checkpointing ensures that if a Spot instance is reclaimed, the job resumes seamlessly from the latest saved checkpoint.",
         ["spot-training", "cost-optimization", "checkpointing"]),

        ("Distributed Training with Data Parallelism (SMDDP)", "Scaling deep learning training across multi-GPU clusters",
         "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication.",
         "Train massive billion-parameter transformer models on a single CPU core instance.",
         "Manually copy model weights between instances using uncoordinated scp commands.",
         "Run independent training jobs with identical data without synchronizing gradient updates.",
         "SageMaker Distributed Data Parallel (SMDDP) optimizes inter-node communication across multi-GPU clusters using AWS Graviton and custom AllReduce algorithms on the AWS network infrastructure, delivering near-linear scaling efficiency for large deep learning workloads.",
         ["distributed-training", "smddp", "gpu"]),

        ("SageMaker Hyperparameter Optimization (HPO)", "Automated hyperparameter tuning with Bayesian search",
         "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget.",
         "Manually guess hyperparameter combinations one by one over several months.",
         "Run an infinite brute-force grid search across 100 continuous hyperparameter dimensions.",
         "Disable hyperparameter tuning and accept default initial parameter estimates for production.",
         "SageMaker Hyperparameter Optimization (HPO) uses Bayesian search to model the hyperparameter response surface. By learning from prior completed trials, it intelligently selects subsequent parameter combinations to maximize validation metrics (e.g., F1 or AUC) with minimal training runs.",
         ["hpo", "bayesian-search", "tuning"]),

        ("Model Evaluation Metrics for Imbalanced Datasets", "Choosing appropriate metrics beyond accuracy",
         "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy.",
         "Rely solely on accuracy when 99.9% of training samples belong to the negative majority class.",
         "Optimize models solely to maximize training set accuracy, ignoring validation overfitting.",
         "Report only the raw count of correct classifications without calculating false positive rates.",
         "In highly imbalanced datasets (e.g., fraud or defect detection), a naive model predicting only the majority class achieves 99%+ accuracy while delivering zero business value. ML engineers must evaluate Precision (minimizing false alarms), Recall (catching true defects), and PR-AUC.",
         ["evaluation-metrics", "f1-score", "imbalanced-data"])
    ]

    d3_topics = [
        ("SageMaker Real-Time vs Asynchronous Inference", "Matching endpoint architecture to latency and payload requirements",
         "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency.",
         "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files.",
         "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night.",
         "Use Serverless Inference for steady-state workloads generating 100,000 requests every second.",
         "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
         ["inference", "asynchronous-inference", "real-time"]),

        ("SageMaker Multi-Model Endpoints (MME)", "Cost-effective hosting for hundreds of specialized models",
         "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3.",
         "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models.",
         "Combine 500 unrelated models into a single giant monolithic script container.",
         "Host all customer models on a single unprotected public EC2 instance without load balancing.",
         "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
         ["mme", "multi-model", "cost-efficiency"]),

        ("Blue/Green Deployment Guardrails", "Zero-downtime model updates with automated rollback",
         "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms.",
         "Instantly switch 100% of production traffic to an untested new model container with no monitoring.",
         "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours.",
         "Deploy model updates directly into production without staging or health checks.",
         "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
         ["deployment-guardrails", "blue-green", "canary"]),

        ("SageMaker Pipelines Orchestration", "Automated end-to-end MLOps CI/CD pipelines",
         "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion.",
         "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting.",
         "Manually click web console buttons to initiate model training and deployment steps.",
         "Trigger production deployments directly from uncommitted local Jupyter notebooks.",
         "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
         ["pipelines", "mlops", "orchestration"])
    ]

    d4_topics = [
        ("SageMaker Model Monitor", "Continuous detection of data drift and concept drift in production",
         "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation.",
         "Deploy models into production and assume data distributions will remain static forever.",
         "Wait for customer complaints and revenue drops before investigating model accuracy drops.",
         "Disable endpoint logging to save Amazon S3 storage costs.",
         "SageMaker Model Monitor continuously monitors production endpoints for data drift (input features deviating from training baselines), concept drift (relationships between features and targets changing), model quality drops, and bias drift, emitting CloudWatch alarms for automated retraining.",
         ["model-monitor", "drift-detection", "governance"]),

        ("SageMaker Clarify for Explainability and Bias", "Feature attribution with SHAP values and fairness auditing",
         "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions.",
         "Treat models as unexplainable black boxes and refuse to explain credit or loan refusal decisions.",
         "Rely on random guessing to determine which feature influenced a high-risk prediction.",
         "Delete all audit logs and training data to prevent external compliance reviews.",
         "SageMaker Clarify provides machine learning explainability and bias detection across the ML lifecycle. It computes pre-training data bias (e.g., class imbalance, disparate impact) and post-training SHAP values, explaining how each input feature contributed to individual model predictions for transparency and compliance.",
         ["clarify", "explainability", "shap"]),

        ("SageMaker Model Registry and Governance", "Centralized model versioning and production approval gates",
         "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage.",
         "Distribute model artifact .tar.gz files via email attachments across engineering teams.",
         "Deploy unvetted experimental models straight from personal notebooks to production clusters.",
         "Overwrite production model artifacts in S3 without incrementing version numbers.",
         "The SageMaker Model Registry serves as a centralized catalog for managing model packages, versions, and deployment approval workflows. It enforces governance by ensuring only models with an 'Approved' status by designated reviewers can be deployed into staging or production environments.",
         ["model-registry", "governance", "versioning"]),

        ("SageMaker Security and IAM Least Privilege", "Securing ML infrastructure with KMS, VPC endpoints, and IAM",
         "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles.",
         "Grant AdministratorAccess permissions to the SageMaker execution role and expose endpoints to public 0.0.0.0/0 traffic.",
         "Store sensitive training datasets in public unencrypted S3 buckets with anonymous read permissions.",
         "Disable encryption in transit and at rest to improve training speed.",
         "Enterprise ML security requires end-to-end defense in depth: SageMaker execution roles restricted with IAM least privilege, VPC interface endpoints preventing data exfiltration over the public Internet, inter-container traffic encryption, and KMS customer-managed keys (CMKs) protecting S3 and EBS volumes.",
         ["security", "iam", "kms"])
    ]

    q_id_counter = 1
    fc_id_counter = 1

    for pack_idx in range(1, 21):
        domain = pack_domains[pack_idx - 1]
        
        if domain["id"] == "d1":
            topics_pool = d1_topics
        elif domain["id"] == "d2":
            topics_pool = d2_topics
        elif domain["id"] == "d3":
            topics_pool = d3_topics
        else:
            topics_pool = d4_topics
            
        pack_questions = []
        pack_cards = []

        for i in range(25):
            topic_idx = (i + (pack_idx - 1) * 3) % len(topics_pool)
            title_prefix, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
            context_title, context_desc = CONTEXTS[i]
            
            if i < 5:
                diff = "easy"
            elif i < 20:
                diff = "medium"
            else:
                diff = "hard"
                
            q_id = f"aws-mla-{q_id_counter}"
            fc_id = f"aws-mla-fc-{fc_id_counter}"
            
            target_slot = i % 4
            distractors = [dist1, dist2, dist3]
            
            options = []
            d_idx = 0
            for slot_idx in range(4):
                slot_id = chr(65 + slot_idx)
                if slot_idx == target_slot:
                    options.append({"id": slot_id, "text": correct_text})
                else:
                    options.append({"id": slot_id, "text": distractors[d_idx]})
                    d_idx += 1

            correct_letter = chr(65 + target_slot)
            
            scenario = f"In an enterprise {context_title.lower()} ML environment, {context_desc.lower()} The AWS MLOps engineering team is currently {scenario_core.lower()} under production pipeline release {pack_idx}.{i+1}."
            question_text = f"Which Amazon SageMaker service architecture or configuration satisfies these {context_title.lower()} requirements for {title_prefix.lower()}?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{title_prefix}: {context_title}",
                "scenario": scenario,
                "question": question_text,
                "options": options,
                "correctAnswers": [correct_letter],
                "type": "single",
                "explanation": explanation,
                "referenceUrl": REF_URL,
                "tags": tags + [context_title]
            })
            
            fc_front = f"AWS ML Engineer: {title_prefix} in {context_title}"
            fc_hint = f"Focus on {tags[0]} and {tags[1]} best practices."
            fc_back = f"<strong>{title_prefix}</strong>: {correct_text} Core MLOps rationale: {explanation[:160]}..."
            
            pack_cards.append({
                "id": fc_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "front": fc_front,
                "hint": fc_hint,
                "back": fc_back,
                "tags": tags + [context_title]
            })
            
            q_id_counter += 1
            fc_id_counter += 1

        write_question_pack(CERT_ID, f"{EXPORT_PREFIX}_QUESTIONS", pack_idx, pack_questions)
        write_flashcard_pack(CERT_ID, f"{EXPORT_PREFIX}_FLASHCARDS", pack_idx, pack_cards)

    print(f"Generated 500 questions and 500 flashcards for {CERT_ID} across 20 packs.")

if __name__ == "__main__":
    build_aws_mla_bank()
