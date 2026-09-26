export const AWS_AIF_FLASHCARDS_16 = [
  {
    id: 'aws-aif-fc-376',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What four dataset characteristics does responsible AI guidance stress for training data?",
    hint: "Think about who is in the data and where it came from.",
    back: "<strong>Inclusivity</strong> (the people the model will serve are present), <strong>diversity</strong> (a wide range of conditions, accents, ages, contexts), <strong>curated sources</strong> (vetted, owned, legally usable data rather than indiscriminate scraping), and <strong>balance</strong> (no group or class so rare that the model cannot learn it). Weakness in any one of these shows up later as bias or inaccuracy for the neglected group.",
    tags: ["Dataset characteristics"]
  },
  {
    id: 'aws-aif-fc-377',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Overfitting vs underfitting: how do the training and test scores differ?",
    hint: "Compare the two scores, then compare each to a good target.",
    back: "<strong>Overfitting</strong> (high variance): training score is excellent, test score is much worse; the model memorized noise. <strong>Underfitting</strong> (high bias): both training and test scores are poor; the model is too simple to capture the pattern. A well-fit model scores well on both with only a small gap.",
    tags: ["Overfitting", "Underfitting"]
  },
  {
    id: 'aws-aif-fc-378',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Name three remedies for overfitting and three for underfitting.",
    hint: "One set constrains the model; the other frees it.",
    back: "<strong>Overfitting:</strong> more (or augmented) training data, regularization or dropout, early stopping, fewer features, simpler model. <strong>Underfitting:</strong> a more expressive model, more or richer features, less regularization, longer training. Applying an overfitting remedy to an underfit model makes it worse, so diagnose first.",
    tags: ["Bias-variance", "Model tuning"]
  },
  {
    id: 'aws-aif-fc-379',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why does removing a protected attribute such as race or gender often fail to remove bias?",
    hint: "Other columns can carry the same information.",
    back: "Features such as postal code, first name, language, or graduation year act as <strong>proxies</strong> that correlate with the protected attribute, so the model can reconstruct it. Removing the attribute also stops you from <strong>measuring</strong> bias against it. Better practice: retain the attribute under strict access control as a facet for bias metrics, then find and mitigate proxy features.",
    tags: ["Proxy variables", "Bias"]
  },
  {
    id: 'aws-aif-fc-380',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is subgroup analysis and why is an aggregate accuracy figure not enough?",
    hint: "An average can hide a tail.",
    back: "<strong>Subgroup analysis</strong> computes metrics such as accuracy, precision, or false negative rate separately for each relevant population slice (age band, region, skin tone, disability status). A model can be 95 percent accurate overall while failing badly for a small group, because that group contributes little to the average. Reporting per-group results exposes the disparity.",
    tags: ["Subgroup analysis"]
  },
  {
    id: 'aws-aif-fc-381',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "SageMaker Clarify pre-training vs post-training bias metrics: what does each measure?",
    hint: "One needs a model, one does not.",
    back: "<strong>Pre-training metrics</strong> run on the dataset alone, before any model exists: for example <strong>Class Imbalance (CI)</strong> and <strong>Difference in Proportions of Labels (DPL)</strong> between facet values. <strong>Post-training metrics</strong> run on a trained model's predictions: for example <strong>Disparate Impact (DI)</strong> and <strong>Difference in Positive Proportions in Predicted Labels (DPPL)</strong>, or accuracy difference between groups.",
    tags: ["SageMaker Clarify", "Bias metrics"]
  },
  {
    id: 'aws-aif-fc-382',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Which SageMaker Model Monitor schedule types exist, and which ones relate to responsible AI?",
    hint: "Four types; two of them use Clarify.",
    back: "Model Monitor offers <strong>data quality</strong>, <strong>model quality</strong>, <strong>bias drift</strong>, and <strong>feature attribution drift</strong> monitoring. Bias drift and feature attribution drift use <strong>SageMaker Clarify</strong> to track fairness metrics and SHAP-based feature importance on live traffic, alerting when they move beyond thresholds set from a baseline.",
    tags: ["Model Monitor", "Bias drift"]
  },
  {
    id: 'aws-aif-fc-383',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Amazon A2I vs SageMaker Ground Truth: which one reviews live predictions?",
    hint: "One builds training sets; the other checks production outputs.",
    back: "<strong>Amazon Augmented AI (A2I)</strong> routes individual <strong>live predictions</strong> to human reviewers, for example when confidence is below a threshold or for a random audit sample, with built-in integrations for Textract and Rekognition and custom workflows for anything else. <strong>SageMaker Ground Truth</strong> is for <strong>labeling datasets</strong> used to train and evaluate models.",
    tags: ["Amazon A2I", "Ground Truth"]
  },
  {
    id: 'aws-aif-fc-384',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "How can label quality be improved when human annotators make mistakes?",
    hint: "More than one opinion, plus a check on the disagreements.",
    back: "Send each item to <strong>multiple annotators</strong> and use <strong>annotation consolidation</strong> (Ground Truth combines answers, for example by weighted voting), <strong>audit</strong> items where annotators disagree, give clear instructions with examples, and track per-annotator accuracy against a gold set. Bad labels teach the model systematic errors, so label quality is a responsible AI concern, not just a data chore.",
    tags: ["Label quality", "Ground Truth"]
  },
  {
    id: 'aws-aif-fc-385',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What does the prompt stereotyping evaluation in SageMaker Clarify FM evaluations measure?",
    hint: "Pairs of sentences.",
    back: "It measures how often a foundation model assigns higher likelihood to a <strong>stereotyped</strong> sentence than to its <strong>anti-stereotyped</strong> counterpart (using a dataset such as CrowS-Pairs) across categories like gender, race, religion, age, and disability. A higher rate means stronger encoded stereotypes. Other Clarify FM tasks cover factual knowledge, toxicity, and semantic robustness.",
    tags: ["SageMaker Clarify", "FM evaluation"]
  },
  {
    id: 'aws-aif-fc-386',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Sampling bias vs measurement bias: how does each get into a training dataset?',
    hint: 'Who was collected, versus how they were recorded.',
    back: '<strong>Sampling (selection) bias</strong>: the data does not represent the population the model will serve, for example voice samples collected mostly from one accent or region, so accuracy drops for under-sampled groups. <strong>Measurement bias</strong>: features or labels are captured inconsistently or through a flawed proxy, for example lower-quality cameras at some sites, or arrest records used as a proxy for crime. Fix the first with better collection and subgroup coverage checks; fix the second by auditing how each feature and label is recorded.',
    tags: ['Bias', 'Datasets', 'Responsible AI']
  },
  {
    id: 'aws-aif-fc-387',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Define truthfulness (veracity) as a responsible AI dimension for generative models.",
    hint: "What goes wrong when it is missing?",
    back: "<strong>Veracity</strong> means outputs are factually correct and grounded, not <strong>hallucinated</strong>. Ways to support it: ground responses in trusted data with RAG and show <strong>source citations</strong>, use Bedrock Guardrails <strong>contextual grounding checks</strong>, evaluate factual knowledge before launch, and keep humans reviewing high-stakes answers.",
    tags: ["Veracity", "Hallucination"]
  },
  {
    id: 'aws-aif-fc-388',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is a human audit in the context of monitoring AI trustworthiness?",
    hint: "People, samples, and a schedule.",
    back: "A <strong>human audit</strong> is a planned review in which qualified people examine a sample of model inputs and outputs against criteria such as accuracy, fairness, and safety. It catches problems automated metrics miss, such as subtle stereotyping or plausible-but-wrong answers. On AWS it can be run through <strong>Amazon A2I</strong> random sampling or Bedrock human evaluation jobs, with findings fed back into data and model fixes.",
    tags: ["Human audit", "Trustworthiness"]
  },
  {
    id: 'aws-aif-fc-389',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why can a model trained on historical decisions be biased even if the data is perfectly representative?",
    hint: "The labels themselves.",
    back: "Representation fixes <strong>who</strong> is in the data, but the <strong>labels</strong> record past human decisions. If past loan officers or recruiters disadvantaged a group, the ground truth encodes that <strong>historical bias</strong> and the model learns to reproduce it faithfully. Mitigations: audit label rates by group (Clarify DPL), relabel or reweight, choose outcome labels that measure the real target rather than the old decision.",
    tags: ["Historical bias", "Labels"]
  },
  {
    id: 'aws-aif-fc-390',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Transparent (interpretable) model vs explainable model: what is the difference?",
    hint: "Can you read the logic, or only estimate it?",
    back: "A <strong>transparent</strong> model's logic can be followed directly: linear or logistic regression coefficients, a shallow decision tree's splits. An <strong>explainable</strong> model may be a black box (deep neural network, large ensemble, LLM) whose outputs are described after the fact with <strong>post-hoc</strong> techniques such as SHAP, partial dependence plots, or saliency maps.",
    tags: ["Transparency", "Explainability"]
  },
  {
    id: 'aws-aif-fc-391',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Local vs global explanations: what question does each answer?",
    hint: "One prediction or the whole model.",
    back: "A <strong>local</strong> explanation answers \"why did the model make <em>this</em> prediction?\", for example SHAP values for one declined application. A <strong>global</strong> explanation answers \"what drives the model overall?\", for example aggregated SHAP feature importance or partial dependence plots across a dataset. SageMaker Clarify produces both.",
    tags: ["SHAP", "Explainability"]
  },
  {
    id: 'aws-aif-fc-392',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What are SHAP values, in one sentence, and what is their main limitation?",
    hint: "Borrowed from cooperative game theory.",
    back: "<strong>SHAP</strong> (SHapley Additive exPlanations) assigns each feature a contribution to a prediction relative to a baseline, so contributions add up to the difference between the prediction and the baseline. Limitations: they are <strong>approximations</strong> that depend on the chosen baseline, can be expensive to compute, and describe correlation with the output, not causal effect, so they explain rather than make a model transparent.",
    tags: ["SHAP", "SageMaker Clarify"]
  },
  {
    id: 'aws-aif-fc-393',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What does a partial dependence plot (PDP) show?",
    hint: "Vary one feature, average the rest.",
    back: "A <strong>PDP</strong> shows how a model's average prediction changes as one feature is varied across its range, with other features left at their observed values. It gives a <strong>global</strong> view of a feature's marginal effect, for example that approval probability rises with income and then plateaus. SageMaker Clarify can generate PDPs alongside SHAP values.",
    tags: ["Partial dependence", "Explainability"]
  },
  {
    id: 'aws-aif-fc-394',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Give two examples of inherently transparent model types and two black-box types.",
    hint: "Coefficients and splits vs layers and ensembles.",
    back: "<strong>Transparent:</strong> linear regression, logistic regression, small decision trees, rule-based systems. <strong>Black box:</strong> deep neural networks (including foundation models and LLMs), large gradient-boosted or random-forest ensembles, support vector machines with complex kernels. Black-box models often perform better on complex data but need post-hoc explanation.",
    tags: ["Transparent models", "Black box"]
  },
  {
    id: 'aws-aif-fc-395',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why does high accuracy in testing not guarantee fairness once a model is in production?",
    hint: "Populations move; the baseline does not.",
    back: "Fairness was measured on a <strong>test population</strong> at one point in time. After launch, the mix of users, their behavior, and upstream data pipelines change (<strong>data and concept drift</strong>), so metrics such as disparate impact can degrade without overall accuracy falling. That is why bias is monitored continuously (Model Monitor bias drift) and why subgroup metrics, not just accuracy, are tracked.",
    tags: ["Bias drift", "Monitoring"]
  },
  {
    id: 'aws-aif-fc-396',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is class imbalance and why does it matter for responsible AI?",
    hint: "Rare outcomes, rare groups.",
    back: "<strong>Class imbalance</strong> means one label or facet value is far rarer than others, for example 2 percent fraud cases or few applicants over 70. Models trained on such data tend to perform poorly on the rare class or group, and a high accuracy figure can simply reflect predicting the majority. Remedies include collecting more data, resampling or reweighting, and using metrics such as recall or per-group results.",
    tags: ["Class imbalance"]
  },
  {
    id: 'aws-aif-fc-397',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is data augmentation, and when does it fail to fix a representation gap?",
    hint: "Copies of what you already have.",
    back: "<strong>Data augmentation</strong> creates modified copies of existing examples (flips, crops, noise, pitch shifts, paraphrases) to enlarge a dataset and reduce overfitting. It fails when the missing group or condition is <strong>absent</strong> from the original data: augmenting one region's voices does not teach the model another region's accent. Then new, representative data must be collected.",
    tags: ["Data augmentation", "Inclusivity"]
  },
  {
    id: 'aws-aif-fc-398',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "How does the bias-variance tradeoff relate to fairness across demographic groups?",
    hint: "Small groups have few examples.",
    back: "Underrepresented groups contribute few training examples, so a model's estimates for them have <strong>high variance</strong> (unstable, overfit to a few cases), while a simple model may impose majority patterns on them (<strong>high bias</strong>). Both show up as lower accuracy for the group. Collecting more data for small groups and evaluating per group addresses this better than tuning the overall model alone.",
    tags: ["Bias-variance", "Fairness"]
  },
  {
    id: 'aws-aif-fc-399',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What does SageMaker Debugger do, and why is it not a bias detection tool?",
    hint: "It looks inside training, not across groups.",
    back: "<strong>SageMaker Debugger</strong> captures tensors and metrics during training and applies rules that detect problems such as <strong>vanishing gradients, overfitting, or stalled loss</strong>, plus system bottlenecks. It diagnoses how training is going, but it does not compare outcomes across demographic groups; bias detection is the job of <strong>SageMaker Clarify</strong>.",
    tags: ["SageMaker Debugger", "Tool selection"]
  },
  {
    id: 'aws-aif-fc-400',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Which responsible AI tool fits each need: dataset bias, per-prediction explanation, fairness in production, human check of uncertain outputs?",
    hint: "Four needs, three AWS tools.",
    back: "<strong>Dataset bias before training:</strong> SageMaker Clarify pre-training metrics. <strong>Why this prediction:</strong> SageMaker Clarify SHAP (local explanation). <strong>Fairness over time in production:</strong> SageMaker Model Monitor bias drift (powered by Clarify). <strong>Human check of low-confidence or sampled outputs:</strong> Amazon Augmented AI (A2I).",
    tags: ["Tool selection", "Responsible AI"]
  }
];

export default AWS_AIF_FLASHCARDS_16;
