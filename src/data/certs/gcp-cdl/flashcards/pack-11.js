export const GCP_CDL_FLASHCARDS_11 = [
  {
    id: 'gcp-cdl-fc-251',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Pre-trained API or custom model: what is the quick decision rule?',
    hint: 'Ask whether the task is common or unique to you.',
    back: 'If the task is <strong>common</strong> (label a photo, transcribe audio, translate text) and speed matters, call a <strong>pre-trained API</strong>: no training data, no ML skills, results in days. If the task is <strong>unique to your business</strong> and a source of competitive advantage, and you have data and skills, build a <strong>custom model</strong>: slower and costlier, but nobody else has it.',
    tags: ['AI strategy', 'Pre-trained APIs']
  },
  {
    id: 'gcp-cdl-fc-252',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Which five strategic considerations does Google Cloud highlight when selecting an AI solution?',
    hint: 'Two are about time and effort, one about advantage, one about people, one about options.',
    back: '<strong>Implementation speed</strong> (how soon it delivers value), <strong>development effort</strong> (how much building it takes), <strong>potential for business differentiation</strong> (how unique the result is), <strong>technical expertise requirements</strong> (which skills the team needs) and <strong>choice and flexibility</strong> (freedom to pick and switch models and tools). Faster, lower-effort options usually offer less differentiation.',
    tags: ['AI strategy', 'Decision making']
  },
  {
    id: 'gcp-cdl-fc-253',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Order these from least to most effort: custom training, prebuilt agents and apps, Agent Studio or AutoML, pre-trained APIs.',
    hint: 'Effort rises as you move from using to building.',
    back: '1. <strong>Prebuilt agents and apps</strong> (for example the Gemini Enterprise app): use as delivered. 2. <strong>Pre-trained APIs and foundation models</strong> (Vision, Translation, Gemini): call from code. 3. <strong>Low-code customisation</strong> (Agent Studio, AutoML): adapt with your data, little code. 4. <strong>Custom training or the ADK</strong>: full control, most skills and time, and the most differentiation.',
    tags: ['AI strategy', 'Agent Platform']
  },
  {
    id: 'gcp-cdl-fc-254',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What is Gemini Enterprise Agent Platform?',
    hint: 'It replaced a product whose name started with V.',
    back: 'Google Cloud\'s unified platform to <strong>build, scale, govern and optimise</strong> AI agents and models. It is the <strong>evolution of Vertex AI</strong>, announced in April 2026: Model Garden, training, AutoML, tuning and endpoints now live inside it, alongside agent tools such as Agent Studio, the Agent Development Kit and Agent Runtime.',
    tags: ['Agent Platform', 'Vertex AI']
  },
  {
    id: 'gcp-cdl-fc-255',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Gemini Enterprise app vs Gemini Enterprise Agent Platform: who uses each?',
    hint: 'One is for employees, one is for builders.',
    back: 'The <strong>Gemini Enterprise app</strong> is the employee-facing product: staff chat, search company data through connectors and use prebuilt or custom agents, with no coding. <strong>Agent Platform</strong> is for developers and data scientists who build, deploy and govern agents and models. Agents built on the platform can be delivered to employees through the app.',
    tags: ['Gemini Enterprise', 'Agent Platform']
  },
  {
    id: 'gcp-cdl-fc-256',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Agent Studio vs Agent Development Kit (ADK): when do you use each?',
    hint: 'Canvas or code?',
    back: '<strong>Agent Studio</strong> is the <strong>low-code, visual</strong> workspace: design and compare prompts, ground models and prototype agents quickly, suitable for less technical builders. The <strong>ADK</strong> is the <strong>code-first</strong> framework: agents, tools and multi-agent workflows defined in code, version-controlled, tested and shipped through CI/CD. Prototype in the studio; move to the ADK when engineering control matters.',
    tags: ['Agent Studio', 'Agent Development Kit']
  },
  {
    id: 'gcp-cdl-fc-257',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What does Model Garden offer?',
    hint: 'Think of three families of models.',
    back: 'A catalogue of <strong>200+ models</strong> on Agent Platform: <strong>Google models</strong> (Gemini, Imagen, Gemma and others), <strong>partner models</strong> (for example Anthropic Claude) and <strong>open models</strong>. Teams can discover, test, tune and deploy them under one set of security, billing and governance controls, which supports choice and avoids lock-in to a single model.',
    tags: ['Model Garden', 'Foundation models']
  },
  {
    id: 'gcp-cdl-fc-258',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Agent Garden vs Model Garden: what is in each?',
    hint: 'One holds brains, the other holds blueprints.',
    back: '<strong>Model Garden</strong> holds <strong>models</strong>: foundation, partner and open models you call or deploy. <strong>Agent Garden</strong> holds <strong>prebuilt agent samples and templates</strong> for common business tasks, such as invoice processing or financial analysis, that you deploy and customise instead of designing an agent from scratch.',
    tags: ['Agent Garden', 'Model Garden']
  },
  {
    id: 'gcp-cdl-fc-259',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What problem does Agent Runtime solve?',
    hint: 'The agent is built; now where does it live?',
    back: '<strong>Agent Runtime</strong> is the managed environment for <strong>running agents in production</strong>. Google operates the infrastructure, it scales with demand, starts quickly and supports long-running, multi-day agents plus session and memory services. Teams deploy agents built with the ADK or other frameworks without managing servers or clusters.',
    tags: ['Agent Runtime', 'Managed services']
  },
  {
    id: 'gcp-cdl-fc-260',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Agent Identity, Agent Registry and Agent Gateway: which governance question does each answer?',
    hint: 'Who did it, what exists, and how do they connect?',
    back: '<strong>Agent Identity</strong>: <em>which agent did this?</em> Each agent gets a verifiable identity with authorization policies and an auditable trail. <strong>Agent Registry</strong>: <em>what agents and tools do we have, and which are approved?</em> A central, searchable catalogue. <strong>Agent Gateway</strong>: <em>how do agents reach tools safely?</em> Unified, policy-enforced connectivity between agents and tools.',
    tags: ['AI governance', 'Agent Platform']
  },
  {
    id: 'gcp-cdl-fc-261',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Grounding vs fine-tuning: which fixes answers that must reflect current, changing facts?',
    hint: 'One looks things up; the other changes habits.',
    back: '<strong>Grounding</strong> (Google Search or retrieval over your own data) supplies fresh facts at request time and can cite sources, so it suits changing information. <strong>Fine-tuning</strong> adapts a model\'s style, format or task behaviour using examples; it is a snapshot, costs more to repeat, and is not a reliable way to keep facts current.',
    tags: ['Grounding', 'Fine-tuning']
  },
  {
    id: 'gcp-cdl-fc-262',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What is retrieval-augmented generation (RAG) in business terms?',
    hint: 'Open-book exam for the model.',
    back: 'Before the model answers, the system <strong>retrieves relevant passages from your own documents</strong> and passes them to the model with the question. Answers draw on current company knowledge, can cite sources and hallucinate less, and there is no retraining when documents change. On Agent Platform, <strong>RAG Engine</strong> and search services provide this.',
    tags: ['RAG', 'Grounding']
  },
  {
    id: 'gcp-cdl-fc-263',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Name four things the pre-trained Vision API can detect in an image.',
    hint: 'Objects, words, places, and risks.',
    back: 'Among its features: <strong>labels</strong> (generic objects and concepts), <strong>text</strong> (OCR), <strong>landmarks</strong>, <strong>logos</strong>, <strong>faces</strong> (detection, not identity recognition) and <strong>SafeSearch</strong> ratings for adult, violent or racy content. All work through an API call with no training data.',
    tags: ['Vision API', 'Pre-trained APIs']
  },
  {
    id: 'gcp-cdl-fc-264',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Speech-to-Text vs Text-to-Speech: which direction does each convert?',
    hint: 'Read the name left to right.',
    back: '<strong>Speech-to-Text</strong> turns <strong>audio into written text</strong>: call transcripts, captions, voice commands. <strong>Text-to-Speech</strong> turns <strong>written text into natural-sounding audio</strong>: IVR prompts, audio editions of articles, accessibility features. Both are pre-trained APIs that need no model training.',
    tags: ['Speech-to-Text', 'Text-to-Speech']
  },
  {
    id: 'gcp-cdl-fc-265',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Cloud Translation Basic vs Advanced: what does Advanced add?',
    hint: 'Brand names and whole documents.',
    back: '<strong>Basic</strong> translates text with Google\'s general-purpose model. <strong>Advanced</strong> adds <strong>glossaries</strong> (fix how brand and domain terms are translated), <strong>batch translation</strong> of large volumes, <strong>document translation</strong> that preserves formatting, and <strong>custom or adaptive models</strong> tuned to your own content. Choose Advanced when terminology or scale matters.',
    tags: ['Cloud Translation', 'Localization']
  },
  {
    id: 'gcp-cdl-fc-266',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What kinds of analysis does the Natural Language API provide?',
    hint: 'Feelings, names, grammar and topics.',
    back: '<strong>Sentiment analysis</strong> (a score and magnitude), <strong>entity analysis</strong> (people, places, organisations, products), <strong>entity sentiment</strong>, <strong>syntax analysis</strong>, <strong>content classification</strong> into categories and <strong>text moderation</strong>. It returns consistent structured output for text such as reviews, emails and support tickets.',
    tags: ['Natural Language API', 'Pre-trained APIs']
  },
  {
    id: 'gcp-cdl-fc-267',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'When is a single-purpose API a better fit than prompting Gemini?',
    hint: 'Think about uniform output and predictable cost.',
    back: 'Pick a <strong>task-specific API</strong> (Vision, Natural Language, Speech-to-Text, Document AI) when you need the <strong>same structured output every time</strong>, predictable per-unit pricing and no prompt design. Pick <strong>Gemini</strong> when the task needs <strong>reasoning, generation or combining several input types</strong>, such as explaining what is wrong in a photo or drafting text from notes.',
    tags: ['Gemini', 'Pre-trained APIs']
  },
  {
    id: 'gcp-cdl-fc-268',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What business problem does Document AI solve?',
    hint: 'Paperwork that people retype.',
    back: 'It <strong>extracts structured data from documents</strong> such as invoices, receipts, IDs and forms, whether PDFs or scans. Pre-trained processors (for example the invoice parser) return fields like supplier, totals and line items, ready for ERP or workflow systems, replacing manual data entry.',
    tags: ['Document AI', 'Automation']
  },
  {
    id: 'gcp-cdl-fc-269',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What can the Video Intelligence API find in stored video?',
    hint: 'Scenes, things, words and risks, frame by frame.',
    back: 'It analyses video files for <strong>labels</strong> (objects and activities), <strong>shot changes</strong>, <strong>explicit content</strong>, <strong>object tracking</strong>, on-screen <strong>text</strong>, <strong>logos</strong>, people and speech transcription, with timestamps. Media companies use it to make archives searchable and to moderate uploads.',
    tags: ['Video Intelligence API', 'Media']
  },
  {
    id: 'gcp-cdl-fc-270',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Agent Simulation, Agent Evaluation, Agent Observability, Agent Optimizer: what does each do?',
    hint: 'Before launch, during live traffic, when debugging, and when improving.',
    back: '<strong>Simulation</strong>: tests an agent against synthetic, human-like users and virtual tools before release. <strong>Evaluation</strong>: continuously scores live interactions with autoraters. <strong>Observability</strong>: traces the agent\'s reasoning steps so developers can debug. <strong>Optimizer</strong>: clusters failures and suggests better system instructions. Together they form Agent Platform\'s optimisation layer.',
    tags: ['Agent Platform', 'Agent quality']
  },
  {
    id: 'gcp-cdl-fc-271',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Agent Sessions vs Agent Memory Bank: what is the difference?',
    hint: 'This conversation vs every conversation.',
    back: '<strong>Agent Sessions</strong> manage the history of a <strong>single ongoing conversation</strong>, and can link it to an internal record such as a CRM case. <strong>Agent Memory Bank</strong> stores <strong>long-term context across conversations</strong>, so an agent recalls a returning user\'s preferences weeks later. Use both for personal, continuous experiences.',
    tags: ['Agent Memory Bank', 'Agent Sessions']
  },
  {
    id: 'gcp-cdl-fc-272',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What is a foundation model?',
    hint: 'Trained once, broadly, then used for many tasks.',
    back: 'A large model <strong>pre-trained on vast, broad data</strong> that can perform many tasks, such as summarising, answering, coding or describing images, through prompting, with optional tuning or grounding for a specific need. <strong>Gemini</strong> is Google\'s flagship family; Model Garden also offers partner and open foundation models.',
    tags: ['Foundation models', 'Gemini']
  },
  {
    id: 'gcp-cdl-fc-273',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What does it mean that Gemini is multimodal, and why does it matter to a business?',
    hint: 'Count the kinds of input.',
    back: 'Gemini can take <strong>text, images, audio, video and documents</strong> in one request and reason across them, then generate text or other output. One model can, for example, compare a shelf photo with a written plan, or turn a video plus notes into a brief, replacing several single-purpose tools.',
    tags: ['Gemini', 'Multimodal']
  },
  {
    id: 'gcp-cdl-fc-274',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'How does Google Cloud support "choice and flexibility" in AI, and why is it a selection criterion?',
    hint: 'Many models, open standards, and places to run them.',
    back: 'Model Garden offers <strong>Google, partner and open models</strong> under one platform, the ADK and Agent Runtime work with <strong>open frameworks</strong>, and open models such as Gemma can also run on infrastructure you control, such as GKE. It matters because model quality and prices change quickly: flexibility <strong>reduces lock-in</strong> and lets teams pick the best model for each task.',
    tags: ['Choice and flexibility', 'Open models']
  },
  {
    id: 'gcp-cdl-fc-275',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Grounding with Google Search vs grounding on your own data: when do you use each?',
    hint: 'Public news or private policy?',
    back: '<strong>Google Search grounding</strong> gives the model <strong>fresh public information</strong> with source links, such as recent events or prices. <strong>Grounding on your own data</strong> (RAG or enterprise search over your documents) gives it <strong>private company knowledge</strong>, such as policies or product manuals. Many assistants use both.',
    tags: ['Grounding', 'RAG']
  }
];

export default GCP_CDL_FLASHCARDS_11;
