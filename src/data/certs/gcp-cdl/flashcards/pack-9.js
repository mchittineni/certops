export const GCP_CDL_FLASHCARDS_9 = [
  {
    id: "gcp-cdl-fc-201",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Artificial intelligence vs machine learning: how are they related?",
    hint: "One is the goal, the other a way of reaching it.",
    back: "<strong>Artificial intelligence (AI)</strong> is the broad field of building systems that perform tasks needing human-like intelligence: understanding language, recognising images, reasoning, deciding. <strong>Machine learning (ML)</strong> is a <strong>subset of AI</strong> in which systems <strong>learn patterns from data</strong> instead of following hand-written rules, and improve as they see more examples. All ML is AI; not all AI is ML.",
    tags: ["Artificial intelligence", "Machine learning"]
  },
  {
    id: "gcp-cdl-fc-202",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is deep learning, and where does it sit relative to machine learning?",
    hint: "Layers.",
    back: "<strong>Deep learning</strong> is a <strong>subset of machine learning</strong> that uses <strong>neural networks with many layers</strong> to learn complex patterns directly from raw data such as images, audio and text. It powers speech recognition, computer vision and modern <strong>generative AI</strong>. Nesting: AI contains ML, ML contains deep learning, and generative AI models are built on deep learning.",
    tags: ["Deep learning", "Machine learning"]
  },
  {
    id: "gcp-cdl-fc-203",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Business intelligence vs data analytics: what is the difference?",
    hint: "Monitoring what happened vs investigating why and what next.",
    back: "<strong>Business intelligence (BI)</strong> delivers <strong>reports and dashboards</strong> of known metrics so people can monitor performance and make decisions, such as weekly sales by region. <strong>Data analytics</strong> is the broader process of <strong>collecting, transforming and examining data</strong> to find patterns, explain causes and predict outcomes. BI is one output of analytics; analytics also includes ad hoc investigation and prediction.",
    tags: ["Business intelligence", "Data analytics"]
  },
  {
    id: "gcp-cdl-fc-204",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Name the four types of analytics and the question each answers.",
    hint: "What, why, what next, what should we do.",
    back: "<strong>Descriptive</strong>: what happened? (dashboards, reports). <strong>Diagnostic</strong>: why did it happen? (drill-downs, root-cause analysis). <strong>Predictive</strong>: what is likely to happen? (ML forecasts, churn scores). <strong>Prescriptive</strong>: what should we do? (recommendations and optimisation). Value and complexity rise from descriptive to prescriptive, and AI increasingly drives the last two.",
    tags: ["Data analytics", "Predictive analytics"]
  },
  {
    id: "gcp-cdl-fc-205",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Generative AI vs predictive ML: how do their outputs differ?",
    hint: "New content vs a label or number.",
    back: "<strong>Predictive ML</strong> outputs a <strong>value or category</strong> for new data: a demand forecast, a fraud score, whether an email is spam. <strong>Generative AI</strong> outputs <strong>new content</strong>, such as text, images, code, audio or video, that resembles its training data but did not exist before: a drafted email, a summary, a product image. Both learn from data; choose by the output the business needs.",
    tags: ["Generative AI", "Predictive ML"]
  },
  {
    id: "gcp-cdl-fc-206",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is a large language model (LLM)?",
    hint: "Trained to predict the next piece of text, at enormous scale.",
    back: "An <strong>LLM</strong> is a deep learning model trained on huge amounts of text (and often code) to <strong>understand and generate language</strong>, fundamentally by predicting the next token. Scale gives it general abilities: answering questions, summarising, translating, drafting and reasoning. LLMs are a kind of foundation model; Gemini extends the idea to images, audio and video as well.",
    tags: ["Large language models", "Generative AI"]
  },
  {
    id: "gcp-cdl-fc-207",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What are tokens and the context window, and why do they matter to a business?",
    hint: "Units of text, and how many fit in one request.",
    back: "<strong>Tokens</strong> are the chunks, parts of words, characters or image patches, that models read and write; usage is usually <strong>billed per token</strong>. The <strong>context window</strong> is the maximum number of tokens a model can consider in one request, input plus output. A long window (Gemini supports around a million tokens or more) lets one request cover whole contracts, codebases or hours of video; cost and speed scale with tokens used.",
    tags: ["Tokens", "Context window", "Gemini"]
  },
  {
    id: "gcp-cdl-fc-208",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is an AI hallucination, why does it happen, and how do businesses reduce it?",
    hint: "Fluent is not the same as true.",
    back: "A <strong>hallucination</strong> is output that sounds confident and plausible but is <strong>false or unsupported</strong>. It happens because generative models produce likely-sounding text from patterns rather than looking facts up. Reduce it by <strong>grounding</strong> answers in trusted sources (enterprise data or Google Search), writing clear prompts that allow \"I don't know\", requiring citations, evaluating outputs and keeping <strong>human review</strong> for high-stakes decisions.",
    tags: ["Hallucination", "Generative AI", "Responsible AI"]
  },
  {
    id: "gcp-cdl-fc-209",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is a prompt, and what is the difference between zero-shot and few-shot prompting?",
    hint: "Instructions alone, or instructions plus examples.",
    back: "A <strong>prompt</strong> is the input, instructions, context and data, given to a generative model. <strong>Zero-shot</strong>: the task is described with no examples. <strong>Few-shot</strong>: a handful of <strong>examples</strong> of the desired input and output are included so the model copies the pattern, format or tone. Specific prompts stating role, audience, format and constraints produce more reliable results.",
    tags: ["Prompt engineering", "Generative AI"]
  },
  {
    id: "gcp-cdl-fc-210",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Training vs inference: what is each, and which usually dominates cost over time?",
    hint: "Learning once vs answering every day.",
    back: "<strong>Training</strong> is when a model <strong>learns</strong> from data, compute-intensive but periodic. <strong>Inference</strong> (prediction or serving) is when the trained model <strong>answers new requests</strong>, such as scoring a transaction or generating a reply. For a widely used application, inference runs continuously for every user, so over the model's life it often accounts for most of the cost, which is why efficient serving matters.",
    tags: ["Training", "Inference", "Machine learning"]
  },
  {
    id: "gcp-cdl-fc-211",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Which six areas does the Digital Leader exam guide list as being reshaped by agentic AI?",
    hint: "People, customers, revenue, products, running the business, discovery.",
    back: "<strong>Workforce productivity</strong> (agents that find information and complete tasks), <strong>customer support</strong> (end-to-end resolution and agent assist), <strong>sales experiences</strong> (research, tailored outreach, CRM updates), <strong>product innovation</strong> (agents as product features), <strong>operations</strong> (monitoring and responding across supply chains and IT) and <strong>research</strong> (literature synthesis and hypothesis generation).",
    tags: ["Agentic AI", "Business impact"]
  },
  {
    id: "gcp-cdl-fc-212",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "In customer support, how does an autonomous service agent differ from agent assist?",
    hint: "Who is talking to the customer?",
    back: "An <strong>autonomous service agent</strong> talks to the customer directly and <strong>resolves routine requests end to end</strong>, checking orders, processing returns, rebooking, around the clock, escalating to people when needed. <strong>Agent assist</strong> keeps a <strong>human agent</strong> on the conversation and supports them in real time with suggested answers, relevant knowledge and automatic call summaries. Many contact centers combine both.",
    tags: ["Customer support", "Agentic AI", "Agent assist"]
  },
  {
    id: "gcp-cdl-fc-213",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Give three concrete ways agents raise workforce productivity.",
    hint: "Find, draft, do.",
    back: "<strong>Find</strong>: search across email, drives and business applications and return a synthesised answer instead of a list of links. <strong>Draft</strong>: produce first versions of reports, proposals and summaries from company data. <strong>Do</strong>: complete multi-step tasks such as filing an expense, raising a ticket or updating a record across systems. Gemini Enterprise packages these capabilities for employees, including no-code agent building.",
    tags: ["Agentic AI", "Workforce productivity"]
  },
  {
    id: "gcp-cdl-fc-214",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How is agentic AI changing sales experiences?",
    hint: "More selling time, more relevance.",
    back: "Agents <strong>research accounts</strong> and surface buying signals, <strong>draft personalised outreach</strong> for the seller to approve, <strong>prepare meeting briefs</strong>, and <strong>log notes and next steps in the CRM</strong> automatically. On the buyer side, shopping and advisory agents guide customers to the right product. The result is more time in customer conversations and more tailored engagement at scale.",
    tags: ["Agentic AI", "Sales"]
  },
  {
    id: "gcp-cdl-fc-215",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What does agentic AI look like in business operations?",
    hint: "Watch, reason, act, with people approving the big calls.",
    back: "Agents <strong>continuously monitor</strong> signals across supply chains, finance or IT, <strong>detect</strong> disruptions or anomalies, <strong>reason about impact</strong>, and <strong>propose or execute responses</strong>: rerouting shipments, reordering stock, reconciling invoices, remediating routine IT incidents. High-cost or high-risk actions typically require <strong>human approval</strong>. The shift is from reacting days later to responding in minutes.",
    tags: ["Agentic AI", "Operations"]
  },
  {
    id: "gcp-cdl-fc-216",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How does agentic AI accelerate research and product innovation?",
    hint: "Discovery inside the lab, new features in the product.",
    back: "<strong>Research</strong>: agents read and synthesise vast literature and data, propose hypotheses and plan experiments, compressing months of work into days, while scientists validate the results (as in Google's AI co-scientist work). <strong>Product innovation</strong>: agents become part of the product, such as an app assistant that acts for customers, creating differentiation and new revenue streams.",
    tags: ["Agentic AI", "Research", "Product innovation"]
  },
  {
    id: "gcp-cdl-fc-217",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Human-in-the-loop vs human-on-the-loop: how do these levels of agent autonomy differ?",
    hint: "Approve each action, or supervise and intervene.",
    back: "<strong>Human-in-the-loop</strong>: the agent proposes and a person <strong>must approve</strong> before an action happens, suited to high-risk, costly or irreversible steps such as large payments. <strong>Human-on-the-loop</strong>: the agent acts on its own while people <strong>monitor</strong> and can intervene or roll back, suited to routine, low-risk, high-volume work. Organizations often start in-the-loop and relax oversight as trust and evaluation results grow.",
    tags: ["Agentic AI", "Human oversight"]
  },
  {
    id: "gcp-cdl-fc-218",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is the Agent2Agent (A2A) protocol, and how does it differ from the Model Context Protocol (MCP)?",
    hint: "Agents talking to agents vs agents reaching tools and data.",
    back: "<strong>A2A</strong> is an <strong>open protocol</strong>, introduced by Google and now governed by the Linux Foundation, that lets <strong>agents built by different vendors and frameworks discover each other and collaborate</strong> on tasks. <strong>MCP</strong> is an open standard for connecting an agent to <strong>tools and data sources</strong>. Together they support open, interoperable multi-agent systems rather than locking agents into one vendor's ecosystem.",
    tags: ["Agent2Agent", "MCP", "Interoperability"]
  },
  {
    id: "gcp-cdl-fc-219",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What five key benefits of Google Cloud's AI offerings does the exam guide list?",
    hint: "From chips to ready-made agents.",
    back: "1. <strong>Best infrastructure for AI</strong> (AI Hypercomputer, TPUs and GPUs). 2. An <strong>AI-ready data cloud</strong> (BigQuery and governed data). 3. <strong>Sophisticated first-party models</strong> (Gemini and others). 4. An <strong>all-in-one AI developer platform</strong> (Gemini Enterprise Agent Platform). 5. <strong>Prebuilt AI agents and applications</strong> (Gemini Enterprise, Gemini in Workspace, customer engagement agents).",
    tags: ["Google Cloud AI benefits"]
  },
  {
    id: "gcp-cdl-fc-220",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What does an AI-ready data cloud mean, and why does AI need one?",
    hint: "Models are only as useful as the data they can reach.",
    back: "An <strong>AI-ready data cloud</strong> brings <strong>structured and unstructured data together</strong>, governed and cataloged, with AI built in, so models and agents can use enterprise data <strong>where it lives</strong>. On Google Cloud that means BigQuery with Gemini capabilities, open formats through the lakehouse, and Knowledge Catalog for context and governance. Without it, AI projects stall on copying, cleaning and securing data.",
    tags: ["AI-ready data", "BigQuery"]
  },
  {
    id: "gcp-cdl-fc-221",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Name Google's first-party generative model families and what each produces.",
    hint: "One for everything, others for images, video, speech and music, plus an open family.",
    back: "<strong>Gemini</strong>: multimodal reasoning and generation across text, code, images, audio and video. <strong>Imagen</strong>: image generation and editing. <strong>Veo</strong>: video generation. <strong>Chirp</strong>: speech recognition and synthesis. <strong>Lyria</strong>: music generation. <strong>Gemma</strong>: lightweight <strong>open</strong> models that organizations can run and tune on their own infrastructure. All sit alongside partner and open models in Model Garden.",
    tags: ["Gemini", "First-party models"]
  },
  {
    id: "gcp-cdl-fc-222",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What does Gemini in Google Workspace do for everyday work?",
    hint: "AI inside the apps people already use.",
    back: "<strong>Gemini in Workspace</strong> is a <strong>prebuilt AI application</strong> built into Gmail, Docs, Sheets, Slides, Meet and Drive: it drafts and rewrites documents and emails, summarises long threads and files, takes meeting notes, and helps analyse data in Sheets. It needs <strong>no development work</strong>, which makes it the fastest path to AI-driven productivity for Workspace users.",
    tags: ["Gemini in Workspace", "Productivity"]
  },
  {
    id: "gcp-cdl-fc-223",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What data commitments does Google Cloud make for enterprise generative AI?",
    hint: "Your prompts are not someone else's training data.",
    back: "Google Cloud <strong>does not use customer data</strong>, including prompts, responses and tuning data, <strong>to train its foundation models without permission</strong>. Customers keep control through <strong>IAM</strong>, <strong>data residency</strong> choices, <strong>customer-managed encryption keys</strong>, <strong>VPC Service Controls</strong> and audit logging, and tuned models stay private to the customer. These commitments are what make confidential enterprise use acceptable to legal and compliance teams.",
    tags: ["Data privacy", "Enterprise AI"]
  },
  {
    id: "gcp-cdl-fc-224",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Why does Google Cloud claim to have the best infrastructure for AI?",
    hint: "Built for its own AI first.",
    back: "Google designs its own <strong>TPUs</strong> (in production use since 2015) and pairs them with <strong>GPUs</strong>, a <strong>global private network</strong>, and optimised software, all run as an integrated system (AI Hypercomputer). The same infrastructure trains and serves Google's own models and products, such as Gemini, Search and YouTube, so customers get proven scale and <strong>strong price-performance</strong> for training and inference.",
    tags: ["AI infrastructure", "TPU"]
  },
  {
    id: "gcp-cdl-fc-225",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What are the most common business use cases for generative AI?",
    hint: "Create, condense, converse, code, find.",
    back: "<strong>Content creation</strong>: marketing copy, product descriptions, images. <strong>Summarisation</strong>: documents, calls, meetings. <strong>Conversational assistants</strong>: customer and employee chat. <strong>Code generation</strong>: writing, explaining and testing code. <strong>Search and question answering</strong> over enterprise knowledge. Each saves time on language- or content-heavy work, usually with a human reviewing the output.",
    tags: ["Generative AI", "Use cases"]
  }
];

export default GCP_CDL_FLASHCARDS_9;
