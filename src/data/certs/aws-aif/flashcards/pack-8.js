export const AWS_AIF_FLASHCARDS_8 = [
  {
    id: 'aws-aif-fc-176',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is conversion rate, and which generative AI features does it measure well?',
    hint: 'Visitors who took the action you wanted.',
    back: 'Conversion rate is the <strong>share of visitors or leads who complete a target action</strong>, such as a purchase, sign-up, or signed deal. It suits customer-facing generative AI that aims to persuade or assist buying: generated product descriptions, shopping assistants, personalized offers, and sales proposal drafting.',
    tags: ['Business metrics', 'Conversion rate']
  },
  {
    id: 'aws-aif-fc-177',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is average revenue per user (ARPU)?',
    hint: 'Revenue divided by users, for one period.',
    back: 'ARPU is <strong>total revenue in a period divided by the number of users or subscribers</strong>. Generative AI moves it through personalization that increases spend per customer, for example tailored upsell messages or add-on recommendations. Compare against a control group to attribute the change.',
    tags: ['Business metrics', 'ARPU']
  },
  {
    id: 'aws-aif-fc-178',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'ARPU vs customer lifetime value (CLV): what does each capture?',
    hint: 'One period, or the whole relationship?',
    back: '<strong>ARPU</strong> is revenue per user <strong>within a period</strong>, a snapshot of spend. <strong>CLV</strong> is the <strong>total revenue expected over the entire customer relationship</strong>, so it also reflects retention and repeat purchases. A generative AI concierge meant to keep customers for years is judged by CLV; a monthly upsell feature is judged by ARPU.',
    tags: ['Business metrics', 'ARPU', 'Customer lifetime value']
  },
  {
    id: 'aws-aif-fc-179',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Model metrics vs business metrics for a generative AI application: examples of each, and who needs which?',
    hint: 'Engineers tune one; executives fund the other.',
    back: '<strong>Model metrics</strong>: ROUGE, BLEU, BERTScore, perplexity, latency, toxicity rate. They guide engineering choices. <strong>Business metrics</strong>: conversion rate, ARPU, CLV, handle time, hours saved, cost per interaction. They prove value to leadership. A model can score well on the first set and still fail on the second, so track both.',
    tags: ['Business metrics']
  },
  {
    id: 'aws-aif-fc-180',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which metrics show that a generative AI tool improves efficiency?',
    hint: 'Time, effort, and cost per unit of work.',
    back: '<strong>Average handle time</strong> in contact centers, <strong>hours saved per task</strong> (with quality checked), <strong>self-service resolution or containment rate</strong>, <strong>cost per interaction</strong>, and throughput such as documents processed per person per day. Compare with a baseline or control group rather than reading the raw numbers alone.',
    tags: ['Business metrics', 'Efficiency']
  },
  {
    id: 'aws-aif-fc-181',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does cross-domain performance mean as a metric for a generative AI application?',
    hint: 'One model, many kinds of work.',
    back: 'It measures how well a model performs <strong>across different domains or task types</strong>, such as legal, finance, and marketing, rather than excelling in only one. It matters when consolidating on a single foundation model for several business units; evaluate representative tasks from every domain before standardizing.',
    tags: ['Business metrics', 'Cross-domain performance']
  },
  {
    id: 'aws-aif-fc-182',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Sales rose after a generative AI launch. How do you prove the launch caused it?',
    hint: 'Something else was happening that quarter too.',
    back: 'Run an <strong>A/B test</strong> (randomized controlled experiment): expose one group to the feature and hold back a <strong>control group</strong> over the <strong>same period</strong>. Promotions, seasonality, and market shifts hit both groups equally, so the difference in conversion, basket value, or ARPU can be attributed to the feature. A before-and-after comparison alone is confounded.',
    tags: ['Business metrics', 'A/B testing']
  },
  {
    id: 'aws-aif-fc-183',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is a vanity metric for generative AI, and what should replace it?',
    hint: 'Activity is not impact.',
    back: 'A vanity metric counts <strong>activity</strong>: summaries generated, tokens processed, logins, prompts sent. It can rise while nobody benefits. Replace it with an <strong>outcome</strong> metric tied to the goal: hours saved with quality held constant, tickets resolved without an agent, deals won, revenue per user.',
    tags: ['Business metrics']
  },
  {
    id: 'aws-aif-fc-184',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How do you measure the accuracy of a generative AI assistant before launch?',
    hint: 'You need answers you already trust.',
    back: 'Build a <strong>test set of questions with verified reference answers</strong> (ground truth from subject matter experts), run the assistant on it, and report the <strong>percentage answered correctly</strong>, judged by people, rules, or an evaluator model. Keep the set representative of real questions and refresh it as content changes.',
    tags: ['Business metrics', 'Accuracy']
  },
  {
    id: 'aws-aif-fc-185',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What belongs on each side of a return on investment (ROI) calculation for a generative AI application?',
    hint: 'Token charges are only one line of the cost side.',
    back: '<strong>Benefits</strong>: revenue lift (conversion, ARPU, CLV), labor time saved, lower cost per interaction, faster cycle times. <strong>Costs</strong>: inference charges (tokens or provisioned capacity), customization and hosting, vector storage and retrieval, development and integration, human review, monitoring, and governance. Many business cases fail by counting only token charges.',
    tags: ['Business metrics', 'ROI']
  },
  {
    id: 'aws-aif-fc-186',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Bedrock in one sentence.',
    hint: 'Many providers, one API, no servers.',
    back: 'A <strong>fully managed, serverless service</strong> that gives access to foundation models from Amazon and third-party providers (such as Anthropic, Meta, Mistral AI, and Cohere) through a <strong>single API</strong>, with tools for customization, RAG (Knowledge Bases), agents, guardrails, and evaluation, and <strong>pay-as-you-go</strong> pricing.',
    tags: ['Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-187',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is PartyRock, and who is it for?',
    hint: 'A playground, not a production host.',
    back: '<strong>PartyRock, an Amazon Bedrock Playground</strong>, is a <strong>no-code</strong> web app builder for learning generative AI: you describe an app, assemble widgets, practice prompt engineering, and <strong>share or remix</strong> apps by link. It does not require an AWS account and suits students, workshops, and quick experiments rather than production workloads.',
    tags: ['PartyRock']
  },
  {
    id: 'aws-aif-fc-188',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is Amazon Q Business?',
    hint: 'An assistant for employees, grounded in company data.',
    back: 'A <strong>fully managed generative AI assistant for the workplace</strong>. Connectors index enterprise sources such as SharePoint, Confluence, Salesforce, and Amazon S3, and employees ask questions, summarize, and create content grounded in that data, with answers limited to what each user is <strong>permitted to see</strong>. No application to build.',
    tags: ['Amazon Q Business']
  },
  {
    id: 'aws-aif-fc-189',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is Amazon Q Developer?',
    hint: 'Where does a developer spend the day?',
    back: 'A <strong>generative AI assistant for software development</strong>, available in IDEs, the command line, and the AWS Management Console. It generates and explains code, writes tests, <strong>scans for security vulnerabilities</strong>, answers AWS questions, and <strong>transforms code</strong>, for example upgrading Java versions.',
    tags: ['Amazon Q Developer']
  },
  {
    id: 'aws-aif-fc-190',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is Amazon SageMaker JumpStart?',
    hint: 'A model hub that deploys into your own endpoints.',
    back: 'An <strong>ML hub</strong> in SageMaker AI with pre-trained and foundation models (many open-weight) plus solution templates. You can <strong>deploy a model with a few clicks to a SageMaker AI endpoint</strong> on instance types you choose, and <strong>fine-tune</strong> it on your data, keeping control of the infrastructure in your account.',
    tags: ['SageMaker JumpStart']
  },
  {
    id: 'aws-aif-fc-191',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Bedrock vs SageMaker JumpStart: what is the decision rule?',
    hint: 'Serverless simplicity or infrastructure control?',
    back: 'Choose <strong>Bedrock</strong> for <strong>serverless, API-based</strong> access with no instances, pay per token, and built-in RAG, agents, and guardrails. Choose <strong>JumpStart</strong> when you need a model <strong>not offered in Bedrock</strong>, a specific <strong>instance type</strong>, deep control of the serving stack, or to own an open model\'s weights, accepting that you pay for endpoints while they run.',
    tags: ['Amazon Bedrock', 'SageMaker JumpStart']
  },
  {
    id: 'aws-aif-fc-192',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Q Business vs Amazon Q Developer: which audience and data does each serve?',
    hint: 'Policy documents or source code?',
    back: '<strong>Q Business</strong>: all employees, answering from <strong>enterprise content</strong> (documents, wikis, tickets) through connectors, respecting access controls. <strong>Q Developer</strong>: <strong>software builders</strong>, working with code, the IDE, the CLI, and AWS resources. A question about the travel policy goes to Q Business; refactoring a service goes to Q Developer.',
    tags: ['Amazon Q Business', 'Amazon Q Developer']
  },
  {
    id: 'aws-aif-fc-193',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which policy types can an Amazon Bedrock guardrail include?',
    hint: 'Harmful content, subjects, words, personal data, grounding, attacks.',
    back: '<strong>Content filters</strong> (hate, insults, sexual, violence, misconduct), <strong>prompt attack</strong> detection, <strong>denied topics</strong>, <strong>word filters</strong>, <strong>sensitive information filters</strong> (block or mask PII, custom regex), <strong>contextual grounding checks</strong>, and <strong>Automated Reasoning checks</strong>. One guardrail can be applied across different models and applications.',
    tags: ['Amazon Bedrock Guardrails']
  },
  {
    id: 'aws-aif-fc-194',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Bedrock Flows vs Amazon Bedrock Agents: who decides the sequence of steps?',
    hint: 'You draw the path, or the model plans it.',
    back: 'In <strong>Flows</strong>, <strong>you define the workflow</strong> in a visual builder, connecting prompts, Lambda functions, knowledge bases, and conditions in a fixed, versioned path. With <strong>Agents</strong>, the <strong>model plans and chooses actions</strong> at run time to complete a goal. Use Flows for predictable pipelines and Agents for open-ended, multi-step tasks.',
    tags: ['Amazon Bedrock Flows', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-195',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Bedrock Data Automation vs Amazon Bedrock Knowledge Bases: what does each produce?',
    hint: 'A structured record, or an answer to a question?',
    back: '<strong>Data Automation</strong> turns unstructured <strong>documents, images, audio, and video</strong> into <strong>structured output</strong> (extracted fields, classifications, summaries) using standard or custom output definitions. <strong>Knowledge Bases</strong> index content as embeddings so an application can <strong>retrieve relevant passages to ground answers</strong> (RAG). One extracts; the other retrieves.',
    tags: ['Amazon Bedrock Data Automation', 'Amazon Bedrock Knowledge Bases']
  },
  {
    id: 'aws-aif-fc-196',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does Amazon Q Business stop users from seeing answers drawn from documents they cannot open?',
    hint: 'Identity plus the source system\'s permissions.',
    back: 'Connectors ingest each document\'s <strong>access control lists</strong> along with its content, and users sign in through an identity provider connected by <strong>IAM Identity Center</strong> or IAM federation. At query time, retrieval is filtered to documents the <strong>signed-in user is authorized</strong> to view in the source system, so restricted content never grounds their answers.',
    tags: ['Amazon Q Business', 'Access control']
  },
  {
    id: 'aws-aif-fc-197',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why use the Amazon Bedrock Converse API instead of each model\'s native request format?',
    hint: 'Write once, swap models.',
    back: 'Converse provides <strong>one consistent message structure</strong> for multi-turn conversations, system prompts, tool use, and inference settings across supported models. Switching models becomes mostly a <strong>model ID change</strong>, which makes side-by-side comparison and later migration far cheaper. Model-specific extras can still be passed separately.',
    tags: ['Amazon Bedrock', 'Converse API']
  },
  {
    id: 'aws-aif-fc-198',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Bedrock console playgrounds vs PartyRock: where should an engineer test prompts for a work project?',
    hint: 'Whose account is it running in?',
    back: 'The <strong>Bedrock console playgrounds</strong> (chat, text, image) run <strong>in your AWS account</strong>, with your IAM permissions, your Region, and the models you plan to deploy, so results carry straight into development. <strong>PartyRock</strong> is a separate public learning space without an AWS account, suited to learning and sharing demos.',
    tags: ['Amazon Bedrock', 'PartyRock']
  },
  {
    id: 'aws-aif-fc-199',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'A PartyRock prototype is a hit. What does production need that the prototype lacks?',
    hint: 'Identity, integration, and operations.',
    back: 'Rebuild on <strong>Amazon Bedrock in the company\'s AWS account</strong>, reusing the proven prompts, and add <strong>identity and access control</strong> (IAM, corporate sign-in), <strong>integration</strong> with business systems, <strong>guardrails</strong>, <strong>logging and monitoring</strong>, cost controls, and scaling. PartyRock is for learning and experimentation, not for serving customers.',
    tags: ['PartyRock', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-200',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does Amazon Bedrock Custom Model Import let you do?',
    hint: 'Bring your own tuned open model into the serverless side.',
    back: 'Import the weights of an open-architecture model you customized elsewhere (for example a fine-tuned Llama or Mistral model trained in SageMaker AI) into Bedrock and <strong>invoke it through the same serverless Bedrock APIs</strong> as other models, without managing inference servers. It combines your own customization with Bedrock\'s managed hosting and tooling.',
    tags: ['Amazon Bedrock', 'Custom Model Import']
  }
];

export default AWS_AIF_FLASHCARDS_8;
