export const AWS_AIF_FLASHCARDS_13 = [
  {
    id: 'aws-aif-fc-301',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What are the typical training stages of a modern chat foundation model?',
    hint: 'Broad, then narrow, then aligned.',
    back: '<strong>1. Pre-training</strong>: self-supervised learning on a massive unlabeled corpus builds general knowledge. <strong>2. Supervised fine-tuning / instruction tuning</strong>: labeled instruction-response pairs teach the model to follow requests. <strong>3. Alignment</strong>, often <strong>RLHF</strong>: human preference rankings steer it toward helpful, harmless answers. Customers then optionally add continued pre-training or their own fine-tuning.',
    tags: ['Pre-training', 'Fine-tuning', 'RLHF']
  },
  {
    id: 'aws-aif-fc-302',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why can pre-training use internet-scale data when supervised learning cannot?',
    hint: 'Where do the labels come from?',
    back: 'Pre-training is <strong>self-supervised</strong>: the label for each example is taken from the data itself (the next token, or a masked word), so every sentence yields training examples without human annotation. Supervised learning needs a human-provided label per example, which cannot scale to trillions of tokens.',
    tags: ['Self-supervised learning', 'Pre-training']
  },
  {
    id: 'aws-aif-fc-303',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Base model vs instruction-tuned model: how do they behave differently?',
    hint: 'Continue the text, or answer the request?',
    back: 'A <strong>base model</strong> (pre-trained only) predicts what text comes next, so a question may be continued with more questions. An <strong>instruction-tuned</strong> model has been fine-tuned on instruction-response pairs and treats input as a <strong>request to fulfil</strong>. Most models offered for chat in Amazon Bedrock are instruction-tuned.',
    tags: ['Instruction tuning', 'Base models']
  },
  {
    id: 'aws-aif-fc-304',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is transfer learning, and why does it matter for foundation models?',
    hint: 'Do not start from zero.',
    back: 'Reusing what a model learned on one task or dataset as the <strong>starting point for another</strong>, then adapting it with a much smaller task-specific dataset. It is the principle behind fine-tuning: foundation models transfer general knowledge to specialized tasks, which is why a few thousand examples can be enough instead of the billions needed to train from scratch.',
    tags: ['Transfer learning', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-305',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Knowledge base parsing: default parser vs Bedrock Data Automation vs a foundation model parser',
    hint: 'What happens to the charts and tables in your PDFs?',
    back: 'The <strong>default parser</strong> is free but extracts <strong>text only</strong>, so figures, charts and tables are lost. <strong>Amazon Bedrock Data Automation</strong> parses multimodal content with no prompting, priced per page or image. A <strong>foundation model parser</strong> also handles figures and tables and lets you <strong>customize the parsing prompt</strong>, priced by tokens. Choosing either advanced parser applies it to every PDF in the data source.',
    tags: ['Knowledge Bases', 'Parsing']
  },
  {
    id: 'aws-aif-fc-306',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Reinforcement fine-tuning vs supervised fine-tuning in Amazon Bedrock: what is the difference?',
    hint: 'Correct answers vs a way to score answers.',
    back: '<strong>Supervised fine-tuning</strong> learns from labeled examples that show the exact desired output for each prompt. <strong>Reinforcement fine-tuning</strong> learns from <strong>reward feedback</strong>: the model generates responses, a grader (rules, code or a judge model) scores them, and training pushes the model toward higher-scoring behavior. It suits tasks where outputs can be checked but are hard to write out in advance, and needs far fewer labeled examples; model support is limited.',
    tags: ['Reinforcement fine-tuning', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-307',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What format does Amazon Bedrock expect for fine-tuning data?',
    hint: 'One example per line.',
    back: 'A <strong>JSON Lines (.jsonl)</strong> file in <strong>Amazon S3</strong>, one training record per line, pairing an input with the desired output in the format the base model specifies (prompt and completion fields, or a messages conversation). Continued pre-training uses JSONL records of unlabeled input text. An optional validation file uses the same format.',
    tags: ['Data preparation', 'JSONL', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-308',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which hyperparameters can you set for an Amazon Bedrock fine-tuning job, and what do they do?',
    hint: 'How many passes, how many at once, how big a step.',
    back: '<strong>Epochs</strong>: how many passes over the training data (too many causes overfitting). <strong>Batch size</strong>: examples processed per update. <strong>Learning rate</strong>: how much weights change per update (too high is unstable, too low learns slowly). Some models also expose <strong>learning rate warmup steps</strong>. Watch validation loss to tune them.',
    tags: ['Hyperparameters', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-309',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Training loss keeps falling but validation loss starts rising. What is happening, and what do you do?',
    hint: 'The model is learning the examples, not the task.',
    back: '<strong>Overfitting</strong>: the model is memorizing the training examples and generalizing worse. Stop earlier (fewer <strong>epochs</strong>, around the validation minimum), lower the learning rate, add more diverse training examples, or remove duplicates. A validation set is what makes this visible, so always hold one out.',
    tags: ['Overfitting', 'Validation data']
  },
  {
    id: 'aws-aif-fc-310',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is parameter-efficient fine-tuning (PEFT), such as LoRA?',
    hint: 'Freeze most of the model.',
    back: 'Fine-tuning that <strong>freezes the original weights</strong> and trains a small number of added parameters (LoRA inserts low-rank adapter matrices). It needs far less GPU memory and compute than full fine-tuning, trains faster, and stores each task as a small <strong>adapter</strong> rather than a full model copy, while usually reaching quality close to full fine-tuning. Available for many models in SageMaker JumpStart.',
    tags: ['PEFT', 'LoRA']
  },
  {
    id: 'aws-aif-fc-311',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Amazon Bedrock customization vs SageMaker JumpStart fine-tuning: when do you use each?',
    hint: 'Serverless simplicity vs model choice and control.',
    back: '<strong>Amazon Bedrock</strong>: fully managed customization of the Bedrock models that support it, with no infrastructure, and the custom model served through Bedrock. <strong>SageMaker JumpStart</strong>: fine-tune a much wider catalog of open-weight models, choose instance types and techniques such as LoRA, and deploy to a SageMaker endpoint you manage. Pick JumpStart when the model is not customizable in Bedrock or you need more control.',
    tags: ['SageMaker JumpStart', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-312',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How can an Amazon Bedrock knowledge base answer questions over data in database tables without embedding it?',
    hint: 'Natural language in, SQL out.',
    back: 'Connect the knowledge base to a <strong>structured data store</strong>, using <strong>Amazon Redshift</strong> as the query engine over Redshift tables or data registered in the AWS Glue Data Catalog. At query time it <strong>converts the question into SQL</strong>, runs it, and can generate an answer from the rows through <code>Retrieve</code> or <code>RetrieveAndGenerate</code>. The <code>GenerateQuery</code> API returns just the SQL. Totals and filters over rows are exact this way, which chunked vector search cannot guarantee.',
    tags: ['Knowledge Bases', 'Structured data']
  },
  {
    id: 'aws-aif-fc-313',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does data curation involve before fine-tuning?',
    hint: 'The model learns every example, good or bad.',
    back: 'Selecting and cleaning the examples: <strong>removing duplicates</strong>, fixing or dropping <strong>incorrect</strong> answers, removing spam, toxic or off-topic content, normalizing formatting, and checking that the set covers the task\'s real variety. Because a model imitates its training data, curation usually matters more than adding volume.',
    tags: ['Data curation', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-314',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What governance questions must be answered before data is used to fine-tune a model?',
    hint: 'Rights, sensitivity, and traceability.',
    back: '<strong>Rights</strong>: do licenses, contracts and consent allow this use? <strong>Sensitivity</strong>: is PII or confidential data present, and has it been removed or masked, since models can memorize and reproduce training data? <strong>Traceability</strong>: is lineage recorded (sources, versions, transformations) so the dataset can be audited and reproduced? Also: who approved it, and how long is it retained?',
    tags: ['Data governance', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-315',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How much data does fine-tuning need?',
    hint: 'Quality beats quantity.',
    back: 'Far less than pre-training: often <strong>hundreds to a few thousand high-quality, representative examples</strong> produce a noticeable change, and results generally improve with more good data. Noisy data hurts: adding many inaccurate examples can make the model worse. Check the minimum and maximum record counts the chosen model allows in Amazon Bedrock.',
    tags: ['Dataset size', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-316',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does representativeness mean for a fine-tuning dataset?',
    hint: 'Train on what you will see.',
    back: 'The examples should <strong>resemble production inputs</strong> in language, region, style, length, topics and edge cases, including typos and messy phrasing if real users write that way. A model tuned on unrepresentative data (one region, only formal text, only easy cases) performs well in testing and poorly on real traffic.',
    tags: ['Representativeness', 'Data preparation']
  },
  {
    id: 'aws-aif-fc-317',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'SageMaker Ground Truth vs Ground Truth Plus: what is the difference?',
    hint: 'Who manages the labelers?',
    back: '<strong>Ground Truth</strong>: you build and run labeling jobs yourself with your chosen workforce (private team, vendor, or Amazon Mechanical Turk) and built-in or custom task templates. <strong>Ground Truth Plus</strong>: a turnkey service where AWS provides and manages an expert labeling workforce and workflow, and you receive the labeled data.',
    tags: ['SageMaker Ground Truth', 'Data labeling']
  },
  {
    id: 'aws-aif-fc-318',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is RLHF in one sentence?',
    hint: 'People judge, a reward model learns, the model is optimized.',
    back: '<strong>Reinforcement learning from human feedback</strong>: humans rank or compare model responses, a <strong>reward model</strong> is trained to predict those preferences, and the language model is optimized with reinforcement learning to produce responses the reward model scores highly, aligning it with human judgments of helpfulness, honesty and harmlessness.',
    tags: ['RLHF', 'Alignment']
  },
  {
    id: 'aws-aif-fc-319',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'When is RLHF a better fit than supervised fine-tuning?',
    hint: 'Easier to judge than to write.',
    back: 'When the target quality is <strong>easier to recognize than to specify</strong>: helpfulness, tone, conciseness, safety. Writing one perfect reference answer per prompt is hard, but choosing the better of two responses is quick and consistent. Supervised fine-tuning fits when a clear correct output exists for each input, such as a label or a formatted extraction.',
    tags: ['RLHF', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-320',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does Amazon Bedrock Intelligent Prompt Routing do, and what do you configure on a router?',
    hint: 'One endpoint in front of two models from the same family.',
    back: 'It gives a <strong>single serverless endpoint</strong> that, for each request, predicts the response quality of two models <strong>from the same family</strong> (for example a smaller and a larger Claude, Llama or Nova model) and sends the prompt to the one that gives the best quality for the cost. Start with a <strong>default router</strong>; a <strong>configured router</strong> lets you pick the two models, a <strong>fallback model</strong>, and the <strong>response quality difference</strong> the other model must beat before it is used. It is optimized for English prompts, and each response reports which model answered.',
    tags: ['Intelligent Prompt Routing', 'Amazon Bedrock', 'Cost optimization']
  },
  {
    id: 'aws-aif-fc-321',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Tool use (function calling) with the Bedrock Converse API: who actually runs the tool?',
    hint: 'The model asks; something else acts.',
    back: 'You describe each tool (name, description, JSON input schema) in the request. When the model decides a tool is needed, it stops with a <strong>toolUse</strong> block naming the tool and its arguments. <strong>Your application</strong> runs the function or API call, then sends the output back as a <strong>toolResult</strong> so the model can finish its answer. The model never executes code or reaches your systems itself, so authorization and input validation stay in your code.',
    tags: ['Tool use', 'Converse API']
  },
  {
    id: 'aws-aif-fc-322',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why is pre-training from scratch rarely the right choice for a business?',
    hint: 'Weigh the cost against what already exists.',
    back: 'It needs an <strong>enormous corpus</strong>, <strong>large accelerator clusters for weeks or months</strong>, and specialist teams, and it produces a model that must then be instruction-tuned and aligned. Starting from an existing foundation model and using prompting, RAG, fine-tuning or continued pre-training delivers most business needs for a small fraction of the cost.',
    tags: ['Pre-training', 'Customization cost']
  },
  {
    id: 'aws-aif-fc-323',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why might a fine-tuned model reproduce a customer\'s phone number verbatim, and how do you prevent it?',
    hint: 'Models can memorize.',
    back: 'Large models can <strong>memorize</strong> rare, repeated or distinctive strings in training data and emit them later, especially after many epochs. Prevent it at the source: <strong>remove or mask PII</strong> before training (Amazon Macie can find it in S3, Amazon Comprehend can detect and redact it in text), deduplicate, avoid excessive epochs, and add a guardrail sensitive information filter as a backstop.',
    tags: ['PII', 'Memorization', 'Data governance']
  },
  {
    id: 'aws-aif-fc-324',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Label quality for fine-tuning: how do you keep human labels consistent?',
    hint: 'Clear rules, overlap, and review.',
    back: 'Write clear <strong>labeling guidelines</strong> with examples of edge cases; have several workers label the same items and <strong>consolidate</strong> or measure agreement; use subject-matter experts for specialist data; and audit samples regularly. SageMaker Ground Truth supports multiple workers per item with annotation consolidation.',
    tags: ['Data labeling', 'SageMaker Ground Truth']
  },
  {
    id: 'aws-aif-fc-325',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Where does a fine-tuned model in Amazon Bedrock live, and who can use it?',
    hint: 'Private copy, your account.',
    back: 'The customization job creates a <strong>private custom model in your account</strong>; the base model is not changed and your training data is not used to improve the provider\'s base model. Access is controlled with IAM, the model can be encrypted with your KMS key, and training data can be read through a VPC. You then deploy it for inference, with Provisioned Throughput or on-demand where the model supports it.',
    tags: ['Custom models', 'Amazon Bedrock', 'Security']
  }
];

export default AWS_AIF_FLASHCARDS_13;
