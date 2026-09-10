#!/usr/bin/env python3
"""
Generator for AWS Certified Machine Learning Engineer – Associate (MLA-C01) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS, STAGES

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
        ("Amazon SageMaker Feature Store", "One Feature Definition for Training and Serving",
         "serving identical feature values to batch training and to sub-second online inference",
         "Configure SageMaker Feature Store with an Online Store for real-time low-latency inference (<10ms) and an Offline Store in Amazon S3 for batch training.",
         "Write the computed features to Amazon DynamoDB for the online inference lookups and to Amazon S3 for training, keeping both write paths in step for every feature.",
         "Cache the computed features in Amazon ElastiCache for Redis and rebuild each training dataset separately from the application's own transaction logs.",
         "Write the features to Amazon S3 and query them with Amazon Athena, both when assembling training sets and on each real-time inference request.",
         "Feature Store takes one feature definition and writes it to both stores, so the values a model trains on are the values it later reads, and the offline store supports point-in-time correct joins. Maintaining parallel DynamoDB and S3 paths is precisely what the service replaces, leaving training-serving skew to be prevented by hand on every change. Rebuilding training data from logs while serving from a cache guarantees the two diverge. Athena queries in seconds, which is far outside the online latency budget.",
         ["feature-store", "sagemaker", "data-prep"]),

        ("SageMaker Data Wrangler", "Preparing Tabular Data Before Training",
         "exploring and transforming a tabular training dataset and carrying those steps into training",
         "Use SageMaker Data Wrangler to visually explore, clean, and transform multi-modal tabular data, exporting the pipeline directly to a SageMaker Processing job.",
         "Use AWS Glue DataBrew to profile the data and clean it with recipe steps, writing the prepared dataset back into Amazon S3 ready for the training job to read.",
         "Use a SageMaker Processing job running a scikit-learn script that applies each of the required tabular transformations directly in code as a pipeline step.",
         "Use Amazon Athena views over the raw data in S3 so that the transformations are applied whenever the training set is queried.",
         "Data Wrangler pairs interactive exploration and quality insights with a direct export to a Processing job or Feature Store, so the steps explored by hand become the steps that run in training. DataBrew is genuinely comparable and often the better tool for analyst-owned data-lake cleaning, but it produces a dataset in S3 rather than a pipeline step wired into the training job. A hand-written Processing script runs the same transformations while giving up the profiling. Athena views apply logic at query time and cannot carry statistics fitted on the training split.",
         ["data-wrangler", "feature-engineering", "sagemaker"]),

        ("Handling Missing Data and Categorical Encoding", "Imputation and Encoding Choices",
         "deciding how to fill missing numeric values and encode low-cardinality categories",
         "Impute numerical missing values using median/mean or iterative imputers, and apply One-Hot Encoding for low-cardinality categorical features.",
         "Impute the missing numerical values with the column mean and apply ordinal encoding to the categorical features so the model receives compact integers.",
         "Impute the missing numerical values with the column median and apply target encoding to every categorical feature whatever its cardinality happens to be.",
         "Add a binary indicator column for each feature containing missing values and leave the categorical features as raw strings for the algorithm.",
         "Median or mean imputation fills the numeric gaps without distorting the distribution badly, and one-hot encoding represents a small category set without implying any order between the levels. Ordinal encoding assigns integers that a linear model or neural network reads as a real ranking. Target encoding is a legitimate technique for high-cardinality features but leaks the label unless it is fitted inside each cross-validation fold. A missingness indicator is a useful addition rather than a replacement, since the value itself is still absent and the strings are still unencoded.",
         ["imputation", "one-hot-encoding", "data-cleaning"]),

        ("Glue DataBrew for Scalable Data Cleaning", "No-Code Cleaning Across a Data Lake",
         "letting analysts profile and clean data-lake datasets without writing Spark code",
         "Deploy AWS Glue DataBrew to execute automated data profiling and recipe-based visual transformations across S3 data lakes at petabyte scale.",
         "Deploy AWS Glue ETL jobs written in PySpark so that all of the cleaning logic runs on a managed Spark cluster across the whole of the data lake.",
         "Deploy SageMaker Data Wrangler flows and export each one to a Processing job that writes the cleaned data back into the lake.",
         "Deploy Amazon EMR with a Spark cluster and run the cleaning notebooks the data engineering team already maintains, sized to the scale involved.",
         "DataBrew is aimed squarely at analysts: profiling runs automatically, transformations are recipe steps rather than code, and there is no cluster to size or operate. Glue ETL and EMR are both more capable and are the right answer once the logic outgrows recipes, but each demands PySpark skill the analysts do not have. Data Wrangler covers similar ground with a similar visual model, though it is oriented towards an ML practitioner assembling one training dataset rather than cleaning shared lake tables.",
         ["glue", "databrew", "data-lake"])
    ]

    d2_topics = [
        ("SageMaker Managed Spot Training", "Cutting the Cost of Long Training Runs",
         "reducing the cost of long training runs that can tolerate being interrupted",
         "Enable Managed Spot Training on SageMaker with checkpointing configured to Amazon S3 to save up to 90% on EC2 compute costs.",
         "Purchase a SageMaker Savings Plan covering the expected training hours so that the on-demand rate is discounted for the term committed to.",
         "Use SageMaker Training Compiler to speed the job up so that fewer instance hours are billed for exactly the same training work.",
         "Move the training job onto a larger instance type so that it finishes in fewer hours and therefore costs less in total.",
         "Spot capacity is where the large discount lives, and S3 checkpointing makes an interruption cost only the work since the last checkpoint, which a tolerant job can absorb. A Savings Plan discounts the on-demand rate by considerably less and ties the account to a commitment, though it composes with everything else. The Training Compiler genuinely cuts hours for supported deep-learning models while leaving the hourly rate untouched. A larger instance changes hours multiplied by a higher rate and frequently lands at the same total or worse.",
         ["spot-training", "cost-optimization", "checkpointing"]),

        ("Distributed Training with Data Parallelism (SMDDP)", "Spreading One Training Job Across Many GPUs",
         "scaling a training job that fits in GPU memory across many GPUs to shorten wall-clock time",
         "Use the SageMaker Distributed Data Parallel (SMDDP) library to shard training batches across distributed GPU instances with optimized AllReduce communication.",
         "Use the SageMaker model parallel library to split the network's layers across the GPUs so that each individual device holds only a portion of the whole model.",
         "Use PyTorch DistributedDataParallel with NCCL across the cluster's network so that the gradients are averaged between the workers each step.",
         "Use SageMaker automatic model tuning so that several training jobs execute in parallel across all of the available GPU instances.",
         "Data parallelism is the right axis when the model fits on one GPU and only the data is large, and SMDDP implements it with an AllReduce tuned for the AWS network. Model parallelism exists for the opposite problem, a network too large for a single device, and adds communication that buys nothing here. PyTorch DDP with NCCL is a correct data-parallel implementation and a fair choice, simply without the AWS-specific communication optimisation. Automatic model tuning runs many separate jobs concurrently and never makes one job faster.",
         ["distributed-training", "smddp", "gpu"]),

        ("SageMaker Hyperparameter Optimization (HPO)", "Finding Good Hyperparameters on a Fixed Budget",
         "searching a hyperparameter space efficiently when only a limited number of trials can be afforded",
         "Configure SageMaker HPO with Bayesian search strategy to systematically converge on optimal model parameters within a defined trial budget.",
         "Configure SageMaker automatic model tuning with random search so that the parameter space is sampled uniformly right across the trial budget.",
         "Configure SageMaker automatic model tuning with grid search so that every combination within the defined ranges is evaluated exactly once.",
         "Configure SageMaker Autopilot so that the algorithm and its parameters are both selected automatically from the training dataset.",
         "Bayesian search builds a model of the objective from completed trials and spends the remaining budget where an improvement is most likely, which is exactly what a hard trial limit calls for. Random search is a respectable baseline and parallelises perfectly, but each trial ignores everything the previous ones revealed. Grid search enumerates the space and becomes unusable over continuous ranges, exhausting the budget on a coarse lattice. Autopilot selects an entire pipeline rather than tuning the model that has already been chosen.",
         ["hpo", "bayesian-search", "tuning"]),

        ("Model Evaluation Metrics for Imbalanced Datasets", "Measuring a Model on a Rare Positive Class",
         "choosing evaluation metrics where positives make up a small fraction of one percent",
         "Evaluate fraud detection or rare disease models using Precision, Recall, F1-Score, and PR-AUC instead of standard classification accuracy.",
         "Evaluate the model with ROC-AUC, which is insensitive to the class ratio and is therefore appropriate whenever the positive class is rare.",
         "Evaluate with accuracy but move the decision threshold to the observed positive rate so that the score reflects the imbalance without computing precision.",
         "Rebalance the training data with SMOTE and then evaluate the model using accuracy measured on the rebalanced holdout set.",
         "Precision, recall, F1, and PR-AUC all focus on the positive class, so they fall visibly as false positives begin to outnumber true ones. ROC-AUC is the subtle trap here: its false-positive-rate axis is divided by an enormous negative class, so the curve stays flattering while precision collapses. Shifting the threshold moves the operating point without making accuracy any more informative, since predicting the majority class still scores above 99 percent. Evaluating on a SMOTE-rebalanced holdout measures performance on a class ratio that will never occur in production.",
         ["evaluation-metrics", "f1-score", "imbalanced-data"])
    ]

    d3_topics = [
        ("SageMaker Real-Time vs Asynchronous Inference", "Endpoint Type for Large Payloads and Long Runtimes",
         "serving requests that arrive individually, carry large payloads, and take minutes to process",
         "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency.",
         "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs.",
         "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive.",
         "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload.",
         "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
         ["inference", "asynchronous-inference", "real-time"]),

        ("SageMaker Multi-Model Endpoints (MME)", "Hosting Many Rarely Invoked Models",
         "hosting thousands of per-customer models that are each invoked only occasionally",
         "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3.",
         "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked.",
         "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model.",
         "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations.",
         "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
         ["mme", "multi-model", "cost-efficiency"]),

        ("Blue/Green Deployment Guardrails", "Updating a Live Endpoint Safely",
         "replacing the model behind a live endpoint with automatic withdrawal if it misbehaves",
         "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms.",
         "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics.",
         "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers.",
         "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy.",
         "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
         ["deployment-guardrails", "blue-green", "canary"]),

        ("SageMaker Pipelines Orchestration", "Automating the Path From Data to an Approved Model",
         "automating retraining from data preparation through evaluation to a registered model",
         "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion.",
         "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides.",
         "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task.",
         "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results.",
         "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
         ["pipelines", "mlops", "orchestration"])
    ]

    d4_topics = [
        ("SageMaker Model Monitor", "Noticing That a Production Model Has Degraded",
         "detecting that a deployed model's inputs or accuracy have shifted away from training",
         "Configure SageMaker Model Monitor with a baseline dataset to continuously inspect endpoint requests and detect data drift or model quality degradation.",
         "Configure CloudWatch alarms across the endpoint's invocation count, latency, and error metrics so that any operational problem raises an alert.",
         "Enable data capture on the endpoint and review the captured requests with Amazon Athena during the scheduled monthly model review.",
         "Schedule a monthly retraining pipeline so that the model is refreshed regularly whether or not its inputs have actually shifted.",
         "Model Monitor compares live traffic against a baseline computed from the training data and raises an alarm when the distributions or the quality metrics move, which is a statistical question no operational metric answers. CloudWatch alarms report that the endpoint is healthy and fast while it confidently returns wrong answers. Data capture plus Athena has the right data but a month of latency and a person in the loop. Blind monthly retraining may mask drift for a while and gives no signal that anything changed.",
         ["model-monitor", "drift-detection", "governance"]),

        ("SageMaker Clarify for Explainability and Bias", "Explaining One Individual Prediction",
         "explaining to a declined applicant which inputs drove their particular decision",
         "Use SageMaker Clarify to compute pre-training bias metrics and post-training SHAP (Shapley Additive exPlanations) values to explain feature contributions.",
         "Use the model's built-in feature importance scores to report which of the inputs the algorithm relies upon most heavily across the whole of the training dataset.",
         "Use the bias drift monitor in SageMaker Model Monitor to report how the model's fairness metrics are changing over time in production.",
         "Use SageMaker Debugger rules to capture tensors during training and report which of the features carried the largest gradients.",
         "Clarify computes SHAP values per prediction, so the contribution of each input to one applicant's own decision can be stated, and it reports pre-training bias across the dataset as well. Built-in feature importance is a global ranking: it describes the model overall and cannot say anything about an individual case. The bias drift monitor tracks fairness metrics through time and again explains no single decision. Debugger inspects tensors during training rather than the production inference that the applicant is asking about.",
         ["clarify", "explainability", "shap"]),

        ("SageMaker Model Registry and Governance", "An Approval Gate Before Production Deployment",
         "requiring a reviewer's approval before any model version can reach production",
         "Register models in the SageMaker Model Registry, cataloging metadata, evaluation metrics, approval status ('Approved', 'Rejected'), and lineage.",
         "Tag each SageMaker model resource with its evaluation metrics and an approval tag which the deployment pipeline reads before it will run.",
         "Store each model artifact in a versioned S3 bucket and record its metrics in a DynamoDB table that the deployment job consults first.",
         "Keep each approved model in its own Amazon ECR image repository and deploy whichever image is currently carrying the production tag.",
         "The Model Registry models this directly: versions are grouped into a package group, metrics and lineage travel with each version, and the approval status is a first-class field that IAM can restrict to reviewers and EventBridge can react to. Approval tags are mutable by anyone holding tagging permissions, which is a weak gate for a production control. Versioned S3 with a DynamoDB table reimplements the registry without its lineage or events. An ECR tag records that an image exists but carries neither the evaluation metrics nor the reviewer's decision.",
         ["model-registry", "governance", "versioning"]),

        ("SageMaker Security and IAM Least Privilege", "Keeping Training Data and Traffic Private",
         "keeping training data encrypted and job traffic off the public internet under audit",
         "Configure VPC interface endpoints (PrivateLink), enable KMS encryption for S3 and EBS storage, and enforce IAM least-privilege execution roles.",
         "Run the training jobs inside a VPC with a NAT gateway for their egress and rely on S3 default encryption using Amazon-managed keys.",
         "Enable network isolation on the training job so that the container has no network access, and encrypt the storage volumes with the default key.",
         "Attach an S3 gateway endpoint to the VPC route table and use bucket policies to limit access to the job's execution role.",
         "Interface endpoints keep the SageMaker API and runtime traffic on private addresses, customer-managed KMS keys give the auditable key control and revocation an audit expects, and a least-privilege execution role bounds what a compromised job can reach. A NAT gateway routes egress over the public internet, and Amazon-managed keys leave no customer-controlled key policy to audit. Network isolation is a strong control but blocks the S3 access the job needs unless endpoints are configured too. An S3 gateway endpoint privately covers S3 alone, leaving the SageMaker API calls on the public path.",
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
            title_prefix, challenge, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
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
            
            scenario = f"{context_desc} The ML engineering team is {scenario_core}. The work is scoped to {STAGES[(pack_idx - 1) % len(STAGES)]}."
            question_text = "Which approach best meets these requirements?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{challenge}: {context_title}",
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
