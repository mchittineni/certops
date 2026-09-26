export const AWS_AIF_FLASHCARDS_6 = [
  {
    id: 'aws-aif-fc-126',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'List the stages of the foundation model lifecycle in order.',
    hint: 'Seven stages, and the last one loops back.',
    back: '<strong>Data selection</strong> → <strong>model selection</strong> → <strong>pre-training</strong> → <strong>fine-tuning</strong> → <strong>evaluation</strong> → <strong>deployment</strong> → <strong>feedback</strong>. Feedback from real use flows back into new data, prompts, or tuning, so the lifecycle is a loop rather than a one-way pipeline. Most organizations enter at model selection and never pre-train at all.',
    tags: ['Foundation model lifecycle']
  },
  {
    id: 'aws-aif-fc-127',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What data does pre-training use, and what is the model actually learning to do?',
    hint: 'No labels, and the answer is always the next word.',
    back: 'Pre-training uses a <strong>massive, diverse, unlabeled corpus</strong> (web text, books, code, documents). The objective is <strong>self-supervised</strong>: predict the next (or a masked) token, with the real text as the answer key. Over trillions of tokens the model absorbs grammar, facts, and reasoning patterns, producing a general base model that later stages adapt.',
    tags: ['Pre-training', 'Self-supervised learning']
  },
  {
    id: 'aws-aif-fc-128',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Fine-tuning vs continued pre-training: which one fits which kind of data?',
    hint: 'Ask first whether the data is labeled.',
    back: '<strong>Fine-tuning</strong> uses <strong>labeled prompt and completion pairs</strong> and teaches a task, format, or style (for example, always answer in a set structure). <strong>Continued pre-training</strong> uses <strong>unlabeled domain text</strong> and extends what the model knows (vocabulary and concepts of medicine, law, or shipping). Amazon Bedrock supports both as model customization methods.',
    tags: ['Fine-tuning', 'Continued pre-training']
  },
  {
    id: 'aws-aif-fc-129',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why is the foundation model lifecycle described as iterative?',
    hint: 'What happens after evaluation or feedback finds a problem?',
    back: 'Every later stage can send you back to an earlier one. <strong>Evaluation</strong> that reveals a regression sends the team back to data selection or fine-tuning; <strong>feedback</strong> from production (ratings, escalations, new topics users ask about) drives new data, updated prompts, or another tuning round. Deployment is not the end; it is where the next iteration starts gathering evidence.',
    tags: ['Foundation model lifecycle', 'Feedback']
  },
  {
    id: 'aws-aif-fc-130',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'At the model selection stage, what is the default choice for most organizations?',
    hint: 'Build or reuse?',
    back: '<strong>Reuse an existing pre-trained foundation model</strong> (from Amazon Bedrock or SageMaker JumpStart, for example) and adapt it with prompting, retrieval, or fine-tuning. Building a model from scratch is reserved for the rare organization with vast data, large accelerator budgets, and specialist teams.',
    tags: ['Model selection']
  },
  {
    id: 'aws-aif-fc-131',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What work belongs to the data selection and preparation stage?',
    hint: 'Everything that decides what the model will learn from.',
    back: '<strong>Curation</strong> (relevance and quality filtering), <strong>deduplication</strong>, removing or redacting <strong>personal and sensitive data</strong>, checking <strong>licensing and usage rights</strong>, and making the data <strong>representative</strong> of the users and cases the model will serve. Problems fixed here are cheap; problems that reach the model weights are expensive to remove.',
    tags: ['Data selection', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-132',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What kinds of evaluation can you run in Amazon Bedrock before deploying a model?',
    hint: 'Three graders: a metric, a model, a person.',
    back: '<strong>Automatic (programmatic)</strong> evaluation with built-in or custom prompt datasets and metrics such as accuracy, robustness, and toxicity; <strong>model as a judge</strong>, where an evaluator LLM scores responses on qualities like correctness and helpfulness; and <strong>human evaluation</strong> with your own work team for subjective qualities such as tone or brand voice.',
    tags: ['Evaluation', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-133',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is catastrophic forgetting, and how do you guard against it when fine-tuning?',
    hint: 'Narrow training can erase broad skills.',
    back: 'Tuning hard on one narrow task can <strong>degrade abilities the base model already had</strong> (a classifier-tuned model that can no longer summarize). Guard against it by <strong>mixing examples of the skills you must keep</strong> into the tuning set, using modest epochs and learning rates, and <strong>evaluating the old tasks as well as the new one</strong> before deployment.',
    tags: ['Fine-tuning', 'Catastrophic forgetting']
  },
  {
    id: 'aws-aif-fc-134',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why must evaluation data be held out from the fine-tuning data?',
    hint: 'A student who has seen the exam paper.',
    back: 'Testing on examples the model trained on measures <strong>memorization</strong>, so scores look far better than real performance (data leakage). A <strong>held-out set</strong> drawn from the same kind of data, never used in tuning, estimates how the model will do on new production inputs. Swapping metrics does not fix leakage; only separating the data does.',
    tags: ['Evaluation', 'Overfitting']
  },
  {
    id: 'aws-aif-fc-135',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Deployment stage: managed model API vs self-hosted endpoint. What does each trade?',
    hint: 'Who runs the servers, and how is it billed?',
    back: '<strong>Managed API</strong> (Amazon Bedrock on-demand): serverless, no instances to patch or scale, billed per input and output token; less control over the serving stack. <strong>Self-hosted endpoint</strong> (a SageMaker endpoint from JumpStart, or EC2): you choose instance types and control the model and runtime, but you pay for provisioned instances while they run and own scaling and operations.',
    tags: ['Deployment', 'Amazon Bedrock', 'SageMaker']
  },
  {
    id: 'aws-aif-fc-136',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What signals feed the feedback stage of the lifecycle?',
    hint: 'Anything real users do after deployment.',
    back: 'User <strong>ratings</strong> (thumbs up or down), <strong>escalations</strong> to humans, corrections and edits users make to outputs, logged prompts and responses, and <strong>topics that fail</strong> more than others. Teams review these to update prompts, add knowledge, build new tuning data, or retire use cases.',
    tags: ['Feedback']
  },
  {
    id: 'aws-aif-fc-137',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Does a deployed foundation model learn from the prompts it receives?',
    hint: 'Inference reads the weights; it never writes them.',
    back: '<strong>No.</strong> Inference does not change model weights, so a model cannot degrade from heavy use or improve from chats by itself. Apparent learning comes from <strong>context supplied in the prompt</strong> (in-context learning, retrieval) or from a <strong>deliberate new training run</strong> such as fine-tuning. In Amazon Bedrock, customer prompts and outputs are also not used to train the base models.',
    tags: ['Inference', 'Feedback', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-138',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does adaptability mean as an advantage of generative AI?',
    hint: 'How many models do three different jobs need?',
    back: 'One pre-trained foundation model can perform <strong>many different tasks</strong> (summarize, draft, classify, extract, translate) just by changing the instructions or context, and can take on new tasks without retraining. Traditional ML typically needs a separately trained and maintained model per task.',
    tags: ['Advantages', 'Adaptability']
  },
  {
    id: 'aws-aif-fc-139',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does responsiveness mean as an advantage of generative AI?',
    hint: 'New content, while the user waits.',
    back: 'Generative AI can <strong>create tailored content on demand, in near real time</strong>: a reply that reflects this customer\'s order and wording, a summary of the document just uploaded, a draft in the requested tone. It replaces canned or templated output with responses shaped to each request.',
    tags: ['Advantages', 'Responsiveness']
  },
  {
    id: 'aws-aif-fc-140',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does simplicity mean as an advantage of generative AI?',
    hint: 'What replaces labeled data and feature engineering?',
    back: 'Tasks can be specified in <strong>plain natural language</strong>, so non-specialists can prototype, and developers can add capabilities with an <strong>API call</strong> instead of collecting labeled data, engineering features, and building training pipelines. The barrier to a working first version drops from months to hours.',
    tags: ['Advantages', 'Simplicity']
  },
  {
    id: 'aws-aif-fc-141',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Traditional ML vs a foundation model: how does the work change when a new use case arrives?',
    hint: 'Weeks of training, or a new prompt?',
    back: '<strong>Traditional ML</strong>: gather and label task-specific data, train and tune a new model, deploy and maintain it separately. <strong>Foundation model</strong>: write or adjust instructions, supply context, test, and ship on the existing model; customize with fine-tuning only if prompting and retrieval fall short. The trade is less build effort for higher per-request compute and less predictability.',
    tags: ['Advantages', 'Adaptability']
  },
  {
    id: 'aws-aif-fc-142',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Rule-based chatbot vs foundation model assistant: what do you gain and what do you give up?',
    hint: 'Flexibility on one side, guarantees on the other.',
    back: '<strong>Gain</strong>: understanding of unscripted phrasing, natural replies, and new topics covered through instructions and context instead of new rules. <strong>Give up</strong>: guaranteed identical wording, a full trace of why an answer was given, and certainty that answers are correct. That is why generative assistants need guardrails, grounding, and monitoring.',
    tags: ['Advantages', 'Chatbots']
  },
  {
    id: 'aws-aif-fc-143',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'When do the advantages of generative AI not apply, so conventional code is the better tool?',
    hint: 'Think exact, repeatable, auditable.',
    back: 'When the task needs an <strong>exact, deterministic, verifiable outcome</strong>: calculating interest or tax, reconciling ledgers, enforcing access control, or applying a fixed business rule. A probabilistic generator can produce plausible but wrong figures. Use generative AI for open-ended language work (drafting, summarizing, translating) and keep rules and arithmetic in deterministic systems.',
    tags: ['Advantages', 'Use case fit']
  },
  {
    id: 'aws-aif-fc-144',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why do so few organizations pre-train their own foundation model?',
    hint: 'Count the data, the chips, and the months.',
    back: 'Pre-training needs <strong>enormous curated datasets</strong>, <strong>large clusters of accelerators</strong> running for weeks or months, and <strong>specialist research teams</strong>, costing far more than most projects justify. Starting from an existing model and adding private knowledge through retrieval or fine-tuning reaches the same business goal faster and cheaper.',
    tags: ['Pre-training', 'Cost']
  },
  {
    id: 'aws-aif-fc-145',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Match each training stage to its data: pre-training, fine-tuning, and preference alignment.',
    hint: 'Unlabeled, labeled, ranked.',
    back: '<strong>Pre-training</strong>: vast unlabeled text. <strong>Fine-tuning</strong>: a comparatively small set of labeled prompt and completion pairs, often thousands of examples. <strong>Preference alignment</strong> (RLHF): human rankings of alternative responses, used to steer the model toward helpful, harmless answers. Each stage uses far less data than the one before it.',
    tags: ['Pre-training', 'Fine-tuning', 'RLHF']
  },
  {
    id: 'aws-aif-fc-146',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which model customization methods does Amazon Bedrock offer?',
    hint: 'Labeled data, unlabeled data, and a teacher model.',
    back: '<strong>Fine-tuning</strong> with labeled examples, <strong>continued pre-training</strong> with unlabeled domain data, and <strong>model distillation</strong>, where a larger teacher model generates responses that train a smaller, cheaper student model. Customization jobs create a private copy of the model; the base model is unchanged.',
    tags: ['Amazon Bedrock', 'Model customization']
  },
  {
    id: 'aws-aif-fc-147',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which metrics does an automatic model evaluation job in Amazon Bedrock report?',
    hint: 'Right, stable, and safe.',
    back: '<strong>Accuracy</strong> (how well the output matches expected answers for the task type), <strong>robustness</strong> (how much output changes when the prompt is slightly perturbed), and <strong>toxicity</strong> (harmful content). Task types include text generation, summarization, question answering, and classification, using built-in or your own prompt datasets.',
    tags: ['Evaluation', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-148',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How do you capture production prompts and responses from Amazon Bedrock for the feedback stage?',
    hint: 'It is off by default and writes to two possible destinations.',
    back: 'Enable <strong>model invocation logging</strong>, which records request and response data for model invocations in the account and Region to <strong>Amazon CloudWatch Logs</strong>, <strong>Amazon S3</strong>, or both. Teams analyze those logs to find failing topics, build evaluation sets, and assemble new tuning data. Treat the logs as sensitive, since they can contain user data.',
    tags: ['Feedback', 'Amazon Bedrock', 'Logging']
  },
  {
    id: 'aws-aif-fc-149',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Where does reinforcement learning from human feedback (RLHF) sit in the lifecycle?',
    hint: 'After the model can already talk.',
    back: 'After pre-training and supervised fine-tuning. Humans <strong>rank alternative responses</strong>, a reward model learns those preferences, and the language model is optimized to produce higher-ranked answers. RLHF shapes <strong>helpfulness, tone, and safety</strong>; it does not add large amounts of new knowledge.',
    tags: ['RLHF', 'Foundation model lifecycle']
  },
  {
    id: 'aws-aif-fc-150',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why is a foundation model called a foundation?',
    hint: 'One base, many buildings.',
    back: 'It is a large model <strong>pre-trained on broad data</strong> that serves as the <strong>base for many downstream tasks and applications</strong>. Instead of training a new model per use case, teams build on the same foundation through prompting, retrieval, or fine-tuning.',
    tags: ['Foundation models']
  }
];

export default AWS_AIF_FLASHCARDS_6;
