export const AZURE_AI_APPS_AGENTS_FLASHCARDS_7 = [
  {
    id: 'azure-ai-apps-agents-fc-151',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Coherence vs Fluency evaluators: what does each one judge?',
    hint: 'Ideas vs sentences.',
    back: '<strong>Coherence</strong>: whether the response\'s ideas are <strong>logically connected and well organized</strong>, so the reader can follow the argument. <strong>Fluency</strong>: <strong>language quality</strong> such as grammar, vocabulary, sentence structure and readability. Both are 1-5 LLM-judge scores that need only the query and response (no context, no ground truth), so they suit open-ended generation such as recaps or drafts.',
    tags: ['Evaluation', 'Coherence', 'Fluency']
  },
  {
    id: 'azure-ai-apps-agents-fc-152',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does the groundedness evaluator work for agents that retrieve through tools?',
    hint: 'Context can come from the tool results.',
    back: 'In <strong>agent response mode</strong>, pass <strong>query and response as message arrays</strong> that include tool calls and tool results, plus <strong>tool_definitions</strong>. The evaluator extracts grounding context from the tool outputs, so a separate context field is <strong>optional</strong>. Built-in tools with limited evaluator support, such as Azure AI Search or web search, are the exception, so check support before relying on the score.',
    tags: ['Groundedness', 'Agent evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-153',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does Microsoft Agent Framework connect code-first agents to a Foundry project?',
    hint: 'One chat client class.',
    back: 'Through <strong>FoundryChatClient</strong> in the Agent Framework Foundry package, which depends on the <strong>Foundry SDK</strong> and calls the <strong>Responses API on the project endpoint</strong>, giving agents Foundry models and tools without hand-built endpoint or client wiring. The same code can later be packaged and deployed as a <strong>hosted agent</strong>.',
    tags: ['Agent Framework', 'Foundry SDK']
  },
  {
    id: 'azure-ai-apps-agents-fc-154',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Retrieval evaluator vs Document Retrieval evaluator: which needs labels?',
    hint: 'One asks a judge, one reads your qrels.',
    back: '<strong>Retrieval</strong>: an LLM judge scores (1-5) how relevant the retrieved context is to the query; inputs are query and context, <strong>no ground truth</strong> needed. <strong>Document Retrieval</strong>: compares the documents actually returned with <strong>human relevance labels</strong> (retrieval_ground_truth), computes ranking metrics mathematically, needs <strong>no judge</strong>, and suits parameter sweeps over chunk size, top-k and search mode.',
    tags: ['Evaluation', 'Retrieval']
  },
  {
    id: 'azure-ai-apps-agents-fc-155',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which metrics does the Document Retrieval evaluator report?',
    hint: 'Five search-quality measures.',
    back: '<strong>Fidelity</strong> (how many known-good documents were returned out of all known-good ones), <strong>NDCG</strong> (ranking versus the ideal order), <strong>XDCG</strong> (quality of the top-k regardless of the rest of the index), <strong>Max Relevance N</strong> (best label in the top-k) and <strong>Holes</strong> (returned documents with no relevance label, a data-sanity check). Label ranges are configurable through ground_truth_label_min and ground_truth_label_max.',
    tags: ['Evaluation', 'Document Retrieval']
  },
  {
    id: 'azure-ai-apps-agents-fc-156',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How should a JSONL evaluation row supply retrieved context when several chunks were used?',
    hint: 'One field, one string.',
    back: 'Each row holds the fields your data mapping references, typically <strong>query</strong>, <strong>response</strong> and <strong>context</strong> (plus <strong>ground_truth</strong> for recall or similarity metrics). <strong>context is a plain string</strong>: concatenate multiple chunks with a separator such as a blank line. For agent runs, context can be omitted when the response includes tool calls, because evaluators extract it from the tool results.',
    tags: ['Evaluation datasets', 'JSONL']
  },
  {
    id: 'azure-ai-apps-agents-fc-157',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Similarity evaluator vs F1, BLEU, ROUGE, GLEU and METEOR: when do you prefer each?',
    hint: 'Meaning vs matching words.',
    back: '<strong>Similarity</strong>: an LLM judge rates semantic equivalence to the ground truth, so paraphrases score well, at the cost of judge tokens and some variance. <strong>F1, BLEU, ROUGE, GLEU, METEOR</strong>: deterministic overlap metrics, free and repeatable, ideal for CI regression gates and for translation or summarization with references, but they penalize correct answers worded differently.',
    tags: ['Evaluation', 'Textual similarity']
  },
  {
    id: 'azure-ai-apps-agents-fc-158',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the Quality Grader evaluator check in a single pass?',
    hint: 'Several dimensions, one evaluator.',
    back: 'A turn-level, pass or fail quality check (preview) that covers <strong>relevance</strong>, <strong>abstention</strong> (declining when it cannot or should not answer) and <strong>answer completeness</strong>, and, when context is supplied, <strong>groundedness</strong> and <strong>context coverage</strong>. It is the same grader Copilot Studio agent evaluation uses, handy when you want one broad quality signal instead of configuring several evaluators.',
    tags: ['Evaluation', 'Quality Grader']
  },
  {
    id: 'azure-ai-apps-agents-fc-159',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Responses API on /openai/v1 vs on the project endpoint: what can only the project endpoint give you?',
    hint: 'Same API shape, different reach.',
    back: 'Both accept Responses API calls. The <strong>/openai/v1</strong> endpoint serves models (chat, embeddings, image generation) with maximum OpenAI compatibility and supports keys. The <strong>project endpoint</strong>, reached with get_openai_client() and Entra ID, adds <strong>agents</strong>, <strong>evaluations</strong>, fine-tuning jobs and <strong>Foundry-exclusive platform tools</strong> such as memory, SharePoint, Work IQ and Fabric IQ.',
    tags: ['Responses API', 'Endpoints']
  },
  {
    id: 'azure-ai-apps-agents-fc-160',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Name five kinds of flaw the code vulnerability evaluator detects.',
    hint: 'Classic secure-coding findings.',
    back: 'Examples include <strong>SQL injection</strong>, <strong>code injection</strong> (eval or exec of input), <strong>path injection</strong> and tar-slip, <strong>hard-coded credentials</strong>, <strong>weak cryptographic algorithms</strong> such as MD5 or DES, reflected XSS, full SSRF, Flask debug mode and clear-text logging of secrets. It covers Python, Java, C++, C#, Go, JavaScript and SQL, and fails a row if any vulnerability is found.',
    tags: ['Safety evaluation', 'Code vulnerability']
  },
  {
    id: 'azure-ai-apps-agents-fc-161',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can you evaluate real agent conversations without re-running the agent?',
    hint: 'Evaluate what already happened.',
    back: 'Use an <strong>agent response data source</strong> in a cloud evaluation: the run retrieves stored agent responses (for example by response ID) instead of invoking the agent again, and evaluators read them through {{sample.output_items}}. This avoids repeating side effects such as bookings or tickets, and it measures behavior users actually saw rather than a fresh, possibly different run.',
    tags: ['Cloud evaluation', 'Agent evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-162',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the protected material evaluator check, and which service powers it?',
    hint: 'Copyright, not privacy.',
    back: 'Whether a response contains <strong>copyrighted text</strong> such as song lyrics, recipes or articles. It uses the <strong>Azure AI Content Safety protected material detection for text</strong> and returns a pass or fail per row. It is distinct from personal-data checks: for PII, use PII detection or the agent-only sensitive data leakage evaluator.',
    tags: ['Safety evaluation', 'Protected material']
  },
  {
    id: 'azure-ai-apps-agents-fc-163',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Prohibited actions and sensitive data leakage evaluators: what do they need, and where can they run?',
    hint: 'Agents only, tool calls required.',
    back: 'Both are preview, <strong>agent-only</strong> safety evaluators that need <strong>query, response and tool_calls</strong>. <strong>Prohibited actions</strong> checks tool use against a user-verified policy of disallowed actions; <strong>sensitive data leakage</strong> checks for exposure of financial, personal or health data. They run against <strong>agent targets</strong> only, not dataset-only or model evaluations.',
    tags: ['Safety evaluation', 'Agents']
  },
  {
    id: 'azure-ai-apps-agents-fc-164',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can you build an evaluation dataset before any production traffic exists?',
    hint: 'Let a model draft, let experts check.',
    back: 'Use Foundry\'s <strong>synthetic data generation</strong> (or the evaluation SDK\'s simulator) to create question-and-answer pairs or multi-turn simulation seeds from a reference document, agent instructions or an index, then have subject-matter experts <strong>review and correct a sample</strong> and add ground truth where metrics need it. For safety, the adversarial simulator and the AI Red Teaming Agent generate attack prompts. Replace synthetic items with real traffic samples once they exist.',
    tags: ['Synthetic data', 'Evaluation datasets']
  },
  {
    id: 'azure-ai-apps-agents-fc-165',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'In a Foundry cloud evaluation, what do {{item.x}}, {{sample.output_text}} and {{sample.output_items}} refer to?',
    hint: 'Dataset row vs generated text vs generated structure.',
    back: '<strong>{{item.field}}</strong>: a column in your uploaded dataset, such as query or ground_truth. <strong>{{sample.output_text}}</strong>: the plain-text reply generated by the model or agent target during the run; fine for coherence or violence. <strong>{{sample.output_items}}</strong>: the target\'s <strong>structured output including tool calls and results</strong>, required by tool call accuracy, tool selection and task adherence.',
    tags: ['Cloud evaluation', 'Data mapping']
  },
  {
    id: 'azure-ai-apps-agents-fc-166',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Dataset evaluation vs target evaluation: when does the evaluation generate new responses?',
    hint: 'Score what you have, or produce and score.',
    back: 'A <strong>dataset evaluation</strong> scores responses already present in your data, such as logs or an earlier run, so nothing is regenerated. A <strong>target evaluation</strong> sends each query to a <strong>model deployment or agent target</strong> during the run and scores the fresh output via {{sample.output_text}} or {{sample.output_items}}, which is how you compare candidate models or agent versions on the same inputs.',
    tags: ['Cloud evaluation', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-167',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Foundry SDK: what is the project client for, and what is the OpenAI-compatible client for?',
    hint: 'Foundry-native vs OpenAI-shaped.',
    back: '<strong>Project client</strong> (AIProjectClient): Foundry-native operations with no OpenAI equivalent, such as listing and reading <strong>connections</strong>, project properties, agent versions and enabling tracing. <strong>OpenAI-compatible client</strong> (from <strong>get_openai_client()</strong>): Responses API calls, running agents, conversations, evaluations and fine-tuning. Most apps use both against the same project endpoint.',
    tags: ['Foundry SDK', 'Clients']
  },
  {
    id: 'azure-ai-apps-agents-fc-168',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Foundry SDK, OpenAI SDK, Anthropic SDK, Foundry Tools SDKs, Agent Framework: which do you pick for what?',
    hint: 'Five tools, five jobs.',
    back: '<strong>Foundry SDK</strong>: agents, evaluations, connections and platform tools through the project endpoint. <strong>OpenAI SDK</strong> (/openai/v1): maximum OpenAI compatibility, lowest latency, embeddings. <strong>Anthropic SDK</strong> (/anthropic): Claude models deployed in Foundry. <strong>Foundry Tools SDKs</strong>: prebuilt Speech, Vision, Language, Translator, Content Safety. <strong>Agent Framework</strong>: code-first agents and multi-agent orchestration, including hosted agents.',
    tags: ['SDK selection', 'Foundry SDK']
  },
  {
    id: 'azure-ai-apps-agents-fc-169',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What do the Foundry project endpoint and the OpenAI v1 endpoint look like?',
    hint: 'services.ai vs openai.',
    back: 'Project endpoint: <strong>https://{resource}.services.ai.azure.com/api/projects/{project}</strong>, used by the Foundry SDK for models, agents, evaluations and connections. OpenAI v1 endpoint: <strong>https://{resource}.openai.azure.com/openai/v1</strong>, used by the OpenAI SDK with no api-version parameter. A Foundry resource provides both; a plain Azure OpenAI resource provides only the v1 endpoint.',
    tags: ['Endpoints', 'Foundry SDK']
  },
  {
    id: 'azure-ai-apps-agents-fc-170',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Where do API keys work in Foundry, and where must you use Microsoft Entra ID?',
    hint: 'Inference yes, platform no.',
    back: 'Keys work on the <strong>/openai/v1</strong> inference endpoint (and on many Foundry Tools endpoints). The <strong>project endpoint</strong> used for agents, evaluations, connections and platform tools expects <strong>Microsoft Entra ID</strong> tokens, so use a token credential and RBAC. Keyless is the recommended default everywhere: keys cannot be scoped per caller, are hard to rotate and leave no per-identity audit trail.',
    tags: ['Authentication', 'Keyless']
  },
  {
    id: 'azure-ai-apps-agents-fc-171',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does DefaultAzureCredential choose an identity, and how do you make it use a user-assigned managed identity?',
    hint: 'A chain, plus one environment variable.',
    back: 'It tries sources in order: <strong>environment variables</strong> (service principal), <strong>workload identity</strong>, <strong>managed identity</strong>, then developer tools such as <strong>VS Code, Azure CLI, Azure PowerShell and azd</strong>, and uses the first that returns a token. On a resource with several identities, the managed identity step uses the system-assigned one unless you set <strong>AZURE_CLIENT_ID</strong> (or pass the managed identity client ID) for the user-assigned identity.',
    tags: ['DefaultAzureCredential', 'Managed identity']
  },
  {
    id: 'azure-ai-apps-agents-fc-172',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When you wire the OpenAI client to Entra ID yourself, which token scope do current Foundry samples request?',
    hint: 'A bearer token provider with one scope string.',
    back: 'Build a token provider with <strong>get_bearer_token_provider(DefaultAzureCredential(), "https://ai.azure.com/.default")</strong> and pass it to the OpenAI client pointed at the v1 endpoint. Older Azure OpenAI samples used the <strong>https://cognitiveservices.azure.com/.default</strong> scope. The token proves identity; the caller still needs a data-plane role such as Foundry User or Cognitive Services OpenAI User.',
    tags: ['Authentication', 'OpenAI SDK']
  },
  {
    id: 'azure-ai-apps-agents-fc-173',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'azure-ai-projects 2.x vs 1.x: which portal experience does each target?',
    hint: 'New Foundry vs classic.',
    back: '<strong>2.x</strong> targets the <strong>new Foundry</strong> experience: agents are versioned definitions run through the Responses API and conversations via get_openai_client(), with evaluations, hosted agents and toolboxes on stable clients. <strong>1.x</strong> targets <strong>Foundry (classic)</strong>, where agents used the older threads, messages and runs model. Samples and code for one generally do not run unchanged on the other.',
    tags: ['Foundry SDK', 'SDK versions']
  },
  {
    id: 'azure-ai-apps-agents-fc-174',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can a low-code business process call a Foundry agent without custom hosting?',
    hint: 'Triggers and connectors meet reasoning.',
    back: 'Use <strong>Azure Logic Apps</strong>: a workflow can call and orchestrate <strong>Foundry agents as steps</strong>, combining built-in triggers and connectors (mailboxes, SharePoint, Teams, APIs, MCP servers) with the agent\'s reasoning. It suits business-process automation that mixes deterministic steps with AI judgment and is a documented landing zone for teams leaving the retiring Foundry visual workflow designer.',
    tags: ['Logic Apps', 'Connectors']
  },
  {
    id: 'azure-ai-apps-agents-fc-175',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What should you consider when picking the judge model for AI-assisted evaluators?',
    hint: 'Capability, cost, independence.',
    back: 'Use a model <strong>at least as capable</strong> as the system under test for nuanced judgments; Foundry recommends <strong>gpt-5-mini</strong> as a balance of reasoning quality and cost, and both reasoning and non-reasoning models are supported. Keep the judge <strong>fixed across runs</strong> so scores stay comparable, prefer a different model from the one being judged to reduce self-preference, and spot-check its reasons against human labels.',
    tags: ['Evaluation', 'Judge models']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_7;
