export const GCP_CDL_QUESTIONS_11 = [
  {
    id: "gcp-cdl-251",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Tagging catalog photos before the holiday launch",
    scenario: "An online furniture retailer wants every new product photo automatically tagged with generic terms such as sofa, wood, or lamp so shoppers can filter the catalog. The feature must be live in two weeks, and the company has no data scientists or labeled training images.",
    question: "Which approach best fits the retailer's timeline and skills?",
    options: [
      { id: 'A', text: "Call the pre-trained Vision API for label detection on each uploaded photo and store the returned labels with the product." },
      { id: 'B', text: "Write a TensorFlow training job that runs on Agent Platform custom training and serves the model from an endpoint." },
      { id: 'C', text: "Label several thousand photos in-house and train an AutoML image classification model on Agent Platform with those labels." },
      { id: 'D', text: "Use BigQuery ML to create a logistic regression model over the photo file names that are stored in a BigQuery table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Vision API is a pre-trained model: it already recognises thousands of common objects and returns labels through a simple API call, so the retailer needs no training data, no ML expertise and very little development time, which is exactly what a two-week deadline with no data scientists demands. AutoML would work eventually but first requires thousands of labeled images the company does not have. A custom TensorFlow job demands ML engineering skills and far more time. BigQuery ML trains on tabular data in BigQuery; file names carry no visual information, so a regression over them cannot recognise what is in a photo.",
    referenceUrl: "https://docs.cloud.google.com/vision/docs/features-list",
    tags: ["Vision API", "Pre-trained APIs", "AI strategy"]
  },
  {
    id: "gcp-cdl-252",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Fraud scoring as the insurer's competitive edge",
    scenario: "A specialty insurer believes its ability to spot fraudulent claims is what sets it apart from larger rivals. It employs an experienced data science team and holds fifteen years of claims history marked as fraudulent or genuine. Leadership wants a model that competitors cannot simply buy off the shelf, and is willing to invest the extra time.",
    question: "Which approach aligns best with these strategic priorities?",
    options: [
      { id: 'A', text: "Send the claim descriptions to the Natural Language API and flag claims with strongly negative sentiment scores." },
      { id: 'B', text: "Train a custom model on Agent Platform with the company's own labeled claims data and tailored training code." },
      { id: 'C', text: "Deploy a prebuilt agent template from Agent Garden and adjust its prompts so it reviews each claim as it arrives." },
      { id: 'D', text: "Roll out the Gemini Enterprise app so claims handlers can ask its assistant whether a claim looks suspicious." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a capability is the source of business differentiation and the organisation has both proprietary data and ML expertise, custom training is the option that justifies its higher development effort: the model learns patterns unique to the insurer's claims, which no rival can obtain. A prebuilt Agent Garden template is designed for speed, not uniqueness, and anyone can start from the same template. Sentiment scoring measures the emotional tone of text, which is not a reliable fraud signal. The Gemini Enterprise app is a general employee assistant; it has not learned the insurer's fraud patterns, so it offers no proprietary advantage.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/start/training-guide",
    tags: ["Custom training", "Differentiation", "AI strategy"]
  },
  {
    id: "gcp-cdl-253",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Nonprofit staff asking questions of their own documents",
    scenario: "A 60-person nonprofit keeps its policies, grant reports and meeting notes in Google Drive. Staff waste hours hunting through folders for answers, and the organisation has no developers on payroll. The director wants employees to find information and ask questions about these documents in plain language within a month.",
    question: "What should the director choose?",
    options: [
      { id: 'A', text: "Build a retrieval agent with the Agent Development Kit and host it on Agent Runtime for staff to call." },
      { id: 'B', text: "Adopt the Gemini Enterprise app with its Drive connector so staff can search and chat over their files." },
      { id: 'C', text: "Pretrain a small language model on the Drive documents using Cloud TPUs and serve it to employees." },
      { id: 'D', text: "Load the documents into BigQuery tables and have staff write SQL queries to look for relevant text." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Gemini Enterprise app is a ready-made, employee-facing product: administrators connect data sources such as Google Drive and staff immediately search and converse over that content, with no coding required. It delivers the fastest implementation with the lowest technical expertise, which suits an organisation with no developers. Building an agent with the ADK is code-first work that needs developers. Pretraining a language model on TPUs is a research-scale effort far beyond a small nonprofit. Asking non-technical staff to search documents through SQL does not provide plain-language answers.",
    referenceUrl: "https://docs.cloud.google.com/gemini/enterprise/docs",
    tags: ["Gemini Enterprise", "Implementation speed", "Prebuilt agents"]
  },
  {
    id: "gcp-cdl-254",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A model whose weights the team can hold",
    scenario: "A media group's engineering team wants a language model whose weights it can obtain, adapt to its own archive and serve on the GKE environment it already operates, so it controls serving costs and scaling itself. Other teams in the group will keep calling Google-hosted models through APIs.",
    question: "Which option gives the engineering team this flexibility?",
    options: [
      { id: 'A', text: "Train an AutoML text model, whose architecture Google selects and hosts on an Agent Platform endpoint." },
      { id: 'B', text: "Roll out the Gemini Enterprise app, which gives each employee one assistant for chat, search and agents." },
      { id: 'C', text: "Deploy an open Gemma model from Model Garden, fine-tune it and run it on the company's own GKE clusters." },
      { id: 'D', text: "Call Gemini through the Agent Platform API, which serves the model only from Google-managed endpoints." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Choice and flexibility is one of the strategic considerations when selecting AI solutions. Gemma is Google's family of open models: its weights are available, so a team can fine-tune it on its own data and serve it wherever it chooses, including GKE clusters it already runs, while Model Garden also offers Google and partner models for teams that prefer managed APIs. Gemini is offered as a managed service, so its weights cannot be taken and self-hosted. The Gemini Enterprise app is an end-user product, not a model to serve. AutoML chooses and hosts the architecture for the customer, which gives less control rather than more.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/serve-gemma-gpu-vllm",
    tags: ["Gemma", "Open models", "Choice and flexibility"]
  },
  {
    id: "gcp-cdl-255",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Answering from policy manuals that change every week",
    scenario: "A retail bank wants an assistant that answers employee questions using its internal policy manuals. The manuals are revised weekly, answers must reflect the latest version and cite the source passage, and the AI team is two people with a limited budget.",
    question: "Which approach should the bank take?",
    options: [
      { id: 'A', text: "Run supervised fine-tuning of Gemini on the manuals every week so the tuned model memorises the newest wording." },
      { id: 'B', text: "Ground Gemini on the manuals with retrieval-augmented generation so each answer draws on current passages." },
      { id: 'C', text: "Train a new language model from scratch on the manuals with custom training jobs running on a TPU cluster." },
      { id: 'D', text: "Train an AutoML text classification model that sorts each employee question into a fixed set of policy topics." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-augmented generation (for example with RAG Engine on Agent Platform) retrieves relevant passages from the current documents at question time and gives them to Gemini, so updated manuals are reflected as soon as they are re-indexed and answers can cite the passages they used, all with modest effort and cost. Weekly fine-tuning is slow and costly, and tuning teaches style and behaviour rather than reliably storing facts that change, so it also cannot cite a source. Training a model from scratch is vastly beyond a two-person team's budget. A topic classifier only routes questions; it does not generate an answer.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/rag-engine/rag-overview",
    tags: ["RAG", "Grounding", "Fine-tuning"]
  },
  {
    id: "gcp-cdl-256",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Briefing the board on AI build options",
    scenario: "A CFO is preparing a board briefing that compares two paths for adding AI features: calling Google's pre-trained APIs, or building custom models on Agent Platform. Board members want one sentence that captures the main trade-off.",
    question: "Which statement accurately describes the trade-off?",
    options: [
      { id: 'A', text: "Pre-trained APIs give the most competitive advantage, while custom models are the fastest way to ship features." },
      { id: 'B', text: "Pre-trained APIs need large labeled datasets up front, while custom models can start without any data at all." },
      { id: 'C', text: "Pre-trained APIs run only on reserved TPUs, while custom models run on any general-purpose virtual machine." },
      { id: 'D', text: "Pre-trained APIs are quicker and need little expertise, while custom models allow more differentiation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pre-trained APIs such as Vision, Translation and Speech-to-Text are ready to call, so they deliver the fastest implementation with the least development effort and ML expertise, but every customer gets the same model, which limits differentiation. Custom models take longer and need data and skills, but they can capture what is unique about the business. The data claim is backwards: pre-trained APIs need no training data, whereas custom models do. The advantage and speed claims are also reversed. Pre-trained APIs are fully managed services, so customers never provision TPUs for them.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/beginner/beginners-guide",
    tags: ["Pre-trained APIs", "Custom models", "AI strategy"]
  },
  {
    id: "gcp-cdl-257",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Agent logic that lives in Git and passes CI",
    scenario: "A software company's platform engineers are building a multi-step agent that calls internal billing and ticketing APIs. They want the agent's orchestration written in Python, reviewed in pull requests, unit tested in their CI pipeline, and deployed through the same release process as their other services.",
    question: "Which Agent Platform tool best suits this team?",
    options: [
      { id: 'A', text: "Agent Studio, where analysts design and test agent prompts on a visual canvas without writing any code." },
      { id: 'B', text: "Agent Garden, which provides curated agent templates for common tasks such as invoice processing." },
      { id: 'C', text: "The Gemini Enterprise app, which delivers finished agents to employees inside a chat interface." },
      { id: 'D', text: "The Agent Development Kit, a code-first framework for defining agents, tools and sub-agent workflows." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Agent Development Kit (ADK) is the code-first way to build agents on Agent Platform: agents, tools and multi-agent workflows are defined in code, so they live in version control, go through code review and automated tests, and ship through an existing CI/CD process. It matches a team with strong engineering skills that wants full control. Agent Studio is the low-code visual path, suited to less technical builders and quick prototyping. Agent Garden offers starting templates rather than a development framework. The Gemini Enterprise app is where finished agents reach employees, not where engineers build them.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Development Kit", "Technical expertise", "Agent Platform"]
  },
  {
    id: "gcp-cdl-258",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Proving value before committing budget",
    scenario: "A logistics firm's COO believes generative AI could write customer delay notifications, but finance will release project funding only after a working demonstration. The innovation team has three weeks, one developer and a few months of shipment records.",
    question: "What is the most sensible first step?",
    options: [
      { id: 'A', text: "Hire a data science team to collect labeled examples and train a proprietary language model for notifications." },
      { id: 'B', text: "Reserve a year of TPU capacity through a committed use discount so that training can begin once funding arrives." },
      { id: 'C', text: "Prototype by prompting a Gemini model in Agent Studio with sample shipment data to draft the notifications." },
      { id: 'D', text: "Migrate all shipment systems to BigQuery first so the data platform is complete before any AI work begins." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Agent Studio lets a single developer design and test prompts against foundation models such as Gemini within days, which is the quickest and cheapest way to demonstrate value and win funding; heavier investment can follow once the idea is proven. Committing to a year of TPU capacity spends money before value is shown and assumes custom training is needed at all. Hiring a team to train a proprietary model is the slowest, most expensive path for a demonstration. Completing a data platform migration first delays the demo well beyond three weeks when sample data is enough to prototype.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio",
    tags: ["Agent Studio", "Prototyping", "Implementation speed"]
  },
  {
    id: "gcp-cdl-259",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "One platform for the whole agent lifecycle",
    scenario: "A telecom's CTO wants her developers to use one Google Cloud platform to access foundation models, build custom AI agents, deploy them at scale, and govern and monitor them afterwards. She asks the architecture team to name the product.",
    question: "Which product should the architecture team name?",
    options: [
      { id: 'A', text: "Gemini Enterprise Agent Platform" },
      { id: 'B', text: "Looker with its semantic modeling layer" },
      { id: 'C', text: "Gemini Enterprise app for employees" },
      { id: 'D', text: "Security Command Center Enterprise tier" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gemini Enterprise Agent Platform, the evolution of Vertex AI, is Google Cloud's unified platform to build, scale, govern and optimise agents and models: it includes Model Garden for model access, Agent Studio and the ADK for building, Agent Runtime for deployment, and governance and evaluation features. The Gemini Enterprise app is the employee-facing channel where finished agents are used, not the developer platform. Looker is a business intelligence tool. Security Command Center manages security posture and threats; it is not where agents are built.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/overview",
    tags: ["Agent Platform", "Vertex AI", "Agents"]
  },
  {
    id: "gcp-cdl-260",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A head start on invoice-processing agents",
    scenario: "An accounts payable team wants an agent that reads supplier invoices, checks them against purchase orders and routes exceptions. The developers would rather not design the agent from a blank page, and want a proven starting point they can customise.",
    question: "Which Agent Platform feature gives them that starting point?",
    options: [
      { id: 'A', text: "Agent Registry, the central library that indexes every approved agent, tool and skill in the organisation." },
      { id: 'B', text: "Agent Observability, which visually traces an agent's reasoning steps to help developers debug it." },
      { id: 'C', text: "Agent Memory Bank, which stores long-term context so an agent can recall earlier user interactions." },
      { id: 'D', text: "Agent Garden, the curated library of prebuilt agent templates for tasks like invoice processing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agent Garden is a curated collection of prebuilt agent samples and templates, including scenarios such as invoice processing and financial analysis, that developers can deploy and customise instead of starting from scratch, which reduces development effort and speeds delivery. Agent Registry catalogues agents and tools the organisation already has so they can be discovered and approved; it does not provide templates. Agent Observability helps debug an agent after it exists. Agent Memory Bank gives an agent persistent memory across sessions, which is a capability to add later, not a starting design.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Garden", "Agent Platform", "Templates"]
  },
  {
    id: "gcp-cdl-261",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Hosting an agent without running servers",
    scenario: "A travel company has built a booking-assistant agent with the ADK. It now needs somewhere to run it that scales with seasonal traffic, supports conversations that pause and resume over several days, and does not require the small team to manage servers or clusters.",
    question: "Where should the company deploy the agent?",
    options: [
      { id: 'A', text: "Agent Runtime on Agent Platform, the managed engine for running and scaling agents in production" },
      { id: 'B', text: "A self-managed Kubernetes cluster that the team installs and upgrades on its own VMs" },
      { id: 'C', text: "Agent Studio's test panel, where prompts are tried out interactively during development" },
      { id: 'D', text: "A Compute Engine managed instance group that the team patches and autoscales on its own" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Agent Runtime is the managed execution environment in Agent Platform for deploying agents built with frameworks such as the ADK: Google operates the infrastructure, it scales with demand, and it supports long-running agents together with session and memory services, so a small team avoids server management. A managed instance group or a self-managed Kubernetes cluster could host the code, but both leave patching, scaling and upgrades to the team, which is what it wants to avoid. The Agent Studio test panel is for interactive development, not a production hosting environment for customer traffic.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Runtime", "Managed services", "Agent Platform"]
  },
  {
    id: "gcp-cdl-262",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Taming agent sprawl across business units",
    scenario: "A conglomerate discovers that its business units have built dozens of AI agents independently, several of which duplicate each other and call internal systems no one has reviewed. The CIO wants one place where every internal agent is catalogued, so teams can discover existing ones and only approved ones are used.",
    question: "Which Agent Platform capability addresses this governance problem?",
    options: [
      { id: 'A', text: "Agent Simulation, which tests an agent against synthetic users before it is released" },
      { id: 'B', text: "Agent Sessions, which keep each conversation's history and link it to internal customer records" },
      { id: 'C', text: "Agent Sandbox, which runs model-generated code in an isolated, hardened environment" },
      { id: 'D', text: "Agent Registry, which indexes internal agents, tools and skills for discovery and approval" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agent Registry is part of Agent Platform's governance layer: it acts as a central library of the organisation's agents, tools and skills, giving teams one place to discover what already exists and giving administrators control over what is approved for use, which directly tackles duplication and unreviewed tools. Agent Sessions manage conversation state for a single agent. Agent Simulation improves the quality of one agent before launch but does not catalogue the estate. Agent Sandbox isolates code execution for safety; it does not provide discovery or approval across business units.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Registry", "AI governance", "Agent Platform"]
  },
  {
    id: "gcp-cdl-263",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Auditors asking which agent moved the money",
    scenario: "A payments company lets AI agents issue small refunds on its behalf. Internal auditors insist that every action be attributable to the specific agent that performed it, with an auditable trail, and that each agent be limited by policy to the actions it is authorised to take.",
    question: "Which Agent Platform capability most directly meets the auditors' requirement?",
    options: [
      { id: 'A', text: "Agent Evaluation, which continuously scores each agent's live responses with autoraters" },
      { id: 'B', text: "Agent Identity, which gives each agent its own verifiable identity with authorization policies" },
      { id: 'C', text: "Agent Optimizer, which clusters each agent's failures and proposes better instructions" },
      { id: 'D', text: "Agent Memory Bank, which gives each agent persistent recall of previous user interactions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Agent Identity assigns each agent a distinct, cryptographically verifiable identity, so every action it takes can be attributed and audited, and authorization policies bound what that identity may do; this is exactly the accountability auditors ask for when agents act on the company's behalf. Agent Memory Bank improves personalisation, not accountability. Agent Evaluation measures response quality, which is useful but does not attribute or restrict actions. Agent Optimizer improves an agent's instructions based on failures; it provides no audit trail or permission boundary.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Identity", "Auditability", "AI governance"]
  },
  {
    id: "gcp-cdl-264",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A shopping agent that remembers returning customers",
    scenario: "A fashion retailer's shopping agent forgets everything when a conversation ends, so returning customers must repeat their sizes, style preferences and past issues each time. Product managers want the agent to know these details when customers come back weeks later.",
    question: "Which Agent Platform capability should the developers add?",
    options: [
      { id: 'A', text: "Agent Gateway, which routes and secures traffic between the retailer's agents and their tools" },
      { id: 'B', text: "Grounding with Google Search, which adds current public web results to each model response" },
      { id: 'C', text: "Agent Memory Bank, which keeps long-term context so an agent can recall users across visits" },
      { id: 'D', text: "Agent Garden, which supplies prebuilt agent templates to start new projects more quickly" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Agent Memory Bank provides persistent, long-term memory for agents, so facts learned in one conversation, such as a customer's sizes and preferences, can be recalled in later sessions, making the experience personal without customers repeating themselves. Agent Gateway governs connectivity between agents and tools, not what an agent remembers. Grounding with Google Search brings in public web information and knows nothing about an individual customer's history. Agent Garden templates help start an agent but do not give an existing agent memory.",
    referenceUrl: "https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform",
    tags: ["Agent Memory Bank", "Personalization", "Agent Platform"]
  },
  {
    id: "gcp-cdl-265",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Marketing analysts experimenting with prompts",
    scenario: "A consumer brand's marketing analysts want to try Gemini on tasks such as rewriting product descriptions and seeing how different instructions change the output. None of them write code, and IT wants the work to stay inside the company's Google Cloud project.",
    question: "Which tool should IT give the analysts?",
    options: [
      { id: 'A', text: "Agent Studio, the low-code workspace in Agent Platform for designing and comparing prompts" },
      { id: 'B', text: "BigQuery ML, which trains models by running CREATE MODEL statements written in SQL" },
      { id: 'C', text: "The Agent Development Kit, a Python framework for defining agents and their tools in code" },
      { id: 'D', text: "Cloud Shell, a browser terminal for running gcloud commands against the project" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Agent Studio is Agent Platform's visual, low-code workspace: users design and test prompts against Gemini and other models, generate system instructions and compare outputs side by side without writing code, all within the organisation's Google Cloud project and its controls. The ADK requires programming. BigQuery ML requires SQL and trains predictive models rather than letting analysts iterate on prompts. Cloud Shell is a command-line environment, which is the opposite of what non-coding analysts need.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/agent-studio",
    tags: ["Agent Studio", "Low-code", "Gemini"]
  },
  {
    id: "gcp-cdl-266",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A news assistant that knows about this morning",
    scenario: "A financial news site is building an assistant that answers readers' questions about market events. Testers found the model confidently describes events only up to its training cutoff and sometimes invents recent details. Editors want answers based on up-to-date public information with links to sources.",
    question: "What should the developers add to the assistant?",
    options: [
      { id: 'A', text: "Supervised fine-tuning on last year's articles so the model's knowledge is refreshed once" },
      { id: 'B', text: "Grounding with Google Search so responses draw on current web results and cite them" },
      { id: 'C', text: "A higher temperature setting so the model gives more varied answers to each question" },
      { id: 'D', text: "A switch to the Natural Language API so entities in each question are identified first" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Grounding with Google Search connects the model to fresh, publicly available web information at request time and returns source links, which reduces hallucinations about recent events and lets readers verify answers. Fine-tuning on last year's articles is a one-off snapshot that is outdated immediately and does not provide citations. Raising temperature increases randomness, which makes invented details more likely, not less. Entity extraction identifies names and places in a question but supplies no current facts to answer it.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/grounding-with-google-search",
    tags: ["Grounding", "Google Search", "Hallucinations"]
  },
  {
    id: "gcp-cdl-267",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Selling in twelve new countries next quarter",
    scenario: "A cosmetics e-commerce company is expanding into twelve countries and must publish its 40,000 product descriptions in each local language. It has no in-house linguists or ML engineers and wants a managed service it can call from its catalog pipeline.",
    question: "Which Google Cloud service fits this requirement?",
    options: [
      { id: 'A', text: "Text-to-Speech, which turns written text into natural-sounding spoken audio clips" },
      { id: 'B', text: "Speech-to-Text, which converts spoken audio into written text across many languages" },
      { id: 'C', text: "Cloud Translation API, which converts text between languages using pre-trained models" },
      { id: 'D', text: "Natural Language API, which detects sentiment and entities within written text" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Cloud Translation is a pre-trained API that translates text between more than a hundred languages, can be called programmatically from a pipeline, and offers batch translation for large catalogs, so the company needs neither linguists nor ML expertise to localise its descriptions. Speech-to-Text transcribes audio, but the descriptions are already text. The Natural Language API analyses text in its existing language rather than converting it. Text-to-Speech produces audio from text, which does not create localised written descriptions.",
    referenceUrl: "https://docs.cloud.google.com/translate/docs/overview",
    tags: ["Cloud Translation", "Pre-trained APIs", "Localization"]
  },
  {
    id: "gcp-cdl-268",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Making recorded support calls searchable",
    scenario: "A utility company records 20,000 customer support calls a week. Quality managers want the calls turned into text so they can search for phrases such as 'billing error' and review how agents handled complaints, without listening to hours of audio.",
    question: "Which pre-trained API should the company use first?",
    options: [
      { id: 'A', text: "Speech-to-Text, to transcribe the call recordings into searchable text" },
      { id: 'B', text: "Video Intelligence API, to detect scenes and objects in recorded videos" },
      { id: 'C', text: "Vision API, to recognise printed text in scanned images of call notes" },
      { id: 'D', text: "Text-to-Speech, to generate natural voice versions of the support scripts" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Speech-to-Text converts audio into text using Google's pre-trained speech models and supports batch transcription of recorded files, which produces the searchable transcripts quality managers need; the text can later be analysed further, for example for sentiment. Text-to-Speech works in the opposite direction, creating audio from text. The Video Intelligence API analyses visual content in video files, and these are audio calls. The Vision API reads text in images, which does not help with spoken recordings.",
    referenceUrl: "https://docs.cloud.google.com/speech-to-text/docs",
    tags: ["Speech-to-Text", "Pre-trained APIs", "Contact center"]
  },
  {
    id: "gcp-cdl-269",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Brand names mangled in machine translation",
    scenario: "A sportswear company already uses Cloud Translation for its product pages, but its trademarked product line names and technical fabric vocabulary keep being translated literally, confusing customers. The marketing team wants this vocabulary handled consistently in every language without building its own model.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Train a custom model on Agent Platform from scratch using thousands of translated pages" },
      { id: 'B', text: "Define a glossary in Cloud Translation Advanced that fixes how those terms are translated" },
      { id: 'C', text: "Run each page through the Natural Language API to mark brand names as named entities" },
      { id: 'D', text: "Switch to Cloud Translation Basic so pages are translated with the general-purpose model" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud Translation Advanced supports glossaries: a list of source terms and their required translations (or terms to leave untranslated) that the pre-trained model applies consistently, which is the lightweight fix for brand names and domain vocabulary. Training a model from scratch is a large ML effort that the team explicitly wants to avoid. Entity analysis can identify brand names but does not change how the translation service renders them. Cloud Translation Basic does not support glossaries, so moving to it would remove the very feature the team needs.",
    referenceUrl: "https://docs.cloud.google.com/translate/docs/advanced/glossary",
    tags: ["Cloud Translation", "Glossary", "Localization"]
  },
  {
    id: "gcp-cdl-270",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Screening user-uploaded profile pictures",
    scenario: "A dating app lets members upload profile photos. The trust and safety team must automatically flag photos likely to contain adult or violent content before other members can see them, and it cannot afford to build and train its own model.",
    question: "Which Google Cloud capability should the team use?",
    options: [
      { id: 'A', text: "Vision API SafeSearch detection to rate each uploaded image" },
      { id: 'B', text: "Speech-to-Text with profanity filtering enabled on audio messages" },
      { id: 'C', text: "Cloud Translation to convert photo captions into a single language" },
      { id: 'D', text: "Natural Language API content classification of the member bios" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SafeSearch detection in the pre-trained Vision API returns the likelihood that an image contains adult, violent, racy, medical or spoof content, so the app can hold or flag risky photos automatically with no model training. Profanity filtering in Speech-to-Text applies to transcribed audio, not photos. Translating captions does nothing to assess the images themselves. Content classification in the Natural Language API categorises text, so it cannot tell what a picture shows.",
    referenceUrl: "https://docs.cloud.google.com/vision/docs/detecting-safe-search",
    tags: ["Vision API", "SafeSearch", "Content moderation"]
  },
  {
    id: "gcp-cdl-271",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Campaign briefs from video, images and notes",
    scenario: "An advertising agency wants a tool that takes a client's product video, a folder of product photos and a page of meeting notes, then drafts a creative brief and three taglines. Staff want a single model that understands all these input types together.",
    question: "Which option best fits the agency's need?",
    options: [
      { id: 'A', text: "The Vision API, which returns labels, logos and printed text found in each photo" },
      { id: 'B', text: "The Video Intelligence API, which labels the shots and objects that appear in a video" },
      { id: 'C', text: "A Gemini model called through Agent Platform, which reasons over mixed inputs at once" },
      { id: 'D', text: "Cloud Translation, which renders the notes and taglines into the client's language" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gemini models are natively multimodal foundation models: one request can combine video, images and text, and the model can reason across them and generate new content such as a brief and taglines. Calling Gemini through Agent Platform adds enterprise security and governance. The Video Intelligence and Vision APIs are pre-trained analysers that return labels and detected features for one media type each; they do not write a brief. Cloud Translation converts language but neither understands the video nor creates new creative text.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models",
    tags: ["Gemini", "Multimodal", "Foundation models"]
  },
  {
    id: "gcp-cdl-272",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A consistent sentiment score for every review",
    scenario: "A hotel chain wants a numeric positive-to-negative rating for each of its two million guest reviews so the ratings can be averaged on dashboards by property. Analysts want identical output structure every time, predictable per-document pricing and no prompt design work.",
    question: "Which service fits these requirements best?",
    options: [
      { id: 'A', text: "Speech-to-Text transcription of each review before its text is loaded into BigQuery" },
      { id: 'B', text: "Natural Language API sentiment analysis, which returns a score and magnitude per document" },
      { id: 'C', text: "A Gemini model prompted in Agent Studio to describe the overall feeling of each review" },
      { id: 'D', text: "Document AI form parsing to extract the rating fields printed on paper feedback cards" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Natural Language API's sentiment analysis is a pre-trained, task-specific model that returns a fixed structure, a score from negative to positive plus a magnitude, for every document, priced per unit of text, with no prompting required; that structure averages cleanly on dashboards. Gemini can judge sentiment too, but free-form descriptions require prompt design and parsing and are less uniform. Speech-to-Text is for audio, and the reviews are already text. Document AI extracts fields from forms and does not score opinion in free text.",
    referenceUrl: "https://docs.cloud.google.com/natural-language/docs/basics",
    tags: ["Natural Language API", "Sentiment analysis", "Pre-trained APIs"]
  },
  {
    id: "gcp-cdl-273",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Explaining what is wrong with a store shelf",
    scenario: "A grocery chain's field auditors photograph shelves and must report whether each display matches the planogram for that aisle, which products are missing or misplaced, and a short explanation for the store manager. The chain wants to automate these reports using the planogram description and the photo.",
    question: "Which Google Cloud AI option is most suitable?",
    options: [
      { id: 'A', text: "Video Intelligence API object tracking, following products across frames of shelf footage" },
      { id: 'B', text: "Gemini on Agent Platform, comparing each photo with the planogram text and explaining gaps" },
      { id: 'C', text: "Vision API label detection, returning the generic object categories found in each photo" },
      { id: 'D', text: "Vision API text detection, reading the printed price tags and product names against the planogram" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The task needs reasoning across two inputs, an image and a written planogram, followed by a natural-language explanation, which is what a multimodal foundation model such as Gemini does. Pre-trained Vision features return fixed outputs: label detection gives generic categories such as 'food' or 'shelf' with no comparison against a plan, and text detection reads printed words but cannot judge whether a layout is correct. Video Intelligence object tracking works on video footage and also produces detections rather than an explained compliance verdict.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models",
    tags: ["Gemini", "Vision API", "Multimodal"]
  },
  {
    id: "gcp-cdl-274",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Keying supplier invoices by hand",
    scenario: "A distributor's finance clerks retype supplier name, invoice number, line items and totals from 8,000 PDF and scanned invoices each month into the ERP system. The CFO wants that data captured automatically, using a managed service rather than a model the company trains itself.",
    question: "Which Google Cloud service should the CFO's team adopt?",
    options: [
      { id: 'A', text: "Document AI with its invoice parser, which returns structured fields from each invoice" },
      { id: 'B', text: "Speech-to-Text, which transcribes clerks' dictated invoice details into written form" },
      { id: 'C', text: "Natural Language API, which identifies people, places and organisations named in text" },
      { id: 'D', text: "Cloud Translation API, which can translate whole PDF documents while keeping their layout" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document AI offers pre-trained processors, including an invoice parser, that read PDFs and scans and return structured fields such as supplier, invoice number, line items and totals, ready to load into an ERP, with no model training by the customer. Translation can process PDF documents but outputs translated documents, not extracted fields. Entity analysis finds named entities in plain text but does not understand invoice layouts or line items. Dictating details into Speech-to-Text still depends on clerks reading every invoice.",
    referenceUrl: "https://docs.cloud.google.com/document-ai/docs/overview",
    tags: ["Document AI", "Invoice processing", "Pre-trained APIs"]
  },
  {
    id: "gcp-cdl-275",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Audio editions for visually impaired readers",
    scenario: "A regional newspaper wants every published article to also be available as a listening version with a natural-sounding voice, to serve visually impaired subscribers and commuters. It publishes 150 articles a day and has no recording studio.",
    question: "Which Google Cloud API meets this need?",
    options: [
      { id: 'A', text: "Text-to-Speech, which synthesises lifelike spoken audio from text" },
      { id: 'B', text: "Natural Language API, which pulls out key entities from audio transcripts" },
      { id: 'C', text: "Speech-to-Text, which produces written transcripts from recorded voice" },
      { id: 'D', text: "Cloud Translation, which renders each article in several languages" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Text-to-Speech converts written text into natural-sounding speech using pre-trained voices, so the newspaper can generate an audio file for every article automatically with no studio or voice actors. Speech-to-Text performs the reverse conversion, from audio to text. The Natural Language API analyses text but produces no audio. Cloud Translation changes the language of the text, which does not create an audio edition.",
    referenceUrl: "https://docs.cloud.google.com/text-to-speech/docs",
    tags: ["Text-to-Speech", "Accessibility", "Pre-trained APIs"]
  }
];

export default GCP_CDL_QUESTIONS_11;
