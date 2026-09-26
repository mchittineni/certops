export const AWS_AIF_FLASHCARDS_4 = [
  {
    id: 'aws-aif-fc-76',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Managed API service vs self-hosted API: what do you gain and give up with each?',
    hint: 'Convenience versus control.',
    back: '<strong>Managed API</strong> (an AWS AI service, Amazon Bedrock): the provider runs, scales, patches and secures the model; you pay per request and ship fast, but have less control over the model, runtime and where it runs. <strong>Self-hosted</strong> (your container on EC2, EKS or on premises): full control over model version, hardware, network and data location, but you own scaling, availability, patching and paying for idle capacity.',
    tags: ['Managed API', 'Self-hosted API']
  },
  {
    id: 'aws-aif-fc-77',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Where does a SageMaker endpoint sit between a managed AI service and fully self-hosting?',
    hint: 'Your model, their servers.',
    back: 'A <strong>SageMaker endpoint</strong> hosts <strong>your own model</strong> (custom-trained or from JumpStart) on infrastructure AWS manages: you choose the instance type and scaling policy, and AWS handles provisioning, health checks, patching of the managed hosting stack and autoscaling. You keep control of the model and its container without running servers yourself, unlike an AI service (AWS\'s model) or EC2 (your servers).',
    tags: ['SageMaker endpoints', 'Model deployment']
  },
  {
    id: 'aws-aif-fc-78',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is SageMaker Data Wrangler used for?',
    hint: 'Pipeline stage: preparing data.',
    back: '<strong>Visual, low-code data preparation</strong> for ML: import from sources such as S3, Athena and Redshift, apply hundreds of built-in transformations (joins, imputation, encoding, scaling), generate <strong>data quality and insights reports</strong>, and export the flow to a pipeline or Feature Store. It covers the EDA, preprocessing and feature engineering stages, and is now part of SageMaker Canvas.',
    tags: ['Data Wrangler', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-79',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'SageMaker Feature Store: what are the online store and the offline store for?',
    hint: 'One is fast for serving, one is deep for training.',
    back: 'The <strong>online store</strong> holds the latest feature values for <strong>low-latency lookup at inference time</strong>. The <strong>offline store</strong>, in Amazon S3, keeps the <strong>full history</strong> of feature values for building training datasets and point-in-time queries. Writing features once to both keeps training and serving consistent and lets teams share and discover features instead of recomputing them.',
    tags: ['Feature Store', 'Features']
  },
  {
    id: 'aws-aif-fc-80',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does SageMaker Model Monitor do?',
    hint: 'Pipeline stage: after deployment.',
    back: 'Model Monitor <strong>continuously watches deployed models</strong>. It captures endpoint requests and predictions, compares them on a schedule with a <strong>baseline</strong> computed from training data, and reports violations and Amazon CloudWatch metrics when data quality, model quality, bias or feature attribution drifts. Those alerts can trigger investigation or automated retraining.',
    tags: ['Model Monitor', 'Monitoring']
  },
  {
    id: 'aws-aif-fc-81',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are the four SageMaker Model Monitor monitoring types, and which one needs ground truth labels?',
    hint: 'Inputs, performance, fairness, explanations.',
    back: '<strong>Data quality</strong>: input statistics drift from the training baseline. <strong>Model quality</strong>: accuracy, precision, recall or RMSE decline; this one needs <strong>ground truth labels</strong> merged with captured predictions. <strong>Bias drift</strong>: fairness metrics across groups change. <strong>Feature attribution drift</strong>: the features driving predictions shift. The last two use SageMaker Clarify.',
    tags: ['Model Monitor', 'Model quality']
  },
  {
    id: 'aws-aif-fc-82',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does SageMaker Model Registry provide?',
    hint: 'Versions, metadata, sign-off.',
    back: 'A central catalogue of models organised into <strong>model groups</strong> with numbered <strong>versions</strong>. Each version records metadata such as training metrics, lineage and artifacts, and carries an <strong>approval status</strong> (pending, approved, rejected) that can gate deployment through CI/CD. It answers the audit questions: which version is live, how was it built, and who approved it.',
    tags: ['Model Registry', 'MLOps']
  },
  {
    id: 'aws-aif-fc-83',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What problem does SageMaker Pipelines solve?',
    hint: 'Notebooks run by hand do not scale.',
    back: 'SageMaker Pipelines turns ML steps (processing, training, tuning, evaluation, conditional checks, model registration) into a <strong>defined, versioned workflow</strong> that runs the same way every time, on a schedule or on an event. It tracks each run\'s steps and artifacts for lineage. This delivers the MLOps goals of <strong>repeatable processes</strong> and automation instead of one person running notebooks in order.',
    tags: ['SageMaker Pipelines', 'MLOps']
  },
  {
    id: 'aws-aif-fc-84',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why track experiments, and what does SageMaker offer for it?',
    hint: 'Which run was best, and can you repeat it?',
    back: 'Experimentation means many training runs with different data, features, algorithms and hyperparameters. <strong>Experiment tracking</strong> logs each run\'s parameters, code and data versions, and metrics so runs can be compared, the best chosen and results reproduced. SageMaker provides <strong>managed MLflow</strong> for tracking and comparing runs, which also connects to Model Registry.',
    tags: ['Experimentation', 'MLflow']
  },
  {
    id: 'aws-aif-fc-85',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is MLOps, and what are its main goals?',
    hint: 'DevOps, applied to models.',
    back: 'MLOps applies <strong>DevOps practices to machine learning</strong>: automation, version control, CI/CD, testing and monitoring across the ML lifecycle. Goals: <strong>tracked experimentation</strong>, <strong>repeatable processes</strong>, <strong>scalable systems</strong>, <strong>managing technical debt</strong>, reaching <strong>production readiness</strong> faster, and <strong>monitoring and retraining</strong> models after launch so they stay accurate.',
    tags: ['MLOps', 'ML lifecycle']
  },
  {
    id: 'aws-aif-fc-86',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What forms does technical debt take in ML systems?',
    hint: 'The model is the small part.',
    back: 'Common forms: <strong>glue code</strong> and pipeline jungles of undocumented scripts; <strong>unused or redundant features</strong> kept "just in case"; <strong>unmanaged data dependencies</strong> on upstream tables that change without notice; <strong>unversioned</strong> data and models; and <strong>no automated tests</strong> or monitoring. Reduce it with modular, versioned pipelines, data validation, feature pruning and clear ownership.',
    tags: ['Technical debt', 'MLOps']
  },
  {
    id: 'aws-aif-fc-87',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Data drift vs concept drift: what changes in each?',
    hint: 'The inputs, or what the inputs mean.',
    back: '<strong>Data drift</strong> (covariate shift): the <strong>distribution of inputs</strong> changes, for example more young customers or a new product mix, while the input-output relationship may hold. <strong>Concept drift</strong>: the <strong>relationship between inputs and the target</strong> changes, for example fraudsters adopting new tactics so the same features now mean something different. Data drift shows in input statistics; concept drift usually needs ground truth to detect.',
    tags: ['Data drift', 'Monitoring']
  },
  {
    id: 'aws-aif-fc-88',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Scheduled retraining vs trigger-based retraining: when does each make sense?',
    hint: 'By the calendar, or by the alarm.',
    back: '<strong>Scheduled</strong> retraining (weekly, monthly) is simple and suits data that changes at a steady, known pace. <strong>Trigger-based</strong> retraining starts when monitoring detects drift or a metric drop, for example a Model Monitor alarm in CloudWatch that EventBridge uses to start a SageMaker pipeline, so compute is spent only when needed. Either way, the new model should be evaluated and approved before it replaces the old one.',
    tags: ['Model retraining', 'MLOps']
  },
  {
    id: 'aws-aif-fc-89',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does production readiness mean for an ML model?',
    hint: 'More than a good test score.',
    back: 'The model meets agreed <strong>performance thresholds</strong> on held-out data and business criteria; it is <strong>versioned and approved</strong> with documented lineage; it is deployed through an <strong>automated, repeatable</strong> process with rollback; it meets <strong>latency, scaling and cost</strong> targets; <strong>security and access controls</strong> are in place; and <strong>monitoring and alerting</strong> are running from day one with a plan for retraining.',
    tags: ['Production readiness', 'MLOps']
  },
  {
    id: 'aws-aif-fc-90',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are the four cells of a binary confusion matrix?',
    hint: 'Predicted versus actual, right versus wrong.',
    back: '<strong>True positive (TP)</strong>: predicted positive, actually positive. <strong>False positive (FP)</strong>: predicted positive, actually negative (a false alarm). <strong>True negative (TN)</strong>: predicted negative, actually negative. <strong>False negative (FN)</strong>: predicted negative, actually positive (a miss). Accuracy, precision, recall and F1 are all computed from these four counts.',
    tags: ['Confusion matrix', 'Model metrics']
  },
  {
    id: 'aws-aif-fc-91',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How is accuracy calculated, and when does it mislead?',
    hint: 'Rare events break it.',
    back: 'Accuracy = <strong>correct predictions divided by all predictions</strong>, (TP + TN) / total. It misleads on <strong>imbalanced data</strong>: if 99% of transactions are legitimate, a model that always says "legitimate" scores 99% accuracy while catching no fraud. For rare-event problems, use precision, recall, F1 or AUC instead.',
    tags: ['Accuracy', 'Class imbalance']
  },
  {
    id: 'aws-aif-fc-92',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Precision vs recall: what does each one measure?',
    hint: 'Of the flagged ones, or of the real ones?',
    back: '<strong>Precision</strong> = TP / (TP + FP): of everything the model flagged positive, how much really was positive. High precision means few false alarms. <strong>Recall</strong> (sensitivity) = TP / (TP + FN): of all actual positives, how many the model caught. High recall means few misses. Favour precision when false alarms are expensive, recall when misses are.',
    tags: ['Precision', 'Recall']
  },
  {
    id: 'aws-aif-fc-93',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is the F1 score, and when is it the right metric?',
    hint: 'A harmonic mean punishes imbalance between two numbers.',
    back: 'F1 = <strong>2 x precision x recall / (precision + recall)</strong>, the harmonic mean of the two, ranging from 0 to 1. Because the harmonic mean is dragged down by the lower value, F1 is high only when <strong>both</strong> precision and recall are high. Use it on imbalanced classes when false positives and false negatives both matter and you want one number to compare models.',
    tags: ['F1 score', 'Model metrics']
  },
  {
    id: 'aws-aif-fc-94',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What do the ROC curve and AUC show, and how do you read an AUC value?',
    hint: 'Every threshold at once.',
    back: 'The <strong>ROC curve</strong> plots true positive rate (recall) against false positive rate at every classification threshold. <strong>AUC</strong> is the area under it: the probability that the model ranks a random positive above a random negative. <strong>0.5</strong> = random guessing, <strong>1.0</strong> = perfect separation. Because it is <strong>threshold-independent</strong>, AUC suits comparing models before a business cutoff is chosen.',
    tags: ['AUC', 'ROC curve']
  },
  {
    id: 'aws-aif-fc-95',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which metrics evaluate regression models?',
    hint: 'Errors in the units of the target.',
    back: '<strong>MAE</strong> (mean absolute error): average size of errors, in the target\'s units. <strong>RMSE</strong> (root mean squared error): also in target units, but squares errors first, so large misses count more. <strong>R squared</strong>: share of the target\'s variance the model explains, usually 0 to 1. Classification metrics such as F1 or AUC do not apply to continuous predictions.',
    tags: ['Regression metrics', 'RMSE']
  },
  {
    id: 'aws-aif-fc-96',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Name four business metrics used to evaluate an ML model.',
    hint: 'What the CFO and the customer care about.',
    back: '<strong>Cost per user</strong> (running cost divided by users served), <strong>development costs</strong> (build, data and labeling spend), <strong>customer feedback</strong> (satisfaction, relevance ratings, complaints) and <strong>return on investment</strong> (net gain relative to cost). Others include conversion rate, revenue per user and hours saved. They show whether a model pays off, which model metrics alone cannot.',
    tags: ['Business metrics', 'ROI']
  },
  {
    id: 'aws-aif-fc-97',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How is ROI calculated for an ML project?',
    hint: 'Gain minus cost, over cost.',
    back: '<strong>ROI = (benefit - cost) / cost</strong>, expressed as a percentage. Example: a model that costs $400,000 to build and run for a year and delivers $1.2 million in savings has ROI = (1.2M - 0.4M) / 0.4M = <strong>200%</strong>. Include all costs (data, labeling, people, training, hosting, monitoring) and measure benefit against the previous process, not against zero.',
    tags: ['ROI', 'Business metrics']
  },
  {
    id: 'aws-aif-fc-98',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How does moving a classification threshold trade precision against recall?',
    hint: 'Stricter cutoff, fewer flags.',
    back: 'A classifier outputs a score; the <strong>threshold</strong> decides what counts as positive. <strong>Raising</strong> it flags fewer items: precision usually rises, recall falls (fewer false alarms, more misses). <strong>Lowering</strong> it flags more: recall rises, precision falls. Choose the threshold from the <strong>business cost</strong> of each error type, for example low for cancer screening, higher for blocking legitimate card payments.',
    tags: ['Threshold', 'Precision', 'Recall']
  },
  {
    id: 'aws-aif-fc-99',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How can you test a new model against the current one in production before switching?',
    hint: 'Split traffic, or mirror it.',
    back: '<strong>A/B testing</strong>: send a share of live traffic to the new model and compare business metrics such as conversion. SageMaker endpoints support this with multiple <strong>production variants</strong> and traffic weights. <strong>Shadow testing</strong>: send a copy of live requests to the new model without returning its answers, comparing its predictions, latency and errors safely. Both validate real-world impact that offline metrics cannot.',
    tags: ['A/B testing', 'Model deployment']
  },
  {
    id: 'aws-aif-fc-100',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is Amazon SageMaker Canvas, and who is it for?',
    hint: 'ML without writing code.',
    back: 'SageMaker Canvas is a <strong>no-code, visual</strong> workspace that lets <strong>business analysts</strong> prepare data, build models for classification, regression and time-series forecasting, and generate predictions without writing code. It includes Data Wrangler for data preparation and access to ready-to-use models, and models can be shared with data scientists in SageMaker for review.',
    tags: ['SageMaker Canvas', 'No-code ML']
  }
];

export default AWS_AIF_FLASHCARDS_4;
